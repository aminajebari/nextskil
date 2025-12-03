import Image from "next/image"
import Link from "next/link"

export default function ProfessionalSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-slate-800 leading-tight text-balance">
              Concrete Professionalization
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Thanks to NextSkill's expertise and an unparalleled ecosystem of partners, our training transforms lives since 2024. Convert your potential into expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/auth/signin"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold text-center transition-colors"
              >
                Start Your Training
              </Link>
              <Link
                href="/#top"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold text-center transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/professional-team-working-collaboratively-in-moder.jpg"
                alt="Professional training environment"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
