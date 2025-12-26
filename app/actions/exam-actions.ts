"use server"

import { createClient } from "@/lib/supabase/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { revalidatePath } from "next/cache"

export async function saveExamResults(courseId: string, score: number, passed: boolean) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("[v0 Server] Auth error:", authError)
      return { success: false, error: "Not authenticated" }
    }

    console.log("[v0 Server] User authenticated:", user.id)
    console.log("[v0 Server] Saving exam for course:", courseId)

    const adminClient = createAdminClient()

    // Check if profile exists
    const { data: existingProfile, error: profileCheckError } = await adminClient
      .from("profiles")
      .select("id")
      .eq("id", user.id)
      .maybeSingle()

    console.log("[v0 Server] Profile check result:", { existingProfile, profileCheckError })

    // Create profile if it doesn't exist
    if (!existingProfile) {
      const fullName = user.user_metadata?.full_name || user.email?.split("@")[0] || "User"

      const { error: profileError } = await adminClient.from("profiles").insert({
        id: user.id,
        full_name: fullName,
        email: user.email,
        birth_date: user.user_metadata?.birth_date || null,
        gender: user.user_metadata?.gender || null,
        is_student: user.user_metadata?.is_student || false,
        school: user.user_metadata?.school || null,
      })

      if (profileError) {
        console.error("[v0 Server] Failed to create profile:", profileError)
        return { success: false, error: `Failed to create profile: ${profileError.message}` }
      }

      console.log("[v0 Server] Profile created successfully")
    }

    // Check if course progress exists
    const { data: existingProgress, error: progressCheckError } = await adminClient
      .from("user_course_progress")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle()

    console.log("[v0 Server] Progress check result:", { existingProgress, progressCheckError })

    const courseType =
      courseId.includes("beginner") || courseId.includes("intermediate") || courseId.includes("master")
        ? "technical"
        : "language"

    if (existingProgress) {
      // Update existing progress
      const { error: updateError } = await adminClient
        .from("user_course_progress")
        .update({
          exam_taken: true,
          exam_passed: passed,
          exam_score: score,
          certificate_earned: passed,
          certificate_issued_at: passed ? new Date().toISOString() : null,
          last_accessed_at: new Date().toISOString(),
        })
        .eq("id", existingProgress.id)

      if (updateError) {
        console.error("[v0 Server] Failed to update progress:", updateError)
        return { success: false, error: `Failed to update progress: ${updateError.message}` }
      }

      console.log("[v0 Server] Progress updated successfully")
    } else {
      // Insert new progress
      const { error: insertError } = await adminClient.from("user_course_progress").insert({
        user_id: user.id,
        course_id: courseId,
        course_type: courseType,
        course_name: courseId,
        total_lessons: 10,
        completed_lessons: passed ? 10 : 0,
        progress_percentage: passed ? 100 : 0,
        exam_taken: true,
        exam_passed: passed,
        exam_score: score,
        certificate_earned: passed,
        certificate_issued_at: passed ? new Date().toISOString() : null,
      })

      if (insertError) {
        console.error("[v0 Server] Failed to insert progress:", insertError)
        return { success: false, error: `Failed to insert progress: ${insertError.message}` }
      }

      console.log("[v0 Server] Progress inserted successfully")
    }

    // Revalidate pages to show updated data
    revalidatePath("/dashboard")
    revalidatePath("/certificates")
    revalidatePath(`/certificates/${courseId}`)

    console.log("[v0 Server] Exam results saved successfully")
    return { success: true }
  } catch (error: any) {
    console.error("[v0 Server] Unexpected error:", error)
    return { success: false, error: error.message || "Unexpected error occurred" }
  }
}
