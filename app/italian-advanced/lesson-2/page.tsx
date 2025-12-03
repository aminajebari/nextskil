"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ItalianAdvancedLesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = quiz1Result === "correct" ? 100 : 0

  const businessTerms = [
    { term: "Rapporto", english: "Report", example: "Ho bisogno del rapporto trimestrale." },
    { term: "Riunione", english: "Meeting", example: "La riunione è alle 10." },
    { term: "Bilancio", english: "Budget", example: "Il bilancio è stato approvato." },
    { term: "Azienda", english: "Company", example: "L'azienda ha 500 dipendenti." },
    { term: "Investimento", english: "Investment", example: "È un buon investimento a lungo termine." },
    { term: "Contratto", english: "Contract", example: "Abbiamo firmato il contratto ieri." },
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
            <div className="text-sm font-medium text-gray-500">Lezione 2 di 5</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Italiano per gli Affari</h1>
          <p className="text-gray-600">Vocabolario e comunicazione professionale</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduzione</h2>
            <p className="text-gray-700 leading-relaxed">
              L'italiano per gli affari è essenziale per comunicare in ambienti professionali. Impara il vocabolario
              chiave e le espressioni formali più usate nel mondo aziendale.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Vocabolario di Affari</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Esercizio di Practica</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                1. Quale parola useresti per un documento con i numeri finanziari?
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Rapporto", value: "incorrect" },
                  { label: "Bilancio", value: "correct" },
                  { label: "Contratto", value: "incorrect" },
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
                  Corretto! Il bilancio è un documento che pianifica le spese e le entrate.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/italian-advanced/lesson-1">
            <Button variant="outline">Lezione Precedente</Button>
          </Link>
          <Link href="/italian-advanced/lesson-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== "correct"}>
              Prossima Lezione <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
