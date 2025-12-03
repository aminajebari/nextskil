"use client"

import Link from "next/link"

export default function FrenchCoursePage() {
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
          <h1 className="text-5xl font-bold text-slate-800 mb-4">Apprendre le Français avec NextSkill</h1>
          <p className="text-xl text-slate-600 mb-12">Choisissez votre niveau pour commencer votre apprentissage</p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Choisissez Votre Niveau</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Débutant</h3>
                <p className="text-slate-600 text-center mb-6">Pour ceux qui commencent de zéro</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Progrès</span>
                    <span className="text-sm font-semibold text-green-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Salutations de base
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Vocabulaire essentiel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Grammaire simple
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> 15 leçons interactives
                  </li>
                </ul>
                <Link
                  href="/french-beginner"
                  className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Commencer Débutant
                </Link>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🚀</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Intermédiaire</h3>
                <p className="text-slate-600 text-center mb-6">Pour ceux avec des connaissances de base</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Progrès</span>
                    <span className="text-sm font-semibold text-blue-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Conversations quotidiennes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Temps du passé
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Vocabulaire avancé
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> 20 leçons complètes
                  </li>
                </ul>
                <Link
                  href="/french-intermediate"
                  className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Commencer Intermédiaire
                </Link>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">Avancé</h3>
                <p className="text-slate-600 text-center mb-6">Pour maîtriser la langue</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Progrès</span>
                    <span className="text-sm font-semibold text-purple-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Expression écrite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Français des affaires
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> Culture et littérature
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> 25 leçons expertes
                  </li>
                </ul>
                <Link
                  href="/french-advanced"
                  className="block w-full text-center bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Commencer Avancé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white text-center py-8">
        <p>© 2025 NextSkill. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
