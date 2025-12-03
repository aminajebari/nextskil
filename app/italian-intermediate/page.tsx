"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock } from "lucide-react"
import { SubscriptionGate } from "@/components/subscription-gate"

const lessonsData = [
  {
    id: 1,
    title: "Passato Prossimo",
    description: "Impara a parlare di eventi e azioni passate.",
    duration: "20 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Presente Perfetto",
    description: "Padroneggia il presente perfetto per le esperienze di vita.",
    duration: "25 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Tempi Futuri",
    description: "Esprimi piani e previsioni future.",
    duration: "22 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Verbi Modali",
    description: "Usa potere, dovere, volere e altri modali.",
    duration: "18 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Comparativi e Superlativi",
    description: "Confronta le cose e descrivi gli estremi.",
    duration: "20 min",
    difficulty: "medium",
    completed: false,
    locked: false,
    progress: 0,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function ItalianIntermediatePage() {
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
          <Link href="/italian-course" className="inline-flex items-center text-foreground hover:text-primary transition-colors mb-4"><ArrowLeft className="mr-2" size={20} />Torna al Corso di Italiano</Link>
          <div className="text-foreground">
            <div className="text-sm mb-2 text-muted-foreground"><Link href="/" className="hover:text-primary transition-colors">Home</Link>{" > "}<Link href="/italian-course" className="hover:text-primary transition-colors">Italiano</Link>{" > "}<span>Intermedio</span></div>
            <h1 className="text-4xl font-bold mb-2">Livello Intermedio - Italiano</h1>
            <p className="text-muted-foreground">Sviluppa le tue basi con grammatica e vocabolario intermedi</p>
            <div className="mt-6 bg-muted rounded-xl p-6"><div className="flex justify-between items-center mb-3"><span className="font-semibold">Progresso Globale: {progress}%</span><span className="text-muted-foreground">{completedLessons}/{totalLessons} lezioni completate</span></div><div className="w-full h-3 bg-border rounded-full overflow-hidden"><div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} /></div></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 mb-8 bg-card border border-border rounded-lg p-1 w-fit"><button onClick={() => setFilter("all")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "all" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Tutti</button><button onClick={() => setFilter("completed")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "completed" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>Completati</button><button onClick={() => setFilter("pending")} className={`px-4 py-2 rounded-md font-medium transition-colors ${filter === "pending" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>In attesa</button></div>
        <SubscriptionGate title="Sblocca il Corso Intermedio di Italiano" description="Iscriviti per accedere a tutte le lezioni e ai materiali di pratica.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredLessons.map((lesson) => (<div key={lesson.id} className={`bg-card border border-border rounded-xl relative overflow-hidden transition-all hover:shadow-lg flex flex-col ${lesson.completed ? "border-l-4 border-l-green-500" : lesson.locked ? "border-l-4 border-l-gray-400 opacity-70" : "border-l-4 border-l-secondary"}`}><div className="relative h-48 w-full bg-muted"><Image src={lesson.image || "/placeholder.svg"} alt={lesson.title} fill className="object-cover" />{lesson.progress > 0 && !lesson.completed && (<div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold z-10">{lesson.progress}%</div>)}<div className="absolute top-4 left-4"><span className={`text-xs font-semibold px-3 py-1 rounded-full ${lesson.completed ? "bg-green-100 text-green-700" : lesson.locked ? "bg-gray-100 text-gray-600" : "bg-orange-100 text-orange-700"}`}>{lesson.completed ? "Completato" : lesson.locked ? "Bloccato" : "Disponibile"}</span></div></div><div className="p-6 flex-1 flex flex-col"><div className="flex items-start justify-between mb-4"><div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 ${lesson.completed ? "bg-green-500" : lesson.locked ? "bg-gray-400" : "bg-orange-500"}`}>{lesson.id}</div></div><h3 className="text-xl font-semibold text-foreground mb-2">{lesson.title}</h3><p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{lesson.description}</p><div className="flex items-center justify-between text-sm text-muted-foreground mb-4"><div className="flex items-center gap-1"><Clock size={16} /><span>{lesson.duration}</span></div><span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700">{lesson.difficulty}</span></div><div className="flex gap-2 mt-auto">{lesson.locked ? (<button disabled className="flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium curs... <truncated>
        </SubscriptionGate>
      </div>
    </div>
  )
}\
