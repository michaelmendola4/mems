'use client';

import SimpleLayout from '../../components/layout/SimpleLayout';
import Link from 'next/link';

export default function SearchPage() {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">Search Memories</h1>
        
        <div className="max-w-2xl mx-auto mb-8">
          <div className="w-full">
            <form className="w-full">
              <div className="flex flex-col space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Search memories..."
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-800"
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    Title
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    People
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    Location
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                  >
                    Emotion
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Sample search results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="w-full h-full flex items-center justify-center bg-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Summer Vacation at the Lake</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  That wonderful day at Crystal Lake when we all went swimming and had a picnic by the shore.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">July 15, 2024</span>
                  <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    View
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <div className="w-full h-full flex items-center justify-center bg-primary-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Hiking Trip in the Mountains</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  That challenging hike up to Eagle Peak. The view from the top was absolutely breathtaking.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">September 5, 2023</span>
                  <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
