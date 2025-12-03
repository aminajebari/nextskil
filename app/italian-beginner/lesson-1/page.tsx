"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const greetings = [
    { italian: "Ciao", english: "Hello/Bye (informal)" },
    { italian: "Buongiorno", english: "Good morning" },
    { italian: "Buonasera", english: "Good evening" },
    { italian: "Buonanotte", english: "Good night" },
    { italian: "Arrivederci", english: "Goodbye (formal)" },
    { italian: "A presto", english: "See you soon" },
    { italian: "Come stai?", english: "How are you? (informal)" },
    { italian: "Come sta?", english: "How are you? (formal)" },
    { italian: "Sto bene, grazie", english: "I'm fine, thank you" },
    { italian: "Come ti chiami?", english: "What's your name?" },
    { italian: "Mi chiamo...", english: "My name is..." },
    { italian: "Piacere", english: "Nice to meet you" },
    { italian: "Per favore", english: "Please" },
    { italian: "Grazie", english: "Thank you" },
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
            <div className="text-sm font-medium text-gray-500">Lezione 1 di 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Saluti di Base</h1>
          <p className="text-gray-600">Impara a salutare e presentarti in italiano</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              I saluti sono essenziali per la comunicazione quotidiana. In questa lezione, imparerai i modi più comuni
              di salutare e congedarti in italiano.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Saluti e Espressioni Comuni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {greetings.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-lg font-bold text-indigo-600 mb-1">{item.italian}</div>
                <div className="text-sm text-gray-500">{item.english}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizi di Pratica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Come si dice "Hello" in italiano (informale)?</h3>
              <div className="space-y-3">
                {[
                  { label: "Arrivederci", value: "incorrect" },
                  { label: "Ciao", value: "correct" },
                  { label: "Grazie", value: "incorrect" },
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
                  Corretto! "Ciao" significa "Hello" in modo informale.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Cosa significa "Piacere"?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Good morning", value: "incorrect" },
                    { label: "Nice to meet you", value: "correct" },
                    { label: "Goodbye", value: "incorrect" },
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
                    Perfetto! "Piacere" significa "Nice to meet you".
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-beginner">
            <Button variant="outline">Torna al Corso</Button>
          </Link>
          <Link href="/italian-beginner/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
