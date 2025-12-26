"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Download, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CertificateProps {
  onClose: () => void
  progress: number
  preview?: boolean
}

export default function Certificate({ onClose, progress, preview = false }: CertificateProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const handleDownload = () => {
    alert("Certificate download functionality would be implemented here!")
  }

  return (
    <div className="min-h-screen bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full p-8 relative border-4 border-yellow-400/30">
        {preview && (
          <Badge className="absolute top-8 left-8 text-sm bg-yellow-500/20 text-yellow-700 border-yellow-500">
            Preview Mode
          </Badge>
        )}

        <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-4 right-4">
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center space-y-6 py-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Award className="h-12 w-12 text-yellow-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-yellow-600">Certificate of Completion</h1>
            <p className="text-muted-foreground">JavaScript Mastery Course</p>
          </div>

          <div className="py-8 space-y-4">
            <p className="text-lg">This certifies that</p>
            <div className="py-4 border-b-2 border-yellow-600 mx-auto max-w-md">
              <p className="text-3xl font-bold">{preview ? "Your Name Here" : "Course Participant"}</p>
            </div>
            <p className="text-lg">has successfully completed the</p>
            <p className="text-2xl font-semibold text-yellow-600">Complete JavaScript Development Training</p>
            <p className="text-muted-foreground">
              Demonstrating mastery of JavaScript fundamentals, ES6+ features, DOM manipulation, async programming,
              object-oriented programming, and modern web development practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 py-6 max-w-2xl mx-auto">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Completion Date</p>
              <p className="font-semibold">{preview ? "Upon Completion" : currentDate}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Course Progress</p>
              <p className="font-semibold">{preview ? "100%" : `${Math.round(progress)}%`} Completed</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Modules</p>
              <p className="font-semibold">8 Modules</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Final Exam</p>
              <p className="font-semibold text-success">{preview ? "Required" : "Passed"}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-6">
            {!preview && (
              <Button onClick={handleDownload} size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700">
                <Download className="h-4 w-4" />
                Download Certificate
              </Button>
            )}
            <Button onClick={onClose} variant={preview ? "default" : "outline"} size="lg">
              {preview ? "Continue Learning" : "Close"}
            </Button>
          </div>

          {preview && (
            <p className="text-sm text-muted-foreground mt-4">
              Complete all lessons and pass the final exam to unlock your certificate
            </p>
          )}
        </div>

        <div className="absolute inset-0 border-8 border-yellow-500/20 rounded-lg pointer-events-none" />
        <div className="absolute inset-2 border-2 border-yellow-500/10 rounded-lg pointer-events-none" />
      </Card>
    </div>
  )
}
