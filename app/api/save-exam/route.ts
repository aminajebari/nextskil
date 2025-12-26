import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    const { userId, courseId, courseName, score, passed } = await request.json()

    console.log("[v0 API] Received request:", { userId, courseId, score, passed })
    console.log("[v0 API] Environment check:", {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      urlValue: process.env.NEXT_PUBLIC_SUPABASE_URL,
    })

    // Check if required environment variables exist
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.error("[v0 API] NEXT_PUBLIC_SUPABASE_URL is not set!")
      return NextResponse.json({ success: false, error: "Supabase URL not configured" }, { status: 500 })
    }

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[v0 API] SUPABASE_SERVICE_ROLE_KEY is not set!")
      return NextResponse.json({ success: false, error: "Service role key not configured" }, { status: 500 })
    }

    // Create admin client with service role key
    const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })

    console.log("[v0 API] Admin client created successfully")

    // First, ensure profile exists
    console.log("[v0 API] Checking if profile exists for user:", userId)
    const { data: profile, error: profileFetchError } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle()

    console.log("[v0 API] Profile check result:", { profile, profileFetchError })

    if (!profile && !profileFetchError) {
      console.log("[v0 API] Profile doesn't exist, creating one...")

      // Get user data from auth
      const { data: userData, error: userError } = await supabaseAdmin.auth.admin.getUserById(userId)

      if (userError) {
        console.error("[v0 API] Error fetching user from auth:", userError)
        return NextResponse.json(
          { success: false, error: `Failed to fetch user: ${userError.message}` },
          { status: 500 },
        )
      }

      console.log("[v0 API] User data fetched:", {
        email: userData.user?.email,
        metadata: userData.user?.user_metadata,
      })

      // Create profile with user data
      const { error: profileError } = await supabaseAdmin.from("profiles").insert({
        id: userId,
        full_name: userData.user?.user_metadata?.full_name || userData.user?.email?.split("@")[0] || "Student",
        email: userData.user?.email,
      })

      if (profileError) {
        console.error("[v0 API] Error creating profile:", profileError)
        return NextResponse.json(
          { success: false, error: `Failed to create profile: ${profileError.message}` },
          { status: 500 },
        )
      }

      console.log("[v0 API] Profile created successfully")
    }

    // Determine course type based on course ID
    const courseType =
      courseId.includes("html") ||
      courseId.includes("css") ||
      courseId.includes("javascript") ||
      courseId.includes("cpp") ||
      courseId.includes("java") ||
      courseId.includes("python") ||
      courseId.includes("csharp") ||
      courseId.includes("react")
        ? "technical"
        : "language"

    console.log("[v0 API] Saving exam results to database...")
    console.log("[v0 API] Data to save:", {
      user_id: userId,
      course_id: courseId,
      course_name: courseName,
      course_type: courseType,
      exam_passed: passed,
      exam_score: score,
    })

    // Save or update exam results
    const { data: progressData, error: upsertError } = await supabaseAdmin
      .from("user_course_progress")
      .upsert(
        {
          user_id: userId,
          course_id: courseId,
          course_name: courseName,
          course_type: courseType,
          exam_taken: true,
          exam_passed: passed,
          exam_score: score,
          certificate_earned: passed,
          certificate_issued_at: passed ? new Date().toISOString() : null,
          total_lessons: 10,
          completed_lessons: passed ? 10 : 0,
          progress_percentage: passed ? 100 : 0,
          last_accessed_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id,course_id",
        },
      )
      .select()

    if (upsertError) {
      console.error("[v0 API] Database upsert error:", upsertError)
      return NextResponse.json({ success: false, error: `Database error: ${upsertError.message}` }, { status: 500 })
    }

    console.log("[v0 API] Exam results saved successfully:", progressData)

    return NextResponse.json({ success: true, data: progressData })
  } catch (error: any) {
    console.error("[v0 API] Unexpected error:", error)
    return NextResponse.json({ success: false, error: `Server error: ${error.message}` }, { status: 500 })
  }
}
