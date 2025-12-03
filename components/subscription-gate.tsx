"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Lock, Sparkles } from "lucide-react"
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
  const [isAuthenticated, setIsAuthenticated] = useState(false) // Track auth state
  const router = useRouter()

  useEffect(() => {
    const checkStatus = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setIsAuthenticated(false)
        setIsUnlocked(false)
        setIsLoading(false)
        return
      }

      setIsAuthenticated(true)

      const localHasPaid = localStorage.getItem("course_payment_completed") === "true"
      const serverHasPaid = user?.user_metadata?.has_paid === true

      if (localHasPaid || serverHasPaid) {
        setIsUnlocked(true)
      }
      setIsLoading(false)
    }

    checkStatus()
  }, [])

  if (isLoading) {
    return null
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <div className="relative">
      <div className="filter blur-sm pointer-events-none select-none opacity-50 user-select-none" aria-hidden="true">
        {children}
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center border-2 border-primary/20 shadow-2xl bg-background/95 backdrop-blur-md animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-8 text-balance">{description}</p>

          <Link href={isAuthenticated ? "/payment" : "/auth/signup"} className="w-full block">
            <Button
              size="lg"
              className="w-full font-bold gap-2 text-lg h-12 shadow-lg hover:shadow-primary/25 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              {isAuthenticated ? "Complete Payment - $9/mo" : "Subscribe Now - $9/mo"}
            </Button>
          </Link>

          {!isAuthenticated && (
            <p className="text-xs text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          )}
        </Card>
      </div>
    </div>
  )
}
