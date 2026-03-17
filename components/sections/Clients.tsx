"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { clients } from "@/data/clients"
import { motion } from "framer-motion"

export default function Clients() {
  // Linear smooth scroll configuration
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      dragFree: true 
    },
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: 0.7, 
        stopOnInteraction: false,
        stopOnMouseEnter: true 
      })
    ]
  )

  return (
    <motion.section
      className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* BACKGROUND TEXT WATERMARK */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
        <h2 className="text-[18vw] font-black leading-none text-[#0B2E5B] tracking-tighter">PARTNERS</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 mb-6 px-4 py-1 rounded-full bg-[#0B2E5B]/5 border border-[#0B2E5B]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[10px] font-bold text-[#0B2E5B] uppercase tracking-[0.3em]">Corporate Network</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-[#0B2E5B] mb-6 tracking-tight">
            INDUSTRY <span className="text-slate-400 font-light">ALLIANCES</span>
          </h2>
          
          <p className="text-slate-500 max-w-2xl text-sm md:text-lg font-light leading-relaxed">
            From heavy fabrication to precision automation, Srivruksh Industries is 
            the <span className="text-[#0B2E5B] font-semibold underline decoration-[#C79A3B]/30 underline-offset-4">preferred partner</span> for India's leading engineering firms.
          </p>
        </div>

        {/* CAROUSEL HUB */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {[...clients, ...clients].map((client, index) => {
                const imagePath = client.logo.startsWith('/images') ? client.logo : `/images${client.logo}`;

                return (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-[0_0_65%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_22%] pl-4 py-10"
                  >
                    <motion.div
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 20px 40px -15px rgba(11, 46, 91, 0.1)"
                      }}
                      className="relative bg-white rounded-2xl border border-slate-200 p-8 h-[140px] md:h-[160px] flex items-center justify-center transition-all duration-500 group/card hover:border-[#C79A3B]/40"
                    >
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-100 group-hover/card:border-[#C79A3B] transition-colors" />
                      
                      <div className="relative w-full h-full">
                        <Image
                          src={imagePath}
                          alt={client.name}
                          fill
                          className="object-contain opacity-100 transition-all duration-700 ease-in-out"
                        />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* STATS STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-20 border-t border-slate-200 pt-16"
        >
          <div className="text-center">
            <h4 className="text-3xl font-black text-[#0B2E5B]">99.8%</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Quality Assurance</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-slate-200" />
          <div className="text-center">
            <h4 className="text-3xl font-black text-[#0B2E5B]">500+</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Projects Delivered</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-slate-200" />
          <div className="text-center">
            <h4 className="text-3xl font-black text-[#0B2E5B]">15+</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Global Clients</p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}