"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishAdvancedLesson4Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const idioms = [
    {
      idiom: "Estar en las nubes",
      meaning: "To be daydreaming",
      literal: "To be in the clouds",
      example: "María siempre está en las nubes durante la clase.",
    },
    {
      idiom: "Costar un ojo de la cara",
      meaning: "To cost a fortune",
      literal: "To cost an eye from the face",
      example: "Ese coche me costó un ojo de la cara.",
    },
    {
      idiom: "No tener pelos en la lengua",
      meaning: "To speak one's mind",
      literal: "To not have hair on the tongue",
      example: "Mi abuela no tiene pelos en la lengua.",
    },
    {
      idiom: "Ser pan comido",
      meaning: "To be a piece of cake",
      literal: "To be eaten bread",
      example: "Este examen va a ser pan comido.",
    },
    {
      idiom: "Meter la pata",
      meaning: "To put one's foot in it",
      literal: "To put the paw in",
      example: "Metí la pata al mencionar su ex.",
    },
    {
      idiom: "Tomar el pelo",
      meaning: "To pull someone's leg",
      literal: "To take the hair",
      example: "¿Me estás tomando el pelo?",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/spanish-advanced"
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Modismos y Expresiones</h1>
          <p className="text-gray-600">Aprende expresiones idiomáticas del español</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Los modismos son expresiones cuyo significado no se puede deducir de las palabras individuales. Son
              esenciales para sonar natural en español y entender conversaciones cotidianas.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Modismos Populares</h2>
          <div className="space-y-4">
            {idioms.map((item) => (
              <div key={item.idiom} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-lg font-bold text-indigo-600 mb-1">{item.idiom}</div>
                <div className="text-sm text-gray-500 mb-2">Literal: {item.literal}</div>
                <div className="text-sm font-medium text-gray-700 mb-2">Significa: {item.meaning}</div>
                <div className="text-sm text-gray-600 italic bg-gray-50 p-2 rounded">{item.example}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. ¿Qué significa "ser pan comido"?</h3>
              <div className="space-y-3">
                {[
                  { label: "Tener mucha hambre", value: "incorrect" },
                  { label: "Ser muy fácil", value: "correct" },
                  { label: "Estar muy cansado", value: "incorrect" },
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
                  ¡Correcto! "Ser pan comido" significa que algo es muy fácil de hacer.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-advanced/lesson-3">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-advanced/lesson-5">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
