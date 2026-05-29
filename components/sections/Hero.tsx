'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ShieldCheck, Zap, Globe, BarChart3 } from 'lucide-react'

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)

  useEffect(() => {
    let effect: any = null
    
    const loadVanta = async () => {
      try {
        const THREE = await import('three')
        // @ts-ignore
        const GLOBE = (await import('vanta/dist/vanta.globe.min')).default
        
        if (!vantaEffect && vantaRef.current) {
          effect = GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xB30634,        // Brand Red
            color2: 0xFF6600,       // Brand Orange
            backgroundColor: 0x0A0F23, // Brand Navy
            size: 0.8,
            points: 12.00,
            spacing: 18.00,
            showDots: true
          })
          setVantaEffect(effect)
        }
      } catch (err) {
        console.error('Vanta initialization failed:', err)
      }
    }

    loadVanta()

    return () => {
      if (effect) effect.destroy()
    }
  }, [vantaEffect])

  return (
    <section 
      ref={vantaRef} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-brand-navy/90 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-jakarta font-bold text-xs tracking-widest uppercase mb-6">
              Compliant · Scalable · Secure
            </span>
            
            <h1 className="font-jakarta text-5xl md:text-7xl font-extrabold text-brand-cream leading-tight mb-8">
              Operate with <span className="gradient-text">certainty.</span><br />
              Scale without risk.
            </h1>

            <p className="font-roboto text-lg md:text-xl text-brand-cream/70 max-w-2xl mb-10 leading-relaxed">
              We deploy specialized teams in compliance operations, customer support, and sales — regulated-market-ready, brand-aligned, and operational from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button className="px-8 py-4 bg-brand-red hover:bg-brand-red/90 text-brand-cream rounded font-jakarta font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(179,6,52,0.4)]">
                Build Your Team
                <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-transparent border border-brand-cream/20 hover:border-brand-cream/40 text-brand-cream rounded font-jakarta font-bold transition-all">
                Our Methodology
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-brand-cream/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-red mb-1">
                  <ShieldCheck size={18} />
                  <span className="font-jakarta font-bold text-2xl text-brand-cream tracking-tight">98.6%</span>
                </div>
                <p className="font-roboto text-sm text-brand-cream/50 uppercase tracking-wider">Compliance Rate</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-orange mb-1">
                  <Zap size={18} />
                  <span className="font-jakarta font-bold text-2xl text-brand-cream tracking-tight">72h</span>
                </div>
                <p className="font-roboto text-sm text-brand-cream/50 uppercase tracking-wider">Median Deployment</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-red mb-1">
                  <Globe size={18} />
                  <span className="font-jakarta font-bold text-2xl text-brand-cream tracking-tight">40+</span>
                </div>
                <p className="font-roboto text-sm text-brand-cream/50 uppercase tracking-wider">Regulated Industries</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-brand-orange mb-1">
                  <BarChart3 size={18} />
                  <span className="font-jakarta font-bold text-2xl text-brand-cream tracking-tight">0</span>
                </div>
                <p className="font-roboto text-sm text-brand-cream/50 uppercase tracking-wider">Sanctions on Record</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
