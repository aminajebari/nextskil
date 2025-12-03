"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Lock, PlayCircle } from "lucide-react"
import { SubscriptionGate } from "@/components/subscription-gate"

const lessonsData = [
  {
    id: 1,
    title: "Past Simple Tense",
    description: "Learn how to talk about past events and actions.",
    duration: "20 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/past-simple-tense.jpg",
  },
  {
    id: 2,
    title: "Present Perfect",
    description: "Master the present perfect tense for life experiences.",
    duration: "25 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/present-perfect-tense.jpg",
  },
  {
    id: 3,
    title: "Future Tenses",
    description: "Express future plans and predictions.",
    duration: "22 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/future-tense.jpg",
  },
  {
    id: 4,
    title: "Modal Verbs",
    description: "Use can, could, should, must and other modals.",
    duration: "18 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/modal-verbs.jpg",
  },
  {
    id: 5,
    title: "Comparatives and Superlatives",
    description: "Compare things and describe extremes.",
    duration: "20 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/comparatives-superlatives.jpg",
  },
]

export default function EnglishIntermediatePage() {
  const [lessons, setLessons] = useState(lessonsData)
  const [filter, setFilter] = useState("all")

  const completedLessons = lessons.filter((lesson) => lesson.completed).length
  const totalLessons = lessons.length
  const progress = Math.round((completedLessons / totalLessons) * 100)

  const filteredLessons = lessons.filter((lesson) => {
    if (filter === "completed") return lesson.completed
    if (filter === "pending") return !lesson.completed && !lesson.locked
    return true
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/english-course"
            className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to English Course
          </Link>
          <div className="text-foreground">
            <div className="text-sm mb-2 text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              {" > "}
              <Link href="/english-course" className="hover:text-primary transition-colors">
                English
              </Link>
              {" > "}
              <span>Intermediate</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Intermediate Level - English</h1>
            <p className="text-muted-foreground">Build on your basics with intermediate grammar and vocabulary</p>

            {/* Progress Section */}
            <div className="mt-6 bg-muted rounded-xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Overall Progress: {progress}%</span>
                <span className="text-muted-foreground">
                  {completedLessons}/{totalLessons} lessons completed
                </span>
              </div>
              <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="flex gap-2 mb-8 bg-card border border-border rounded-lg p-1 w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "all" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "completed" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "pending" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Pending
          </button>
        </div>

        <SubscriptionGate
          title="Unlock English Intermediate Course"
          description="Subscribe to access all intermediate lessons and practice materials."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLessons.map((lesson) => (
              <div
                key={lesson.id}
                className={`bg-card border border-border rounded-xl relative overflow-hidden transition-all hover:shadow-lg flex flex-col ${
                  lesson.completed
                    ? "border-l-4 border-l-green-500"
                    : lesson.locked
                      ? "border-l-4 border-l-gray-400 opacity-70"
                      : "border-l-4 border-l-secondary"
                }`}
              >
                {/* Lesson Image */}
                <div className="relative h-48 w-full bg-muted">
                  <Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />
                  {lesson.progress > 0 && !lesson.completed && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10">
                      {lesson.progress}%
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        lesson.completed
                          ? "bg-green-100 text-green-700"
                          : lesson.locked
                            ? "bg-gray-100 text-gray-600"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {lesson.completed ? "Completed" : lesson.locked ? "Locked" : "Available"}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${
                        lesson.completed ? "bg-green-500" : lesson.locked ? "bg-gray-400" : "bg-orange-500"
                      }`}
                    >
                      {lesson.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{lesson.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{lesson.description}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{lesson.duration}</span>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                      {lesson.difficulty}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {lesson.locked ? (
                      <button
                        disabled
                        className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Lock size={16} />
                        Locked
                      </button>
                    ) : lesson.completed ? (
                      <>
                        <Link href={`/english-intermediate/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-muted text-foreground py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors">
                            Review
                          </button>
                        </Link>
                        <Link href={`/english-intermediate/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Redo
                          </button>
                        </Link>
                      </>
                    ) : (
                      <Link href={`/english-intermediate/lesson-${lesson.id}`} className="flex-1">
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                          <PlayCircle size={16} />
                          {lesson.progress > 0 ? "Continue" : "Start"}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SubscriptionGate>
      </div>
    </div>
  )
}
