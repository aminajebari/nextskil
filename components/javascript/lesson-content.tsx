"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, Lightbulb } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LessonContentProps {
  lesson: {
    title: string
    description: string
    content: React.ReactNode
  }
  moduleTitle: string
  onComplete: () => void
  isComplete: boolean
  lessonNumber: number
  totalLessons: number
}

export default function LessonContent({
  lesson,
  moduleTitle,
  onComplete,
  isComplete,
  lessonNumber,
  totalLessons,
}: LessonContentProps) {
  const progress = (lessonNumber / totalLessons) * 100

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue">Module: {moduleTitle}</Badge>
              <Badge variant="blueOutline">
                Lesson {lessonNumber}/{totalLessons}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold text-foreground">{lesson.title}</h1>
            <p className="text-muted-foreground mt-2">{lesson.description}</p>
          </div>
          {isComplete && (
            <div className="text-green-600 text-center">
              <CheckCircle2 className="h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold text-sm">Completed</p>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#1e3a8a] to-[#dc2626] h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-6 pb-4">
          {lesson.content}

          <Card className="mt-8 border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <Lightbulb className="h-5 w-5" />
                Tips & Tricks
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <p>• Practice by writing code yourself - don't just read examples</p>
              <p>• Use the browser console to test code snippets</p>
              <p>• Try to modify the examples to understand them better</p>
              <p>• Come back to this lesson if you need a refresher</p>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>

      <div className="border-t pt-6 space-y-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          {isComplete ? (
            <span className="text-green-600 font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4" />
              Lesson completed! Continue to the next lesson.
            </span>
          ) : (
            <span>Complete this lesson to track your progress.</span>
          )}
        </div>
        <Button onClick={onComplete} disabled={isComplete} className="gap-2 min-w-fit" size="lg">
          {isComplete ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              Completed
            </>
          ) : (
            <>
              <BookOpen className="h-4 w-4" />
              Mark as Complete
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
