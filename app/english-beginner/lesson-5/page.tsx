'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Lesson5Page() {
  const [quiz1Result, setQuiz1Result] = useState<'correct' | 'incorrect' | null>(null)

  const progress = quiz1Result === 'correct' ? 100 : 0

  const animals = [
    { name: "Dog", emoji: "🐶" }, { name: "Cat", emoji: "🐱" }, { name: "Bird", emoji: "🐦" },
    { name: "Fish", emoji: "🐟" }, { name: "Cow", emoji: "🐄" }, { name: "Horse", emoji: "🐴" },
    { name: "Sheep", emoji: "🐑" }, { name: "Lion", emoji: "🦁" }, { name: "Monkey", emoji: "🐒" },
    { name: "Elephant", emoji: "🐘" }, { name: "Rabbit", emoji: "🐰" }, { name: "Chicken", emoji: "🐔" }
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
            <div className="text-sm font-medium text-gray-500">Lesson 5 of 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Animals</h1>
          <p className="text-gray-600">Learn the most common animals in English</p>
        </div>

        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Animals are part of daily vocabulary. Learning them helps you talk about nature, pets, and the world around you.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Animals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {animals.map((animal) => (
              <div key={animal.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-lg font-bold text-gray-800 mb-2">{animal.name}</div>
                <div className="text-4xl">{animal.emoji}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercise</h2>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                Which animal is this? <span className="text-2xl">🐱</span>
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Dog", value: "incorrect" },
                  { label: "Cat", value: "correct" },
                  { label: "Rabbit", value: "incorrect" }
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
                  Correct! It's a cat.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Link href="/english-beginner/lesson-4">
            <Button variant="outline">
              Previous Lesson
            </Button>
          </Link>
          <Link href="/english-beginner">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz1Result !== 'correct'}>
              Complete Lesson <CheckCircle2 className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
