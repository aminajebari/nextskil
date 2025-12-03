"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle2, Play, FileText, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SubscriptionGate } from "@/components/subscription-gate"

export default function HTMLCoursePage() {
  const [enrolledLessons, setEnrolledLessons] = useState<number[]>([])

  const courseModules = [
    {
      id: 1,
      title: "Introduction to HTML",
      lessons: [
        { id: 1, title: "What is HTML?", duration: "15 min", type: "video" },
        { id: 2, title: "HTML Document Structure", duration: "20 min", type: "video" },
        { id: 3, title: "Your First HTML Page", duration: "25 min", type: "practice" },
      ],
    },
    {
      id: 2,
      title: "HTML Elements & Tags",
      lessons: [
        { id: 4, title: "Headings and Paragraphs", duration: "18 min", type: "video" },
        { id: 5, title: "Links and Navigation", duration: "22 min", type: "video" },
        { id: 6, title: "Images and Media", duration: "20 min", type: "video" },
        { id: 7, title: "Lists: Ordered and Unordered", duration: "15 min", type: "practice" },
      ],
    },
    {
      id: 3,
      title: "Forms and Input",
      lessons: [
        { id: 8, title: "Form Basics", duration: "25 min", type: "video" },
        { id: 9, title: "Input Types", duration: "30 min", type: "video" },
        { id: 10, title: "Form Validation", duration: "28 min", type: "practice" },
      ],
    },
    {
      id: 4,
      title: "Semantic HTML",
      lessons: [
        { id: 11, title: "Semantic Elements", duration: "22 min", type: "video" },
        { id: 12, title: "Accessibility Best Practices", duration: "25 min", type: "video" },
        { id: 13, title: "SEO with HTML", duration: "20 min", type: "reading" },
      ],
    },
    {
      id: 5,
      title: "Advanced HTML",
      lessons: [
        { id: 14, title: "HTML5 APIs", duration: "30 min", type: "video" },
        { id: 15, title: "Canvas and SVG", duration: "35 min", type: "video" },
        { id: 16, title: "Final Project", duration: "60 min", type: "practice" },
      ],
    },
  ]

  const certificates = [
    { level: "Beginner", requirements: "Complete modules 1-2", color: "bg-blue-100 text-blue-800" },
    { level: "Intermediate", requirements: "Complete modules 1-4", color: "bg-blue-100 text-blue-800" },
    { level: "Master", requirements: "Complete all modules + final project", color: "bg-red-100 text-red-800" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <h1 className="text-4xl font-bold mb-4">HTML Complete Course</h1>
              <p className="text-lg text-primary-foreground/90 mb-4">
                Master HTML from basics to advanced concepts. Build semantic, accessible web pages.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>8 hours total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>16 lessons</span>
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

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="curriculum" className="space-y-8">
          <TabsList>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum" className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
            <SubscriptionGate
              title="Unlock HTML Course"
              description="Subscribe to access all HTML lessons and projects."
            >
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
                              {enrolledLessons.includes(lesson.id) && (
                                <CheckCircle2 className="h-5 w-5 text-green-600" />
                              )}
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
                    "HTML document structure and syntax",
                    "Semantic HTML5 elements",
                    "Forms and input validation",
                    "Accessibility best practices",
                    "SEO optimization techniques",
                    "HTML5 APIs and modern features",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No prior experience required. This course is perfect for complete beginners who want to start their
                  web development journey.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
