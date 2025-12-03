"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FrenchLesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  const alphabet = [
    { letter: "A", sound: "a" },
    { letter: "B", sound: "bé" },
    { letter: "C", sound: "cé" },
    { letter: "D", sound: "dé" },
    { letter: "E", sound: "euh" },
    { letter: "F", sound: "èf" },
    { letter: "G", sound: "jé" },
    { letter: "H", sound: "ash" },
    { letter: "I", sound: "i" },
    { letter: "J", sound: "ji" },
    { letter: "K", sound: "ka" },
    { letter: "L", sound: "èl" },
    { letter: "M", sound: "èm" },
    { letter: "N", sound: "èn" },
    { letter: "O", sound: "o" },
    { letter: "P", sound: "pé" },
    { letter: "Q", sound: "ku" },
    { letter: "R", sound: "èr" },
    { letter: "S", sound: "ès" },
    { letter: "T", sound: "té" },
    { letter: "U", sound: "u" },
    { letter: "V", sound: "vé" },
    { letter: "W", sound: "double-vé" },
    { letter: "X", sound: "iks" },
    { letter: "Y", sound: "i-grec" },
    { letter: "Z", sound: "zèd" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/french-beginner"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour au cours
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Leçon 2 sur 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alphabet et prononciation</h1>
          <p className="text-gray-600">Apprenez l'alphabet français et la prononciation de base</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-blue-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              L'alphabet français compte 26 lettres, comme l'anglais. Cependant, la prononciation est différente.
              Apprendre à bien prononcer les lettres est essentiel pour la lecture et l'orthographe.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Les 26 lettres</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {alphabet.map((item) => (
              <div
                key={item.letter}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">{item.letter}</div>
                <div className="text-sm text-gray-500 font-mono bg-gray-50 rounded px-2 py-1 inline-block">
                  "{item.sound}"
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Caractères spéciaux français</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-600 mb-2">Les accents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>é</strong> - accent aigu (café)
                  </li>
                  <li>
                    <strong>è, ê</strong> - accent grave, circonflexe (mère, fête)
                  </li>
                  <li>
                    <strong>ç</strong> - cédille (français)
                  </li>
                  <li>
                    <strong>ë, ï, ü</strong> - tréma (Noël, naïf)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-600 mb-2">Ligatures</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>œ</strong> - comme dans "cœur", "sœur"
                  </li>
                  <li>
                    <strong>æ</strong> - rare, dans des mots latins
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercices pratiques</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Comment se prononce la lettre "R" en français ?</h3>
              <div className="space-y-3">
                {[
                  { label: "èr", value: "correct" },
                  { label: "ar", value: "incorrect" },
                  { label: "ré", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as "correct" | "incorrect")}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null
                        ? "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
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
                  Correct ! La lettre R se prononce "èr" en français.
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Comment se prononce la lettre "W" en français ?</h3>
                <div className="space-y-3">
                  {[
                    { label: "double-vé", value: "correct" },
                    { label: "double-u", value: "incorrect" },
                    { label: "vé", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as "correct" | "incorrect")}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null
                          ? "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
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
                    Parfait ! La lettre W se prononce "double-vé".
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/french-beginner/lesson-1">
            <Button variant="outline">Leçon précédente</Button>
          </Link>
          <Link href="/french-beginner/lesson-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" disabled={quiz2Result !== "correct"}>
              Leçon suivante <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
