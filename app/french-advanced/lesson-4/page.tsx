"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, HelpCircle, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchAdvancedLesson4() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Qui a écrit 'Les Misérables' ?",
      options: ["Émile Zola", "Victor Hugo", "Gustave Flaubert"],
      correct: 1,
      explanation: "Victor Hugo a écrit 'Les Misérables', publié en 1862.",
    },
    {
      question: "Quel mouvement littéraire est associé à Baudelaire ?",
      options: ["Le Romantisme", "Le Symbolisme", "Le Naturalisme"],
      correct: 1,
      explanation: "Baudelaire est considéré comme un précurseur du Symbolisme.",
    },
    {
      question: "Qui est l'auteur du 'Petit Prince' ?",
      options: ["Albert Camus", "Antoine de Saint-Exupéry", "Jean-Paul Sartre"],
      correct: 1,
      explanation: "Antoine de Saint-Exupéry a écrit 'Le Petit Prince' en 1943.",
    },
    {
      question: "Quel est le siècle d'or de la littérature française ?",
      options: ["Le XVIe siècle", "Le XVIIe siècle", "Le XIXe siècle"],
      correct: 1,
      explanation: "Le XVIIe siècle est considéré comme le Grand Siècle avec Molière, Racine, Corneille.",
    },
    {
      question: "Qui a écrit 'Madame Bovary' ?",
      options: ["Gustave Flaubert", "Honoré de Balzac", "Stendhal"],
      correct: 0,
      explanation: "Gustave Flaubert a écrit 'Madame Bovary', chef-d'œuvre du réalisme.",
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
              <span>Leçon 4</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Littérature Française</h1>
            <p className="text-lg opacity-90">Explorez les grands auteurs et œuvres de la littérature française.</p>
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
                <h2 className="text-3xl font-bold">La littérature française à travers les siècles</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  La littérature française est l'une des plus riches et des plus influentes au monde. Elle a traversé de
                  nombreux mouvements et a produit des chefs-d'œuvre intemporels.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Les grands mouvements littéraires</h2>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    mouvement: "Le Classicisme (XVIIe siècle)",
                    auteurs: "Molière, Racine, Corneille, La Fontaine",
                    caracteristiques: "Respect des règles, clarté, raison, bienséance",
                  },
                  {
                    mouvement: "Les Lumières (XVIIIe siècle)",
                    auteurs: "Voltaire, Rousseau, Diderot, Montesquieu",
                    caracteristiques: "Raison, progrès, critique sociale, encyclopédisme",
                  },
                  {
                    mouvement: "Le Romantisme (XIXe siècle)",
                    auteurs: "Victor Hugo, Lamartine, Musset, Chateaubriand",
                    caracteristiques: "Émotion, nature, liberté créatrice, le moi",
                  },
                  {
                    mouvement: "Le Réalisme (XIXe siècle)",
                    auteurs: "Flaubert, Balzac, Stendhal, Maupassant",
                    caracteristiques: "Description objective de la réalité, critique sociale",
                  },
                  {
                    mouvement: "L'Existentialisme (XXe siècle)",
                    auteurs: "Sartre, Camus, Beauvoir",
                    caracteristiques: "Liberté, responsabilité, absurde, engagement",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-primary">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.mouvement}</h3>
                    <p className="mb-1">
                      <strong>Auteurs :</strong> {item.auteurs}
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Caractéristiques :</strong> {item.caracteristiques}
                    </p>
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
                      <Link href="/french-advanced/lesson-5">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-advanced/lesson-3">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-advanced/lesson-5">
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
