'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle, Volume2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Lesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<'correct' | 'incorrect' | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<'correct' | 'incorrect' | null>(null)

  const progress = (Number(quiz1Result === 'correct') + Number(quiz2Result === 'correct')) / 2 * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/english-beginner" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            Back to Course
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">Lesson 1 of 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Basic Greetings</h1>
          <p className="text-gray-600">Master essential English greetings for everyday conversations</p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-l-4 border-l-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Introduction to Greetings</h2>
            <p className="text-gray-700 leading-relaxed">
              Greetings are the first words we use when meeting someone. Learning proper greetings is essential for starting conversations in English.
            </p>
          </CardContent>
        </Card>

        {/* Common Greetings Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Greetings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Hello / Hi", desc: "Universal greetings that can be used at any time of day in both formal and informal situations.", example: "Hello, my name is John." },
              { title: "Good morning", desc: "Used from sunrise until noon (12 PM). More formal than 'hello'.", example: "Good morning, how are you today?" },
              { title: "Good afternoon", desc: "Used from noon until around 5-6 PM. Appropriate for formal and informal situations.", example: "Good afternoon, nice to see you." },
              { title: "Good evening", desc: "Used from around 5-6 PM until bedtime. More formal greeting for later in the day.", example: "Good evening, welcome to our event." },
              { title: "How are you?", desc: "A common follow-up question after a greeting to show interest in someone's wellbeing.", example: "Hi Sarah, how are you?" },
              { title: "Nice to meet you", desc: "Used when meeting someone for the first time. Expresses pleasure in making their acquaintance.", example: "Hello, I'm David. Nice to meet you." }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm text-indigo-900 italic">
                    <strong>Example:</strong> "{item.example}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Exercises</h2>
          
          {/* Quiz 1 */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. What is the appropriate greeting to use at 9 AM?</h3>
              <div className="space-y-3">
                {[
                  { label: "Good morning", value: "correct" },
                  { label: "Good evening", value: "incorrect" },
                  { label: "Good night", value: "incorrect" }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null 
                        ? 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50' 
                        : quiz1Result === 'correct' && option.value === 'correct'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : quiz1Result === 'incorrect' && option.value === 'incorrect' // Only highlight clicked wrong answer if we tracked selection, but simple version:
                            ? 'border-gray-200 opacity-50'
                            : 'border-gray-200'
                    } ${quiz1Result !== null && option.value === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : ''}`}
                    disabled={quiz1Result === 'correct'}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === 'correct' && option.value === 'correct' && <CheckCircle2 size={20} />}
                    {quiz1Result === 'incorrect' && option.value === 'incorrect' && <XCircle size={20} className="text-red-500" />}
                  </button>
                ))}
              </div>
              {quiz1Result === 'correct' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  Correct! "Good morning" is used before noon.
                </div>
              )}
              {quiz1Result === 'incorrect' && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                  Incorrect. Try again!
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quiz 2 */}
          {quiz1Result === 'correct' && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. Which greeting would you use when meeting someone for the first time?</h3>
                <div className="space-y-3">
                  {[
                    { label: "Nice to meet you", value: "correct" },
                    { label: "See you later", value: "incorrect" },
                    { label: "Goodbye", value: "incorrect" }
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
                    Excellent! "Nice to meet you" is perfect for first introductions.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button variant="outline" disabled>
            Previous Lesson
          </Button>
          <Link href="/english-beginner/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== 'correct'}>
              Next Lesson <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
