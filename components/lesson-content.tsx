"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LessonContentProps {
  lesson: {
    title: string
    description: string
    content: React.ReactNode
  }
  onComplete: () => void
  isComplete: boolean
}

export default function LessonContent({ lesson, onComplete, isComplete }: LessonContentProps) {
  return (
    <div className="space-y-6">
      <ScrollArea className="h-[calc(100vh-400px)] pr-4">
        <div className="prose prose-sm dark:prose-invert max-w-none">{lesson.content}</div>
      </ScrollArea>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm text-muted-foreground">
          {isComplete
            ? "Lesson completed! Continue to the next lesson."
            : "Complete this lesson to track your progress."}
        </div>
        <Button onClick={onComplete} disabled={isComplete} className="gap-2">
          {isComplete ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Completed
            </>
          ) : (
            "Mark as Complete"
          )}
        </Button>
      </div>
    </div>
  )
}

export { LessonContent }
