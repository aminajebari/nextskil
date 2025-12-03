'use client'

import { Code2, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface CourseSelectionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CourseSelectionModal({ open, onOpenChange }: CourseSelectionModalProps) {
  const courses = [
    {
      id: 'html',
      title: 'HTML Mastery',
      description: 'Master HTML from fundamentals to advanced techniques. Build real-world projects, pass quizzes, and earn your certificate.',
      icon: Code2,
      modules: 8,
      lessons: 26,
      duration: '8 hours',
      level: 'Beginner to Advanced',
      link: '/html-course',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      iconColor: 'text-blue-600'
    },
    {
      id: 'cpp',
      title: 'C++ Programming',
      description: 'Learn C++ programming from basics to advanced concepts. Master OOP, STL, and modern C++ features.',
      icon: BookOpen,
      modules: 8,
      lessons: 24,
      duration: '10 hours',
      level: 'Beginner to Advanced',
      link: '/cpp-course',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      iconColor: 'text-purple-600'
    },
    {
      id: 'react',
      title: 'React Fundamentals',
      description: 'Build modern interactive UIs with React. Learn hooks, components, state management, and best practices.',
      icon: Code2,
      modules: 8,
      lessons: 25,
      duration: '9 hours',
      level: 'Beginner to Advanced',
      link: '/react-course',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
      iconColor: 'text-cyan-600'
    },
    {
      id: 'javascript',
      title: 'JavaScript Mastery',
      description: 'Master JavaScript fundamentals, async programming, DOM manipulation, and modern ES6+ features.',
      icon: BookOpen,
      modules: 8,
      lessons: 28,
      duration: '10 hours',
      level: 'Beginner to Advanced',
      link: '/javascript-course',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'csharp',
      title: 'C# Programming',
      description: 'Learn C# with .NET framework. Master OOP, LINQ, async/await, and build desktop & web applications.',
      icon: Code2,
      modules: 8,
      lessons: 26,
      duration: '10 hours',
      level: 'Beginner to Advanced',
      link: '/csharp-course',
      bgColor: 'bg-violet-50 dark:bg-violet-950/20',
      iconColor: 'text-violet-600'
    },
    {
      id: 'css',
      title: 'CSS & Styling',
      description: 'Master CSS from basics to advanced layouts. Learn Flexbox, Grid, animations, and responsive design.',
      icon: BookOpen,
      modules: 8,
      lessons: 24,
      duration: '8 hours',
      level: 'Beginner to Advanced',
      link: '/css-course',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20',
      iconColor: 'text-pink-600'
    }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">Select Your Course</DialogTitle>
          <DialogDescription className="text-base">
            Choose which programming language or technology you want to master
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6 py-6">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card key={course.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300 dark:hover:border-blue-700 overflow-hidden flex flex-col">
                <CardHeader className={`${course.bgColor} pb-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 shadow-lg">
                      <Icon className={`h-8 w-8 ${course.iconColor}`} />
                    </div>
                    <Badge variant="outline" className="font-semibold text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">{course.modules}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Modules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-red-600">{course.lessons}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-slate-700 dark:text-slate-300">{course.duration}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Duration</div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold group transition-all"
                    size="lg"
                  >
                    <Link href={course.link}>
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
