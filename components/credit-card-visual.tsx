"use client"

import { CreditCard } from "lucide-react"

interface CreditCardVisualProps {
  cardNumber: string
  cardholderName: string
  expirationDate: string
  cvv?: string
}

export function CreditCardVisual({ cardNumber, cardholderName, expirationDate, cvv }: CreditCardVisualProps) {
  const displayCardNumber = cardNumber || "•••• •••• •••• ••••"
  const displayName = cardholderName || "CARDHOLDER NAME"
  const displayExpiry = expirationDate || "MM/YY"

  const getCardType = () => {
    const cleanNumber = cardNumber.replace(/\s/g, "")
    const firstDigit = cleanNumber[0]
    const firstTwo = cleanNumber.substring(0, 2)

    if (firstDigit === "4") return { type: "VISA", color: "from-blue-600 via-blue-500 to-blue-700" }
    if (["51", "52", "53", "54", "55"].includes(firstTwo))
      return { type: "MASTERCARD", color: "from-orange-600 via-red-500 to-pink-600" }
    if (firstTwo === "34" || firstTwo === "37") return { type: "AMEX", color: "from-teal-600 via-cyan-500 to-blue-600" }
    if (firstTwo === "60" || firstTwo === "65")
      return { type: "DISCOVER", color: "from-orange-700 via-orange-600 to-orange-500" }
    return { type: "CARD", color: "from-chart-1 via-chart-3 to-primary" }
  }

  const cardInfo = getCardType()

  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div
        className={`aspect-[1.586/1] bg-gradient-to-br ${cardInfo.color} rounded-2xl p-6 shadow-2xl text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl animate-in fade-in slide-in-from-bottom-4 duration-700`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-[shimmer_2s_infinite]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)`,
            }}
          ></div>
        </div>

        <div className="flex justify-between items-start relative z-10">
          <div className="w-12 h-10 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 rounded-md shadow-lg relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <div className="absolute inset-0.5 bg-gradient-to-br from-amber-200 to-amber-400 rounded opacity-70"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-100 to-amber-300 rounded grid grid-cols-3 gap-px p-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-amber-400/50 rounded-sm"></div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full animate-in fade-in slide-in-from-right-4 duration-700 delay-200 fill-mode-both">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wider">{cardInfo.type}</span>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="text-xl sm:text-2xl tracking-[0.3em] font-mono font-semibold drop-shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300 fill-mode-both">
            {displayCardNumber}
          </div>

          <div className="flex justify-between items-end gap-4">
            <div className="flex-1 min-w-0 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-400 fill-mode-both">
              <div className="text-[10px] text-white/80 uppercase tracking-wider mb-1 font-semibold">Cardholder</div>
              <div className="text-sm font-bold tracking-wide truncate uppercase drop-shadow">{displayName}</div>
            </div>

            <div className="text-right animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500 fill-mode-both">
              <div className="text-[10px] text-white/80 uppercase tracking-wider mb-1 font-semibold">Expires</div>
              <div className="text-sm font-bold tracking-wider drop-shadow">{displayExpiry}</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700 delay-600 fill-mode-both">
        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <span>Your payment is secure and encrypted</span>
      </div>
    </div>
  )
}
