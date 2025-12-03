"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock, Building2, Copy, Check } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function BankTransferPayment() {
  const [accountHolder, setAccountHolder] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [routingNumber, setRoutingNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const bankDetails = {
    accountName: "Learning Platform Inc.",
    accountNumber: "1234567890",
    routingNumber: "021000021",
    swift: "BOFAUS3N",
    reference: "COURSE-2024-" + Math.random().toString(36).substring(7).toUpperCase(),
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    console.log("[v0] Processing bank transfer payment (Demo Mode)")

    const supabase = createClient()

    setTimeout(async () => {
      await supabase.auth.updateUser({
        data: { has_paid: true },
      })

      setIsProcessing(false)
      localStorage.setItem("course_payment_completed", "true")
      window.dispatchEvent(new Event("storage"))
      alert("Bank transfer confirmed! You now have access to all courses.")
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-4 bg-chart-2/10 border-chart-2/20">
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-chart-2 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-card-foreground mb-2">Bank Transfer Instructions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Transfer funds directly from your bank account. Please include the reference number in your transfer.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-background rounded">
                <div>
                  <span className="text-muted-foreground">Account Name:</span>
                  <span className="ml-2 font-mono font-medium">{bankDetails.accountName}</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(bankDetails.accountName, "accountName")}
                  className="h-8"
                >
                  {copiedField === "accountName" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex justify-between items-center p-2 bg-background rounded">
                <div>
                  <span className="text-muted-foreground">Account Number:</span>
                  <span className="ml-2 font-mono font-medium">{bankDetails.accountNumber}</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "accountNumber")}
                  className="h-8"
                >
                  {copiedField === "accountNumber" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex justify-between items-center p-2 bg-background rounded">
                <div>
                  <span className="text-muted-foreground">Routing Number:</span>
                  <span className="ml-2 font-mono font-medium">{bankDetails.routingNumber}</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(bankDetails.routingNumber, "routingNumber")}
                  className="h-8"
                >
                  {copiedField === "routingNumber" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex justify-between items-center p-2 bg-background rounded">
                <div>
                  <span className="text-muted-foreground">SWIFT Code:</span>
                  <span className="ml-2 font-mono font-medium">{bankDetails.swift}</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(bankDetails.swift, "swift")}
                  className="h-8"
                >
                  {copiedField === "swift" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <div className="flex justify-between items-center p-2 bg-chart-1/10 border border-chart-1/20 rounded">
                <div>
                  <span className="text-muted-foreground font-semibold">Reference:</span>
                  <span className="ml-2 font-mono font-bold text-chart-1">{bankDetails.reference}</span>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(bankDetails.reference, "reference")}
                  className="h-8"
                >
                  {copiedField === "reference" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="font-semibold text-card-foreground">Your Bank Account Information</h3>

        <div>
          <Label htmlFor="accountHolder" className="text-card-foreground">
            Account Holder Name
          </Label>
          <Input
            id="accountHolder"
            type="text"
            placeholder="John Doe"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            className="mt-1.5 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>

        <div>
          <Label htmlFor="bankName" className="text-card-foreground">
            Bank Name
          </Label>
          <Input
            id="bankName"
            type="text"
            placeholder="Bank of America"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="mt-1.5 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="accountNumber" className="text-card-foreground">
              Account Number
            </Label>
            <Input
              id="accountNumber"
              type="text"
              placeholder="1234567890"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
              className="mt-1.5 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
          </div>
          <div>
            <Label htmlFor="routingNumber" className="text-card-foreground">
              Routing Number
            </Label>
            <Input
              id="routingNumber"
              type="text"
              placeholder="021000021"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value.replace(/\D/g, "").substring(0, 9))}
              maxLength={9}
              className="mt-1.5 bg-input border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isProcessing}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Confirm Transfer
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}
