"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishAdvancedLesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const businessTerms = [
    { term: "Informe", english: "Report", example: "Necesito el informe trimestral." },
    { term: "Reunión", english: "Meeting", example: "La reunión es a las 10 de la mañana." },
    { term: "Presupuesto", english: "Budget", example: "El presupuesto fue aprobado." },
    { term: "Empresa", english: "Company", example: "La empresa tiene 500 empleados." },
    { term: "Inversión", english: "Investment", example: "Es una buena inversión a largo plazo." },
    { term: "Contrato", english: "Contract", example: "Firmamos el contrato ayer." },
    { term: "Factura", english: "Invoice", example: "La factura vence el próximo mes." },
    { term: "Socio", english: "Partner", example: "Mi socio se encarga de las finanzas." },
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
            <div className="text-sm font-medium text-gray-500">Lección 2 de 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Español de Negocios</h1>
          <p className="text-gray-600">Vocabulario y comunicación profesional</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              El español de negocios es esencial para comunicarse en entornos profesionales. Aprende el vocabulario
              clave y las expresiones formales más utilizadas en el mundo empresarial.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vocabulario de Negocios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {businessTerms.map((item) => (
              <div key={item.term} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{item.term}</span>
                  <span className="text-sm text-gray-500">({item.english})</span>
                </div>
                <div className="text-sm text-gray-600 italic">{item.example}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                1. ¿Qué palabra usarías para hablar de un documento con números financieros para los próximos meses?
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Informe", value: "incorrect" },
                  { label: "Presupuesto", value: "correct" },
                  { label: "Contrato", value: "incorrect" },
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
                  ¡Correcto! El presupuesto es un documento que planifica los gastos e ingresos futuros.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-advanced/lesson-1">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-advanced/lesson-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
