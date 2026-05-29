'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-brand-red font-jakarta font-bold text-sm tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="font-jakarta text-4xl font-bold text-brand-cream mb-6">
              Let's talk about your <span className="gradient-text">operations.</span>
            </h2>
            <p className="font-roboto text-brand-cream/60 text-lg leading-relaxed mb-8">
              Whether you need to scale a support team or secure a compliance workflow, our experts are ready to design a solution for you.
            </p>
            
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-brand-cream/[0.03] border border-brand-cream/10">
                <p className="font-jakarta font-bold text-brand-cream text-sm uppercase tracking-wider mb-1">Response Time</p>
                <p className="font-roboto text-brand-red font-medium">Under 24 hours</p>
              </div>
              <div className="p-4 rounded-lg bg-brand-cream/[0.03] border border-brand-cream/10">
                <p className="font-jakarta font-bold text-brand-cream text-sm uppercase tracking-wider mb-1">Global Coverage</p>
                <p className="font-roboto text-brand-orange font-medium">24/7 Operations</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="p-8 md:p-12 rounded-2xl bg-brand-cream/[0.02] border border-brand-cream/10 relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-red">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-jakarta text-2xl font-bold text-brand-cream mb-4">Message Sent!</h3>
                  <p className="font-roboto text-brand-cream/60 max-w-sm mx-auto">
                    Thank you for reaching out. One of our operational leads will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-red font-jakarta font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-jakarta text-sm font-bold text-brand-cream/60 uppercase tracking-wider">Full Name</label>
                      <input 
                        type="text" id="name" required
                        className="w-full bg-brand-navy border border-brand-cream/10 rounded-lg px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-jakarta text-sm font-bold text-brand-cream/60 uppercase tracking-wider">Work Email</label>
                      <input 
                        type="email" id="email" required
                        className="w-full bg-brand-navy border border-brand-cream/10 rounded-lg px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-jakarta text-sm font-bold text-brand-cream/60 uppercase tracking-wider">Company</label>
                      <input 
                        type="text" id="company" required
                        className="w-full bg-brand-navy border border-brand-cream/10 rounded-lg px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-red transition-colors"
                        placeholder="Company Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interest" className="font-jakarta text-sm font-bold text-brand-cream/60 uppercase tracking-wider">Service Interest</label>
                      <select 
                        id="interest"
                        className="w-full bg-brand-navy border border-brand-cream/10 rounded-lg px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-red transition-colors appearance-none"
                      >
                        <option value="support">Customer Support</option>
                        <option value="compliance">Compliance Operations</option>
                        <option value="sales">Sales & Growth</option>
                        <option value="backoffice">Back-office Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-jakarta text-sm font-bold text-brand-cream/60 uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" rows={4} required
                      className="w-full bg-brand-navy border border-brand-cream/10 rounded-lg px-4 py-3 text-brand-cream focus:outline-none focus:border-brand-red transition-colors resize-none"
                      placeholder="Tell us about your operational needs..."
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-red hover:bg-brand-red/90 disabled:opacity-50 text-brand-cream rounded font-jakarta font-bold flex items-center justify-center gap-3 transition-all"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
