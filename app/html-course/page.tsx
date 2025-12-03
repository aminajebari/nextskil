import HTMLCoursePlatform from "@/components/html-course-platform"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function HTMLCoursePage() {
  return (
    <SubscriptionGate title="Unlock HTML Mastery" description="Access the full interactive HTML course and exams.">
      <HTMLCoursePlatform />
    </SubscriptionGate>
  )
}
