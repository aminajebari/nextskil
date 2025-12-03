import { Code, Braces, Coffee, FileCode, Palette } from "lucide-react"
import Link from "next/link"

export default function DomainsSection() {
  const languages = [
    { title: "English", flag: "🇬🇧", href: "/english-course" },
    { title: "French", flag: "🇫🇷", href: "/french-course" },
    { title: "Italian", flag: "🇮🇹", href: "/italian-course" },
    { title: "Spanish", flag: "🇪🇸", href: "/spanish-course" },
    { title: "German", flag: "🇩🇪", href: "/german-course" },
    { title: "Arabic", flag: "🇸🇦", href: "/arabic-course" },
  ]

  const technicalSkills = [
    { title: "HTML", icon: Code, href: "/html-course" },
    { title: "CSS", icon: Palette, href: "/css-course" },
    { title: "JavaScript", icon: Code, href: "/javascript-course", display: "JavaScript" },
    { title: "C++", icon: Braces, href: "/cpp-course" },
    { title: "Java", icon: Coffee, href: "/java-course" },
    { title: "C#", icon: FileCode, href: "/csharp-course" },
    { title: "Python", icon: Code, href: "/python-course", display: "Python" },
    { title: "React", icon: Code, href: "/react-course", display: "React" },
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center text-slate-800 mb-4">Languages and Technical Skills</h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Master languages and programming skills with our structured certification paths
        </p>

        {/* Languages Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {languages.map((skill, index) => (
              <Link
                key={index}
                href={skill.href}
                className="group border-2 border-slate-200 hover:border-secondary rounded-2xl p-8 transition-all hover:shadow-lg bg-white text-center"
              >
                <div className="text-6xl mb-4 transition-transform group-hover:scale-110">{skill.flag}</div>
                <h3 className="text-lg font-semibold text-slate-800">{skill.title}</h3>
                <p className="text-sm text-slate-500 mt-2">4 Certificates</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Link
                  key={index}
                  href={skill.href}
                  className="group border-2 border-slate-200 hover:border-secondary rounded-2xl p-8 transition-all hover:shadow-lg bg-white text-center"
                >
                  <Icon className="w-12 h-12 mb-4 text-secondary transition-transform group-hover:scale-110 mx-auto" />
                  <h3 className="text-lg font-semibold text-slate-800">{skill.display || skill.title}</h3>
                  <p className="text-sm text-slate-500 mt-2">3 Certificates</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
