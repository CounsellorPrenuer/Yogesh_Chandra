import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="flex items-center">
              <img src="./images/logo.jpg" alt="careerAI Logo" className="object-contain h-20 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">About Founder</Link>
            <Link href="#services" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Services</Link>
            <Link href="#packages" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Mentoria Plans</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Testimonials</Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium">Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
