'use client';

import { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import VoiceRecorder from './VoiceRecorder';

export default function EnhancedMemoryInputForm() {
  const [inputMethod, setInputMethod] = useState('text');
  const [memoryTitle, setMemoryTitle] = useState('');
  const [memoryDescription, setMemoryDescription] = useState('');
  const [memoryDate, setMemoryDate] = useState('');
  const [memoryLocation, setMemoryLocation] = useState('');
  const [memoryPeople, setMemoryPeople] = useState([]);
  const [newPerson, setNewPerson] = useState('');
  const [emotions, setEmotions] = useState({
    happy: false,
    excited: false,
    nostalgic: false,
    calm: false,
    sad: false,
    other: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle rich text editor changes
  const handleEditorChange = (content) => {
    setMemoryDescription(content);
    validateField('memoryDescription', content);
  };

  // Handle voice transcription completion
  const handleTranscriptionComplete = (transcript) => {
    setMemoryDescription(transcript);
    validateField('memoryDescription', transcript);
  };

  // Add a person to the people list
  const handleAddPerson = () => {
    if (newPerson.trim() !== '' && !memoryPeople.includes(newPerson.trim())) {
      setMemoryPeople([...memoryPeople, newPerson.trim()]);
      setNewPerson('');
    }
  };

  // Remove a person from the people list
  const handleRemovePerson = (personToRemove) => {
    setMemoryPeople(memoryPeople.filter(person => person !== personToRemove));
  };

  // Toggle emotion selection
  const handleEmotionToggle = (emotion) => {
    setEmotions({
      ...emotions,
      [emotion]: !emotions[emotion]
    });
  };

  // Form validation
  const validateField = (fieldName, value) => {
    let errors = { ...formErrors };

    switch (fieldName) {
      case 'memoryTitle':
        if (!value.trim()) {
          errors.memoryTitle = 'Title is required';
        } else if (value.length > 100) {
          errors.memoryTitle = 'Title must be less than 100 characters';
        } else {
          delete errors.memoryTitle;
        }
        break;
      case 'memoryDescription':
        if (!value.trim()) {
          errors.memoryDescription = 'Description is required';
        } else {
          delete errors.memoryDescription;
        }
        break;
      case 'memoryDate':
        if (value && new Date(value) > new Date()) {
          errors.memoryDate = 'Date cannot be in the future';
        } else {
          delete errors.memoryDate;
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Validate the entire form
  const validateForm = () => {
    let isValid = true;
    
    isValid = validateField('memoryTitle', memoryTitle) && isValid;
    isValid = validateField('memoryDescription', memoryDescription) && isValid;
    isValid = validateField('memoryDate', memoryDate) && isValid;
    
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Prepare the memory data
      const memoryData = {
        title: memoryTitle,
        description: memoryDescription,
        date: memoryDate || null,
        location: memoryLocation || null,
        people: memoryPeople,
        emotions: Object.keys(emotions).filter(e => emotions[e])
      };
      
      console.log('Memory submitted:', memoryData);
      
      // This would typically be an API call to save the memory
      // For now, we'll simulate a successful submission
      setTimeout(() => {
        setIsSubmitting(false);
        // Reset form or navigate to next step
        // This will be connected to the image generation step
        alert('Memory saved successfully! Ready for image generation.');
      }, 1000);
    }
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
            className={`w-full px-3 py-2 border ${formErrors.memoryTitle ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
            placeholder="Enter a title for your memory"
            value={memoryTitle}
            onChange={(e) => {
              setMemoryTitle(e.target.value);
              validateField('memoryTitle', e.target.value);
            }}
            required
          />
          {formErrors.memoryTitle && (
            <p className="mt-1 text-sm text-red-600">{formErrors.memoryTitle}</p>
          )}
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
            <div className={formErrors.memoryDescription ? 'border border-red-500 rounded-md' : ''}>
              <RichTextEditor 
                value={memoryDescription} 
                onChange={handleEditorChange} 
              />
            </div>
          ) : (
            <div className="relative">
              <textarea
                id="memoryDescription"
                rows="5"
                className={`w-full px-3 py-2 border ${formErrors.memoryDescription ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                placeholder="Tap microphone to record your memory..."
                value={memoryDescription}
                onChange={(e) => {
                  setMemoryDescription(e.target.value);
                  validateField('memoryDescription', e.target.value);
                }}
                required
              ></textarea>
              <div className="absolute bottom-3 right-3">
                <VoiceRecorder onTranscriptionComplete={handleTranscriptionComplete} />
              </div>
            </div>
          )}
          {formErrors.memoryDescription && (
            <p className="mt-1 text-sm text-red-600">{formErrors.memoryDescription}</p>
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
              className={`w-full px-3 py-2 border ${formErrors.memoryDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
              value={memoryDate}
              onChange={(e) => {
                setMemoryDate(e.target.value);
                validateField('memoryDate', e.target.value);
              }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          {formErrors.memoryDate && (
            <p className="mt-1 text-sm text-red-600">{formErrors.memoryDate}</p>
          )}
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
          
          {memoryPeople.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {memoryPeople.map((person, index) => (
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
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Generate Image'
          )}
        </button>
      </form>
    </div>
  );
}
