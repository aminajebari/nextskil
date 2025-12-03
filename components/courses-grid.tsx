"use client"

import { Star, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function CoursesGrid() {
  const courses = [
    {
      id: 1,
      title: "Complete English Mastery",
      category: "Language",
      level: "Beginner to Advanced",
      students: 12500,
      hours: 48,
      rating: 4.8,
      price: "$9/month",
      instructor: "Sarah Johnson",
      description: "Master English from basics to professional fluency",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      category: "Programming",
      level: "Intermediate to Advanced",
      students: 8900,
      hours: 36,
      rating: 4.9,
      price: "$9/month",
      instructor: "Mike Chen",
      description: "Deep dive into modern JavaScript and ES6+",
    },
    {
      id: 3,
      title: "French Conversation Pro",
      category: "Language",
      level: "Intermediate",
      students: 6200,
      hours: 32,
      rating: 4.7,
      price: "$9/month",
      instructor: "Marie Dubois",
      description: "Become fluent in French through real conversations",
    },
    {
      id: 4,
      title: "Java Web Development",
      category: "Programming",
      level: "Beginner to Intermediate",
      students: 5400,
      hours: 40,
      rating: 4.8,
      price: "$9/month",
      instructor: "Kumar Rajesh",
      description: "Build powerful web applications with Java",
    },
    {
      id: 5,
      title: "German Grammar Fundamentals",
      category: "Language",
      level: "Beginner",
      students: 4100,
      hours: 28,
      rating: 4.6,
      price: "$9/month",
      instructor: "Hans Schmidt",
      description: "Master German grammar with interactive lessons",
    },
    {
      id: 6,
      title: "C++ Systems Programming",
      category: "Programming",
      level: "Advanced",
      students: 3800,
      hours: 52,
      rating: 4.9,
      price: "$9/month",
      instructor: "Alex Petrov",
      description: "Advanced C++ for system and performance critical applications",
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
              {/* Course Image Header */}
              <div className={`h-40 bg-gradient-to-br from-primary to-blue-700 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity" />
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
