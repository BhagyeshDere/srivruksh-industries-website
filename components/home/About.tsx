"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-100 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
          >

            <p className="text-[#C79A3B] font-semibold uppercase tracking-[3px] mb-3">
              About Company
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-6 leading-tight">
              Srivruksh Industries <br /> Private Limited
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Srivruksh Industries Pvt Ltd located in MIDC Bhosari specializes in
              design and manufacturing of size reduction equipment, conveyors,
              SPM machines and fabrication components based on customer drawings
              and engineering specifications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              Our experienced engineering team focuses on delivering reliable,
              high-quality industrial solutions through advanced fabrication
              technologies and modern manufacturing practices.
            </p>

            {/* FEATURES GRID */}

            <div className="grid sm:grid-cols-2 gap-6">

              {[1,2,3,4].map((i)=>(
              <motion.div
                key={i}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:i*0.15,duration:0.6}}
                viewport={{once:true}}
              >

              {/* CARD */}

              <div className="group bg-white border border-gray-200 rounded-xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition duration-300 flex gap-4">

                <div className="bg-[#0B2E5B] text-white w-12 h-12 flex items-center justify-center rounded-lg text-xl group-hover:scale-110 transition">
                  {i===1 && "⚙"}
                  {i===2 && "🏭"}
                  {i===3 && "🛠"}
                  {i===4 && "✔"}
                </div>

                <div>

                  {i===1 && (
                    <>
                    <h4 className="font-semibold text-[#0B2E5B] mb-1">
                      Advanced Manufacturing
                    </h4>
                    <p className="text-sm text-gray-600">
                      Modern machines & precision engineering.
                    </p>
                    </>
                  )}

                  {i===2 && (
                    <>
                    <h4 className="font-semibold text-[#0B2E5B] mb-1">
                      Industrial Expertise
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fabrication and automation solutions.
                    </p>
                    </>
                  )}

                  {i===3 && (
                    <>
                    <h4 className="font-semibold text-[#0B2E5B] mb-1">
                      Custom Engineering
                    </h4>
                    <p className="text-sm text-gray-600">
                      Design as per client requirements.
                    </p>
                    </>
                  )}

                  {i===4 && (
                    <>
                    <h4 className="font-semibold text-[#0B2E5B] mb-1">
                      Quality Assurance
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reliable and high-performance solutions.
                    </p>
                    </>
                  )}

                </div>

              </div>

              </motion.div>
              ))}

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            className="relative"
            initial={{opacity:0,x:40}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.7}}
            viewport={{once:true}}
          >

            <motion.div
              className="relative h-[420px] lg:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{scale:1.03}}
              transition={{duration:0.4}}
            >

              <Image
                src="/factory/factory1.png"
                alt="Industrial factory"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/60 via-transparent to-transparent" />

            </motion.div>

            {/* FLOATING STATS */}

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl px-6 py-4 border"
              animate={{y:[0,-6,0]}}
              transition={{repeat:Infinity,duration:3}}
            >

              <p className="text-3xl font-bold text-[#0B2E5B]">10+</p>
              <p className="text-sm text-gray-600">Years Experience</p>

            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl px-6 py-4 border"
              animate={{y:[0,6,0]}}
              transition={{repeat:Infinity,duration:3}}
            >

              <p className="text-3xl font-bold text-[#C79A3B]">250+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}