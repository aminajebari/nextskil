"use client"

import { Star, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function CoursesGrid() {
  const courses = [
    {
      id: 1,
      title: "HTML & Web Development",
      category: "Programming",
      level: "Beginner to Advanced",
      students: 12500,
      hours: 24,
      rating: 4.9,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Master HTML from basics to advanced concepts with hands-on projects",
      image: "/html5-code-editor-web-development.jpg",
      lessons: ["HTML Fundamentals", "Text and Formatting", "Links and Images"],
    },
    {
      id: 2,
      title: "JavaScript Complete Course",
      category: "Programming",
      level: "Intermediate to Advanced",
      students: 8900,
      hours: 36,
      rating: 4.9,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Deep dive into modern JavaScript, ES6+, and asynchronous programming",
      image: "/javascript-code-modern-programming.jpg",
      lessons: ["JavaScript Basics", "Functions & Scope", "DOM Manipulation"],
    },
    {
      id: 3,
      title: "React Fundamentals",
      category: "Programming",
      level: "Intermediate",
      students: 6200,
      hours: 28,
      rating: 4.8,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Build modern web applications with React and hooks",
      image: "/react-components-modern-ui-development.jpg",
      lessons: ["Introduction to React", "JSX Syntax", "Components and Props", "State Management with Hooks"],
    },
    {
      id: 4,
      title: "English A2 to C1",
      category: "Language",
      level: "Beginner to Advanced",
      students: 15400,
      hours: 120,
      rating: 4.8,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Master English from beginner to advanced level with interactive lessons",
      image: "/english-learning-books-conversation-modern-classro.jpg",
      lessons: ["Greetings & Introductions", "Grammar Basics", "Conversation Skills"],
    },
    {
      id: 5,
      title: "French Language Course",
      category: "Language",
      level: "A2 to C1",
      students: 7100,
      hours: 100,
      rating: 4.7,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Become fluent in French through comprehensive lessons and practice",
      image: "/french-language-paris-eiffel-tower-learning.jpg",
      lessons: ["French Basics", "Common Phrases", "French Grammar"],
    },
    {
      id: 6,
      title: "Python Programming",
      category: "Programming",
      level: "Beginner to Advanced",
      students: 9800,
      hours: 42,
      rating: 4.9,
      price: "$9/month",
      instructor: "NextSkill Academy",
      description: "Learn Python programming from basics to advanced data structures",
      image: "/python-programming-code-snake-logo.jpg",
      lessons: ["Python Basics", "Data Structures", "Object-Oriented Programming"],
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Courses</h2>
          <p className="text-muted-foreground text-lg">Choose from hundreds of expertly-designed courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 relative overflow-hidden bg-muted">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Course Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-card-foreground mb-1 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-2 ${
                      course.category === "Programming"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-blue-100 text-primary"
                    }`}
                  >
                    {course.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">What you'll learn:</p>
                  <ul className="space-y-1">
                    {course.lessons.slice(0, 3).map((lesson, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="mr-1">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star size={16} className="text-secondary" fill="currentColor" />
                    <span className="font-semibold text-card-foreground">{course.rating}</span>
                    <span>• {course.level}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{course.hours}h</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">{course.price}</span>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
