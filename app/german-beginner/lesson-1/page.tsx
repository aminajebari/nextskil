"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function GermanLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/german-beginner"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Zurück zum Kurs
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lektion 1 von 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Grundlegende Begrüßungen</h1>
          <p className="text-gray-600">Meistern Sie wichtige deutsche Begrüßungen für alltägliche Gespräche</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Einführung in Begrüßungen</h2>
            <p className="text-gray-700 leading-relaxed">
              Begrüßungen sind die ersten Worte, die wir verwenden, wenn wir jemanden treffen. Das Erlernen angemessener
              Begrüßungen ist für den Beginn von Gesprächen auf Deutsch unerlässlich.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Begrüßungen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Hallo / Hi",
                desc: "Universelle Begrüßungen, die zu jeder Tageszeit in formellen und informellen Situationen verwendet werden können.",
                example: "Hallo, mein Name ist Hans.",
              },
              {
                title: "Guten Morgen",
                desc: "Wird von Sonnenaufgang bis Mittag (12 Uhr) verwendet. Formeller als 'Hallo'.",
                example: "Guten Morgen, wie geht es Ihnen heute?",
              },
              {
                title: "Guten Tag",
                desc: "Wird von Mittag bis etwa 17-18 Uhr verwendet. Geeignet für formelle und informelle Situationen.",
                example: "Guten Tag, schön Sie zu sehen.",
              },
              {
                title: "Guten Abend",
                desc: "Wird von etwa 17-18 Uhr bis zur Schlafenszeit verwendet. Formellere Begrüßung für später am Tag.",
                example: "Guten Abend, willkommen zu unserem Event.",
              },
              {
                title: "Wie geht es Ihnen?",
                desc: "Eine häufige Folgefrage nach einer Begrüßung, um Interesse am Wohlbefinden einer Person zu zeigen.",
                example: "Hallo Sarah, wie geht es Ihnen?",
              },
              {
                title: "Freut mich, Sie kennenzulernen",
                desc: "Wird verwendet, wenn man jemanden zum ersten Mal trifft. Drückt Freude über die Bekanntschaft aus.",
                example: "Hallo, ich bin David. Freut mich, Sie kennenzulernen.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm text-indigo-900 italic">
                    <strong>Beispiel:</strong> "{item.example}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Übungen</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Was ist die angemessene Begrüßung um 9 Uhr morgens?</h3>
              <div className="space-y-3">
                {[
                  { label: "Guten Morgen", value: "correct" },
                  { label: "Guten Abend", value: "incorrect" },
                  { label: "Gute Nacht", value: "incorrect" },
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
                  Richtig! "Guten Morgen" wird vor Mittag verwendet.
                </div>
              )}
              {quiz1Result === "incorrect" && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                  Falsch. Versuchen Sie es erneut!
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  2. Welche Begrüßung verwenden Sie, wenn Sie jemanden zum ersten Mal treffen?
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Freut mich, Sie kennenzulernen", value: "correct" },
                    { label: "Bis später", value: "incorrect" },
                    { label: "Auf Wiedersehen", value: "incorrect" },
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
                    Ausgezeichnet! "Freut mich, Sie kennenzulernen" ist perfekt für erste Vorstellungen.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Button variant="outline" disabled>
            Vorherige Lektion
          </Button>
          <Link href="/german-beginner/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              Nächste Lektion <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
