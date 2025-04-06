'use client';

import { useState, useEffect } from 'react';
import { Memory, Chapter, Collection } from './models';

// StorybookManager handles the organization and management of memories
export default function StorybookManager() {
  // In-memory storage for demo purposes
  // In a real app, this would use a database or localStorage
  const [memories, setMemories] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [collections, setCollections] = useState([]);
  
  // Add a new memory
  const addMemory = (memoryData) => {
    const newMemory = new Memory(memoryData);
    setMemories(prevMemories => [...prevMemories, newMemory]);
    return newMemory;
  };
  
  // Update an existing memory
  const updateMemory = (memoryId, updates) => {
    setMemories(prevMemories => 
      prevMemories.map(memory => 
        memory.id === memoryId 
          ? new Memory({ ...memory, ...updates, updatedAt: new Date() }) 
          : memory
      )
    );
  };
  
  // Delete a memory
  const deleteMemory = (memoryId) => {
    // Remove from memories
    setMemories(prevMemories => 
      prevMemories.filter(memory => memory.id !== memoryId)
    );
    
    // Remove from chapters
    setChapters(prevChapters => 
      prevChapters.map(chapter => {
        if (chapter.memoryIds.includes(memoryId)) {
          const updatedChapter = new Chapter(chapter);
          updatedChapter.removeMemory(memoryId);
          return updatedChapter;
        }
        return chapter;
      })
    );
    
    // Remove from collections
    setCollections(prevCollections => 
      prevCollections.map(collection => {
        if (collection.memoryIds.includes(memoryId)) {
          const updatedCollection = new Collection(collection);
          updatedCollection.removeMemory(memoryId);
          return updatedCollection;
        }
        return collection;
      })
    );
  };
  
  // Add a new chapter
  const addChapter = (chapterData) => {
    const newChapter = new Chapter(chapterData);
    setChapters(prevChapters => [...prevChapters, newChapter]);
    return newChapter;
  };
  
  // Update an existing chapter
  const updateChapter = (chapterId, updates) => {
    setChapters(prevChapters => 
      prevChapters.map(chapter => 
        chapter.id === chapterId 
          ? new Chapter({ ...chapter, ...updates, updatedAt: new Date() }) 
          : chapter
      )
    );
  };
  
  // Delete a chapter
  const deleteChapter = (chapterId) => {
    // Remove chapter
    setChapters(prevChapters => 
      prevChapters.filter(chapter => chapter.id !== chapterId)
    );
    
    // Update memories that were in this chapter
    setMemories(prevMemories => 
      prevMemories.map(memory => {
        if (memory.chapterId === chapterId) {
          return new Memory({ ...memory, chapterId: null, updatedAt: new Date() });
        }
        return memory;
      })
    );
  };
  
  // Add a new collection
  const addCollection = (collectionData) => {
    const newCollection = new Collection(collectionData);
    setCollections(prevCollections => [...prevCollections, newCollection]);
    return newCollection;
  };
  
  // Update an existing collection
  const updateCollection = (collectionId, updates) => {
    setCollections(prevCollections => 
      prevCollections.map(collection => 
        collection.id === collectionId 
          ? new Collection({ ...collection, ...updates, updatedAt: new Date() }) 
          : collection
      )
    );
  };
  
  // Delete a collection
  const deleteCollection = (collectionId) => {
    setCollections(prevCollections => 
      prevCollections.filter(collection => collection.id !== collectionId)
    );
  };
  
  // Add memory to chapter
  const addMemoryToChapter = (memoryId, chapterId) => {
    // Update the chapter
    setChapters(prevChapters => 
      prevChapters.map(chapter => {
        if (chapter.id === chapterId) {
          const updatedChapter = new Chapter(chapter);
          updatedChapter.addMemory(memoryId);
          return updatedChapter;
        }
        return chapter;
      })
    );
    
    // Update the memory
    setMemories(prevMemories => 
      prevMemories.map(memory => {
        if (memory.id === memoryId) {
          return new Memory({ ...memory, chapterId, updatedAt: new Date() });
        }
        return memory;
      })
    );
  };
  
  // Remove memory from chapter
  const removeMemoryFromChapter = (memoryId, chapterId) => {
    // Update the chapter
    setChapters(prevChapters => 
      prevChapters.map(chapter => {
        if (chapter.id === chapterId) {
          const updatedChapter = new Chapter(chapter);
          updatedChapter.removeMemory(memoryId);
          return updatedChapter;
        }
        return chapter;
      })
    );
    
    // Update the memory
    setMemories(prevMemories => 
      prevMemories.map(memory => {
        if (memory.id === memoryId && memory.chapterId === chapterId) {
          return new Memory({ ...memory, chapterId: null, updatedAt: new Date() });
        }
        return memory;
      })
    );
  };
  
  // Add memory to collection
  const addMemoryToCollection = (memoryId, collectionId) => {
    setCollections(prevCollections => 
      prevCollections.map(collection => {
        if (collection.id === collectionId) {
          const updatedCollection = new Collection(collection);
          updatedCollection.addMemory(memoryId);
          return updatedCollection;
        }
        return collection;
      })
    );
  };
  
  // Remove memory from collection
  const removeMemoryFromCollection = (memoryId, collectionId) => {
    setCollections(prevCollections => 
      prevCollections.map(collection => {
        if (collection.id === collectionId) {
          const updatedCollection = new Collection(collection);
          updatedCollection.removeMemory(memoryId);
          return updatedCollection;
        }
        return collection;
      })
    );
  };
  
  // Get memories in chronological order
  const getChronologicalMemories = () => {
    return [...memories].sort((a, b) => {
      // Sort by memory date if available
      if (a.memoryDate && b.memoryDate) {
        return b.memoryDate - a.memoryDate;
      }
      // Fall back to creation date
      return b.createdAt - a.createdAt;
    });
  };
  
  // Get memories for a specific year
  const getMemoriesByYear = (year) => {
    return memories.filter(memory => 
      memory.memoryDate && memory.memoryDate.getFullYear() === year
    );
  };
  
  // Get memories for a specific chapter
  const getMemoriesByChapter = (chapterId) => {
    return memories.filter(memory => memory.chapterId === chapterId);
  };
  
  // Get memories for a specific collection
  const getMemoriesByCollection = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    
    return memories.filter(memory => 
      collection.memoryIds.includes(memory.id)
    );
  };
  
  // Search memories
  const searchMemories = (query) => {
    if (!query) return memories;
    
    return memories.filter(memory => memory.matchesSearch(query));
  };
  
  // Get all years that have memories
  const getAllYears = () => {
    const years = new Set();
    
    memories.forEach(memory => {
      if (memory.memoryDate) {
        years.add(memory.memoryDate.getFullYear());
      }
    });
    
    return Array.from(years).sort((a, b) => b - a); // Sort descending
  };
  
  // Get all people mentioned in memories
  const getAllPeople = () => {
    const people = new Set();
    
    memories.forEach(memory => {
      memory.people.forEach(person => {
        people.add(person);
      });
    });
    
    return Array.from(people).sort();
  };
  
  // Get all emotions used in memories
  const getAllEmotions = () => {
    const emotions = new Set();
    
    memories.forEach(memory => {
      memory.emotions.forEach(emotion => {
        emotions.add(emotion);
      });
    });
    
    return Array.from(emotions).sort();
  };
  
  // Get all tags used in memories
  const getAllTags = () => {
    const tags = new Set();
    
    memories.forEach(memory => {
      memory.tags.forEach(tag => {
        tags.add(tag);
      });
    });
    
    return Array.from(tags).sort();
  };
  
  // Generate timeline data
  const generateTimelineData = () => {
    const timelineData = [];
    const years = getAllYears();
    
    years.forEach(year => {
      const yearMemories = getMemoriesByYear(year);
      
      // Group by month
      const months = {};
      yearMemories.forEach(memory => {
        const month = memory.getMonth();
        if (!months[month]) {
          months[month] = [];
        }
        months[month].push(memory);
      });
      
      // Sort months and memories
      const sortedMonths = Object.keys(months)
        .map(Number)
        .sort((a, b) => b - a); // Sort descending
      
      const yearData = {
        year,
        months: sortedMonths.map(month => ({
          month,
          monthName: new Date(year, month, 1).toLocaleString('default', { month: 'long' }),
          memories: months[month].sort((a, b) => 
            b.memoryDate.getTime() - a.memoryDate.getTime()
          )
        }))
      };
      
      timelineData.push(yearData);
    });
    
    return timelineData;
  };
  
  // Save data to localStorage (for demo purposes)
  const saveToLocalStorage = () => {
    try {
      localStorage.setItem('mems-memories', JSON.stringify(memories.map(m => m.toJSON())));
      localStorage.setItem('mems-chapters', JSON.stringify(chapters.map(c => c.toJSON())));
      localStorage.setItem('mems-collections', JSON.stringify(collections.map(c => c.toJSON())));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  // Load data from localStorage (for demo purposes)
  const loadFromLocalStorage = () => {
    try {
      const memoriesJson = localStorage.getItem('mems-memories');
      const chaptersJson = localStorage.getItem('mems-chapters');
      const collectionsJson = localStorage.getItem('mems-collections');
      
      if (memoriesJson) {
        setMemories(JSON.parse(memoriesJson).map(Memory.fromJSON));
      }
      
      if (chaptersJson) {
        setChapters(JSON.parse(chaptersJson).map(Chapter.fromJSON));
      }
      
      if (collectionsJson) {
        setCollections(JSON.parse(collectionsJson).map(Collection.fromJSON));
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  };
  
  // Save data when it changes
  useEffect(() => {
    saveToLocalStorage();
  }, [memories, chapters, collections]);
  
  // Load data on initial mount
  useEffect(() => {
    loadFromLocalStorage();
  }, []);
  
  return {
    // Data access
    memories,
    chapters,
    collections,
    
    // Memory operations
    addMemory,
    updateMemory,
    deleteMemory,
    
    // Chapter operations
    addChapter,
    updateChapter,
    deleteChapter,
    
    // Collection operations
    addCollection,
    updateCollection,
    deleteCollection,
    
    // Relationship operations
    addMemoryToChapter,
    removeMemoryFromChapter,
    addMemoryToCollection,
    removeMemoryFromCollection,
    
    // Query operations
    getChronologicalMemories,
    getMemoriesByYear,
    getMemoriesByChapter,
    getMemoriesByCollection,
    searchMemories,
    
    // Metadata operations
    getAllYears,
    getAllPeople,
    getAllEmotions,
    getAllTags,
    
    // Timeline operations
    generateTimelineData
  };
}
