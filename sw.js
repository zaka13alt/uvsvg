// 
const cdn1 = "https://cdn.jsdelivr.net/";
const cdn2 = "gh/zaka13alt/";
const cdn3 = "uvsvg@main/";
const cdn4 = "uv/";

// 
const bundleUrl = cdn1 + cdn2 + cdn3 + cdn4 + "uv.bundle.js";
const configUrl = cdn1 + cdn2 + cdn3 + cdn4 + "uv.config.js";
const swCoreUrl = cdn1 + cdn2 + cdn3 + cdn4 + "uv.sw.js";

// 
importScripts(bundleUrl);
importScripts(configUrl);
importScripts(swCoreUrl);

// 
const sw = new UVServiceWorker();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
