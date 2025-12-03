'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Lesson4Page() {
  const [quiz1Result, setQuiz1Result] = useState<'correct' | 'incorrect' | null>(null)

  const progress = quiz1Result === 'correct' ? 100 : 0

  const colors = [
    { name: "Red", hex: "#ef4444" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Green", hex: "#22c55e" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Orange", hex: "#f97316" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#ffffff", border: true },
    { name: "Gray", hex: "#6b7280" }
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
            <div className="text-sm font-medium text-gray-500">Lesson 4 of 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Colors</h1>
          <p className="text-gray-600">Learn the most common English colors with examples</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Colors are used every day in English. Learning them helps you describe objects, clothes, people, and much more.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Colors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-lg font-bold text-gray-800 mb-2">{color.name}</div>
                <div 
                  className={`w-12 h-12 rounded-full mx-auto ${color.border ? 'border-2 border-gray-200' : ''}`}
                  style={{ backgroundColor: color.hex }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercise</h2>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                Which color is this? 
                <div className="w-6 h-6 rounded-full bg-blue-500 inline-block border border-gray-200"></div>
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Blue", value: "correct" },
                  { label: "Green", value: "incorrect" },
                  { label: "Purple", value: "incorrect" }
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
                  Correct! The color is blue.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/english-beginner/lesson-3">
            <Button variant="outline">
              Previous Lesson
            </Button>
          </Link>
          <Link href="/english-beginner/lesson-5">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== 'correct'}>
              Next Lesson <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
