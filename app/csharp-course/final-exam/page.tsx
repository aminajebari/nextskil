'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Code, Home, Trophy, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const examQuestions = [
  {
    question: 'What is C# primarily used for?',
    options: [
      'Building .NET applications',
      'Web design only',
      'Database management',
      'Network administration'
    ],
    correctAnswer: 0
  },
  {
    question: 'Which keyword is used for automatic type inference in C#?',
    options: ['auto', 'var', 'let', 'const'],
    correctAnswer: 1
  },
  {
    question: 'What is the correct syntax to output "Hello World" in C#?',
    options: [
      'System.out.println("Hello World");',
      'Console.WriteLine("Hello World");',
      'print("Hello World")',
      'echo "Hello World"'
    ],
    correctAnswer: 1
  },
  {
    question: 'Which data type would you use for a true/false value?',
    options: ['int', 'string', 'bool', 'binary'],
    correctAnswer: 2
  },
  {
    question: 'What does OOP stand for?',
    options: [
      'Object-Oriented Programming',
      'Organized Object Protocol',
      'Open Operating Platform',
      'Optimized Operation Process'
    ],
    correctAnswer: 0
  },
  {
    question: 'Which loop is best for iterating through a collection?',
    options: ['for', 'while', 'foreach', 'do-while'],
    correctAnswer: 2
  },
  {
    question: 'What is the purpose of the break statement?',
    options: [
      'Pause the program',
      'Exit the current loop or switch',
      'Skip to next iteration',
      'Stop execution entirely'
    ],
    correctAnswer: 1
  },
  {
    question: 'Which access modifier makes a member accessible only within its class?',
    options: ['public', 'private', 'protected', 'internal'],
    correctAnswer: 1
  },
  {
    question: 'What is LINQ used for in C#?',
    options: [
      'Linking files',
      'Querying data',
      'Network communication',
      'User interface design'
    ],
    correctAnswer: 1
  },
  {
    question: 'What does the async keyword indicate?',
    options: [
      'The method runs synchronously',
      'The method contains asynchronous operations',
      'The method is deprecated',
      'The method is private'
    ],
    correctAnswer: 1
  }
]

export default function FinalExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [examCompleted, setExamCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (answer: number) => {
    console.log('[v0] Answer selected:', answer, 'for question:', currentQuestion)
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitExam = () => {
    console.log('[v0] Submitting exam with answers:', selectedAnswers)
    let correctCount = 0
    examQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    console.log('[v0] Final score:', correctCount, 'out of', examQuestions.length)
    setScore(correctCount)
    setExamCompleted(true)
  }

  const progress = ((currentQuestion + 1) / examQuestions.length) * 100
  const answeredCount = Object.keys(selectedAnswers).length
  const isPassed = score >= 7

  if (examCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className={`w-24 h-24 rounded-full ${isPassed ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center mx-auto mb-6`}>
              {isPassed ? (
                <Trophy className="w-12 h-12 text-green-600" />
              ) : (
                <X className="w-12 h-12 text-red-600" />
              )}
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isPassed ? 'Congratulations!' : 'Keep Learning'}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You scored {score} out of {examQuestions.length} ({Math.round((score / examQuestions.length) * 100)}%)
            </p>

            {isPassed ? (
              <>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <p className="text-green-800 font-semibold mb-2">You passed the final exam!</p>
                  <p className="text-green-700 text-sm">
                    You have successfully completed the C# Mastery course and earned your certificate.
                  </p>
                </div>
                <div className="space-y-3">
                  <Link href="/csharp-course">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800">
                      View Your Certificate
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="outline" className="w-full">
                      Back to All Courses
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <p className="text-red-800 font-semibold mb-2">You need 70% or higher to pass</p>
                  <p className="text-red-700 text-sm">
                    Review the course materials and try again when you're ready.
                  </p>
                </div>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800"
                    onClick={() => {
                      console.log('[v0] Retaking exam')
                      setExamCompleted(false)
                      setCurrentQuestion(0)
                      setSelectedAnswers({})
                      setScore(0)
                    }}
                  >
                    Retake Exam
                  </Button>
                  <Link href="/csharp-course">
                    <Button variant="outline" className="w-full">
                      Review Course Materials
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">C# Mastery - Final Exam</h1>
                <p className="text-sm text-gray-600">10 Questions - Master Test</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/csharp-course">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Course
                </Button>
              </Link>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-600">Progress</span>
                <span className="text-sm font-bold text-blue-600">{currentQuestion + 1}/{examQuestions.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <Progress value={progress} className="h-1" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {examQuestions.length}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    {answeredCount} answered
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {examQuestions[currentQuestion].question}
                </h2>

                <RadioGroup 
                  value={selectedAnswers[currentQuestion]?.toString()} 
                  onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                >
                  <div className="space-y-3">
                    {examQuestions[currentQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <RadioGroupItem value={index.toString()} id={`exam-option-${index}`} />
                        <Label htmlFor={`exam-option-${index}`} className="flex-1 cursor-pointer font-medium">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentQuestion === examQuestions.length - 1 ? (
                  <Button
                    onClick={handleSubmitExam}
                    disabled={answeredCount < examQuestions.length}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Submit Exam
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="flex-1 bg-gray-900 hover:bg-gray-800"
                  >
                    Next
                  </Button>
                )}
              </div>

              {answeredCount < examQuestions.length && currentQuestion === examQuestions.length - 1 && (
                <p className="text-sm text-red-600 mt-4 text-center">
                  Please answer all questions before submitting
                </p>
              )}

              {answeredCount === examQuestions.length && (
                <p className="text-sm text-green-600 mt-4 text-center font-medium">
                  All questions answered! You can submit now.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
