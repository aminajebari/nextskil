"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CircleDollarSign, Mail, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function PayPalPayment() {
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (email !== confirmEmail) {
      newErrors.confirmEmail = "Email addresses do not match"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsProcessing(true)
      console.log("[v0] Processing PayPal payment (Demo Mode)")

      const supabase = createClient()

      setTimeout(async () => {
        await supabase.auth.updateUser({
          data: { has_paid: true },
        })

        setIsProcessing(false)
        localStorage.setItem("course_payment_completed", "true")
        window.dispatchEvent(new Event("storage"))
        alert("Payment Successful! Redirecting you to your courses...")

        window.location.href = "/dashboard"
      }, 1500)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-4 bg-chart-4/10 border-chart-4/20">
        <div className="flex items-start gap-3">
          <CircleDollarSign className="w-5 h-5 text-chart-4 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-card-foreground mb-2">Pay with PayPal</h3>
            <p className="text-sm text-muted-foreground">
              You will be redirected to PayPal to complete your purchase securely. No credit card details needed.
            </p>
          </div>
        </div>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-card-foreground">
            PayPal Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors({ ...errors, email: "" })
              }}
              className={`mt-1.5 pl-10 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                errors.email ? "border-destructive" : ""
              }`}
              required
            />
          </div>
          {errors.email && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="confirmEmail" className="text-card-foreground">
            Confirm Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="confirmEmail"
              type="email"
              placeholder="your.email@example.com"
              value={confirmEmail}
              onChange={(e) => {
                setConfirmEmail(e.target.value)
                if (errors.confirmEmail) setErrors({ ...errors, confirmEmail: "" })
              }}
              className={`mt-1.5 pl-10 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${
                errors.confirmEmail ? "border-destructive" : ""
              }`}
              required
            />
          </div>
          {errors.confirmEmail && (
            <p className="text-destructive text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.confirmEmail}
            </p>
          )}
        </div>

        <Card className="p-4 bg-muted/50">
          <h4 className="font-medium text-sm text-card-foreground mb-2">What happens next?</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-chart-4 font-bold">1.</span>
              <span>You'll be redirected to PayPal's secure checkout</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-4 font-bold">2.</span>
              <span>Log in to your PayPal account or pay as a guest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-4 font-bold">3.</span>
              <span>Complete the payment and return to get instant access</span>
            </li>
          </ul>
        </Card>

        <Button
          type="submit"
          size="lg"
          disabled={isProcessing}
          className="w-full bg-chart-4 hover:bg-chart-4/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Redirecting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5" />
              Continue to PayPal
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}
