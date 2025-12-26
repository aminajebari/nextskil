import Link from "next/link"
import type { JSX } from "react"

export default function DomainsSection() {
  const languages = [
    { title: "English", flag: "gb", href: "/english-course" },
    { title: "French", flag: "fr", href: "/french-course" },
    { title: "Italian", flag: "it", href: "/italian-course" },
    { title: "Spanish", flag: "es", href: "/spanish-course" },
    { title: "German", flag: "de", href: "/german-course" },
    { title: "Arabic", flag: "sa", href: "/arabic-course" },
  ]

  const FlagIcon = ({ code }: { code: string }) => {
    const flags: Record<string, JSX.Element> = {
      gb: (
        <svg viewBox="0 0 60 30" className="w-full h-full rounded-lg">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-15 h30 z" />
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      ),
      fr: (
        <svg viewBox="0 0 900 600" className="w-full h-full rounded-lg">
          <rect width="900" height="600" fill="#ED2939" />
          <rect width="600" height="600" fill="#fff" />
          <rect width="300" height="600" fill="#002395" />
        </svg>
      ),
      it: (
        <svg viewBox="0 0 3 2" className="w-full h-full rounded-lg">
          <rect width="3" height="2" fill="#009246" />
          <rect width="2" height="2" x="1" fill="#fff" />
          <rect width="1" height="2" x="2" fill="#ce2b37" />
        </svg>
      ),
      es: (
        <svg viewBox="0 0 750 500" className="w-full h-full rounded-lg">
          <rect width="750" height="500" fill="#AA151B" />
          <rect width="750" height="250" y="125" fill="#F1BF00" />
        </svg>
      ),
      de: (
        <svg viewBox="0 0 5 3" className="w-full h-full rounded-lg">
          <rect width="5" height="3" fill="#000" />
          <rect width="5" height="2" y="1" fill="#D00" />
          <rect width="5" height="1" y="2" fill="#FFCE00" />
        </svg>
      ),
      sa: (
        <svg viewBox="0 0 900 600" className="w-full h-full rounded-lg">
          <rect width="900" height="600" fill="#006C35" />
          <g fill="#fff">
            <path d="M 150,300 L 750,300 L 720,320 L 750,340 L 720,360 L 750,380 L 150,380 Z" />
            <text x="450" y="280" fontSize="80" textAnchor="middle" fontFamily="Arial">
              لا إله إلا الله
            </text>
            <text x="450" y="340" fontSize="60" textAnchor="middle" fontFamily="Arial">
              محمد رسول الله
            </text>
          </g>
        </svg>
      ),
    }
    return flags[code] || <div className="w-full h-full bg-gray-300 rounded-lg" />
  }

  const technicalSkills = [
    { title: "HTML", logo: "html5", color: "#E34F26", href: "/html-course" },
    { title: "CSS", logo: "css3", color: "#1572B6", href: "/css-course" },
    {
      title: "JavaScript",
      logo: "js",
      color: "#F7DF1E",
      textColor: "#000",
      href: "/javascript-course",
      display: "JavaScript",
    },
    { title: "C++", logo: "cpp", color: "#00599C", href: "/cpp-course" },
    { title: "Java", logo: "java", color: "#007396", href: "/java-course" },
    { title: "C#", logo: "csharp", color: "#239120", href: "/csharp-course" },
    { title: "Python", logo: "python", color: "#3776AB", href: "/python-course", display: "Python" },
    { title: "React", logo: "react", color: "#61DAFB", textColor: "#000", href: "/react-course", display: "React" },
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
                <div className="w-24 h-16 mx-auto mb-4 transition-transform group-hover:scale-110">
                  <FlagIcon code={skill.flag} />
                </div>
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
              return (
                <Link
                  key={index}
                  href={skill.href}
                  className="group border-2 border-slate-200 hover:border-secondary rounded-2xl p-8 transition-all hover:shadow-lg bg-white text-center"
                >
                  <div className="w-16 h-16 mb-4 mx-auto transition-transform group-hover:scale-110 flex items-center justify-center">
                    {skill.logo === "html5" && (
                      <svg viewBox="0 0 452 520" className="w-full h-full">
                        <path fill="#E34F26" d="M41 460L0 0h451l-41 460-185 52" />
                        <path fill="#EF652A" d="M226 472l149-41 35-394H226" />
                        <path
                          fill="#EBEBEB"
                          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                        />
                        <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                      </svg>
                    )}
                    {skill.logo === "css3" && (
                      <svg viewBox="0 0 452 520" className="w-full h-full">
                        <path fill="#1572B6" d="M41 460L0 0h451l-41 460-185 52" />
                        <path fill="#33A9DC" d="M226 472l149-41 35-394H226" />
                        <path fill="#EBEBEB" d="M226 208H94l5 57h127v56H89l15 56h122v57l-63-17-4-45H96l7 89 117 32z" />
                        <path fill="#FFF" d="M226 265h67l-7 73-60 17v57l110-30 26-288H226v56h80l-6 58h-74z" />
                      </svg>
                    )}
                    {skill.logo === "js" && (
                      <div
                        className="w-full h-full rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: skill.color }}
                      >
                        <span className="text-4xl font-bold" style={{ color: skill.textColor || "#FFF" }}>
                          JS
                        </span>
                      </div>
                    )}
                    {skill.logo === "cpp" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="45" fill={skill.color} />
                          <text
                            x="50"
                            y="65"
                            fontSize="40"
                            fill="white"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            C++
                          </text>
                        </svg>
                      </div>
                    )}
                    {skill.logo === "java" && (
                      <svg viewBox="0 0 384 512" className="w-full h-full">
                        <path
                          fill={skill.color}
                          d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                        />
                      </svg>
                    )}
                    {skill.logo === "csharp" && (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="45" fill={skill.color} />
                          <text
                            x="50"
                            y="65"
                            fontSize="38"
                            fill="white"
                            fontFamily="monospace"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            C#
                          </text>
                        </svg>
                      </div>
                    )}
                    {skill.logo === "python" && (
                      <svg viewBox="0 0 256 255" className="w-full h-full">
                        <defs>
                          <linearGradient x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%" id="a">
                            <stop stopColor="#387EB8" offset="0%" />
                            <stop stopColor="#366994" offset="100%" />
                          </linearGradient>
                          <linearGradient x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%" id="b">
                            <stop stopColor="#FFE052" offset="0%" />
                            <stop stopColor="#FFC331" offset="100%" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                          fill="url(#a)"
                        />
                        <path
                          d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                          fill="url(#b)"
                        />
                      </svg>
                    )}
                    {skill.logo === "react" && (
                      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
                        <circle cx="0" cy="0" r="2.05" fill={skill.color} />
                        <g stroke={skill.color} strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
                      </svg>
                    )}
                  </div>
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
