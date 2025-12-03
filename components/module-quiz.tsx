"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ModuleQuizProps {
  module: {
    title: string
    quiz: Array<{
      question: string
      options: string[]
      correct: number
    }>
  }
  moduleIndex: number
  onComplete: (moduleIndex: number) => void
  isComplete: boolean
}

export default function ModuleQuiz({ module, moduleIndex, onComplete, isComplete }: ModuleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const handleSubmitAnswer = () => {
    const isCorrect = Number.parseInt(selectedAnswer) === module.quiz[currentQuestion].correct
    if (isCorrect) {
      setScore(score + 1)
    }
    setAnswers([...answers, Number.parseInt(selectedAnswer)])

    if (currentQuestion < module.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      setShowResult(true)
      if (score + (isCorrect ? 1 : 0) >= module.quiz.length * 0.7) {
        onComplete(moduleIndex)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  if (showResult) {
    const percentage = (score / module.quiz.length) * 100
    const passed = percentage >= 70

    return (
      <div className="space-y-6">
        <Alert className={passed ? "border-success" : "border-destructive"}>
          <div className="flex items-start gap-3">
            {passed ? (
              <CheckCircle2 className="h-5 w-5 text-success" />
            ) : (
              <XCircle className="h-5 w-5 text-destructive" />
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">{passed ? "Congratulations! You Passed!" : "Quiz Failed"}</h3>
              <AlertDescription>
                You scored {score} out of {module.quiz.length} ({percentage.toFixed(0)}%)
                {passed
                  ? " - Great job! You can now proceed to the next module."
                  : " - You need at least 70% to pass. Review the lessons and try again."}
              </AlertDescription>
            </div>
          </div>
        </Alert>

        <div className="space-y-4">
          {module.quiz.map((q, idx) => {
            const userAnswer = answers[idx]
            const isCorrect = userAnswer === q.correct

            return (
              <Card key={idx} className={isCorrect ? "border-success" : "border-destructive"}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium mb-2">
                        Question {idx + 1}: {q.question}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your answer:{" "}
                        <span className={isCorrect ? "text-success" : "text-destructive"}>{q.options[userAnswer]}</span>
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-success mt-1">Correct answer: {q.options[q.correct]}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Button onClick={resetQuiz} className="w-full">
          Retake Quiz
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {module.quiz.length}
        </div>
        <div className="text-sm font-medium">
          Score: {score}/{currentQuestion}
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold text-lg mb-4">{module.quiz[currentQuestion].question}</h3>

          <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
            <div className="space-y-3">
              {module.quiz[currentQuestion].options.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-secondary cursor-pointer"
                >
                  <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                  <Label htmlFor={`option-${idx}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer} className="w-full">
        {currentQuestion < module.quiz.length - 1 ? "Next Question" : "Submit Quiz"}
      </Button>
    </div>
  )
}
