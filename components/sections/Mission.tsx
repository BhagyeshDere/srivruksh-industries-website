"use client"

import { motion } from "framer-motion"
import { Handshake, Settings, Rocket, ChevronRight } from "lucide-react"

export default function Mission() {
  const missions = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Commitment",
      text: "Providing long-term commitment and reliable engineering support to all our customers.",
      color: "#0B2E5B"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Engineering Excellence",
      text: "Combining technical knowledge with the highest standards of manufacturing practices.",
      color: "#C79A3B"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation & Growth",
      text: "Achieving the highest level of innovation, skill and competence in engineering solutions.",
      color: "#0B2E5B"
    }
  ]

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 border-[40px] border-[#0B2E5B] rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 border-[20px] border-[#C79A3B] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-[#C79A3B] uppercase mb-4 block">
              Our Visionary Path
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0B2E5B] leading-[0.9] tracking-tighter">
              WORKING <br /> TOGETHER <span className="text-transparent stroke-text">SUCCESSFULLY</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg max-w-sm font-medium leading-relaxed border-l-2 border-[#C79A3B] pl-6"
          >
            Maintaining the highest standards of quality, integrity and customer satisfaction.
          </motion.p>
        </div>

        {/* --- MISSION FLOW UI --- */}
        <div className="relative">
          
          {/* Connecting SVG Path (Desktop Only) */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-24 z-0" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M 100 50 Q 300 100 600 50 T 1100 50"
              stroke="#0B2E5B"
              strokeWidth="1"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
            {missions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Large Background Number */}
                <span className="absolute -top-10 -left-4 text-9xl font-black text-slate-100/50 group-hover:text-[#C79A3B]/10 transition-colors duration-500 select-none">
                  0{index + 1}
                </span>

                <div className="relative pt-8">
                  {/* Icon Node */}
                  <div className="w-20 h-20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl flex items-center justify-center text-[#0B2E5B] mb-8 group-hover:bg-[#0B2E5B] group-hover:text-white transition-all duration-500 group-hover:-translate-y-3">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-black text-[#0B2E5B] mb-4 tracking-tight flex items-center gap-2">
                    {item.title}
                    <ChevronRight className="w-5 h-5 text-[#C79A3B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {item.text}
                  </p>

                  {/* Animated Accent Line */}
                  <div className="mt-8 h-[1px] w-full bg-slate-100 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 bg-[#C79A3B]"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #0B2E5B;
        }
      `}</style>
    </section>
  )
}