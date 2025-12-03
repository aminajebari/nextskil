'use client'

import { useState } from 'react'
import { ChevronDown, PlayCircle, CheckCircle2, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { LessonContent } from './lesson-content'
import { ModuleQuiz } from './module-quiz'
import { FinalExam } from './final-exam'
import { Certificate } from './certificate'
import { csharpCourseData } from '@/lib/csharp-course-data'

export default function CSharpCoursePlatform() {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const [selectedLesson, setSelectedLesson] = useState<{ moduleId: number; lessonId: number } | null>(null)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [completedModuleQuizzes, setCompletedModuleQuizzes] = useState<number[]>([])
  const [showFinalExam, setShowFinalExam] = useState(false)
  const [finalExamPassed, setFinalExamPassed] = useState(false)

  const totalLessons = csharpCourseData.modules.reduce((acc, mod) => acc + mod.lessons.length, 0)
  const progress = (completedLessons.length / totalLessons) * 100
  const canTakeFinalExam = completedLessons.length === totalLessons

  const handleLessonComplete = (moduleId: number, lessonId: number) => {
    const key = `${moduleId}-${lessonId}`
    if (!completedLessons.includes(key)) {
      setCompletedLessons([...completedLessons, key])
    }
  }

  const handleQuizComplete = (moduleId: number) => {
    if (!completedModuleQuizzes.includes(moduleId)) {
      setCompletedModuleQuizzes([...completedModuleQuizzes, moduleId])
    }
  }

  const handleFinalExamPass = () => {
    setFinalExamPassed(true)
  }

  if (finalExamPassed) {
    return <Certificate courseName="C# Programming" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="border-b bg-white dark:bg-slate-950 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link href="/courses" className="flex items-center gap-2 hover:opacity-80">
              <ArrowLeft className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Back to Courses</span>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">C# Programming</h1>
            <div></div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Progress</span>
              <span className="text-sm font-bold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-2">
              <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white pb-4">
                <CardTitle>Course Modules</CardTitle>
              </CardHeader>
              <CardContent className="p-0 divide-y">
                {csharpCourseData.modules.map((module, moduleIdx) => (
                  <div key={module.id} className="border-b last:border-b-0">
                    <button
                      onClick={() => setExpandedModule(expandedModule === moduleIdx ? null : moduleIdx)}
                      className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                          Module {moduleIdx + 1}: {module.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {module.lessons.length} lessons
                        </p>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform ${expandedModule === moduleIdx ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedModule === moduleIdx && (
                      <div className="bg-slate-50 dark:bg-slate-900/50 p-3 space-y-2 border-t">
                        {module.lessons.map((lesson) => {
                          const isComplete = completedLessons.includes(`${module.id}-${lesson.id}`)
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => setSelectedLesson({ moduleId: module.id, lessonId: lesson.id })}
                              className={`w-full text-left p-2 rounded text-sm transition-colors ${
                                isComplete ? 'bg-green-100 dark:bg-green-900/30' : 'hover:bg-slate-200 dark:hover:bg-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {isComplete ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                                ) : (
                                  <PlayCircle className="h-4 w-4 text-violet-600 flex-shrink-0" />
                                )}
                                <span className={isComplete ? 'line-through text-slate-600' : 'text-slate-900 dark:text-white'}>
                                  {lesson.title}
                                </span>
                              </div>
                            </button>
                          )
                        })}

                        <button
                          onClick={() => setSelectedLesson({ moduleId: module.id, lessonId: -1 })}
                          className="w-full text-left p-2 rounded text-sm hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors border-t pt-3 mt-3 font-semibold text-blue-600"
                        >
                          📝 Module Quiz
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                <div className="p-4 border-t">
                  {canTakeFinalExam ? (
                    <>
                      <Button
                        onClick={() => setShowFinalExam(true)}
                        className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white mb-2"
                      >
                        🎓 Final Exam
                      </Button>
                      <Button
                        onClick={() => setSelectedLesson({ moduleId: 0, lessonId: -2 })}
                        variant="outline"
                        className="w-full"
                      >
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
            {selectedLesson ? (
              <>
                {selectedLesson.lessonId === -2 ? (
                  <Certificate courseName="C# Programming" preview={true} />
                ) : selectedLesson.lessonId === -1 ? (
                  <ModuleQuiz
                    moduleId={selectedLesson.moduleId}
                    onComplete={() => handleQuizComplete(selectedLesson.moduleId)}
                  />
                ) : (
                  <LessonContent
                    lesson={csharpCourseData.modules.find(m => m.id === selectedLesson.moduleId)?.lessons.find(l => l.id === selectedLesson.lessonId)}
                    onComplete={() => handleLessonComplete(selectedLesson.moduleId, selectedLesson.lessonId)}
                  />
                )}
              </>
            ) : (
              <Card className="border-2 h-full">
                <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                  <CardTitle className="text-3xl">Welcome to C# Programming</CardTitle>
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

      {showFinalExam && (
        <FinalExam
          courseName="C# Programming"
          onPass={handleFinalExamPass}
          onClose={() => setShowFinalExam(false)}
        />
      )}
    </div>
  )
}
