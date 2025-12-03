"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SpanishLesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const animals = [
    { name: "Perro", english: "Dog", emoji: "🐶" },
    { name: "Gato", english: "Cat", emoji: "🐱" },
    { name: "Pájaro", english: "Bird", emoji: "🐦" },
    { name: "Pez", english: "Fish", emoji: "🐟" },
    { name: "Vaca", english: "Cow", emoji: "🐄" },
    { name: "Caballo", english: "Horse", emoji: "🐴" },
    { name: "Oveja", english: "Sheep", emoji: "🐑" },
    { name: "León", english: "Lion", emoji: "🦁" },
    { name: "Mono", english: "Monkey", emoji: "🐒" },
    { name: "Elefante", english: "Elephant", emoji: "🐘" },
    { name: "Conejo", english: "Rabbit", emoji: "🐰" },
    { name: "Pollo", english: "Chicken", emoji: "🐔" },
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
            <div className="text-sm font-medium text-gray-500">Lección 5 de 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Los Animales</h1>
          <p className="text-gray-600">Aprende los animales más comunes en español</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Los animales son parte del vocabulario diario. Aprenderlos te ayudará a hablar sobre la naturaleza,
              mascotas y el mundo que te rodea.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Animales Comunes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {animals.map((animal) => (
              <div
                key={animal.name}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-lg font-bold text-gray-800 mb-1">{animal.name}</div>
                <div className="text-xs text-gray-500 mb-2">{animal.english}</div>
                <div className="text-4xl">{animal.emoji}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ejercicio de Práctica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                ¿Qué animal es este? <span className="text-2xl">🐱</span>
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Perro", value: "incorrect" },
                  { label: "Gato", value: "correct" },
                  { label: "Conejo", value: "incorrect" },
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
                  ¡Correcto! Es un gato.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/spanish-beginner/lesson-4">
            <Button variant="outline">Lección Anterior</Button>
          </Link>
          <Link href="/spanish-beginner">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Completar Lección <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
