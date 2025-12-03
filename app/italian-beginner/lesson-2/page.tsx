"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianLesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const alphabet = [
    { letter: "A", pronunciation: "ah" },
    { letter: "B", pronunciation: "bi" },
    { letter: "C", pronunciation: "chi" },
    { letter: "D", pronunciation: "di" },
    { letter: "E", pronunciation: "eh" },
    { letter: "F", pronunciation: "effe" },
    { letter: "G", pronunciation: "gi" },
    { letter: "H", pronunciation: "acca" },
    { letter: "I", pronunciation: "i" },
    { letter: "L", pronunciation: "elle" },
    { letter: "M", pronunciation: "emme" },
    { letter: "N", pronunciation: "enne" },
    { letter: "O", pronunciation: "oh" },
    { letter: "P", pronunciation: "pi" },
    { letter: "Q", pronunciation: "cu" },
    { letter: "R", pronunciation: "erre" },
    { letter: "S", pronunciation: "esse" },
    { letter: "T", pronunciation: "ti" },
    { letter: "U", pronunciation: "u" },
    { letter: "V", pronunciation: "vu" },
    { letter: "Z", pronunciation: "zeta" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/italian-beginner"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Torna al Corso
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lezione 2 di 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">L'Alfabeto Italiano</h1>
          <p className="text-gray-600">Impara le lettere e la loro pronuncia</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              L'alfabeto italiano ha 21 lettere. Le lettere J, K, W, X, Y sono usate solo in parole straniere. Impara
              ogni lettera con la sua pronuncia corretta.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">L'Alfabeto Completo</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
            {alphabet.map((item) => (
              <div
                key={item.letter}
                className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-1">{item.letter}</div>
                <div className="text-xs text-gray-500">{item.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizi di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Quante lettere ha l'alfabeto italiano standard?</h3>
              <div className="space-y-3">
                {[
                  { label: "26", value: "incorrect" },
                  { label: "21", value: "correct" },
                  { label: "24", value: "incorrect" },
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
                  Corretto! L'alfabeto italiano ha 21 lettere.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Come si pronuncia la lettera "H" in italiano?</h3>
                <div className="space-y-3">
                  {[
                    { label: "acca (silent)", value: "correct" },
                    { label: "ha", value: "incorrect" },
                    { label: "eich", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${quiz2Result === null ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50" : option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200"}`}
                      disabled={quiz2Result === "correct"}
                    >
                      <span>{option.label}</span>
                      {quiz2Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                    </button>
                  ))}
                </div>
                {quiz2Result === "correct" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    Perfetto! La H in italiano si chiama "acca" ed è sempre muta.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-beginner/lesson-1">
            <Button variant="outline">Lezione Precedente</Button>
          </Link>
          <Link href="/italian-beginner/lesson-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
