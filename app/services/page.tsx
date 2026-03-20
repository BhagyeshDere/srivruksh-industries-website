"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Cog, ShieldCheck, Cpu, ArrowRight, Hexagon } from "lucide-react"

const services = [
  {
    title: "Industrial Automation & SPM",
    desc: "We specialize in the design and manufacture of high-performance custom industrial automation systems and Special Purpose Machines (SPM). Our solutions are engineered to integrate seamlessly into existing workflows, drastically improving cycle times, reducing human error, and ensuring 100% precision in repetitive manufacturing tasks.",
    image: "/images/services/automation.jpg",
    icon: <Cpu size={24} />,
    id: "REF-001"
  },
  {
    title: "MS & SS Fabrication",
    desc: "Our fabrication wing delivers heavy-duty Mild Steel (MS) and Stainless Steel (SS) structures with a focus on longevity and structural integrity. From precision-engineered canal gates to complex industrial frameworks, we utilize advanced TIG/MIG welding techniques and corrosion-resistant treatments to meet global safety standards.",
    image: "/images/services/fabrication.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-002"
  },
  {
    title: "Heavy & Pipeline Fabrication",
    desc: "Handling large-scale industrial fluid and gas transport requires robust pipeline engineering. We provide end-to-end pipeline fabrication, including high-pressure testing and heavy structural support, ensuring leak-proof operations for chemical, cement, and distillery plants.",
    image: "/images/services/pipeline.jpg",
    icon: <Cog size={24} />,
    id: "REF-003"
  },
  {
    title: "Industrial Structure & Plant Erection",
    desc: "Complete turnkey solutions for industrial facility setup. We manage everything from the initial structural skeleton fabrication to the precise erection and alignment of heavy plant machinery, ensuring your facility is operational with minimal downtime and maximum safety compliance.",
    image: "/images/services/industrialstructure.jpg",
    icon: <Hexagon size={24} />,
    id: "REF-004"
  },
  {
    title: "Precision Machining & Tool Room",
    desc: "Utilizing state-of-the-art CNC and VMC technology, our tool room produces high-tolerance machine components as per intricate technical drawings. We maintain strict quality control to ensure every micron-level detail is achieved for critical industrial spares.",
    image: "/images/services/machining.jpg",
    icon: <Cpu size={24} />,
    id: "REF-005"
  },
  {
    title: "Compressor Sales & Service",
    desc: "Reliable air power is the heart of many factories. We offer a curated range of high-efficiency industrial compressors alongside a specialized service team capable of onsite maintenance and rapid component replacement to keep your pneumatic systems running.",
    image: "/images/services/compressive.jpg",
    icon: <Cog size={24} />,
    id: "REF-006"
  },
  {
    title: "Machine Maintenance & Reconditioning",
    desc: "Don't let aging machinery slow down production. Our reconditioning experts tear down, clean, repair, and upgrade older equipment to modern standards, extending the life of your capital assets and improving overall equipment effectiveness (OEE).",
    image: "/images/services/maintenance.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-007"
  },
  {
    title: "Installation & Commissioning",
    desc: "The final step to success. Our engineers manage the end-to-end commissioning process, performing load tests, safety calibrations, and operator training to ensure your new equipment performs exactly as specified in the design phase.",
    image: "/images/services/installation.jpg",
    icon: <ArrowRight size={24} />,
    id: "REF-008"
  },
  {
    title: "Fire Line Systems",
    desc: "Safety is non-negotiable. We design and install high-pressure fire line systems and industrial safety networks tailored to your specific plant layout, meeting all local regulatory requirements and insurance safety benchmarks.",
    image: "/images/services/fireline.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-009"
  },
  {
    title: "Industrial Chimney & Tanks",
    desc: "Specialized MS & SS fabrication of exhaust chimneys and chemical storage tanks. Every unit is engineered for thermal expansion, environmental compliance, and pressure-vessel integrity to withstand harsh industrial atmospheres.",
    image: "/images/services/tanks.jpg",
    icon: <Hexagon size={24} />,
    id: "REF-010"
  },
  {
    title: "Boiler Equipment",
    desc: "Manufacturing and critical servicing of industrial boiler components. Our team handles high-temperature structural work and heat exchanger maintenance to ensure maximum thermal efficiency and safe operating pressures.",
    image: "/images/services/boiler.jpg",
    icon: <Cog size={24} />,
    id: "REF-011"
  },
  {
    title: "Heavy Structural Components",
    desc: "Precision components designed for sugar mills, cement plants, and chemical distilleries. We focus on high-load bearing structures and windmill industry components that require extreme mechanical strength and precision alignment.",
    image: "/images/services/heavystrcture.jpg",
    icon: <Cpu size={24} />,
    id: "REF-012"
  }
]

