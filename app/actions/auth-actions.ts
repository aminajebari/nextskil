"use server"

import { createClient as createServerClient } from "@/lib/supabase/server"

export async function signInUser(email: string, password: string) {
  try {
    const supabase = await createServerClient()

    // Simplified to direct signin without email verification
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return { success: false, error: message }
  }
}
