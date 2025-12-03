import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copilot_20251030_210926%20%281%29-PjoIXfbJyQN87LarHXi7W4X746rYpP.png"
            alt="NextSkill Logo"
            width={200}
            height={60}
            className="mb-2"
          />
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Mail className="w-16 h-16 text-primary" />
            </div>
            <CardTitle className="text-2xl text-center">Verify Your Email</CardTitle>
            <CardDescription className="text-center">
              We&apos;ve sent a verification link to your email address
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Click the link in the email to verify your account and start learning. If you don&apos;t see the email,
                check your spam folder.
              </p>
              <Link href="/auth/signin" className="block">
                <Button className="w-full">Back to Sign In</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
