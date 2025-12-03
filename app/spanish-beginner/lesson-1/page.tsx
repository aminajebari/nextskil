"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const greetings = [
    { spanish: "Hola", english: "Hello" },
    { spanish: "Buenos días", english: "Good morning" },
    { spanish: "Buenas tardes", english: "Good afternoon" },
    { spanish: "Buenas noches", english: "Good evening/night" },
    { spanish: "Adiós", english: "Goodbye" },
    { spanish: "Hasta luego", english: "See you later" },
    { spanish: "¿Cómo estás?", english: "How are you?" },
    { spanish: "Muy bien, gracias", english: "Very well, thank you" },
    { spanish: "¿Cómo te llamas?", english: "What's your name?" },
    { spanish: "Me llamo...", english: "My name is..." },
    { spanish: "Mucho gusto", english: "Nice to meet you" },
    { spanish: "Por favor", english: "Please" },
    { spanish: "Gracias", english: "Thank you" },
    { spanish: "De nada", english: "You're welcome" },
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
            <div className="text-sm font-medium text-gray-500">Lección 1 de 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saludos Básicos</h1>
          <p className="text-gray-600">Aprende a saludar y presentarte en español</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Los saludos son esenciales para la comunicación diaria. En esta lección, aprenderás las formas más comunes
              de saludar y despedirte en español.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Saludos y Expresiones Comunes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {greetings.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-lg font-bold text-indigo-600 mb-1">{item.spanish}</div>
                <div className="text-sm text-gray-500">{item.english}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicios de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. ¿Cómo se dice "Hello" en español?</h3>
              <div className="space-y-3">
                {[
                  { label: "Adiós", value: "incorrect" },
                  { label: "Hola", value: "correct" },
                  { label: "Gracias", value: "incorrect" },
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
                  ¡Correcto! "Hola" significa "Hello".
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. ¿Qué significa "Mucho gusto"?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Good morning", value: "incorrect" },
                    { label: "Nice to meet you", value: "correct" },
                    { label: "Goodbye", value: "incorrect" },
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
                    ¡Perfecto! "Mucho gusto" significa "Nice to meet you".
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-beginner">
            <Button variant="outline">Volver al Curso</Button>
          </Link>
          <Link href="/spanish-beginner/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Siguiente Lección <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
