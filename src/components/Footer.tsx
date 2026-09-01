export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="text-gray-400 font-bold text-xl">careerAI</span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} careerAI by Dr. Yogesh Chandra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
