"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, PlayCircle, Award, ChevronRight, Palette, Eye, Lock, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { courseData } from "@/lib/css-course-data"
import LessonContent from "./lesson-content"
import ModuleQuiz from "./module-quiz"
import Certificate from "@/components/css/certificate"
import ExamplePracticeExam from "./example-practice-exam"

export default function CSSCoursePlatform() {
  const [selectedModule, setSelectedModule] = useState(0)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [activeTab, setActiveTab] = useState("lesson")
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set(Array.from({ length: courseData.modules.length }, (_, i) => i)),
  )
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set())
  const [examCompleted, setExamCompleted] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [showCertificatePreview, setShowCertificatePreview] = useState(false)
  const [showExampleExam, setShowExampleExam] = useState(false)

  const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const progress = (completedLessons.size / totalLessons) * 100

  useEffect(() => {
    if (progress === 100 && examCompleted) {
      setShowCertificate(true)
    }
  }, [progress, examCompleted])

  const markLessonComplete = () => {
    const lessonId = `${selectedModule}-${selectedLesson}`
    setCompletedLessons(new Set([...completedLessons, lessonId]))
  }

  const markQuizComplete = (moduleIndex: number) => {
    setCompletedQuizzes(new Set([...completedQuizzes, moduleIndex]))
  }

  const isLessonComplete = (moduleIndex: number, lessonIndex: number) => {
    return completedLessons.has(`${moduleIndex}-${lessonIndex}`)
  }

  const toggleModule = (moduleIndex: number) => {
    const newExpanded = new Set(expandedModules)
    if (newExpanded.has(moduleIndex)) {
      newExpanded.delete(moduleIndex)
    } else {
      newExpanded.add(moduleIndex)
    }
    setExpandedModules(newExpanded)
  }

  if (showCertificate) {
    return <Certificate onClose={() => setShowCertificate(false)} progress={progress} />
  }

  if (showCertificatePreview) {
    return <Certificate onClose={() => setShowCertificatePreview(false)} progress={progress} preview={true} />
  }

  if (showExampleExam) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold">Example Practice Exam</h1>
                  <p className="text-sm text-muted-foreground">50 Sample Questions</p>
                </div>
              </div>
              <Button onClick={() => setShowExampleExam(false)} variant="outline">
                <X className="h-4 w-4 mr-2" />
                Back to Course
              </Button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-6">
          <ExamplePracticeExam onClose={() => setShowExampleExam(false)} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/courses" className="flex items-center gap-2 hover:opacity-80 mr-4">
                <ArrowLeft className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">All Courses</span>
              </Link>
              <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                <Palette className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">CSS Mastery</h1>
                <p className="text-sm text-muted-foreground">Interactive Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Progress</p>
                <p className="text-2xl font-bold text-primary">{Math.round(progress)}%</p>
              </div>
              <Button
                onClick={() => setShowCertificatePreview(true)}
                variant="outline"
                className="gap-2 hidden md:flex"
              >
                <Eye className="h-4 w-4" />
                Preview Certificate
              </Button>
              <Button
                onClick={() => setShowCertificate(true)}
                disabled={progress < 100 || !examCompleted}
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                {progress < 100 || !examCompleted ? <Lock className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                {progress < 100 || !examCompleted ? "Locked - Complete Course" : "Get Certificate"}
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2 [&>div]:bg-primary" />
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-muted-foreground">
                {completedLessons.size} of {totalLessons} lessons
              </span>
              <span className="font-semibold text-primary">{Math.round(progress)}% Complete</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-red-600 text-white pb-4">
                <CardTitle>Course Modules</CardTitle>
              </CardHeader>
              <CardContent className="p-0 divide-y">
                {courseData.modules.map((module, moduleIdx) => (
                  <div key={module.id} className="border-b last:border-b-0">
                    <button
                      onClick={() => toggleModule(moduleIdx)}
                      className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          Module {moduleIdx + 1}: {module.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{module.lessons.length} lessons</p>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 transition-transform ${expandedModules.has(moduleIdx) ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedModules.has(moduleIdx) && (
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 space-y-2 border-t">
                        {module.lessons.map((lesson, lessonIdx) => {
                          const isComplete = isLessonComplete(moduleIdx, lessonIdx)
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setSelectedLesson(lessonIdx)}
                              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                isComplete
                                  ? "bg-green-100 dark:bg-green-900/30"
                                  : "hover:bg-slate-200 dark:hover:bg-slate-800"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {isComplete ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                                ) : (
                                  <PlayCircle className="h-4 w-4 text-pink-600 flex-shrink-0" />
                                )}
                                <span
                                  className={
                                    isComplete ? "line-through text-slate-600" : "text-slate-900 dark:text-white"
                                  }
                                >
                                  {lesson.title}
                                </span>
                              </div>
                            </button>
                          )
                        })}

                        <button
                          onClick={() => markQuizComplete(selectedModule)}
                          className="w-full text-left p-2 rounded text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border-t pt-3 mt-3 font-semibold text-blue-600"
                        >
                          📝 Module Quiz
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                <div className="p-4 border-t">
                  {progress === 100 ? (
                    <>
                      <Button
                        onClick={() => setShowExampleExam(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white mb-2"
                      >
                        🎓 Final Exam
                      </Button>
                      <Button onClick={() => setShowCertificatePreview(true)} variant="outline" className="w-full">
                        👁️ Preview Certificate
                      </Button>
                    </>
                  ) : (
                    <Button disabled className="w-full">
                      <Lock className="h-4 w-4 mr-2" />
                      Complete All Lessons
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedLesson !== 0 ? (
              <>
                {selectedLesson === -2 ? (
                  <Certificate courseName="CSS & Styling" preview={true} />
                ) : selectedLesson === -1 ? (
                  <ModuleQuiz moduleId={selectedModule} onComplete={() => markQuizComplete(selectedModule)} />
                ) : (
                  <LessonContent
                    lesson={courseData.modules[selectedModule].lessons[selectedLesson]}
                    onComplete={markLessonComplete}
                  />
                )}
              </>
            ) : (
              <Card className="border-2 h-full">
                <CardHeader className="bg-gradient-to-r from-pink-600 to-red-600 text-white">
                  <CardTitle className="text-3xl">Welcome to CSS Mastery</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 text-center">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                    Select a lesson from the left sidebar to begin learning
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
