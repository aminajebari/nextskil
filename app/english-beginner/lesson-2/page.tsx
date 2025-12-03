'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Lesson2Page() {
  const [quiz1Result, setQuiz1Result] = useState<'correct' | 'incorrect' | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<'correct' | 'incorrect' | null>(null)

  const progress = (Number(quiz1Result === 'correct') + Number(quiz2Result === 'correct')) / 2 * 100

  const alphabet = [
    { letter: "A", sound: "eɪ" }, { letter: "B", sound: "biː" }, { letter: "C", sound: "siː" },
    { letter: "D", sound: "diː" }, { letter: "E", sound: "iː" }, { letter: "F", sound: "ɛf" },
    { letter: "G", sound: "dʒiː" }, { letter: "H", sound: "eɪtʃ" }, { letter: "I", sound: "aɪ" },
    { letter: "J", sound: "dʒeɪ" }, { letter: "K", sound: "keɪ" }, { letter: "L", sound: "ɛl" },
    { letter: "M", sound: "ɛm" }, { letter: "N", sound: "ɛn" }, { letter: "O", sound: "oʊ" },
    { letter: "P", sound: "piː" }, { letter: "Q", sound: "kjuː" }, { letter: "R", sound: "ɑːr" },
    { letter: "S", sound: "ɛs" }, { letter: "T", sound: "tiː" }, { letter: "U", sound: "juː" },
    { letter: "V", sound: "viː" }, { letter: "W", sound: "ˈdʌbəl.juː" }, { letter: "X", sound: "ɛks" },
    { letter: "Y", sound: "waɪ" }, { letter: "Z", sound: "ziː" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/english-beginner" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Course
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lesson 2 of 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alphabet & Pronunciation</h1>
          <p className="text-gray-600">Learn the English alphabet and basic pronunciation</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              The English alphabet has 26 letters. Learning how to pronounce them correctly is essential for reading, spelling, and speaking.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The 26 Letters</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {alphabet.map((item) => (
              <div key={item.letter} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-3xl font-bold text-indigo-600 mb-1">{item.letter}</div>
                <div className="text-sm text-gray-500 font-mono bg-gray-50 rounded px-2 py-1 inline-block">"{item.sound}"</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercises</h2>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Which letter is pronounced "dʒeɪ"?</h3>
              <div className="space-y-3">
                {[
                  { label: "J", value: "correct" },
                  { label: "G", value: "incorrect" },
                  { label: "D", value: "incorrect" }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null 
                        ? 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50' 
                        : quiz1Result === 'correct' && option.value === 'correct'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200'
                    } ${quiz1Result !== null && option.value === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : ''}`}
                    disabled={quiz1Result === 'correct'}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === 'correct' && option.value === 'correct' && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
              {quiz1Result === 'correct' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Correct! The letter J is pronounced "dʒeɪ".
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === 'correct' && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Which letter is pronounced "ˈdʌbəl.juː"?</h3>
                <div className="space-y-3">
                  {[
                    { label: "W", value: "correct" },
                    { label: "U", value: "incorrect" },
                    { label: "V", value: "incorrect" }
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as any)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null 
                          ? 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50' 
                          : quiz2Result === 'correct' && option.value === 'correct'
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200'
                      } ${quiz2Result !== null && option.value === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : ''}`}
                      disabled={quiz2Result === 'correct'}
                    >
                      <span>{option.label}</span>
                      {quiz2Result === 'correct' && option.value === 'correct' && <CheckCircle2 size={20} />}
                    </button>
                  ))}
                </div>
                {quiz2Result === 'correct' && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    Perfect! The letter W is pronounced "ˈdʌbəl.juː".
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/english-beginner/lesson-1">
            <Button variant="outline">
              Previous Lesson
            </Button>
          </Link>
          <Link href="/english-beginner/lesson-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== 'correct'}>
              Next Lesson <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
