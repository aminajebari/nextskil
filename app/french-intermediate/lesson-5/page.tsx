"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Info, Edit3, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchIntermediateLesson5() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "L'homme ___ je parle est mon professeur.",
      options: ["qui", "que", "dont"],
      correct: 2,
      explanation: "'Dont' remplace un complément introduit par 'de' (parler DE quelqu'un).",
    },
    {
      question: "Le livre ___ tu lis est intéressant.",
      options: ["qui", "que", "où"],
      correct: 1,
      explanation: "'Que' est le COD du verbe (tu lis le livre).",
    },
    {
      question: "La femme ___ travaille ici est ma mère.",
      options: ["qui", "que", "dont"],
      correct: 0,
      explanation: "'Qui' est le sujet du verbe (la femme travaille).",
    },
    {
      question: "Le restaurant ___ nous avons dîné était excellent.",
      options: ["qui", "que", "où"],
      correct: 2,
      explanation: "'Où' indique le lieu (nous avons dîné dans le restaurant).",
    },
    {
      question: "C'est le film ___ j'ai parlé.",
      options: ["qui", "que", "dont"],
      correct: 2,
      explanation: "'Dont' remplace 'duquel/de laquelle' (parler DE quelque chose).",
    },
  ]

  const selectOption = (optionIndex: number) => {
    if (userAnswers[currentQuestion] !== null) return
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = optionIndex
    setUserAnswers(newAnswers)
    if (optionIndex === quizQuestions[currentQuestion].correct) setScore(score + 1)
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) setCurrentQuestion(currentQuestion + 1)
    else setShowResults(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setUserAnswers(Array(5).fill(null))
    setShowResults(false)
  }
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8">
            <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
              <span>&gt;</span>
              <Link href="/french-course" className="hover:underline">
                Français
              </Link>
              <span>&gt;</span>
              <Link href="/french-intermediate" className="hover:underline">
                Intermédiaire
              </Link>
              <span>&gt;</span>
              <span>Leçon 5</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Les Pronoms Relatifs</h1>
            <p className="text-lg opacity-90">Maîtrisez qui, que, dont et où pour construire des phrases complexes.</p>
          </div>

          <div className="bg-muted p-6">
            <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="p-8 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Introduction aux pronoms relatifs</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Les pronoms relatifs permettent de relier deux phrases en évitant la répétition. Ils introduisent une
                  proposition subordonnée relative.
                </p>
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p>
                    <strong>Sans pronom :</strong> J'ai un ami. Cet ami habite à Paris.
                  </p>
                  <p>
                    <strong>Avec pronom :</strong> J'ai un ami qui habite à Paris.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Les quatre pronoms principaux</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 text-lg">
                <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">QUI - Sujet</h4>
                  <p className="mb-2">Remplace le sujet du verbe de la relative.</p>
                  <p className="italic">La femme qui parle est ma tante.</p>
                  <p className="text-sm text-muted-foreground">(La femme parle → qui = sujet)</p>
                </Card>
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">QUE - COD</h4>
                  <p className="mb-2">Remplace le complément d'objet direct.</p>
                  <p className="italic">Le film que j'ai vu était génial.</p>
                  <p className="text-sm text-muted-foreground">(J'ai vu le film → que = COD)</p>
                </Card>
                <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">DONT - Complément en "de"</h4>
                  <p className="mb-2">Remplace un complément introduit par "de".</p>
                  <p className="italic">Le livre dont je parle est célèbre.</p>
                  <p className="text-sm text-muted-foreground">(Je parle de ce livre → dont)</p>
                </Card>
                <Card className="p-6 bg-purple-50 border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-900 mb-2">OÙ - Lieu/Temps</h4>
                  <p className="mb-2">Indique le lieu ou le moment.</p>
                  <p className="italic">La ville où je suis né est petite.</p>
                  <p className="text-sm text-muted-foreground">(Je suis né dans cette ville → où)</p>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Quiz de pratique</h2>
              </div>
              <Card className="p-6">
                {!showResults ? (
                  <>
                    <div className="flex justify-between mb-6 font-semibold">
                      <span>
                        Question {currentQuestion + 1} sur {quizQuestions.length}
                      </span>
                      <span>
                        Score : {score}/{quizQuestions.length}
                      </span>
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
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${!showFeedback ? "border-border hover:border-primary" : isCorrect ? "border-green-500 bg-green-50" : isSelected ? "border-red-500 bg-red-50" : "border-border"}`}
                            >
                              <div className="flex items-center gap-3">
                                {showFeedback && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                                {showFeedback && isSelected && !isCorrect && (
                                  <XCircle className="w-5 h-5 text-red-600" />
                                )}
                                <span>{option}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      {userAnswers[currentQuestion] !== null && (
                        <Card
                          className={`mt-4 p-4 ${userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct ? "bg-green-50" : "bg-red-50"}`}
                        >
                          <p>{quizQuestions[currentQuestion].explanation}</p>
                        </Card>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                        disabled={currentQuestion === 0}
                      >
                        Précédent
                      </Button>
                      <Button onClick={nextQuestion} disabled={userAnswers[currentQuestion] === null}>
                        {currentQuestion === quizQuestions.length - 1 ? "Voir résultats" : "Suivant"}
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Quiz terminé !</h3>
                    <p className="text-4xl font-bold text-primary mb-4">
                      {score}/{quizQuestions.length}
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" onClick={restartQuiz}>
                        Recommencer
                      </Button>
                      <Link href="/french-intermediate">
                        <Button>Retour au cours</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-intermediate/lesson-4">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-intermediate">
                <Button>
                  Terminer <CheckCircle className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
