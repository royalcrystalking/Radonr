if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/29.575caab9ee54a67fe036.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/30fde29d9e2f1a02201f32b4cf7ca14c97a61abf.41a2ed4c8b77621c8544.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/3962108cd3b11f5af4522e7aea233e62a2eddeb5.e2bbf9142b7f5b721486.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/4b05817cff8afa43fd7d7e76daf673d0bc6ebf7c.575398411d4c46fdb5d7.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/63f3a80e7154d357c97cbb123248a459f800d742.3995d2e688fcb82b14bc.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/75fc9c18.c3481176b8037594d5c0.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/a217fa803aace7f636a212b6e09cce206153b896.64eff10345a77c0a4f36.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/a8d699e053d263aa5046bcb1ff6f470c716f8d6c.b1ff779b8946f3908c1c.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/b746704a0be591211af851b873c582e11eaaa200.376b4241906b5b1e5901.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/d05f9d22012356db71399e1c38b546acb0e21e58.3ace0614458c127f3618.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/d47c62a23b3374143a48ef07f501a2460e4f6c9c.5e51cdff9e8dcf52b6c1.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/d868b168fd35e54199238311efbef535e2788fb9.60e5e449a444aa4c07c5.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/d956ac303075123d1989a0291568c5c2c2af6025.263d129320f810e9d875.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/e4bfd4f173c1350ec4719c667152e04a14245cc5.a39ffc27e9f9cd9746f4.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/main-c9699c0d1aad6c53a4ce.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/404-41d476de2793b9cae2c9.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/500-b1450a521df6fc60333c.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/_app-c9beba1ae7cabe42591f.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/_error-dc9743c2e64a4010003f.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/about-c2b4f0f9c75ac5418bf1.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/cart-afffb5bfda6ce71401e2.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/index-b68712f5334f1690476f.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/order-details/%5Bid%5D-a46f15fa635deb4ac137.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/orders-d39cb238f7bcc094e62b.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/product-details/%5Bid%5D-bbd8f826d789666c8a3b.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/profile-6806979e729ab9e2a57e.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/pages/success-88295ee65326b35d674e.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/polyfills-265a51dacb3992e55d6f.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/chunks/webpack-2fb875cc4e7ac2222baa.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/css/872bcd55e18b0cabd275.css",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/wzekCqn0Hb6IiBstYduA9/_buildManifest.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/_next/static/wzekCqn0Hb6IiBstYduA9/_ssgManifest.js",revision:"wzekCqn0Hb6IiBstYduA9"},{url:"/img/Radon.svg",revision:"101b22c50a8621bbd312456d12a35b02"},{url:"/img/authentication.svg",revision:"fa4053c42eb8284549ed2c0aa6b6c150"},{url:"/img/empty.svg",revision:"b305789a59031cf0fe31885ed2ec3aa0"},{url:"/img/empty_cart.svg",revision:"1d5d13dce2ed9dee220ded46b074cc7d"},{url:"/img/favicons/android-chrome-192x192.png",revision:"236deea7d5a52b10b7fbae9fa58924aa"},{url:"/img/favicons/android-chrome-512x512.png",revision:"1cdb449bf5694fe7c3fa32f1f06dfe73"},{url:"/img/favicons/apple-touch-icon.png",revision:"2dae7ec1b88c3dbe921e227cca0275a5"},{url:"/img/favicons/browserconfig.xml",revision:"38e0d5e6889d7aa3815fe68056fb3fcc"},{url:"/img/favicons/favicon-16x16.png",revision:"6f050891ea8218c13a93f4edcbe658b3"},{url:"/img/favicons/favicon-32x32.png",revision:"365f2c8b3e493ee82416a874f7a8f06c"},{url:"/img/favicons/favicon.ico",revision:"b4c6b400421ada51c8d7e707461248d9"},{url:"/img/favicons/mstile-144x144.png",revision:"819b9e1e9ceab1d1d9bf9886f0a9728f"},{url:"/img/favicons/mstile-150x150.png",revision:"448ec3bcbf2618f97d5cebaa39056be7"},{url:"/img/favicons/mstile-310x150.png",revision:"0fe2c90b9709c90512df6b676c0899b3"},{url:"/img/favicons/mstile-310x310.png",revision:"f0192b30821faae3c434793aba3a2d1d"},{url:"/img/favicons/mstile-70x70.png",revision:"132d356fc19147eb27c4d91629e35596"},{url:"/img/favicons/safari-pinned-tab.svg",revision:"0af2867b804ab32494a7213317b4abdf"},{url:"/img/favicons/site.webmanifest",revision:"8e6f9cbf14cafdd15af37166ab9b096f"},{url:"/img/hero.svg",revision:"c392a959fc1257205fc4f4fb7e177476"},{url:"/img/logo.png",revision:"cd27c3b2af47294d878d308d973a2435"},{url:"/img/logo.svg",revision:"01d8b853622f90c3d3ec9a8aa843861d"},{url:"/img/profile_pic.svg",revision:"4cef916b26cc5e5adc6545ccdc02b205"},{url:"/img/programming.svg",revision:"01a2c686cc3e525d2e920dbc99af6737"},{url:"/img/social/facebook.svg",revision:"6eb54e516e4dd1d95267c82d7a68dab0"},{url:"/img/social/gmail.svg",revision:"d7d4473526390e9a346707f3526d695a"},{url:"/img/social/instagram.svg",revision:"d724b9d35f898cba3f05889dab4e11e7"},{url:"/img/social/twitter.svg",revision:"cda3a07f1830a8177d32d30967f94570"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));