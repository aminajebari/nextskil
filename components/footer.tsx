import { Youtube, Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Footnotes Section */}
      <div className="bg-slate-800 py-8 px-4 text-sm text-slate-400">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>
            <sup>1</sup> Based on survey responses from students who completed NextSkill courses or IT Essentials between 2024 and 2025.
          </p>
          <p>
            <sup>2</sup> Based on analysis by extrapolation of students who completed aligned certification training or courses between 2024 and 2025.
          </p>
          <p>
            <sup>3</sup> IT Skills and Salary Report, 17th edition.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Social */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-slate-700">
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/copilot-20251030-210926-20-281-29.png"
                alt="NextSkill"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Youtube className="w-5 h-5 text-slate-900" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Facebook className="w-5 h-5 text-slate-900" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Instagram className="w-5 h-5 text-slate-900" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-900" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-white">Course Catalog</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Browse All Courses</Link></li>
                <li><Link href="/academy" className="hover:text-white transition-colors">Find an Academy</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors">Career Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Learn With Us</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/collaborate" className="hover:text-white transition-colors">Collaborate With Us</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Find a Partner</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>© 2025 NextSkill. All rights reserved.</p>
              <div className="flex flex-wrap gap-6">
                <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link href="/data" className="hover:text-white transition-colors">Data Protection</Link>
                <Link href="/trademarks" className="hover:text-white transition-colors">Trademarks</Link>
                <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
