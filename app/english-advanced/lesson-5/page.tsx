"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function AdvancedLesson5() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      correct: 0,
      explanation: "William Shakespeare wrote 'Romeo and Juliet', one of his most famous tragedies.",
    },
    {
      question: "What is a metaphor?",
      options: ["A comparison without 'like' or 'as'", "A direct comparison using 'like'", "A sound effect"],
      correct: 0,
      explanation: "A metaphor is a figure of speech that describes something by saying it is something else.",
    },
    {
      question: "Which novel begins with 'It was the best of times, it was the worst of times'?",
      options: ["Pride and Prejudice", "A Tale of Two Cities", "Great Expectations"],
      correct: 1,
      explanation: "'A Tale of Two Cities' by Charles Dickens begins with this famous line.",
    },
    {
      question: "What is personification?",
      options: ["Giving human qualities to non-human things", "A person's character", "Writing about people"],
      correct: 0,
      explanation: "Personification is giving human characteristics to non-human things or ideas.",
    },
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
      correct: 0,
      explanation: "George Orwell wrote the dystopian novel '1984'.",
    },
    {
      question: "What is alliteration?",
      options: ["Repetition of initial consonant sounds", "Rhyming words", "Long sentences"],
      correct: 0,
      explanation: "Alliteration is the repetition of the same sound at the beginning of words.",
    },
    {
      question: "Which author wrote 'Pride and Prejudice'?",
      options: ["Jane Austen", "Emily Brontë", "Virginia Woolf"],
      correct: 0,
      explanation: "Jane Austen wrote 'Pride and Prejudice', published in 1813.",
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
            <span className="text-foreground">Lesson 5</span>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Literature and Culture</h1>
            <p className="text-muted-foreground">Explore English literature, famous authors, and literary devices.</p>
          </div>

          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              English literature is rich with masterpieces from renowned authors. Understanding literary devices and
              cultural context enhances your appreciation of texts.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Famous Authors</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• William Shakespeare - Playwright and poet ('Romeo and Juliet', 'Hamlet')</p>
              <p>• Jane Austen - Novelist ('Pride and Prejudice', 'Emma')</p>
              <p>• Charles Dickens - Victorian novelist ('Oliver Twist', 'A Tale of Two Cities')</p>
              <p>• George Orwell - Author of dystopian fiction ('1984', 'Animal Farm')</p>
              <p>• Virginia Woolf - Modernist writer ('Mrs Dalloway', 'To the Lighthouse')</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Literary Devices</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p className="font-semibold">Metaphor:</p>
              <p className="mb-2">A comparison without 'like' or 'as'. Example: "Time is a thief"</p>

              <p className="font-semibold mt-3">Simile:</p>
              <p className="mb-2">A comparison using 'like' or 'as'. Example: "As brave as a lion"</p>

              <p className="font-semibold mt-3">Personification:</p>
              <p className="mb-2">Giving human qualities to non-human things. Example: "The wind whispered"</p>

              <p className="font-semibold mt-3">Alliteration:</p>
              <p>Repetition of initial sounds. Example: "Peter Piper picked a peck"</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Literary Periods</h2>
            <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-600 mb-4">
              <p>• Renaissance (1500-1660): Shakespeare, Marlowe</p>
              <p>• Romantic (1798-1837): Wordsworth, Byron, Shelley</p>
              <p>• Victorian (1837-1901): Dickens, Brontë sisters</p>
              <p>• Modernist (1900-1945): Joyce, Woolf, Eliot</p>
              <p>• Contemporary (1945-present): Diverse voices and styles</p>
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
                    ? "Excellent! You have mastered Literature and Culture."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have strong knowledge of English literature."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Continue exploring English literature."
                        : "Keep learning! Literature appreciation develops over time."}
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
            <Link href="/english-advanced/lesson-4" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-advanced"
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
