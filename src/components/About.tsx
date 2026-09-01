import Image from 'next/image'

export default function About({ founder }: { founder: any }) {
  if (!founder) return null;

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About the Founder
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              {founder.name}
            </p>
            <div className="mt-5 prose prose-red text-gray-500">
              <p>{founder.bio}</p>
            </div>
            <div className="mt-8">
              <a href="https://www.linkedin.com/in/prof-dr-yogesh-chandra-10503611b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 relative h-96 w-full rounded-lg overflow-hidden">
            {founder.photoUrl && (
              <Image 
                src={founder.photoUrl} 
                alt={founder.name} 
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
