import JavaCoursePlatform from "@/components/java-course-platform"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function JavaCoursePage() {
  return (
    <SubscriptionGate title="Unlock Java Course" description="Access the full interactive Java course and exams.">
      <JavaCoursePlatform />
    </SubscriptionGate>
  )
}
