"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function AboutPage() {

const scrollRef = useRef<HTMLDivElement>(null)
const [activeImage, setActiveImage] = useState<string | null>(null)

/* AUTO SCROLL */
useEffect(() => {
const container = scrollRef.current
if (!container) return

let scrollAmount = 0

const interval = setInterval(() => {
scrollAmount += 1
container.scrollTo({
left: scrollAmount,
behavior: "smooth"
})

if (scrollAmount >= container.scrollWidth - container.clientWidth) {
scrollAmount = 0
}
}, 30)

return () => clearInterval(interval)
}, [])

return (

<section className="bg-[#FAFAFB] text-[#0B2E5B]">

{/* ================= HERO ================= */}

<div className="relative h-[70vh] flex items-center justify-center overflow-hidden">

<Image
src="/factory/factory1.png"
alt="Factory"
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-gradient-to-b from-[#0B2E5B]/80 to-[#0B2E5B]/90" />

<motion.div
className="relative z-10 text-center text-white px-6"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>

<h1 className="text-4xl md:text-6xl font-bold mb-4">
Engineering Excellence
</h1>

<p className="text-gray-200 max-w-2xl mx-auto">
Precision manufacturing, fabrication and automation solutions
built for modern industry.
</p>

</motion.div>

</div>


{/* ================= WHO WE ARE ================= */}

<div className="max-w-7xl mx-auto px-6 py-24">

<div className="grid md:grid-cols-2 gap-16 items-center">

<motion.div
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<h2 className="text-3xl md:text-4xl font-bold mb-6">
Who We Are
</h2>

<p className="text-gray-600 leading-relaxed mb-6">
Srivruksh Industries Pvt Ltd is a leading engineering and fabrication company
located in MIDC Bhosari, Pune. We specialize in conveyors, SPM machines and
industrial fabrication solutions tailored to customer requirements.
</p>

<p className="text-gray-600 leading-relaxed">
Our commitment to quality, innovation and precision ensures reliable
and high-performance industrial systems.
</p>

</motion.div>

<motion.div
className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl"
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<Image
src="/factory/factory2.jpg"
alt="Factory"
fill
className="object-cover"
/>

</motion.div>

</div>

</div>


{/* ================= MISSION ================= */}

<div className="bg-white py-24">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">
Our Mission
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"Long-term commitment and support to customers",
"Maintaining cutting-edge manufacturing standards",
"Achieving highest level of innovation and skill"
].map((item,i)=>(

<motion.div
key={i}
whileHover={{y:-8}}
className="p-8 bg-[#f8fafc] rounded-xl shadow hover:shadow-xl transition"
>

<p className="text-gray-600">{item}</p>

</motion.div>

))}

</div>

</div>

</div>


{/* ================= VALUES ================= */}

<div className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
Our Core Values
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
{title:"Quality",desc:"Delivering high quality products & services"},
{title:"Value",desc:"Providing value for money solutions"},
{title:"Integrity",desc:"Honesty and transparency"},
{title:"Teamwork",desc:"Collaborative and responsible culture"},
{title:"Innovation",desc:"Modern and efficient solutions"}
].map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition"
>

<h3 className="text-xl font-semibold mb-3 text-[#C79A3B]">
{item.title}
</h3>

<p className="text-gray-600 text-sm">
{item.desc}
</p>

</motion.div>

))}

</div>

</div>

</div>


{/* ================= FACILITIES PREVIEW ================= */}

<div className="bg-[#f1f5f9] py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
Our Facilities
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"/facilities/cnc-cutting.jpg",
"/facilities/vmc.jpg",
"/facilities/fabrication.jpg"
].map((img,i)=>(

<motion.div
key={i}
whileHover={{scale:1.05}}
className="relative h-[250px] rounded-xl overflow-hidden shadow-lg"
>

<Image
src={img}
alt="facility"
fill
className="object-cover"
/>

</motion.div>

))}

</div>

</div>

</div>


{/* ================= CERTIFICATIONS (UPDATED 🔥) ================= */}

<div className="py-24 bg-[#f8fafc]">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">
Certifications & Compliance
</h2>

<div
ref={scrollRef}
className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
>

{[
"/certificates/cert1.png",
"/certificates/cert2.png",
"/certificates/cert3.png",
"/certificates/cert4.png"
].map((img,i)=>(

<motion.div
key={i}
className="min-w-[280px] md:min-w-[400px] cursor-pointer group"
whileHover={{scale:1.05}}
onClick={()=>setActiveImage(img)}
>

<div className="relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">

<Image
src={img}
alt="certificate"
fill
className="object-cover group-hover:scale-110 transition duration-500"
/>

<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

</div>

</motion.div>

))}

</div>

</div>

{/* MODAL */}

{activeImage && (
<div
className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
onClick={()=>setActiveImage(null)}
>

<motion.div
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
className="relative w-full max-w-4xl h-[80vh]"
>

<Image
src={activeImage}
alt="preview"
fill
className="object-contain"
/>

</motion.div>

</div>
)}

</div>


{/* ================= CLIENTS ================= */}

<div className="bg-[#f8fafc] py-24">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl md:text-4xl font-bold mb-12">
Our Clients
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

{[
"/clients/sany.png",
"/clients/vguard.png",
"/clients/thermax.png",
"/clients/electronica.png"
].map((logo,i)=>(

<motion.div
key={i}
whileHover={{scale:1.1}}
className="p-6 bg-white rounded-lg shadow"
>

<Image
src={logo}
alt="client"
width={120}
height={60}
className="mx-auto object-contain"
/>

</motion.div>

))}

</div>

</div>

</div>

</section>

)
}