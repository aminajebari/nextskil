import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, CheckCircle, FileCheck } from "lucide-react"
import Link from "next/link"

export default function CertificatesPage() {
  const languageCertificates = [
    {
      language: "English",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic English communication skills",
          courses: 3,
          slug: "english-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent English user", courses: 4, slug: "english-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "english-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient English user", courses: 6, slug: "english-c1" },
      ],
    },
    {
      language: "French",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic French communication skills",
          courses: 3,
          slug: "french-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent French user", courses: 4, slug: "french-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "french-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient French user", courses: 6, slug: "french-c1" },
      ],
    },
    {
      language: "Arabic",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic Arabic communication skills",
          courses: 3,
          slug: "arabic-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent Arabic user", courses: 4, slug: "arabic-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "arabic-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient Arabic user", courses: 6, slug: "arabic-c1" },
      ],
    },
    {
      language: "Italian",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic Italian communication skills",
          courses: 3,
          slug: "italian-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent Italian user", courses: 4, slug: "italian-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "italian-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient Italian user", courses: 6, slug: "italian-c1" },
      ],
    },
    {
      language: "Spanish",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic Spanish communication skills",
          courses: 3,
          slug: "spanish-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent Spanish user", courses: 4, slug: "spanish-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "spanish-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient Spanish user", courses: 6, slug: "spanish-c1" },
      ],
    },
    {
      language: "German",
      levels: [
        {
          level: "A2",
          name: "Elementary",
          description: "Basic German communication skills",
          courses: 3,
          slug: "german-a2",
        },
        { level: "B1", name: "Intermediate", description: "Independent German user", courses: 4, slug: "german-b1" },
        {
          level: "B2",
          name: "Upper Intermediate",
          description: "Effective operational proficiency",
          courses: 5,
          slug: "german-b2",
        },
        { level: "C1", name: "Advanced", description: "Proficient German user", courses: 6, slug: "german-c1" },
      ],
    },
  ]

  const technicalCertificates = [
    {
      skill: "HTML",
      levels: [
        {
          level: "Beginner",
          description: "HTML fundamentals and basic page structure",
          courses: 2,
          slug: "html-beginner",
        },
        {
          level: "Intermediate",
          description: "Advanced HTML5 features and semantics",
          courses: 3,
          slug: "html-intermediate",
        },
        { level: "Master", description: "Expert-level HTML development", courses: 4, slug: "html-master" },
      ],
    },
    {
      skill: "CSS",
      levels: [
        { level: "Beginner", description: "CSS fundamentals and styling basics", courses: 2, slug: "css-beginner" },
        {
          level: "Intermediate",
          description: "Advanced CSS layouts and animations",
          courses: 3,
          slug: "css-intermediate",
        },
        { level: "Master", description: "Expert-level CSS architecture", courses: 4, slug: "css-master" },
      ],
    },
    {
      skill: "JavaScript",
      levels: [
        {
          level: "Beginner",
          description: "JavaScript fundamentals and syntax",
          courses: 3,
          slug: "javascript-beginner",
        },
        {
          level: "Intermediate",
          description: "Advanced JavaScript and async programming",
          courses: 4,
          slug: "javascript-intermediate",
        },
        {
          level: "Master",
          description: "Expert JavaScript development and best practices",
          courses: 5,
          slug: "javascript-master",
        },
      ],
    },
    {
      skill: "C++",
      levels: [
        {
          level: "Beginner",
          description: "C++ syntax and basic programming concepts",
          courses: 3,
          slug: "cpp-beginner",
        },
        {
          level: "Intermediate",
          description: "Object-oriented programming in C++",
          courses: 4,
          slug: "cpp-intermediate",
        },
        { level: "Master", description: "Advanced C++ and system programming", courses: 5, slug: "cpp-master" },
      ],
    },
    {
      skill: "Java",
      levels: [
        { level: "Beginner", description: "Java fundamentals and OOP basics", courses: 3, slug: "java-beginner" },
        { level: "Intermediate", description: "Advanced Java and frameworks", courses: 4, slug: "java-intermediate" },
        { level: "Master", description: "Enterprise Java development", courses: 5, slug: "java-master" },
      ],
    },
    {
      skill: "C#",
      levels: [
        { level: "Beginner", description: "C# basics and .NET introduction", courses: 3, slug: "csharp-beginner" },
        {
          level: "Intermediate",
          description: "Advanced C# and .NET development",
          courses: 4,
          slug: "csharp-intermediate",
        },
        { level: "Master", description: "Expert C# and enterprise solutions", courses: 5, slug: "csharp-master" },
      ],
    },
    {
      skill: "Python",
      levels: [
        { level: "Beginner", description: "Python fundamentals and syntax", courses: 3, slug: "python-beginner" },
        {
          level: "Intermediate",
          description: "Advanced Python and data structures",
          courses: 4,
          slug: "python-intermediate",
        },
        { level: "Master", description: "Expert Python development and frameworks", courses: 5, slug: "python-master" },
      ],
    },
    {
      skill: "React",
      levels: [
        { level: "Beginner", description: "React fundamentals and JSX basics", courses: 3, slug: "react-beginner" },
        {
          level: "Intermediate",
          description: "Advanced React hooks and patterns",
          courses: 4,
          slug: "react-intermediate",
        },
        { level: "Master", description: "Expert React performance and optimization", courses: 5, slug: "react-master" },
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
            Pass the exam to earn recognized certificates and showcase your skills
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
                        href={`/certificates/${level.slug}/exam`}
                        className="flex items-center justify-center gap-2 w-full text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <FileCheck size={16} />
                        Pass a Test to Have Certificate
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
                        href={`/certificates/${level.slug}/exam`}
                        className="flex items-center justify-center gap-2 w-full text-center bg-primary text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        <FileCheck size={16} />
                        Pass a Test to Have Certificate
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
            Pass the certification exam and earn internationally recognized certificates to boost your career
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
