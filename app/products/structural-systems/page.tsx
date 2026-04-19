"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Settings2, Activity, ShieldCheck, Construction, Zap, Ruler } from "lucide-react"
import { products } from "@/data/products"

export default function StructuralSystemsPage() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const generated = [...Array(12)].map((_, i) => ({
      id: i,
      width: Math.random() * 80 + 20,
      height: Math.random() * 80 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 12 + Math.random() * 8,
      rotate: Math.random() * 360,
    }))
    setParticles(generated)
  }, [])

  const filteredProducts = products.filter(
    (p) => p.category === "Structural Systems"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">
      
      {/* ================= HERO SECTION (EDITORIAL TECH STYLE) ================= */}
      <section className="relative bg-[#0f172a] py-16 sm:py-24 md:py-32 px-6 overflow-hidden">
        
        {/* Dynamic Engineering Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              initial={{ rotate: -45, x: "-100%", y: "-100%" }}
              animate={{ x: "100%", y: "100%" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2.5,
                ease: "linear",
              }}
              className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/30 to-transparent"
              style={{ top: `${i * 25}%` }}
            />
          ))}

          {particles.map((p) => (
            <motion.div
              key={`orbit-${p.id}`}
              className="absolute border border-[#C79A3B]/10 rounded-xl"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                top: p.top,
              }}
              animate={{
                rotate: [p.rotate, p.rotate + 360],
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Massive Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none text-center">
          <h2 className="text-[25vw] font-black tracking-tighter leading-none text-[#C79A3B] uppercase">
            Skeleton
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C79A3B]/40 bg-[#C79A3B]/5 backdrop-blur-md mb-8"
          >
            <Construction size={14} className="text-[#C79A3B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C79A3B]">
              Heavy Engineering Foundations
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6"
          >
            Structural <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] via-[#eec674] to-[#C79A3B]">
              Systems
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 max-w-2xl text-base md:text-lg lg:text-xl font-light px-4 leading-relaxed"
          >
            Precision-engineered industrial skeletons, platforms, and mezzanine 
            solutions designed for high load-bearing capacity and architectural integrity.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID (TWO-COLUMN EDITORIAL) ================= */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] transition-all duration-700"
                >
                  {/* Subtle Blueprint Interaction Background */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0f172a 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} 
                  />

                  {/* Metadata Floating Header */}
                  <div className="absolute top-8 left-10 right-10 flex justify-between items-center z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C79A3B] shadow-[0_0_10px_rgba(199,154,59,0.8)]" />
                      <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                        REF: SS-{700 + index}
                      </span>
                    </div>
                    <Ruler size={16} className="text-slate-200 group-hover:text-[#C79A3B] transition-colors duration-500" />
                  </div>

                  {/* Product Image Container */}
                  <div className="relative h-[300px] sm:h-[350px] w-full mt-12 px-10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                  </div>

                  {/* Content / Typography Section */}
                  <div className="p-10 bg-gradient-to-t from-slate-50/80 to-transparent relative border-t border-slate-50 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-bold text-[10px] uppercase tracking-[0.3em]">
                        Engineering Grade: MS/SS
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5 tracking-tight uppercase leading-[0.95]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-10 leading-relaxed font-medium text-sm sm:text-base line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    {/* Footer Action Bar */}
                    <div className="mt-auto pt-8 border-t border-slate-200/50 flex items-center justify-between">
                      <a
                        href={`/products/structural-systems/${item.slug}`}
                        className="group/btn relative inline-flex items-center gap-5 bg-slate-900 text-white px-8 py-4 rounded-xl overflow-hidden shadow-xl transition-all duration-300 active:scale-95"
                      >
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-widest">View Details</span>
                        <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform" />
                        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>

                      <div className="flex flex-col items-end group-hover:opacity-100 transition-opacity">
                         <div className="flex gap-1 mb-1">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-[#C79A3B]" />
                            ))}
                         </div>
                         <span className="text-[7px] font-black text-slate-400 tracking-[0.2em] uppercase">Rigidity Verified</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER WATERMARK ACCENT */}
      <section className="py-24 bg-slate-50 flex items-center justify-center overflow-hidden">
        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 0.05, letterSpacing: "2em" }}
          className="text-8xl md:text-[14rem] font-black text-slate-900 uppercase pointer-events-none whitespace-nowrap"
        >
          FOUNDATION
        </motion.p>
      </section>

    </main>
  )
}