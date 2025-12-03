"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function AdvancedLesson3() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What is the purpose of a thesis statement?",
      options: ["To state the main argument", "To conclude the essay", "To introduce the topic"],
      correct: 0,
      explanation: "A thesis statement clearly states the main argument or position of your essay.",
    },
    {
      question: "Which transition word shows contrast?",
      options: ["Furthermore", "However", "Therefore"],
      correct: 1,
      explanation: "'However' is used to show contrast or opposition between ideas.",
    },
    {
      question: "In academic writing, you should avoid:",
      options: ["First-person pronouns (I, we)", "Citations", "Formal language"],
      correct: 0,
      explanation: "Academic writing typically avoids first-person pronouns to maintain objectivity.",
    },
    {
      question: "What is a topic sentence?",
      options: [
        "The first sentence of a paragraph that states the main idea",
        "Any sentence in the essay",
        "The conclusion",
      ],
      correct: 0,
      explanation: "A topic sentence introduces the main idea of a paragraph.",
    },
    {
      question: "Which citation style is commonly used in humanities?",
      options: ["APA", "MLA", "Chicago"],
      correct: 1,
      explanation: "MLA (Modern Language Association) style is commonly used in humanities.",
    },
    {
      question: "What should you do before writing an academic essay?",
      options: ["Create an outline", "Write the conclusion", "Submit it"],
      correct: 0,
      explanation: "Creating an outline helps organize your thoughts and structure your essay.",
    },
    {
      question: "In formal writing, which is more appropriate?",
      options: ["A lot of", "Many", "Tons of"],
      correct: 1,
      explanation: "'Many' is more formal than 'a lot of' or 'tons of'.",
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
            <span className="text-foreground">Lesson 3</span>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Academic Writing</h1>
            <p className="text-muted-foreground">
              Learn how to write essays, reports, and academic papers effectively.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Academic writing requires formal language, clear structure, and evidence-based arguments. This lesson
              covers the essential components of academic writing.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Essay Structure</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Standard Essay Format:</p>
              <p>• Introduction: Hook, background, thesis statement</p>
              <p>• Body Paragraphs: Topic sentence, evidence, analysis</p>
              <p>• Conclusion: Restate thesis, summarize main points</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Thesis Statement</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">A strong thesis statement:</p>
              <p>• States your main argument clearly</p>
              <p>• Is specific and debatable</p>
              <p>• Appears at the end of the introduction</p>
              <p className="mt-2">
                Example: "Social media has negatively impacted interpersonal communication by reducing face-to-face
                interactions."
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Transition Words</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• Addition: Furthermore, Moreover, Additionally</p>
              <p>• Contrast: However, Nevertheless, On the other hand</p>
              <p>• Cause/Effect: Therefore, Consequently, As a result</p>
              <p>• Example: For instance, For example, Specifically</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Citation Styles</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• APA: Used in social sciences</p>
              <p>• MLA: Used in humanities</p>
              <p>• Chicago: Used in history and some humanities</p>
              <p className="mt-2 font-semibold">Always cite your sources to avoid plagiarism!</p>
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
                    ? "Excellent! You have mastered Academic Writing."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have strong academic writing skills."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Continue practicing your writing skills."
                        : "Keep learning! Academic writing improves with practice."}
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
            <Link href="/english-advanced/lesson-2" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-advanced/lesson-4"
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
