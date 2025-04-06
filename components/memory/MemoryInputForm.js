import { useState } from 'react';

export default function MemoryInputForm() {
  const [inputMethod, setInputMethod] = useState('text');
  const [memoryTitle, setMemoryTitle] = useState('');
  const [memoryDescription, setMemoryDescription] = useState('');
  const [memoryDate, setMemoryDate] = useState('');
  const [memoryLocation, setMemoryLocation] = useState('');
  const [memoryPeople, setMemoryPeople] = useState('');
  const [emotions, setEmotions] = useState({
    happy: false,
    excited: false,
    nostalgic: false,
    calm: false,
    sad: false,
    other: false
  });

  const handleEmotionToggle = (emotion) => {
    setEmotions({
      ...emotions,
      [emotion]: !emotions[emotion]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be implemented in step 005
    console.log('Memory submitted:', {
      title: memoryTitle,
      description: memoryDescription,
      date: memoryDate,
      location: memoryLocation,
      people: memoryPeople.split(',').map(p => p.trim()),
      emotions: Object.keys(emotions).filter(e => emotions[e])
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">Create New Memory</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="memoryTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Memory Title
          </label>
          <input
            type="text"
            id="memoryTitle"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter a title for your memory"
            value={memoryTitle}
            onChange={(e) => setMemoryTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Input Method
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md ${inputMethod === 'text' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setInputMethod('text')}
            >
              Text
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 rounded-md ${inputMethod === 'voice' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setInputMethod('voice')}
            >
              Voice
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="memoryDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Memory Description
          </label>
          {inputMethod === 'text' ? (
            <textarea
              id="memoryDescription"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Describe your memory in detail..."
              value={memoryDescription}
              onChange={(e) => setMemoryDescription(e.target.value)}
              required
            ></textarea>
          ) : (
            <div className="relative">
              <textarea
                id="memoryDescription"
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Tap microphone to record your memory..."
                value={memoryDescription}
                onChange={(e) => setMemoryDescription(e.target.value)}
                required
              ></textarea>
              <button
                type="button"
                className="absolute bottom-3 right-3 text-gray-500 hover:text-primary-600"
                onClick={() => alert('Voice recording will be implemented in step 005')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="memoryDate" className="block text-sm font-medium text-gray-700 mb-1">
            When did this happen?
          </label>
          <div className="relative">
            <input
              type="date"
              id="memoryDate"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={memoryDate}
              onChange={(e) => setMemoryDate(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="memoryLocation" className="block text-sm font-medium text-gray-700 mb-1">
            Where did this happen?
          </label>
          <div className="relative">
            <input
              type="text"
              id="memoryLocation"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter location..."
              value={memoryLocation}
              onChange={(e) => setMemoryLocation(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="memoryPeople" className="block text-sm font-medium text-gray-700 mb-1">
            Who was there?
          </label>
          <div className="relative">
            <input
              type="text"
              id="memoryPeople"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Add people (comma separated)..."
              value={memoryPeople}
              onChange={(e) => setMemoryPeople(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Emotions
          </label>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(emotions).map((emotion) => (
              <button
                key={emotion}
                type="button"
                className={`py-2 px-3 rounded-md text-sm ${emotions[emotion] ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => handleEmotionToggle(emotion)}
              >
                {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg"
        >
          Generate Image
        </button>
      </form>
    </div>
  );
}
