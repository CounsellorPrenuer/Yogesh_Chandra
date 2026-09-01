export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info on Left */}
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:ycchaudhary9@gmail.com" className="hover:text-red-600">ycchaudhary9@gmail.com</a>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold w-24">Phone:</span>
                <a href="tel:9415129504" className="hover:text-red-600">9415129504</a>
              </p>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
              <a href="https://www.linkedin.com/in/prof-dr-yogesh-chandra-10503611b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Form on Right */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" placeholder="Your Name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input type="email" name="email" id="email" className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md" placeholder="How can we help you?"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
