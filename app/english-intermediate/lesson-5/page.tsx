"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function IntermediateLesson5() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What is the comparative form of 'good'?",
      options: ["Better", "Gooder", "More good"],
      correct: 0,
      explanation: "'Better' is the irregular comparative form of 'good'.",
    },
    {
      question: "Complete: This book is __________ than that one.",
      options: ["more interesting", "interestinger", "most interesting"],
      correct: 0,
      explanation: "For adjectives with 3+ syllables, use 'more + adjective' for comparatives.",
    },
    {
      question: "What is the superlative form of 'bad'?",
      options: ["Worst", "Baddest", "More bad"],
      correct: 0,
      explanation: "'Worst' is the irregular superlative form of 'bad'.",
    },
    {
      question: "Complete: She is the __________ student in the class.",
      options: ["smartest", "most smart", "more smart"],
      correct: 0,
      explanation: "For one-syllable adjectives, add '-est' for superlatives.",
    },
    {
      question: "Which is correct?",
      options: ["This car is faster than mine.", "This car is more fast than mine.", "This car is fastest than mine."],
      correct: 0,
      explanation: "For one-syllable adjectives, add '-er' for comparatives.",
    },
    {
      question: "Complete: Mount Everest is the __________ mountain in the world.",
      options: ["highest", "most high", "higher"],
      correct: 0,
      explanation: "For one-syllable adjectives ending in 'y', change to '-est' for superlatives.",
    },
    {
      question: "What is the comparative form of 'far'?",
      options: ["Farther / Further", "Farer", "More far"],
      correct: 0,
      explanation: "'Farther' and 'further' are both correct irregular comparative forms of 'far'.",
    },
  ]

  const selectOption = (optionIndex: number) => {
    if (userAnswers[currentQuestion] !== null) return
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = optionIndex
    setUserAnswers(newAnswers)
    if (optionIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setUserAnswers([null, null, null, null, null, null, null])
    setShowResults(false)
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const hasAnswered = userAnswers[currentQuestion] !== null

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/english-course" className="hover:text-primary">
              English
            </Link>
            <ChevronRight size={16} />
            <Link href="/english-intermediate" className="hover:text-primary">
              Intermediate
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground">Lesson 5</span>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Comparatives and Superlatives</h1>
            <p className="text-muted-foreground">
              Learn how to compare things and describe extremes using comparative and superlative forms.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comparatives are used to compare two things, while superlatives are used to describe something as the most
              or least of a group.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Comparatives</h2>
            <p className="text-muted-foreground mb-4">Used to compare two things.</p>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Rules:</p>
              <p>• One syllable: add -er (fast → faster)</p>
              <p>• Two+ syllables: use more (beautiful → more beautiful)</p>
              <p>• Irregular: good → better, bad → worse</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Superlatives</h2>
            <p className="text-muted-foreground mb-4">Used to describe the most or least in a group.</p>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Rules:</p>
              <p>• One syllable: add -est (fast → fastest)</p>
              <p>• Two+ syllables: use most (beautiful → most beautiful)</p>
              <p>• Irregular: good → best, bad → worst</p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Practice Quiz</h2>
            {!showResults ? (
              <>
                <div className="flex justify-between mb-6 text-sm">
                  <span className="font-semibold">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="font-semibold">
                    Score: {score}/{quizQuestions.length}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">{currentQuestionData.question}</h3>
                  <div className="space-y-3">
                    {currentQuestionData.options.map((option, index) => {
                      const isSelected = userAnswers[currentQuestion] === index
                      const isCorrect = index === currentQuestionData.correct
                      return (
                        <button
                          key={index}
                          onClick={() => selectOption(index)}
                          disabled={hasAnswered}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                            !hasAnswered
                              ? "border-border hover:border-primary hover:bg-muted"
                              : isSelected && isCorrect
                                ? "border-green-500 bg-green-50 dark:bg-green-950"
                                : isSelected && !isCorrect
                                  ? "border-red-500 bg-red-50 dark:bg-red-950"
                                  : isCorrect
                                    ? "border-green-500 bg-green-50 dark:bg-green-950"
                                    : "border-border"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {hasAnswered && isCorrect && <Check className="text-green-600" size={20} />}
                            {hasAnswered && isSelected && !isCorrect && <X className="text-red-600" size={20} />}
                            <span>{option}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  {hasAnswered && (
                    <div
                      className={`mt-4 p-4 rounded-lg ${
                        userAnswers[currentQuestion] === currentQuestionData.correct
                          ? "bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100"
                          : "bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100"
                      }`}
                    >
                      <p className="font-semibold mb-1">
                        {userAnswers[currentQuestion] === currentQuestionData.correct ? "Correct!" : "Incorrect."}
                      </p>
                      <p>{currentQuestionData.explanation}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextQuestion}
                    disabled={!hasAnswered}
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next"}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  Score: {score}/{quizQuestions.length}
                </div>
                <p className="text-muted-foreground mb-6">
                  {score === quizQuestions.length
                    ? "Excellent! You have mastered Comparatives and Superlatives."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have a solid understanding."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Keep practicing to improve."
                        : "Don't get discouraged! Review the lesson and try again."}
                </p>
                <button
                  onClick={restartQuiz}
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                >
                  Restart Quiz
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Link href="/english-intermediate/lesson-4" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-intermediate"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
            >
              Back to Course
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
