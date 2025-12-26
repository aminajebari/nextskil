"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  CheckCircle2,
  Circle,
  PlayCircle,
  BookOpen,
  Award,
  ChevronRight,
  Code2,
  Eye,
  Lock,
  X,
  AlertCircle,
  Zap,
  Home,
} from "lucide-react"
import { pythonCourseData } from "@/lib/python-course-data"
import LessonContent from "@/components/lesson-content"
import ModuleQuiz from "@/components/module-quiz"
import FinalExam from "@/components/final-exam"
import Certificate from "@/components/python/certificate"
import ExamplePracticeExam from "@/components/example-practice-exam"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function PythonCoursePage() {
  const [selectedModule, setSelectedModule] = useState(0)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const [activeTab, setActiveTab] = useState("lesson")
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set(Array.from({ length: pythonCourseData.modules.length }, (_, i) => i)),
  )
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    new Set(
      pythonCourseData.modules.flatMap((module, moduleIndex) =>
        module.lessons.map((_, lessonIndex) => `${moduleIndex}-${lessonIndex}`),
      ),
    ),
  )
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set())
  const [examCompleted, setExamCompleted] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const [showCertificatePreview, setShowCertificatePreview] = useState(false)
  const [showExampleExam, setShowExampleExam] = useState(false)

  const isLessonComplete = (moduleIndex: number, lessonIndex: number) => {
    return completedLessons.has(`${moduleIndex}-${lessonIndex}`)
  }

  const totalLessons = pythonCourseData.modules.reduce((acc, moduleItem) => acc + moduleItem.lessons.length, 0)
  const progress = (completedLessons.size / totalLessons) * 100
  const totalModules = pythonCourseData.modules.length

  const completedModulesCount = pythonCourseData.modules.filter((moduleItem, moduleIndex) => {
    const allLessonsCompleted = moduleItem.lessons.every((_, lessonIndex) => isLessonComplete(moduleIndex, lessonIndex))
    return allLessonsCompleted
  }).length

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
                  <p className="text-sm text-muted-foreground">10 Sample Questions</p>
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
    <SubscriptionGate
      title="Unlock Python Mastery"
      description="Access the full interactive Python Professional Course with projects and certification."
    >
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                  <Code2 className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-balance">Python Mastery</h1>
                  <p className="text-sm text-muted-foreground">Interactive Learning Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/courses">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Home className="h-4 w-4" />
                    All Courses
                  </Button>
                </Link>
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

        <div className="container mx-auto px-4 py-6">
          <div className="mb-6 space-y-4">
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-secondary/30">
              <h2 className="text-3xl font-bold mb-2 text-balance">Python Professional Mastery Course</h2>
              <p className="text-muted-foreground mb-4">
                Master Python from fundamentals to advanced data structures. Learn data analysis, web automation, OOP,
                and build professional applications. Complete all modules, pass the final exam, and earn your
                certificate!
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Lessons</p>
                    <p className="font-bold">
                      {completedLessons.size}/{totalLessons}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Modules</p>
                    <p className="font-bold">
                      {completedModulesCount}/{totalModules}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg">
                  <Zap className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Streak</p>
                    <p className="font-bold">Keep Going</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-background/80 px-4 py-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="font-bold">{Math.round(progress)}% Done</p>
                  </div>
                </div>
              </div>
            </div>

            {progress < 100 && (
              <Alert variant="info" className="border-primary/30 bg-primary/5">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Course Progress</AlertTitle>
                <AlertDescription>
                  Complete all {totalLessons} lessons to unlock the final exam. You're {Math.round(progress)}% of the
                  way there!
                </AlertDescription>
              </Alert>
            )}

            {progress === 100 && !examCompleted && (
              <Alert variant="warning" className="border-secondary/30 bg-secondary/5">
                <Zap className="h-4 w-4" />
                <AlertTitle>Ready for Final Exam</AlertTitle>
                <AlertDescription>
                  You've completed all lessons! Take the final exam to earn your certificate.
                </AlertDescription>
              </Alert>
            )}

            {examCompleted && (
              <Alert variant="success" className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4" />
                <AlertTitle>Congratulations</AlertTitle>
                <AlertDescription>
                  You've completed the course and passed the final exam! Click "Get Certificate" to download your
                  achievement.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <aside className="lg:col-span-1">
              <Card>
                <CardHeader className="bg-primary/5 border-b">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Course Modules
                  </CardTitle>
                  <CardDescription>
                    {completedModulesCount}/{totalModules} modules completed
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[calc(100vh-380px)]">
                    <div className="space-y-1 p-4">
                      {pythonCourseData.modules.map((moduleItem, moduleIndex) => (
                        <div key={moduleIndex} className="space-y-1">
                          <button
                            onClick={() => toggleModule(moduleIndex)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              selectedModule === moduleIndex
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "hover:bg-primary/10 hover:border-primary/30 border border-transparent"
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <span className="font-semibold text-sm">Module {moduleIndex + 1}</span>
                            </div>
                            <p className="text-sm mt-1 font-medium">{moduleItem.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Progress
                                value={
                                  (moduleItem.lessons.filter((_, i) => isLessonComplete(moduleIndex, i)).length /
                                    moduleItem.lessons.length) *
                                  100
                                }
                                className="h-1 [&>div]:bg-primary"
                              />
                              <span className="text-xs whitespace-nowrap">
                                {moduleItem.lessons.filter((_, i) => isLessonComplete(moduleIndex, i)).length}/
                                {moduleItem.lessons.length}
                              </span>
                            </div>
                          </button>

                          {expandedModules.has(moduleIndex) && (
                            <div className="ml-4 space-y-1 mt-2">
                              {moduleItem.lessons.map((lesson, lessonIndex) => (
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
                                      ? "bg-primary/20 font-medium border-l-2 border-primary"
                                      : "hover:bg-secondary/50"
                                  }`}
                                >
                                  {isLessonComplete(moduleIndex, lessonIndex) ? (
                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
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
                          onClick={() => setShowExampleExam(true)}
                          className="w-full text-left p-3 rounded-lg transition-colors bg-primary/5 hover:bg-primary/10 border-2 border-primary/20 mb-2"
                        >
                          <div className="flex items-center gap-2">
                            <Eye className="h-5 w-5 text-primary" />
                            <span className="font-semibold">Practice Exam</span>
                          </div>
                          <p className="text-sm mt-1 text-muted-foreground">10 sample questions with results</p>
                        </button>

                        <button
                          onClick={() => progress >= 100 && setActiveTab("exam")}
                          disabled={progress < 100}
                          className={`w-full text-left p-3 rounded-lg transition-colors border-2 ${
                            activeTab === "exam"
                              ? "bg-primary text-primary-foreground border-primary"
                              : progress >= 100
                                ? "bg-primary/5 hover:bg-primary/10 border-primary/20"
                                : "opacity-50 cursor-not-allowed border-muted"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {progress < 100 ? <Lock className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                            <span className="font-semibold">Final Exam</span>
                          </div>
                          <p className="text-sm mt-1">50 Questions - Master Test</p>
                          {progress < 100 && (
                            <Badge className="mt-2 bg-destructive/20 text-destructive border-destructive">
                              Locked - {Math.round(progress)}% Complete
                            </Badge>
                          )}
                          {examCompleted && <Badge className="mt-2 bg-success text-white">Completed ✓</Badge>}
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
                            Lesson {selectedLesson + 1} of {pythonCourseData.modules[selectedModule].lessons.length}
                          </span>
                        </div>
                        <CardTitle className="text-2xl text-balance">
                          {pythonCourseData.modules[selectedModule].lessons[selectedLesson].title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {pythonCourseData.modules[selectedModule].lessons[selectedLesson].description}
                        </CardDescription>
                      </div>
                      {isLessonComplete(selectedModule, selectedLesson) && (
                        <Badge className="bg-success text-white">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Completed
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
                          lesson={pythonCourseData.modules[selectedModule].lessons[selectedLesson]}
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
                              src={pythonCourseData.modules[selectedModule].videoUrl}
                              title={`Module ${selectedModule + 1} Video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <h3>Video Content Overview</h3>
                            <p>{pythonCourseData.modules[selectedModule].videoDescription}</p>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="quiz">
                        <ModuleQuiz
                          module={pythonCourseData.modules[selectedModule]}
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
    </SubscriptionGate>
  )
}
