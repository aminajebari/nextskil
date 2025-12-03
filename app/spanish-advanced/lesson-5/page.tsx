"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishAdvancedLesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const literature = [
    {
      author: "Miguel de Cervantes",
      work: "Don Quijote de la Mancha",
      period: "Siglo de Oro",
      contribution: "Considerada la primera novela moderna",
    },
    {
      author: "Gabriel García Márquez",
      work: "Cien años de soledad",
      period: "Boom Latinoamericano",
      contribution: "Máximo exponente del realismo mágico",
    },
    {
      author: "Pablo Neruda",
      work: "Veinte poemas de amor",
      period: "Siglo XX",
      contribution: "Premio Nobel de Literatura 1971",
    },
    {
      author: "Federico García Lorca",
      work: "Bodas de sangre",
      period: "Generación del 27",
      contribution: "Teatro poético y simbolismo",
    },
    {
      author: "Jorge Luis Borges",
      work: "Ficciones",
      period: "Siglo XX",
      contribution: "Maestro del cuento fantástico",
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
            <div className="text-sm font-medium text-gray-500">Lección 5 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Literatura y Cultura</h1>
          <p className="text-gray-600">Explora la rica tradición literaria del mundo hispano</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              La literatura en español es una de las más ricas del mundo, con autores que han marcado la historia desde
              el Siglo de Oro hasta el Boom Latinoamericano. Conocer estos autores te ayudará a entender mejor la
              cultura hispanohablante.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Autores Fundamentales</h2>
          <div className="space-y-4">
            {literature.map((item) => (
              <div key={item.author} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{item.author}</span>
                  <span className="text-sm text-gray-500">{item.period}</span>
                </div>
                <div className="text-sm font-medium text-gray-700 mb-1">Obra: {item.work}</div>
                <div className="text-sm text-gray-600">{item.contribution}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. ¿Qué autor escribió "Don Quijote de la Mancha"?</h3>
              <div className="space-y-3">
                {[
                  { label: "Gabriel García Márquez", value: "incorrect" },
                  { label: "Miguel de Cervantes", value: "correct" },
                  { label: "Pablo Neruda", value: "incorrect" },
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
                  ¡Correcto! Miguel de Cervantes escribió Don Quijote, considerada la primera novela moderna.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-advanced/lesson-4">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-advanced">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Completar Curso <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
