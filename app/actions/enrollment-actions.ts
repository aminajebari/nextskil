"use server"

import { createClient } from "@/lib/supabase/server"

export async function checkEnrollmentAuth() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return {
      isAuthenticated: false,
      hasPaid: false,
      message: "Please sign in to enroll in courses",
      redirectTo: "/auth/signin",
    }
  }

  const hasPaid = user.user_metadata?.has_paid === true

  if (!hasPaid) {
    return {
      isAuthenticated: true,
      hasPaid: false,
      message: "Please complete payment to enroll",
      redirectTo: "/payment",
    }
  }

  return {
    isAuthenticated: true,
    hasPaid: true,
    message: "Ready to enroll",
    redirectTo: null,
  }
}
