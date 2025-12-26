import { createClient } from "@/lib/supabase/client"

export interface CourseProgress {
  courseId: string
  courseType: "language" | "technical"
  totalLessons: number
  completedLessons: number
  progressPercentage: number
  timeSpentMinutes: number
  examTaken: boolean
  examPassed: boolean
  examScore: number
  certificateEarned: boolean
}

export interface LessonProgress {
  courseId: string
  moduleId: string
  lessonId: string
  completed: boolean
  completedAt?: string
  timeSpentMinutes: number
}

export async function initializeCourseProgress(
  userId: string,
  courseId: string,
  courseType: "language" | "technical",
  totalLessons: number,
) {
  const supabase = createClient()

  const { data: existing } = await supabase
    .from("user_course_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single()

  if (existing) {
    return existing
  }

  const { data, error } = await supabase
    .from("user_course_progress")
    .insert({
      user_id: userId,
      course_id: courseId,
      course_type: courseType,
      total_lessons: totalLessons,
    })
    .select()
    .single()

  if (error) {
    console.error("[v0] Error initializing course progress:", error)
    return null
  }

  return data
}

export async function markLessonComplete(
  userId: string,
  courseId: string,
  moduleId: string,
  lessonId: string,
  timeSpent = 0,
) {
  const supabase = createClient()

  // Update or insert lesson progress
  const { error: lessonError } = await supabase.from("user_lesson_progress").upsert(
    {
      user_id: userId,
      course_id: courseId,
      module_id: moduleId,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString(),
      time_spent_minutes: timeSpent,
      last_accessed_at: new Date().toISOString(),
    },
    {
      onConflict: "user_id,course_id,module_id,lesson_id",
    },
  )

  if (lessonError) {
    console.error("[v0] Error marking lesson complete:", lessonError)
    return false
  }

  // Update course progress
  const { data: completedLessons } = await supabase
    .from("user_lesson_progress")
    .select("id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .eq("completed", true)

  const completedCount = completedLessons?.length || 0

  const { data: courseProgress } = await supabase
    .from("user_course_progress")
    .select("total_lessons, time_spent_minutes")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single()

  if (courseProgress) {
    const progressPercentage = Math.round((completedCount / courseProgress.total_lessons) * 100)

    await supabase
      .from("user_course_progress")
      .update({
        completed_lessons: completedCount,
        progress_percentage: progressPercentage,
        time_spent_minutes: (courseProgress.time_spent_minutes || 0) + timeSpent,
        last_accessed_at: new Date().toISOString(),
      })
      .eq("user_id", userId)
      .eq("course_id", courseId)
  }

  return true
}

export async function recordExamResult(userId: string, courseId: string, score: number, passed: boolean) {
  const supabase = createClient()

  const updateData: any = {
    exam_taken: true,
    exam_passed: passed,
    exam_score: score,
  }

  // If passed, mark certificate as earned
  if (passed) {
    updateData.certificate_earned = true
    updateData.certificate_issued_at = new Date().toISOString()
  }

  const { error } = await supabase
    .from("user_course_progress")
    .update(updateData)
    .eq("user_id", userId)
    .eq("course_id", courseId)

  if (error) {
    console.error("[v0] Error recording exam result:", error)
    return false
  }

  return true
}

export async function getCourseProgress(userId: string, courseId: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("user_course_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single()

  if (error || !data) {
    return null
  }

  return data
}

export async function getCompletedLessons(userId: string, courseId: string) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("user_lesson_progress")
    .select("module_id, lesson_id")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .eq("completed", true)

  if (error || !data) {
    return []
  }

  return data.map((l) => `${l.module_id}-${l.lesson_id}`)
}

export async function getDashboardStats(userId: string) {
  const supabase = createClient()

  const { data: courses } = await supabase.from("user_course_progress").select("*").eq("user_id", userId)

  if (!courses) {
    return {
      totalCourses: 0,
      certificates: 0,
      totalTimeMinutes: 0,
      averageProgress: 0,
    }
  }

  const totalCourses = courses.length
  const certificates = courses.filter((c) => c.certificate_earned).length
  const totalTimeMinutes = courses.reduce((sum, c) => sum + (c.time_spent_minutes || 0), 0)
  const averageProgress =
    courses.length > 0
      ? Math.round(courses.reduce((sum, c) => sum + (c.progress_percentage || 0), 0) / courses.length)
      : 0

  return {
    totalCourses,
    certificates,
    totalTimeMinutes,
    averageProgress,
  }
}

export async function hasCertificate(userId: string, courseId: string) {
  const supabase = createClient()

  const { data } = await supabase
    .from("user_course_progress")
    .select("certificate_earned, exam_passed")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .single()

  return data?.certificate_earned && data?.exam_passed
}
