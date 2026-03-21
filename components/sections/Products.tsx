"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, MoveRight } from "lucide-react"

export default function Products() {
  const products = [
    {
      title: "Conveyor Systems",
      image: "/images/products/conveyor1.jpg",
      desc: "Industrial conveyor systems designed for material handling and automation."
    },
    {
      title: "Automation Machines",
      image: "/images/products/automation.jpg",
      desc: "Custom SPM and automation machines built for industrial productivity."
    },
    {
      title: "Industrial Fabrication",
      image: "/images/products/fabrication.jpg",
      desc: "Heavy structural fabrication and precision engineering solutions."
    }
  ]

  return (
    <motion.section
      className="py-32 bg-slate-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER: Left Aligned for Modern Editorial Feel --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.4em] font-black text-[10px] md:text-xs">
                Our Products
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#0B2E5B] tracking-tighter leading-[0.9]">
              ENGINEERING <br /> <span className="text-slate-300">PRODUCTS</span> & SOLUTIONS
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed italic border-l-4 border-[#C79A3B] pl-6"
          >
            We design and manufacture industrial machines and fabrication components 
            tailored for modern engineering and manufacturing industries.
          </motion.p>
        </div>

        {/* --- PRODUCTS MOSAIC --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">
          
          {/* Main Feature: Conveyor Systems */}
          <motion.div
            className="lg:col-span-7 group relative overflow-hidden rounded-[2.5rem] bg-[#0B2E5B] shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={products[0].image}
              alt={products[0].title}
              fill
              className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            
            {/* Corner Badge */}
            <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C79A3B] group-hover:text-black transition-colors duration-500">
              <Boxes size={24} />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                {products[0].title}
              </h3>
              <p className="text-slate-300 mb-8 max-w-md text-lg leading-relaxed font-light">
                {products[0].desc}
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-4 bg-[#C79A3B] text-[#0B2E5B] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-black/20"
              >
                View Details <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column Staggered */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={index}
                className="flex-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
                />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                    {product.title}
                  </h3>
                  <Link
                    href="/products"
                    className="flex items-center gap-2 text-[#C79A3B] font-black text-[10px] uppercase tracking-[0.3em] group/link"
                  >
                    Explore Machine <MoveRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>

                {/* Decorative border on hover */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.5rem] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- GLOBAL CTA --- */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/products"
            className="group relative flex items-center gap-6 text-[#0B2E5B] font-black text-sm uppercase tracking-[0.4em] overflow-hidden"
          >
            <span>View All Engineering Products</span>
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 group-hover:bg-[#0B2E5B] group-hover:text-white transition-all">
              <MoveRight size={20} />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}