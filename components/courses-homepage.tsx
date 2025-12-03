"use client"

import { useState } from 'react'
import { Code2, BookOpen, Trophy, ArrowRight, Sparkles } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CourseSelectionModal } from "./course-selection-modal"

export default function CoursesHomepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const courses = [
    {
      id: "html",
      title: "HTML Mastery",
      description: "Master HTML from fundamentals to advanced techniques. Build real-world projects, pass quizzes, and earn your certificate.",
      icon: Code2,
      color: "from-blue-600 to-red-600",
      modules: 8,
      lessons: 26,
      duration: "8 hours",
      level: "Beginner to Advanced",
      link: "/html-course",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600"
    },
    {
      id: "cpp",
      title: "C++ Programming",
      description: "Learn C++ programming from basics to advanced concepts. Master OOP, STL, and modern C++ features.",
      icon: BookOpen,
      color: "from-purple-600 to-pink-600",
      modules: 8,
      lessons: 24,
      duration: "10 hours",
      level: "Beginner to Advanced",
      link: "/cpp-course",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      iconColor: "text-purple-600"
    },
    {
      id: "react",
      title: "React Fundamentals",
      description: "Build modern interactive UIs with React. Learn hooks, components, state management, and best practices.",
      icon: Code2,
      color: "from-cyan-600 to-blue-600",
      modules: 8,
      lessons: 25,
      duration: "9 hours",
      level: "Beginner to Advanced",
      link: "/react-course",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      iconColor: "text-cyan-600"
    },
    {
      id: "javascript",
      title: "JavaScript Mastery",
      description: "Master JavaScript fundamentals, async programming, DOM manipulation, and modern ES6+ features.",
      icon: BookOpen,
      color: "from-yellow-600 to-orange-600",
      modules: 8,
      lessons: 28,
      duration: "10 hours",
      level: "Beginner to Advanced",
      link: "/javascript-course",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      iconColor: "text-yellow-600"
    },
    {
      id: "csharp",
      title: "C# Programming",
      description: "Learn C# with .NET framework. Master OOP, LINQ, async/await, and build desktop & web applications.",
      icon: Code2,
      color: "from-violet-600 to-purple-600",
      modules: 8,
      lessons: 26,
      duration: "10 hours",
      level: "Beginner to Advanced",
      link: "/csharp-course",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      iconColor: "text-violet-600"
    },
    {
      id: "css",
      title: "CSS & Styling",
      description: "Master CSS from basics to advanced layouts. Learn Flexbox, Grid, animations, and responsive design.",
      icon: BookOpen,
      color: "from-pink-600 to-red-600",
      modules: 8,
      lessons: 24,
      duration: "8 hours",
      level: "Beginner to Advanced",
      link: "/css-course",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      iconColor: "text-pink-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-red-600 p-2 rounded-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Learning Platform
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Interactive Programming Courses</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Trophy className="h-4 w-4 mr-2" />
                My Achievements
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Start Learning Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Master Programming with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Interactive Courses
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Learn at your own pace with structured modules, hands-on projects, quizzes, and earn certificates upon completion.
          </p>
          
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="mt-8 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white text-lg h-12 px-8"
            size="lg"
          >
            Start Learning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <CardHeader className={`${course.bgColor} pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow-lg`}>
                      <Icon className={`h-8 w-8 ${course.iconColor}`} />
                    </div>
                    <Badge variant="outline" className="font-semibold">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.modules}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{course.lessons}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{course.duration}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Duration</div>
                    </div>
                  </div>

                  {/* Removed the direct link from the button */}
                  <Button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white group-hover:shadow-lg transition-shadow"
                    size="lg"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 mb-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-slate-100">
            What You'll Get
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Structured Learning", desc: "Follow organized modules and lessons" },
              { icon: "🎥", title: "Video Tutorials", desc: "Watch expert-led video content" },
              { icon: "✅", title: "Quizzes & Exams", desc: "Test your knowledge regularly" },
              { icon: "🏆", title: "Certificates", desc: "Earn certificates on completion" }
            ].map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CourseSelectionModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
