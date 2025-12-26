"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

export default function VerifyEmailPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const email = searchParams.get("email")
  const [isLoading, setIsLoading] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleVerifyEmail = async () => {
    if (!email) {
      setMessage("Email not found. Please sign up again.")
      setVerificationStatus("error")
      return
    }

    setIsLoading(true)
    setVerificationStatus("idle")

    try {
      console.log("[v0] Verifying email:", email)

      const response = await fetch("/api/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify email")
      }

      console.log("[v0] Email verified successfully")
      setMessage("Email verified successfully! Redirecting to sign in...")
      setVerificationStatus("success")

      setTimeout(() => {
        router.push(`/auth/signin?email=${encodeURIComponent(email)}`)
      }, 2000)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred"
      console.error("[v0] Verification error:", errorMessage)
      setMessage(errorMessage)
      setVerificationStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/copilot-20251030-210926-20-281-29.png"
            alt="NextSkill Logo"
            width={200}
            height={60}
            className="mb-2"
          />
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              {verificationStatus === "success" ? (
                <CheckCircle className="w-16 h-16 text-green-500" />
              ) : verificationStatus === "error" ? (
                <AlertCircle className="w-16 h-16 text-destructive" />
              ) : (
                <Mail className="w-16 h-16 text-primary" />
              )}
            </div>
            <CardTitle className="text-2xl text-center">
              {verificationStatus === "success" ? "Email Verified!" : "Verify Your Email"}
            </CardTitle>
            <CardDescription className="text-center">
              {verificationStatus === "success"
                ? "Your account is ready to use"
                : `We'll verify ${email ? <strong>{email}</strong> : "your email address"}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {verificationStatus === "error" && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                  <p className="text-sm text-destructive">{message}</p>
                </div>
              )}

              {verificationStatus === "success" && (
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-800 dark:text-green-200">{message}</p>
                </div>
              )}

              {verificationStatus === "idle" && (
                <>
                  <p className="text-sm text-muted-foreground text-center">
                    Click the button below to verify your email instantly and start learning.
                  </p>
                  <Button onClick={handleVerifyEmail} className="w-full" disabled={isLoading || !email}>
                    {isLoading ? "Verifying..." : "Verify Email"}
                  </Button>

                  <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Don&apos;t see a verification email?</strong> Click the verify button above. If you have
                      issues, contact support.
                    </p>
                  </div>
                </>
              )}

              <Link href="/auth/signin" className="block">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
