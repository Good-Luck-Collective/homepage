if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const r=e=>i(e,c),f={module:{uri:c},exports:o,require:r};s[c]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"25e86306781a4dbe0f7559697f341617"},{url:"/_next/static/chunks/11-5084570782e7166e.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/139-d2752b9c5ffa757d.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/2443530c-d4a6bd7fc7f21e3c.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/414-2ed2e53a897ff254.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/app/layout-5cc9e29ee0542381.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/app/page-a894e5a642f9c2f7.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/main-4d3868bb2d46117c.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/main-app-79060681397ebeb3.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5c4203444b39445a.js",revision:"rJpysKcA8dhUx5InFgJJO"},{url:"/_next/static/css/5e05e42959277907.css",revision:"5e05e42959277907"},{url:"/_next/static/rJpysKcA8dhUx5InFgJJO/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/rJpysKcA8dhUx5InFgJJO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"1a2b1e66a935fee3bef249ba8a696d4c"},{url:"/fonts/Gabato.woff",revision:"c010b2dc7073d6af17abf8dadca25b01"},{url:"/fonts/Gabato.woff2",revision:"1e6e3902dc82a46d87b8e4b8d984b516"},{url:"/fonts/Nohemi-Black.woff",revision:"18dc7e7e05454b92dfa89234523f0045"},{url:"/fonts/Nohemi-Black.woff2",revision:"f3d402efa7e4b346164c22f861f9e772"},{url:"/fonts/Nohemi-Bold.woff",revision:"e39be5a36665ba98b98cb1fbecece0d5"},{url:"/fonts/Nohemi-Bold.woff2",revision:"2b752b4d9576c1340d1f425afbc032c6"},{url:"/fonts/Nohemi-ExtraBold.woff",revision:"7740d769b5201bde4f202deda09ca7b6"},{url:"/fonts/Nohemi-ExtraBold.woff2",revision:"68888b86d0a860e1d3dea468125cf123"},{url:"/fonts/Nohemi-ExtraLight.woff",revision:"e7cfc33b0b67419d04e6969d9ec669dc"},{url:"/fonts/Nohemi-ExtraLight.woff2",revision:"171bc41de64b1b0f7c2d9d7cf622fafd"},{url:"/fonts/Nohemi-Light.woff",revision:"3b433920146779019aa254fa581624aa"},{url:"/fonts/Nohemi-Light.woff2",revision:"c7c56850614b2b4ee677f15739fd6f4d"},{url:"/fonts/Nohemi-Medium.woff",revision:"db9f683ec7a21ae974ce0661fc57b0ed"},{url:"/fonts/Nohemi-Medium.woff2",revision:"32c93133c8405347d11369bc7b49394b"},{url:"/fonts/Nohemi-Regular.woff",revision:"22d875fbaa214b88122ac868c5c105ed"},{url:"/fonts/Nohemi-Regular.woff2",revision:"8d66354c8a95f0c5bd52c627100c84cf"},{url:"/fonts/Nohemi-SemiBold.woff",revision:"87942048a47930ca928522ed8cf95bb7"},{url:"/fonts/Nohemi-SemiBold.woff2",revision:"6688fb55a1b9c37c97d66160eddd683d"},{url:"/fonts/Nohemi-Thin.woff",revision:"096e08b4a8502ef72267f8ef3e058ce0"},{url:"/fonts/Nohemi-Thin.woff2",revision:"f38b93f350186b76f518a72a75ef3606"},{url:"/icons/apple-icon-180.png",revision:"d362d505c30e9306cd1e9c0b430fc3ff"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"ba2240710d1a56c137b2fd3881efeec4"},{url:"/icons/apple-splash-1136-640.jpg",revision:"c298b0aef0196a7e1e15c22ad7e61537"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"de4940c50671d600cd943c9a47cd7aa4"},{url:"/icons/apple-splash-1179-2556.jpg",revision:"261f2359597b626422a8089751e72d11"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"fe195ca13001de19bcf5e2210b5525ad"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"f8096b460754ade48cce8fb8d77fbfd5"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"02856cf2fc4e4292dea8ebd3366717cc"},{url:"/icons/apple-splash-1290-2796.jpg",revision:"a08bb77b67c4aba54799919675d74ae9"},{url:"/icons/apple-splash-1334-750.jpg",revision:"34b3482b5840d4004f63ad8a222a86ad"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"0c08869fe3d0377f58499158672e2485"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"b9893a4b9eecd20fd564f21636583712"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"ddda599e9d1d0012854db1dc2fcb588b"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"9e992be4fbcc363c36c7aef4bf7121b0"},{url:"/icons/apple-splash-1792-828.jpg",revision:"8622a77aceb20b462e5008dee7711e7d"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"995633e0ae5b36a2948a3a472b4a5cfb"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"4f663ac859060ffd668c4b8a2f6c9b25"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"0ebeaa2fd44f5be4de4387384002ee9b"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"1fde4990fcb131d37e4b20cfe5e9ed25"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"385512d6a4d48b90238049769aafb773"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"90a8558b0b11d1bea5c33d85090b4ffb"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"7b6472652b992685d68d470f1adec01a"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"faa87ed970d4e997c48fc70b26751300"},{url:"/icons/apple-splash-2556-1179.jpg",revision:"2078a6a58f25dc271d36399ea9422b4e"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"0f5dd33729f9bf8c3807cd35bca37844"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"a925feefb66209e03b0befc92103b15d"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"801139ee0bfe5efc97d3180eb3fc02e1"},{url:"/icons/apple-splash-2796-1290.jpg",revision:"c120e3dd726ae1306c9878907cb7c6b4"},{url:"/icons/apple-splash-640-1136.jpg",revision:"976b4d588360aa1e898ee7dfc557685c"},{url:"/icons/apple-splash-750-1334.jpg",revision:"6f077f3fe4cd8d744445ec8c03948353"},{url:"/icons/apple-splash-828-1792.jpg",revision:"e4e51480447420137584797cff1fc662"},{url:"/icons/manifest-icon-192.maskable.png",revision:"81ff990548d7c85c39de18fc695f6bac"},{url:"/icons/manifest-icon-512.maskable.png",revision:"c7157e6a6f74ab5f94ca055ac5702b3c"},{url:"/images/clover full.jpg",revision:"8285576967e919b55cfdb501adadbd5e"},{url:"/images/clover full.svg",revision:"871b9e2ce78142a5b42962958e90a1f7"},{url:"/images/clover.svg",revision:"7788bb3e21d528c8fa60b4ad5f84584e"},{url:"/manifest.json",revision:"af9fb28e8c3939be258dd7e2f5acf06c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
