"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishLesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const alphabet = [
    { letter: "A", pronunciation: "ah" },
    { letter: "B", pronunciation: "beh" },
    { letter: "C", pronunciation: "seh" },
    { letter: "D", pronunciation: "deh" },
    { letter: "E", pronunciation: "eh" },
    { letter: "F", pronunciation: "EH-feh" },
    { letter: "G", pronunciation: "heh" },
    { letter: "H", pronunciation: "AH-cheh" },
    { letter: "I", pronunciation: "ee" },
    { letter: "J", pronunciation: "HOH-tah" },
    { letter: "K", pronunciation: "kah" },
    { letter: "L", pronunciation: "EH-leh" },
    { letter: "M", pronunciation: "EH-meh" },
    { letter: "N", pronunciation: "EH-neh" },
    { letter: "Ñ", pronunciation: "EH-nyeh" },
    { letter: "O", pronunciation: "oh" },
    { letter: "P", pronunciation: "peh" },
    { letter: "Q", pronunciation: "koo" },
    { letter: "R", pronunciation: "EH-reh" },
    { letter: "S", pronunciation: "EH-seh" },
    { letter: "T", pronunciation: "teh" },
    { letter: "U", pronunciation: "oo" },
    { letter: "V", pronunciation: "oo-beh" },
    { letter: "W", pronunciation: "DOH-bleh oo-beh" },
    { letter: "X", pronunciation: "EH-kees" },
    { letter: "Y", pronunciation: "ee GRYEH-gah" },
    { letter: "Z", pronunciation: "SEH-tah" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/spanish-beginner"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver al Curso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lección 2 de 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">El Alfabeto Español</h1>
          <p className="text-gray-600">Aprende las letras y su pronunciación</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              El alfabeto español tiene 27 letras, incluyendo la Ñ que es única del español. Aprende cada letra con su
              pronunciación correcta.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">El Alfabeto Completo</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
            {alphabet.map((item) => (
              <div
                key={item.letter}
                className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-1">{item.letter}</div>
                <div className="text-xs text-gray-500">{item.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicios de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. ¿Qué letra es única del alfabeto español?</h3>
              <div className="space-y-3">
                {[
                  { label: "K", value: "incorrect" },
                  { label: "Ñ", value: "correct" },
                  { label: "W", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null
                        ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
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
                  ¡Correcto! La Ñ es única del alfabeto español.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. ¿Cuántas letras tiene el alfabeto español?</h3>
                <div className="space-y-3">
                  {[
                    { label: "26", value: "incorrect" },
                    { label: "27", value: "correct" },
                    { label: "28", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null
                          ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
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
                    ¡Perfecto! El alfabeto español tiene 27 letras.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-beginner/lesson-1">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-beginner/lesson-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
