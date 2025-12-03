"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Award } from 'lucide-react'

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
      <Card className="p-6">
        <div className="text-center space-y-4">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${passed ? 'bg-success/20' : 'bg-destructive/20'}`}>
            {passed ? (
              <Award className="h-10 w-10 text-success" />
            ) : (
              <XCircle className="h-10 w-10 text-destructive" />
            )}
          </div>
          <h3 className="text-2xl font-bold">
            {passed ? "Congratulations!" : "Keep Trying!"}
          </h3>
          <p className="text-lg">
            You scored <span className="font-bold text-secondary">{score}</span> out of {module.quiz.length}
          </p>
          <p className="text-muted-foreground">
            {passed ? "You've passed this quiz!" : "You need 70% to pass. Review the lesson and try again."}
          </p>
          <div className="flex gap-2 justify-center pt-4">
            <Button onClick={handleRetry} variant="outline">Retry Quiz</Button>
            {passed && (
              <Button className="bg-success hover:bg-success/90">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Quiz Passed
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-semibold text-lg">Review Answers:</h4>
          {module.quiz.map((question, index) => (
            <Card key={index} className="p-4">
              <p className="font-medium mb-2">
                {index + 1}. {question.question}
              </p>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === question.correctAnswer
                  const wasSelected = selectedAnswers[index] === optionIndex
                  return (
                    <div
                      key={optionIndex}
                      className={`p-2 rounded-md border ${
                        isCorrect
                          ? "bg-success/10 border-success"
                          : wasSelected
                          ? "bg-destructive/10 border-destructive"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isCorrect && <CheckCircle2 className="h-4 w-4 text-success" />}
                        {wasSelected && !isCorrect && <XCircle className="h-4 w-4 text-destructive" />}
                        <span>{option}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="mt-2 text-sm text-muted-foreground italic">{question.explanation}</p>
            </Card>
          ))}
        </div>
      </Card>
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
          {selectedAnswers.filter(a => a !== undefined).length} answered
        </span>
      </div>

      <Card className="p-6">
        <h4 className="text-lg font-medium mb-4">{question.question}</h4>
        <RadioGroup value={selectedAnswers[currentQuestion]?.toString()} onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent cursor-pointer">
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
