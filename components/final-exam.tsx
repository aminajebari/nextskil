"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { XCircle, Award, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { finalExamQuestions } from "@/lib/final-exam-data"

interface FinalExamProps {
  onComplete: () => void
  completed: boolean
}

export default function FinalExam({ onComplete, completed }: FinalExamProps) {
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(completed)
  const [score, setScore] = useState(0)

  const handleStartExam = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setAnswers([])
    setScore(0)
    setShowResult(false)
  }

  const handleSubmitAnswer = () => {
    const isCorrect = Number.parseInt(selectedAnswer) === finalExamQuestions[currentQuestion].correct
    const newAnswers = [...answers, Number.parseInt(selectedAnswer)]
    setAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion < finalExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      const finalScore = score + (isCorrect ? 1 : 0)
      setScore(finalScore)
      setShowResult(true)
      if (finalScore >= finalExamQuestions.length * 0.8) {
        onComplete()
      }
    }
  }

  if (!started && !showResult) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <CardTitle className="text-2xl">Final Certification Exam</CardTitle>
              <CardDescription>Comprehensive HTML Mastery Assessment</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              This is the final exam covering all modules. You need to score at least 80% (40/50) to pass and earn your
              certificate.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">50</div>
                <div className="text-sm text-muted-foreground">Total Questions</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">80%</div>
                <div className="text-sm text-muted-foreground">Passing Score</div>
              </div>
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Exam Coverage:</h3>
              <ul>
                <li>HTML Fundamentals & Document Structure</li>
                <li>Text Formatting, Links, and Navigation</li>
                <li>Images, Media, and Multimedia Elements</li>
                <li>Tables, Lists, and Data Presentation</li>
                <li>Forms, Input Types, and Validation</li>
                <li>Semantic HTML5 Elements</li>
                <li>Canvas, Graphics, and Advanced Features</li>
                <li>Best Practices and Email Development</li>
              </ul>
            </div>
          </div>

          <Button onClick={handleStartExam} className="w-full" size="lg">
            <Award className="mr-2 h-5 w-5" />
            Start Final Exam
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (showResult) {
    const percentage = (score / finalExamQuestions.length) * 100
    const passed = percentage >= 80

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Exam Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className={passed ? "border-success bg-success/10" : "border-destructive bg-destructive/10"}>
            <div className="flex items-start gap-3">
              {passed ? <Award className="h-6 w-6 text-success" /> : <XCircle className="h-6 w-6 text-destructive" />}
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">
                  {passed ? "🎉 Congratulations! You Passed!" : "Exam Not Passed"}
                </h3>
                <AlertDescription className="text-base">
                  You scored {score} out of {finalExamQuestions.length} ({percentage.toFixed(1)}%)
                  {passed
                    ? ' - Excellent work! You have mastered HTML development. Click "Get Certificate" to view your achievement.'
                    : " - You need at least 80% to pass. Review the course materials and try again."}
                </AlertDescription>
              </div>
            </div>
          </Alert>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Your Score</span>
              <span className="font-semibold">{percentage.toFixed(1)}%</span>
            </div>
            <Progress value={percentage} className="h-3" />
          </div>

          {!passed && (
            <Button onClick={handleStartExam} className="w-full bg-transparent" variant="outline">
              Retake Exam
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  const progress = ((currentQuestion + 1) / finalExamQuestions.length) * 100

  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle>Final Exam</CardTitle>
            <Badge className="text-sm">
              Question {currentQuestion + 1}/{finalExamQuestions.length}
            </Badge>
          </div>
          <Progress value={progress} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              {currentQuestion + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-4">{finalExamQuestions[currentQuestion].question}</h3>

              {finalExamQuestions[currentQuestion].code && (
                <pre className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
                  <code className="text-sm font-mono">{finalExamQuestions[currentQuestion].code}</code>
                </pre>
              )}

              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-3">
                  {finalExamQuestions[currentQuestion].options.map((option, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-secondary cursor-pointer transition-colors"
                    >
                      <RadioGroupItem value={idx.toString()} id={`exam-option-${idx}`} className="mt-1" />
                      <Label htmlFor={`exam-option-${idx}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            Current Score: {score}/{currentQuestion}
          </div>
          <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} size="lg">
            {currentQuestion < finalExamQuestions.length - 1 ? "Next Question" : "Submit Exam"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground ${className}`}
    >
      {children}
    </span>
  )
}
