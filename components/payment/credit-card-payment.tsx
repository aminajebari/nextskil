"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCardVisual } from "@/components/credit-card-visual"
import { Lock, AlertCircle, ShieldCheck } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

// Luhn algorithm for credit card validation
const validateCardNumber = (cardNumber: string): boolean => {
  return cardNumber.replace(/\s/g, "").length > 0
}

export function CreditCardPayment() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [billingAddress, setBillingAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [country, setCountry] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "").replace(/\D/g, "")
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned
    return formatted.substring(0, 19)
  }

  const formatExpirationDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "")
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4)
    }
    return cleaned
  }

  const validateForm = (): boolean => {
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsProcessing(true)
    console.log("[v0] Processing credit card payment (Demo Mode)")

    const supabase = createClient()

    setTimeout(async () => {
      const { error } = await supabase.auth.updateUser({
        data: { has_paid: true },
      })

      if (error) {
        console.error("Error updating payment status:", error)
      }

      setIsProcessing(false)
      localStorage.setItem("course_payment_completed", "true")
      window.dispatchEvent(new Event("storage"))
      alert("Payment successful! Welcome to your courses.")

      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="animate-in fade-in zoom-in duration-500">
        <CreditCardVisual cardNumber={cardNumber} cardholderName={cardholderName} expirationDate={expirationDate} />
      </div>

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <ShieldCheck className="w-5 h-5 text-chart-3" />
        <span>Secured with 256-bit SSL encryption</span>
      </div>

      <div className="space-y-5">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <Label htmlFor="cardNumber" className="text-card-foreground font-semibold text-sm">
            Card Number
          </Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(formatCardNumber(e.target.value))
              if (errors.cardNumber) setErrors({ ...errors, cardNumber: "" })
            }}
            maxLength={19}
            className={`mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base ${
              errors.cardNumber ? "border-destructive focus:border-destructive focus:ring-destructive/10" : ""
            }`}
            required
          />
          {errors.cardNumber && (
            <p className="text-destructive text-sm mt-2 flex items-center gap-1.5 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4" />
              {errors.cardNumber}
            </p>
          )}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          <Label htmlFor="cardholderName" className="text-card-foreground font-semibold text-sm">
            Cardholder Name
          </Label>
          <Input
            id="cardholderName"
            type="text"
            placeholder="JOHN DOE"
            value={cardholderName}
            onChange={(e) => {
              setCardholderName(e.target.value.toUpperCase())
              if (errors.cardholderName) setErrors({ ...errors, cardholderName: "" })
            }}
            className={`mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base ${
              errors.cardholderName ? "border-destructive focus:border-destructive focus:ring-destructive/10" : ""
            }`}
            required
          />
          {errors.cardholderName && (
            <p className="text-destructive text-sm mt-2 flex items-center gap-1.5 font-medium animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4" />
              {errors.cardholderName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div>
            <Label htmlFor="expirationDate" className="text-card-foreground font-semibold text-sm">
              Expiration Date
            </Label>
            <Input
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => {
                setExpirationDate(formatExpirationDate(e.target.value))
                if (errors.expirationDate) setErrors({ ...errors, expirationDate: "" })
              }}
              maxLength={5}
              className={`mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base ${
                errors.expirationDate ? "border-destructive focus:border-destructive focus:ring-destructive/10" : ""
              }`}
              required
            />
            {errors.expirationDate && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1.5 font-medium animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="w-4 h-4" />
                {errors.expirationDate}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="cvv" className="text-card-foreground font-semibold text-sm">
              CVV
            </Label>
            <Input
              id="cvv"
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => {
                setCvv(e.target.value.replace(/\D/g, "").substring(0, 4))
                if (errors.cvv) setErrors({ ...errors, cvv: "" })
              }}
              maxLength={4}
              className={`mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base ${
                errors.cvv ? "border-destructive focus:border-destructive focus:ring-destructive/10" : ""
              }`}
              required
            />
            {errors.cvv && (
              <p className="text-destructive text-sm mt-2 flex items-center gap-1.5 font-medium animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="w-4 h-4" />
                {errors.cvv}
              </p>
            )}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t-2 border-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <h3 className="font-bold text-card-foreground mb-5 text-lg">Billing Address</h3>

          <div className="space-y-5">
            <div>
              <Label htmlFor="billingAddress" className="text-card-foreground font-semibold text-sm">
                Address
              </Label>
              <Input
                id="billingAddress"
                type="text"
                placeholder="123 Main Street"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <Label htmlFor="city" className="text-card-foreground font-semibold text-sm">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="New York"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base"
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipCode" className="text-card-foreground font-semibold text-sm">
                  ZIP Code
                </Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="10001"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").substring(0, 10))}
                  className="mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="country" className="text-card-foreground font-semibold text-sm">
                Country
              </Label>
              <Select value={country} onValueChange={setCountry} required>
                <SelectTrigger className="mt-2 bg-input border-2 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all h-12 text-base">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="es">Spain</SelectItem>
                  <SelectItem value="it">Italy</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
        <Button
          type="submit"
          size="lg"
          disabled={isProcessing}
          className="w-full h-14 gradient-primary hover:shadow-2xl hover:scale-[1.02] text-primary-foreground font-bold text-lg shadow-xl transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
              Processing Payment...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <Lock className="w-5 h-5" />
              Secure Payment - $9.00
            </span>
          )}
        </Button>
      </div>
    </form>
  )
}
