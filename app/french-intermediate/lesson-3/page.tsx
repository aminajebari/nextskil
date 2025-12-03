"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Edit3, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchIntermediateLesson3() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Demain, je ___ au cinéma.",
      options: ["vais", "irai", "allais"],
      correct: 1,
      explanation: "Le futur simple exprime une action future certaine.",
    },
    {
      question: "Quelle est la terminaison du futur pour 'tu' ?",
      options: ["-as", "-ais", "-es"],
      correct: 0,
      explanation: "Les terminaisons du futur : -ai, -as, -a, -ons, -ez, -ont.",
    },
    {
      question: "Nous ___ en vacances l'été prochain.",
      options: ["partons", "partirons", "partions"],
      correct: 1,
      explanation: "Le futur simple de 'partir' : je partirai, tu partiras, etc.",
    },
    {
      question: "Quel est le radical du futur pour 'avoir' ?",
      options: ["av-", "aur-", "ai-"],
      correct: 1,
      explanation: "'Avoir' a un radical irrégulier au futur : aur-.",
    },
    {
      question: "Elle ___ 30 ans l'année prochaine.",
      options: ["a", "aura", "avait"],
      correct: 1,
      explanation: "Futur de 'avoir' : j'aurai, tu auras, il/elle aura...",
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
              <span>Leçon 3</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Le Futur Simple</h1>
            <p className="text-lg opacity-90">Exprimez vos projets et prédictions avec le futur simple.</p>
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
                <h2 className="text-3xl font-bold">Introduction au futur simple</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Le futur simple exprime une action qui se produira dans l'avenir. Il est souvent accompagné
                  d'expressions temporelles comme "demain", "l'année prochaine", "dans trois jours".
                </p>
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p>
                    <strong>Projet :</strong> L'année prochaine, je voyagerai en France.
                  </p>
                  <p>
                    <strong>Prédiction :</strong> Il pleuvra demain.
                  </p>
                  <p>
                    <strong>Promesse :</strong> Je t'appellerai ce soir.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Formation du futur simple</h2>
              </div>
              <div className="space-y-6 text-lg">
                <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Règle générale</h4>
                  <p className="mb-2">Infinitif + terminaisons du futur</p>
                  <p>parler → je parlerai, finir → je finirai</p>
                </Card>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">Terminaisons</h4>
                    <ul className="space-y-1">
                      <li>Je → -ai</li>
                      <li>Tu → -as</li>
                      <li>Il/Elle → -a</li>
                      <li>Nous → -ons</li>
                      <li>Vous → -ez</li>
                      <li>Ils/Elles → -ont</li>
                    </ul>
                  </Card>
                  <Card className="p-6 bg-orange-50 border-l-4 border-orange-500">
                    <h4 className="font-bold text-orange-900 mb-2">Radicaux irréguliers</h4>
                    <ul className="space-y-1">
                      <li>être → ser- (je serai)</li>
                      <li>avoir → aur- (j'aurai)</li>
                      <li>aller → ir- (j'irai)</li>
                      <li>faire → fer- (je ferai)</li>
                      <li>venir → viendr- (je viendrai)</li>
                      <li>pouvoir → pourr- (je pourrai)</li>
                    </ul>
                  </Card>
                </div>
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
                      <Link href="/french-intermediate/lesson-4">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-intermediate/lesson-2">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-intermediate/lesson-4">
                <Button>
                  Leçon suivante <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
