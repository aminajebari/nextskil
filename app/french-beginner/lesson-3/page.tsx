"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FrenchLesson3Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const numbers = [
    { number: 1, french: "un" },
    { number: 2, french: "deux" },
    { number: 3, french: "trois" },
    { number: 4, french: "quatre" },
    { number: 5, french: "cinq" },
    { number: 6, french: "six" },
    { number: 7, french: "sept" },
    { number: 8, french: "huit" },
    { number: 9, french: "neuf" },
    { number: 10, french: "dix" },
    { number: 11, french: "onze" },
    { number: 12, french: "douze" },
    { number: 13, french: "treize" },
    { number: 14, french: "quatorze" },
    { number: 15, french: "quinze" },
    { number: 16, french: "seize" },
    { number: 17, french: "dix-sept" },
    { number: 18, french: "dix-huit" },
    { number: 19, french: "dix-neuf" },
    { number: 20, french: "vingt" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="text-sm font-medium text-gray-500">Leçon 3 sur 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nombres de 1 à 20</h1>
          <p className="text-gray-600">
            Apprenez à compter en français et utilisez les nombres dans des phrases simples
          </p>
        </div>

        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Les nombres sont essentiels dans la vie quotidienne : pour dire l'heure, faire des achats, donner son âge
              ou son numéro de téléphone. Maîtrisez les nombres de 1 à 20 pour commencer !
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les nombres de 1 à 20</h2>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 gap-4">
            {numbers.map((item) => (
              <div
                key={item.number}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">{item.number}</div>
                <div className="text-sm text-gray-700 font-medium">{item.french}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exemples d'utilisation</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { context: "Donner son âge", example: "J'ai vingt ans." },
              { context: "Acheter quelque chose", example: "Je voudrais trois croissants, s'il vous plaît." },
              { context: "Dire l'heure", example: "Il est huit heures." },
              { context: "Compter des objets", example: "Il y a douze élèves dans la classe." },
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">{item.context}</h3>
                  <p className="text-gray-700 italic">"{item.example}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Comment dit-on "15" en français ?</h3>
              <div className="space-y-3">
                {[
                  { label: "quinze", value: "correct" },
                  { label: "cinq", value: "incorrect" },
                  { label: "cinquante", value: "incorrect" },
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
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Correct ! 15 se dit "quinze" en français.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Quel nombre est "dix-sept" ?</h3>
                <div className="space-y-3">
                  {[
                    { label: "17", value: "correct" },
                    { label: "7", value: "incorrect" },
                    { label: "70", value: "incorrect" },
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
                    Excellent ! "Dix-sept" signifie 17 (dix + sept).
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/french-beginner/lesson-2">
            <Button variant="outline">Leçon précédente</Button>
          </Link>
          <Link href="/french-beginner/lesson-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" disabled={quiz2Result !== "correct"}>
              Leçon suivante <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
