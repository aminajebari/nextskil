"use client"

import { Button } from "@/components/ui/button"
import { Award, Download, X } from 'lucide-react'

interface CPPCertificateProps {
  onClose: () => void
  progress: number
  preview?: boolean
}

export default function CPPCertificate({ onClose, progress, preview = false }: CPPCertificateProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-secondary" />
            {preview ? "Certificate Preview" : "Your Certificate"}
          </h2>
          <Button onClick={onClose} variant="outline">
            <X className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>

        {preview && (
          <div className="mb-4 p-4 bg-secondary/10 border-2 border-secondary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              This is a preview of your certificate. Complete all lessons and pass the final exam to earn the real certificate.
            </p>
          </div>
        )}

        <div className="bg-white p-12 rounded-lg shadow-2xl border-8 border-double border-primary">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-secondary flex items-center justify-center">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Certificate of Completion</h1>
              <p className="text-muted-foreground">This certifies that</p>
            </div>

            <div className="py-4 border-b-2 border-primary/20">
              <p className="text-3xl font-bold text-foreground">
                {preview ? "[Your Name]" : "John Doe"}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-muted-foreground">has successfully completed</p>
              <h2 className="text-2xl font-bold text-secondary">C++ Programming Course</h2>
              <p className="text-muted-foreground">
                Mastering C++ from fundamentals to advanced techniques
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Date of Completion</p>
                <p className="font-semibold">{preview ? "[Completion Date]" : currentDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Course Progress</p>
                <p className="font-semibold text-secondary">{Math.round(progress)}%</p>
              </div>
            </div>

            <div className="pt-8 border-t">
              <p className="text-xs text-muted-foreground">
                Certificate ID: {preview ? "XXXXX-XXXXX-XXXXX" : "CPP" + Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {!preview && (
          <div className="mt-6 flex justify-center">
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              Download Certificate
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
