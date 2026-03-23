"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "/products" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled ? "backdrop-blur-xl bg-white/80 shadow-sm border-b border-gray-100" : "bg-white"}
    `}>

      {/* Gradient Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`flex justify-between items-center transition-all duration-500
          ${scrolled ? "h-[70px]" : "h-[85px] md:h-[100px]"}`}>

          {/* Logo - Animation removed as requested */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <Image
                src="/images/assets/logo1.png"
                width={48}
                height={48}
                alt="logo"
                className="transition duration-500" 
              />
              {/* Subtle ambient glow remains for depth without movement */}
              <div className="absolute inset-0 rounded-full bg-[#C79A3B]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <span className="flex flex-col leading-tight">
              <span className="text-xl md:text-2xl font-black text-[#0B2E5B] tracking-tighter uppercase italic">
                Srivruksh
              </span>
              <span className="text-[10px] md:text-xs font-bold text-[#C79A3B] tracking-[0.4em] uppercase -mt-0.5">
                Industries
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => {
              const isActive = pathname === item.link

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`relative py-1 text-sm lg:text-[15px] font-bold uppercase tracking-[0.12em] transition-all duration-300 group
                    ${isActive ? "text-[#0B2E5B]" : "text-gray-500 hover:text-[#0B2E5B]"}
                  `}
                >
                  {item.name}

                  {/* Active underline */}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#C79A3B] transition-all duration-500 rounded-full
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}></span>
                </Link>
              )
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative overflow-hidden group bg-[#C79A3B] text-white px-7 py-3 rounded-xl text-xs lg:text-sm font-black uppercase tracking-widest shadow-lg shadow-[#C79A3B]/20 transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Get Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 shadow-sm"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-[#0B2E5B] transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-[2px] bg-[#0B2E5B] transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-[2px] bg-[#0B2E5B] transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="mx-4 mb-6 mt-2 rounded-[2rem] backdrop-blur-2xl bg-white/95 shadow-2xl border border-white/50 p-8 flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black text-[#0B2E5B] tracking-tight uppercase border-b border-gray-50 pb-2 active:text-[#C79A3B] transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0B2E5B] text-white px-5 py-5 rounded-2xl text-center mt-4 shadow-xl font-black uppercase tracking-[0.2em] text-sm"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  )
}