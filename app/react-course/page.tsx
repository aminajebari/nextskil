import ReactCoursePlatform from "@/components/react-course-platform"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function ReactCoursePage() {
  return (
    <SubscriptionGate title="Unlock React Course" description="Access the full interactive React course and exams.">
      <ReactCoursePlatform />
    </SubscriptionGate>
  )
}
