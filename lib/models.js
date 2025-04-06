'use client';

// Memory data structure
export class Memory {
  constructor({
    id = null,
    userId = null,
    title = '',
    description = '',
    rawText = '',
    createdAt = new Date(),
    updatedAt = new Date(),
    memoryDate = null,
    location = null,
    people = [],
    emotions = [],
    tags = [],
    isPublic = false,
    chapterId = null,
    imageUrl = null
  }) {
    this.id = id || crypto.randomUUID();
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.rawText = rawText;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.memoryDate = memoryDate ? (memoryDate instanceof Date ? memoryDate : new Date(memoryDate)) : null;
    this.location = location;
    this.people = people;
    this.emotions = emotions;
    this.tags = tags;
    this.isPublic = isPublic;
    this.chapterId = chapterId;
    this.imageUrl = imageUrl;
  }

  // Get year of memory
  getYear() {
    return this.memoryDate ? this.memoryDate.getFullYear() : null;
  }

  // Get month of memory
  getMonth() {
    return this.memoryDate ? this.memoryDate.getMonth() : null;
  }

  // Get formatted date
  getFormattedDate() {
    if (!this.memoryDate) return 'No date';
    
    return this.memoryDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Check if memory contains a person
  hasPerson(name) {
    return this.people.some(person => 
      person.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Check if memory has an emotion
  hasEmotion(emotion) {
    return this.emotions.some(e => 
      e.toLowerCase() === emotion.toLowerCase()
    );
  }

  // Check if memory has a tag
  hasTag(tag) {
    return this.tags.some(t => 
      t.toLowerCase() === tag.toLowerCase()
    );
  }

  // Check if memory matches search query
  matchesSearch(query) {
    if (!query) return true;
    
    const lowerQuery = query.toLowerCase();
    
    return (
      this.title.toLowerCase().includes(lowerQuery) ||
      this.description.toLowerCase().includes(lowerQuery) ||
      (this.location && this.location.toLowerCase().includes(lowerQuery)) ||
      this.people.some(person => person.toLowerCase().includes(lowerQuery)) ||
      this.emotions.some(emotion => emotion.toLowerCase().includes(lowerQuery)) ||
      this.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }

  // Convert to JSON for storage
  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      description: this.description,
      rawText: this.rawText,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      memoryDate: this.memoryDate ? this.memoryDate.toISOString() : null,
      location: this.location,
      people: this.people,
      emotions: this.emotions,
      tags: this.tags,
      isPublic: this.isPublic,
      chapterId: this.chapterId,
      imageUrl: this.imageUrl
    };
  }

  // Create from JSON
  static fromJSON(json) {
    return new Memory(json);
  }
}

// Chapter data structure
export class Chapter {
  constructor({
    id = null,
    userId = null,
    title = '',
    description = '',
    coverImageId = null,
    createdAt = new Date(),
    updatedAt = new Date(),
    order = 0,
    memoryIds = []
  }) {
    this.id = id || crypto.randomUUID();
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.coverImageId = coverImageId;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.order = order;
    this.memoryIds = memoryIds;
  }

  // Add memory to chapter
  addMemory(memoryId) {
    if (!this.memoryIds.includes(memoryId)) {
      this.memoryIds.push(memoryId);
      this.updatedAt = new Date();
    }
  }

  // Remove memory from chapter
  removeMemory(memoryId) {
    this.memoryIds = this.memoryIds.filter(id => id !== memoryId);
    this.updatedAt = new Date();
  }

  // Convert to JSON for storage
  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      description: this.description,
      coverImageId: this.coverImageId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      order: this.order,
      memoryIds: this.memoryIds
    };
  }

  // Create from JSON
  static fromJSON(json) {
    return new Chapter(json);
  }
}

// Collection data structure
export class Collection {
  constructor({
    id = null,
    userId = null,
    title = '',
    description = '',
    coverImageId = null,
    createdAt = new Date(),
    updatedAt = new Date(),
    type = 'custom',
    memoryIds = []
  }) {
    this.id = id || crypto.randomUUID();
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.coverImageId = coverImageId;
    this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt);
    this.updatedAt = updatedAt instanceof Date ? updatedAt : new Date(updatedAt);
    this.type = type; // 'theme', 'person', or 'custom'
    this.memoryIds = memoryIds;
  }

  // Add memory to collection
  addMemory(memoryId) {
    if (!this.memoryIds.includes(memoryId)) {
      this.memoryIds.push(memoryId);
      this.updatedAt = new Date();
    }
  }

  // Remove memory from collection
  removeMemory(memoryId) {
    this.memoryIds = this.memoryIds.filter(id => id !== memoryId);
    this.updatedAt = new Date();
  }

  // Convert to JSON for storage
  toJSON() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      description: this.description,
      coverImageId: this.coverImageId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      type: this.type,
      memoryIds: this.memoryIds
    };
  }

  // Create from JSON
  static fromJSON(json) {
    return new Collection(json);
  }
}
