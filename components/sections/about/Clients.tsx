"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const clientData = [
  { name: "Wheels India", logo: "/images/clients/wheels.png" },
  { name: "Sany", logo: "/images/clients/sany.png" },
  { name: "VGuard", logo: "/images/clients/vguard.png" },
  { name: "Kirloskar", logo: "/images/clients/kirloskar.png" },
  { name: "Thermax", logo: "/images/clients/thermax.png" },
  { name: "Electronica", logo: "/images/clients/electronica.png" },
  { name: "Samved", logo: "/images/clients/samved.png" },
  { name: "Mechatronics", logo: "/images/clients/mechatronics.png" },
  { name: "Scorpius", logo: "/images/clients/scorpius.png" }
]

export default function ClientsMarquee() {
  // We triple the array to ensure there is never a white-space gap on ultra-wide screens
  const marqueeItems = [...clientData, ...clientData, ...clientData]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#C79A3B]" />
              <span className="text-[10px] font-bold text-[#C79A3B] uppercase tracking-[0.4em]">Partner Ecosystem</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B2E5B]">
              Trusted By <span className="text-slate-300">Global Giants</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs md:text-sm max-w-xs text-center md:text-right font-light">
            Providing precision engineering components for the world's leading industrial manufacturers.
          </p>
        </motion.div>
      </div>

      {/* THE MARQUEE TRACK */}
      <div className="relative group">
        {/* Advanced Edge Blur Mask */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden py-4">
          <motion.div 
            className="flex flex-nowrap gap-6 md:gap-10"
            animate={{ x: ["0%", "-33.33%"] }} // Only scroll 1/3 of the tripled array
            transition={{ 
              repeat: Infinity, 
              duration: 25, 
              ease: "linear" 
            }}
            // Pauses the animation when someone hovers over any card
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeItems.map((client, i) => (
              <div 
                key={`${client.name}-${i}`}
                className="group relative flex-shrink-0 w-[180px] md:w-[220px] h-[100px] bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center p-6 transition-all duration-500 hover:bg-white hover:border-[#C79A3B]/30 hover:shadow-xl hover:shadow-[#0B2E5B]/5"
              >
                {/* Background Pattern on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ backgroundImage: `radial-gradient(circle, #C79A3B 0.5px, transparent 0.5px)`, backgroundSize: '12px 12px' }} />

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Floating Name Label */}
                  <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:-bottom-1 text-[9px] font-bold text-[#C79A3B] uppercase tracking-tighter transition-all duration-300">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LOGISTICS COUNTER (Decorative) */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="h-px w-full bg-slate-100" />
        <div className="flex justify-between items-center py-6 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
           <span>Est. 2021</span>
           <span className="text-[#C79A3B]/50">•</span>
           <span>ISO Certified Facility</span>
           <span className="text-[#C79A3B]/50">•</span>
           <span>Pune, MH</span>
        </div>
      </div>
    </section>
  )
}