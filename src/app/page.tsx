import { client } from '@/sanity/client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const revalidate = 60; // revalidate every minute

export default async function Home() {
  const founder = await client.fetch(`*[_type == "founderInfo"][0]{ name, bio, "photoUrl": photo.asset->url }`)
  const pricingPackages = await client.fetch(`*[_type == "pricingPackage"] | order(price asc)`)
  const customPackages = await client.fetch(`*[_type == "customPackage"] | order(price asc)`)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <About founder={founder} />
        <Services />
        <Packages pricingPackages={pricingPackages} customPackages={customPackages} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
