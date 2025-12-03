"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FrenchLesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const animals = [
    { french: "Le chien", english: "Dog", emoji: "🐕" },
    { french: "Le chat", english: "Cat", emoji: "🐈" },
    { french: "L'oiseau", english: "Bird", emoji: "🐦" },
    { french: "Le poisson", english: "Fish", emoji: "🐟" },
    { french: "Le cheval", english: "Horse", emoji: "🐴" },
    { french: "La vache", english: "Cow", emoji: "🐄" },
    { french: "Le cochon", english: "Pig", emoji: "🐷" },
    { french: "Le mouton", english: "Sheep", emoji: "🐑" },
    { french: "Le lapin", english: "Rabbit", emoji: "🐰" },
    { french: "La souris", english: "Mouse", emoji: "🐭" },
    { french: "L'éléphant", english: "Elephant", emoji: "🐘" },
    { french: "Le lion", english: "Lion", emoji: "🦁" },
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
            <div className="text-sm font-medium text-gray-500">Leçon 5 sur 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Les animaux</h1>
          <p className="text-gray-600">Découvrez le vocabulaire des animaux courants en français</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              En français, chaque nom d'animal a un genre (masculin ou féminin). Remarquez l'article devant chaque
              animal : "le" pour le masculin et "la" pour le féminin. "L'" est utilisé devant une voyelle.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les animaux courants</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {animals.map((animal) => (
              <div
                key={animal.french}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-4xl mb-2">{animal.emoji}</div>
                <div className="text-lg font-bold text-blue-600">{animal.french}</div>
                <div className="text-sm text-gray-500">{animal.english}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exemples de phrases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { french: "J'ai un chien.", english: "I have a dog." },
              { french: "Le chat dort sur le canapé.", english: "The cat sleeps on the sofa." },
              { french: "Les oiseaux chantent.", english: "The birds are singing." },
              { french: "Ma vache s'appelle Marguerite.", english: "My cow is called Marguerite." },
            ].map((phrase, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <p className="text-lg font-medium text-gray-800 mb-1">{phrase.french}</p>
                  <p className="text-gray-500 italic">{phrase.english}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Comment dit-on "cat" en français ?</h3>
              <div className="space-y-3">
                {[
                  { label: "Le chat", value: "correct" },
                  { label: "Le chien", value: "incorrect" },
                  { label: "Le cheval", value: "incorrect" },
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
                  Correct ! "Le chat" signifie cat en anglais.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Quel est l'article correct pour "oiseau" ?</h3>
                <div className="space-y-3">
                  {[
                    { label: "L'oiseau", value: "correct" },
                    { label: "Le oiseau", value: "incorrect" },
                    { label: "La oiseau", value: "incorrect" },
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
                    Excellent ! On utilise "L'" devant les mots commençant par une voyelle.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/french-beginner/lesson-4">
            <Button variant="outline">Leçon précédente</Button>
          </Link>
          <Link href="/french-beginner">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" disabled={quiz2Result !== "correct"}>
              Terminer <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