export default function ServicesPage() {
  return (
    <section className="bg-[#f8fafc] text-[#0f172a]">
   {/* ================= HEADER (LIGHT VERSION) ================= */}
<div className="relative py-24 md:py-32 lg:py-36 px-6 overflow-hidden bg-[#f8fafc]">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/5 via-white to-[#0B2E5B]/5" />

  {/* Gold Glow */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#C79A3B]/10 blur-[120px] rounded-full" />

  {/* Subtle Blue Glow */}
  <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#0B2E5B]/10 blur-[120px] rounded-full" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `radial-gradient(#C79A3B 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    }}
  />

  {/* Content */}
  <div className="max-w-7xl mx-auto relative z-10 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >

      {/* Tag */}
      <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-gray-200 text-xs md:text-sm text-[#C79A3B] tracking-[0.35em] uppercase font-bold shadow-sm">
        Operational Excellence
      </div>

      {/* Heading (IMPROVED 🔥) */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black mb-6 leading-[1.05] tracking-tight text-[#0B2E5B]">
        Industrial{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
          Services
        </span>
      </h1>

      {/* Divider */}
      <div className="w-20 md:w-24 h-[3px] bg-[#C79A3B] mx-auto mb-6 rounded-full" />

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
        Delivering high-performance engineering, fabrication, and automation
        solutions tailored for modern industrial infrastructure with precision,
        reliability, and innovation.
      </p>

    </motion.div>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8fafc] to-transparent" />

</div>

{/* ================= SERVICES ================= */}
<div className="flex flex-col">
  {services.map((service, index) => (
    <ServiceBlock key={index} service={service} index={index} />
  ))}
</div>

{/* ================= CTA SECTION ================= */}
<section className="relative py-24 md:py-32 overflow-hidden bg-[#f8fafc] text-[#0B2E5B]">

  {/* Background Glow (Light Version) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/5 via-white to-[#0B2E5B]/5" />

  {/* Gold Glow (Soft) */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#C79A3B]/10 blur-[120px] rounded-full" />

  {/* Subtle Blue Glow */}
  <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#0B2E5B]/10 blur-[120px] rounded-full" />

  {/* Grid Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `radial-gradient(#C79A3B 1px, transparent 1px)`,
      backgroundSize: "40px 40px"
    }}
  />

  <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* Tag */}
      <p className="text-[#C79A3B] uppercase tracking-[6px] text-xs font-bold mb-4">
        Let’s Build Together
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
        Ready to Start Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
          Industrial Project?
        </span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed mb-10">
        Partner with Srivruksh Industries for high-performance engineering,
        fabrication, and automation solutions tailored to your business needs.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        {/* Primary */}
        <a
          href="/contact"
          className="group relative px-8 py-4 bg-[#C79A3B] text-white font-semibold rounded-lg overflow-hidden shadow-lg transition hover:scale-105 hover:bg-[#b88a2d]"
        >
          <span className="relative z-10">Get Free Consultation</span>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition" />
        </a>

      </div>

    </motion.div>

  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8fafc] to-transparent" />

</section>

    </section>
  )
}

function ServiceBlock({ service, index }: { service: any, index: number }) {
  const containerRef = useRef(null)
  const isEven = index % 2 === 0
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <div ref={containerRef} className="relative w-full h-[80vh] md:h-[70vh] flex items-center overflow-hidden border-b border-slate-100 bg-white">
      
      {/* IMAGE */}
      <motion.div style={{ scale: imageScale, opacity }} className="absolute inset-0 z-0">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className="object-cover transition-all duration-1000 brightness-[0.8] contrast-[1.1]"
        />

        {/* ✅ FIXED OVERLAY (NO WHITE FLASH) */}
        <div className={`absolute inset-0 ${
          isEven
            ? "bg-gradient-to-r from-black/60 via-black/20 to-transparent"
            : "bg-gradient-to-l from-black/60 via-black/20 to-transparent"
        }`} />
      </motion.div>

      {/* CONTENT (UNCHANGED) */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl p-8 md:p-12 bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-[#0B2E5B] text-[#C79A3B] rounded-2xl shadow-xl">
              {service.icon}
            </div>
            <div>
              <span className="text-[#C79A3B] font-mono text-[10px] font-black tracking-widest uppercase">Module {index + 1}</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0B2E5B] leading-none tracking-tighter uppercase mt-1">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-[2px] w-20 bg-[#C79A3B]" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              {service.desc}
            </p>
          </div>
        </motion.div>
      </div>
      
    </div>



    
  )
}