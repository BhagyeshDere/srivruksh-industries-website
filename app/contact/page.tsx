"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Building2, Activity } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-[#FAFBFD] text-[#0B2E5B] overflow-hidden">
      
      {/* HERO SECTION - REFINED FOR DEPTH */}
      <div className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-[#0B2E5B]">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.6 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/factory/automation.png"
            alt="Industrial Background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E5B]/90 via-[#0B2E5B]/80 to-transparent"></div>
        
        {/* Technical Blueprint Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#C79A3B 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <motion.div
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#C79A3B]" />
            <span className="text-[#C79A3B] uppercase tracking-[0.4em] text-[10px] font-black">Connection Hub</span>
            <span className="w-8 h-[2px] bg-[#C79A3B]" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto font-light tracking-widest text-sm uppercase">
            Let’s connect for engineering & fabrication solutions
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-24">
        
        {/* REFINED GLASS PANEL */}
        <motion.div
          className="grid lg:grid-cols-2 gap-0 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(11,46,91,0.15)] overflow-hidden border border-slate-100"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT FORM - COMMAND CENTER STYLE */}
          <div className="p-8 md:p-14 border-r border-slate-50">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#0B2E5B]/5 rounded-2xl">
                <Send size={24} className="text-[#0B2E5B]" />
              </div>
              <h2 className="text-2xl font-black tracking-tight uppercase">
                Send Us a Message
              </h2>
            </div>

            <form className="space-y-6">
              <div className="group relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#C79A3B]/30 transition-all outline-none font-medium placeholder:text-slate-400"
                />
              </div>

              <div className="group relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#C79A3B]/30 transition-all outline-none font-medium placeholder:text-slate-400"
                />
              </div>

              <div className="group relative">
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#C79A3B]/30 transition-all outline-none font-medium placeholder:text-slate-400"
                />
              </div>

              <div className="group relative">
                <textarea
                  placeholder="Project Details"
                  rows={4}
                  className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-[#C79A3B]/30 transition-all outline-none font-medium placeholder:text-slate-400 resize-none"
                />
              </div>

              <button className="group relative w-full bg-[#0B2E5B] overflow-hidden text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all hover:shadow-2xl hover:shadow-[#0B2E5B]/40 active:scale-[0.98]">
                <span className="relative z-10">Submit Inquiry</span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </button>
            </form>
          </div>

          {/* RIGHT DETAILS - INDUSTRIAL SPEC STYLE */}
          <div className="bg-[#0B2E5B] p-8 md:p-14 text-white relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Activity size={200} />
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/10 rounded-2xl">
                        <Building2 size={24} className="text-[#C79A3B]" />
                    </div>
                    <h2 className="text-2xl font-black tracking-tight uppercase">
                        Work Address
                    </h2>
                </div>
                <div className="pl-2 border-l-2 border-[#C79A3B]/50">
                    <p className="text-lg font-bold leading-relaxed tracking-tight mb-2">
                        M/S. SRIVRUKSH INDUSTRIES PVT LTD
                    </p>
                    <p className="text-slate-400 font-light leading-relaxed">
                        Sr. No. 117/2, Gagai Nagar Nashik Road, <br/>
                        Wakhar Mahamandal Bhosari Pune - 411039 <br/>
                        (Maharashtra) India
                    </p>
                </div>
              </div>

              <div className="space-y-8">
                {/* PHONE */}
                <div className="flex items-center gap-5 group">
                  <div className="bg-[#C79A3B] p-3 rounded-xl shadow-lg shadow-[#C79A3B]/20 transition-transform group-hover:scale-110">
                    <Phone size={20} color="white"/>
                  </div>
                  <p className="text-xl font-black tracking-widest text-white transition-colors group-hover:text-[#C79A3B]">
                    +91 9420925126
                  </p>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5 group">
                  <div className="bg-[#C79A3B] p-3 rounded-xl shadow-lg shadow-[#C79A3B]/20 transition-transform group-hover:scale-110">
                    <Mail size={20} color="white"/>
                  </div>
                  <div className="text-lg font-bold tracking-tight text-slate-200 group-hover:text-white">
                    <p>infosrivruksh@gmail.com</p>
                    <p className="text-[#C79A3B]/80 text-sm font-medium">srivruksh0052@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GST MODULE */}
            <div className="relative z-10 pt-10 mt-10 border-t border-white/10">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Taxation ID</p>
                        <p className="text-2xl font-black text-[#C79A3B] tracking-[0.2em] font-mono">
                            27ABJCS7257E1ZO
                        </p>
                    </div>
                    <div className="px-3 py-1 border border-[#C79A3B]/40 rounded text-[10px] font-black text-[#C79A3B] uppercase">
                        GSTIN
                    </div>
                </div>
            </div>
          </div>
        </motion.div>

        {/* MAP - FULL DEPTH VIEW */}
        <motion.div
          className="mt-20 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] border-8 border-white group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            src="https://www.google.com/maps?q=Bhosari%20Pune&output=embed"
            className="w-full h-[400px] md:h-[550px] border-0 grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}