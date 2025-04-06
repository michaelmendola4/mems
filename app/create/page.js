'use client';

import { useState } from 'react';
import SimpleLayout from '../../components/layout/SimpleLayout';
import Link from 'next/link';

export default function CreatePage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    people: '',
    emotions: ''
  });
  
  const [currentStep, setCurrentStep] = useState('input'); // 'input' or 'preview'
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [error, setError] = useState('');
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.description) {
      alert('Please provide at least a title and description for your memory.');
      return;
    }
    
    // Generate image
    setIsGenerating(true);
    setError('');
    
    try {
      // Call the secure API route
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }
      
      const data = await response.json();
      setGeneratedPrompt(data.prompt);
      setGeneratedImage(data.imageUrl);
      
      // Move to preview step
      setCurrentStep('preview');
    } catch (error) {
      console.error('Error generating image:', error);
      setError(error.message || 'Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleSaveMemory = () => {
    // In a real app, this would save to backend
    alert('Memory saved successfully!');
    // Reset form and go back to input step
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      people: '',
      emotions: ''
    });
    setGeneratedImage('');
    setGeneratedPrompt('');
    setError('');
    setCurrentStep('input');
  };
  
  const handleRegenerateImage = async () => {
    setIsGenerating(true);
    setError('');
    
    try {
      // Call the secure API route again
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }
      
      const data = await response.json();
      setGeneratedPrompt(data.prompt);
      setGeneratedImage(data.imageUrl);
    } catch (error) {
      console.error('Error regenerating image:', error);
      setError(error.message || 'Failed to regenerate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary-700">
          {currentStep === 'input' ? 'Create New Memory' : 'Preview Memory'}
        </h1>
        
        {currentStep === 'input' ? (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Memory Title</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter a title for your memory"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Memory Description</label>
                <textarea
                  id="description"
                  rows={6}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Describe your memory in detail..."
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Where did this memory take place?"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">People</label>
                <input
                  type="text"
                  id="people"
                  value={formData.people}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Who was involved? (comma separated)"
                />
              </div>
              
              <div>
                <label htmlFor="emotions" className="block text-sm font-medium text-gray-700 mb-1">Emotions</label>
                <input
                  type="text"
                  id="emotions"
                  value={formData.emotions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="How did you feel? (comma separated)"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Image...
                    </>
                  ) : (
                    'Generate Image from Memory'
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{formData.title}</h2>
                
                <div className="mb-6">
                  {isGenerating ? (
                    <div className="h-64 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="animate-spin h-10 w-10 text-primary-600 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-gray-600">Generating new image...</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="h-64 bg-red-50 flex items-center justify-center p-4 rounded-lg">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-red-600 font-medium mb-2">Error Generating Image</p>
                        <p className="text-red-500 text-sm">{error}</p>
                        <button 
                          onClick={handleRegenerateImage}
                          className="mt-4 bg-red-100 hover:bg-red-200 text-red-700 font-bold py-2 px-4 rounded-lg text-sm"
                        >
                          Try Again
                        </button>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={generatedImage} 
                      alt={formData.title} 
                      className="w-full h-64 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        // Fallback image if even our reliable images fail
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiPk1lbW9yeSBJbWFnZTwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                  )}
                </div>
                
                {generatedPrompt && (
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">AI Prompt Used</h3>
                    <p className="text-xs text-gray-600">{generatedPrompt}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700 whitespace-pre-line">{formData.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {formData.date && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">Date</h3>
                      <p>{new Date(formData.date).toLocaleDateString()}</p>
                    </div>
                  )}
                  
                  {formData.location && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">Location</h3>
                      <p>{formData.location}</p>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {formData.people && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">People</h3>
                      <div className="flex flex-wrap gap-1">
                        {formData.people.split(',').map((person, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                            {person.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {formData.emotions && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">Emotions</h3>
                      <div className="flex flex-wrap gap-1">
                        {formData.emotions.split(',').map((emotion, index) => (
                          <span key={index} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                            {emotion.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleRegenerateImage}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg flex items-center justify-center"
                    disabled={isGenerating}
                  >
                    Regenerate Image
                  </button>
                  
                  <button
                    onClick={handleSaveMemory}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Save Memory
                  </button>
                  
                  <button
                    onClick={() => setCurrentStep('input')}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SimpleLayout>
  );
}
