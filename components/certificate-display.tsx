"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Download, X, Share2, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface CertificateDisplayProps {
  certificate: {
    title: string
    level: string
    description: string
    modules: number
    color: string
  }
  userName: string
  currentDate: string
  certificateId: string
  examScore: number
  courseId: string
}

export default function CertificateDisplay({
  certificate,
  userName,
  currentDate,
  certificateId,
  examScore,
  courseId,
}: CertificateDisplayProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    setIsDownloading(true)
    try {
      const element = document.getElementById("certificate")
      if (!element) return

      // Dynamically import html2pdf
      const html2pdf = (await import("html2pdf.js")).default

      const options = {
        margin: 10,
        filename: `${certificateId}-certificate.pdf`,
        image: { type: "PNG", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "landscape", unit: "mm", format: "a4" },
      }

      html2pdf().set(options).from(element).save()
    } catch (error) {
      console.error("Error downloading PDF:", error)
      // Fallback to print
      window.print()
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-8 print:hidden gap-3 flex-wrap">
          <Link href="/certificates">
            <Button variant="outline">
              <X className="h-4 w-4 mr-2" />
              Back to Certificates
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button onClick={handleDownloadPDF} disabled={isDownloading}>
              <FileDown className="h-4 w-4 mr-2" />
              {isDownloading ? "Generating..." : "Download PDF"}
            </Button>
          </div>
        </div>

        {/* Certificate */}
        <div
          id="certificate"
          className={`bg-white p-12 rounded-lg shadow-2xl border-8 border-double border-primary relative`}
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3ClinearGradient id=%22grad%22 x1=%220%25%22 y1=%220%25%22 x2=%22100%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 style=%22stop-color:rgb(59,130,246,0.02);stop-opacity:1%22 /%3E%3Cstop offset=%22100%25%22 style=%22stop-color:rgb(139,92,246,0.02);stop-opacity:1%22 /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 fill=%22url(%23grad)%22/%3E%3C/svg%3E')",
          }}
        >
          <div className="absolute inset-0 border-4 border-secondary/10 rounded-lg pointer-events-none" />

          <div className="text-center space-y-6 relative z-10">
            {/* NextSkill Logo */}
            <div className="mb-6">
              <img
                src="/images/copilot-20251030-210926-20-281-29.png"
                alt="NextSkill Logo"
                width={140}
                height={50}
                className="mx-auto h-12 w-auto"
              />
            </div>

            {/* Award Icon */}
            <div className="flex justify-center">
              <div
                className={`h-24 w-24 rounded-full bg-${certificate.color}-500 flex items-center justify-center shadow-lg`}
              >
                <Award className="h-14 w-14 text-white" />
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-5xl font-bold text-primary mb-2">Certificate of Achievement</h1>
              <p className="text-lg text-muted-foreground">This is to certify that</p>
            </div>

            {/* Student Name */}
            <div className="py-6 border-b-2 border-primary/30">
              <p className="text-4xl font-bold text-foreground">{userName}</p>
              <p className="text-sm text-muted-foreground mt-2">has successfully completed the</p>
            </div>

            {/* Course Details */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-secondary">{certificate.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
                {certificate.description}, demonstrating proficiency and mastery of all required competencies and
                achieving an exam score of {examScore}%.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-primary/20">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Proficiency Level</p>
                <p className="font-semibold text-secondary text-lg">{certificate.level}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Topics Covered</p>
                <p className="font-semibold text-lg">{certificate.modules}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Completion Date</p>
                <p className="font-semibold text-lg">{currentDate}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Exam Score</p>
                <p className="font-semibold text-green-600 text-lg">{examScore}%</p>
              </div>
            </div>

            {/* Certificate ID and Signature Area */}
            <div className="pt-8 border-t">
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="text-center">
                  <div className="h-16 border-t border-gray-400 mb-2"></div>
                  <p className="text-xs text-muted-foreground">Director of Academics</p>
                </div>
                <div className="text-center">
                  <div className="h-16 border-t border-gray-400 mb-2"></div>
                  <p className="text-xs text-muted-foreground">{currentDate}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-dashed border-gray-300">
                <p className="text-xs text-muted-foreground font-mono">Certificate ID: {certificateId}</p>
                <p className="text-xs text-muted-foreground mt-1">Issued by NextSkill Learning Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 print:hidden">
          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award size={20} />
              About This Certificate
            </h3>
            <p className="text-sm text-muted-foreground">
              This certificate verifies that the holder has successfully completed all required coursework, passed the
              certification exam with a score of {examScore}%, and demonstrated mastery of the {certificate.title}{" "}
              curriculum.
            </p>
          </div>

          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Share2 size={20} />
              Share Your Achievement
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              You can share this certificate on your professional profiles to showcase your learning achievements.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert("Certificate link copied!")
                }}
              >
                Copy Link
              </Button>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg print:hidden">
          <h3 className="font-semibold text-foreground mb-2">Continue Your Learning Journey</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explore other courses to expand your skills and earn more certificates.
          </p>
          <Link href="/courses">
            <Button>Browse More Courses</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
