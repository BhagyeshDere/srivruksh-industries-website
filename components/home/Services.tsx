"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { motion } from "framer-motion"

export default function Services() {

  return (

<motion.section
className="py-28 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<motion.div
className="text-center mb-32"
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

</div>


{/* SERVICES */}

<div className="flex flex-col gap-24">

{services.map((service,index)=>{

const isLeft = index % 2 === 0

return (

<motion.div
key={index}
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8, delay:index * 0.1}}
viewport={{once:true}}
className="relative w-full group"
>

{/* IMAGE */}

<div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">

<Image
src={service.image}
alt={service.title}
fill
className="object-cover scale-105 group-hover:scale-110 transition duration-700"
/>

{/* Directional Overlay */}

<div className={`absolute inset-0 ${
isLeft
? "bg-gradient-to-r from-black/80 via-black/50 to-transparent"
: "bg-gradient-to-l from-black/80 via-black/50 to-transparent"
}`} />

{/* CONTENT INSIDE IMAGE */}

<div className={`absolute inset-0 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>

<div className="max-w-7xl w-full px-6">

<motion.div
initial={{opacity:0,x:isLeft ? -40 : 40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className={`max-w-xl text-white ${isLeft ? "" : "ml-auto text-right"}`}
>

<h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
{service.title}
</h3>

<div className={`w-16 h-[3px] bg-[#C79A3B] mb-6 ${isLeft ? "" : "ml-auto"}`} />

<p className="text-gray-200 mb-6 leading-relaxed text-lg">
High quality industrial engineering service with modern
manufacturing technology and skilled professionals.
</p>

<Link
href="/services"
className={`inline-flex items-center font-semibold text-lg text-[#C79A3B] hover:gap-3 transition-all`}
>
Explore Service
<span className="ml-2 group-hover:translate-x-2 transition">
→
</span>
</Link>

</motion.div>

</div>

</div>

</div>

</motion.div>

)

})}

</div>


{/* CTA */}

<motion.div
className="text-center mt-32"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<Link
href="/services"
className="inline-flex items-center gap-3 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-10 py-3 rounded-lg font-semibold shadow-lg transition hover:scale-105"
>

View All Services

<span className="text-lg">→</span>

</Link>

</motion.div>

</motion.section>

  )
}