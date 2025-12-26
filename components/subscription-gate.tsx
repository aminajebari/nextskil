"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Lock, Sparkles, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface SubscriptionGateProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function SubscriptionGate({
  children,
  title = "Unlock Full Access",
  description = "Get unlimited access to all courses, certificates, and premium content for just $9/month.",
}: SubscriptionGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkStatus = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      console.log("[v0] SubscriptionGate - User check:", user ? "authenticated" : "not authenticated")

      if (!user) {
        setIsAuthenticated(false)
        setIsUnlocked(false)
        setIsLoading(false)
        return
      }

      setIsAuthenticated(true)

      const localHasPaid = localStorage.getItem("course_payment_completed") === "true"
      const serverHasPaid = user?.user_metadata?.has_paid === true

      console.log("[v0] SubscriptionGate - Payment status:", { localHasPaid, serverHasPaid })

      if (localHasPaid || serverHasPaid) {
        setIsUnlocked(true)
      }
      setIsLoading(false)
    }

    checkStatus()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center border-2 border-primary/20 shadow-2xl bg-card backdrop-blur-md animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            {isAuthenticated ? <Lock className="w-8 h-8 text-primary" /> : <LogIn className="w-8 h-8 text-primary" />}
          </div>

          <h3 className="text-2xl font-bold mb-3">{isAuthenticated ? title : "Sign In Required"}</h3>

          <p className="text-muted-foreground mb-8 text-balance">
            {isAuthenticated
              ? description
              : "Please sign in or create an account to access our courses and start your learning journey."}
          </p>

          {isAuthenticated ? (
            <Link href="/payment" className="w-full block">
              <Button
                size="lg"
                className="w-full font-bold gap-2 text-lg h-12 shadow-lg hover:shadow-primary/25 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Complete Payment - $9/mo
              </Button>
            </Link>
          ) : (
            <div className="space-y-3">
              <Link href="/auth/signup" className="w-full block">
                <Button
                  size="lg"
                  className="w-full font-bold gap-2 text-lg h-12 shadow-lg hover:shadow-primary/25 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Sign Up - Get Started
                </Button>
              </Link>
              <Link href="/auth/signin" className="w-full block">
                <Button size="lg" variant="outline" className="w-full font-bold gap-2 text-lg h-12 bg-transparent">
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Button>
              </Link>
            </div>
          )}

          {isAuthenticated ? (
            <p className="text-xs text-muted-foreground mt-4">Cancel anytime. 7-day money-back guarantee.</p>
          ) : (
            <p className="text-xs text-muted-foreground mt-4">
              New to NextSkill? Sign up to access all courses for just $9/month.
            </p>
          )}
        </Card>
      </div>
    )
  }

  return <>{children}</>
}
