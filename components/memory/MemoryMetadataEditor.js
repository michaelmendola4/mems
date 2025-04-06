'use client';

import { useState } from 'react';

export default function MemoryMetadataEditor({ 
  initialDate = '', 
  initialLocation = '', 
  initialPeople = [], 
  initialEmotions = {},
  onSave
}) {
  const [date, setDate] = useState(initialDate);
  const [location, setLocation] = useState(initialLocation);
  const [people, setPeople] = useState(initialPeople);
  const [newPerson, setNewPerson] = useState('');
  const [emotions, setEmotions] = useState(initialEmotions || {
    happy: false,
    excited: false,
    nostalgic: false,
    calm: false,
    sad: false,
    other: false
  });
  const [errors, setErrors] = useState({});

  // Add a person to the people list
  const handleAddPerson = () => {
    if (newPerson.trim() !== '' && !people.includes(newPerson.trim())) {
      setPeople([...people, newPerson.trim()]);
      setNewPerson('');
    }
  };

  // Remove a person from the people list
  const handleRemovePerson = (personToRemove) => {
    setPeople(people.filter(person => person !== personToRemove));
  };

  // Toggle emotion selection
  const handleEmotionToggle = (emotion) => {
    setEmotions({
      ...emotions,
      [emotion]: !emotions[emotion]
    });
  };

  // Validate date field
  const validateDate = (value) => {
    let newErrors = { ...errors };
    
    if (value && new Date(value) > new Date()) {
      newErrors.date = 'Date cannot be in the future';
    } else {
      delete newErrors.date;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle save
  const handleSave = () => {
    if (validateDate(date)) {
      if (onSave) {
        onSave({
          date,
          location,
          people,
          emotions: Object.keys(emotions).filter(e => emotions[e])
        });
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="memoryDate" className="block text-sm font-medium text-gray-700 mb-1">
          When did this happen?
        </label>
        <div className="relative">
          <input
            type="date"
            id="memoryDate"
            className={`w-full px-3 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              validateDate(e.target.value);
            }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        {errors.date && (
          <p className="mt-1 text-sm text-red-600">{errors.date}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="memoryLocation" className="block text-sm font-medium text-gray-700 mb-1">
          Where did this happen?
        </label>
        <div className="relative">
          <input
            type="text"
            id="memoryLocation"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="memoryPeople" className="block text-sm font-medium text-gray-700 mb-1">
          Who was there?
        </label>
        <div className="flex">
          <input
            type="text"
            id="memoryPeople"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Add a person..."
            value={newPerson}
            onChange={(e) => setNewPerson(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddPerson();
              }
            }}
          />
          <button
            type="button"
            className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700"
            onClick={handleAddPerson}
          >
            Add
          </button>
        </div>
        
        {people.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {people.map((person, index) => (
              <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                {person}
                <button
                  type="button"
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  onClick={() => handleRemovePerson(person)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div>
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
      
      <div className="pt-4">
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Save Metadata
        </button>
      </div>
    </div>
  );
}
