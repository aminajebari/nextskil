"use client"

import Link from "next/link"

export default function GermanCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-3xl font-bold">
            Next<span className="text-secondary">Skill</span>
          </Link>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Lerne Deutsch mit NextSkill</h1>
          <p className="text-xl text-slate-600 mb-12">Wahle dein Niveau, um deine Lernreise zu beginnen</p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Wahle Dein Niveau</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Anfanger</h3>
                <p className="text-slate-600 text-center mb-6">Fur Einsteiger ohne Vorkenntnisse</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Fortschritt</span>
                    <span className="text-sm font-semibold text-green-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Grundlegende Begrussungen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Wesentlicher Wortschatz
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Einfache Grammatik
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> 15 interaktive Lektionen
                  </li>
                </ul>
                <Link
                  href="/german-beginner"
                  className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Anfanger starten
                </Link>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🚀</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Mittelstufe</h3>
                <p className="text-slate-600 text-center mb-6">Fur Lernende mit Grundkenntnissen</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Fortschritt</span>
                    <span className="text-sm font-semibold text-blue-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Alltagsgesprache
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Vergangenheitsformen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Erweiterter Wortschatz
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> 20 umfassende Lektionen
                  </li>
                </ul>
                <Link
                  href="/german-intermediate"
                  className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Mittelstufe starten
                </Link>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Fortgeschritten</h3>
                <p className="text-slate-600 text-center mb-6">Zur Beherrschung der Sprache</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Fortschritt</span>
                    <span className="text-sm font-semibold text-purple-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Schriftlicher Ausdruck
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Geschaftsdeutsch
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Kultur und Literatur
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> 25 Expertenlektionen
                  </li>
                </ul>
                <Link
                  href="/german-advanced"
                  className="block w-full text-center bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Fortgeschritten starten
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white text-center py-8">
        <p>© 2025 NextSkill. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  )
}
