"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FrenchLesson4Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const colors = [
    { color: "Rouge", hex: "#EF4444", example: "La rose est rouge." },
    { color: "Bleu", hex: "#3B82F6", example: "Le ciel est bleu." },
    { color: "Vert", hex: "#22C55E", example: "L'herbe est verte." },
    { color: "Jaune", hex: "#EAB308", example: "Le soleil est jaune." },
    { color: "Orange", hex: "#F97316", example: "L'orange est orange." },
    { color: "Violet", hex: "#8B5CF6", example: "La fleur est violette." },
    { color: "Rose", hex: "#EC4899", example: "Le flamant est rose." },
    { color: "Noir", hex: "#1F2937", example: "La nuit est noire." },
    { color: "Blanc", hex: "#F9FAFB", example: "La neige est blanche." },
    { color: "Gris", hex: "#6B7280", example: "Le ciel est gris." },
    { color: "Marron", hex: "#92400E", example: "Le chocolat est marron." },
    { color: "Beige", hex: "#D4C5A9", example: "Le sable est beige." },
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
            <div className="text-sm font-medium text-gray-500">Leçon 4 sur 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Les couleurs</h1>
          <p className="text-gray-600">Apprenez à nommer et utiliser les couleurs en français</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Les couleurs sont essentielles pour décrire le monde autour de nous. En français, les adjectifs de couleur
              s'accordent généralement en genre et en nombre avec le nom qu'ils qualifient.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les couleurs principales</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {colors.map((item) => (
              <div
                key={item.color}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 border-2 border-gray-200"
                  style={{ backgroundColor: item.hex }}
                />
                <div className="text-lg font-bold text-gray-800">{item.color}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accord des couleurs</h2>
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-blue-600 mb-4">Règle générale</h3>
              <p className="text-gray-700 mb-4">Les adjectifs de couleur s'accordent en genre et en nombre :</p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Masculin singulier :</strong> un chat noir
                </li>
                <li>
                  <strong>Féminin singulier :</strong> une robe noire
                </li>
                <li>
                  <strong>Masculin pluriel :</strong> des chats noirs
                </li>
                <li>
                  <strong>Féminin pluriel :</strong> des robes noires
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-bold text-orange-600 mb-4">Exception</h3>
              <p className="text-gray-700">
                Les couleurs dérivées de noms (orange, marron) sont invariables : des chaussures orange, des yeux
                marron.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Quelle couleur est "bleu" ?</h3>
              <div className="space-y-3">
                {[
                  { label: "Blue (like the sky)", value: "correct", color: "#3B82F6" },
                  { label: "Red", value: "incorrect", color: "#EF4444" },
                  { label: "Green", value: "incorrect", color: "#22C55E" },
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
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: option.color }} />
                      <span>{option.label}</span>
                    </div>
                    {quiz1Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Correct ! "Bleu" signifie blue en anglais.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Comment dit-on "green" en français ?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Vert", value: "correct" },
                    { label: "Gris", value: "incorrect" },
                    { label: "Violet", value: "incorrect" },
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
                    Excellent ! "Vert" signifie green en anglais.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/french-beginner/lesson-3">
            <Button variant="outline">Leçon précédente</Button>
          </Link>
          <Link href="/french-beginner/lesson-5">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" disabled={quiz2Result !== "correct"}>
              Leçon suivante <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
