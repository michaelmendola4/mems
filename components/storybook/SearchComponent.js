'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Call the onSearch callback if provided
    if (onSearch) {
      onSearch(query, searchType);
    } else {
      // Otherwise navigate to search results page
      router.push(`/search?q=${encodeURIComponent(query)}&type=${searchType}`);
    }
    
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col space-y-2">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Search memories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              disabled={isSearching}
            >
              {isSearching ? (
                <svg className="animate-spin h-5 w-5 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={`px-3 py-1 text-xs rounded-full ${searchType === 'all' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSearchType('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs rounded-full ${searchType === 'title' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSearchType('title')}
            >
              Title
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs rounded-full ${searchType === 'people' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSearchType('people')}
            >
              People
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs rounded-full ${searchType === 'location' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSearchType('location')}
            >
              Location
            </button>
            <button
              type="button"
              className={`px-3 py-1 text-xs rounded-full ${searchType === 'emotion' ? 'bg-primary-100 text-primary-800' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setSearchType('emotion')}
            >
              Emotion
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
