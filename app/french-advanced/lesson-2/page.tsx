"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchAdvancedLesson2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Comment commence-t-on un email professionnel en français ?",
      options: ["Salut !", "Madame, Monsieur,", "Coucou,"],
      correct: 1,
      explanation: "En contexte professionnel, on utilise 'Madame, Monsieur,' ou le titre approprié.",
    },
    {
      question: "Quelle formule de politesse est appropriée pour terminer un email formel ?",
      options: ["Bisous", "Veuillez agréer mes salutations distinguées", "À plus"],
      correct: 1,
      explanation: "Les formules de politesse formelles sont essentielles dans la correspondance professionnelle.",
    },
    {
      question: "Comment demander poliment un rendez-vous ?",
      options: [
        "Je veux un rendez-vous.",
        "Serait-il possible de convenir d'un rendez-vous ?",
        "Donne-moi un rendez-vous.",
      ],
      correct: 1,
      explanation: "Le conditionnel et les formules interrogatives polies sont privilégiés.",
    },
    {
      question: "Quel terme utiliser pour 'deadline' en français professionnel ?",
      options: ["deadline", "échéance", "fin"],
      correct: 1,
      explanation: "'Échéance' est le terme français correct pour deadline.",
    },
    {
      question: "Comment présenter un désaccord de manière diplomatique ?",
      options: ["Vous avez tort.", "Je me permets de nuancer ce point.", "C'est faux."],
      correct: 1,
      explanation: "En contexte professionnel, on utilise des formulations diplomatiques pour exprimer un désaccord.",
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
              <span>Leçon 2</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Le Français des Affaires</h1>
            <p className="text-lg opacity-90">
              Vocabulaire professionnel et compétences en communication d'entreprise.
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
                <h2 className="text-3xl font-bold">Le français professionnel</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Le français des affaires est essentiel pour communiquer efficacement dans un environnement
                  professionnel francophone. Il se distingue par son formalisme et ses conventions spécifiques.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Vocabulaire professionnel essentiel</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { fr: "Une réunion", en: "A meeting", example: "Nous avons une réunion à 14h." },
                  { fr: "Un compte rendu", en: "Minutes/Report", example: "Veuillez rédiger le compte rendu." },
                  { fr: "Une échéance", en: "Deadline", example: "L'échéance est fixée au 15 mars." },
                  { fr: "Un chiffre d'affaires", en: "Turnover/Revenue", example: "Le chiffre d'affaires a augmenté." },
                  { fr: "Un entretien", en: "Interview", example: "J'ai un entretien d'embauche demain." },
                  { fr: "Une facture", en: "Invoice", example: "Merci d'envoyer la facture." },
                ].map((item, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-bold text-primary">{item.fr}</h4>
                    <p className="text-sm text-muted-foreground">{item.en}</p>
                    <p className="text-sm italic mt-2">{item.example}</p>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Formules de correspondance</h2>
              <div className="grid gap-4">
                <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">Formules d'ouverture</h4>
                  <ul className="space-y-1">
                    <li>Madame, Monsieur,</li>
                    <li>Cher Monsieur Dupont,</li>
                    <li>Suite à notre conversation téléphonique,</li>
                    <li>Je me permets de vous contacter concernant...</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-2">Formules de clôture</h4>
                  <ul className="space-y-1">
                    <li>Veuillez agréer, Madame, Monsieur, mes salutations distinguées.</li>
                    <li>Cordialement,</li>
                    <li>Bien cordialement,</li>
                    <li>Dans l'attente de votre réponse, je vous prie d'agréer...</li>
                  </ul>
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
                      <Link href="/french-advanced/lesson-3">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-advanced/lesson-1">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Leçon précédente
                </Button>
              </Link>
              <Link href="/french-advanced/lesson-3">
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
