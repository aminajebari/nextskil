"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Clock, Users, BookOpen, Star, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Course data structure
const coursesData = {
  english: [
    {
      id: 1,
      title: "Alphabet and Pronunciation",
      level: "A1",
      duration: "1 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-1",
    },
    {
      id: 2,
      title: "Basic Greetings",
      level: "A1",
      duration: "1 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-2",
    },
    {
      id: 3,
      title: "Numbers 1 to 20",
      level: "A1",
      duration: "1 weeks",
      students: 987,
      rating: 4.7,
      description: "Improve your speaking and listening skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-3",
    },
    {
      id: 4,
      title: "Colors",
      level: "A2",
      duration: "2 weeks",
      students: 756,
      rating: 4.9,
      description: "Professional writing and communication skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-4",
    },
    {
      id: 5,
      title: "Animals",
      level: "A1",
      duration: "2 weeks",
      students: 543,
      rating: 4.8,
      description: "Master business English and professional communication",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-5",
    },
    {
      id: 6,
      title: "Family",
      level: "A2",
      duration: "2 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-6",
    },
    {
      id: 7,
      title: "Food and Drinks",
      level: "A2",
      duration: "3 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-7",
    },
    {
      id: 8,
      title: "Days of the Week",
      level: "A2",
      duration: "3 weeks",
      students: 987,
      rating: 4.7,
      description: "Improve your speaking and listening skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-8",
    },
    {
      id: 9,
      title: "Months and Seasons",
      level: "A2",
      duration: "3 weeks",
      students: 756,
      rating: 4.9,
      description: "Professional writing and communication skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-9",
    },
    {
      id: 10,
      title: "Present Simple",
      level: "B1",
      duration: "4 weeks",
      students: 543,
      rating: 4.8,
      description: "Master business English and professional communication",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-10",
    },
    {
      id: 11,
      title: "Past Simple Tense",
      level: "B1",
      duration: "4 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-11",
    },
    {
      id: 12,
      title: "Present Perfect",
      level: "B1",
      duration: "5 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-12",
    },
    {
      id: 13,
      title: "Future Tenses",
      level: "B1",
      duration: "5 weeks",
      students: 987,
      rating: 4.7,
      description: "Improve your speaking and listening skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-13",
    },
    {
      id: 14,
      title: "Modal Verbs",
      level: "B2",
      duration: "8 weeks",
      students: 756,
      rating: 4.9,
      description: "Professional writing and communication skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-14",
    },
    {
      id: 15,
      title: "Comparatives and Superlatives",
      level: "B2",
      duration: "8 weeks",
      students: 543,
      rating: 4.8,
      description: "Master business English and professional communication",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-15",
    },
    {
      id: 16,
      title: "Advanced Grammar Structures",
      level: "C1",
      duration: "10 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-16",
    },
    {
      id: 17,
      title: "Business English",
      level: "C1",
      duration: "6 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master basic English grammar and sentence structure",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-17",
    },
    {
      id: 18,
      title: "Academic Writing",
      level: "C1",
      duration: "8 weeks",
      students: 987,
      rating: 4.7,
      description: "Improve your speaking and listening skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-18",
    },
    {
      id: 19,
      title: "Idioms and Expressions",
      level: "C2",
      duration: "10 weeks",
      students: 756,
      rating: 4.9,
      description: "Professional writing and communication skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-19",
    },
    {
      id: 20,
      title: "Literature and Culture",
      level: "C1",
      duration: "12 weeks",
      students: 543,
      rating: 4.8,
      description: "Master business English and professional communication",
      image: "/placeholder.svg?height=200&width=400",
      link: "/english-beginner/lesson-20",
    },
  ],
  french: [
    {
      id: 21,
      title: "French for Beginners",
      level: "A2",
      duration: "6 weeks",
      students: 892,
      rating: 4.6,
      description: "Start your French learning journey",
      image: "/placeholder.svg?height=200&width=400",
      link: "/french/beginners",
    },
    {
      id: 22,
      title: "Intermediate French",
      level: "B1",
      duration: "8 weeks",
      students: 654,
      rating: 4.7,
      description: "Build on your French foundation",
      image: "/placeholder.svg?height=200&width=400",
      link: "/french/intermediate",
    },
    {
      id: 23,
      title: "Advanced French Conversation",
      level: "B2",
      duration: "10 weeks",
      students: 432,
      rating: 4.8,
      description: "Speak French fluently and confidently",
      image: "/placeholder.svg?height=200&width=400",
      link: "/french/advanced",
    },
    {
      id: 24,
      title: "French Literature and Culture",
      level: "C1",
      duration: "12 weeks",
      students: 321,
      rating: 4.9,
      description: "Deep dive into French culture and literature",
      image: "/placeholder.svg?height=200&width=400",
      link: "/french/culture",
    },
  ],
  italian: [
    {
      id: 25,
      title: "Italian Basics",
      level: "A2",
      duration: "6 weeks",
      students: 765,
      rating: 4.7,
      description: "Learn essential Italian phrases and grammar",
      image: "/placeholder.svg?height=200&width=400",
      link: "/italian/basics",
    },
    {
      id: 26,
      title: "Conversational Italian",
      level: "B1",
      duration: "8 weeks",
      students: 543,
      rating: 4.6,
      description: "Practice everyday Italian conversations",
      image: "/placeholder.svg?height=200&width=400",
      link: "/italian/conversational",
    },
    {
      id: 27,
      title: "Italian for Travel",
      level: "B2",
      duration: "10 weeks",
      students: 432,
      rating: 4.8,
      description: "Navigate Italy like a local",
      image: "/placeholder.svg?height=200&width=400",
      link: "/italian/travel",
    },
    {
      id: 28,
      title: "Advanced Italian",
      level: "C1",
      duration: "12 weeks",
      students: 234,
      rating: 4.9,
      description: "Master complex Italian grammar and expressions",
      image: "/placeholder.svg?height=200&width=400",
      link: "/italian/advanced",
    },
  ],
  spanish: [
    {
      id: 29,
      title: "Spanish Fundamentals",
      level: "A2",
      duration: "6 weeks",
      students: 1432,
      rating: 4.8,
      description: "Start learning Spanish from scratch",
      image: "/placeholder.svg?height=200&width=400",
      link: "/spanish/fundamentals",
    },
    {
      id: 30,
      title: "Spanish Conversation",
      level: "B1",
      duration: "8 weeks",
      students: 1098,
      rating: 4.7,
      description: "Improve your Spanish speaking skills",
      image: "/placeholder.svg?height=200&width=400",
      link: "/spanish/conversation",
    },
    {
      id: 31,
      title: "Advanced Spanish Grammar",
      level: "B2",
      duration: "10 weeks",
      students: 876,
      rating: 4.9,
      description: "Master complex Spanish structures",
      image: "/placeholder.svg?height=200&width=400",
      link: "/spanish/grammar",
    },
    {
      id: 32,
      title: "Spanish for Professionals",
      level: "C1",
      duration: "12 weeks",
      students: 543,
      rating: 4.8,
      description: "Business Spanish and professional communication",
      image: "/placeholder.svg?height=200&width=400",
      link: "/spanish/professional",
    },
  ],
  html: [
    {
      id: 33,
      title: "HTML Basics",
      level: "Beginner",
      duration: "4 weeks",
      students: 2345,
      rating: 4.9,
      description: "Learn the fundamentals of HTML",
      image: "/placeholder.svg?height=200&width=400",
      link: "/html/basics",
    },
    {
      id: 34,
      title: "HTML & CSS Integration",
      level: "Intermediate",
      duration: "6 weeks",
      students: 1876,
      rating: 4.8,
      description: "Build beautiful web pages",
      image: "/placeholder.svg?height=200&width=400",
      link: "/html/css-integration",
    },
    {
      id: 35,
      title: "Advanced HTML5",
      level: "Master",
      duration: "8 weeks",
      students: 987,
      rating: 4.9,
      description: "Master modern HTML5 features",
      image: "/placeholder.svg?height=200&width=400",
      link: "/html/advanced",
    },
  ],
  css: [
    {
      id: 36,
      title: "CSS Basics",
      level: "Beginner",
      duration: "4 weeks",
      students: 1567,
      rating: 4.8,
      description: "Learn the fundamentals of CSS",
      image: "/placeholder.svg?height=200&width=400",
      link: "/css/basics",
    },
    {
      id: 37,
      title: "CSS Flexbox and Grid",
      level: "Intermediate",
      duration: "6 weeks",
      students: 1234,
      rating: 4.9,
      description: "Master layout techniques with Flexbox and Grid",
      image: "/placeholder.svg?height=200&width=400",
      link: "/css/layout",
    },
    {
      id: 38,
      title: "Advanced CSS Animations",
      level: "Master",
      duration: "8 weeks",
      students: 876,
      rating: 4.9,
      description: "Create stunning animations with CSS",
      image: "/placeholder.svg?height=200&width=400",
      link: "/css/animations",
    },
  ],
  cpp: [
    {
      id: 39,
      title: "C++ Programming Basics",
      level: "Beginner",
      duration: "8 weeks",
      students: 1654,
      rating: 4.7,
      description: "Introduction to C++ programming",
      image: "/placeholder.svg?height=200&width=400",
      link: "/cpp/basics",
    },
    {
      id: 40,
      title: "Object-Oriented C++",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1234,
      rating: 4.8,
      description: "Master OOP concepts in C++",
      image: "/placeholder.svg?height=200&width=400",
      link: "/cpp/oop",
    },
    {
      id: 41,
      title: "Advanced C++ and STL",
      level: "Master",
      duration: "12 weeks",
      students: 765,
      rating: 4.9,
      description: "Advanced C++ techniques and Standard Template Library",
      image: "/placeholder.svg?height=200&width=400",
      link: "/cpp/advanced",
    },
  ],
  java: [
    {
      id: 42,
      title: "Java Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      students: 2987,
      rating: 4.8,
      description: "Start your Java programming journey",
      image: "/placeholder.svg?height=200&width=400",
      link: "/java/fundamentals",
    },
    {
      id: 43,
      title: "Java Object-Oriented Programming",
      level: "Intermediate",
      duration: "10 weeks",
      students: 2345,
      rating: 4.9,
      description: "Master Java OOP principles",
      image: "/placeholder.svg?height=200&width=400",
      link: "/java/oop",
    },
    {
      id: 44,
      title: "Advanced Java Development",
      level: "Master",
      duration: "12 weeks",
      students: 1543,
      rating: 4.9,
      description: "Enterprise Java and advanced frameworks",
      image: "/placeholder.svg?height=200&width=400",
      link: "/java/advanced",
    },
  ],
  csharp: [
    {
      id: 45,
      title: "C# Programming Basics",
      level: "Beginner",
      duration: "8 weeks",
      students: 1876,
      rating: 4.7,
      description: "Learn C# from scratch",
      image: "/placeholder.svg?height=200&width=400",
      link: "/csharp/basics",
    },
    {
      id: 46,
      title: "C# and .NET Framework",
      level: "Intermediate",
      duration: "10 weeks",
      students: 1432,
      rating: 4.8,
      description: "Build applications with .NET",
      image: "/placeholder.svg?height=200&width=400",
      link: "/csharp/dotnet",
    },
    {
      id: 47,
      title: "Advanced C# Development",
      level: "Master",
      duration: "12 weeks",
      students: 987,
      rating: 4.9,
      description: "Master C# and enterprise development",
      image: "/placeholder.svg?height=200&width=400",
      link: "/csharp/advanced",
    },
  ],
  python: [
    {
      id: 48,
      title: "Python Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      students: 3456,
      rating: 4.9,
      description: "Learn Python from scratch",
      image: "/placeholder.svg?height=200&width=400",
      link: "/python/fundamentals",
    },
    {
      id: 49,
      title: "Python Data Structures",
      level: "Intermediate",
      duration: "10 weeks",
      students: 2543,
      rating: 4.8,
      description: "Master Python data structures",
      image: "/placeholder.svg?height=200&width=400",
      link: "/python/datastructures",
    },
    {
      id: 50,
      title: "Advanced Python Programming",
      level: "Master",
      duration: "12 weeks",
      students: 1876,
      rating: 4.9,
      description: "Expert-level Python techniques",
      image: "/placeholder.svg?height=200&width=400",
      link: "/python/advanced",
    },
  ],
  react: [
    {
      id: 51,
      title: "React Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      students: 4123,
      rating: 4.9,
      description: "Learn React from scratch",
      image: "/placeholder.svg?height=200&width=400",
      link: "/react/fundamentals",
    },
    {
      id: 52,
      title: "Advanced React Patterns",
      level: "Intermediate",
      duration: "10 weeks",
      students: 3245,
      rating: 4.8,
      description: "Master React hooks and patterns",
      image: "/placeholder.svg?height=200&width=400",
      link: "/react/advanced",
    },
    {
      id: 53,
      title: "React Performance & Optimization",
      level: "Master",
      duration: "12 weeks",
      students: 2134,
      rating: 4.9,
      description: "Expert-level React development",
      image: "/placeholder.svg?height=200&width=400",
      link: "/react/optimization",
    },
  ],
  javascript: [
    {
      id: 54,
      title: "JavaScript Fundamentals",
      level: "Beginner",
      duration: "8 weeks",
      students: 5234,
      rating: 4.9,
      description: "Learn JavaScript from scratch - variables, functions, and control flow",
      image: "/javascript-code-fundamentals.jpg",
      link: "/javascript-course",
    },
    {
      id: 55,
      title: "JavaScript Advanced Concepts",
      level: "Intermediate",
      duration: "10 weeks",
      students: 3876,
      rating: 4.8,
      description: "Master closures, async/await, and modern ES6+ features",
      image: "/advanced-javascript-concepts.jpg",
      link: "/javascript-course",
    },
    {
      id: 56,
      title: "JavaScript DOM Mastery",
      level: "Master",
      duration: "12 weeks",
      students: 2543,
      rating: 4.9,
      description: "Expert-level DOM manipulation and interactive web development",
      image: "/javascript-dom-manipulation.jpg",
      link: "/javascript-course",
    },
  ],
}

function CoursesContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "english", name: "English" },
    { id: "french", name: "French" },
    { id: "italian", name: "Italian" },
    { id: "spanish", name: "Spanish" },
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "javascript", name: "JavaScript" },
    { id: "cpp", name: "C++" },
    { id: "java", name: "Java" },
    { id: "csharp", name: "C#" },
    { id: "python", name: "Python" },
    { id: "react", name: "React" },
  ]

  const getAllCourses = () => {
    return Object.values(coursesData).flat()
  }

  const getFilteredCourses = () => {
    let courses =
      selectedCategory === "all" ? getAllCourses() : coursesData[selectedCategory as keyof typeof coursesData] || []

    if (searchTerm) {
      courses = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return courses
  }

  const filteredCourses = getFilteredCourses()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Explore Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Master languages and programming skills with expert-led courses
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-secondary text-white"
                    : "bg-white border border-border text-slate-700 hover:border-secondary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-48 w-full bg-muted">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white bg-secondary px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>
                <Link
                  href={course.link}
                  className="block w-full text-center bg-primary text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity mt-auto"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="mx-auto text-muted-foreground mb-4" size={64} />
            <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoursesContent />
    </Suspense>
  )
}
