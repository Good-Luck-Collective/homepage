if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const f=e=>a(e,n),r={module:{uri:n},exports:o,require:f};s[n]=Promise.all(i.map((e=>r[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/11-23eaf9df3284661b.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/239-aa51c24c3b2f185e.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/2443530c-d4a6bd7fc7f21e3c.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/414-2ed2e53a897ff254.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/app/layout-1077b43dadee3cd1.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/app/page-5d4ce6206cd01ecc.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/main-app-bb0f02f676f5430b.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/main-e38651ec26c92dad.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5c4203444b39445a.js",revision:"rLrReyDC10PD2G8cV1mwf"},{url:"/_next/static/css/5e05e42959277907.css",revision:"5e05e42959277907"},{url:"/_next/static/rLrReyDC10PD2G8cV1mwf/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/rLrReyDC10PD2G8cV1mwf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"1a2b1e66a935fee3bef249ba8a696d4c"},{url:"/fonts/Gabato.woff",revision:"c010b2dc7073d6af17abf8dadca25b01"},{url:"/fonts/Gabato.woff2",revision:"1e6e3902dc82a46d87b8e4b8d984b516"},{url:"/fonts/Nohemi-Black.woff",revision:"18dc7e7e05454b92dfa89234523f0045"},{url:"/fonts/Nohemi-Black.woff2",revision:"f3d402efa7e4b346164c22f861f9e772"},{url:"/fonts/Nohemi-Bold.woff",revision:"e39be5a36665ba98b98cb1fbecece0d5"},{url:"/fonts/Nohemi-Bold.woff2",revision:"2b752b4d9576c1340d1f425afbc032c6"},{url:"/fonts/Nohemi-ExtraBold.woff",revision:"7740d769b5201bde4f202deda09ca7b6"},{url:"/fonts/Nohemi-ExtraBold.woff2",revision:"68888b86d0a860e1d3dea468125cf123"},{url:"/fonts/Nohemi-ExtraLight.woff",revision:"e7cfc33b0b67419d04e6969d9ec669dc"},{url:"/fonts/Nohemi-ExtraLight.woff2",revision:"171bc41de64b1b0f7c2d9d7cf622fafd"},{url:"/fonts/Nohemi-Light.woff",revision:"3b433920146779019aa254fa581624aa"},{url:"/fonts/Nohemi-Light.woff2",revision:"c7c56850614b2b4ee677f15739fd6f4d"},{url:"/fonts/Nohemi-Medium.woff",revision:"db9f683ec7a21ae974ce0661fc57b0ed"},{url:"/fonts/Nohemi-Medium.woff2",revision:"32c93133c8405347d11369bc7b49394b"},{url:"/fonts/Nohemi-Regular.woff",revision:"22d875fbaa214b88122ac868c5c105ed"},{url:"/fonts/Nohemi-Regular.woff2",revision:"8d66354c8a95f0c5bd52c627100c84cf"},{url:"/fonts/Nohemi-SemiBold.woff",revision:"87942048a47930ca928522ed8cf95bb7"},{url:"/fonts/Nohemi-SemiBold.woff2",revision:"6688fb55a1b9c37c97d66160eddd683d"},{url:"/fonts/Nohemi-Thin.woff",revision:"096e08b4a8502ef72267f8ef3e058ce0"},{url:"/fonts/Nohemi-Thin.woff2",revision:"f38b93f350186b76f518a72a75ef3606"},{url:"/icons/apple-icon-180.png",revision:"3d976a2f0f00bc5025b311c7d1bbfc79"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"0de3d71eabe7c7716dc590535e1bc168"},{url:"/icons/apple-splash-1136-640.jpg",revision:"2bda655f89ab21c7c4179cc02d8f9f6c"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"d9ee3326417596f4ec5a59114dce58c3"},{url:"/icons/apple-splash-1179-2556.jpg",revision:"8b8dbbf4a9f992eb772538d603f58d93"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"728e7b56eb155845f4667dfac1e44ed2"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"0fb93f829b605c3d475529c61a549bf9"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"21ba67a9e61d66e6b0cc48abaa8113ea"},{url:"/icons/apple-splash-1290-2796.jpg",revision:"d0392889e6023795f545a2108c6e2c1d"},{url:"/icons/apple-splash-1334-750.jpg",revision:"726aca3ed76717c3ed2a863225f36a71"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"620ddf9ea3de98ab0a99f4ee03aa0738"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"d47b2e77b0ad4d0f5b31626ff7c7887b"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"1ffee3d0a1d7c51c59d0b65533f2c78d"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"f113e5a548492f8e7e4f6fed9cc3ae07"},{url:"/icons/apple-splash-1792-828.jpg",revision:"d3c763e1da724d9333e8c713d806a096"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"002b87d2b9bc0b0301bd7e08f12044f2"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"4f3344a53df2d69f7adef7831cbab8e2"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"2457077169aeb0a69d2ecfe0cc0828b1"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"21a6b70a1bb8012b70ae58afb6fad2e8"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"015f7c158f97c11de9ece0c4acd82b46"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"310f76205932fc6b3cf9fefaa2656df8"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"fae48f034077c3d538504776a415b994"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"d02db0cf047c0ae069d12664707bc7d3"},{url:"/icons/apple-splash-2556-1179.jpg",revision:"10f7b25693cf0a10e702b8acc3bff81b"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"83d0319de04fc616eeba261fc7503d74"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"411fb4b1621975109d70b4b3eccbdb54"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"7381b15eb1e148d939b379fc182a632b"},{url:"/icons/apple-splash-2796-1290.jpg",revision:"d791f9917081d7692adc6879a26eaf5c"},{url:"/icons/apple-splash-640-1136.jpg",revision:"47c2ba74fa3670e4661b325b7e434ca6"},{url:"/icons/apple-splash-750-1334.jpg",revision:"e872c25472658e026ee404eef5fc029c"},{url:"/icons/apple-splash-828-1792.jpg",revision:"6d20fb7f05bec6c3a7662943f34a0f21"},{url:"/icons/manifest-icon-192.maskable.png",revision:"143f9f1b4c3188fbaf0596737e1ce3c9"},{url:"/icons/manifest-icon-512.maskable.png",revision:"e0ab06b9add43b73a44fd02e925af7f4"},{url:"/images/clover-icon.jpg",revision:"8285576967e919b55cfdb501adadbd5e"},{url:"/images/clover-icon.svg",revision:"871b9e2ce78142a5b42962958e90a1f7"},{url:"/images/clover.svg",revision:"7788bb3e21d528c8fa60b4ad5f84584e"},{url:"/manifest.json",revision:"ef83ecf3002efac5c4f046ef5e236364"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
