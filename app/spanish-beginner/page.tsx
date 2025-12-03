"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Lock, PlayCircle } from "lucide-react"
import { SubscriptionGate } from "@/components/subscription-gate"

const lessonsData = [
  {
    id: 1,
    title: "Saludos básicos",
    description: "Aprende a decir hola, adiós y a presentarte en español.",
    duration: "10 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/people-greeting.jpg",
    link: "/spanish-beginner/lesson-1",
  },
  {
    id: 2,
    title: "Alfabeto y pronunciación",
    description: "Domina el alfabeto español y los sonidos básicos.",
    duration: "15 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/alphabet-letters.jpg",
    link: "/spanish-beginner/lesson-2",
  },
  {
    id: 3,
    title: "Números del 1 al 20",
    description: "Cuenta hasta 20 y usa los números en oraciones simples.",
    duration: "12 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/abstract-numbers.png",
    link: "/spanish-beginner/lesson-3",
  },
  {
    id: 4,
    title: "Colores",
    description: "Nombra y usa los colores básicos en español.",
    duration: "10 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/colors-palette.jpg",
    link: "/spanish-beginner/lesson-4",
  },
  {
    id: 5,
    title: "Animales",
    description: "Descubre el vocabulario de animales comunes.",
    duration: "15 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/diverse-animal-kingdom.png",
    link: "/spanish-beginner/lesson-5",
  },
  {
    id: 6,
    title: "Familia",
    description: "Aprende a hablar sobre los miembros de la familia.",
    duration: "18 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 60,
    image: "/diverse-family-portrait.png",
    link: "/spanish-beginner/lesson-6",
  },
  {
    id: 7,
    title: "Comida y bebidas",
    description: "Vocabulario esencial para pedir en restaurantes.",
    duration: "20 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 30,
    image: "/assorted-food-drinks.png",
    link: "/spanish-beginner/lesson-7",
  },
  {
    id: 8,
    title: "Días de la semana",
    description: "Aprende los días y habla sobre tu rutina.",
    duration: "12 min",
    difficulty: "easy",
    completed: false,
    locked: false,
    progress: 0,
    image: "/simple-monthly-calendar.png",
    link: "/spanish-beginner/lesson-8",
  },
  {
    id: 9,
    title: "Meses y estaciones",
    description: "Habla sobre fechas y períodos del año.",
    duration: "15 min",
    difficulty: "easy",
    completed: false,
    locked: false,
    progress: 0,
    image: "/seasons.jpg",
    link: "/spanish-beginner/lesson-9",
  },
  {
    id: 10,
    title: "Presente simple",
    description: "Domina los fundamentos de la conjugación española.",
    duration: "25 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/grammar-book.jpg",
    link: "/spanish-beginner/lesson-10",
  },
]

export default function SpanishBeginnerPage() {
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
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/spanish-course"
            className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Volver al Curso de Espanol
          </Link>
          <div className="text-foreground">
            <div className="text-sm mb-2 text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
              {" > "}
              <Link href="/spanish-course" className="hover:text-primary transition-colors">
                Espanol
              </Link>
              {" > "}
              <span>Principiante</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Nivel Principiante - Español</h1>
            <p className="text-muted-foreground">
              Aprende los fundamentos del español con nuestras lecciones interactivas
            </p>

            <div className="mt-6 bg-muted rounded-xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Progreso general: {progress}%</span>
                <span className="text-muted-foreground">
                  {completedLessons}/{totalLessons} lecciones completadas
                </span>
              </div>
              <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 mb-8 bg-card border border-border rounded-lg p-1 w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "all" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "completed" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Completados
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "pending" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Pendientes
          </button>
        </div>

        <SubscriptionGate
          title="Desbloquea el curso de español para principiantes"
          description="Suscríbete para acceder a todas las lecciones y materiales de práctica."
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
                      {lesson.completed ? "Completado" : lesson.locked ? "Bloqueado" : "En progreso"}
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
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        lesson.difficulty === "easy" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {lesson.difficulty === "easy" ? "Fácil" : "Medio"}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {lesson.locked ? (
                      <button
                        disabled
                        className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Lock size={16} />
                        Bloqueado
                      </button>
                    ) : lesson.completed ? (
                      <>
                        <Link href={lesson.link || `/spanish-beginner/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-muted text-foreground py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors">
                            Revisar
                          </button>
                        </Link>
                        <Link href={lesson.link || `/spanish-beginner/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Repetir
                          </button>
                        </Link>
                      </>
                    ) : (
                      <Link href={lesson.link || `/spanish-beginner/lesson-${lesson.id}`} className="flex-1">
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                          <PlayCircle size={16} />
                          {lesson.progress > 0 ? "Continuar" : "Comenzar"}
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
