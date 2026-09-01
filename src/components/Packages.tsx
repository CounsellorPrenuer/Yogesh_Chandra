'use client'

import { useState } from 'react'

export default function Packages({ pricingPackages, customPackages }: { pricingPackages: any[], customPackages: any[] }) {
  const [activeTab, setActiveTab] = useState('8-9 STUDENTS')
  const [viewMode, setViewMode] = useState('mentoria') // 'mentoria' or 'custom'

  const categories = ['8-9 STUDENTS', '10-12 STUDENTS', 'COLLEGE GRADUATES', 'WORKING PROFESSIONALS']

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Path</h2>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button 
            onClick={() => setViewMode('mentoria')}
            className={`px-6 py-2 rounded-md font-medium ${viewMode === 'mentoria' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Mentoria's Plans
          </button>
          <button 
            onClick={() => setViewMode('custom')}
            className={`px-6 py-2 rounded-md font-medium ${viewMode === 'custom' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            Customize Your Mentorship Plan
          </button>
        </div>

        {viewMode === 'mentoria' && (
          <div>
            <div className="border-b border-gray-200 mb-8">
              <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`${
                      activeTab === category
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
              {pricingPackages.filter(p => p.category === activeTab).map((pkg) => (
                <div key={pkg._id} className={`border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white ${pkg.tier === 'PREMIUM' ? 'ring-2 ring-red-600' : ''}`}>
                  <div className="p-6 text-center">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{pkg.tier}</h2>
                    <p className="mt-2 text-2xl font-semibold text-gray-900">{pkg.title}</p>
                    <p className="mt-4 text-4xl font-extrabold text-gray-900">₹ {pkg.price.toLocaleString()}</p>
                    <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 font-semibold">BUY NOW</button>
                  </div>
                  <div className="pt-6 pb-8 px-6">
                    <ul className="mt-4 space-y-4">
                      {pkg.features.map((feature: any, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0">
                            {feature.included ? (
                              <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )}
                          </div>
                          <p className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>{feature.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'custom' && (
          <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
            {customPackages.map((pkg) => (
              <div key={pkg._id} className="border border-gray-200 rounded-lg shadow-sm p-6 bg-gray-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="mt-2 text-2xl font-extrabold text-gray-900">₹ {pkg.price.toLocaleString()}</p>
                  <p className="mt-4 text-sm text-gray-500">{pkg.description}</p>
                </div>
                <div className="mt-6">
                  <button className="bg-purple-700 hover:bg-purple-800 text-white rounded px-6 py-2 font-semibold">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
