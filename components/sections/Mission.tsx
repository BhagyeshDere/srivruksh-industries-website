"use client"

import { motion } from "framer-motion"

export default function Mission() {

const missions = [
{
icon:"🤝",
title:"Customer Commitment",
text:"Providing long-term commitment and reliable engineering support to all our customers."
},
{
icon:"⚙",
title:"Engineering Excellence",
text:"Combining technical knowledge with the highest standards of manufacturing practices."
},
{
icon:"🚀",
title:"Innovation & Growth",
text:"Achieving the highest level of innovation, skill and competence in engineering solutions."
}
]

return (

<motion.section
className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
viewport={{once:true}}
>

{/* Background Decoration */}

<div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0B2E5B]/8 rounded-full blur-3xl"></div>
<div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#C79A3B]/15 rounded-full blur-3xl"></div>

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<motion.div
className="text-center mb-20"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<p className="text-[#C79A3B] uppercase tracking-widest font-semibold mb-3">
Our Mission
</p>

<h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-4">
Working Together Successfully
</h2>

<p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
We are committed to delivering innovative engineering and
manufacturing solutions while maintaining the highest standards
of quality, integrity and customer satisfaction.
</p>

</motion.div>


{/* Mission Items */}

<div className="grid md:grid-cols-3 gap-12">

{missions.map((item,index)=>(

<motion.div
key={index}
className="group text-center"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index * 0.2, duration:0.6}}
viewport={{once:true}}
>

{/* Icon Circle */}

<motion.div
className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-[#0B2E5B]/10 text-3xl text-[#C79A3B] mb-6 
shadow-[0_12px_25px_rgba(0,0,0,0.12)] 
group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]
group-hover:scale-110 transition duration-300"
animate={{y:[0,-6,0]}}
transition={{repeat:Infinity,duration:3}}
>

{item.icon}

</motion.div>

{/* Title */}

<h3 className="text-xl font-semibold text-[#0B2E5B] mb-3">
{item.title}
</h3>

{/* Divider */}

<div className="w-12 h-[2px] bg-[#C79A3B] mx-auto mb-4 group-hover:w-20 transition-all"></div>

{/* Description */}

<p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
{item.text}
</p>

</motion.div>

))}

</div>

</div>

</motion.section>

)

}