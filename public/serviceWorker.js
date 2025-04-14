// sw.js
const CACHE_VERSION = 1;
const CACHE_NAME = `gtm-gtag-cache-v${CACHE_VERSION}`;

const urlsToCache = [
  "/",
  "/index.html",
  // "/src/styles/tailwind.css",
  "https://www.googletagmanager.com/gtm.js?id=GTM-NPS952B",
  "https://www.googletagmanager.com/gtag/js?id=G-06GNMRQG81",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Cache what we can, ignore failures
      return Promise.allSettled(
        urlsToCache.map((url) =>
          cache
            .add(url)
            .catch((err) => console.warn(`Failed to cache ${url}:`, err))
        )
      );
    })
  );
});

// const CACHE_NAME = "my-cache-v1";

self.addEventListener("fetch", (event) => {
  // Filter out unsupported schemes or invalid requests
  const url = new URL(event.request.url);

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return; // Skip non-HTTP/HTTPS requests
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return the cached response if found
        return cachedResponse;
      }

      // Fetch the request from the network
      return fetch(event.request)
        .then((response) => {
          // Check if the response is valid and cacheable
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response; // Return the response without caching
          }

          // Clone the response for caching
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch((err) => {
              console.warn("Failed to cache:", err);
            });
          });

          return response; // Return the original network response
        })
        .catch((error) => {
          console.warn("Fetch failed:", error);
          throw error; // Re-throw the error to ensure the user sees it
        });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
