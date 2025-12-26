"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { checkEnrollmentAuth } from "@/app/actions/enrollment-actions"

interface EnrollButtonProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export function EnrollButton({ href, className, children = "Enroll Now" }: EnrollButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleEnrollClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await checkEnrollmentAuth()

      if (!result.isAuthenticated) {
        // Redirect to signin
        window.location.href = result.redirectTo || "/auth/signin"
        return
      }

      if (!result.hasPaid) {
        // Redirect to payment
        window.location.href = result.redirectTo || "/payment"
        return
      }

      // User is authenticated and paid - allow enrollment
      window.location.href = href
    } catch (error) {
      console.error("Enrollment check failed:", error)
      window.location.href = "/auth/signin"
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Link href={href} onClick={handleEnrollClick}>
      <Button disabled={isLoading} className={className}>
        {isLoading ? "Checking access..." : children}
      </Button>
    </Link>
  )
}
