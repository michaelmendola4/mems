'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SimpleLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Mems
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link 
                  href="/create" 
                  className={`py-2 px-3 ${pathname === '/create' ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-600'}`}
                >
                  Create Memory
                </Link>
              </li>
              <li>
                <Link 
                  href="/storybook" 
                  className={`py-2 px-3 ${pathname === '/storybook' ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-600'}`}
                >
                  My Storybook
                </Link>
              </li>
              <li>
                <Link 
                  href="/timeline" 
                  className={`py-2 px-3 ${pathname === '/timeline' ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-600'}`}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections" 
                  className={`py-2 px-3 ${pathname === '/collections' ? 'text-primary-600 font-medium' : 'text-gray-700 hover:text-primary-600'}`}
                >
                  Collections
                </Link>
              </li>
            </ul>
          </nav>
          
          <Link href="/profile" className="flex items-center text-gray-700 hover:text-primary-600">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </Link>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow pb-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className={`flex flex-col items-center py-2 px-4 ${pathname === '/' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </Link>
            
            <Link 
              href="/search" 
              className={`flex flex-col items-center py-2 px-4 ${pathname === '/search' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs mt-1">Search</span>
            </Link>
            
            <Link 
              href="/create" 
              className={`flex flex-col items-center py-2 px-4 ${pathname === '/create' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center -mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-xs mt-1">New</span>
            </Link>
            
            <Link 
              href="/storybook" 
              className={`flex flex-col items-center py-2 px-4 ${pathname === '/storybook' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs mt-1">Storybook</span>
            </Link>
            
            <Link 
              href="/settings" 
              className={`flex flex-col items-center py-2 px-4 ${pathname === '/settings' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs mt-1">Settings</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
