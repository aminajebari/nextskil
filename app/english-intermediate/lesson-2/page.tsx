"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Edit3, Table, Languages, Volume2, Layout, HelpCircle, ClipboardList, Clock, ArrowLeftRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IntermediateLesson2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(7).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Which sentence uses the Past Continuous correctly?",
      options: [
        "I was watching TV when the phone rang.",
        "I watched TV when the phone was ringing.",
        "I had watched TV when the phone rang."
      ],
      correct: 0,
      explanation: "The correct sentence is 'I was watching TV when the phone rang.' The Past Continuous describes an action in progress (watching TV) that was interrupted by another action (the phone ringing)."
    },
    {
      question: "Which sentence uses the Past Perfect correctly?",
      options: [
        "She already left when I arrived.",
        "She had already left when I arrived.",
        "She was already leaving when I arrived."
      ],
      correct: 1,
      explanation: "The correct sentence is 'She had already left when I arrived.' The Past Perfect shows that one action (leaving) happened before another action (arriving) in the past."
    },
    {
      question: "Complete the sentence: While I __________ dinner, my brother __________ his homework.",
      options: [
        "was cooking, was doing",
        "cooked, did",
        "had cooked, had done"
      ],
      correct: 0,
      explanation: "The correct answer is 'was cooking, was doing'. We use Past Continuous for two actions happening at the same time in the past."
    },
    {
      question: "Complete the sentence: By the time we got to the cinema, the movie __________.",
      options: [
        "started",
        "was starting",
        "had started"
      ],
      correct: 2,
      explanation: "The correct answer is 'had started'. We use Past Perfect to show that the movie started before we arrived at the cinema."
    },
    {
      question: "Which time expression is typically used with Past Continuous?",
      options: [
        "while",
        "already",
        "by the time"
      ],
      correct: 0,
      explanation: "'While' is typically used with Past Continuous to describe two actions happening at the same time. 'Already' and 'by the time' are more commonly used with Past Perfect."
    },
    {
      question: "What is the correct Past Perfect form of 'to eat'?",
      options: [
        "was eating",
        "ate",
        "had eaten"
      ],
      correct: 2,
      explanation: "The correct Past Perfect form is 'had eaten'. Past Perfect is formed with 'had' + past participle."
    },
    {
      question: "Which sentence correctly uses both Past Continuous and Past Perfect?",
      options: [
        "I was cooking when my friend had called.",
        "I had cooked when my friend was calling.",
        "I was cooking when my friend called. I had already prepared the ingredients."
      ],
      correct: 2,
      explanation: "The correct sentence is 'I was cooking when my friend called. I had already prepared the ingredients.' This correctly uses Past Continuous for an action in progress and Past Perfect for an action that happened before that."
    }
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
    setUserAnswers(Array(7).fill(null))
    setShowResults(false)
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <Card className="overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white p-8">
            <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <Link href="/english-course" className="hover:underline">English</Link>
              <span>&gt;</span>
              <Link href="/english-intermediate" className="hover:underline">Intermediate</Link>
              <span>&gt;</span>
              <span>Lesson 2</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Past Tenses – Part 2</h1>
            <p className="text-lg opacity-90">Learn about Past Continuous and Past Perfect tenses in English.</p>
          </div>

          {/* Progress Bar */}
          <div className="bg-muted p-6">
            <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-12">
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Introduction</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  In this lesson, we'll explore two important past tenses: the <strong>Past Continuous</strong> and the <strong>Past Perfect</strong>. These tenses help us express more complex ideas about actions and events in the past.
                </p>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p><strong>Remember:</strong> The Past Simple is used for completed actions in the past, but sometimes we need to show that an action was in progress at a specific time, or that one action happened before another in the past.</p>
                </Card>
              </div>
            </section>

            {/* Past Continuous */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Past Continuous Tense</h2>
              </div>
              <div className="space-y-6 text-lg">
                <p>The Past Continuous (also called Past Progressive) is used to describe actions that were in progress at a specific time in the past.</p>
                
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">Formation: was/were + verb-ing</h4>
                  <p>I was working</p>
                  <p>You were studying</p>
                  <p>He/She/It was sleeping</p>
                  <p>We/They were playing</p>
                </Card>
                
                <h3 className="text-2xl font-bold text-primary mt-6">Uses of Past Continuous</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">1. Actions in progress at a specific time</h4>
                    <p>At 8 PM yesterday, I <strong>was watching</strong> TV.</p>
                    <p>This time last year, we <strong>were living</strong> in Paris.</p>
                  </Card>
                  
                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">2. Interrupted actions</h4>
                    <p>I <strong>was having</strong> a shower when the phone rang.</p>
                    <p>They <strong>were playing</strong> football when it started to rain.</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">3. Two actions at the same time</h4>
                    <p>While I <strong>was cooking</strong>, my brother <strong>was setting</strong> the table.</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">4. Background description</h4>
                    <p>The sun <strong>was shining</strong>, and birds <strong>were singing</strong>.</p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Past Perfect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Past Perfect Tense</h2>
              </div>
              <div className="space-y-6 text-lg">
                <p>The Past Perfect is used to show that one action happened before another action in the past.</p>
                
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">Formation: had + past participle</h4>
                  <p>I had finished</p>
                  <p>You had eaten</p>
                  <p>He/She/It had left</p>
                  <p>We/They had arrived</p>
                </Card>
                
                <h3 className="text-2xl font-bold text-primary mt-6">Uses of Past Perfect</h3>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">1. Action completed before another</h4>
                    <p>When I arrived at the party, John <strong>had already left</strong>.</p>
                  </Card>
                  
                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">2. Before a specific time</h4>
                    <p>By 10 PM last night, I <strong>had completed</strong> the report.</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">3. In reported speech</h4>
                    <p>She said she <strong>had seen</strong> the movie before.</p>
                  </Card>

                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">4. In third conditional</h4>
                    <p>If I <strong>had studied</strong> harder, I would have passed.</p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Comparison */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ArrowLeftRight className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Comparing Past Tenses</h2>
              </div>
              <div className="space-y-6 text-lg">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-border p-3 text-left font-bold">Tense</th>
                        <th className="border border-border p-3 text-left font-bold">Usage</th>
                        <th className="border border-border p-3 text-left font-bold">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-bold">Past Simple</td>
                        <td className="border border-border p-3">Completed actions</td>
                        <td className="border border-border p-3">I <strong>visited</strong> Paris.</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="border border-border p-3 font-bold">Past Continuous</td>
                        <td className="border border-border p-3">Actions in progress</td>
                        <td className="border border-border p-3">I <strong>was watching</strong> TV.</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-bold">Past Perfect</td>
                        <td className="border border-border p-3">Action before another</td>
                        <td className="border border-border p-3">She <strong>had left</strong>.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">Using multiple past tenses together</h4>
                  <p>When I <strong>got</strong> home, my brother <strong>was cooking</strong> dinner. He <strong>had started</strong> cooking before I arrived.</p>
                </Card>
              </div>
            </section>

            {/* Time Expressions */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Time Expressions</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 text-lg">
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">With Past Continuous</h4>
                  <p className="text-sm mb-2">while, when, as, at 5 o'clock</p>
                  <p><strong>While I was studying</strong>, my phone rang.</p>
                </Card>
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">With Past Perfect</h4>
                  <p className="text-sm mb-2">already, just, never, before, by the time</p>
                  <p>She <strong>had already left</strong> when I arrived.</p>
                </Card>
              </div>
            </section>

            {/* Quiz */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Practice Quiz</h2>
              </div>
              <p className="text-lg mb-6">Test your knowledge with this interactive quiz.</p>

              <Card className="p-6">
                {!showResults ? (
                  <>
                    <div className="flex justify-between mb-6 font-semibold">
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span>Score: {score}/{quizQuestions.length}</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                      
                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, idx) => {
                          const isSelected = userAnswers[currentQuestion] === idx
                          const isCorrect = idx === quizQuestions[currentQuestion].correct
                          const showFeedback = userAnswers[currentQuestion] !== null
                          
                          return (
                            <div
                              key={idx}
                              onClick={() => selectOption(idx)}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                !showFeedback
                                  ? isSelected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary hover:bg-primary/5"
                                  : isCorrect
                                    ? "border-green-500 bg-green-50"
                                    : isSelected
                                      ? "border-red-500 bg-red-50"
                                      : "border-border"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {showFeedback ? (
                                  isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                  ) : isSelected ? (
                                    <XCircle className="w-5 h-5 text-red-600" />
                                  ) : null
                                ) : null}
                                <span>{option}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {userAnswers[currentQuestion] !== null && (
                        <Card className={`mt-4 p-4 ${
                          userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct
                            ? "bg-green-50 border-green-500"
                            : "bg-red-50 border-red-500"
                        }`}>
                          <p className="font-semibold">
                            {userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct
                              ? "Correct! "
                              : "Incorrect. "}
                            {quizQuestions[currentQuestion].explanation}
                          </p>
                        </Card>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        onClick={nextQuestion}
                        disabled={userAnswers[currentQuestion] === null}
                      >
                        {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                    <p className="text-lg mb-4">You have finished the Past Tenses Part 2 quiz.</p>
                    <div className="text-4xl font-bold text-primary my-6">
                      Score: {score}/{quizQuestions.length}
                    </div>
                    <p className="text-lg mb-6">
                      {score === quizQuestions.length
                        ? "Excellent! You have mastered Past Continuous and Past Perfect tenses."
                        : score >= quizQuestions.length * 0.7
                          ? "Very good! You have a solid understanding of Past Continuous and Past Perfect tenses."
                          : score >= quizQuestions.length * 0.5
                            ? "Not bad! Keep practicing to improve your mastery of past tenses."
                            : "Don't get discouraged! Review the lesson and try again."}
                    </p>
                    <Button onClick={restartQuiz} variant="destructive">
                      Restart Quiz
                    </Button>
                  </div>
                )}
              </Card>
            </section>

            {/* Summary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Summary</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p>To summarize what we've learned about Past Continuous and Past Perfect tenses:</p>
                <ul className="space-y-2 ml-6">
                  {[
                    "Past Continuous is formed with was/were + verb-ing and describes actions in progress",
                    "Past Perfect is formed with had + past participle and shows one action happened before another",
                    "Past Continuous uses time expressions like while, when, at 5 o'clock",
                    "Past Perfect uses time expressions like already, just, by the time",
                    "We can use multiple past tenses together to describe complex situations"
                  ].map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6 mt-6">
                  <p><strong>Tip:</strong> Pay attention to the sequence of events when using past tenses. If one action happened before another in the past, use Past Perfect for the earlier action.</p>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t">
              <Link href="/english-intermediate/lesson-1">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Lesson
                </Button>
              </Link>
              <Link href="/english-intermediate/lesson-3">
                <Button>
                  Next Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
