'use client';

import { useState } from 'react';

export default function ImageEditor({ imageUrl, onSave }) {
  const [editedImage, setEditedImage] = useState(imageUrl);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [activeTab, setActiveTab] = useState('adjust');

  // In a real implementation, these functions would apply actual image transformations
  // For now, they just update state to simulate the editing process
  
  const handleBrightnessChange = (value) => {
    setBrightness(value);
    console.log('Adjusting brightness to:', value);
  };

  const handleContrastChange = (value) => {
    setContrast(value);
    console.log('Adjusting contrast to:', value);
  };

  const handleSaturationChange = (value) => {
    setSaturation(value);
    console.log('Adjusting saturation to:', value);
  };

  const handleCropChange = (newCrop) => {
    setCrop(newCrop);
    console.log('Adjusting crop to:', newCrop);
  };

  const handleSave = () => {
    // In a real implementation, this would apply all edits and return the final image
    if (onSave) {
      onSave(editedImage, {
        brightness,
        contrast,
        saturation,
        crop
      });
    }
  };

  const handleReset = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setCrop({ x: 0, y: 0, width: 100, height: 100 });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">Edit Image</h2>
      
      <div className="mb-6">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
          {/* In a real implementation, this would display the actual image being edited */}
          <div className="text-center p-4">
            <p className="text-gray-500">Image Preview</p>
            <div className="w-full h-48 bg-gray-300 rounded-lg mt-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'adjust' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('adjust')}
          >
            Adjust
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'crop' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('crop')}
          >
            Crop
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'filter' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('filter')}
          >
            Filters
          </button>
        </div>
        
        <div className="pt-4">
          {activeTab === 'adjust' && (
            <div className="space-y-4">
              <div>
                <label htmlFor="brightness" className="block text-sm font-medium text-gray-700 mb-1">
                  Brightness: {brightness}%
                </label>
                <input
                  type="range"
                  id="brightness"
                  min="0"
                  max="200"
                  value={brightness}
                  onChange={(e) => handleBrightnessChange(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="contrast" className="block text-sm font-medium text-gray-700 mb-1">
                  Contrast: {contrast}%
                </label>
                <input
                  type="range"
                  id="contrast"
                  min="0"
                  max="200"
                  value={contrast}
                  onChange={(e) => handleContrastChange(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="saturation" className="block text-sm font-medium text-gray-700 mb-1">
                  Saturation: {saturation}%
                </label>
                <input
                  type="range"
                  id="saturation"
                  min="0"
                  max="200"
                  value={saturation}
                  onChange={(e) => handleSaturationChange(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}
          
          {activeTab === 'crop' && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Drag to crop the image</p>
              <div className="w-full h-48 bg-gray-200 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
                <p className="text-gray-400">Crop interface would appear here</p>
              </div>
            </div>
          )}
          
          {activeTab === 'filter' && (
            <div className="grid grid-cols-3 gap-3 py-4">
              {['Original', 'Vintage', 'Noir', 'Chrome', 'Fade', 'Warm', 'Cool', 'Sepia', 'Grayscale'].map((filter) => (
                <button
                  key={filter}
                  className="p-2 border border-gray-300 rounded-md text-sm text-center hover:bg-gray-50"
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex space-x-3">
        <button
          type="button"
          onClick={handleReset}
          className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Apply Changes
        </button>
      </div>
    </div>
  );
}
