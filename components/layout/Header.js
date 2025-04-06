'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          Mems
        </Link>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <nav className={`absolute top-16 left-0 right-0 bg-white shadow-md md:shadow-none md:static md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li>
              <Link href="/create" className="block py-2 px-4 text-gray-700 hover:text-primary-600 md:px-2">
                Create Memory
              </Link>
            </li>
            <li>
              <Link href="/storybook" className="block py-2 px-4 text-gray-700 hover:text-primary-600 md:px-2">
                My Storybook
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="block py-2 px-4 text-gray-700 hover:text-primary-600 md:px-2">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/collections" className="block py-2 px-4 text-gray-700 hover:text-primary-600 md:px-2">
                Collections
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Link href="/profile" className="flex items-center text-gray-700 hover:text-primary-600">
            <span className="mr-2">Profile</span>
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
