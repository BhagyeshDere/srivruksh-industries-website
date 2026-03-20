"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" }
  ]

  return (

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

  {/* Top Accent Line */}
  <div className="h-[3px] w-full bg-gradient-to-r from-[#0B2E5B] via-[#C79A3B] to-[#0B2E5B]" />

  <div className="max-w-7xl mx-auto px-4 md:px-6">

    <div className="flex justify-between items-center h-[70px] md:h-[85px]">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 md:gap-4 group">

        <Image
          src="/images/assets/logo1.png"
          width={48}
          height={48}
          alt="logo"
          className="transition duration-300 group-hover:scale-110"
        />

        <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#0B2E5B] tracking-wide leading-tight">
          Srivruksh <span className="text-[#C79A3B]">Industries</span>
        </span>

      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-700 font-semibold text-[15px] lg:text-base">

        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="relative group transition hover:text-[#0B2E5B]"
          >

            {item.name}

            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C79A3B] transition-all duration-300 group-hover:w-full"></span>

          </Link>
        ))}

        {/* CTA Button */}
        <Link
          href="/contact"
          className="relative overflow-hidden bg-[#C79A3B] text-black px-6 py-2.5 rounded-lg font-semibold shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          <span className="relative z-10">Get Quote</span>

          {/* Shine effect */}
          <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 skew-x-12 transition-all duration-700 group-hover:left-[100%]"></span>
        </Link>

      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden relative w-9 h-9 flex items-center justify-center"
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
      menuOpen ? "max-h-[450px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
    }`}
  >

    <div className="flex flex-col p-6 gap-6 text-gray-700 font-semibold text-lg">

      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#0B2E5B] transition"
        >
          {item.name}
        </Link>
      ))}

      <Link
        href="/contact"
        className="bg-[#C79A3B] text-black px-5 py-3 rounded-lg text-center mt-2 shadow hover:scale-105 transition font-semibold"
      >
        Get Quote
      </Link>

    </div>

  </div>

</header>

  )
}