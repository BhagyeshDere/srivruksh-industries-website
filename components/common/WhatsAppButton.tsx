"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {

const phoneNumber = "919420925126"
const message = "Hello Srivruksh Industries, I want to know more about your services."
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

return (

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

{/* Tooltip */}

<motion.div
initial={{opacity:0, y:10}}
animate={{opacity:1, y:0}}
transition={{delay:1}}
className="mb-2 hidden md:block bg-[#0B2E5B] text-white text-xs px-3 py-2 rounded-md shadow-lg"
>
Chat with us 👋
</motion.div>


{/* Button */}

<motion.a
href={url}
target="_blank"
rel="noopener noreferrer"
className="group relative flex items-center bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] overflow-hidden"
initial={{scale:0}}
animate={{scale:1}}
transition={{type:"spring", stiffness:120}}
whileHover={{scale:1.05}}
>

{/* Pulse Effect */}

<span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-ping"></span>


{/* Content */}

<div className="relative flex items-center px-4 py-3">

{/* Icon */}

<div className="bg-white/20 p-2 rounded-full mr-2">
<MessageCircle size={22}/>
</div>

{/* Expanding Text */}

<span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 ease-in-out font-semibold text-sm">
Chat with us
</span>

</div>

</motion.a>

</div>

)
}