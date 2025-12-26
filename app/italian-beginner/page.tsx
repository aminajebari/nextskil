"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Lock, PlayCircle } from "lucide-react"
import { SubscriptionGate } from "@/components/subscription-gate"

const lessonsData = [
  {
    id: 1,
    title: "Saluti di base",
    description: "Impara a dire ciao, arrivederci e a presentarti in italiano.",
    duration: "10 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/people-greeting.jpg",
    link: "/italian-beginner/lesson-1",
  },
  {
    id: 2,
    title: "Alfabeto e pronuncia",
    description: "Padroneggia l'alfabeto italiano e i suoni di base.",
    duration: "15 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/alphabet-letters.jpg",
    link: "/italian-beginner/lesson-2",
  },
  {
    id: 3,
    title: "Numeri da 1 a 20",
    description: "Conta fino a 20 e usa i numeri in frasi semplici.",
    duration: "12 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/abstract-numbers.png",
    link: "/italian-beginner/lesson-3",
  },
  {
    id: 4,
    title: "Colori",
    description: "Nomina e usa i colori di base in italiano.",
    duration: "10 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/colors-palette.jpg",
    link: "/italian-beginner/lesson-4",
  },
  {
    id: 5,
    title: "Animali",
    description: "Scopri il vocabolario degli animali comuni.",
    duration: "15 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/diverse-animal-kingdom.png",
    link: "/italian-beginner/lesson-5",
  },
  {
    id: 6,
    title: "Famiglia",
    description: "Impara a parlare dei membri della famiglia.",
    duration: "18 min",
    difficulty: "medium",
    completed: true,
    locked: false,
    progress: 100,
    image: "/diverse-family-portrait.png",
    link: "/italian-beginner/lesson-6",
  },
  {
    id: 7,
    title: "Cibo e bevande",
    description: "Vocabolario essenziale per ordinare al ristorante.",
    duration: "20 min",
    difficulty: "medium",
    completed: true,
    locked: false,
    progress: 100,
    image: "/assorted-food-drinks.png",
    link: "/italian-beginner/lesson-7",
  },
  {
    id: 8,
    title: "Giorni della settimana",
    description: "Impara i giorni e parla della tua routine.",
    duration: "12 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/simple-monthly-calendar.png",
    link: "/italian-beginner/lesson-8",
  },
  {
    id: 9,
    title: "Mesi e stagioni",
    description: "Parla delle date e dei periodi dell'anno.",
    duration: "15 min",
    difficulty: "easy",
    completed: true,
    locked: false,
    progress: 100,
    image: "/seasons.jpg",
    link: "/italian-beginner/lesson-9",
  },
  {
    id: 10,
    title: "Presente semplice",
    description: "Padroneggia le basi della coniugazione italiana.",
    duration: "25 min",
    difficulty: "medium",
    completed: true,
    locked: false,
    progress: 100,
    image: "/grammar-book.jpg",
    link: "/italian-beginner/lesson-10",
  },
]

export default function ItalianBeginnerPage() {
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
            href="/italian-course"
            className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Torna al Corso di Italiano
          </Link>
          <div className="text-foreground">
            <div className="text-sm mb-2 text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              {" > "}
              <Link href="/italian-course" className="hover:text-primary transition-colors">
                Italiano
              </Link>
              {" > "}
              <span>Principiante</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Livello Principiante - Italiano</h1>
            <p className="text-muted-foreground">Impara le basi dell'italiano con le nostre lezioni interattive</p>

            <div className="mt-6 bg-muted rounded-xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">Progresso complessivo: {progress}%</span>
                <span className="text-muted-foreground">
                  {completedLessons}/{totalLessons} lezioni completate
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
            Tutti
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "completed" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            Completati
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "pending" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
            }`}
          >
            In corso
          </button>
        </div>

        <SubscriptionGate
          title="Sblocca il corso di italiano per principianti"
          description="Iscriviti per accedere a tutte le lezioni e ai materiali di pratica."
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
                      {lesson.completed ? "Completato" : lesson.locked ? "Bloccato" : "In corso"}
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
                      {lesson.difficulty === "easy" ? "Facile" : "Medio"}
                    </span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {lesson.locked ? (
                      <button
                        disabled
                        className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Lock size={16} />
                        Bloccato
                      </button>
                    ) : lesson.completed ? (
                      <>
                        <Link href={lesson.link || `/italian-beginner/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-muted text-foreground py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors">
                            Rivedere
                          </button>
                        </Link>
                        <Link href={lesson.link || `/italian-beginner/lesson-${lesson.id}`} className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                            Ripetere
                          </button>
                        </Link>
                      </>
                    ) : (
                      <Link href={lesson.link || `/italian-beginner/lesson-${lesson.id}`} className="flex-1">
                        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                          <PlayCircle size={16} />
                          {lesson.progress > 0 ? "Continua" : "Inizia"}
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
