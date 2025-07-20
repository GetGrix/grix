/**
 * Grix Service Worker for PWA Offline Functionality
 * Provides offline access and caching for the mathematical visualization platform
 */

const CACHE_NAME = 'grix-v1.0.0';
const CACHE_VERSION = '1.0.0';

// Resources to cache for offline use
const STATIC_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/grix-favicon.svg',
  // Vite will inject the actual built assets here during build
];

// Dynamic cache patterns
const CACHE_PATTERNS = {
  // Cache all JS/CSS assets
  assets: /\.(js|css|woff2?|eot|ttf|otf)$/,
  // Cache images
  images: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/,
  // Cache API responses (if we add any)
  api: /\/api\//
};

// Install event - cache static resources
self.addEventListener('install', (event) => {
  console.log('🔧 Grix Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Grix Service Worker: Caching static resources');
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('✅ Grix Service Worker: Installation complete');
        // Take control immediately
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Grix Service Worker: Installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🚀 Grix Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log('🗑️ Grix Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      }),
      // Take control of all clients
      self.clients.claim()
    ]).then(() => {
      console.log('✅ Grix Service Worker: Activation complete');
    })
  );
});

// Fetch event - handle network requests with caching strategy
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Only handle same-origin requests and specific protocols
  if (url.origin !== self.location.origin || 
      !['http:', 'https:'].includes(url.protocol)) {
    return;
  }
  
  event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First for static assets
    if (CACHE_PATTERNS.assets.test(url.pathname) || 
        CACHE_PATTERNS.images.test(url.pathname)) {
      return await cacheFirst(request);
    }
    
    // Strategy 2: Network First for HTML pages
    if (request.destination === 'document' || url.pathname === '/') {
      return await networkFirst(request);
    }
    
    // Strategy 3: Stale While Revalidate for API calls
    if (CACHE_PATTERNS.api.test(url.pathname)) {
      return await staleWhileRevalidate(request);
    }
    
    // Default: Network First
    return await networkFirst(request);
    
  } catch (error) {
    console.error('❌ Grix Service Worker: Fetch error:', error);
    return await handleOfflineResponse(request);
  }
}

// Cache First strategy - good for static assets
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  
  // Cache successful responses
  if (networkResponse.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Network First strategy - good for HTML and dynamic content
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale While Revalidate - good for API calls
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Always try to update cache in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  // Return cached version immediately if available
  return cachedResponse || await fetchPromise;
}

// Handle offline responses
async function handleOfflineResponse(request) {
  const url = new URL(request.url);
  
  // For HTML requests, return cached index.html
  if (request.destination === 'document' || url.pathname === '/') {
    const cachedResponse = await caches.match('/index.html');
    if (cachedResponse) {
      return cachedResponse;
    }
  }
  
  // For other requests, try to find in cache
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Return offline page or error
  return new Response(
    JSON.stringify({
      error: 'Offline',
      message: 'This resource is not available offline',
      timestamp: new Date().toISOString()
    }),
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Listen for messages from the main app
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_VERSION });
      break;
      
    case 'CLEAR_CACHE':
      caches.delete(CACHE_NAME).then((success) => {
        event.ports[0].postMessage({ success });
      });
      break;
      
    case 'CACHE_USAGE':
      getCacheUsage().then((usage) => {
        event.ports[0].postMessage(usage);
      });
      break;
      
    default:
      console.log('🔔 Grix Service Worker: Unknown message type:', type);
  }
});

// Get cache usage statistics
async function getCacheUsage() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    
    let totalSize = 0;
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
    
    return {
      cacheCount: keys.length,
      totalSize: totalSize,
      cacheName: CACHE_NAME
    };
  } catch (error) {
    return {
      cacheCount: 0,
      totalSize: 0,
      error: error.message
    };
  }
}

// Background sync for future features
self.addEventListener('sync', (event) => {
  console.log('🔄 Grix Service Worker: Background sync:', event.tag);
  
  if (event.tag === 'grix-data-sync') {
    event.waitUntil(syncGrixData());
  }
});

async function syncGrixData() {
  // Future: sync mathematical work with cloud storage
  console.log('📊 Grix Service Worker: Syncing mathematical data...');
}

// Push notifications (for future classroom features)
self.addEventListener('push', (event) => {
  console.log('📱 Grix Service Worker: Push notification received');
  
  // Future: handle notifications for classroom collaboration
  if (event.data) {
    const data = event.data.json();
    // Handle educational notifications
  }
});

console.log('🎯 Grix Service Worker: Ready for mathematical exploration!');