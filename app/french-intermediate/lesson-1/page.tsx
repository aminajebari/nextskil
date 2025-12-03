"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Edit3, Table, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchIntermediateLesson1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(7).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Quel est le passé composé de 'manger' (je) ?",
      options: ["j'ai mangé", "je suis mangé", "j'avais mangé"],
      correct: 0,
      explanation: "Avec l'auxiliaire 'avoir', on forme : j'ai + participe passé (mangé).",
    },
    {
      question: "Quel auxiliaire utilise-t-on avec 'aller' ?",
      options: ["avoir", "être", "les deux"],
      correct: 1,
      explanation: "'Aller' utilise l'auxiliaire 'être' : je suis allé(e).",
    },
    {
      question: "Comment s'accorde le participe passé avec 'être' ?",
      options: ["Jamais", "Avec le sujet", "Avec le COD"],
      correct: 1,
      explanation: "Avec 'être', le participe passé s'accorde en genre et en nombre avec le sujet.",
    },
    {
      question: "Quel est le participe passé de 'faire' ?",
      options: ["faisé", "fait", "faité"],
      correct: 1,
      explanation: "Le participe passé de 'faire' est 'fait' (verbe irrégulier).",
    },
    {
      question: "Quelle phrase est correcte ?",
      options: ["Elle est allé au marché.", "Elle est allée au marché.", "Elle a allée au marché."],
      correct: 1,
      explanation: "Avec 'être', le participe s'accorde avec le sujet féminin : 'allée'.",
    },
    {
      question: "Quel est le passé composé de 'venir' (nous) ?",
      options: ["nous avons venu", "nous sommes venus", "nous avons venus"],
      correct: 1,
      explanation: "'Venir' utilise 'être' et s'accorde : nous sommes venus.",
    },
    {
      question: "Quand utilise-t-on le passé composé ?",
      options: ["Actions habituelles passées", "Actions ponctuelles terminées", "Descriptions passées"],
      correct: 1,
      explanation: "Le passé composé exprime des actions ponctuelles et terminées dans le passé.",
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
              <span>Leçon 1</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Le Passé Composé</h1>
            <p className="text-lg opacity-90">Apprenez à conjuguer et utiliser le passé composé en français.</p>
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
                <h2 className="text-3xl font-bold">Introduction au passé composé</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Le passé composé est le temps le plus utilisé pour exprimer des actions passées en français. Il est
                  formé de deux parties : un auxiliaire (avoir ou être) et un participe passé.
                </p>
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p>
                    <strong>Exemple :</strong> J'ai mangé une pomme. (avoir + mangé)
                  </p>
                  <p>
                    <strong>Exemple :</strong> Elle est partie hier. (être + partie)
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Formation du passé composé</h2>
              </div>
              <div className="space-y-6 text-lg">
                <h3 className="text-2xl font-bold text-primary">Avec l'auxiliaire AVOIR</h3>
                <p>La majorité des verbes utilisent l'auxiliaire "avoir".</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Verbes en -ER → -É</h4>
                    <p>manger → mangé</p>
                    <p>parler → parlé</p>
                    <p>travailler → travaillé</p>
                  </Card>
                  <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">Verbes en -IR → -I</h4>
                    <p>finir → fini</p>
                    <p>choisir → choisi</p>
                    <p>réussir → réussi</p>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-6">Avec l'auxiliaire ÊTRE</h3>
                <p>Les verbes de mouvement et les verbes pronominaux utilisent "être".</p>
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">Les 14 verbes de la "maison d'être"</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <p>aller → allé</p>
                    <p>venir → venu</p>
                    <p>partir → parti</p>
                    <p>arriver → arrivé</p>
                    <p>entrer → entré</p>
                    <p>sortir → sorti</p>
                    <p>monter → monté</p>
                    <p>descendre → descendu</p>
                    <p>naître → né</p>
                    <p>mourir → mort</p>
                    <p>rester → resté</p>
                    <p>tomber → tombé</p>
                    <p>retourner → retourné</p>
                    <p>passer → passé</p>
                  </div>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Table className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Conjugaison complète</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-lg">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left font-bold">Sujet</th>
                      <th className="border border-border p-3 text-left font-bold">AVOIR + mangé</th>
                      <th className="border border-border p-3 text-left font-bold">ÊTRE + allé(e)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Je", "j'ai mangé", "je suis allé(e)"],
                      ["Tu", "tu as mangé", "tu es allé(e)"],
                      ["Il/Elle", "il/elle a mangé", "il est allé / elle est allée"],
                      ["Nous", "nous avons mangé", "nous sommes allé(e)s"],
                      ["Vous", "vous avez mangé", "vous êtes allé(e)(s)"],
                      ["Ils/Elles", "ils/elles ont mangé", "ils sont allés / elles sont allées"],
                    ].map(([sujet, avoir, etre], idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="border border-border p-3 font-medium">{sujet}</td>
                        <td className="border border-border p-3">{avoir}</td>
                        <td className="border border-border p-3">{etre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                !showFeedback
                                  ? "border-border hover:border-primary hover:bg-primary/5"
                                  : isCorrect
                                    ? "border-green-500 bg-green-50"
                                    : isSelected
                                      ? "border-red-500 bg-red-50"
                                      : "border-border"
                              }`}
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
                          className={`mt-4 p-4 ${userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"}`}
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
                    <p className="text-muted-foreground mb-6">
                      {score >= 5 ? "Excellent travail !" : "Continuez à pratiquer !"}
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button variant="outline" onClick={restartQuiz}>
                        Recommencer
                      </Button>
                      <Link href="/french-intermediate/lesson-2">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-intermediate">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Retour au cours
                </Button>
              </Link>
              <Link href="/french-intermediate/lesson-2">
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
