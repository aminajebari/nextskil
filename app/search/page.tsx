"use client"

import { useSearchParams } from 'next/navigation'
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search } from 'lucide-react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Search Results</h1>
        <p className="text-muted-foreground">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      </div>

      {/* Search Results - Placeholder */}
      <div className="bg-white border border-border rounded-lg p-12 text-center">
        <Search className="mx-auto text-muted-foreground mb-4" size={48} />
        <h2 className="text-xl font-semibold mb-2">No results found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search terms or browse our course categories
        </p>
        <a
          href="/courses"
          className="inline-block mt-6 bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Browse All Courses
        </a>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Suspense fallback={<div className="py-12 text-center">Loading...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  )
}
