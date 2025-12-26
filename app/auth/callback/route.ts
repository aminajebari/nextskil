import { createServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const origin = requestUrl.origin

  if (code) {
    const supabase = await createServerClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("[v0] Auth callback error:", error)
      return NextResponse.redirect(`${origin}/auth/signin?error=verification_failed`)
    }

    if (data.user) {
      const { data: existingProfile, error: profileCheckError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", data.user.id)
        .maybeSingle()

      if (profileCheckError) {
        console.error("[v0] Profile check error:", profileCheckError)
      }

      if (!existingProfile) {
        const fullName = data.user.user_metadata?.full_name || data.user.email?.split("@")[0] || "User"

        const { error: insertError } = await supabase.from("profiles").insert({
          id: data.user.id,
          full_name: fullName,
          email: data.user.email,
          birth_date: data.user.user_metadata?.birth_date || null,
          gender: data.user.user_metadata?.gender || null,
          is_student: data.user.user_metadata?.is_student || false,
          school: data.user.user_metadata?.school || null,
        })

        if (insertError) {
          console.error("[v0] Profile creation error:", insertError)
        } else {
          console.log("[v0] Profile created for user:", data.user.id)
        }
      }
    }

    return NextResponse.redirect(`${origin}/payment`)
  }

  return NextResponse.redirect(`${origin}/auth/signin`)
}
