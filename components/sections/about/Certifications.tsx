"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ZoomIn, Award, ShieldCheck } from "lucide-react"

const certificates = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    image: "/images/certificates/cert1.png",
    desc: "Global standard for quality management systems and operational excellence."
  },
  {
    title: "Safety First",
    subtitle: "OSHA Compliance",
    image: "/images/certificates/cert2.png",
    desc: "Adherence to rigorous industrial safety standards and worker protection."
  },
  {
    title: "MSME Registered",
    subtitle: "Industrial Growth",
    image: "/images/certificates/cert3.png",
    desc: "Recognized by the Ministry of Micro, Small and Medium Enterprises."
  },
  {
    title: "D&B Certified",
    subtitle: "Business Trust",
    image: "/images/certificates/cert4.png",
    desc: "Verified business credibility and financial transparency standards."
  }
]

export default function CertificationsPage() {
  const [activeCert, setActiveCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section className="relative bg-[#020617] py-24 md:py-32 overflow-hidden">
      
      {/* 1. Large Scrolling Background Text (The "Aesthetic" Layer) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.03] whitespace-nowrap">
        <motion.p 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="text-[15rem] font-black text-white leading-none"
        >
          COMPLIANCE QUALITY PRECISION SAFETY STANDARDS EXCELLENCE 
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4 text-[#C79A3B]"
            >
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Verified Standards</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Commitment to <br />
              <span className="text-[#C79A3B]">World-Class Quality</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed">
            Our manufacturing unit in Pune operates under the strictest global certifications, 
            ensuring every component we fabricate meets elite industrial benchmarks.
          </p>
        </div>

        {/* 2. THE INFINITE SLIDER LOOP */}
        <div className="relative group">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-8 py-10"
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div 
                  key={i}
                  className="w-[300px] md:w-[400px] flex-shrink-0 cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <motion.div 
                    whileHover={{ y: -15 }}
                    className="relative aspect-[4/5] bg-slate-900 rounded-2xl p-4 border border-white/5 transition-all group/card shadow-2xl"
                  >
                    {/* The Certificate "Paper" */}
                    <div className="relative w-full h-full bg-white rounded-lg shadow-inner overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-6 grayscale group-hover/card:grayscale-0 transition-all duration-700"
                      />
                      
                      {/* Interaction Overlay */}
                      <div className="absolute inset-0 bg-[#0B2E5B]/20 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                          <ZoomIn className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Label Area */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[#C79A3B] text-[10px] font-bold tracking-widest uppercase mb-1">{cert.subtitle}</p>
                          <h3 className="text-white text-lg font-bold">{cert.title}</h3>
                        </div>
                        <Award className="text-white/20 w-8 h-8" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. ADVANCED MODAL WITH ANIME-PRESENCE */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[100] p-6"
          >
            <button 
              onClick={() => setActiveCert(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl w-full items-center">
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="relative aspect-[3/4] bg-white rounded-xl shadow-[0_0_50px_rgba(199,154,59,0.2)]"
              >
                <Image
                  src={activeCert.image}
                  alt="Full Certificate"
                  fill
                  className="object-contain p-8"
                />
              </motion.div>

              <div className="text-white">
                <p className="text-[#C79A3B] font-bold tracking-widest uppercase mb-4">{activeCert.subtitle}</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">{activeCert.title}</h2>
                <div className="w-20 h-1 bg-[#C79A3B] mb-8" />
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                  {activeCert.desc}
                </p>
                
                <button 
                  onClick={() => setActiveCert(null)}
                  className="mt-12 px-8 py-4 border border-white/20 hover:border-[#C79A3B] text-white transition-all uppercase text-xs font-bold tracking-widest"
                >
                  Close Document
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}