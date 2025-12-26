"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Award, RotateCcw, ChevronRight, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ModuleQuizProps {
  module: {
    title: string
    quiz: Array<{
      question: string
      options: string[]
      correct: number
      explanation?: string // Added explanation support
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
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-4">
          <div
            className={cn(
              "relative inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-2",
              passed ? "border-blue-500/30 bg-blue-500/5" : "border-destructive/30 bg-destructive/5",
            )}
          >
            <div className="text-center">
              <span className={cn("text-4xl font-bold block", passed ? "text-blue-600" : "text-destructive")}>
                {percentage.toFixed(0)}%
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Score</span>
            </div>
            {passed && (
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1.5 shadow-lg">
                <Award className="h-5 w-5" />
              </div>
            )}
          </div>

          <div className="max-w-md mx-auto">
            <h3 className={cn("text-2xl font-bold mb-2", passed ? "text-blue-600" : "text-destructive")}>
              {passed ? "JavaScript Mastered!" : "Code Refactoring Needed!"}
            </h3>
            <p className="text-muted-foreground">
              {passed
                ? "Brilliant! You've mastered these JavaScript concepts. Your logic is sound and you're ready for more complex challenges."
                : `You correctly answered ${score} out of ${module.quiz.length} questions. JavaScript can be tricky—review the lesson and try again to reach 70%.`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button
              onClick={resetQuiz}
              variant={passed ? "outline" : "default"}
              className={cn("gap-2 shadow-sm", !passed && "bg-blue-600 hover:bg-blue-700 text-white px-8")}
            >
              <RotateCcw className="h-4 w-4" />
              {passed ? "Practice Again" : "Retry Quiz"}
            </Button>
            {passed && (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 px-8 shadow-sm">
                Next Module
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-blue-100">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              Question Review
            </h4>
            <div className="text-sm font-medium text-muted-foreground">
              Result: {score}/{module.quiz.length}
            </div>
          </div>

          <div className="grid gap-4">
            {module.quiz.map((q, idx) => {
              const userAnswer = answers[idx]
              const isCorrect = userAnswer === q.correct

              return (
                <Card
                  key={idx}
                  className={cn(
                    "overflow-hidden border-l-4 transition-all hover:bg-muted/5",
                    isCorrect ? "border-l-success" : "border-l-destructive",
                  )}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "mt-1 p-1 rounded-full",
                          isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
                        )}
                      >
                        {isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-semibold text-base">
                            {idx + 1}. {q.question}
                          </p>
                          <Badge
                            className={cn(
                              "text-[10px] uppercase h-5",
                              isCorrect ? "bg-success hover:bg-success" : "bg-destructive hover:bg-destructive",
                            )}
                          >
                            {isCorrect ? "Correct" : "Incorrect"}
                          </Badge>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div
                            className={cn(
                              "p-3 rounded-lg border",
                              isCorrect ? "bg-success/5 border-success/20" : "bg-destructive/5 border-destructive/20",
                            )}
                          >
                            <span className="text-xs text-muted-foreground block mb-1">You chose</span>
                            <span className="font-medium line-clamp-2">{q.options[userAnswer]}</span>
                          </div>
                          {!isCorrect && (
                            <div className="p-3 rounded-lg border bg-success/5 border-success/20">
                              <span className="text-xs text-muted-foreground block mb-1">Correct logic</span>
                              <span className="font-medium text-success line-clamp-2">{q.options[q.correct]}</span>
                            </div>
                          )}
                        </div>

                        {q.explanation && (
                          <div className="bg-blue-50/50 p-3 rounded-lg text-sm border-t border-blue-100 italic">
                            <span className="text-blue-700 font-bold not-italic inline-flex items-center gap-1 mr-2">
                              <Info className="h-3.5 w-3.5" />
                              Why?
                            </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
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
