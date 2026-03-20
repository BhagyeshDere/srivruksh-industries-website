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

  {/* Glow Effects */}
  <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-[#C79A3B]/20 blur-3xl rounded-full"></div>
  <div className="absolute -bottom-20 -right-20 w-72 md:w-96 h-72 md:h-96 bg-white/10 blur-3xl rounded-full"></div>

  {/* Main Section */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">

    <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Company */}
      <div>

        <div className="flex items-center gap-3 mb-5">
          <Image
            src="/images/assets/logo1.png"
            width={52}
            height={52}
            alt="logo"
            className="object-contain"
          />

          <h3 className="text-lg md:text-xl font-bold leading-tight">
            Srivruksh <span className="text-[#C79A3B]">Industries</span>
          </h3>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
          Engineering & Fabrication Works delivering industrial automation,
          heavy fabrication, precision machining and custom manufacturing solutions.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 flex-wrap">

          {[Linkedin, Facebook, Instagram, Youtube, Globe].map((Icon, i) => (
            <a
              key={i}
              className="bg-white/10 hover:bg-[#C79A3B] transition p-2.5 rounded-lg hover:scale-110 backdrop-blur-md"
            >
              <Icon size={18}/>
            </a>
          ))}

        </div>

      </div>


      {/* Quick Links */}
      <div>

        <h4 className="text-base md:text-lg font-semibold mb-5 text-[#C79A3B]">
          Quick Links
        </h4>

        <ul className="space-y-3 text-sm text-gray-300">

          {[
            { name:"Home", link:"/" },
            { name:"About Us", link:"/about" },
            { name:"Services", link:"/services" },
            { name:"Products", link:"/products" },
            { name:"Gallery", link:"/gallery" },
            { name:"Contact", link:"/contact" }
          ].map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="hover:text-white transition flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-2 h-[2px] bg-[#C79A3B] transition-all"></span>
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

      </div>


      {/* Services */}
      <div>

        <h4 className="text-base md:text-lg font-semibold mb-5 text-[#C79A3B]">
          Our Services
        </h4>

        <ul className="space-y-3 text-sm text-gray-300">

          {[
            "Industrial Automation",
            "Heavy Structural Fabrication",
            "Precision Machining",
            "Pipeline Fabrication",
            "Machine Maintenance",
            "Boiler Equipment Manufacturing"
          ].map((service, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-[#C79A3B] mt-2 rounded-full"></span>
              {service}
            </li>
          ))}

        </ul>

      </div>


      {/* Contact */}
      <div>

        <h4 className="text-base md:text-lg font-semibold mb-5 text-[#C79A3B]">
          Contact Info
        </h4>

        <ul className="space-y-4 text-sm text-gray-300">

          <li className="flex items-start gap-2">
            📍 MIDC Bhosari, Pune
          </li>

          <li className="flex items-center gap-2">
            <Phone size={16}/> +91 9420925126
          </li>

          <li className="flex items-center gap-2">
            <Mail size={16}/> infosrivruksh@gmail.com
          </li>

          <li className="flex items-center gap-2 text-[#C79A3B] font-medium">
            GSTIN: 27ABJCS7257E1ZO
          </li>

        </ul>

      </div>

    </div>

  </div>


  {/* Divider */}
  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>


  {/* Bottom Bar */}
  <div className="py-5 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-300 max-w-7xl mx-auto gap-2">

    <p className="text-center md:text-left">
      © {new Date().getFullYear()} Srivruksh Industries Pvt Ltd. All Rights Reserved.
    </p>

    <p className="text-center md:text-right">
      Designed & Developed by <span className="text-[#C79A3B] font-medium">QIRO TECH INNOVATION PVT. LTD.</span>
    </p>

  </div>

</footer>

  )
}