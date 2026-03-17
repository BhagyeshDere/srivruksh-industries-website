"use client"

import { motion } from "framer-motion"
import { Eye, Target, CheckCircle2, ArrowUpRight } from "lucide-react"

const data = [
  {
    title: "Vision",
    icon: <Eye className="w-6 h-6" />,
    desc: "To be a globally recognized engineering powerhouse, pioneering sustainable automation and high-performance industrial solutions that shape the future.",
    points: [
      "Global Engineering Excellence",
      "Innovation-First DNA",
      "Sustainable Industrial Scaling"
    ],
    color: "from-[#C79A3B] to-[#EBC16D]"
  },
  {
    title: "Mission",
    icon: <Target className="w-6 h-6" />,
    desc: "Delivering precision-engineered fabrication and automation with a focus on reliability, safety, and absolute customer satisfaction.",
    points: [
      "Human-Centric Engineering",
      "Micro-Precision Manufacturing",
      "Continuous Evolution Loop"
    ],
    color: "from-blue-400 to-cyan-300"
  }
]

export default function VisionMission() {
  return (
    <section className="relative py-24 md:py-32 bg-[#061427] overflow-hidden">
      {/* 1. Advanced Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C79A3B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-[#C79A3B]" />
              <span className="text-[#C79A3B] text-xs font-bold tracking-[0.4em] uppercase">The Srivruksh Way</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Our Compass for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-white">
                Industrial Leadership
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-sm leading-relaxed border-l border-white/10 pl-8 hidden lg:block">
            Engineering solutions isn't just our job—it's a commitment to the precision that moves the world.
          </p>
        </div>

        {/* ================= INTERACTIVE CARDS ================= */}
        <div className="grid lg:grid-cols-2 gap-12 relative">
          
          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Massive Watermark Text */}
              <span className="absolute -top-12 -left-4 text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-all duration-700">
                {item.title.toUpperCase()}
              </span>

              <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#061427] rounded-2xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#C79A3B] transition-colors" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6">Our {item.title}</h3>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10 min-h-[100px]">
                  {item.desc}
                </p>

                {/* Animated List Points */}
                <div className="grid gap-4">
                  {item.points.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C79A3B]/10 flex items-center justify-center border border-[#C79A3B]/20">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C79A3B]" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base font-medium group-hover/item:text-white transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Shine Effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 3. Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#061427] to-transparent pointer-events-none" />
    </section>
  )
}