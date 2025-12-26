"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { XCircle, Award, AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const javaFinalExamQuestions = [
  {
    question: "What is the main purpose of the JVM (Java Virtual Machine)?",
    options: [
      "To compile Java source code to bytecode",
      "To execute Java bytecode on any platform",
      "To create Java documentation",
      "To manage database connections",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which keyword is used to create a subclass in Java?",
    options: ["implements", "inherits", "extends", "subclass"],
    correctAnswer: 2,
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: 1,
  },
  {
    question: "Which collection class provides a first-in, first-out (FIFO) data structure?",
    options: ["Stack", "Queue", "Set", "Map"],
    correctAnswer: 1,
  },
  {
    question: "What does the 'static' keyword mean in Java?",
    options: [
      "The variable cannot be changed",
      "The method belongs to the class rather than an instance",
      "The variable is public",
      "The method is private",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which exception is thrown when an array is accessed with an illegal index?",
    options: [
      "NullPointerException",
      "ArrayIndexOutOfBoundsException",
      "IllegalArgumentException",
      "ClassCastException",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the correct way to create an ArrayList in Java?",
    options: [
      "ArrayList list = new ArrayList()",
      "ArrayList<String> list = new ArrayList<>()",
      "List list = ArrayList()",
      "Array<String> list = new Array<>()",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which keyword is used to handle exceptions in Java?",
    options: ["try-catch", "handle", "except", "error"],
    correctAnswer: 0,
  },
  {
    question: "What is encapsulation in Object-Oriented Programming?",
    options: [
      "Hiding implementation details and showing only functionality",
      "Creating multiple methods with the same name",
      "Inheriting properties from a parent class",
      "Converting one data type to another",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which interface must a class implement to be used in a for-each loop?",
    options: ["Iterator", "Iterable", "Collection", "List"],
    correctAnswer: 1,
  },
]

interface FinalExamProps {
  onComplete: () => void
  completed: boolean
}

export default function FinalExam({ onComplete, completed }: FinalExamProps) {
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(completed)
  const [score, setScore] = useState(0)

  const handleStartExam = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setSelectedAnswer("")
    setScore(0)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== "") {
      const newAnswers = [...answers, Number.parseInt(selectedAnswer)]
      setAnswers(newAnswers)

      if (currentQuestion < javaFinalExamQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer("")
      } else {
        const finalScore = newAnswers.reduce((acc, answer, index) => {
          return acc + (answer === javaFinalExamQuestions[index].correctAnswer ? 1 : 0)
        }, 0)
        setScore(finalScore)
        setShowResult(true)
        if (finalScore >= 7) {
          onComplete()
        }
      }
    }
  }

  const progress = ((currentQuestion + 1) / javaFinalExamQuestions.length) * 100

  if (!started && !showResult) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-orange-600" />
          </div>
          <CardTitle className="text-3xl">Java Programming Final Exam</CardTitle>
          <CardDescription className="text-base mt-2">Test your knowledge of Java programming concepts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Exam Details:</h3>
            <ul className="space-y-1 text-sm">
              <li>• {javaFinalExamQuestions.length} multiple-choice questions</li>
              <li>• Pass with 70% or higher (7/10 correct answers)</li>
              <li>• No time limit</li>
              <li>• Review your answers after completion</li>
            </ul>
          </div>
          <Button onClick={handleStartExam} className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
            Start Final Exam
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (showResult) {
    const percentage = (score / javaFinalExamQuestions.length) * 100
    const passed = percentage >= 70

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {passed ? (
              <CheckCircle2 className="h-16 w-16 text-green-600" />
            ) : (
              <XCircle className="h-16 w-16 text-red-600" />
            )}
          </div>
          <CardTitle className="text-3xl">{passed ? "Congratulations!" : "Keep Trying!"}</CardTitle>
          <CardDescription className="text-base mt-2">
            You scored {score} out of {javaFinalExamQuestions.length} ({percentage.toFixed(0)}%)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {passed ? (
            <Alert className="bg-green-50 dark:bg-green-950 border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <AlertDescription className="text-green-900 dark:text-green-100">
                Excellent work! You've passed the final exam and completed the Java Programming course.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="bg-orange-50 dark:bg-orange-950 border-orange-200">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <AlertDescription className="text-orange-900 dark:text-orange-100">
                You need 70% to pass. Review the course materials and try again.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <h3 className="font-semibold">Review Your Answers:</h3>
            {javaFinalExamQuestions.map((q, index) => {
              const userAnswer = answers[index]
              const isCorrect = userAnswer === q.correctAnswer
              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-2 ${
                    isCorrect
                      ? "bg-green-50 dark:bg-green-950 border-green-200"
                      : "bg-red-50 dark:bg-red-950 border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-sm mb-1">
                        Question {index + 1}: {q.question}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Your answer:</span> {q.options[userAnswer]}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm text-green-700 dark:text-green-300">
                          <span className="font-medium">Correct answer:</span> {q.options[q.correctAnswer]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {!passed && (
            <Button onClick={handleStartExam} className="w-full bg-orange-600 hover:bg-orange-700">
              Retake Exam
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {javaFinalExamQuestions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-xl mt-4">{javaFinalExamQuestions[currentQuestion].question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
          <div className="space-y-3">
            {javaFinalExamQuestions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <Button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === ""}
          className="w-full bg-orange-600 hover:bg-orange-700"
          size="lg"
        >
          {currentQuestion < javaFinalExamQuestions.length - 1 ? "Next Question" : "Submit Exam"}
        </Button>
      </CardContent>
    </Card>
  )
}
