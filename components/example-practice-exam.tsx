"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Award, ArrowRight, RotateCcw } from 'lucide-react'
import { exampleExamQuestions } from "@/lib/example-exam-data"

interface ExamplePracticeExamProps {
  onClose: () => void
}

export default function ExamplePracticeExam({ onClose }: ExamplePracticeExamProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < exampleExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    let correctCount = 0
    exampleExamQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setShowResults(true)
  }

  const handleRetake = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  const progress = ((currentQuestion + 1) / exampleExamQuestions.length) * 100
  const answeredCount = Object.keys(selectedAnswers).length

  if (showResults) {
    const percentage = (score / exampleExamQuestions.length) * 100
    const passed = percentage >= 70

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
              passed ? "bg-success/10" : "bg-destructive/10"
            }`}>
              {passed ? (
                <Award className="h-16 w-16 text-success" />
              ) : (
                <XCircle className="h-16 w-16 text-destructive" />
              )}
            </div>
          </div>
          <CardTitle className="text-3xl">
            {passed ? "Excellent Work!" : "Keep Practicing!"}
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            You scored {score} out of {exampleExamQuestions.length} ({percentage.toFixed(1)}%)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Correct Answers</p>
                <p className="text-3xl font-bold text-success">{score}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Incorrect Answers</p>
                <p className="text-3xl font-bold text-destructive">{exampleExamQuestions.length - score}</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">Score Percentage</p>
                <p className="text-3xl font-bold text-primary">{percentage.toFixed(1)}%</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Detailed Results</h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {exampleExamQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[index]
                const isCorrect = userAnswer === question.correctAnswer
                
                return (
                  <Card key={index} className={`border-2 ${
                    isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
                  }`}>
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-destructive" />
                          )}
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="font-medium">Question {index + 1}: {question.question}</p>
                          <div className="space-y-1 text-sm">
                            <p className="text-muted-foreground">
                              Your answer: <span className={isCorrect ? "text-success font-medium" : "text-destructive font-medium"}>
                                {userAnswer || "Not answered"}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-muted-foreground">
                                Correct answer: <span className="text-success font-medium">{question.correctAnswer}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <Button onClick={handleRetake} size="lg" variant="outline" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Exam
            </Button>
            <Button onClick={onClose} size="lg" className="gap-2">
              Back to Course
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = exampleExamQuestions[currentQuestion]
  const selectedAnswer = selectedAnswers[currentQuestion]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2 border-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-sm">
              Question {currentQuestion + 1} of {exampleExamQuestions.length}
            </Badge>
            <Badge className={answeredCount === exampleExamQuestions.length ? "bg-success text-white" : ""}>
              {answeredCount}/{exampleExamQuestions.length} Answered
            </Badge>
          </div>
          <Progress value={progress} className="h-2 mb-4" />
          <CardTitle className="text-xl">{question.category}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-lg font-medium leading-relaxed">{question.question}</p>
            
            {question.code && (
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto border">
                <code className="text-sm">{question.code}</code>
              </pre>
            )}

            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const optionLetter = String.fromCharCode(65 + index)
                  return (
                    <div key={index}>
                      <div
                        className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedAnswer === option
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50 hover:bg-secondary"
                        }`}
                        onClick={() => handleAnswerSelect(option)}
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} className="mt-0.5" />
                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer leading-relaxed">
                          <span className="font-semibold mr-2">{optionLetter}.</span>
                          {option}
                        </Label>
                      </div>
                    </div>
                  )
                })}
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              size="lg"
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {currentQuestion === exampleExamQuestions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={answeredCount !== exampleExamQuestions.length}
                  size="lg"
                  className="gap-2 bg-success hover:bg-success/90 text-white"
                >
                  Submit Exam
                  <Award className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="gap-2"
                >
                  Next Question
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-10 gap-2">
            {exampleExamQuestions.map((_, index) => {
              const isAnswered = selectedAnswers[index] !== undefined
              const isCurrent = index === currentQuestion
              
              return (
                <Button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  variant={isCurrent ? "default" : isAnswered ? "secondary" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  {index + 1}
                  {isAnswered && !isCurrent && <CheckCircle2 className="h-3 w-3 ml-1" />}
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
