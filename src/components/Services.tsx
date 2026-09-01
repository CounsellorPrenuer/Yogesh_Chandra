export default function Services() {
  const services = [
    { title: 'Schools', description: 'Early guidance to discover passions and right academic tracks.' },
    { title: 'Colleges', description: 'Streamline choices for higher education and first job prep.' },
    { title: 'Working Professionals', description: 'Career transitions, upskilling, and executive coaching.' },
  ]

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who we serve
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.title} className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
