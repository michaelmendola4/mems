'use client';

import SimpleLayout from '../../components/layout/SimpleLayout';
import Link from 'next/link';

export default function TimelinePage() {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">Memory Timeline</h1>
        
        <div className="max-w-3xl mx-auto">
          {/* Year 2024 */}
          <div className="mb-6">
            <button className="flex items-center w-full text-left font-bold text-lg text-gray-800 hover:text-primary-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              2024
            </button>
            
            <div className="pl-6 border-l-2 border-gray-200">
              {/* February */}
              <div className="mb-4">
                <button className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 transform rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  February
                </button>
                
                <div className="pl-6 space-y-4">
                  <div className="border-l-2 border-primary-200 pl-4 py-1">
                    <div className="text-sm text-gray-500 mb-1">February 10, 2024</div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Birthday Party Surprise</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          They threw me a surprise party for my 30th birthday. I had no idea they were planning it for months!
                        </p>
                        <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* July */}
              <div className="mb-4">
                <button className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 transform rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  July
                </button>
                
                <div className="pl-6 space-y-4">
                  <div className="border-l-2 border-primary-200 pl-4 py-1">
                    <div className="text-sm text-gray-500 mb-1">July 15, 2024</div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Summer Vacation at the Lake</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          That wonderful day at Crystal Lake when we all went swimming and had a picnic by the shore.
                        </p>
                        <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Year 2023 */}
          <div className="mb-6">
            <button className="flex items-center w-full text-left font-bold text-lg text-gray-800 hover:text-primary-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              2023
            </button>
            
            <div className="pl-6 border-l-2 border-gray-200">
              {/* May */}
              <div className="mb-4">
                <button className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 transform rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  May
                </button>
                
                <div className="pl-6 space-y-4">
                  <div className="border-l-2 border-primary-200 pl-4 py-1">
                    <div className="text-sm text-gray-500 mb-1">May 20, 2023</div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Graduation Day</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Finally receiving my diploma after years of hard work. Everyone was there to celebrate.
                        </p>
                        <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* September */}
              <div className="mb-4">
                <button className="flex items-center w-full text-left font-medium text-gray-700 hover:text-primary-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 transform rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  September
                </button>
                
                <div className="pl-6 space-y-4">
                  <div className="border-l-2 border-primary-200 pl-4 py-1">
                    <div className="text-sm text-gray-500 mb-1">September 5, 2023</div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Hiking Trip in the Mountains</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          That challenging hike up to Eagle Peak. The view from the top was absolutely breathtaking.
                        </p>
                        <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/create" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-6 rounded-lg">
              Add New Memory
            </Link>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
