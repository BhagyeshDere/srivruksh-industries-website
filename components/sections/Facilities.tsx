"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Cpu, ChevronRight } from "lucide-react"

export default function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      title: "CNC Profile Cutting Machine",
      image: "/images/facilities/cnc-cutting.jpg",
      desc: "High precision cutting from 3mm to 150mm thickness."
    },
    {
      title: "CNC Turning Machine",
      image: "/images/facilities/cnc-turning.jpg",
      desc: "Powerful CNC turning for industrial accuracy."
    },
    {
      title: "Universal Milling Machine",
      image: "/images/facilities/milling.jpg",
      desc: "Advanced milling for complex machining."
    },
    {
      title: "Tapping Machine",
      image: "/images/facilities/tapping.jpg",
      desc: "Precision tapping from M3 to M30."
    },
    {
      title: "VMC Machine",
      image: "/images/facilities/vmc.jpg",
      desc: "High accuracy vertical machining center."
    },
    {
      title: "Fabrication Facility",
      image: "/images/facilities/fabrication.jpg",
      desc: "Complete welding & fabrication solutions."
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-[#fcfcfc] overflow-hidden">
      
      {/* INDUSTRIAL GRID DECORATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#0B2E5B 1px, transparent 1px), linear-gradient(90deg, #0B2E5B 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADING SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
                Production Facilities
              </p>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#0B2E5B] tracking-tighter leading-[0.9]">
              MODERN <br />
              <span className="text-slate-300 italic">INFRASTRUCTURE</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed border-l-2 border-slate-100 pl-6 font-medium"
          >
            Explore our advanced machinery designed for precision,
            efficiency, and industrial excellence.
          </motion.p>
        </div>
      </div>

      {/* HORIZONTAL SCROLL HUB */}
      <div
        ref={scrollRef}
        className="flex gap-6 md:gap-10 overflow-x-auto px-6 md:px-[8vw] pb-12 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {facilities.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[85vw] md:min-w-[480px] snap-center group"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* CARD CONTAINER */}
            <div className="relative h-[450px] md:h-[580px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#0B2E5B]/20">
              
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B] via-[#0B2E5B]/20 to-transparent opacity-90 transition-opacity" />

              {/* TOP TAG */}
              <div className="absolute top-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-[#C79A3B]" />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">Industrial Grade</span>
                </div>
              </div>

              {/* CONTENT PANEL - ALIGNED IN ONE FLOW */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-14">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#C79A3B] font-mono text-sm font-bold tracking-tighter">
                      FACILITY_0{index + 1}
                    </span>
                    <div className="h-px w-8 bg-[#C79A3B]/30" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight uppercase">
                    {item.title}
                  </h3>

                  <div className="h-px w-full bg-white/10 my-4 group-hover:bg-[#C79A3B]/50 transition-colors" />

                  <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-xs group-hover:text-white transition-colors">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-[#C79A3B] text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>Technical Specs</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL HINT */}
      <div className="flex items-center justify-center gap-6 text-slate-300 mt-2">
        <motion.div 
          animate={{ width: [20, 40, 20] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-px bg-slate-200" 
        />
        <span className="text-[9px] font-black uppercase tracking-[0.5em] select-none text-slate-400">
          Swipe to Navigate
        </span>
        <motion.div 
          animate={{ width: [20, 40, 20] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-px bg-slate-200" 
        />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  )
}