import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Srivruksh Industries",
  description: "Engineering & Fabrication Works",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">

        <Navbar />

        {children}

        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <WhatsAppButton />

      </body>
    </html>
  )
}