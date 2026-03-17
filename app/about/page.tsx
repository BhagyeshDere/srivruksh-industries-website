import AboutHero from "@/components/sections/about/AboutHero"
import WhoWeAre from "@/components/sections/about/WhoWeAre"
import VisionMission from "@/components/sections/about/VisionMission"
import Values from "@/components/sections/about/Values"
import Facilities from "@/components/sections/about/Facilities"
import Certifications from "@/components/sections/about/Certifications"
import Clients from "@/components/sections/about/Clients"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <VisionMission />
      <Values />
      <Facilities />
      <Certifications />
      <Clients />
    </>
  )
}