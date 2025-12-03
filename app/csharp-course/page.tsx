"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, CheckCircle2, Code, Home, PlayCircle, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { SubscriptionGate } from "@/components/subscription-gate"

const courseData = {
  title: "C# Mastery",
  subtitle: "Interactive Learning Platform",
  totalLessons: 9,
  modules: [
    {
      id: 1,
      title: "C# Fundamentals & Setup",
      videoUrl: "https://www.youtube.com/embed/GhQdlIFylQ8",
      videoDescription:
        "Introduction to C# programming, setting up Visual Studio, and writing your first C# program. Learn the basics of C# syntax and structure.",
      lessons: [
        {
          id: 1,
          title: "Introduction to C#",
          content: {
            title: "Introduction to C#",
            description: "Understanding C#, its history, and role in modern software development",
            text: 'C# (pronounced "C-Sharp") is a modern, object-oriented programming language developed by Microsoft. It runs on the .NET framework and is used to build a wide variety of applications.',
            benefits: [
              { text: "Easy to learn - clear syntax and structure", category: "learning" },
              { text: "Versatile - build web, desktop, mobile, and games", category: "learning" },
              { text: "High demand - essential for .NET development jobs", category: "career" },
              { text: "Powerful features - OOP, LINQ, async/await", category: "career" },
              { text: "Great ecosystem - Visual Studio and .NET libraries", category: "learning" },
              { text: "Cross-platform - run on Windows, Linux, and macOS", category: "career" },
            ],
          },
          hasVideo: true,
          quiz: {
            question: "What does C# primarily run on?",
            options: [
              ".NET Framework and .NET Core",
              "Java Virtual Machine",
              "Python Runtime Environment",
              "Node.js Runtime",
            ],
            correctAnswer: 0,
          },
        },
        {
          id: 2,
          title: "Setting Up Visual Studio",
          content: {
            title: "Setting Up Visual Studio",
            description: "Installing and configuring Visual Studio for C# development",
            text: "Visual Studio is the premier integrated development environment (IDE) for C# development. It provides powerful tools for writing, debugging, and deploying C# applications.",
            benefits: [
              { text: "IntelliSense - smart code completion", category: "learning" },
              { text: "Debugging tools - find and fix errors easily", category: "learning" },
              { text: "NuGet packages - access thousands of libraries", category: "career" },
              { text: "Git integration - version control built-in", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "What is IntelliSense in Visual Studio?",
            options: ["An AI assistant", "Smart code completion feature", "A debugging tool", "A compiler"],
            correctAnswer: 1,
          },
        },
        {
          id: 3,
          title: "Your First C# Program",
          content: {
            title: "Your First C# Program",
            description: "Writing and running your first Hello World program in C#",
            text: "Every C# program starts with a namespace and a Main method. The Console.WriteLine() method is used to output text to the console.",
            benefits: [
              { text: "Understand program structure", category: "learning" },
              { text: "Learn about namespaces and classes", category: "learning" },
              { text: "Use Console for input/output", category: "career" },
              { text: "Compile and run C# programs", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "Which method is used to print text to the console in C#?",
            options: ["print()", "Console.WriteLine()", "System.out.println()", "echo()"],
            correctAnswer: 1,
          },
        },
      ],
    },
    {
      id: 2,
      title: "Variables & Data Types",
      videoUrl: "https://www.youtube.com/embed/q_F4PyW8GTg",
      videoDescription:
        "Learn about declaring variables, built-in data types in C#, and type conversion techniques for safe and efficient coding.",
      lessons: [
        {
          id: 4,
          title: "Declaring Variables",
          content: {
            title: "Declaring Variables",
            description: "Learn how to declare and initialize variables in C#",
            text: "Variables are containers for storing data values. In C#, you must declare the variable type before using it. C# is a strongly-typed language.",
            benefits: [
              { text: "Understand variable declaration syntax", category: "learning" },
              { text: "Learn about type safety", category: "learning" },
              { text: "Use var for type inference", category: "career" },
              { text: "Follow naming conventions", category: "career" },
            ],
          },
          hasVideo: true,
          quiz: {
            question: "What keyword can be used for automatic type inference?",
            options: ["auto", "var", "let", "const"],
            correctAnswer: 1,
          },
        },
        {
          id: 5,
          title: "Built-in Data Types",
          content: {
            title: "Built-in Data Types",
            description: "Exploring C# primitive and reference data types",
            text: "C# provides various built-in data types including int, double, string, bool, char, and more. Understanding these types is crucial for effective programming.",
            benefits: [
              { text: "Work with numeric types (int, double, decimal)", category: "learning" },
              { text: "Use string for text data", category: "learning" },
              { text: "Understand bool for true/false values", category: "career" },
              { text: "Learn value vs reference types", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "Which data type is used for decimal numbers with high precision?",
            options: ["int", "float", "decimal", "double"],
            correctAnswer: 2,
          },
        },
        {
          id: 6,
          title: "Type Conversion & Casting",
          content: {
            title: "Type Conversion & Casting",
            description: "Converting between different data types safely",
            text: "Type conversion allows you to convert data from one type to another. C# supports implicit conversion (automatic) and explicit conversion (casting).",
            benefits: [
              { text: "Understand implicit vs explicit conversion", category: "learning" },
              { text: "Use casting operators", category: "learning" },
              { text: "Handle conversion errors", category: "career" },
              { text: "Use Convert and Parse methods", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "What happens when you cast a double to an int?",
            options: ["Compilation error", "Decimal part is truncated", "Number is rounded", "Runtime error"],
            correctAnswer: 1,
          },
        },
      ],
    },
    {
      id: 3,
      title: "Control Flow & Operators",
      videoUrl: "https://www.youtube.com/embed/M5ugY7fWydE",
      videoDescription:
        "Master conditional statements, switch cases, and loops in C#. Learn how to control program flow and make decisions in your code.",
      lessons: [
        {
          id: 7,
          title: "If-Else Statements",
          content: {
            title: "If-Else Statements",
            description: "Making decisions in your code with conditional statements",
            text: "If-else statements allow your program to make decisions and execute different code based on conditions. They are fundamental to programming logic.",
            benefits: [
              { text: "Create conditional logic", category: "learning" },
              { text: "Use comparison operators", category: "learning" },
              { text: "Nest if-else statements", category: "career" },
              { text: "Write else-if chains", category: "career" },
            ],
          },
          hasVideo: true,
          quiz: {
            question: "Which operator checks if two values are equal?",
            options: ["=", "==", "===", "equals"],
            correctAnswer: 1,
          },
        },
        {
          id: 8,
          title: "Switch Statements",
          content: {
            title: "Switch Statements",
            description: "Using switch for multiple conditional branches",
            text: "Switch statements provide a cleaner way to handle multiple conditions based on a single variable. They are more readable than long if-else chains.",
            benefits: [
              { text: "Simplify multiple conditions", category: "learning" },
              { text: "Use case labels effectively", category: "learning" },
              { text: "Understand break statements", category: "career" },
              { text: "Use default case for fallback", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "What does the break statement do in a switch case?",
            options: ["Stops the program", "Exits the switch block", "Skips to the next case", "Restarts the switch"],
            correctAnswer: 1,
          },
        },
        {
          id: 9,
          title: "Loops in C#",
          content: {
            title: "Loops in C#",
            description: "Repeating code execution with for, while, and foreach loops",
            text: "Loops allow you to execute a block of code repeatedly. C# provides for, while, do-while, and foreach loops for different scenarios.",
            benefits: [
              { text: "Use for loops for counting", category: "learning" },
              { text: "Use while for conditions", category: "learning" },
              { text: "Iterate collections with foreach", category: "career" },
              { text: "Control loops with break and continue", category: "career" },
            ],
          },
          hasVideo: false,
          quiz: {
            question: "Which loop is best for iterating through an array?",
            options: ["while", "do-while", "foreach", "goto"],
            correctAnswer: 2,
          },
        },
      ],
    },
  ],
}

export default function CSharpCoursePage() {
  const [activeTab, setActiveTab] = useState<"lesson" | "video" | "quiz">("lesson")
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>(
    courseData.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id)),
  )
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [quizResult, setQuizResult] = useState<"correct" | "incorrect" | null>(null)
  const [showCertificate, setShowCertificate] = useState(false)
  const [quizScore, setQuizScore] = useState(0)

  const currentModule = courseData.modules[currentModuleIndex]
  const currentLesson = currentModule.lessons[currentLessonIndex]
  const progress = (completedLessons.length / courseData.totalLessons) * 100

  const handleMarkComplete = () => {
    // No need to mark complete as all lessons are already completed
  }

  const handleNextLesson = () => {
    if (currentLessonIndex < currentModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    } else if (currentModuleIndex < courseData.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1)
      setCurrentLessonIndex(0)
    }
    setActiveTab("lesson")
    setQuizSubmitted(false)
    setQuizResult(null)
    setSelectedAnswer("")
  }

  const handleLessonClick = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex)
    setCurrentLessonIndex(lessonIndex)
    setActiveTab("lesson")
    setQuizSubmitted(false)
    setQuizResult(null)
    setSelectedAnswer("")
  }

  const handleQuizSubmit = () => {
    const isCorrect = Number.parseInt(selectedAnswer) === currentLesson.quiz.correctAnswer
    setQuizResult(isCorrect ? "correct" : "incorrect")
    setQuizSubmitted(true)
    if (isCorrect) {
      setQuizScore(quizScore + 1)
    }
  }

  const getCompletedCount = (moduleIndex: number) => {
    const module = courseData.modules[moduleIndex]
    return module.lessons.filter((lesson) => completedLessons.includes(lesson.id)).length
  }

  return (
    <SubscriptionGate
      title="Unlock C# Mastery"
      description="Access the full interactive C# Mastery Course with lessons, quizzes, and certification."
    >
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
                  <h1 className="text-lg font-bold text-gray-900">{courseData.title}</h1>
                  <p className="text-sm text-gray-600">{courseData.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link href="/courses">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Home className="w-4 h-4" />
                    All Courses
                  </Button>
                </Link>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-600">Progress</span>
                  <span className="text-sm font-bold text-red-600">{Math.round(progress)}%</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-2" onClick={() => setShowCertificate(true)}>
                  <Trophy className="w-4 h-4" />
                  Preview Certificate
                </Button>
                <Link href="/csharp-course/final-exam">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Trophy className="w-4 h-4" />
                    Take Final Exam
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <Progress value={progress} className="h-1" />
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">
                {completedLessons.length} of {courseData.totalLessons} lessons
              </span>
              <span className="text-sm font-semibold text-red-600">{Math.round(progress)}% Complete</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Sidebar */}
            <aside className="w-96 flex-shrink-0">
              <Card>
                <CardContent className="p-6">
                  {courseData.modules.map((module, moduleIndex) => (
                    <div key={module.id} className="mb-6 last:mb-0">
                      <div
                        className={`p-4 rounded-lg mb-3 ${moduleIndex === currentModuleIndex ? "bg-gray-900 text-white" : "bg-gray-100"}`}
                      >
                        <div className="font-semibold mb-1">Module {module.id}</div>
                        <div
                          className={`text-sm ${moduleIndex === currentModuleIndex ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {module.title}
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <Progress
                            value={(getCompletedCount(moduleIndex) / module.lessons.length) * 100}
                            className="h-1 flex-1"
                          />
                          <span
                            className={`text-xs ml-2 ${moduleIndex === currentModuleIndex ? "text-gray-300" : "text-gray-600"}`}
                          >
                            {getCompletedCount(moduleIndex)}/{module.lessons.length}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(moduleIndex, lessonIndex)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                              moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex
                                ? "bg-red-100 text-red-900"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-left">{lesson.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">
                      Module {currentModule.id} › Lesson {currentLessonIndex + 1} of {currentModule.lessons.length}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentLesson.content.title}</h2>
                    <p className="text-gray-600">{currentLesson.content.description}</p>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-2 mb-6 border-b">
                    <button
                      onClick={() => setActiveTab("lesson")}
                      className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors relative ${
                        activeTab === "lesson"
                          ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <BookOpen className="w-5 h-5" />
                      Lesson
                    </button>
                    <button
                      onClick={() => setActiveTab("video")}
                      disabled={!currentLesson.hasVideo}
                      className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors relative ${
                        activeTab === "video"
                          ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                          : currentLesson.hasVideo
                            ? "text-gray-600 hover:text-gray-900"
                            : "text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <PlayCircle className="w-5 h-5" />
                      Video
                    </button>
                    <button
                      onClick={() => setActiveTab("quiz")}
                      className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors relative ${
                        activeTab === "quiz"
                          ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <Trophy className="w-5 h-5" />
                      Quiz
                    </button>
                  </div>

                  {/* Tab Content */}
                  {activeTab === "lesson" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">What is {currentLesson.content.title}?</h3>
                        <p className="text-gray-700 leading-relaxed">{currentLesson.content.text}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Learn This?</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {currentLesson.content.benefits.map((item, index) => (
                            <div
                              key={index}
                              className={`p-4 rounded-lg border-l-4 ${
                                item.category === "learning" ? "bg-red-50 border-red-500" : "bg-blue-50 border-blue-500"
                              }`}
                            >
                              <p className="text-sm font-medium text-gray-900">• {item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                          <p className="text-green-800 font-medium">Lesson completed! Continue to the next lesson.</p>
                          <Button onClick={handleNextLesson} className="bg-gray-600 hover:bg-gray-700">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Next Lesson
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "video" && currentLesson.hasVideo && (
                    <div>
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
                        <iframe
                          width="100%"
                          height="100%"
                          src={courseData.modules[currentModuleIndex].videoUrl}
                          title={`${currentLesson.content.title} Video Tutorial`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none">
                        <h3>Video Content Overview</h3>
                        <p>{courseData.modules[currentModuleIndex].videoDescription}</p>
                        <p className="text-gray-600">
                          Watch this comprehensive tutorial covering {currentLesson.content.title} and related concepts
                          in this module.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "quiz" && (
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Question 1 of 1</p>
                        <p className="text-sm font-semibold">
                          Score: {quizScore}/{completedLessons.length}
                        </p>
                      </div>

                      <div className="bg-white border rounded-lg p-8 mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{currentLesson.quiz.question}</h3>

                        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={quizSubmitted}>
                          <div className="space-y-4">
                            {currentLesson.quiz.options.map((option, index) => (
                              <div
                                key={index}
                                className={`flex items-center space-x-3 p-4 border rounded-lg transition-colors ${
                                  quizSubmitted
                                    ? index === currentLesson.quiz.correctAnswer
                                      ? "bg-green-50 border-green-500"
                                      : index === Number.parseInt(selectedAnswer)
                                        ? "bg-red-50 border-red-500"
                                        : "bg-gray-50"
                                    : "hover:bg-gray-50 cursor-pointer"
                                }`}
                              >
                                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                                  {option}
                                </Label>
                                {quizSubmitted && index === currentLesson.quiz.correctAnswer && (
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                )}
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>

                      {quizSubmitted && (
                        <div
                          className={`mb-6 p-4 rounded-lg ${quizResult === "correct" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                        >
                          <p
                            className={`font-semibold ${quizResult === "correct" ? "text-green-800" : "text-red-800"}`}
                          >
                            {quizResult === "correct"
                              ? "✓ Correct! Well done!"
                              : "✗ Incorrect. The correct answer is highlighted above."}
                          </p>
                        </div>
                      )}

                      {!quizSubmitted ? (
                        <Button
                          onClick={handleQuizSubmit}
                          className="w-full bg-gray-600 hover:bg-gray-700 py-6 text-lg"
                          disabled={!selectedAnswer}
                        >
                          Submit Answer
                        </Button>
                      ) : (
                        <Button
                          onClick={handleNextLesson}
                          className="w-full bg-gray-900 hover:bg-gray-800 py-6 text-lg"
                        >
                          Continue to Next Lesson
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </div>
    </SubscriptionGate>
  )
}
