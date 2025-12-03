"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Info, HelpCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchAdvancedLesson5() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Quelle est la fête nationale française ?",
      options: ["Le 11 novembre", "Le 14 juillet", "Le 8 mai"],
      correct: 1,
      explanation: "Le 14 juillet commémore la prise de la Bastille en 1789.",
    },
    {
      question: "Que symbolise la Marianne ?",
      options: ["La monarchie", "La République française", "L'Europe"],
      correct: 1,
      explanation: "Marianne est l'allégorie de la République française.",
    },
    {
      question: "Quelle est la devise de la France ?",
      options: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Union et Force"],
      correct: 0,
      explanation: "La devise 'Liberté, Égalité, Fraternité' date de la Révolution française.",
    },
    {
      question: "Combien de pays ont le français comme langue officielle ?",
      options: ["15", "29", "45"],
      correct: 1,
      explanation: "Le français est langue officielle dans 29 pays à travers le monde.",
    },
    {
      question: "Qu'est-ce que la Francophonie ?",
      options: ["Un mouvement politique", "L'ensemble des pays francophones", "Une région de France"],
      correct: 1,
      explanation: "La Francophonie désigne l'ensemble des pays et régions où le français est parlé.",
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
              <span>Leçon 5</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Culture et Société Françaises</h1>
            <p className="text-lg opacity-90">
              Découvrez les aspects culturels et sociétaux de la France et de la Francophonie.
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
                <h2 className="text-3xl font-bold">La culture française</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  La culture française est reconnue mondialement pour sa richesse et sa diversité. De l'art à la
                  gastronomie, en passant par la mode et la philosophie, la France a influencé le monde entier.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Symboles de la France</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    symbole: "La Marseillaise",
                    desc: "L'hymne national français, composé en 1792 pendant la Révolution.",
                  },
                  {
                    symbole: "Le drapeau tricolore",
                    desc: "Bleu, blanc, rouge - symbole de la République depuis 1794.",
                  },
                  { symbole: "Marianne", desc: "Figure allégorique de la République, symbole de liberté." },
                  { symbole: "Le coq gaulois", desc: "Emblème national, symbole de fierté et de vigilance." },
                  {
                    symbole: "La devise",
                    desc: "'Liberté, Égalité, Fraternité' - valeurs fondamentales de la République.",
                  },
                  { symbole: "Le 14 juillet", desc: "Fête nationale commémorant la prise de la Bastille." },
                ].map((item, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-bold text-primary">{item.symbole}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">La Francophonie</h2>
              <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                <p className="mb-4">
                  La Francophonie regroupe l'ensemble des pays et régions où le français est langue officielle ou
                  couramment parlé :
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Europe :</strong> France, Belgique, Suisse, Luxembourg, Monaco
                  </li>
                  <li>
                    <strong>Amérique :</strong> Canada (Québec), Haïti, Martinique, Guadeloupe
                  </li>
                  <li>
                    <strong>Afrique :</strong> Sénégal, Côte d'Ivoire, Mali, Cameroun, RDC, etc.
                  </li>
                  <li>
                    <strong>Océan Indien :</strong> Madagascar, Maurice, Seychelles
                  </li>
                  <li>
                    <strong>Pacifique :</strong> Nouvelle-Calédonie, Polynésie française
                  </li>
                </ul>
              </Card>
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
                    <h3 className="text-2xl font-bold mb-4">Félicitations !</h3>
                    <p className="text-4xl font-bold text-primary mb-4">
                      {score}/{quizQuestions.length}
                    </p>
                    <p className="text-muted-foreground mb-6">Vous avez terminé le niveau avancé de français !</p>
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" onClick={restartQuiz}>
                        Recommencer
                      </Button>
                      <Link href="/french-advanced">
                        <Button>Retour au cours</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-advanced/lesson-4">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-advanced">
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
