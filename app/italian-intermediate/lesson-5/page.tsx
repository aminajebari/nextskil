"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianIntermediateLesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const comparatives = [
    {
      type: "più...di",
      meaning: "more...than",
      example: "Marco è più alto di Paolo.",
      translation: "Marco is taller than Paolo.",
    },
    {
      type: "meno...di",
      meaning: "less...than",
      example: "Questo libro è meno interessante di quello.",
      translation: "This book is less interesting than that one.",
    },
    {
      type: "così...come / tanto...quanto",
      meaning: "as...as",
      example: "Maria è così intelligente come Anna.",
      translation: "Maria is as intelligent as Anna.",
    },
    {
      type: "il/la più",
      meaning: "the most",
      example: "È l'edificio più alto della città.",
      translation: "It's the tallest building in the city.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/italian-intermediate"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Torna al Corso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lezione 5 di 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Comparativi e Superlativi</h1>
          <p className="text-gray-600">Impara a confrontare e descrivere estremi</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              I comparativi si usano per confrontare due cose, mentre i superlativi si usano per descrivere il grado
              massimo di una qualità.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Strutture Comparative</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizio di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                1. "Maria è _____ alta _____ sua sorella." (stessa altezza)
              </h3>
              <div className="space-y-3">
                {[
                  { label: "più...di", value: "incorrect" },
                  { label: "così...come", value: "correct" },
                  { label: "meno...di", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${quiz1Result === null ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50" : option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200"}`}
                    disabled={quiz1Result === "correct"}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Corretto! "Così...come" si usa per esprimere uguaglianza.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-intermediate/lesson-4">
            <Button variant="outline">Lezione Precedente</Button>
          </Link>
          <Link href="/italian-intermediate">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Completa Livello <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
