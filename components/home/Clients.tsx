"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { clients } from "@/data/clients"
import { motion } from "framer-motion"

export default function Clients() {

  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true
    },
    [autoplay.current]
  )

  return (

    <motion.section
      className="py-28 bg-gray-100 relative"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      viewport={{once:true}}
    >

      {/* Edge Fade */}

      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          className="text-center mb-20"
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7}}
          viewport={{once:true}}
        >

          <p className="text-[#C79A3B] uppercase tracking-widest font-semibold mb-2">
            Trusted Partners
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-4">
            Our Esteemed Customers
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading industrial companies trust Srivruksh Industries for
            engineering excellence, fabrication and manufacturing solutions.
          </p>

        </motion.div>

        {/* Carousel */}

        <div className="overflow-hidden" ref={emblaRef}>

          <div className="flex">

            {[...clients, ...clients].map((client, index) => (

              <motion.div
                key={index}
                className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] p-5"
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:index * 0.05, duration:0.5}}
                viewport={{once:true}}
              >

                <motion.div
                  whileHover={{scale:1.05}}
                  transition={{duration:0.3}}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-[140px] flex items-center justify-center border border-gray-200 p-6"
                >

                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={180}
                    height={90}
                    className="object-contain"
                  />

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </motion.section>

  )
}