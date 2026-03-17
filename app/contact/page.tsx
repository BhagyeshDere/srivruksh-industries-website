"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {

return (

<section className="bg-[#f5f7fa] text-[#0B2E5B]">

{/* HERO */}

<div className="relative h-[300px] flex items-center justify-center text-center overflow-hidden">

<Image
src="/factory/automation.png"
alt="Industrial Background"
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-[#0B2E5B]/80"></div>

<motion.div
className="relative z-10 text-white px-6"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
>

<h1 className="text-4xl md:text-5xl font-bold mb-2">
Contact Us
</h1>

<p className="text-gray-200">
Let’s connect for engineering & fabrication solutions
</p>

</motion.div>

</div>


<div className="max-w-7xl mx-auto px-6 py-16">

{/* GLASS PANEL */}

<motion.div
className="grid lg:grid-cols-2 gap-10 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
>

{/* LEFT FORM */}

<div>

<h2 className="text-xl font-semibold mb-6">
Send Us a Message
</h2>

<form className="space-y-4">

<input
type="text"
placeholder="Full Name"
className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C79A3B]"
/>

<input
type="email"
placeholder="Email Address"
className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C79A3B]"
/>

<input
type="text"
placeholder="Company (Optional)"
className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C79A3B]"
/>

<textarea
placeholder="Project Details"
rows={4}
className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#C79A3B]"
/>

<button className="w-full bg-[#0B2E5B] hover:bg-[#08254a] text-white py-3 rounded-md font-semibold transition">
Submit Inquiry
</button>

</form>

</div>


{/* RIGHT DETAILS */}

<div className="space-y-6">

<h2 className="text-xl font-semibold mb-4">
Work Address
</h2>

<p className="font-semibold leading-relaxed">
M/S. SRIVRUKSH INDUSTRIES PVT LTD <br/>
Sr. No. 117/2, Gagai Nagar Nashik Road, <br/>
Wakhar Mahamandal Bhosari Pune - 411039 <br/>
(Maharashtra) India
</p>


{/* PHONE */}

<div className="flex items-center gap-3">

<div className="bg-[#C79A3B] p-2 rounded">
<Phone size={18} color="white"/>
</div>

<p className="font-semibold">
+91 9420925126
</p>

</div>


{/* EMAIL */}

<div className="flex items-start gap-3">

<div className="bg-[#C79A3B] p-2 rounded">
<Mail size={18} color="white"/>
</div>

<div className="font-semibold">
<p>infosrivruksh@gmail.com</p>
<p>srivruksh0052@gmail.com</p>
</div>

</div>


{/* GST */}

<div className="pt-4 border-t">

<p className="text-sm text-gray-500">GSTIN</p>

<p className="font-bold text-[#C79A3B]">
27ABJCS7257E1ZO
</p>

</div>

</div>

</motion.div>


{/* MAP */}

<motion.div
className="mt-16 rounded-2xl overflow-hidden shadow-lg"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
>

<iframe
src="https://www.google.com/maps?q=Bhosari%20Pune&output=embed"
className="w-full h-[350px] md:h-[450px] border-0"
loading="lazy"
/>

</motion.div>

</div>

</section>

)
}