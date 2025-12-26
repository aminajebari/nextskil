"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Info, AwardIcon, Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Module {
  title: string
  quiz: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

interface CPPModuleQuizProps {
  module: Module
  moduleIndex: number
  onComplete: (moduleIndex: number) => void
  isComplete: boolean
}

export default function CPPModuleQuiz({ module, moduleIndex, onComplete, isComplete }: CPPModuleQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < module.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const correctCount = module.quiz.reduce((count, question, index) => {
      return count + (selectedAnswers[index] === question.correctAnswer ? 1 : 0)
    }, 0)
    setScore(correctCount)
    setShowResults(true)
    if (correctCount >= module.quiz.length * 0.7) {
      onComplete(moduleIndex)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const percentage = (score / module.quiz.length) * 100
    const passed = percentage >= 70

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-4">
          <div
            className={cn(
              "relative inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-2 shadow-inner",
              passed ? "border-secondary/30 bg-secondary/5" : "border-destructive/30 bg-destructive/5",
            )}
          >
            <div className="text-center">
              <span className={cn("text-4xl font-bold block", passed ? "text-secondary" : "text-destructive")}>
                {percentage.toFixed(0)}%
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">C++ Level</span>
            </div>
            {passed && (
              <div className="absolute -top-2 -right-2 bg-secondary text-white rounded-full p-1.5 shadow-lg">
                <AwardIcon className="h-5 w-5" />
              </div>
            )}
          </div>

          <div className="max-w-md mx-auto">
            <h3 className={cn("text-2xl font-bold mb-2", passed ? "text-secondary" : "text-destructive")}>
              {passed ? "Compilation Successful!" : "Compilation Errors Found"}
            </h3>
            <p className="text-muted-foreground">
              {passed
                ? "Superb! You've successfully navigated the complexities of this module. Your understanding of C++ architecture is growing stronger."
                : `Debug required: You achieved ${score}/${module.quiz.length}. C++ demands precision—review the memory management and syntax lessons before retrying.`}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button
              onClick={handleRetry}
              variant={passed ? "outline" : "default"}
              className={cn("gap-2 shadow-sm", !passed && "bg-secondary hover:bg-secondary/90 text-white px-8")}
            >
              <RotateCcw className="h-4 w-4" />
              {passed ? "Review & Practice" : "Rerun Diagnostic (Retry)"}
            </Button>
            {passed && (
              <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 px-8 shadow-sm">
                Next Level
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-6 pt-6 border-t border-secondary/20">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg flex items-center gap-2">
              <Code2 className="h-5 w-5 text-secondary" />
              Performance Analysis
            </h4>
            <Badge variant="outline" className="text-secondary border-secondary/50">
              {score}/{module.quiz.length} Passed
            </Badge>
          </div>

          <div className="grid gap-4">
            {module.quiz.map((question, index) => {
              const userAnswer = selectedAnswers[index]
              const isCorrect = userAnswer === question.correctAnswer

              return (
                <Card
                  key={index}
                  className={cn(
                    "overflow-hidden border-l-4 transition-all hover:shadow-md",
                    isCorrect ? "border-l-success" : "border-l-destructive",
                  )}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "mt-1 p-1.5 rounded-lg shadow-sm",
                          isCorrect ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
                        )}
                      >
                        {isCorrect ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-bold text-base">
                            {index + 1}. {question.question}
                          </p>
                          <Badge
                            className={cn(
                              "text-[10px] tracking-widest uppercase h-5",
                              isCorrect ? "bg-success hover:bg-success" : "bg-destructive hover:bg-destructive",
                            )}
                          >
                            {isCorrect ? "Ok" : "Error"}
                          </Badge>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3 text-sm">
                          <div
                            className={cn(
                              "p-3 rounded-lg border-2",
                              isCorrect ? "bg-success/5 border-success/10" : "bg-destructive/5 border-destructive/10",
                            )}
                          >
                            <span className="text-[10px] text-muted-foreground block mb-1 font-mono uppercase">
                              User_Input
                            </span>
                            <span className="font-mono">{question.options[userAnswer]}</span>
                          </div>
                          {!isCorrect && (
                            <div className="p-3 rounded-lg border-2 bg-success/5 border-success/10">
                              <span className="text-[10px] text-muted-foreground block mb-1 font-mono uppercase">
                                Expected_Output
                              </span>
                              <span className="font-mono text-success">{question.options[question.correctAnswer]}</span>
                            </div>
                          )}
                        </div>

                        {question.explanation && (
                          <div className="bg-secondary/5 p-4 rounded-lg text-sm border border-secondary/10 shadow-inner">
                            <span className="text-secondary font-black uppercase text-[10px] tracking-tighter inline-flex items-center gap-1 mr-3">
                              <Info className="h-3.5 w-3.5" />
                              Documentation
                            </span>
                            <span className="text-muted-foreground italic leading-relaxed">{question.explanation}</span>
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

  const question = module.quiz[currentQuestion]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Question {currentQuestion + 1} of {module.quiz.length}
        </h3>
        <span className="text-sm text-muted-foreground">
          {selectedAnswers.filter((a) => a !== undefined).length} answered
        </span>
      </div>

      <Card className="p-6">
        <h4 className="text-lg font-medium mb-4">{question.question}</h4>
        <RadioGroup
          value={selectedAnswers[currentQuestion]?.toString()}
          onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
        >
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent cursor-pointer"
              >
                <RadioGroupItem value={index.toString()} id={`q${currentQuestion}-${index}`} />
                <Label htmlFor={`q${currentQuestion}-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </Card>

      <div className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
          Previous
        </Button>
        <div className="flex gap-2">
          {currentQuestion === module.quiz.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswers.length !== module.quiz.length}
              className="bg-secondary hover:bg-secondary/90"
            >
              Submit Quiz
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
