"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2, Circle, PlayCircle, BookOpen, Award, ChevronRight, Code2, Eye, Lock, Home } from "lucide-react"
import { csharpCourseData } from "@/lib/csharp-course-data"
import LessonContent from "@/components/lesson-content"
import ModuleQuiz from "@/components/module-quiz"
import FinalExam from "@/components/final-exam"
import Certificate from "@/components/csharp/certificate"
import Link from "next/link"

export default function CSharpCoursePlatform() {
  const [selectedModule, setSelectedModule] = useState(0)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [activeTab, setActiveTab] = useState("lesson")
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set(Array.from({ length: csharpCourseData.modules.length }, (_, i) => i)),
  )
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set())
  const [examCompleted, setExamCompleted] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [showCertificatePreview, setShowCertificatePreview] = useState(false)

  const totalLessons = csharpCourseData.modules.reduce((acc, module) => acc + module.lessons.length, 0)
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/courses">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="h-4 w-4" />
                  All Courses
                </Button>
              </Link>
              <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center shadow-md">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">C# Mastery</h1>
                <p className="text-sm text-muted-foreground">Professional Development Course</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Progress</p>
                <p className="text-2xl font-bold text-purple-600">{Math.round(progress)}%</p>
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
                className="gap-2 bg-purple-600 hover:bg-purple-700 text-white"
              >
                {progress < 100 || !examCompleted ? <Lock className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                {progress < 100 || !examCompleted ? "Locked" : "Get Certificate"}
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2 [&>div]:bg-purple-600" />
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="text-muted-foreground">
                {completedLessons.size} of {totalLessons} lessons
              </span>
              <span className="font-semibold text-purple-600">{Math.round(progress)}% Complete</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border-2 border-purple-500/30">
          <h2 className="text-3xl font-bold mb-2 text-balance">C# Professional Mastery Course</h2>
          <p className="text-muted-foreground mb-4">
            Master C# from fundamentals to advanced OOP concepts. Learn .NET development, LINQ, async programming, and
            build professional applications. Complete all modules, pass the final exam, and earn your certificate!
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg border-l-4 border-purple-600">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-xs text-muted-foreground">Completed</p>
                <p className="font-bold">
                  {completedLessons.size}/{totalLessons} Lessons
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg border-l-4 border-purple-600">
              <Award className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-xs text-muted-foreground">Modules</p>
                <p className="font-bold">{csharpCourseData.modules.length} Total</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader className="bg-purple-500/5 border-b border-purple-500/20">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Course Modules
                </CardTitle>
                <CardDescription>
                  {completedLessons.size} of {totalLessons} lessons completed
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-280px)]">
                  <div className="space-y-1 p-4">
                    {csharpCourseData.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="space-y-1">
                        <button
                          onClick={() => toggleModule(moduleIndex)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedModule === moduleIndex
                              ? "bg-purple-600 text-white shadow-md border-l-4 border-purple-800"
                              : "hover:bg-purple-500/10 hover:border-purple-500/30 border border-transparent"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-semibold text-sm">Module {moduleIndex + 1}</span>
                          </div>
                          <p className="text-sm mt-1 font-medium line-clamp-2">{module.title}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Progress
                              value={
                                (module.lessons.filter((_, i) => isLessonComplete(moduleIndex, i)).length /
                                  module.lessons.length) *
                                100
                              }
                              className="h-1 [&>div]:bg-purple-600"
                            />
                            <span className="text-xs whitespace-nowrap">
                              {module.lessons.filter((_, i) => isLessonComplete(moduleIndex, i)).length}/
                              {module.lessons.length}
                            </span>
                          </div>
                        </button>

                        {expandedModules.has(moduleIndex) && (
                          <div className="ml-4 space-y-1 mt-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <button
                                key={lessonIndex}
                                onClick={() => {
                                  setSelectedModule(moduleIndex)
                                  setSelectedLesson(lessonIndex)
                                  setActiveTab("lesson")
                                }}
                                className={`w-full text-left p-2 rounded-md text-sm flex items-center gap-2 transition-colors ${
                                  selectedModule === moduleIndex &&
                                  selectedLesson === lessonIndex &&
                                  activeTab === "lesson"
                                    ? "bg-purple-500/20 font-medium border-l-2 border-purple-600"
                                    : "hover:bg-purple-500/10"
                                }`}
                              >
                                {isLessonComplete(moduleIndex, lessonIndex) ? (
                                  <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0" />
                                ) : (
                                  <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                )}
                                <span className="line-clamp-1">{lesson.title}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="border-t pt-4 mt-4">
                      <button
                        onClick={() => progress >= 100 && setActiveTab("exam")}
                        disabled={progress < 100}
                        className={`w-full text-left p-3 rounded-lg transition-colors border-2 ${
                          activeTab === "exam"
                            ? "bg-purple-600 text-white border-purple-600 shadow-md"
                            : progress >= 100
                              ? "bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/30"
                              : "opacity-50 cursor-not-allowed border-muted"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {progress < 100 ? <Lock className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                          <span className="font-semibold">Final Exam</span>
                        </div>
                        <p className="text-sm mt-1">50 Questions - Master Test</p>
                        {progress < 100 && (
                          <Badge className="mt-2 bg-purple-500/20 text-purple-700 border-purple-500">
                            Locked - {Math.round(progress)}% Complete
                          </Badge>
                        )}
                        {examCompleted && <Badge className="mt-2 bg-green-600 text-white">Completed ✓</Badge>}
                      </button>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            {activeTab === "exam" ? (
              <FinalExam onComplete={() => setExamCompleted(true)} completed={examCompleted} />
            ) : (
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Module {selectedModule + 1}</Badge>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Lesson {selectedLesson + 1} of {csharpCourseData.modules[selectedModule].lessons.length}
                        </span>
                      </div>
                      <CardTitle className="text-2xl text-balance">
                        {csharpCourseData.modules[selectedModule].lessons[selectedLesson].title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {csharpCourseData.modules[selectedModule].lessons[selectedLesson].description}
                      </CardDescription>
                    </div>
                    {isLessonComplete(selectedModule, selectedLesson) && (
                      <Badge className="bg-green-600 text-white">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Completed ✓
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="lesson" className="gap-2">
                        <BookOpen className="h-4 w-4" />
                        Lesson
                      </TabsTrigger>
                      <TabsTrigger value="video" className="gap-2">
                        <PlayCircle className="h-4 w-4" />
                        Video
                      </TabsTrigger>
                      <TabsTrigger value="quiz" className="gap-2">
                        <Award className="h-4 w-4" />
                        Quiz
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="lesson">
                      <LessonContent
                        lesson={csharpCourseData.modules[selectedModule].lessons[selectedLesson]}
                        onComplete={markLessonComplete}
                        isComplete={isLessonComplete(selectedModule, selectedLesson)}
                      />
                    </TabsContent>

                    <TabsContent value="video">
                      <div className="space-y-4">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <iframe
                            width="100%"
                            height="100%"
                            src={csharpCourseData.modules[selectedModule].videoUrl}
                            title={`Module ${selectedModule + 1} Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <h3>Video Content Overview</h3>
                          <p>{csharpCourseData.modules[selectedModule].videoDescription}</p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="quiz">
                      <ModuleQuiz
                        module={csharpCourseData.modules[selectedModule]}
                        moduleIndex={selectedModule}
                        onComplete={markQuizComplete}
                        isComplete={completedQuizzes.has(selectedModule)}
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
