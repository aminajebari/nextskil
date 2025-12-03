import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const protectedPaths = ["/dashboard", "/payment"]
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  if (user) {
    const hasPaid = user.user_metadata?.has_paid === true
    const isPaymentPage = request.nextUrl.pathname.startsWith("/payment")
    const isDashboard = request.nextUrl.pathname.startsWith("/dashboard")

    // If user hasn't paid and tries to access dashboard, force them to payment
    if (!hasPaid && isDashboard) {
      const url = request.nextUrl.clone()
      url.pathname = "/payment"
      return NextResponse.redirect(url)
    }

    // If user HAS paid and tries to access payment page, send them to dashboard
    if (hasPaid && isPaymentPage) {
      const url = request.nextUrl.clone()
      url.pathname = "/dashboard"
      return NextResponse.redirect(url)
    }
  }

  if (!user && !request.nextUrl.pathname.startsWith("/auth") && isProtectedPath) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/signin"
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
