"use client"

import Image from "next/image"
import Link from "next/link"
import {
Facebook,
Instagram,
Linkedin,
Youtube,
Mail,
Phone,
Globe
} from "lucide-react"

export default function Footer() {

return (

<footer className="bg-[#0B2E5B] text-white relative overflow-hidden">

{/* Decorative Glow */}

<div className="absolute -top-20 -left-20 w-80 h-80 bg-[#C79A3B]/20 blur-3xl rounded-full"></div>
<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>


{/* Top Section */}

<div className="relative max-w-7xl mx-auto px-6 py-20">

<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

{/* Company */}

<div>

<div className="flex items-center gap-3 mb-5">

<Image
src="/images/assets/logo1.png"
width={45}
height={45}
alt="logo"
/>

<h3 className="text-xl font-semibold">
Srivruksh Industries
</h3>

</div>

<p className="text-gray-300 text-sm leading-relaxed mb-6">
Engineering & Fabrication Works delivering industrial
automation, heavy fabrication, precision machining
and custom manufacturing solutions for modern industries.
</p>


{/* Social Icons */}

<div className="flex gap-3">

<a className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110">
<Linkedin size={18}/>
</a>

<a className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110">
<Facebook size={18}/>
</a>

<a className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110">
<Instagram size={18}/>
</a>

<a className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110">
<Youtube size={18}/>
</a>

<a className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110">
<Globe size={18}/>
</a>

</div>

</div>


{/* Quick Links */}

<div>

<h4 className="text-lg font-semibold mb-5 text-[#C79A3B]">
Quick Links
</h4>

<ul className="space-y-3 text-sm text-gray-300">

<li>
<Link href="/" className="hover:text-white transition">
Home
</Link>
</li>

<li>
<Link href="/about" className="hover:text-white transition">
About Us
</Link>
</li>

<li>
<Link href="/services" className="hover:text-white transition">
Services
</Link>
</li>

<li>
<Link href="/products" className="hover:text-white transition">
Products
</Link>
</li>

<li>
<Link href="/gallery" className="hover:text-white transition">
Gallery
</Link>
</li>

<li>
<Link href="/contact" className="hover:text-white transition">
Contact
</Link>
</li>

</ul>

</div>


{/* Services */}

<div>

<h4 className="text-lg font-semibold mb-5 text-[#C79A3B]">
Our Services
</h4>

<ul className="space-y-3 text-sm text-gray-300">

<li>Industrial Automation</li>
<li>Heavy Structural Fabrication</li>
<li>Precision Machining</li>
<li>Pipeline Fabrication</li>
<li>Machine Maintenance</li>
<li>Boiler Equipment Manufacturing</li>

</ul>

</div>


{/* Contact */}

<div>

<h4 className="text-lg font-semibold mb-5 text-[#C79A3B]">
Contact Info
</h4>

<ul className="space-y-4 text-sm text-gray-300">

<li className="flex items-center gap-2">
📍 MIDC Bhosari, Pune
</li>

<li className="flex items-center gap-2">
<Phone size={16}/> +91 9420925126
</li>

<li className="flex items-center gap-2">
<Mail size={16}/> infosrivruksh@gmail.com
</li>

<li className="flex items-center gap-2">
GSTIN: 27ABJCS7257E1ZO
</li>

</ul>

</div>

</div>

</div>


{/* Divider */}

<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>


{/* Bottom Bar */}

<div className="py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 max-w-7xl mx-auto">

<p>
© {new Date().getFullYear()} Srivruksh Industries Pvt Ltd. All Rights Reserved.
</p>

<p className="mt-2 md:mt-0">
Designed & Developed by QIRO TECH INNOVATION PVT.LTD.
</p>

</div>

</footer>

)
}