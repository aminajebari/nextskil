"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, XCircle, Award, RefreshCw } from 'lucide-react'
import { cppExampleExamQuestions } from "@/lib/cpp-example-exam-data"

interface CPPExamplePracticeExamProps {
  onClose: () => void
}

export default function CPPExamplePracticeExam({ onClose }: CPPExamplePracticeExamProps) {
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
    if (currentQuestion < cppExampleExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const correctCount = cppExampleExamQuestions.reduce((count, question, index) => {
      return count + (selectedAnswers[index] === question.correctAnswer ? 1 : 0)
    }, 0)
    setScore(correctCount)
    setShowResults(true)
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const percentage = (score / cppExampleExamQuestions.length) * 100
    const passed = percentage >= 80

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Practice Exam Results</CardTitle>
            <CardDescription className="text-center">Review your answers and explanations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4 mb-6">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${passed ? 'bg-success/20' : 'bg-secondary/20'}`}>
                {passed ? (
                  <Award className="h-10 w-10 text-success" />
                ) : (
                  <XCircle className="h-10 w-10 text-secondary" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Score: {score}/{cppExampleExamQuestions.length}
                </h3>
                <p className="text-lg text-muted-foreground">
                  Percentage: {percentage.toFixed(1)}%
                </p>
              </div>
              <Progress value={percentage} className="h-3" />
              <div className="flex gap-4 justify-center pt-4">
                <Button onClick={handleRetry} variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Retry Practice Exam
                </Button>
                <Button onClick={onClose} className="gap-2">
                  Back to Course
                </Button>
              </div>
            </div>

            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                <h4 className="font-semibold text-lg sticky top-0 bg-background py-2">Detailed Results:</h4>
                {cppExampleExamQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index]
                  const isCorrect = userAnswer === question.correctAnswer
                  
                  return (
                    <Card key={index} className={`border-2 ${isCorrect ? 'border-success/50' : 'border-destructive/50'}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">Question {index + 1}</Badge>
                              <Badge variant="secondary">{question.module}</Badge>
                              {isCorrect ? (
                                <CheckCircle2 className="h-5 w-5 text-success" />
                              ) : (
                                <XCircle className="h-5 w-5 text-destructive" />
                              )}
                            </div>
                            <CardTitle className="text-base">{question.question}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => {
                            const isCorrectAnswer = optionIndex === question.correctAnswer
                            const wasSelected = userAnswer === optionIndex
                            
                            return (
                              <div
                                key={optionIndex}
                                className={`p-3 rounded-lg border-2 ${
                                  isCorrectAnswer
                                    ? "bg-success/10 border-success"
                                    : wasSelected
                                    ? "bg-destructive/10 border-destructive"
                                    : "border-transparent bg-muted"
                                }`}
                              >
                                <div className="flex items-start gap-2">
                                  {isCorrectAnswer && <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />}
                                  {wasSelected && !isCorrectAnswer && <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />}
                                  <div className="flex-1">
                                    <p className="font-medium">{option}</p>
                                    {isCorrectAnswer && (
                                      <p className="text-xs text-success mt-1">✓ Correct Answer</p>
                                    )}
                                    {wasSelected && !isCorrectAnswer && (
                                      <p className="text-xs text-destructive mt-1">✗ Your Answer</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <p className="text-sm font-semibold text-primary mb-1">Explanation:</p>
                          <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = cppExampleExamQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / cppExampleExamQuestions.length) * 100

  return (
    <div className="space-y-6">
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Practice Exam Instructions</CardTitle>
          <CardDescription>
            This is a practice exam with 50 questions. Your answers are not graded or saved. Use this to familiarize yourself with the exam format and test your knowledge.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2">Question {currentQuestion + 1} of {cppExampleExamQuestions.length}</p>
          <Progress value={progress} className="h-2" />
        </div>
        <Badge variant="outline" className="ml-4">
          {selectedAnswers.filter(a => a !== undefined).length} answered
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{question.module}</Badge>
            <Badge variant="secondary">{question.difficulty}</Badge>
          </div>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswers[currentQuestion]?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:bg-accent hover:border-primary/50 cursor-pointer transition-all">
                  <RadioGroupItem value={index.toString()} id={`practice-${currentQuestion}-${index}`} />
                  <Label htmlFor={`practice-${currentQuestion}-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline">
          Previous
        </Button>
        <div className="flex gap-2">
          {currentQuestion === cppExampleExamQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswers.filter(a => a !== undefined).length < cppExampleExamQuestions.length}
              className="bg-secondary hover:bg-secondary/90"
            >
              Submit & View Results
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next Question
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
