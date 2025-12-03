import { SubscriptionGate } from "@/components/subscription-gate"
import JavaScriptCoursePlatform from "@/components/javascript-course-platform"

export default function JavaScriptCoursePage() {
  return (
    <SubscriptionGate>
      <JavaScriptCoursePlatform />
    </SubscriptionGate>
  )
}
