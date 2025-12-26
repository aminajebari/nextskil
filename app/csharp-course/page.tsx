import { SubscriptionGate } from "@/components/subscription-gate"
import CSharpCoursePlatform from "@/components/csharp-course-platform"

export default function CSharpCoursePage() {
  return (
    <SubscriptionGate
      title="Unlock C# Mastery"
      description="Access the full interactive C# Professional Course with projects and certification."
    >
      <CSharpCoursePlatform />
    </SubscriptionGate>
  )
}
