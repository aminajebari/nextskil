'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Lesson3Page() {
  const [quiz1Result, setQuiz1Result] = useState<'correct' | 'incorrect' | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<'correct' | 'incorrect' | null>(null)

  const progress = (Number(quiz1Result === 'correct') + Number(quiz2Result === 'correct')) / 2 * 100

  const numbers = [
    { num: 1, word: "one" }, { num: 2, word: "two" }, { num: 3, word: "three" },
    { num: 4, word: "four" }, { num: 5, word: "five" }, { num: 6, word: "six" },
    { num: 7, word: "seven" }, { num: 8, word: "eight" }, { num: 9, word: "nine" },
    { num: 10, word: "ten" }, { num: 11, word: "eleven" }, { num: 12, word: "twelve" },
    { num: 13, word: "thirteen" }, { num: 14, word: "fourteen" }, { num: 15, word: "fifteen" },
    { num: 16, word: "sixteen" }, { num: 17, word: "seventeen" }, { num: 18, word: "eighteen" },
    { num: 19, word: "nineteen" }, { num: 20, word: "twenty" }
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
            <div className="text-sm font-medium text-gray-500">Lesson 3 of 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Numbers 1 to 20</h1>
          <p className="text-gray-600">Learn how to count and pronounce English numbers</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Numbers are essential for daily communication. In this lesson, you will learn numbers from 1 to 20 with pronunciation.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Numbers 1 to 20</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {numbers.map((item) => (
              <div key={item.num} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-3xl font-bold text-indigo-600 mb-1">{item.num}</div>
                <div className="text-sm text-gray-500 font-medium">{item.word}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercises</h2>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. Which number is "eight"?</h3>
              <div className="space-y-3">
                {[
                  { label: "6", value: "incorrect" },
                  { label: "8", value: "correct" },
                  { label: "10", value: "incorrect" }
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
                  Correct! 8 is "eight".
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === 'correct' && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Which number comes after 14?</h3>
                <div className="space-y-3">
                  {[
                    { label: "13", value: "incorrect" },
                    { label: "15", value: "correct" },
                    { label: "20", value: "incorrect" }
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
                    Perfect! The number after 14 is 15.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/english-beginner/lesson-2">
            <Button variant="outline">
              Previous Lesson
            </Button>
          </Link>
          <Link href="/english-beginner/lesson-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== 'correct'}>
              Next Lesson <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
