"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishIntermediateLesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const comparatives = [
    {
      type: "más...que",
      meaning: "more...than",
      example: "Juan es más alto que Pedro.",
      translation: "Juan is taller than Pedro.",
    },
    {
      type: "menos...que",
      meaning: "less...than",
      example: "Este libro es menos interesante que ese.",
      translation: "This book is less interesting than that one.",
    },
    {
      type: "tan...como",
      meaning: "as...as",
      example: "María es tan inteligente como Ana.",
      translation: "María is as intelligent as Ana.",
    },
    {
      type: "mejor que",
      meaning: "better than",
      example: "Este restaurante es mejor que el otro.",
      translation: "This restaurant is better than the other one.",
    },
    {
      type: "peor que",
      meaning: "worse than",
      example: "El tiempo hoy es peor que ayer.",
      translation: "The weather today is worse than yesterday.",
    },
    {
      type: "el/la más",
      meaning: "the most",
      example: "Es el edificio más alto de la ciudad.",
      translation: "It's the tallest building in the city.",
    },
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
            <div className="text-sm font-medium text-gray-500">Lección 5 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Comparativos y Superlativos</h1>
          <p className="text-gray-600">Aprende a comparar y describir extremos</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Los comparativos se usan para comparar dos cosas, mientras que los superlativos se usan para describir el
              grado máximo de una cualidad. En español, usamos estructuras como "más...que" y "el/la más...".
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Estructuras Comparativas</h2>
          <div className="space-y-4">
            {comparatives.map((comp, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{comp.type}</span>
                  <span className="text-sm text-gray-500">({comp.meaning})</span>
                </div>
                <div className="text-sm text-gray-700 italic mb-1">{comp.example}</div>
                <div className="text-xs text-gray-500">{comp.translation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. "María es _____ alta _____ su hermana." (igual altura)</h3>
              <div className="space-y-3">
                {[
                  { label: "más...que", value: "incorrect" },
                  { label: "tan...como", value: "correct" },
                  { label: "menos...que", value: "incorrect" },
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
                  ¡Correcto! "Tan...como" se usa para expresar igualdad.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-intermediate/lesson-4">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-intermediate">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Completar Nivel <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
