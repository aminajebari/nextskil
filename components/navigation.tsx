"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, User, LogOut, ChevronRight, Globe, MessageCircle, LayoutDashboard, Newspaper, GraduationCap, Award, Receipt, History, FileText } from 'lucide-react'
import { createClient } from "@/lib/supabase/client"
import { useRouter } from 'next/navigation'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      
      if (user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        setProfile(profileData)
      }
    }
    
    fetchUserData()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchUserData()
      } else {
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setIsUserMenuOpen(false)
    router.push("/")
    router.refresh()
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setIsSearchOpen(false)
    }
  }

  const getUserInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }
    return user?.email?.[0]?.toUpperCase() || 'U'
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">Next</span>
              <span className="text-secondary">Skill</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-foreground hover:text-primary font-medium transition-colors">
              Courses
            </Link>
            <Link href="/certificates" className="text-foreground hover:text-primary font-medium transition-colors">
              Certificates
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary font-semibold border-2 border-primary">
                    {getUserInitials()}
                  </div>
                  <span className="font-medium text-foreground">
                    {profile?.full_name || user?.email?.split('@')[0] || 'User'}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-border z-50">
                      {/* User Info Header */}
                      <div className="p-4 border-b border-border bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-lg border-2 border-primary">
                            {getUserInitials()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground truncate">
                              {profile?.full_name || user?.email?.split('@')[0] || 'User'}
                            </p>
                            <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
                          </div>
                        </div>
                        <button
                          onClick={handleSignOut}
                          className="mt-3 w-full bg-accent hover:opacity-90 text-accent-foreground px-4 py-2 rounded-lg font-medium transition-opacity flex items-center justify-center gap-2"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>

                      {/* Dashboard Section */}
                      <div className="p-2">
                        <div className="px-3 py-2 flex items-center gap-2 text-foreground font-semibold">
                          <LayoutDashboard size={18} />
                          Dashboard
                        </div>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">My Learning</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                      </div>

                      {/* News Section */}
                      <div className="p-2 border-t border-border">
                        <div className="px-3 py-2 flex items-center gap-2 text-foreground font-semibold">
                          <Newspaper size={18} />
                          News
                        </div>
                        <Link
                          href="/news"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">For Learners</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                      </div>

                      {/* Profile Section */}
                      <div className="p-2 border-t border-border">
                        <div className="px-3 py-2 flex items-center gap-2 text-foreground font-semibold">
                          <User size={18} />
                          Profile
                        </div>
                        <Link
                          href="/profile/update"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">Update Profile</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                        <Link
                          href="/profile/badges"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">Badges & Certificates</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                        <Link
                          href="/profile/discounts"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">Discounts</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                        <Link
                          href="/profile/history"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">Learning History</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                        <Link
                          href="/profile/transcript"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="px-6 py-2 flex items-center justify-between hover:bg-muted rounded-md transition-colors group"
                        >
                          <span className="text-sm text-foreground">Transcript</span>
                          <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary" />
                        </Link>
                      </div>

                      {/* Language Section */}
                      <div className="p-2 border-t border-border">
                        <div className="px-3 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-foreground font-semibold">
                            <Globe size={18} />
                            Language
                          </div>
                          <span className="text-sm text-muted-foreground">English (English)</span>
                        </div>
                      </div>

                      {/* Support Section */}
                      <div className="p-2 border-t border-border">
                        <div className="px-3 py-2 flex items-center gap-2 text-foreground font-semibold">
                          <MessageCircle size={18} />
                          Support
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/signin" className="text-foreground hover:text-primary font-medium transition-colors">
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isSearchOpen && (
          <div className="py-4 border-t border-border">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses, languages, programming..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </form>

            <Link href="/" className="block text-foreground hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/courses" className="block text-foreground hover:text-primary font-medium transition-colors">
              Courses
            </Link>
            <Link
              href="/certificates"
              className="block text-foreground hover:text-primary font-medium transition-colors"
            >
              Certificates
            </Link>
            
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block text-foreground hover:text-primary font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left text-foreground hover:text-secondary font-medium transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="block text-foreground hover:text-primary font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
