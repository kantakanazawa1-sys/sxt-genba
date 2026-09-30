const CACHE='sxt-genba-20260930-3';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith((async()=>{try{const fresh=await fetch(e.request,{cache:'no-store'});const c=await caches.open(CACHE);c.put(e.request,fresh.clone());return fresh}catch(err){const cached=await caches.match(e.request);if(cached)return cached;throw err}})())});
