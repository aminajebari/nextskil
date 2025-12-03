import { redirect } from 'next/navigation'
import { createClient } from "@/lib/supabase/server"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookOpen, Award, TrendingUp, Clock, Calendar, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/signin")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  const userName = profile?.full_name || user.email?.split("@")[0] || "Student"
  const isStudent = profile?.is_student || false

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Welcome Back, {userName}!</h1>
              <p className="text-muted-foreground mt-1">Continue your learning journey</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Courses</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Award className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Certificates</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">0h</p>
                  <p className="text-sm text-muted-foreground">Learning Time</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <TrendingUp className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">0%</p>
                  <p className="text-sm text-muted-foreground">Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Continue Learning</h2>
              <div className="bg-white border border-border rounded-lg p-6 text-center">
                <BookOpen className="mx-auto text-muted-foreground mb-4" size={48} />
                <h3 className="text-lg font-semibold mb-2">No Active Courses</h3>
                <p className="text-muted-foreground mb-4">Start your learning journey by enrolling in a course</p>
                <a
                  href="/courses"
                  className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Browse Courses
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/courses"
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <BookOpen className="text-primary mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2">Explore Courses</h3>
                  <p className="text-sm text-muted-foreground">Browse our full course catalog</p>
                </Link>
                <Link
                  href="/certificates"
                  className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <Award className="text-secondary mb-3" size={32} />
                  <h3 className="font-semibold text-lg mb-2">View Certificates</h3>
                  <p className="text-sm text-muted-foreground">See all available certifications</p>
                </Link>
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Recommended For You</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Sample Course Cards */}
                {[
                  { title: "JavaScript Fundamentals", category: "Programming", duration: "8 hours", level: "Beginner" },
                  { title: "French for Beginners", category: "Language", duration: "12 hours", level: "Beginner" },
                ].map((course, idx) => (
                  <div key={idx} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20" />
                    <div className="p-4">
                      <span className="text-xs font-semibold text-secondary">{course.category}</span>
                      <h3 className="text-lg font-semibold mt-1 mb-2">{course.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{course.duration}</span>
                        <span>•</span>
                        <span>{course.level}</span>
                      </div>
                      <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
                {profile?.birth_date && (
                  <div>
                    <p className="text-muted-foreground">Birth Date</p>
                    <p className="font-medium">{new Date(profile.birth_date).toLocaleDateString()}</p>
                  </div>
                )}
                {profile?.gender && (
                  <div>
                    <p className="text-muted-foreground">Gender</p>
                    <p className="font-medium capitalize">{profile.gender}</p>
                  </div>
                )}
                {isStudent && profile?.school && (
                  <div>
                    <p className="text-muted-foreground">School</p>
                    <p className="font-medium">{profile.school}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Learning Goals */}
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">This Week's Goals</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Study 5 hours</p>
                    <div className="w-full bg-muted rounded-full h-2 mt-1">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-secondary" size={20} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Complete 2 lessons</p>
                    <div className="w-full bg-muted rounded-full h-2 mt-1">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "0%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
