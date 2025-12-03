"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FrenchLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/french-beginner"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour au cours
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Leçon 1 sur 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Salutations de base</h1>
          <p className="text-gray-600">
            Maîtrisez les salutations essentielles en français pour les conversations quotidiennes
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Introduction aux salutations</h2>
            <p className="text-gray-700 leading-relaxed">
              Les salutations sont les premiers mots que nous utilisons lorsque nous rencontrons quelqu'un. Apprendre
              les salutations correctes est essentiel pour commencer des conversations en français.
            </p>
          </CardContent>
        </Card>

        {/* Common Greetings Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Salutations courantes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Bonjour",
                desc: "Salutation universelle utilisée pendant la journée, du matin jusqu'au soir. Formelle et polie.",
                example: "Bonjour, je m'appelle Marie.",
              },
              {
                title: "Bonsoir",
                desc: "Utilisé à partir de 18h environ jusqu'au coucher. Approprié dans les situations formelles et informelles.",
                example: "Bonsoir, comment allez-vous ?",
              },
              {
                title: "Salut",
                desc: "Salutation informelle entre amis et personnes proches. À éviter dans les contextes formels.",
                example: "Salut ! Ça va ?",
              },
              {
                title: "Au revoir",
                desc: "Formule d'adieu universelle, utilisable dans toutes les situations.",
                example: "Au revoir, à bientôt !",
              },
              {
                title: "Comment allez-vous ?",
                desc: 'Question formelle pour demander des nouvelles. Utilisez "tu vas bien ?" avec les amis.',
                example: "Bonjour Madame, comment allez-vous ?",
              },
              {
                title: "Enchanté(e)",
                desc: "Utilisé lors d'une première rencontre pour exprimer le plaisir de faire connaissance.",
                example: "Bonjour, je suis Paul. Enchanté !",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-900 italic">
                    <strong>Exemple :</strong> "{item.example}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>

          {/* Quiz 1 */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Quelle salutation utiliser le matin ?</h3>
              <div className="space-y-3">
                {[
                  { label: "Bonjour", value: "correct" },
                  { label: "Bonsoir", value: "incorrect" },
                  { label: "Bonne nuit", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as "correct" | "incorrect")}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null
                        ? "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                        : quiz1Result === "correct" && option.value === "correct"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200"
                    } ${quiz1Result !== null && option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : ""}`}
                    disabled={quiz1Result === "correct"}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                    {quiz1Result === "incorrect" && option.value === "incorrect" && (
                      <XCircle size={20} className="text-red-500" />
                    )}
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Correct ! "Bonjour" s'utilise du matin jusqu'au soir.
                </div>
              )}
              {quiz1Result === "incorrect" && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                  Incorrect. Réessayez !
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quiz 2 */}
          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  2. Que dit-on quand on rencontre quelqu'un pour la première fois ?
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Enchanté(e)", value: "correct" },
                    { label: "À bientôt", value: "incorrect" },
                    { label: "Au revoir", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as "correct" | "incorrect")}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null
                          ? "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                          : quiz2Result === "correct" && option.value === "correct"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200"
                      } ${quiz2Result !== null && option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : ""}`}
                      disabled={quiz2Result === "correct"}
                    >
                      <span>{option.label}</span>
                      {quiz2Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                    </button>
                  ))}
                </div>
                {quiz2Result === "correct" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    Excellent ! "Enchanté(e)" est parfait pour les premières présentations.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button variant="outline" disabled>
            Leçon précédente
          </Button>
          <Link href="/french-beginner/lesson-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" disabled={quiz2Result !== "correct"}>
              Leçon suivante <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
