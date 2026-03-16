"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { motion } from "framer-motion"

export default function Services() {

  return (

<motion.section
className="py-28 bg-gradient-to-b from-gray-100 to-white"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
viewport={{once:true}}
>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

<motion.div
className="text-center mb-20"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

          <p className="text-[#C79A3B] uppercase tracking-[4px] font-semibold mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-5">
            Engineering & Manufacturing Solutions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide advanced industrial services including automation,
            fabrication, machining and equipment manufacturing tailored
            to industry requirements.
          </p>

</motion.div>


        {/* Services Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index * 0.15, duration:0.6}}
viewport={{once:true}}
whileHover={{scale:1.02}}
>

            <div
              className="group relative bg-[#0B2E5B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >

              {/* Image */}

              <div className="relative h-60 w-full overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Badge */}

                <div className="absolute top-4 left-4 bg-[#C79A3B] text-white text-xs px-3 py-1 rounded-full shadow">
                  Service
                </div>

              </div>


              {/* Content */}

              <div className="p-7 relative">

                {/* Decorative Line */}

                <div className="w-10 h-[2px] bg-[#C79A3B] mb-4 group-hover:w-16 transition-all"></div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  High quality industrial engineering service with modern
                  manufacturing technology and skilled professionals.
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center text-[#C79A3B] font-semibold"
                >

                  Learn More

                  <span className="ml-2 transform group-hover:translate-x-1 transition">
                    →
                  </span>

                </Link>

              </div>

            </div>

</motion.div>

          ))}

        </div>


        {/* View All Services Button */}

<motion.div
className="text-center mt-20"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-10 py-3 rounded-lg font-semibold shadow-xl transition hover:scale-105"
          >

            View All Services

            <span className="text-lg">→</span>

          </Link>

</motion.div>

      </div>

</motion.section>

  )
}