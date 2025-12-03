"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishIntermediateLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const verbs = [
    { infinitive: "hablar", preterite: "hablé, hablaste, habló, hablamos, hablasteis, hablaron", english: "to speak" },
    { infinitive: "comer", preterite: "comí, comiste, comió, comimos, comisteis, comieron", english: "to eat" },
    { infinitive: "vivir", preterite: "viví, viviste, vivió, vivimos, vivisteis, vivieron", english: "to live" },
    {
      infinitive: "estar",
      preterite: "estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron",
      english: "to be",
    },
    { infinitive: "tener", preterite: "tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron", english: "to have" },
    { infinitive: "ir", preterite: "fui, fuiste, fue, fuimos, fuisteis, fueron", english: "to go" },
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
            <div className="text-sm font-medium text-gray-500">Lección 1 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">El Pretérito Perfecto Simple</h1>
          <p className="text-gray-600">Aprende a hablar de acciones completadas en el pasado</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              El pretérito perfecto simple (o indefinido) se usa para hablar de acciones que comenzaron y terminaron en
              el pasado. Es uno de los tiempos más importantes del español.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conjugación de Verbos</h2>
          <div className="space-y-4">
            {verbs.map((verb) => (
              <div key={verb.infinitive} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{verb.infinitive}</span>
                  <span className="text-sm text-gray-500">({verb.english})</span>
                </div>
                <div className="text-sm text-gray-600">{verb.preterite}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicios de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                1. ¿Cuál es la forma correcta de "hablar" en primera persona (yo)?
              </h3>
              <div className="space-y-3">
                {[
                  { label: "hablé", value: "correct" },
                  { label: "hablaba", value: "incorrect" },
                  { label: "hablaré", value: "incorrect" },
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
                  ¡Correcto! "Hablé" es la forma del pretérito para "yo".
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Completa: "Ayer ella _____ (ir) al supermercado."</h3>
                <div className="space-y-3">
                  {[
                    { label: "va", value: "incorrect" },
                    { label: "fue", value: "correct" },
                    { label: "iba", value: "incorrect" },
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
                    ¡Perfecto! "Fue" es la forma correcta del verbo "ir" en pretérito.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-intermediate">
            <Button variant="outline">Volver al Curso</Button>
          </Link>
          <Link href="/spanish-intermediate/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
