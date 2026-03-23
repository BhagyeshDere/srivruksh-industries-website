"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Settings, Factory, ShieldCheck, ArrowRight } from "lucide-react"

export default function WhyChoose() {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Advanced Manufacturing",
      text: "Equipped with modern machines and precision tools to deliver high quality engineering solutions."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial Expertise",
      text: "Extensive experience in fabrication, automation and industrial engineering solutions."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality & Reliability",
      text: "Committed to delivering reliable products and services with the highest quality standards."
    }
  ]

  return (
    <motion.section
      className="relative py-24 md:py-32 w-full overflow-hidden bg-[#0a1e3b]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Image - Increased opacity for more color depth */}
      <Image
        src="/images/assets/why.png"
        alt="Industrial Manufacturing"
        fill
        priority
        className="object-cover opacity-80"
      />

      {/* --- REDUCED BLUE GRADIENT --- */}
      {/* Lightened the 'from' opacity to 40% and adjusted 'via' to let natural colors pop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E5B]/40 via-[#0B2E5B]/60 to-[#0B2E5B]/20" />
      
      {/* Subtle white-to-transparent overlay to brighten the center and reduce the 'blue box' feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

      {/* Radial accent - remains gold for warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C79A3B]/15 via-transparent to-transparent" />

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute -top-24 -left-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#C79A3B]/10 rounded-full blur-[100px] md:blur-[120px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        
        {/* --- HEADING SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.5em] font-black text-[10px] md:text-xs">
                Why Choose Us
              </p>
            </div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter drop-shadow-lg">
              WHY CHOOSE <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 italic">
                Srivruksh Industries
              </span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-white text-base md:text-lg font-medium leading-relaxed border-l border-[#C79A3B] pl-8 italic drop-shadow-md"
          >
            We combine engineering expertise with modern manufacturing
            facilities to deliver reliable, high-performance industrial
            solutions tailored to client requirements.
          </motion.p>
        </div>

        {/* --- FEATURE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full relative overflow-hidden bg-white/[0.08] backdrop-blur-xl p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/20 transition-all duration-500 hover:bg-white/[0.12] hover:border-[#C79A3B]/40 group-hover:-translate-y-3 shadow-2xl">
                
                <span className="absolute -top-4 -right-4 text-8xl md:text-9xl font-black text-white/[0.03] group-hover:text-[#C79A3B]/10 transition-colors duration-500 select-none">
                  0{index + 1}
                </span>

                <div className="relative mb-8 md:mb-10 w-14 md:w-16 h-14 md:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#C79A3B] to-[#e0b85d] text-[#0B2E5B] shadow-[0_0_30px_rgba(199,154,59,0.3)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tight group-hover:text-[#C79A3B] transition-colors">
                  {item.title}
                </h3>
                
                <div className="relative w-12 h-[3px] bg-[#C79A3B] mb-6 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                </div>

                <p className="text-slate-100 text-sm md:text-base leading-relaxed font-normal group-hover:text-white transition-colors">
                  {item.text}
                </p>

                <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-6 h-6 text-[#C79A3B]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CTA --- */}
        <motion.div
          className="flex justify-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}</style>
    </motion.section>
  )
}