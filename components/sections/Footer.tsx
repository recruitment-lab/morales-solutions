import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy border-t-2 border-brand-red pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center font-bold text-brand-cream group-hover:scale-110 transition-transform">
              M
            </div>
            <span className="font-jakarta text-xl font-bold tracking-tight text-brand-cream">
              Morales<span className="text-brand-red">Solutions</span>
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="#" className="font-roboto text-sm text-brand-cream/60 hover:text-brand-red transition-colors">Privacy Policy</Link>
            <Link href="#" className="font-roboto text-sm text-brand-cream/60 hover:text-brand-red transition-colors">Terms of Service</Link>
            <Link href="#" className="font-roboto text-sm text-brand-cream/60 hover:text-brand-red transition-colors">Security</Link>
            <Link href="#contact" className="font-roboto text-sm text-brand-cream/60 hover:text-brand-red transition-colors">Contact</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-roboto text-xs text-brand-cream/40">
            © {currentYear} Morales Solutions. All rights reserved.
          </p>
          <p className="font-roboto text-xs text-brand-cream/20">
            Designed for excellence and compliance.
          </p>
        </div>
      </div>
    </footer>
  )
}
