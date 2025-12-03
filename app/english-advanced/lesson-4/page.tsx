"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function AdvancedLesson4() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What does 'break the ice' mean?",
      options: ["To start a conversation in an awkward situation", "To break something frozen", "To cancel plans"],
      correct: 0,
      explanation: "'Break the ice' means to initiate conversation in a tense or awkward situation.",
    },
    {
      question: "If something costs 'an arm and a leg', it means:",
      options: ["It's very expensive", "It's dangerous", "It's broken"],
      correct: 0,
      explanation: "This idiom means something is very expensive.",
    },
    {
      question: "What does 'hit the nail on the head' mean?",
      options: ["To be exactly right", "To make a mistake", "To build something"],
      correct: 0,
      explanation: "This idiom means to be exactly correct or accurate.",
    },
    {
      question: "If you 'spill the beans', you:",
      options: ["Reveal a secret", "Make a mess", "Cook badly"],
      correct: 0,
      explanation: "'Spill the beans' means to reveal secret information.",
    },
    {
      question: "What does 'under the weather' mean?",
      options: ["Feeling sick", "Outside in bad weather", "Feeling happy"],
      correct: 0,
      explanation: "'Under the weather' means feeling ill or unwell.",
    },
    {
      question: "If something is 'a piece of cake', it is:",
      options: ["Very easy", "Delicious", "Difficult"],
      correct: 0,
      explanation: "'A piece of cake' means something is very easy to do.",
    },
    {
      question: "What does 'let the cat out of the bag' mean?",
      options: ["Reveal a secret accidentally", "Free an animal", "Start a problem"],
      correct: 0,
      explanation: "This idiom means to accidentally reveal a secret.",
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

  const idioms = [
    {
      idiom: "Break the ice",
      meaning: "To initiate conversation in an awkward situation",
      example: "He told a joke to break the ice at the meeting.",
    },
    {
      idiom: "Cost an arm and a leg",
      meaning: "Be very expensive",
      example: "That designer handbag cost her an arm and a leg.",
    },
    {
      idiom: "Hit the nail on the head",
      meaning: "Be exactly right",
      example: "You hit the nail on the head with that analysis.",
    },
    {
      idiom: "Spill the beans",
      meaning: "Reveal a secret",
      example: "Don't spill the beans about the surprise party!",
    },
    { idiom: "Under the weather", meaning: "Feeling ill", example: "I'm feeling a bit under the weather today." },
    { idiom: "Piece of cake", meaning: "Very easy", example: "The exam was a piece of cake." },
    {
      idiom: "Let the cat out of the bag",
      meaning: "Reveal a secret accidentally",
      example: "She let the cat out of the bag about their engagement.",
    },
    { idiom: "Once in a blue moon", meaning: "Very rarely", example: "I only see him once in a blue moon." },
  ]

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
            <Link href="/english-advanced" className="hover:text-primary">
              Advanced
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground">Lesson 4</span>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Idioms and Expressions</h1>
            <p className="text-muted-foreground">
              Master common English idioms and expressions used in everyday conversation.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">What are Idioms?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Idioms are expressions whose meanings cannot be understood from the literal definitions of the words. They
              are a vital part of natural English communication.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Common English Idioms</h2>
            <div className="space-y-4">
              {idioms.map((item, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg border-l-4 border-purple-600">
                  <h3 className="font-bold text-lg mb-2">{item.idiom}</h3>
                  <p className="text-muted-foreground italic mb-2">{item.meaning}</p>
                  <p>
                    <span className="font-semibold">Example:</span> {item.example}
                  </p>
                </div>
              ))}
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
                    ? "Excellent! You have mastered Idioms and Expressions."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You understand most common idioms."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Keep practicing these expressions."
                        : "Keep learning! Idioms take time to master."}
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
            <Link href="/english-advanced/lesson-3" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-advanced/lesson-5"
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
