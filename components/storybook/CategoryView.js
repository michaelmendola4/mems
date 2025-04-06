'use client';

import { useState, useEffect } from 'react';
import MemoryCard from './MemoryCard';

export default function CategoryView({ collections, memories, onSelectCollection }) {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [displayedMemories, setDisplayedMemories] = useState([]);

  useEffect(() => {
    if (collections && collections.length > 0 && !selectedCollection) {
      setSelectedCollection(collections[0].id);
    }
  }, [collections, selectedCollection]);

  useEffect(() => {
    if (selectedCollection && onSelectCollection) {
      onSelectCollection(selectedCollection);
    }
  }, [selectedCollection, onSelectCollection]);

  useEffect(() => {
    if (selectedCollection && memories) {
      const collection = collections.find(c => c.id === selectedCollection);
      if (collection) {
        const filteredMemories = memories.filter(memory => 
          collection.memoryIds.includes(memory.id)
        );
        setDisplayedMemories(filteredMemories);
      }
    }
  }, [selectedCollection, collections, memories]);

  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No collections found.</p>
      </div>
    );
  }

  return (
    <div className="category-view">
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCollection === collection.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>

      {displayedMemories.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No memories in this collection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedMemories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      )}
    </div>
  );
}
