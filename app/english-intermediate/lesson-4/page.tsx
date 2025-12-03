"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { ChevronRight, Check, X } from "lucide-react"

export default function IntermediateLesson4() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([null, null, null, null, null, null, null, null])
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What does 'give up' mean?",
      options: ["To stop trying", "To distribute something", "To celebrate"],
      correct: 0,
      explanation: "'Give up' means to stop trying or quit something.",
    },
    {
      question: "Which phrasal verb means 'to search for information'?",
      options: ["look up", "look after", "look for"],
      correct: 0,
      explanation: "'Look up' means to search for information, especially in a reference source.",
    },
    {
      question: "What does 'run out of' mean?",
      options: ["To exercise", "To use all of something", "To leave quickly"],
      correct: 1,
      explanation: "'Run out of' means to use all of something so that there is none left.",
    },
    {
      question: "Which sentence uses 'take after' correctly?",
      options: [
        "I need to take after my sister from school.",
        "She takes after her mother in appearance.",
        "Let's take after this project tomorrow.",
      ],
      correct: 1,
      explanation: "'Take after' means to resemble a family member in appearance or character.",
    },
    {
      question: "What does 'bring up' mean?",
      options: ["To elevate something", "To raise a child or mention a topic", "To arrive unexpectedly"],
      correct: 1,
      explanation: "'Bring up' can mean to raise a child or to mention a topic in conversation.",
    },
    {
      question: "Which phrasal verb means 'to cancel'?",
      options: ["call off", "put off", "turn off"],
      correct: 0,
      explanation: "'Call off' means to cancel an event or activity.",
    },
    {
      question: "What is the meaning of 'get along'?",
      options: ["To leave a place", "To have a good relationship", "To make progress"],
      correct: 1,
      explanation: "'Get along' means to have a harmonious or friendly relationship with someone.",
    },
    {
      question: "Which phrasal verb is intransitive (doesn't take an object)?",
      options: ["look up", "turn down", "grow up"],
      correct: 2,
      explanation: "'Grow up' is intransitive - it doesn't take an object. You can't 'grow up something'.",
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
    setUserAnswers([null, null, null, null, null, null, null, null])
    setShowResults(false)
  }

  const currentQuestionData = quizQuestions[currentQuestion]
  const hasAnswered = userAnswers[currentQuestion] !== null

  const phrasalVerbs = [
    { verb: "Look up", meaning: "To search for information", example: "I need to look up the meaning of this word." },
    { verb: "Give up", meaning: "To stop trying or quit", example: "Don't give up on your dreams." },
    { verb: "Turn down", meaning: "To refuse or reject", example: "She turned down the job offer." },
    { verb: "Take after", meaning: "To resemble a family member", example: "He takes after his father." },
    {
      verb: "Bring up",
      meaning: "To raise a child or mention a topic",
      example: "She was brought up in a small town.",
    },
    { verb: "Get along", meaning: "To have a good relationship", example: "I get along well with my colleagues." },
    { verb: "Run out of", meaning: "To use all of something so none is left", example: "We've run out of milk." },
    { verb: "Look forward to", meaning: "To anticipate with pleasure", example: "I'm looking forward to the weekend." },
    { verb: "Put off", meaning: "To postpone", example: "They put off the meeting until next week." },
    { verb: "Call off", meaning: "To cancel", example: "The concert was called off due to bad weather." },
  ]

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
            <span className="text-foreground">Lesson 4</span>
          </div>

          {/* Header */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold mb-3">Common Phrasal Verbs</h1>
            <p className="text-muted-foreground">
              Learn essential phrasal verbs and how to use them correctly in English.
            </p>
          </div>

          {/* Content */}
          <div className="bg-card border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction to Phrasal Verbs</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Phrasal verbs are combinations of a verb and one or more particles (typically prepositions or adverbs)
              that together create a new meaning different from the original verb.
            </p>

            <div className="bg-muted p-4 rounded-lg border-l-4 border-primary mb-6">
              <p className="font-semibold mb-2">Example:</p>
              <p>"give up" means to stop trying or quit, which is different from just "give"</p>
              <p>"look after" means to take care of someone, not just to look</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Common Phrasal Verbs</h2>
            <div className="space-y-4">
              {phrasalVerbs.map((pv, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-lg mb-2">{pv.verb}</h3>
                  <p className="text-muted-foreground italic mb-2">{pv.meaning}</p>
                  <p>
                    <span className="font-semibold">Example:</span> {pv.example}
                  </p>
                </div>
              ))}
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
                    ? "Excellent! You have mastered common phrasal verbs."
                    : score >= quizQuestions.length * 0.7
                      ? "Very good! You have a solid understanding of common phrasal verbs."
                      : score >= quizQuestions.length * 0.5
                        ? "Not bad! Keep practicing to improve your knowledge of phrasal verbs."
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
            <Link href="/english-intermediate/lesson-3" className="px-6 py-2 rounded-lg bg-muted hover:bg-muted/80">
              Previous Lesson
            </Link>
            <Link
              href="/english-intermediate/lesson-5"
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
