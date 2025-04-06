'use client';

import { useState, useEffect } from 'react';

export default function PerformanceOptimizer() {
  // Image optimization
  const optimizeImages = (imageUrl, quality = 80, width = 1024) => {
    // In a real implementation, this would use Next.js Image component or a similar solution
    // For demonstration purposes, we'll return a simulated optimized URL
    if (!imageUrl) return null;
    
    // Simulate adding optimization parameters to the URL
    if (imageUrl.startsWith('http')) {
      return `${imageUrl}?quality=${quality}&width=${width}`;
    }
    
    return imageUrl;
  };
  
  // Lazy loading implementation
  const useLazyLoading = (ref, options = {}) => {
    const [isIntersecting, setIntersecting] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);
      
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [ref, options]);
    
    return isIntersecting;
  };
  
  // Debounce function for search and other input handlers
  const debounce = (func, wait) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // Memoization for expensive calculations
  const memoize = (func) => {
    const cache = new Map();
    
    return (...args) => {
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        return cache.get(key);
      }
      
      const result = func(...args);
      cache.set(key, result);
      
      return result;
    };
  };
  
  // Chunk loading for large data sets
  const loadInChunks = (items, chunkSize = 10, callback) => {
    let index = 0;
    
    const processNextChunk = () => {
      const chunk = items.slice(index, index + chunkSize);
      index += chunkSize;
      
      if (chunk.length > 0) {
        callback(chunk, index >= items.length);
        
        if (index < items.length) {
          setTimeout(processNextChunk, 0);
        }
      }
    };
    
    processNextChunk();
  };
  
  // Virtual scrolling for long lists
  const useVirtualScroll = (items, itemHeight, visibleItems) => {
    const [scrollTop, setScrollTop] = useState(0);
    
    const totalHeight = items.length * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      items.length - 1,
      startIndex + visibleItems - 1
    );
    
    const visibleData = items.slice(startIndex, endIndex + 1);
    const offsetY = startIndex * itemHeight;
    
    const handleScroll = (e) => {
      setScrollTop(e.target.scrollTop);
    };
    
    return {
      totalHeight,
      visibleData,
      offsetY,
      handleScroll
    };
  };
  
  // Service worker registration for offline support
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  };
  
  return {
    optimizeImages,
    useLazyLoading,
    debounce,
    memoize,
    loadInChunks,
    useVirtualScroll,
    registerServiceWorker
  };
}
