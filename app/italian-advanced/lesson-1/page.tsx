"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianAdvancedLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const structures = [
    {
      name: "Congiuntivo",
      use: "Desideri, dubbi, emozioni",
      example: "Spero che tu venga alla festa.",
      translation: "I hope you come to the party.",
    },
    {
      name: "Condizionale",
      use: "Situazioni ipotetiche",
      example: "Se avessi tempo, viaggerei.",
      translation: "If I had time, I would travel.",
    },
    {
      name: "Voce Passiva",
      use: "Enfasi sull'azione",
      example: "Il libro è stato scritto da Dante.",
      translation: "The book was written by Dante.",
    },
    {
      name: "Discorso Indiretto",
      use: "Riportare ciò che è stato detto",
      example: "Ha detto che sarebbe venuto.",
      translation: "He said he would come.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/italian-advanced"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Torna al Corso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lezione 1 di 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Strutture Grammaticali Avanzate</h1>
          <p className="text-gray-600">Padroneggia le strutture complesse dell'italiano</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              Le strutture grammaticali avanzate ti permettono di esprimere idee complesse con precisione. In questa
              lezione, esploreremo il congiuntivo, il condizionale e altro.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Strutture Principali</h2>
          <div className="space-y-4">
            {structures.map((structure) => (
              <div key={structure.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{structure.name}</span>
                  <span className="text-sm text-gray-500">({structure.use})</span>
                </div>
                <div className="text-sm text-gray-700 italic mb-1">{structure.example}</div>
                <div className="text-xs text-gray-500">{structure.translation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizio di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. "È importante che tu _____ (studiare) per l'esame."</h3>
              <div className="space-y-3">
                {[
                  { label: "studi", value: "correct" },
                  { label: "studii", value: "incorrect" },
                  { label: "studierai", value: "incorrect" },
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
                  Corretto! Dopo "È importante che" usiamo il congiuntivo.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-advanced">
            <Button variant="outline">Torna al Corso</Button>
          </Link>
          <Link href="/italian-advanced/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
