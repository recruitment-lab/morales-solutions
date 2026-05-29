'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Why Us', href: '#why-us' },
  { name: 'Services', href: '#services' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-navy/80 backdrop-blur-md border-b border-brand-red/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center font-bold text-brand-cream group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="font-jakarta text-xl font-bold tracking-tight text-brand-cream">
            Morales<span className="text-brand-red">Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-roboto text-sm font-medium text-brand-cream/80 hover:text-brand-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#services"
            className="px-6 py-2.5 bg-brand-red hover:bg-brand-red/90 text-brand-cream rounded font-jakarta font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(179,6,52,0.4)]"
          >
            Hire a Team
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-navy border-b border-brand-red/20 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-roboto text-lg font-medium text-brand-cream/80 hover:text-brand-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#services"
              className="w-full py-4 bg-brand-red text-brand-cream text-center rounded font-jakarta font-bold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire a Team
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
