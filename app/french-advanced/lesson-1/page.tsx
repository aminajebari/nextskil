"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Edit3, Layout, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FrenchAdvancedLesson1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(5).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Quelle est une caractéristique de la rédaction académique ?",
      options: ["Utilisation d'expressions familières", "Ton formel et langage précis", "Langage émotionnel"],
      correct: 1,
      explanation: "La rédaction académique se caractérise par un ton formel et un langage précis.",
    },
    {
      question: "Quel est l'équivalent académique de 'beaucoup de' ?",
      options: ["plein de", "considérable", "énormément"],
      correct: 1,
      explanation: "'Considérable' est l'alternative formelle et académique à 'beaucoup de'.",
    },
    {
      question: "Que doit contenir l'introduction d'un texte académique ?",
      options: ["Analyse statistique détaillée", "La problématique et le contexte", "Opinions personnelles"],
      correct: 1,
      explanation: "L'introduction présente la problématique, le contexte et annonce le plan.",
    },
    {
      question: "Quand faut-il citer ses sources ?",
      options: [
        "Uniquement pour les citations directes",
        "Pour les citations et les paraphrases",
        "Uniquement pour les statistiques",
      ],
      correct: 1,
      explanation: "Il faut citer pour les citations directes, les paraphrases et les idées empruntées.",
    },
    {
      question: "Quelle phrase démontre un style académique approprié ?",
      options: [
        "Les résultats prouvent totalement notre hypothèse.",
        "Les résultats suggèrent une confirmation potentielle.",
        "Je pense que les résultats sont corrects.",
      ],
      correct: 1,
      explanation:
        "Le style académique utilise la nuance ('suggèrent', 'potentielle') et évite les affirmations catégoriques.",
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
              <span>Leçon 1</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">La Rédaction Académique</h1>
            <p className="text-lg opacity-90">
              Maîtrisez les compétences nécessaires pour une rédaction académique efficace en français.
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
                <h2 className="text-3xl font-bold">Introduction à la rédaction académique</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  La rédaction académique est un style formel utilisé dans les universités et les publications
                  scientifiques. Elle suit des conventions spécifiques et exige précision, clarté et une approche
                  structurée.
                </p>
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p className="font-semibold">
                    Caractéristiques clés : Ton formel, langage précis, arguments fondés sur des preuves, structure
                    claire et perspective objective.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Caractéristiques du style académique</h2>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    title: "Ton formel",
                    desc: "Évitez les contractions, le langage familier et les pronoms personnels 'je' ou 'tu'.",
                    example: '"La recherche indique" plutôt que "Je pense que la recherche montre"',
                  },
                  {
                    title: "Langage précis",
                    desc: "Utilisez une terminologie spécifique et évitez les expressions vagues.",
                    example: '"L\'échantillon était insuffisant" plutôt que "Il n\'y avait pas assez de personnes"',
                  },
                  {
                    title: "Fondé sur des preuves",
                    desc: "Les arguments sont soutenus par des sources crédibles.",
                    example: '"Comme l\'a démontré Dupont (2020), la corrélation était significative"',
                  },
                  {
                    title: "Structure claire",
                    desc: "Suivez une organisation logique : introduction, développement, conclusion.",
                    example: "Structure standard avec thèse, paragraphes de développement et conclusion",
                  },
                  {
                    title: "Perspective objective",
                    desc: "Maintenez un ton impartial et évitez le langage émotionnel.",
                    example: '"Les résultats suggèrent" plutôt que "Les résultats incroyables prouvent"',
                  },
                ].map((feature, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-primary">
                    <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="mb-2">{feature.desc}</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Exemple :</strong> {feature.example}
                    </p>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Structure d'un texte académique</h2>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    title: "Introduction",
                    points: [
                      "Présente le sujet et son importance",
                      "Fournit le contexte",
                      "Énonce la problématique ou la thèse",
                      "Annonce le plan",
                    ],
                  },
                  {
                    title: "Développement",
                    points: [
                      "Chaque paragraphe développe une idée principale",
                      "Commence par une phrase thématique",
                      "Fournit des preuves et des exemples",
                      "Inclut analyse et explication",
                      "Utilise des transitions entre les paragraphes",
                    ],
                  },
                  {
                    title: "Conclusion",
                    points: [
                      "Reformule la thèse différemment",
                      "Résume les points principaux",
                      "Discute des implications",
                      "Ouvre sur de nouvelles perspectives",
                      "N'introduit pas de nouvelles informations",
                    ],
                  },
                ].map((section, idx) => (
                  <Card key={idx} className="p-6 bg-destructive/5 border-l-4 border-destructive">
                    <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.points.map((point, pidx) => (
                        <li key={pidx} className="flex gap-2">
                          <span className="text-destructive">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
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
                      <Link href="/french-advanced/lesson-2">
                        <Button>Leçon suivante</Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            </section>

            <div className="flex justify-between items-center pt-8 border-t">
              <Link href="/french-advanced">
                <Button variant="outline">
                  <ArrowLeft className="mr-2" size={16} />
                  Retour au cours
                </Button>
              </Link>
              <Link href="/french-advanced/lesson-2">
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
