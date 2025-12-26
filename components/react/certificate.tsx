"use client"

import { Award, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CertificateProps {
  onClose: () => void
  progress: number
  preview?: boolean
}

export default function ReactCertificate({ onClose, progress, preview = false }: CertificateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-600 to-blue-600" />

        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Certificate of Completion
            </h1>
            <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold">React Development Mastery Course</p>
          </div>

          <div className="py-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">This certifies that</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white border-b-2 border-cyan-600 inline-block pb-2 px-8">
              Your Name Here
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-6 mb-4">has successfully completed the</p>
            <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Complete React Development Training</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Demonstrating mastery of React fundamentals, components, hooks, state management, React Router, and modern
              web development practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6">
            <div className="text-center p-4 bg-cyan-50 dark:bg-gray-800 rounded-lg">
              <Calendar className="h-5 w-5 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Completion Date</p>
              <p className="font-bold text-gray-900 dark:text-white">
                {preview ? "Upon Completion" : new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="text-center p-4 bg-cyan-50 dark:bg-gray-800 rounded-lg">
              <CheckCircle className="h-5 w-5 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Course Progress</p>
              <p className="font-bold text-gray-900 dark:text-white">{Math.round(progress)}% Completed</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
            <div className="text-center p-4 bg-cyan-50 dark:bg-gray-800 rounded-lg">
              <Award className="h-5 w-5 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Modules</p>
              <p className="font-bold text-gray-900 dark:text-white">8 Modules</p>
            </div>
            <div className="text-center p-4 bg-cyan-50 dark:bg-gray-800 rounded-lg">
              <CheckCircle className="h-5 w-5 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Final Exam</p>
              <p className="font-bold text-gray-900 dark:text-white">{preview ? "Required" : "Passed"}</p>
            </div>
          </div>

          {preview && (
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                Certificate Preview - Complete all lessons and pass the final exam to earn your certificate
              </p>
            </div>
          )}

          <div className="pt-8">
            <Button onClick={onClose} size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
              {preview ? "Back to Course" : "Download Certificate"}
            </Button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 pt-4">
            Certificate ID: REACT-{Math.random().toString(36).substring(7).toUpperCase()}
          </p>
        </div>
      </Card>
    </div>
  )
}
