import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CertificatesPage() {
  const languageCertificates = [
    {
      language: "English",
      levels: [
        { level: "A2", name: "Elementary", description: "Basic English communication skills", courses: 3 },
        { level: "B1", name: "Intermediate", description: "Independent English user", courses: 4 },
        { level: "B2", name: "Upper Intermediate", description: "Effective operational proficiency", courses: 5 },
        { level: "C1", name: "Advanced", description: "Proficient English user", courses: 6 },
      ],
    },
    {
      language: "French",
      levels: [
        { level: "A2", name: "Elementary", description: "Basic French communication skills", courses: 3 },
        { level: "B1", name: "Intermediate", description: "Independent French user", courses: 4 },
        { level: "B2", name: "Upper Intermediate", description: "Effective operational proficiency", courses: 5 },
        { level: "C1", name: "Advanced", description: "Proficient French user", courses: 6 },
      ],
    },
    {
      language: "Italian",
      levels: [
        { level: "A2", name: "Elementary", description: "Basic Italian communication skills", courses: 3 },
        { level: "B1", name: "Intermediate", description: "Independent Italian user", courses: 4 },
        { level: "B2", name: "Upper Intermediate", description: "Effective operational proficiency", courses: 5 },
        { level: "C1", name: "Advanced", description: "Proficient Italian user", courses: 6 },
      ],
    },
    {
      language: "Spanish",
      levels: [
        { level: "A2", name: "Elementary", description: "Basic Spanish communication skills", courses: 3 },
        { level: "B1", name: "Intermediate", description: "Independent Spanish user", courses: 4 },
        { level: "B2", name: "Upper Intermediate", description: "Effective operational proficiency", courses: 5 },
        { level: "C1", name: "Advanced", description: "Proficient Spanish user", courses: 6 },
      ],
    },
    {
      language: "German",
      levels: [
        { level: "A2", name: "Elementary", description: "Basic German communication skills", courses: 3 },
        { level: "B1", name: "Intermediate", description: "Independent German user", courses: 4 },
        { level: "B2", name: "Upper Intermediate", description: "Effective operational proficiency", courses: 5 },
        { level: "C1", name: "Advanced", description: "Proficient German user", courses: 6 },
      ],
    },
  ]

  const technicalCertificates = [
    {
      skill: "HTML",
      levels: [
        { level: "Beginner", description: "HTML fundamentals and basic page structure", courses: 2 },
        { level: "Intermediate", description: "Advanced HTML5 features and semantics", courses: 3 },
        { level: "Master", description: "Expert-level HTML development", courses: 4 },
      ],
    },
    {
      skill: "CSS",
      levels: [
        { level: "Beginner", description: "CSS fundamentals and styling basics", courses: 2 },
        { level: "Intermediate", description: "Advanced CSS layouts and animations", courses: 3 },
        { level: "Master", description: "Expert-level CSS architecture", courses: 4 },
      ],
    },
    {
      skill: "JavaScript",
      levels: [
        { level: "Beginner", description: "JavaScript fundamentals and syntax", courses: 3 },
        { level: "Intermediate", description: "Advanced JavaScript and async programming", courses: 4 },
        { level: "Master", description: "Expert JavaScript development and best practices", courses: 5 },
      ],
    },
    {
      skill: "C++",
      levels: [
        { level: "Beginner", description: "C++ syntax and basic programming concepts", courses: 3 },
        { level: "Intermediate", description: "Object-oriented programming in C++", courses: 4 },
        { level: "Master", description: "Advanced C++ and system programming", courses: 5 },
      ],
    },
    {
      skill: "Java",
      levels: [
        { level: "Beginner", description: "Java fundamentals and OOP basics", courses: 3 },
        { level: "Intermediate", description: "Advanced Java and frameworks", courses: 4 },
        { level: "Master", description: "Enterprise Java development", courses: 5 },
      ],
    },
    {
      skill: "C#",
      levels: [
        { level: "Beginner", description: "C# basics and .NET introduction", courses: 3 },
        { level: "Intermediate", description: "Advanced C# and .NET development", courses: 4 },
        { level: "Master", description: "Expert C# and enterprise solutions", courses: 5 },
      ],
    },
    {
      skill: "Python",
      levels: [
        { level: "Beginner", description: "Python fundamentals and syntax", courses: 3 },
        { level: "Intermediate", description: "Advanced Python and data structures", courses: 4 },
        { level: "Master", description: "Expert Python development and frameworks", courses: 5 },
      ],
    },
    {
      skill: "React",
      levels: [
        { level: "Beginner", description: "React fundamentals and JSX basics", courses: 3 },
        { level: "Intermediate", description: "Advanced React hooks and patterns", courses: 4 },
        { level: "Master", description: "Expert React performance and optimization", courses: 5 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-balance">
            Earn recognized certificates to showcase your skills and advance your career
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Language Certificates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Language Certificates</h2>
          <div className="space-y-8">
            {languageCertificates.map((cert) => (
              <div key={cert.language} className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{cert.language}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cert.levels.map((level) => (
                    <div
                      key={level.level}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-secondary">{level.level}</span>
                        <Award className="text-secondary" size={24} />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{level.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <CheckCircle size={16} className="text-secondary" />
                        <span>{level.courses} courses included</span>
                      </div>
                      <Link
                        href={`/courses?category=${cert.language.toLowerCase()}`}
                        className="block w-full text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        View Courses
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Certificates */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Technical Certificates</h2>
          <div className="space-y-8">
            {technicalCertificates.map((cert) => (
              <div key={cert.skill} className="bg-white border border-border rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{cert.skill}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {cert.levels.map((level) => (
                    <div
                      key={level.level}
                      className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-secondary">{level.level}</span>
                        <Award className="text-secondary" size={24} />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <CheckCircle size={16} className="text-secondary" />
                        <span>{level.courses} courses included</span>
                      </div>
                      <Link
                        href={`/courses?category=${cert.skill.toLowerCase()}`}
                        className="block w-full text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        View Courses
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
          <Award className="mx-auto text-secondary mb-4" size={64} />
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Earn Your Certificate?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start learning today and earn internationally recognized certificates to boost your career
          </p>
          <Link
            href="/auth/signin"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
