"use client"
import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle2, Play, FileText, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function CppCoursePage() {
  const courseModules = [
    {
      id: 1,
      title: "C++ Fundamentals",
      lessons: [
        { id: 1, title: "Introduction to C++", duration: "20 min", type: "video" },
        { id: 2, title: "Variables and Data Types", duration: "25 min", type: "video" },
        { id: 3, title: "Your First C++ Program", duration: "30 min", type: "practice" },
      ],
    },
    {
      id: 2,
      title: "Control Structures",
      lessons: [
        { id: 4, title: "If-Else Statements", duration: "22 min", type: "video" },
        { id: 5, title: "Loops: For, While, Do-While", duration: "28 min", type: "video" },
        { id: 6, title: "Switch Statements", duration: "18 min", type: "practice" },
      ],
    },
    {
      id: 3,
      title: "Functions and Arrays",
      lessons: [
        { id: 7, title: "Functions Basics", duration: "25 min", type: "video" },
        { id: 8, title: "Function Overloading", duration: "20 min", type: "video" },
        { id: 9, title: "Arrays and Vectors", duration: "30 min", type: "video" },
        { id: 10, title: "Multi-dimensional Arrays", duration: "25 min", type: "practice" },
      ],
    },
    {
      id: 4,
      title: "Object-Oriented Programming",
      lessons: [
        { id: 11, title: "Classes and Objects", duration: "30 min", type: "video" },
        { id: 12, title: "Constructors and Destructors", duration: "25 min", type: "video" },
        { id: 13, title: "Inheritance", duration: "28 min", type: "video" },
        { id: 14, title: "Polymorphism", duration: "30 min", type: "video" },
        { id: 15, title: "OOP Project", duration: "45 min", type: "practice" },
      ],
    },
    {
      id: 5,
      title: "Advanced C++",
      lessons: [
        { id: 16, title: "Pointers and References", duration: "35 min", type: "video" },
        { id: 17, title: "Memory Management", duration: "30 min", type: "video" },
        { id: 18, title: "Templates and STL", duration: "40 min", type: "video" },
        { id: 19, title: "Exception Handling", duration: "25 min", type: "video" },
        { id: 20, title: "Final Capstone Project", duration: "90 min", type: "practice" },
      ],
    },
  ]

  const certificates = [
    { level: "Beginner", requirements: "Complete modules 1-2", color: "bg-blue-100 text-blue-800" },
    { level: "Intermediate", requirements: "Complete modules 1-4", color: "bg-blue-100 text-blue-800" },
    { level: "Master", requirements: "Complete all modules + capstone project", color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-8 w-8" />
                <Badge variant="secondary">Technical Skills</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">C++ Complete Course</h1>
              <p className="text-lg text-primary-foreground/90 mb-4">
                Master C++ programming from fundamentals to advanced OOP concepts and memory management.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>12 hours total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>20 lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>3 certificates</span>
                </div>
              </div>
            </div>
            <div className="md:w-80">
              <Card>
                <CardHeader>
                  <CardTitle>Enroll Now</CardTitle>
                  <CardDescription>Get lifetime access to all course materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="curriculum" className="space-y-8">
          <TabsList>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <SubscriptionGate title="Unlock C++ Course" description="Subscribe to access all C++ lessons and projects.">
              <Accordion type="single" collapsible className="space-y-4">
                {courseModules.map((module) => (
                  <AccordionItem key={module.id} value={`module-${module.id}`}>
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {module.id}
                        </div>
                        {module.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-11 pt-2">
                        {module.lessons.map((lesson) => (
                          <Card key={lesson.id} className="hover:border-primary cursor-pointer transition-colors">
                            <CardContent className="flex items-center justify-between p-4">
                              <div className="flex items-center gap-3">
                                {lesson.type === "video" && <Play className="h-4 w-4 text-muted-foreground" />}
                                {lesson.type === "practice" && <Code className="h-4 w-4 text-muted-foreground" />}
                                {lesson.type === "reading" && <FileText className="h-4 w-4 text-muted-foreground" />}
                                <div>
                                  <p className="font-medium">{lesson.title}</p>
                                  <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SubscriptionGate>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Available Certificates</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {certificates.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{cert.level}</CardTitle>
                    <CardDescription>{cert.requirements}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge className={cert.color}>{cert.level} Level</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">About This Course</h2>
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "C++ syntax and fundamentals",
                    "Object-oriented programming",
                    "Memory management and pointers",
                    "STL and templates",
                    "Exception handling",
                    "Advanced C++ features",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
