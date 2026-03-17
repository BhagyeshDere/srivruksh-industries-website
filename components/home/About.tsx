"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (

<section className="relative py-32 bg-white overflow-hidden">

{/* Background Glow */}

<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C79A3B]/10 blur-3xl rounded-full"></div>

<div className="max-w-7xl mx-auto px-6 relative z-10">

{/* TOP SECTION */}

<div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT CONTENT */}

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<p className="text-[#C79A3B] uppercase tracking-[5px] font-semibold mb-4">
About Company
</p>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2E5B] leading-tight mb-6">

Engineering Solutions
<br/>

<span className="text-[#C79A3B]">
Built for Modern Industry
</span>

</h2>

<p className="text-gray-700 text-lg leading-relaxed mb-6">
Srivruksh Industries Pvt Ltd specializes in designing and manufacturing
conveyors, SPM machines and fabrication components tailored to
industrial needs.
</p>

<p className="text-gray-600 leading-relaxed mb-10">
We combine engineering expertise with advanced manufacturing
technologies to deliver high-performance industrial solutions.
</p>

{/* INLINE STATS (NO BOX) */}

<div className="flex flex-wrap gap-10">

{[
{value:"10+", label:"Years Experience"},
{value:"250+", label:"Projects"},
{value:"100%", label:"Quality"}
].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*0.2}}
viewport={{once:true}}
>

<p className="text-3xl font-bold text-[#0B2E5B]">
{item.value}
</p>

<p className="text-sm text-gray-500">
{item.label}
</p>

</motion.div>

))}

</div>

</motion.div>


{/* RIGHT IMAGE WITH OVERLAY */}

<motion.div
className="relative"
initial={{opacity:0,x:60}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<div className="relative h-[420px] lg:h-[520px] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.25)]">

<Image
src="/factory/factory1.png"
alt="Industrial factory"
fill
className="object-cover"
/>

{/* Overlay Text */}

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">

<div className="p-8 text-white">

<h3 className="text-2xl font-semibold mb-2">
Precision Engineering
</h3>

<p className="text-gray-200 text-sm">
Advanced fabrication and manufacturing solutions.
</p>

</div>

</div>

</div>

</motion.div>

</div>


{/* BOTTOM FEATURE STRIP */}

<motion.div
className="mt-24 grid md:grid-cols-3 gap-10"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

{[
{
title:"Advanced Manufacturing",
text:"Modern machines with precision engineering capabilities."
},
{
title:"Industrial Expertise",
text:"Strong experience in fabrication and automation."
},
{
title:"Custom Engineering",
text:"Solutions designed based on client requirements."
}
].map((item,i)=>(

<div key={i} className="group">

<h4 className="text-xl font-semibold text-[#0B2E5B] mb-2 group-hover:text-[#C79A3B] transition">
{item.title}
</h4>

<div className="w-10 h-[2px] bg-[#C79A3B] mb-3 group-hover:w-16 transition-all"></div>

<p className="text-gray-600 text-sm leading-relaxed">
{item.text}
</p>

</div>

))}

</motion.div>

</div>

</section>

  )
}