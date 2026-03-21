"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Services() {
  const containerRef = useRef(null)

  return (
    <motion.section
      ref={containerRef}
      className="bg-gradient-to-b from-gray-100 to-white py-24 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C79A3B] uppercase tracking-[0.3em] font-bold text-xs md:text-sm mb-4">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0B2E5B] mb-6 tracking-tight leading-[1.1]">
            Engineering & <br className="hidden md:block" /> Manufacturing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium opacity-80">
            Advanced industrial services including automation, fabrication, 
            and precision machining tailored to global standards.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="relative flex flex-col items-center">
        {services.map((service, index) => {
          return (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              total={services.length} 
            />
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-12 md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-4 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-10 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span className="tracking-wide">Explore All Services</span>
          <span className="text-xl">→</span>
        </Link>
      </motion.div>
    </motion.section>
  )
}

// SUB COMPONENT

function ServiceCard({ service, index, total }: { service: any, index: number, total: number }) {
  const cardRef = useRef(null)
  const isLeft = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.02])

  return (
    <div 
      ref={cardRef} 
      className={`sticky top-20 md:top-28 w-full flex justify-center 
      ${index === total - 1 ? "mb-0" : "mb-16 md:mb-20"}`}
      style={{ height: "auto" }}
    >
      <motion.div
        style={{ scale }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full group"
      >
        {/* REDUCED HEIGHT: Changed from h-[450/550/650] to h-[350/450/550] */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full px-4 md:px-12">
          <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl bg-[#0B2E5B] border border-white/10">
            
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority={index < 2}
              className="object-cover opacity-60 group-hover:scale-105 transition duration-[2s] ease-out"
            />

            {/* BLUE GRADIENT OVERLAY */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${
              isLeft
                ? "bg-gradient-to-r from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent"
                : "bg-gradient-to-l from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent"
            }`} />

            <div className={`absolute inset-0 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
              <div className="max-w-7xl w-full px-8 md:px-20">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`max-w-lg md:max-w-2xl text-white ${isLeft ? "" : "ml-auto text-right"}`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${isLeft ? "" : "justify-end"}`}>
                    <span className="text-[#C79A3B] font-mono text-base md:text-lg font-bold tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-px bg-[#C79A3B]/40" />
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-[0.95] tracking-tighter uppercase">
                    {service.title}
                  </h3>

                  <div className={`w-16 h-1.5 bg-[#C79A3B] mb-6 ${isLeft ? "" : "ml-auto"}`} />

                  <p className="text-gray-100 mb-8 leading-relaxed text-base md:text-xl font-light opacity-90 max-w-md md:max-w-xl inline-block">
                    Precision-driven engineering solutions utilizing state-of-the-art 
                    manufacturing workflows and expert craftsmanship.
                  </p>
                  
                  <div className={`flex ${isLeft ? "" : "justify-end"}`}>
                     <div className="group/btn inline-flex items-center gap-3 text-[#C79A3B] uppercase tracking-[0.2em] text-[10px] md:text-xs font-black transition-all cursor-pointer">
                        <span className="border-b-2 border-transparent group-hover/btn:border-[#C79A3B] pb-1 transition-all">Explore Specifications</span>
                        <span className="group-hover/btn:translate-x-2 transition-transform duration-300 text-lg">→</span>
                     </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}