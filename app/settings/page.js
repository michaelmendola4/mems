'use client';

import SimpleLayout from '../../components/layout/SimpleLayout';

export default function SettingsPage() {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">Settings</h1>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
                <p className="text-sm text-gray-500">Receive notifications about your memories</p>
              </div>
              <button 
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Dark Mode</h3>
                <p className="text-sm text-gray-500">Use dark theme for the app</p>
              </div>
              <button 
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Auto-Save</h3>
                <p className="text-sm text-gray-500">Automatically save memory drafts</p>
              </div>
              <button 
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600"
              >
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
              </button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Privacy Level</h3>
              <select 
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2 border"
              >
                <option value="private">Private (Only me)</option>
                <option value="friends">Friends only</option>
                <option value="public">Public</option>
              </select>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Language</h3>
              <select 
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2 border"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="japanese">Japanese</option>
              </select>
            </div>
            
            <div className="pt-4">
              <button
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
