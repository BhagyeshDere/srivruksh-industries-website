import { Suspense } from "react"
import ContactClient from "./ContactClient"

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ContactClient />
    </Suspense>
  )
}