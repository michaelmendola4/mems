import MemoryCard from './MemoryCard';

export default function StorybookViewer({ memories, chapterTitle }) {
  // Default placeholder data if memories are not provided
  const defaultMemories = [
    {
      id: 'memory1',
      title: 'Lake Vacation',
      date: 'July 15, 2024',
      description: 'That summer day at the lake when we all went swimming and had a picnic by the shore. The water was so clear and the sun was shining brightly.',
      location: 'Crystal Lake, Minnesota',
      people: ['Mom', 'Dad', 'Sarah', 'Michael'],
      emotions: ['Happy', 'Relaxed', 'Nostalgic'],
      imageUrl: null
    },
    {
      id: 'memory2',
      title: 'Campfire Stories',
      date: 'July 17, 2024',
      description: 'Telling ghost stories around the campfire that night. Everyone was huddled close, and the stars were so bright above us.',
      location: 'Pine Forest Campground',
      people: ['Mom', 'Dad', 'Sarah', 'Michael', 'Uncle Bob'],
      emotions: ['Excited', 'Cozy'],
      imageUrl: null
    }
  ];

  const memoriesToDisplay = memories || defaultMemories;
  const title = chapterTitle || 'Summer Memories';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center text-primary-700">{title}</h2>
        <div className="w-16 h-1 bg-primary-500 mx-auto mt-2"></div>
      </div>
      
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Chapter Cover</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      
      <div className="space-y-8">
        {memoriesToDisplay.map((memory, index) => (
          <div key={memory.id} className="border-b border-gray-200 pb-8 last:border-b-0">
            <MemoryCard memory={memory} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-8">
        <button className="flex items-center text-gray-600 hover:text-primary-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <button className="flex items-center text-gray-600 hover:text-primary-600">
          Next
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
