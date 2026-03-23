"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Box, Layers, Settings, Shield, Cpu, ChevronRight } from "lucide-react"
import { useState } from "react"
import { products } from "@/data/products"

export default function ProductsPage() {
  const categories = [
    "All",
    "Material Handling",
    "Process Equipment",
    "Fabrication",
    "Infrastructure"
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main className="bg-[#f8fafc] overflow-hidden">
   {/* ================= ULTRA-LARGE TYPOGRAPHIC HERO (NO IMAGE) ================= */}
<section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-[#0B2E5B]">
  {/* Layered Background Motion Decor */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.03, 0.05, 0.03] 
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <h1 className="text-[30vw] font-black text-white leading-none select-none tracking-tighter uppercase">
        SRIVRUKSH
      </h1>
    </motion.div>
    
    {/* Geometric Accents */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C79A3B]/10 to-transparent" />
    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#C79A3B]/20 rounded-full blur-[120px]" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto w-full">
    <div className="grid lg:grid-cols-12 gap-12 items-center">
      
      {/* Primary Content (Left/Top) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-8"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
          <span className="h-2 w-2 rounded-full bg-[#C79A3B] animate-pulse" />
          <span className="text-white uppercase tracking-[0.3em] text-[11px] font-black">
            Industrial Catalog 2026
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black text-white mb-8 leading-[0.8] tracking-tighter">
          PRODUCT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] via-[#e6c36a] to-[#C79A3B]">
            RANGE
          </span>
        </h1>

        <p className="text-slate-300 max-w-2xl text-lg md:text-2xl font-medium leading-relaxed opacity-90 border-l-4 border-[#C79A3B] pl-8">
          Precision-engineered industrial solutions built for performance,
          durability, and reliability. Explore our elite fabrication standards.
        </p>
      </motion.div>

      {/* Advanced Data Visual / Feature Grid (Replaces Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-4"
      >
        {[
          { label: "Precision", val: "100%", icon: <Shield size={20} /> },
          { label: "Framework", val: "v2.6", icon: <Cpu size={20} /> },
          { label: "Fabrication", val: "Elite", icon: <Layers size={20} /> },
          { label: "Status", val: "Active", icon: <Box size={20} /> }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col justify-between h-40 group hover:bg-[#C79A3B] transition-all duration-500">
            <div className="text-[#C79A3B] group-hover:text-white transition-colors">
              {stat.icon}
            </div>
            <div>
              <div className="text-white text-2xl font-black mb-1">{stat.val}</div>
              <div className="text-white/40 group-hover:text-white/70 uppercase text-[10px] font-black tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  </div>

  {/* Bottom Branding Bar */}
  <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-white/2px backdrop-blur-sm py-8 px-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex gap-12 opacity-30">
        <span className="text-white text-xs font-black tracking-[0.2em] uppercase hidden sm:block">Structural Integrity</span>
        <span className="text-white text-xs font-black tracking-[0.2em] uppercase hidden sm:block">Advanced Engineering</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[#C79A3B] font-black italic">S-I</span>
        <div className="w-12 h-[1px] bg-[#C79A3B]" />
      </div>
    </div>
  </div>
</section>

      {/* ================= STICKY ADVANCED FILTER ================= */}
      <section className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max py-6 gap-8">
             <div className="flex gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500
                    ${activeCategory === cat 
                      ? "text-white" 
                      : "text-slate-400 hover:text-[#0B2E5B] bg-slate-50 hover:bg-slate-100"}`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTabLarge"
                      className="absolute inset-0 bg-[#0B2E5B] rounded-2xl shadow-xl shadow-[#0B2E5B]/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="hidden md:block text-[#0B2E5B]/30 font-black text-sm tracking-widest uppercase">
              Total Products: {filteredProducts.length}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LARGE-IMAGE DYNAMIC GRID ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative flex flex-col h-full bg-white rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.15)] transition-all duration-700">
                    
                    {/* ENLARGED IMAGE SECTION */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-12 group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      
                      {/* Industrial Overlay Elements */}
                      <div className="absolute top-8 left-8 flex gap-2 z-20">
                        <span className="px-5 py-2 bg-[#0B2E5B] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                          {item.category}
                        </span>
                        <span className="px-5 py-2 bg-white/90 backdrop-blur shadow-sm text-[#0B2E5B] text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100">
                          Ref: 2026-I
                        </span>
                      </div>

                      {/* Hover Action Layer */}
                      <div className="absolute inset-0 bg-[#0B2E5B]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                         <div className="text-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                           <Box size={64} className="text-[#C79A3B] mx-auto mb-4" />
                           <p className="text-white text-sm font-black tracking-widest uppercase">View Configuration</p>
                         </div>
                      </div>
                    </div>

                    {/* CONTENT SECTION - ENLARGED */}
                    <div className="p-12 md:p-16 flex flex-col flex-grow bg-white relative">
                      {/* Decorative Line */}
                      <div className="w-20 h-1.5 bg-[#C79A3B] mb-8 rounded-full" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-4xl font-black text-[#0B2E5B] leading-[0.9] tracking-tighter uppercase">
                          {item.title}
                        </h3>
                        <Shield size={28} className="text-[#C79A3B] opacity-20 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>

                      <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mb-12">
                        {item.description}
                      </p>

                      <div className="mt-auto">
                        <a
                          href={`/contact?product=${encodeURIComponent(item.title)}`}
                          className="inline-flex items-center gap-6 group/btn"
                        >
                          <div className="relative flex items-center justify-center w-16 h-16 rounded-[2rem] bg-[#0B2E5B] group-hover/btn:bg-[#C79A3B] transition-all duration-500 shadow-xl shadow-[#0B2E5B]/20">
                            <ArrowRight size={24} className="text-white" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Next Step</span>
                            <span className="text-sm font-black uppercase tracking-[0.1em] text-[#0B2E5B]">Enquiry Now</span>
                          </div>
                        </a>
                      </div>

                      {/* Background Watermark */}
                      <div className="absolute bottom-0 right-10 pointer-events-none opacity-[0.03] text-[120px] font-black select-none translate-y-10">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="py-48 text-center"
            >
              <Settings className="text-slate-200 animate-spin-slow mx-auto mb-8" size={80} />
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-lg">
                No components available
              </p>
            </motion.div>
          )}
        </div>
      </section>

      
     {/* ================= PREMIUM CTA SECTION ================= */}
<section className="relative py-16 md:py-20 px-6 overflow-hidden">

  {/* Light Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2f7]" />

  {/* Soft Pattern */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "linear-gradient(45deg, #C79A3B 25%, transparent 25%, transparent 50%, #C79A3B 50%, #C79A3B 75%, transparent 75%, transparent)",
      backgroundSize: "80px 80px",
    }}
  />

  <div className="relative z-10 max-w-5xl mx-auto">
    <div className="flex flex-col items-center text-center">

      {/* ICON */}
      <motion.div
        whileInView={{ rotate: 360 }}
        transition={{ duration: 2, ease: "anticipate" }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#0B2E5B]/5 border border-[#0B2E5B]/10 flex items-center justify-center mb-6"
      >
        <Layers className="text-[#C79A3B]" size={26} />
      </motion.div>

      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] mb-5 leading-tight tracking-tight uppercase">
        Need Custom <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2E5B] to-[#C79A3B]">
          Fabrication?
        </span>
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-600 text-sm md:text-base mb-8 max-w-xl font-medium">
        We design and manufacture high-quality industrial solutions tailored 
        precisely to your project requirements.
      </p>

      {/* BUTTON */}
      <a
        href="/contact"
        className="group relative overflow-hidden bg-[#0B2E5B] px-8 md:px-12 py-3 md:py-4 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 active:scale-95"
      >
        <div className="relative z-10 flex items-center gap-2">
          <span className="text-white font-semibold uppercase text-xs md:text-sm tracking-widest">
            Request a Quote
          </span>
          <ChevronRight className="text-[#C79A3B] group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </a>

    </div>
  </div>
</section>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </main>
  )
}