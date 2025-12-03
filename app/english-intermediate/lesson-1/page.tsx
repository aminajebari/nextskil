"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Edit3, Table, Languages, Volume2, Layout, HelpCircle, ClipboardList } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function IntermediateLesson1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(7).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "What is the correct Past Simple form of 'work'?",
      options: ["worked", "workd", "worket"],
      correct: 0,
      explanation: "The correct form is 'worked'. For most regular verbs, we simply add -ed."
    },
    {
      question: "What is the correct Past Simple form of 'go'?",
      options: ["goed", "went", "goed"],
      correct: 1,
      explanation: "The correct form is 'went'. 'Go' is an irregular verb with its own unique past form."
    },
    {
      question: "What is the correct Past Simple form of 'study'?",
      options: ["studied", "studyed", "studed"],
      correct: 0,
      explanation: "The correct form is 'studied'. For verbs ending in -y preceded by a consonant, we change the -y to -i before adding -ed."
    },
    {
      question: "What is the correct Past Simple form of 'eat'?",
      options: ["eated", "ated", "ate"],
      correct: 2,
      explanation: "The correct form is 'ate'. 'Eat' is an irregular verb with its own unique past form."
    },
    {
      question: "Which sentence correctly uses the Past Simple?",
      options: [
        "Yesterday, I work from home.",
        "Last week, she goes to Paris.",
        "Two days ago, they played football."
      ],
      correct: 2,
      explanation: "The correct sentence is 'Two days ago, they played football.' because 'played' is the correct Past Simple form of 'play'."
    },
    {
      question: "How do you form a negative sentence in Past Simple?",
      options: [
        "Subject + didn't + base verb",
        "Subject + not + Past Simple verb",
        "Subject + don't + base verb"
      ],
      correct: 0,
      explanation: "The correct structure is 'Subject + didn't + base verb'. Example: 'I didn't work yesterday.'"
    },
    {
      question: "Which -ed ending is pronounced differently?",
      options: ["worked", "played", "wanted"],
      correct: 2,
      explanation: "'Wanted' is pronounced with /ɪd/ because it ends with a /t/ sound. 'Worked' and 'played' are pronounced with /t/ and /d/ respectively."
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
              <span>Lesson 1</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Past Tenses – Part 1</h1>
            <p className="text-lg opacity-90">Learn about the Past Simple tense with regular and irregular verbs in English.</p>
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
                <h2 className="text-3xl font-bold">Introduction to Past Tenses</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  English has several past tenses that help us express when actions happened in the past. In this lesson, we'll focus on the <strong>Past Simple tense</strong>, which is used to talk about completed actions in the past.
                </p>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p><strong>Example:</strong> Yesterday, I worked until 6 p.m.</p>
                  <p><strong>Example:</strong> Last week, she went to Paris.</p>
                </Card>
                
                <p>The Past Simple is often accompanied by time expressions that clearly indicate the action happened in the past:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>yesterday</li>
                  <li>last week/month/year</li>
                  <li>two days ago</li>
                  <li>in 2010</li>
                  <li>when I was young</li>
                </ul>
              </div>
            </section>

            {/* Formation */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Forming the Past Simple</h2>
              </div>
              <div className="space-y-6 text-lg">
                <p>There are two types of verbs in the Past Simple: <strong>regular verbs</strong> and <strong>irregular verbs</strong>.</p>
                
                <h3 className="text-2xl font-bold text-primary">Regular Verbs</h3>
                <p>To form the Past Simple of regular verbs, we typically add <strong>-ed</strong> to the end of the base verb.</p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">General Rule: Verb + -ed</h4>
                    <p>work → worked</p>
                    <p>play → played</p>
                    <p>watch → watched</p>
                  </Card>
                  
                  <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Rule 1: Verbs ending in -e</h4>
                    <p>For verbs ending in -e, we add only -d.</p>
                    <p>like → liked</p>
                    <p>live → lived</p>
                  </Card>

                  <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Rule 2: One-syllable verbs (CVC)</h4>
                    <p>Double the final consonant before adding -ed.</p>
                    <p>stop → stopped</p>
                    <p>plan → planned</p>
                  </Card>

                  <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Rule 3: Verbs ending in -y</h4>
                    <p>Change -y to -i if preceded by a consonant.</p>
                    <p>study → studied</p>
                    <p>carry → carried</p>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-6">Irregular Verbs</h3>
                <p>Irregular verbs don't follow the -ed rule. Each irregular verb has its own unique past form that must be memorized.</p>
                
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">Common Irregular Verbs</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <p>go → went</p>
                    <p>see → saw</p>
                    <p>eat → ate</p>
                    <p>have → had</p>
                    <p>do → did</p>
                    <p>make → made</p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Common Verbs Table */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Table className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Common Verbs - Past Simple Forms</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-lg">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left font-bold">Base Verb</th>
                      <th className="border border-border p-3 text-left font-bold">Past Simple</th>
                      <th className="border border-border p-3 text-left font-bold">Type</th>
                      <th className="border border-border p-3 text-left font-bold">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["ask", "asked", "regular", "to request information"],
                      ["be", "was/were", "irregular", "to exist"],
                      ["clean", "cleaned", "regular", "to make clean"],
                      ["cook", "cooked", "regular", "to prepare food"],
                      ["do", "did", "irregular", "to perform an action"],
                      ["eat", "ate", "irregular", "to consume food"],
                      ["go", "went", "irregular", "to move from one place to another"],
                      ["have", "had", "irregular", "to possess"],
                      ["help", "helped", "regular", "to assist"],
                      ["like", "liked", "regular", "to find pleasant"],
                      ["look", "looked", "regular", "to direct one's gaze"],
                      ["make", "made", "irregular", "to create"],
                      ["see", "saw", "irregular", "to perceive with eyes"],
                      ["take", "took", "irregular", "to grasp"],
                      ["talk", "talked", "regular", "to speak"],
                      ["think", "thought", "irregular", "to have an opinion"],
                      ["visit", "visited", "regular", "to go see someone"],
                      ["work", "worked", "regular", "to engage in labor"]
                    ].map(([base, past, type, meaning], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="border border-border p-3 font-medium">{base}</td>
                        <td className="border border-border p-3 text-primary font-medium">{past}</td>
                        <td className="border border-border p-3 italic">{type}</td>
                        <td className="border border-border p-3 text-muted-foreground">{meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Usage */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Using the Past Simple</h2>
              </div>
              <div className="grid gap-4 text-lg">
                {[
                  { title: "1. Completed actions at a specific time", examples: ["I visited Paris last summer.", "She finished her homework an hour ago."] },
                  { title: "2. Repeated actions in the past", examples: ["When I was a child, I played football every day.", "They always walked to school."] },
                  { title: "3. Sequences of actions", examples: ["I woke up, brushed my teeth, and went to work."] },
                  { title: "4. Historical facts", examples: ["The Romans invaded Britain in 43 AD."] },
                  { title: "5. Past habits", examples: ["He smoked when he was younger. (He doesn't smoke now)", "We lived in London for five years."] }
                ].map((usage, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-green-500 bg-green-50">
                    <h3 className="font-bold text-green-900 mb-2">{usage.title}</h3>
                    {usage.examples.map((ex, i) => <p key={i}>{ex}</p>)}
                  </Card>
                ))}
              </div>
            </section>

            {/* Pronunciation */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Pronunciation of -ed Endings</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3 text-lg">
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-900 mb-2">/t/ Sound</h3>
                  <p className="text-sm mb-2">After voiceless sounds: /p/, /k/, /f/, /s/, /ʃ/, /tʃ/</p>
                  <p>worked, helped, watched</p>
                </Card>
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-900 mb-2">/d/ Sound</h3>
                  <p className="text-sm mb-2">After voiced sounds and vowels</p>
                  <p>played, lived, cleaned</p>
                </Card>
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-900 mb-2">/ɪd/ Sound</h3>
                  <p className="text-sm mb-2">After /t/ and /d/ sounds</p>
                  <p>wanted, needed, visited</p>
                </Card>
              </div>
            </section>

            {/* Sentence Structure */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Sentence Structure</h2>
              </div>
              <div className="grid gap-4 text-lg">
                <Card className="p-6 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-bold text-green-900 mb-2">Affirmative Sentences</h3>
                  <p className="mb-2 text-sm">Subject + Past Simple verb + (object) + (time expression)</p>
                  <p><strong>I worked</strong> yesterday.</p>
                  <p><strong>She played</strong> tennis last weekend.</p>
                </Card>
                <Card className="p-6 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-bold text-green-900 mb-2">Negative Sentences</h3>
                  <p className="mb-2 text-sm">Subject + did not (didn't) + base verb + ...</p>
                  <p><strong>I did not work</strong> yesterday.</p>
                  <p><strong>She didn't play</strong> tennis last weekend.</p>
                </Card>
                <Card className="p-6 border-l-4 border-green-500 bg-green-50">
                  <h3 className="font-bold text-green-900 mb-2">Questions</h3>
                  <p className="mb-2 text-sm">Did + subject + base verb + ...?</p>
                  <p><strong>Did you work</strong> yesterday?</p>
                  <p><strong>Did she play</strong> tennis last weekend?</p>
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
                    <p className="text-lg mb-4">You have finished the Past Tenses Part 1 quiz.</p>
                    <div className="text-4xl font-bold text-primary my-6">
                      Score: {score}/{quizQuestions.length}
                    </div>
                    <p className="text-lg mb-6">
                      {score === quizQuestions.length
                        ? "Excellent! You have mastered the Past Simple tense."
                        : score >= quizQuestions.length * 0.7
                          ? "Very good! You have a solid understanding of the Past Simple tense."
                          : score >= quizQuestions.length * 0.5
                            ? "Not bad! Keep practicing to improve your mastery of the Past Simple."
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
                <p>To summarize what we've learned about the Past Simple tense:</p>
                <ul className="space-y-2 ml-6">
                  {[
                    "There are regular verbs (add -ed) and irregular verbs (unique forms)",
                    "We form the Past Simple of regular verbs by adding -ed to the base verb",
                    "There are spelling rules for verbs ending in -e, -y, or with a short vowel followed by a consonant",
                    "The -ed ending is pronounced /t/, /d/ or /ɪd/ depending on the preceding sound",
                    "The Past Simple is used for completed actions in the past",
                    "Negative sentences use 'did not' + base verb",
                    "Questions use 'Did' + subject + base verb"
                  ].map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6 mt-6">
                  <p><strong>Tip:</strong> Practice regularly by forming Past Simple sentences with verbs you know. The more you practice, the more natural it will become!</p>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t">
              <Link href="/english-intermediate">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Intermediate Level
                </Button>
              </Link>
              <Link href="/english-intermediate/lesson-2">
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
