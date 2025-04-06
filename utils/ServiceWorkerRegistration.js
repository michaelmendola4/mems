'use client';

import { useState, useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register the service worker
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => {
          setRegistration(reg);
          setIsRegistered(true);
          
          // Check if there's an update available
          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // New content is available, show update notification
                  setUpdateAvailable(true);
                } else {
                  // Content is cached for offline use
                  setOfflineReady(true);
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);

  // Update the service worker
  const updateServiceWorker = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      
      registration.waiting.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };

  return {
    isRegistered,
    updateAvailable,
    offlineReady,
    updateServiceWorker
  };
}
