"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false)

const navLinks = [
{ name:"Home", link:"/" },
{ name:"About", link:"/about" },
{ name:"Services", link:"/services" },
{ name:"Products", link:"/products" },
{ name:"Gallery", link:"/gallery" },
{ name:"Contact", link:"/contact" }
]

return (

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

{/* Top Accent Line */}

<div className="h-[3px] w-full bg-gradient-to-r from-[#0B2E5B] via-[#C79A3B] to-[#0B2E5B]" />

<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-between items-center h-[78px]">

{/* Logo */}

<Link href="/" className="flex items-center gap-3 group">

<Image
src="/images/assets/logo1.png"
width={44}
height={44}
alt="logo"
className="transition duration-300 group-hover:scale-105"
/>

<span className="text-xl font-semibold text-[#0B2E5B] tracking-wide">
Srivruksh Industries
</span>

</Link>


{/* Desktop Menu */}

<nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

{navLinks.map((item)=>(
<Link
key={item.name}
href={item.link}
className="relative group hover:text-[#0B2E5B] transition"
>

{item.name}

<span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C79A3B] transition-all duration-300 group-hover:w-full"></span>

</Link>
))}


{/* CTA Button */}

<Link
href="/contact"
className="relative overflow-hidden bg-[#C79A3B] text-white px-6 py-2.5 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg"
>

<span className="relative z-10">Get Quote</span>

<span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></span>

</Link>

</nav>


{/* Mobile Button */}

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden relative w-8 h-8 flex items-center justify-center"
>

<span
className={`absolute h-[2px] w-7 bg-[#0B2E5B] transition-all duration-300 ${
menuOpen ? "rotate-45" : "-translate-y-2"
}`}
></span>

<span
className={`absolute h-[2px] w-7 bg-[#0B2E5B] transition-all duration-300 ${
menuOpen ? "opacity-0" : ""
}`}
></span>

<span
className={`absolute h-[2px] w-7 bg-[#0B2E5B] transition-all duration-300 ${
menuOpen ? "-rotate-45" : "translate-y-2"
}`}
></span>

</button>

</div>

</div>


{/* Mobile Menu */}

<div
className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
}`}
>

<div className="flex flex-col p-6 gap-5 text-gray-700 font-medium">

{navLinks.map((item)=>(
<Link
key={item.name}
href={item.link}
className="hover:text-[#0B2E5B] transition"
>
{item.name}
</Link>
))}

<Link
href="/contact"
className="bg-[#C79A3B] text-white px-5 py-2.5 rounded-lg text-center mt-2 shadow hover:scale-105 transition"
>

Get Quote

</Link>

</div>

</div>

</header>

)
}