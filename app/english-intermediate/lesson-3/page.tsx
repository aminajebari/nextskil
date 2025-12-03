"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function IntermediateLesson3() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Which conditional is used for general truths and facts?",
      options: ["Zero Conditional", "First Conditional", "Second Conditional"],
      correct: 0,
      explanation: "The Zero Conditional is used for general truths and facts, like 'If you heat ice, it melts.'",
    },
    {
      question: "Complete the sentence: If I had known you were coming, __________.",
      options: ["I would have baked a cake", "I will bake a cake", "I would bake a cake"],
      correct: 0,
      explanation:
        "The correct answer is 'I would have baked a cake.' This is a Third Conditional sentence about a past situation that didn't happen.",
    },
    {
      question: "Which sentence is an example of the First Conditional?",
      options: [
        "If it rains, we'll cancel the picnic.",
        "If it rained, we would cancel the picnic.",
        "If it had rained, we would have canceled the picnic.",
      ],
      correct: 0,
      explanation:
        "The First Conditional is used for real future possibilities. 'If it rains, we'll cancel the picnic' expresses a real possibility.",
    },
    {
      question: "Complete the sentence: If I were you, I __________ that job offer.",
      options: ["would accept", "will accept", "would have accepted"],
      correct: 0,
      explanation:
        "The correct answer is 'would accept.' This is a Second Conditional sentence giving advice about a hypothetical situation.",
    },
    {
      question: "Which conditional is used for impossible past situations?",
      options: ["First Conditional", "Second Conditional", "Third Conditional"],
      correct: 2,
      explanation:
        "The Third Conditional is used for impossible past situations, like 'If I had studied, I would have passed the exam.'",
    },
    {
      question:
        "What is the correct form of the verb in this Zero Conditional sentence: If you __________ water, it __________.",
      options: ["heat, boils", "heated, would boil", "had heated, would have boiled"],
      correct: 0,
      explanation:
        "The correct answer is 'heat, boils.' Zero Conditional uses present simple in both clauses for general truths.",
    },
    {
      question: "Which sentence is an example of a mixed conditional?",
      options: [
        "If I had studied harder, I would have a better job now.",
        "If it rains, we will stay home.",
        "If I were rich, I would travel the world.",
      ],
      correct: 0,
      explanation:
        "The correct answer is 'If I had studied harder, I would have a better job now.' This is a mixed conditional with a past condition and present result.",
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
          {/* Breadcrumb */}
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
            <span className="text-foreground">Lesson 3</span>
          </div>

          {/* Header */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Conditional and Hypotheses</h1>
            <p className="text-muted-foreground">
              Learn about conditional sentences and how to express hypotheses in English.
            </p>
          </div>

          {/* Content */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conditional sentences allow us to talk about real and unreal situations, possibilities, and their
              consequences. In this lesson, we'll explore the four main types of conditionals and how to form
              hypotheses.
            </p>

            <div className="bg-muted p-4 rounded-lg border-l-4 border-primary mb-6">
              <p className="font-semibold">Remember:</p>
              <p className="text-muted-foreground">
                Conditional sentences typically have two parts: the condition (if-clause) and the result (main clause).
                The verb tenses in each part depend on how likely or real the situation is.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Zero Conditional</h2>
            <p className="text-muted-foreground mb-4">
              The Zero Conditional is used for general truths, scientific facts, and situations that are always true.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Formation: If + present simple, present simple</p>
              <p>If you heat ice, it melts.</p>
              <p>If people don't eat, they get hungry.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">First Conditional</h2>
            <p className="text-muted-foreground mb-4">
              The First Conditional is used for real and possible situations in the future.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Formation: If + present simple, will + base verb</p>
              <p>If it rains, we will cancel the picnic.</p>
              <p>If I have time, I will call you.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Second Conditional</h2>
            <p className="text-muted-foreground mb-4">
              The Second Conditional is used for hypothetical, unlikely, or impossible situations in the present or
              future.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Formation: If + past simple, would + base verb</p>
              <p>If I won the lottery, I would travel the world.</p>
              <p>If I were you, I would study more.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Third Conditional</h2>
            <p className="text-muted-foreground mb-4">
              The Third Conditional is used for hypothetical situations in the past - things that did not happen.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold mb-2">Formation: If + past perfect, would have + past participle</p>
              <p>If I had studied harder, I would have passed the exam.</p>
              <p>If she had known, she would have come.</p>
            </div>
          </div>

          {/* Quiz */}
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
                      const showAnswer = hasAnswered

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
                    ? "Excellent! You have mastered Conditionals and Hypotheses."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have a solid understanding of Conditionals and Hypotheses."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Keep practicing to improve your mastery of conditionals."
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

          {/* Navigation */}
          <div className="flex justify-between">
            <Link href="/english-intermediate/lesson-2" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-intermediate/lesson-4"
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
