export default function StatsSection() {
  const stats = [
    {
      number: "50,000+",
      label: "Students enrolled since our launch in 2024",
    },
    {
      number: "250+",
      label: "Expert instructors worldwide",
    },
    {
      number: "1,500+",
      label: "Companies partnering with NextSkill",
    },
    {
      number: "45",
      label: "Countries where we train students",
    },
    {
      number: "94%",
      label: "Students achieved career opportunities or advancement",
      footnote: "1",
    },
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center min-w-[200px] flex-shrink-0">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {stat.label}
                {stat.footnote && <sup className="text-secondary">{stat.footnote}</sup>}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500 mt-12">As of Q1 2025</p>
      </div>
    </section>
  )
}
