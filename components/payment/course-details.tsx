"use client"

import { Card } from "@/components/ui/card"
import { Award, Video, FileText, CheckCircle2, Star, Users, TrendingUp } from "lucide-react"

export function CourseDetails() {
  return (
    <Card className="p-6 bg-card border-2 border-border/50 shadow-2xl sticky top-8 animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="animate-in fade-in zoom-in duration-500">
        <div className="relative mb-6 rounded-xl overflow-hidden aspect-video gradient-primary flex items-center justify-center">
          <div className="animate-in zoom-in duration-700 delay-300">
            <Award className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>

        {/* Updated title to reflect all-access subscription */}
        <h2 className="text-2xl font-bold text-card-foreground mb-2">All-Access Subscription</h2>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          Get unlimited access to all language and technical courses, certificates, and premium content.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-1/10 border border-chart-1/20 transition-transform hover:scale-105">
            <Video className="w-5 h-5 text-chart-1" />
            <div>
              <p className="text-xs text-muted-foreground">Duration</p>
              <p className="font-semibold text-card-foreground text-sm">40 Hours</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-2/10 border border-chart-2/20 transition-transform hover:scale-105">
            <FileText className="w-5 h-5 text-chart-2" />
            <div>
              <p className="text-xs text-muted-foreground">Lessons</p>
              {/* Updated lesson count to reflect all courses */}
              <p className="font-semibold text-card-foreground text-sm">500+</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-3/10 border border-chart-3/20 transition-transform hover:scale-105">
            <Users className="w-5 h-5 text-chart-3" />
            <div>
              <p className="text-xs text-muted-foreground">Students</p>
              <p className="font-semibold text-card-foreground text-sm">15,000+</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-chart-4/10 border border-chart-4/20 transition-transform hover:scale-105">
            <Star className="w-5 h-5 text-chart-4" />
            <div>
              <p className="text-xs text-muted-foreground">Rating</p>
              <p className="font-semibold text-card-foreground text-sm">4.9/5.0</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            What's Included
          </h3>
          <div className="space-y-3">
            {[
              "Unlimited access to ALL courses",
              "Technical & Language Certificates",
              "24/7 community support and mentorship",
              "Real-world projects and assignments",
            ].map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 animate-in fade-in slide-in-from-left-4 duration-500`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CheckCircle2 className="w-5 h-5 text-chart-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-card-foreground leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-border/50 pt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-muted-foreground">Monthly Subscription</span>
            {/* Updated price to $9/month */}
            <span className="text-2xl font-bold text-card-foreground">$9.00/mo</span>
          </div>
          <div className="gradient-accent text-accent-foreground p-4 rounded-lg text-center font-semibold animate-in fade-in zoom-in duration-500 delay-500">
            🎉 Limited Time Offer - All Courses Included
          </div>
        </div>
      </div>
    </Card>
  )
}
