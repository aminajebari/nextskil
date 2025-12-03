"use client"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCardPayment } from "@/components/payment/credit-card-payment"
import { BankTransferPayment } from "@/components/payment/bank-transfer-payment"
import { PayPalPayment } from "@/components/payment/paypal-payment"
import { CourseDetails } from "@/components/payment/course-details"
import { CreditCard, Building2, CircleDollarSign, GraduationCap, Sparkles } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState("card")
  const router = useRouter()

  useEffect(() => {
    const checkPayment = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      // If already paid, redirect to dashboard
      if (user?.user_metadata?.has_paid === true) {
        router.push("/dashboard")
      }
    }
    checkPayment()
  }, [router])

  return (
    <div className="min-h-screen bg-background gradient-mesh py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full gradient-primary blur-3xl opacity-10 animate-pulse" />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full gradient-accent blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-500">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 shadow-lg animate-in zoom-in duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <GraduationCap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 text-balance flex items-center justify-center gap-2">
            Unlock Unlimited Learning
            <Sparkles className="w-6 h-6 text-accent" />
          </h1>
          <p className="text-lg text-muted-foreground">
            One subscription ($9/mo) • All courses included • Cancel anytime
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: "0.1s" }}>
              <Card className="p-8 bg-card border-2 border-border/50 shadow-2xl backdrop-blur-sm">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-8 h-14 p-1.5 bg-muted/50">
                    <TabsTrigger
                      value="card"
                      className="flex items-center gap-2 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="font-semibold">Credit Card</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="bank"
                      className="flex items-center gap-2 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all duration-300"
                    >
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">Bank Transfer</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="paypal"
                      className="flex items-center gap-2 data-[state=active]:gradient-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-lg transition-all duration-300"
                    >
                      <CircleDollarSign className="w-5 h-5" />
                      <span className="font-semibold">PayPal</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" key="card">
                    <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                      <CreditCardPayment />
                    </div>
                  </TabsContent>
                  <TabsContent value="bank" key="bank">
                    <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                      <BankTransferPayment />
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" key="paypal">
                    <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                      <PayPalPayment />
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="animate-in fade-in slide-in-from-right-4 duration-500" style={{ animationDelay: "0.2s" }}>
              <CourseDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
