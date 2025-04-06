'use client';

import SimpleLayout from '../../components/layout/SimpleLayout';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">Memory Collections</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              <button className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-primary-600 text-white">
                Family Moments
              </button>
              <button className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-gray-200 text-gray-700 hover:bg-gray-300">
                Adventures
              </button>
              <button className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-gray-200 text-gray-700 hover:bg-gray-300">
                Work Memories
              </button>
              <button className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-gray-200 text-gray-700 hover:bg-gray-300">
                Special Occasions
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Memory Cards */}
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
                <h3 className="text-lg font-semibold mb-2">Birthday Party Surprise</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  They threw me a surprise party for my 30th birthday. I had no idea they were planning it for months!
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">February 10, 2024</span>
                  <Link href="#" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    View
                  </Link>
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
