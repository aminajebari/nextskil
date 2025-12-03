import Link from "next/link"

export default function CategoriesSection() {
  const languages = [
    { name: "English", icon: "🇺🇸", link: "/english-course" },
    { name: "French", icon: "🇫🇷", link: "/french-course" },
    { name: "Arabic", icon: "🇸🇦", link: "/arabic-course" },
    { name: "Italian", icon: "🇮🇹", link: "/italian-course" },
    { name: "Spanish", icon: "🇪🇸", link: "/spanish-course" },
    { name: "German", icon: "🇩🇪", link: "/german-course" },
  ]

  const programming = [
    { name: "JavaScript", icon: "✨", link: "/javascript-course" },
    { name: "Python", icon: "🐍", link: "/python-course" },
    { name: "Java", icon: "☕", link: "/java-course" },
    { name: "C++", icon: "⚙️", link: "/cpp-course" },
    { name: "C", icon: "🔧", link: "/courses?category=c" },
    { name: "CSS & HTML", icon: "🎨", link: "/html-course" },
    { name: "TypeScript", icon: "📘", link: "/courses?category=typescript" },
    { name: "React", icon: "⚛️", link: "/react-course" },
  ]

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Learning Categories</h2>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang) => (
              <Link
                key={lang.name}
                href={lang.link}
                className="bg-white p-4 rounded-lg border-2 border-border hover:border-primary hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2">{lang.icon}</div>
                <div className="font-medium text-foreground text-sm">{lang.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Programming */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programming.map((prog) => (
              <Link
                key={prog.name}
                href={prog.link}
                className="bg-white p-4 rounded-lg border-2 border-border hover:border-secondary hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-2">{prog.icon}</div>
                <div className="font-medium text-foreground text-sm">{prog.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
