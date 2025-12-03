"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianIntermediateLesson4Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const modals = [
    {
      verb: "potere",
      meaning: "can, to be able to",
      example: "Posso parlare italiano.",
      translation: "I can speak Italian.",
    },
    {
      verb: "dovere",
      meaning: "must, have to",
      example: "Devo studiare di più.",
      translation: "I have to study more.",
    },
    {
      verb: "volere",
      meaning: "to want",
      example: "Voglio imparare l'italiano.",
      translation: "I want to learn Italian.",
    },
    {
      verb: "sapere",
      meaning: "to know how to",
      example: "So nuotare molto bene.",
      translation: "I know how to swim very well.",
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
            <div className="text-sm font-medium text-gray-500">Lezione 4 di 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">I Verbi Modali</h1>
          <p className="text-gray-600">Impara a usare potere, dovere, volere e sapere</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              I verbi modali esprimono possibilità, obbligo, desiderio o capacità. Si usano insieme all'infinito di un
              altro verbo.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Verbi Modali Comuni</h2>
          <div className="space-y-4">
            {modals.map((modal) => (
              <div key={modal.verb} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{modal.verb}</span>
                  <span className="text-sm text-gray-500">({modal.meaning})</span>
                </div>
                <div className="text-sm text-gray-700 italic mb-1">{modal.example}</div>
                <div className="text-xs text-gray-500">{modal.translation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizio di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. "Non _____ venire alla festa perché sono malato."</h3>
              <div className="space-y-3">
                {[
                  { label: "posso", value: "correct" },
                  { label: "voglio", value: "incorrect" },
                  { label: "so", value: "incorrect" },
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
                  Corretto! "Posso" esprime la capacità o possibilità di fare qualcosa.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-intermediate/lesson-3">
            <Button variant="outline">Lezione Precedente</Button>
          </Link>
          <Link href="/italian-intermediate/lesson-5">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
