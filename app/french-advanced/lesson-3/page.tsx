"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchAdvancedLesson3() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Que signifie l'expression 'avoir le cafard' ?",
      options: ["Avoir un insecte", "Être triste/déprimé", "Avoir faim"],
      correct: 1,
      explanation: "'Avoir le cafard' signifie être mélancolique ou déprimé.",
    },
    {
      question: "Que signifie 'poser un lapin' ?",
      options: ["Mettre un lapin quelque part", "Ne pas venir à un rendez-vous", "Offrir un cadeau"],
      correct: 1,
      explanation: "'Poser un lapin' signifie ne pas venir à un rendez-vous convenu.",
    },
    {
      question: "Que veut dire 'avoir du pain sur la planche' ?",
      options: ["Avoir faim", "Avoir beaucoup de travail", "Être boulanger"],
      correct: 1,
      explanation: "Cette expression signifie avoir beaucoup de travail à faire.",
    },
    {
      question: "Que signifie 'coûter les yeux de la tête' ?",
      options: ["Faire mal aux yeux", "Être très cher", "Être laid"],
      correct: 1,
      explanation: "Cette expression signifie que quelque chose est extrêmement cher.",
    },
    {
      question: "Que veut dire 'tomber dans les pommes' ?",
      options: ["Tomber dans un verger", "S'évanouir", "Manger des pommes"],
      correct: 1,
      explanation: "'Tomber dans les pommes' signifie perdre connaissance, s'évanouir.",
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
          <div className="bg-gradient-to-r from-indigo-800 to-indigo-500 text-white p-8">
            <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
              <span>&gt;</span>
              <Link href="/french-course" className="hover:underline">
                Français
              </Link>
              <span>&gt;</span>
              <Link href="/french-advanced" className="hover:underline">
                Avancé
              </Link>
              <span>&gt;</span>
              <span>Leçon 3</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Expressions Idiomatiques</h1>
            <p className="text-lg opacity-90">
              Découvrez les expressions françaises les plus courantes et leur signification.
            </p>
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
                <h2 className="text-3xl font-bold">Les expressions idiomatiques françaises</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Les expressions idiomatiques sont des phrases dont le sens ne peut pas être déduit des mots
                  individuels. Elles sont essentielles pour parler français comme un natif.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Expressions courantes</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    expr: "Avoir le cafard",
                    meaning: "Être triste, déprimé",
                    example: "Depuis son départ, j'ai le cafard.",
                  },
                  {
                    expr: "Poser un lapin",
                    meaning: "Ne pas venir à un rendez-vous",
                    example: "Il m'a posé un lapin hier soir !",
                  },
                  {
                    expr: "Avoir du pain sur la planche",
                    meaning: "Avoir beaucoup de travail",
                    example: "Avec ce projet, on a du pain sur la planche.",
                  },
                  {
                    expr: "Coûter les yeux de la tête",
                    meaning: "Être très cher",
                    example: "Cette voiture coûte les yeux de la tête.",
                  },
                  {
                    expr: "Tomber dans les pommes",
                    meaning: "S'évanouir",
                    example: "Il faisait si chaud qu'elle est tombée dans les pommes.",
                  },
                  {
                    expr: "Mettre son grain de sel",
                    meaning: "Donner son avis sans qu'on le demande",
                    example: "Il met toujours son grain de sel !",
                  },
                  {
                    expr: "Avoir la pêche",
                    meaning: "Être en forme, de bonne humeur",
                    example: "Aujourd'hui, j'ai la pêche !",
                  },
                  {
                    expr: "Casser les pieds",
                    meaning: "Ennuyer, agacer quelqu'un",
                    example: "Arrête de me casser les pieds !",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-bold text-primary">{item.expr}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.meaning}</p>
                    <p className="text-sm italic">"{item.example}"</p>
                  </Card>
                ))}
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
                      <Link href="/french-advanced/lesson-4">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-advanced/lesson-2">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-advanced/lesson-4">
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
