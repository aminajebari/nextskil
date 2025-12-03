"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishAdvancedLesson3Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const writingTips = [
    {
      title: "Tesis clara",
      description: "Presenta tu argumento principal al inicio del ensayo.",
      example: "Este ensayo argumenta que...",
    },
    {
      title: "Conectores",
      description: "Usa palabras de transición para conectar ideas.",
      example: "Sin embargo, por lo tanto, además, en conclusión",
    },
    {
      title: "Citas",
      description: "Apoya tus argumentos con fuentes confiables.",
      example: "Según García (2020), '...'",
    },
    {
      title: "Párrafos estructurados",
      description: "Cada párrafo debe tener una idea principal.",
      example: "Oración temática + desarrollo + conclusión",
    },
    {
      title: "Registro formal",
      description: "Evita contracciones y lenguaje coloquial.",
      example: "Se considera que... (no: yo creo que...)",
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
            <div className="text-sm font-medium text-gray-500">Lección 3 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Escritura Académica</h1>
          <p className="text-gray-600">Domina la escritura formal y académica en español</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              La escritura académica en español requiere un registro formal, argumentación clara y uso adecuado de
              fuentes. Aprende las técnicas esenciales para escribir ensayos, informes y artículos académicos.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Elementos de la Escritura Académica</h2>
          <div className="space-y-4">
            {writingTips.map((tip) => (
              <div key={tip.title} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-lg font-bold text-indigo-600 mb-2">{tip.title}</div>
                <div className="text-sm text-gray-700 mb-2">{tip.description}</div>
                <div className="text-sm text-gray-500 italic bg-gray-50 p-2 rounded">{tip.example}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                1. ¿Cuál es la forma más apropiada para iniciar un ensayo académico?
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Yo pienso que este tema es muy interesante.", value: "incorrect" },
                  { label: "Este ensayo examina la relación entre...", value: "correct" },
                  { label: "Bueno, voy a hablar sobre...", value: "incorrect" },
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
                  ¡Correcto! La escritura académica usa un registro formal e impersonal.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-advanced/lesson-2">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-advanced/lesson-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
