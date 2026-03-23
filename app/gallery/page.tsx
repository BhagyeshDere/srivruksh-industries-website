"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { productGallery } from "@/data/productGallery"
import { ArrowUpRight, Search, Layers, Hammer, MousePointer2 } from "lucide-react"

export default function GalleryPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth scroll progress bar for the side
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main ref={containerRef} className="bg-[#f8fafc] min-h-screen overflow-hidden">
      
      {/* ================= STICKY PROGRESS INDICATOR ================= */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-slate-200 z-50 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#C79A3B] origin-top"
          style={{ scaleY }}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-tighter rotate-90">Start</div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-tighter rotate-90">End</div>
      </div>

      {/* ================= ULTRA-LARGE TYPOGRAPHIC HERO ================= */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[#0B2E5B]">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#white 1px, transparent 1px), linear-gradient(90deg, #white 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
          className="absolute top-0 right-0 pointer-events-none opacity-10 select-none"
        >
          <h1 className="text-[25vw] font-black text-white leading-none translate-x-1/4">PROD</h1>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="h-2 w-2 rounded-full bg-[#C79A3B] animate-pulse" />
              <span className="text-white uppercase tracking-[0.4em] text-[11px] font-black">Our Work</span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black text-white mb-8 leading-[0.8] tracking-tighter uppercase">
              PRODUCTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] via-[#e6c36a] to-[#C79A3B]">GALLERY</span>
            </h1>

            <p className="text-slate-300 max-w-2xl text-lg md:text-2xl font-medium leading-relaxed opacity-90 border-l-4 border-[#C79A3B] pl-8">
              Explore our industrial products engineered with precision, durability, and performance.
            </p>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 flex items-center gap-4 text-white/30 text-xs font-black uppercase tracking-[0.3em]"
            >
              <MousePointer2 size={16} /> Scroll To Explore
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CINEMATIC LARGE-SCALE SHOWCASE ================= */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-10 py-24 relative">
        <div className="space-y-32 md:space-y-64">
          {productGallery.map((item, index) => {
            return (
              <ProductRow key={index} item={item} index={index} />
            )
          })}
        </div>
      </section>

      {/* ================= REFINED LIGHT-THEME CTA SECTION ================= */}
      <section className="relative py-14 md:py-16 px-6 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#0B2E5B 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        >
          <Layers size={500} className="text-[#0B2E5B]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-white border border-slate-200 rounded-[1.2rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Hammer className="text-[#C79A3B]" size={30} />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#0B2E5B] mb-4 leading-tight tracking-tight uppercase italic">
              Need Custom <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#E6C36A]">Product?</span>
            </h2>

            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-xl mx-auto font-medium leading-relaxed">
              We manufacture as per your requirements and drawings. Experience elite industrial fabrication.
            </p>

            <div className="flex justify-center">
              <a href="/contact" className="group relative inline-flex items-center gap-4 bg-[#0B2E5B] px-8 md:px-10 py-3 md:py-4 rounded-full overflow-hidden shadow-lg transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 text-white font-semibold uppercase text-xs tracking-widest">Contact Us</span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-[#C79A3B] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
                <div className="absolute top-0 -inset-full h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-40 group-hover:animate-shine" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

/* HELPER COMPONENT FOR ANIMATED ROWS */
function ProductRow({ item, index }: { item: any; index: number }) {
  const rowRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={rowRef}
      style={{ opacity }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 md:gap-20 items-center`}
    >
      {/* IMAGE COLUMN */}
      <motion.div style={{ scale }} className="w-full lg:w-[70%] group relative">
        <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-white shadow-2xl border border-slate-100">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#0B2E5B 2px, transparent 2px)`, backgroundSize: '30px 30px' }} />

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-8 md:p-20 group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />

          <div className="absolute top-6 md:top-12 left-6 md:left-12 text-6xl md:text-9xl font-black text-[#0B2E5B]/5 select-none tracking-tighter">
            0{index + 1}
          </div>
          
          <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#0B2E5B] flex items-center justify-center rounded-tl-[2rem] md:rounded-tl-[4rem] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
             <Search size={32} className="text-white" />
          </div>
        </div>
      </motion.div>

      {/* INFO COLUMN */}
      <motion.div style={{ y }} className="w-full lg:w-[30%] space-y-4 md:space-y-8 text-center lg:text-left">
        <div className="space-y-2">
          <motion.span 
            initial={{ letterSpacing: "0.1em" }}
            whileInView={{ letterSpacing: "0.4em" }}
            className="text-[#C79A3B] font-black text-[10px] md:text-xs uppercase block"
          >
            Industrial Asset
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-black text-[#0B2E5B] leading-none uppercase tracking-tighter">
            {item.title}
          </h2>
        </div>
        
        <div className="h-[2px] w-24 bg-gradient-to-r from-[#C79A3B] to-transparent mx-auto lg:mx-0" />
        
        <div className="flex items-center justify-center lg:justify-start gap-4 text-[#0B2E5B]/40">
           <Layers size={18} />
           <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Premium Grade Material</span>
        </div>
      </motion.div>
    </motion.div>
  )
}