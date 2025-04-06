'use client';

import Link from 'next/link';
import SimpleLayout from '../components/layout/SimpleLayout';

export default function HomePage() {
  return (
    <SimpleLayout>
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Preserve Your Memories</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful AI-generated images from your memories and organize them in your personal storybook.
          </p>
          <Link href="/create" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            Create New Memory
          </Link>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Describe Your Memory</h3>
              <p className="text-gray-600">Type or speak about a memory you want to preserve, even if you don't have a photo of it.</p>
            </div>
            
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate an Image</h3>
              <p className="text-gray-600">Our AI creates a beautiful, personalized image based on your memory description.</p>
            </div>
            
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Your Storybook</h3>
              <p className="text-gray-600">Organize your memories chronologically or in collections to create your life's storybook.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Memories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recent Memories</h2>
            <Link href="/storybook" className="text-primary-600 hover:text-primary-800 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">That wonderful day at Crystal Lake when we all went swimming and had a picnic by the shore.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">July 15, 2024</span>
                  <Link href="/storybook" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
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
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">They threw me a surprise party for my 30th birthday. I had no idea they were planning it for months!</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">February 10, 2024</span>
                  <Link href="/storybook" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
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
                <h3 className="text-lg font-semibold mb-2">Graduation Day</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">Finally receiving my diploma after years of hard work. Everyone was there to celebrate.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">May 20, 2023</span>
                  <Link href="/storybook" className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SimpleLayout>
  );
}
