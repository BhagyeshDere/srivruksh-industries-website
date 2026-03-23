"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ZoomIn, Award, ShieldCheck, Zap } from "lucide-react"

const certificates = [
  {
    title: "Startup India",
    subtitle: "DPIIT Recognized",
    image: "/images/certificates/cert5.png",
    desc: "Officially recognized as a startup by the Department for Promotion of Industry and Internal Trade, Government of India, incorporated in 2022 for innovation in the Automotive industry."
  },
  
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
    /* REDUCED PADDING: Changed from py-20/24/32 to py-12/16/20 */
    <section className="relative bg-[#020617] py-12 sm:py-16 md:py-20 overflow-hidden">
      
      {/* ================= ADVANCED BACKGROUND LAYER ================= */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.02] whitespace-nowrap">
        <motion.p 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="text-[10rem] md:text-[20rem] font-black text-white leading-none tracking-tighter"
        >
          PRECISION • COMPLIANCE • QUALITY • STANDARDS • EXCELLENCE • SAFETY • 
        </motion.p>
      </div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C79A3B]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B2E5B]/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER SECTION - REDUCED MARGIN BOTTOM */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[1px] w-12 bg-[#C79A3B]" />
              <span className="text-[#C79A3B] text-xs font-black uppercase tracking-[0.4em]">
                Quality Verified
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              Commitment to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
                World-Class Quality
              </span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed border-l border-white/10 pl-6">
            Ensuring every component we fabricate meets elite industrial benchmarks and strict global certifications.
          </p>
        </div>

        {/* INFINITE CAROUSEL - TIGHTER PADDING */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-6 py-6"
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div 
                  key={i}
                  className="w-[260px] sm:w-[320px] md:w-[400px] flex-shrink-0 cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group bg-gradient-to-b from-slate-800/50 to-slate-900/80 rounded-[1.5rem] p-4 border border-white/5 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] bg-white rounded-xl overflow-hidden group-hover:shadow-[0_0_40px_rgba(199,154,59,0.15)] transition-shadow duration-500">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-6 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      
                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="w-12 h-12 rounded-full bg-[#C79A3B] flex items-center justify-center shadow-xl"
                        >
                          <ZoomIn className="text-white w-6 h-6" />
                        </motion.div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between items-end">
                      <div>
                        <span className="text-[#C79A3B] font-mono text-[9px] tracking-widest uppercase font-bold block mb-1">
                          {cert.subtitle}
                        </span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Zap className="text-white/20 w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 p-3 opacity-10">
                      <Award size={48} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN DOCUMENT MODAL ================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020617]/98 backdrop-blur-3xl flex items-center justify-center z-[100] p-6"
          >
            <button 
              onClick={() => setActiveCert(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={24} />
            </button>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl w-full items-center">
              <motion.div 
                initial={{ scale: 0.8, rotateY: 20, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                className="relative aspect-[3/4] bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] perspective-1000"
              >
                <Image
                  src={activeCert.image}
                  alt="Certified Document"
                  fill
                  className="object-contain p-10"
                />
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ShieldCheck className="text-[#C79A3B] mb-6" size={48} />
                  <span className="text-[#C79A3B] font-mono text-sm tracking-[0.5em] uppercase font-black block mb-4">
                    Official Verification
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-6">
                    {activeCert.title}
                  </h2>
                  <div className="w-20 h-1.5 bg-[#C79A3B] mb-8 rounded-full" />
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light mb-10">
                    {activeCert.desc}
                  </p>
                  
                  <button 
                    onClick={() => setActiveCert(null)}
                    className="group relative px-10 py-4 bg-[#C79A3B] text-white font-black uppercase text-xs tracking-widest rounded-full overflow-hidden transition-all"
                  >
                    <span className="relative z-10">Return to Gallery</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}