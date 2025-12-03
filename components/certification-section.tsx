import Link from 'next/link'
import Image from 'next/image'

export default function CertificationSection() {
  return (
    <section className="bg-primary py-20 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-1/2 h-full">
          <Image
            src="/abstract-tech-pattern-background.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 text-balance">
          Why Certifications Matter?
        </h2>
        <p className="text-xl text-blue-100 text-center mb-16 max-w-3xl mx-auto">
          Industry-recognized certifications demonstrate your competencies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-secondary mb-4">96%</div>
            <p className="text-white text-lg leading-relaxed">
              of IT decision-makers believe certified personnel adds value to their company
              <sup className="text-secondary">2</sup>
            </p>
          </div>
          <div className="text-center border-x border-blue-400/30">
            <div className="text-6xl font-bold text-secondary mb-4">35%</div>
            <p className="text-white text-lg leading-relaxed">
              of certified professionals received at least a 20% salary increase after certification
              <sup className="text-secondary">3</sup>
            </p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-secondary mb-4">27%</div>
            <p className="text-white text-lg leading-relaxed">
              received a promotion after their certification
              <sup className="text-secondary">3</sup>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/certifications"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-full font-semibold transition-colors text-lg"
          >
            View All Certifications
          </Link>
        </div>
      </div>
    </section>
  )
}
