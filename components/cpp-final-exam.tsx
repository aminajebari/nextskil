"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Award, Clock, AlertCircle } from 'lucide-react'
import { cppExamQuestions } from "@/lib/cpp-final-exam-data"

interface CPPFinalExamProps {
  onComplete: () => void
  completed: boolean
}

export default function CPPFinalExam({ onComplete, completed }: CPPFinalExamProps) {
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(completed)
  const [score, setScore] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(3600)

  const handleStart = () => {
    setStarted(true)
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < cppExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const correctCount = cppExamQuestions.reduce((count, question, index) => {
      return count + (selectedAnswers[index] === question.correctAnswer ? 1 : 0)
    }, 0)
    setScore(correctCount)
    setShowResults(true)
    if (correctCount >= cppExamQuestions.length * 0.8) {
      onComplete()
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (showResults) {
    const percentage = (score / cppExamQuestions.length) * 100
    const passed = percentage >= 80

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Final Exam Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${passed ? 'bg-success/20' : 'bg-destructive/20'}`}>
              {passed ? (
                <Award className="h-12 w-12 text-success" />
              ) : (
                <XCircle className="h-12 w-12 text-destructive" />
              )}
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">
                {passed ? "Congratulations!" : "Keep Learning!"}
              </h3>
              <p className="text-xl mb-4">
                Score: <span className="font-bold text-secondary">{score}/{cppExamQuestions.length}</span>
              </p>
              <p className="text-lg text-muted-foreground">
                Percentage: {percentage.toFixed(1)}%
              </p>
            </div>
            {passed ? (
              <div className="p-4 bg-success/10 border border-success rounded-lg">
                <p className="font-semibold text-success">You've passed the final exam!</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Complete all lessons to unlock your certificate.
                </p>
              </div>
            ) : (
              <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                <p className="font-semibold text-destructive">You need 80% to pass</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Review the course materials and try again.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!started) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">C++ Final Exam</CardTitle>
          <CardDescription>Test your knowledge of all course modules</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Award className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">50 Comprehensive Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Covering all modules from basics to advanced C++ concepts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">60 Minutes Time Limit</h4>
                <p className="text-sm text-muted-foreground">
                  Complete the exam before time runs out
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <AlertCircle className="h-6 w-6 text-secondary mt-1" />
              <div>
                <h4 className="font-semibold mb-1">80% Passing Score</h4>
                <p className="text-sm text-muted-foreground">
                  You need at least 40 correct answers to pass
                </p>
              </div>
            </div>
          </div>
          <Button onClick={handleStart} className="w-full bg-primary hover:bg-primary/90" size="lg">
            Start Final Exam
          </Button>
        </CardContent>
      </Card>
    )
  }

  const question = cppExamQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / cppExamQuestions.length) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-card border rounded-lg">
        <div>
          <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {cppExamQuestions.length}</p>
          <Progress value={progress} className="w-64 mt-2" />
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-secondary" />
          <span className="text-xl font-bold text-secondary">{formatTime(timeRemaining)}</span>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">{question.module}</Badge>
            <Badge variant={
              question.difficulty === 'easy' ? 'default' : 
              question.difficulty === 'medium' ? 'secondary' : 'destructive'
            }>
              {question.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswers[currentQuestion]?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-accent cursor-pointer transition-colors">
                  <RadioGroupItem value={index.toString()} id={`exam-${currentQuestion}-${index}`} />
                  <Label htmlFor={`exam-${currentQuestion}-${index}`} className="flex-1 cursor-pointer">
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
        <span className="text-sm text-muted-foreground">
          {selectedAnswers.filter(a => a !== undefined).length} of {cppExamQuestions.length} answered
        </span>
        <div className="flex gap-2">
          {currentQuestion === cppExamQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswers.length !== cppExamQuestions.length}
              className="bg-secondary hover:bg-secondary/90"
            >
              Submit Exam
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
