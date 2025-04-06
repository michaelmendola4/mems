'use client';

import SimpleLayout from '../../components/layout/SimpleLayout';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">My Profile</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">john.doe@example.com</p>
                  <p className="mt-2 text-gray-700">I love capturing memories and turning them into beautiful stories.</p>
                  
                  <button
                    className="mt-4 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Account Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Memories</p>
                <p className="text-2xl font-bold text-primary-600">24</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Collections</p>
                <p className="text-2xl font-bold text-primary-600">5</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Images</p>
                <p className="text-2xl font-bold text-primary-600">36</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="text-2xl font-bold text-primary-600">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
