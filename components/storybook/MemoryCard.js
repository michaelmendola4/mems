export default function MemoryCard({ memory }) {
  // Default placeholder data if memory is not provided
  const defaultMemory = {
    id: 'placeholder',
    title: 'Summer Vacation',
    date: 'July 15, 2024',
    description: 'That summer day at the lake when we all went swimming and had a picnic by the shore.',
    location: 'Crystal Lake, Minnesota',
    people: ['Mom', 'Dad', 'Sarah', 'Michael'],
    emotions: ['Happy', 'Relaxed', 'Nostalgic'],
    imageUrl: null
  };

  const memoryData = memory || defaultMemory;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 relative">
        {memoryData.imageUrl ? (
          <img 
            src={memoryData.imageUrl} 
            alt={memoryData.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{memoryData.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{memoryData.date}</p>
        <p className="text-sm text-gray-700 line-clamp-3 mb-2">{memoryData.description}</p>
        
        {memoryData.location && (
          <div className="flex items-center text-xs text-gray-500 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {memoryData.location}
          </div>
        )}
        
        {memoryData.people && memoryData.people.length > 0 && (
          <div className="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {memoryData.people.slice(0, 3).join(', ')}
            {memoryData.people.length > 3 && ` +${memoryData.people.length - 3} more`}
          </div>
        )}
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1">
          {memoryData.emotions && memoryData.emotions.map((emotion, index) => (
            <span key={index} className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
              {emotion}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
