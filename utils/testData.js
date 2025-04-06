import { Memory, Chapter, Collection } from '../lib/models';
import StorybookManager from '../lib/StorybookManager';

// Test data generator for the Mems app
export function generateTestData() {
  // Create a storybook manager instance
  const storybookManager = StorybookManager();
  
  // Generate sample memories
  const memories = [
    new Memory({
      title: 'Summer Vacation at the Lake',
      description: 'That wonderful day at Crystal Lake when we all went swimming and had a picnic by the shore. The water was so clear and the sun was shining brightly.',
      rawText: 'Summer vacation at Crystal Lake with family. Swimming, picnic, sunshine.',
      memoryDate: new Date('2024-07-15'),
      location: 'Crystal Lake, Minnesota',
      people: ['Mom', 'Dad', 'Sarah', 'Michael'],
      emotions: ['Happy', 'Relaxed', 'Nostalgic'],
      tags: ['vacation', 'summer', 'lake', 'family'],
      imageUrl: '/placeholder-image.jpg'
    }),
    new Memory({
      title: 'Graduation Day',
      description: 'Finally receiving my diploma after years of hard work. Everyone was there to celebrate this milestone with me.',
      rawText: 'Graduation day. Received diploma. Family and friends celebrating.',
      memoryDate: new Date('2023-05-20'),
      location: 'State University',
      people: ['Mom', 'Dad', 'Jessica', 'Professor Smith'],
      emotions: ['Proud', 'Excited', 'Accomplished'],
      tags: ['education', 'milestone', 'celebration'],
      imageUrl: '/placeholder-image.jpg'
    }),
    new Memory({
      title: 'First Day at New Job',
      description: 'Starting my career at the tech company. Met my new team and got my first assignment.',
      rawText: 'First day at new job. Met team. Got first assignment.',
      memoryDate: new Date('2023-06-15'),
      location: 'Tech Innovations Inc.',
      people: ['Manager John', 'Coworker Emma', 'HR Director'],
      emotions: ['Nervous', 'Excited'],
      tags: ['career', 'first day', 'work'],
      imageUrl: '/placeholder-image.jpg'
    }),
    new Memory({
      title: 'Birthday Party Surprise',
      description: 'They threw me a surprise party for my 30th birthday. I had no idea they were planning it for months!',
      rawText: 'Surprise 30th birthday party. Friends planned for months.',
      memoryDate: new Date('2024-02-10'),
      location: 'Home',
      people: ['Jessica', 'Michael', 'Sarah', 'Mom', 'Dad', 'Coworkers'],
      emotions: ['Surprised', 'Happy', 'Grateful'],
      tags: ['birthday', 'celebration', 'surprise', 'friends'],
      imageUrl: '/placeholder-image.jpg'
    }),
    new Memory({
      title: 'Hiking Trip in the Mountains',
      description: 'That challenging hike up to Eagle Peak. The view from the top was absolutely breathtaking.',
      rawText: 'Hiking Eagle Peak. Challenging climb. Amazing view from top.',
      memoryDate: new Date('2023-09-05'),
      location: 'Eagle Peak, Rocky Mountains',
      people: ['Jessica', 'Michael', 'Hiking Group'],
      emotions: ['Accomplished', 'Peaceful', 'Amazed'],
      tags: ['hiking', 'nature', 'mountains', 'adventure'],
      imageUrl: '/placeholder-image.jpg'
    })
  ];
  
  // Add memories to the storybook manager
  memories.forEach(memory => {
    storybookManager.addMemory(memory);
  });
  
  // Create chapters
  const summerChapter = storybookManager.addChapter({
    title: 'Summer Memories',
    description: 'Memories from the summer of 2024',
    order: 1
  });
  
  const milestoneChapter = storybookManager.addChapter({
    title: 'Life Milestones',
    description: 'Important moments and achievements',
    order: 2
  });
  
  // Add memories to chapters
  storybookManager.addMemoryToChapter(memories[0].id, summerChapter.id);
  storybookManager.addMemoryToChapter(memories[1].id, milestoneChapter.id);
  storybookManager.addMemoryToChapter(memories[2].id, milestoneChapter.id);
  
  // Create collections
  const familyCollection = storybookManager.addCollection({
    title: 'Family Moments',
    description: 'Memories with family members',
    type: 'person'
  });
  
  const adventureCollection = storybookManager.addCollection({
    title: 'Adventures',
    description: 'Exciting and adventurous experiences',
    type: 'theme'
  });
  
  // Add memories to collections
  storybookManager.addMemoryToCollection(memories[0].id, familyCollection.id);
  storybookManager.addMemoryToCollection(memories[3].id, familyCollection.id);
  storybookManager.addMemoryToCollection(memories[4].id, adventureCollection.id);
  
  return storybookManager;
}
