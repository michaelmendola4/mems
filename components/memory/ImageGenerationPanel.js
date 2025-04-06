import { useState } from 'react';

export default function ImageGenerationPanel({ memoryDescription }) {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [prompt, setPrompt] = useState(memoryDescription || '');
  
  const styles = [
    { id: 'realistic', name: 'Realistic' },
    { id: 'artistic', name: 'Artistic' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'cartoon', name: 'Cartoon' },
    { id: 'abstract', name: 'Abstract' }
  ];

  const handleGenerateImage = () => {
    // This will be implemented in step 006
    console.log('Generating image with prompt:', prompt, 'and style:', selectedStyle);
    // Placeholder for now
    setGeneratedImage('/placeholder-image.jpg');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary-700">Generate Memory Image</h2>
      
      {generatedImage ? (
        <div className="mb-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center p-4">
              <p className="text-gray-500">Image will be generated in step 006</p>
              <div className="w-full h-48 bg-gray-300 rounded-lg mt-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image Style
        </label>
        <div className="grid grid-cols-5 gap-2">
          {styles.map((style) => (
            <button
              key={style.id}
              type="button"
              className={`py-2 px-3 rounded-md text-sm ${selectedStyle === style.id ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setSelectedStyle(style.id)}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
          Adjust Description
        </label>
        <textarea
          id="prompt"
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Edit prompt for image generation..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
      </div>
      
      <div className="flex flex-col space-y-3">
        <button
          type="button"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg"
          onClick={handleGenerateImage}
        >
          {generatedImage ? 'Regenerate Image' : 'Generate Image'}
        </button>
        
        {generatedImage && (
          <button
            type="button"
            className="w-full bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 font-bold py-3 px-4 rounded-lg"
          >
            Edit Image
          </button>
        )}
        
        {generatedImage && (
          <button
            type="button"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg"
          >
            Save to Storybook
          </button>
        )}
      </div>
    </div>
  );
}
