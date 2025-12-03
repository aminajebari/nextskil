"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2 } from 'lucide-react'

interface Lesson {
  title: string
  description: string
  content: React.ReactNode
}

interface CPPLessonContentProps {
  lesson: Lesson
  onComplete: () => void
  isComplete: boolean
}

export default function CPPLessonContent({ lesson, onComplete, isComplete }: CPPLessonContentProps) {
  return (
    <div className="space-y-6">
      <ScrollArea className="h-[600px] pr-4">
        <div className="prose prose-sm dark:prose-invert max-w-none">
          {lesson.content}
        </div>
      </ScrollArea>

      <div className="flex justify-end pt-4 border-t">
        <Button
          onClick={onComplete}
          disabled={isComplete}
          className={isComplete ? "bg-success hover:bg-success" : ""}
        >
          {isComplete ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Lesson Completed
            </>
          ) : (
            "Mark as Complete"
          )}
        </Button>
      </div>
    </div>
  )
}
