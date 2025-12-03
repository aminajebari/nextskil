"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianIntermediateLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const verbs = [
    {
      infinitive: "parlare",
      passato: "ho parlato, hai parlato, ha parlato, abbiamo parlato, avete parlato, hanno parlato",
      english: "to speak",
    },
    {
      infinitive: "mangiare",
      passato: "ho mangiato, hai mangiato, ha mangiato, abbiamo mangiato, avete mangiato, hanno mangiato",
      english: "to eat",
    },
    {
      infinitive: "andare",
      passato: "sono andato/a, sei andato/a, è andato/a, siamo andati/e, siete andati/e, sono andati/e",
      english: "to go",
    },
    {
      infinitive: "essere",
      passato: "sono stato/a, sei stato/a, è stato/a, siamo stati/e, siete stati/e, sono stati/e",
      english: "to be",
    },
    {
      infinitive: "fare",
      passato: "ho fatto, hai fatto, ha fatto, abbiamo fatto, avete fatto, hanno fatto",
      english: "to do/make",
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
            <div className="text-sm font-medium text-gray-500">Lezione 1 di 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Il Passato Prossimo</h1>
          <p className="text-gray-600">Impara a parlare di azioni passate</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              Il passato prossimo è usato per parlare di azioni completate nel passato. Si forma con l'ausiliare (essere
              o avere) + participio passato.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coniugazione dei Verbi</h2>
          <div className="space-y-4">
            {verbs.map((verb) => (
              <div key={verb.infinitive} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-600">{verb.infinitive}</span>
                  <span className="text-sm text-gray-500">({verb.english})</span>
                </div>
                <div className="text-sm text-gray-600">{verb.passato}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizi di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. "Ieri io _____ (mangiare) la pizza."</h3>
              <div className="space-y-3">
                {[
                  { label: "ho mangiato", value: "correct" },
                  { label: "mangiavo", value: "incorrect" },
                  { label: "mangio", value: "incorrect" },
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
                  Corretto! "Ho mangiato" è il passato prossimo di "mangiare".
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. "Maria _____ (andare) al cinema."</h3>
                <div className="space-y-3">
                  {[
                    { label: "ha andato", value: "incorrect" },
                    { label: "è andata", value: "correct" },
                    { label: "andava", value: "incorrect" },
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
                    Perfetto! "Andare" usa l'ausiliare "essere" e concorda con il soggetto.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-intermediate">
            <Button variant="outline">Torna al Corso</Button>
          </Link>
          <Link href="/italian-intermediate/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
