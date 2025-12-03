"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishIntermediateLesson4Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const modals = [
    {
      verb: "poder",
      meaning: "can, to be able to",
      example: "Puedo hablar español.",
      translation: "I can speak Spanish.",
    },
    { verb: "deber", meaning: "must, should", example: "Debes estudiar más.", translation: "You should study more." },
    {
      verb: "querer",
      meaning: "to want",
      example: "Quiero aprender español.",
      translation: "I want to learn Spanish.",
    },
    {
      verb: "tener que",
      meaning: "have to",
      example: "Tengo que trabajar mañana.",
      translation: "I have to work tomorrow.",
    },
    {
      verb: "saber",
      meaning: "to know how to",
      example: "Sé nadar muy bien.",
      translation: "I know how to swim very well.",
    },
    { verb: "necesitar", meaning: "to need", example: "Necesito ayuda.", translation: "I need help." },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/spanish-intermediate"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver al Curso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lección 4 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Verbos Modales</h1>
          <p className="text-gray-600">Aprende a usar poder, deber, querer y otros modales</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Los verbos modales expresan posibilidad, obligación, deseo o necesidad. Se usan junto con el infinitivo de
              otro verbo para expresar diferentes matices de significado.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verbos Modales Comunes</h2>
          <div className="space-y-4">
            {modals.map((modal) => (
              <div key={modal.verb} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{modal.verb}</span>
                  <span className="text-sm text-gray-500">({modal.meaning})</span>
                </div>
                <div className="text-sm text-gray-700 italic mb-1">{modal.example}</div>
                <div className="text-xs text-gray-500">{modal.translation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicios de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. "No _____ ir a la fiesta porque estoy enfermo."</h3>
              <div className="space-y-3">
                {[
                  { label: "puedo", value: "correct" },
                  { label: "quiero", value: "incorrect" },
                  { label: "necesito", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null
                        ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
                        : option.value === "correct"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200"
                    }`}
                    disabled={quiz1Result === "correct"}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  ¡Correcto! "Puedo" expresa la capacidad o posibilidad de hacer algo.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  2. "Ella _____ estudiar más para el examen." (obligación)
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "puede", value: "incorrect" },
                    { label: "debe", value: "correct" },
                    { label: "sabe", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null
                          ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
                          : option.value === "correct"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200"
                      }`}
                      disabled={quiz2Result === "correct"}
                    >
                      <span>{option.label}</span>
                      {quiz2Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                    </button>
                  ))}
                </div>
                {quiz2Result === "correct" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    ¡Perfecto! "Debe" expresa obligación o recomendación.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-intermediate/lesson-3">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-intermediate/lesson-5">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
