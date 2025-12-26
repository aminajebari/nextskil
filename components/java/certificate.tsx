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

export default function JavaCertificate({ onClose, progress, preview = false }: CertificateProps) {
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
      <Card className="max-w-4xl w-full p-8 relative">
        {preview && (
          <Badge className="absolute top-8 left-8 text-sm bg-orange-600/20 text-orange-600 border-orange-600">
            Preview Mode
          </Badge>
        )}

        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 hover:bg-destructive/10"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="border-8 border-orange-200 dark:border-orange-900 rounded-2xl p-12 bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-orange-950">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Award className="h-20 w-20 text-orange-600" />
            </div>

            <div>
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">Certificate of Completion</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Java Programming Course</p>
            </div>

            <div className="my-8">
              <p className="text-4xl font-bold text-orange-600 mb-2">
                {preview ? "Your Name Here" : "Course Participant"}
              </p>
              <div className="h-1 bg-orange-300 w-64 mx-auto"></div>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-slate-700 dark:text-slate-300">has successfully completed the</p>
              <h2 className="text-3xl font-bold text-orange-600">Complete Java Programming Training</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Demonstrating mastery of Java fundamentals, OOP principles, collections framework, exception handling,
                and professional Java development
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 py-6 max-w-2xl mx-auto">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Completion Date</p>
                <p className="font-semibold">{preview ? "Upon Completion" : currentDate}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Course Progress</p>
                <p className="font-semibold">{preview ? "100%" : `${Math.round(progress)}%`} Completed</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Modules</p>
                <p className="font-semibold">6 Modules</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Final Exam</p>
                <p className="font-semibold text-green-600">{preview ? "Required" : "Passed"}</p>
              </div>
            </div>

            <div className="flex justify-between items-end pt-12 max-w-2xl mx-auto border-t">
              <div>
                <div className="h-0.5 bg-slate-400 w-48 mb-2"></div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Instructor Signature</p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {preview ? "Upon Completion" : currentDate}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Date of Completion</p>
              </div>
            </div>

            <div className="pt-4">
              <Badge className="bg-orange-600 text-white px-4 py-2 text-base">
                Certificate ID: {preview ? "XXXXX-XXXXX" : `JAVA-${Date.now().toString(36).toUpperCase()}`}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center pt-6">
          {!preview && (
            <Button onClick={handleDownload} size="lg" className="gap-2 bg-orange-600 hover:bg-orange-700">
              <Download className="h-4 w-4" />
              Download Certificate
            </Button>
          )}
          <Button onClick={onClose} variant={preview ? "default" : "outline"} size="lg">
            {preview ? "Continue Learning" : "Close"}
          </Button>
        </div>

        {preview && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 text-center">
            Complete all lessons and pass the final exam to unlock your certificate
          </p>
        )}
      </Card>
    </div>
  )
}
