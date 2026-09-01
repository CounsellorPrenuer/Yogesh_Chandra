'use client'

import { useEffect, useState } from 'react'
import { client } from '@/sanity/client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [data, setData] = useState<any>({ founder: null, pricingPackages: [], customPackages: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const founder = await client.fetch(`*[_type == "founderInfo"][0]{ name, bio, "photoUrl": photo.asset->url }`)
        const pricingPackages = await client.fetch(`*[_type == "pricingPackage"] | order(price asc)`)
        const customPackages = await client.fetch(`*[_type == "customPackage"] | order(price asc)`)
        setData({ founder, pricingPackages, customPackages })
      } catch (error) {
        console.error("Error fetching data from Sanity:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About founder={data.founder} />
        <Services />
        <Packages pricingPackages={data.pricingPackages} customPackages={data.customPackages} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
