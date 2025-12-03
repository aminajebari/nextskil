import { Quote } from 'lucide-react'

export default function TestimonialSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#6BBE66]/10 mb-8">
          <Quote className="w-10 h-10 text-[#6BBE66]" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-relaxed mb-8 text-balance">
          "2.5 million students say that{" "}
          <span className="font-semibold">NextSkill helped them land their dream job</span>"
          <sup className="text-[#6BBE66] text-2xl">2</sup>
        </h2>
        
        <div className="w-24 h-1 bg-[#6BBE66] mx-auto mb-12"></div>
        
        <p className="text-lg text-slate-600 leading-relaxed">
          Explore the domains below to open new horizons for yourself.
        </p>
      </div>
    </section>
  )
}
