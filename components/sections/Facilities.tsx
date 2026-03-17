"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function Facilities() {

const scrollRef = useRef<HTMLDivElement>(null)

const facilities = [
{
title:"CNC Profile Cutting Machine",
image:"/facilities/cnc-cutting.jpg",
desc:"High precision cutting from 3mm to 150mm thickness."
},
{
title:"CNC Turning Machine",
image:"/facilities/cnc-turning.jpg",
desc:"Powerful CNC turning for industrial accuracy."
},
{
title:"Universal Milling Machine",
image:"/facilities/milling.jpg",
desc:"Advanced milling for complex machining."
},
{
title:"Tapping Machine",
image:"/facilities/tapping.jpg",
desc:"Precision tapping from M3 to M30."
},
{
title:"VMC Machine",
image:"/facilities/vmc.jpg",
desc:"High accuracy vertical machining center."
},
{
title:"Fabrication Facility",
image:"/facilities/fabrication.jpg",
desc:"Complete welding & fabrication solutions."
}
]

return (

<section className="py-28 bg-[#f8fafc] overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* HEADING */}

<motion.div
className="text-center mb-20"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<p className="text-[#C79A3B] uppercase tracking-widest font-semibold mb-2">
Production Facilities
</p>

<h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-4">
Modern Manufacturing Infrastructure
</h2>

<p className="text-gray-600 max-w-2xl mx-auto">
Explore our advanced machinery designed for precision,
efficiency, and industrial excellence.
</p>

</motion.div>

</div>


{/* HORIZONTAL SCROLL SECTION */}

<div
ref={scrollRef}
className="flex gap-10 overflow-x-auto px-6 scroll-smooth snap-x snap-mandatory"
>

{facilities.map((item,index)=>(

<motion.div
key={index}
className="min-w-[280px] md:min-w-[400px] snap-center group"
initial={{opacity:0, scale:0.9}}
whileInView={{opacity:1, scale:1}}
transition={{duration:0.5, delay:index * 0.1}}
>

{/* CARD */}

<div className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">

{/* IMAGE */}

<Image
src={item.image}
alt={item.title}
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

{/* CONTENT */}

<div className="absolute bottom-0 p-6 text-white">

{/* NUMBER */}

<p className="text-[#C79A3B] text-sm mb-2">
0{index + 1}
</p>

<h3 className="text-xl md:text-2xl font-semibold mb-2">
{item.title}
</h3>

<p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
{item.desc}
</p>

</div>

</div>

</motion.div>

))}

</div>


{/* SCROLL HINT */}

<div className="text-center mt-10 text-gray-400 text-sm">
← Swipe / Scroll →
</div>

</section>

)
}