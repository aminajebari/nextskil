"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function AdvancedLesson2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What is the most professional way to start a business email?",
      options: ["Dear Mr./Ms. [Last Name],", "Hey!", "Hi there,"],
      correct: 0,
      explanation: "In formal business communication, use 'Dear' followed by the title and last name.",
    },
    {
      question: "Which phrase is most appropriate for a business meeting?",
      options: ["Let's touch base on this matter.", "Let's hang out about this.", "Let's chat about this."],
      correct: 0,
      explanation: "'Touch base' is a professional idiom meaning to discuss or check in about something.",
    },
    {
      question: "How should you end a formal business email?",
      options: ["Sincerely,", "Cheers,", "Later,"],
      correct: 0,
      explanation: "'Sincerely' or 'Best regards' are appropriate formal closings.",
    },
    {
      question: "What does 'bottom line' mean in business?",
      options: ["The main point or final result", "The last sentence", "The lowest price"],
      correct: 0,
      explanation: "'Bottom line' refers to the most important fact or the final result.",
    },
    {
      question: "Which is the most professional way to disagree?",
      options: ["I see your point, however...", "That's wrong.", "No way!"],
      correct: 0,
      explanation: "Acknowledge the other person's view before presenting your alternative perspective.",
    },
    {
      question: "What does 'think outside the box' mean?",
      options: ["Think creatively", "Think literally", "Think slowly"],
      correct: 0,
      explanation: "This idiom means to think in an original or creative way.",
    },
    {
      question: "In a presentation, what should you say to move to the next topic?",
      options: ["Moving on to...", "Whatever, next thing...", "Anyway..."],
      correct: 0,
      explanation: "'Moving on to' is a professional transition phrase.",
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
            <Link href="/english-advanced" className="hover:text-primary">
              Advanced
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground">Lesson 2</span>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Business English</h1>
            <p className="text-muted-foreground">
              Master professional vocabulary and communication skills for the workplace.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Business English requires formal language, specific vocabulary, and professional etiquette. This lesson
              covers essential skills for workplace communication.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Email Etiquette</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Professional Email Structure:</p>
              <p>• Greeting: Dear [Name],</p>
              <p>• Opening: I hope this email finds you well.</p>
              <p>• Body: Clear and concise main message</p>
              <p>• Closing: Best regards, Sincerely,</p>
              <p>• Signature: Your name and title</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Common Business Phrases</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• "Let's touch base" - Let's discuss or meet</p>
              <p>• "Think outside the box" - Think creatively</p>
              <p>• "Bottom line" - The main point</p>
              <p>• "Win-win situation" - Beneficial for everyone</p>
              <p>• "Keep me in the loop" - Keep me informed</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Meeting Language</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• "Let's get started" - Begin the meeting</p>
              <p>• "Moving on to..." - Transition to next topic</p>
              <p>• "I'd like to add..." - Contribute to discussion</p>
              <p>• "To summarize..." - Recap main points</p>
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
                    ? "Excellent! You have mastered Business English."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have strong business communication skills."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Continue practicing professional communication."
                        : "Keep learning! Business English takes practice."}
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
            <Link href="/english-advanced/lesson-1" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-advanced/lesson-3"
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
