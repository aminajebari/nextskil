import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-background pt-8 pb-16 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight text-balance">
              Gain Skills and Unlock Your Dream Career
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Free online courses. Professional certifications. Learning paths in languages and programming including cybersecurity, networking, and web development.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Everything you need. Are you ready to start, reorient, or advance your career?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/auth/signin"
                className="bg-accent hover:opacity-90 text-accent-foreground px-8 py-4 rounded-full font-semibold text-center transition-opacity shadow-lg hover:shadow-xl"
              >
                Start Your Training
              </Link>
              <Link
                href="/#top"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-full font-semibold text-center transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-woman-studying-online-with-laptop-smi.jpg"
                    alt="Student learning online"
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/group-of-diverse-students-collaborating-on-project.jpg"
                    alt="Collaborative learning"
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/man-working-from-home-with-child-professional-envi.jpg"
                    alt="Flexible learning"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative dots pattern */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="text-primary">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
