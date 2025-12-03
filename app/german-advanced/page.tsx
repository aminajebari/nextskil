"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock } from "lucide-react"
import { SubscriptionGate } from "@/components/subscription-gate"

const lessonsData = [
  {
    id: 1,
    title: "Fortgeschrittene Grammatikstrukturen",
    description: "Meistern Sie komplexe Satzstrukturen und fortgeschrittene Grammatik.",
    duration: "30 min",
    difficulty: "hard",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Geschäftsdeutsch",
    description: "Professionelles Vokabular und Kommunikationsfähigkeiten.",
    duration: "35 min",
    difficulty: "hard",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Akademisches Schreiben",
    description: "Schreiben Sie Aufsätze, Berichte und akademische Artikel.",
    duration: "40 min",
    difficulty: "hard",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Redewendungen und Ausdrücke",
    description: "Lernen Sie gängige Redewendungen und umgangssprachliche Ausdrücke.",
    duration: "25 min",
    difficulty: "hard",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Literatur und Kultur",
    description: "Erkunden Sie deutsche Literatur und kulturelle Kontexte.",
    duration: "45 min",
    difficulty: "hard",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function GermanAdvancedPage() {
  const [lessons, setLessons] = useState(lessonsData)
  const [filter, setFilter] = useState("all")
  const completedLessons = lessons.filter((lesson) => lesson.completed).length
  const totalLessons = lessons.length
  const progress = Math.round((completedLessons / totalLessons) * 100)
  const filteredLessons = lessons.filter((lesson) => { if (filter === "completed") return lesson.completed; if (filter === "pending") return !lesson.completed && !lesson.locked; return true })

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/german-course" className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="mr-2" size={20} />Zurück zum Deutschkurs</Link>
          <div className="text-foreground">
            <div className="text-sm mb-2 text-muted-foreground"><Link href="/" className="hover:text-primary transition-colors">Startseite</Link>{" > "}<Link href="/german-course" className="hover:text-primary transition-colors">Deutsch</Link>{" > "}<span>Fortgeschritten</span></div>
            <h1 className="text-4xl font-bold mb-2">Fortgeschritten - Deutsch</h1>
            <p className="text-muted-foreground">Meistern Sie fortgeschrittenes Deutsch für beruflichen und akademischen Erfolg</p>
            <div className="mt-6 bg-muted rounded-xl p-6"><div className="flex justify-between items-center mb-3"><span className="font-semibold">Gesamtfortschritt: {progress}%</span><span className="text-muted-foreground">{completedLessons}/{totalLessons} Lektionen abgeschlossen</span></div><div className="w-full h-3 bg-border rounded-full overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} /></div></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 mb-8 bg-card border border-border rounded-lg p-1 w-fit"><button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "all" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Alle</button><button onClick={() => setFilter("completed")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "completed" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Abgeschlossen</button><button onClick={() => setFilter("pending")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "pending" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Ausstehend</button></div>
        <SubscriptionGate title="Deutschkurs Fortgeschritten freischalten" description="Abonnieren Sie, um Zugang zu allen fortgeschrittenen Lektionen zu erhalten.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredLessons.map((lesson) => (<div key={lesson.id} className={`bg-card border border-border rounded-xl relative overflow-hidden transition-all hover:shadow-lg flex flex-col ${lesson.completed ? "border-l-4 border-l-green-500" : lesson.locked ? "border-l-4 border-l-gray-400 opacity-70" : "border-l-4 border-l-secondary"}`}><div className="relative h-48 w-full bg-muted"><Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />{lesson.progress > 0 && !lesson.completed && (<div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10">{lesson.progress}%</div>)}<div className="absolute top-4 left-4"><span className={`text-xs font-semibold px-3 py-1 rounded-full ${lesson.completed ? "bg-green-100 text-green-700" : lesson.locked ? "bg-gray-100 text-gray-600" : "bg-orange-100 text-orange-700"}`}>{lesson.completed ? "Abgeschlossen" : lesson.locked ? "Gesperrt" : "Verfügbar"}</span></div></div><div className="p-6 flex-1 flex flex-col"><div className="flex items-start justify-between mb-4"><div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${lesson.completed ? "bg-green-500" : lesson.locked ? "bg-gray-400" : "bg-orange-500"}`}>{lesson.id}</div></div><h3 className="text-xl font-semibold text-foreground mb-2">{lesson.title}</h3><p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{lesson.description}</p><div className="flex items-center justify-between text-sm text-muted-foreground mb-4"><div className="flex items-center gap-1"><Clock size={16} /><span>{lesson.duration}</span></div><span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700">{lesson.difficulty}</span></div><div className="flex gap-2 mt-auto">{lesson.locked ? (<button disabled className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium cursor-not-allowed">Gesperrt</button>) : (<button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium">Starten</button>)}</div></div></div>))}
        </SubscriptionGate>
      </div>
    </div>
  )
}\
