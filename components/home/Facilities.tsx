"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Facilities() {

const facilities = [
{
title:"CNC Profile Cutting Machine",
image:"/facilities/cnc-cutting.jpg",
desc:"Bed size 3000mm x 6000mm with plate thickness capacity from 3mm to 150mm for high precision industrial cutting."
},
{
title:"CNC Turning Machine",
image:"/facilities/cnc-turning.jpg",
desc:"MacPower CNC turning machine with 165mm chuck diameter and 7.9KW spindle power for precision machining."
},
{
title:"Universal Milling Machine",
image:"/facilities/milling.jpg",
desc:"Universal milling machine with X axis 1200mm, Y axis 500mm and Z axis 400mm for complex machining operations."
},
{
title:"Tapping Machine",
image:"/facilities/tapping.jpg",
desc:"Tapping machine capable of tapping range from M3 to M30 for industrial components."
},
{
title:"VMC Machine",
image:"/facilities/vmc.jpg",
desc:"Vertical Machining Center with bed size 900 x 600 x 630 mm for precision CNC machining."
},
{
title:"Fabrication Facility",
image:"/facilities/fabrication.jpg",
desc:"Complete fabrication workshop with CO2, Argon, Arc and Aluminium welding facilities."
}
]

return (

<motion.section
className="py-28 bg-gray-100"
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

<p className="text-[#C79A3B] uppercase tracking-widest font-semibold mb-2">
Production Facilities
</p>

<h2 className="text-4xl font-bold text-[#0B2E5B] mb-4">
Modern Manufacturing Infrastructure
</h2>

<p className="text-gray-600 max-w-2xl mx-auto">
Our advanced manufacturing facility is equipped with modern
machinery and skilled engineers to deliver high precision
engineering solutions.
</p>

</motion.div>


{/* Masonry Layout */}

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

{facilities.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index * 0.1, duration:0.6}}
viewport={{once:true}}
>

<motion.div
className="relative overflow-hidden rounded-2xl group break-inside-avoid"
whileHover={{scale:1.03}}
transition={{duration:0.3}}
>

{/* Image */}

<div className="relative w-full h-[260px]">

<Image
src={item.image}
alt={item.title}
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

</div>

{/* Overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/90 via-[#0B2E5B]/40 to-transparent opacity-80"></div>

{/* Content */}

<div className="absolute bottom-0 p-6 text-white">

<h3 className="text-lg font-semibold mb-2">
{item.title}
</h3>

<p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition duration-300">
{item.desc}
</p>

</div>

</motion.div>

</motion.div>

))}

</div>

</div>

</motion.section>

)
}