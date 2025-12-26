import { createAdminClient } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const admin = createAdminClient()

    // Get the user by email
    const {
      data: { users },
      error: getUserError,
    } = await admin.auth.admin.listUsers()

    if (getUserError) {
      console.error("[v0] Error listing users:", getUserError)
      return NextResponse.json({ error: "Failed to verify email" }, { status: 500 })
    }

    const user = users?.find((u) => u.email === email.toLowerCase())

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const { error: updateError } = await admin.auth.admin.updateUserById(user.id, { email_confirm: true })

    if (updateError) {
      console.error("[v0] Error updating user:", updateError)
      return NextResponse.json({ error: "Failed to verify email" }, { status: 500 })
    }

    console.log("[v0] Email verified for user:", email)
    return NextResponse.json({
      success: true,
      message: "Email verified successfully! You can now sign in.",
    })
  } catch (error) {
    console.error("[v0] Email verification error:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
