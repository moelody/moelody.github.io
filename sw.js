"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fbe13d6efb169cece2fda234f8ae5e40",url:"./404.html"},{revision:"2633b081d15cf23f394c63ed1c50260c",url:"./about/index.html"},{revision:"8b2caeaa2fac4c36d25cb9748780d7f9",url:"./animated/index.html"},{revision:"d02f2e8b0566015e6bd414c7a8c2b592",url:"./archives/2020/06/index.html"},{revision:"755945ec52b8125c69d26773e2273229",url:"./archives/2020/07/index.html"},{revision:"4835c5363007c097e9dbf726b4a9a3d5",url:"./archives/2020/08/index.html"},{revision:"2e82375d5710ca8a059a44954e36531c",url:"./archives/2020/10/index.html"},{revision:"d039b018b560c993114a94e003695a4d",url:"./archives/2020/index.html"},{revision:"0b6aa805383251c34492b0f9811bc6fe",url:"./archives/2021/06/index.html"},{revision:"dabe9660d63ee087743fae3164e44871",url:"./archives/2021/index.html"},{revision:"c9915139d1c58894ed95c06701ab158f",url:"./archives/2024/05/index.html"},{revision:"742f751b4cc77552dabfb331d26222a4",url:"./archives/2024/index.html"},{revision:"98de7331681048120e499df96c11a1d4",url:"./archives/index.html"},{revision:"f3e987d85ac140539291d2c6f4dbf978",url:"./background/index.html"},{revision:"84e1183fe1b864c7189c63a02ca91d55",url:"./categories/AE/index.html"},{revision:"b96a418123a6cfc6ed5dcccac8b9dd68",url:"./categories/AE/插件/index.html"},{revision:"9907d120304df3756eb00a62c4639840",url:"./categories/AE/脚本/index.html"},{revision:"4c6feb7b334ae72828b0d1762ebbc0ff",url:"./categories/index.html"},{revision:"1d16ed4eda889ed598cbbab88bf1b9f8",url:"./categories/博客/Hexo/index.html"},{revision:"3cadcdcdaab7a9adae4decf9ec00f109",url:"./categories/博客/index.html"},{revision:"290c24c61a651021531ff70000fecbdf",url:"./categories/笔记/ffmpeg/index.html"},{revision:"354b7d0dfaafebaf8c701fe063cc8f42",url:"./categories/笔记/index.html"},{revision:"d8e7dfdfc762b47a99f0138ae4ce927e",url:"./categories/笔记/常用/index.html"},{revision:"cacf1baa332d7a0f7fcdea3fe41a454b",url:"./categories/软件/Directory-Opus/index.html"},{revision:"fd753831533441a3144fdcd89de6f9b7",url:"./categories/软件/index.html"},{revision:"5e564738fdd1116c66833231e6183bd7",url:"./content.json"},{revision:"bc5cecf480f72f7191c6d4fcc0d73987",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"4df66701ba2ddd3b5acf8df2ed89655d",url:"./demo/index.html"},{revision:"ed5487efe8b9463486112909a295ad71",url:"./Gallery/index.html"},{revision:"65b08df14a0696d97d7160a8a87150b4",url:"./Gallery/wallpaper/index.html"},{revision:"99f69b9084e64fde7eee1c85981cfe67",url:"./go.html"},{revision:"5c5024d821b3ff207c6929345950409a",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"e27438014c7a73f7efd61e0caf13c5e0",url:"./index.html"},{revision:"960297fafacb19dff1246d71f6dfcf6f",url:"./js/main.js"},{revision:"cf74e48f7893f8d4ceca6a2770a88448",url:"./js/pikaday.js"},{revision:"4491ac1d470a1693a502a9d09034aa21",url:"./js/search/algolia.js"},{revision:"9da6b76672a143c8c8449770a8d259f3",url:"./js/search/local-search.js"},{revision:"fb4da68124bbafbd2d3da537c80e27ce",url:"./js/tw_cn.js"},{revision:"420a15cf446b5670244a9ea05b2bccf0",url:"./js/utils.js"},{revision:"6090b3834290832674341f27fb798a32",url:"./link/index.html"},{revision:"1d56e9ae6c404e384884711d5d327f2c",url:"./messageboard/index.html"},{revision:"daec66d97d8098fff4e8b860e28e3968",url:"./musics/index.html"},{revision:"e8b417c0e04dba19a968ebd0fde62045",url:"./posts/31e4c77c/index.html"},{revision:"ae7156f9d95f4b34bae12e894da5da51",url:"./posts/492571b8/index.html"},{revision:"3b935ec6a92354623f4d34e9a9840c71",url:"./posts/4f62ec51/index.html"},{revision:"55c6f4463fd4d0d3b9d36953ce262a38",url:"./posts/9c50ad86/index.html"},{revision:"6ee8b3b5079fba6b1bfed44cd8b1f3e3",url:"./posts/bb9a879a/index.html"},{revision:"0e45bca6e41e43d081b522050049ca5a",url:"./posts/be1992ca/index.html"},{revision:"20ec39a695e8e5cb8def76044fa10124",url:"./posts/cf8e3b18/index.html"},{revision:"da2eb272605098c39563bdcd1d034381",url:"./posts/d78f4fea/index.html"},{revision:"d10facf9821027ba40941196982c73cd",url:"./posts/ec931d23/index.html"},{revision:"447a21bd3ea6b1a49860350b6988acc2",url:"./share/index.html"},{revision:"d15db9dd7042c1ebf067d849e6039f05",url:"./tags/bat/index.html"},{revision:"4cbabf26ffb760339510ccf1490dc74e",url:"./tags/butterfly/index.html"},{revision:"e6f81c4f26ae8060597634ff77b21099",url:"./tags/button/index.html"},{revision:"2e7e2de20a946d1fe67a8bb02e073f61",url:"./tags/CellFX/index.html"},{revision:"2c5efbd24a9998a34e6f6e276087a41b",url:"./tags/cmd/index.html"},{revision:"602e55eadc8ed0871218e9a73bd372f7",url:"./tags/explorer/index.html"},{revision:"061db0e7420b2bfa4ed4005f2750dea7",url:"./tags/ffmpeg/index.html"},{revision:"80199910fa0f6a156dcaa608b1047ee3",url:"./tags/front-matter/index.html"},{revision:"d3fcb210c483107d7cfd5279bd1fa118",url:"./tags/gif/index.html"},{revision:"39c0376b9d4ca6e823210398e5afce2d",url:"./tags/hexo/index.html"},{revision:"9fa31756dd3de7075ce252a605f3d7b9",url:"./tags/index.html"},{revision:"93ce160bcc5ed135c78ed51103218104",url:"./tags/mp4/index.html"},{revision:"d569c478b9de6b2827f20b7308d49510",url:"./tags/opus/index.html"},{revision:"69b59f2e8f381db67b0eddb40e2899c8",url:"./tags/QALap/index.html"},{revision:"c5e5a7fbefee15a690685a81ae26ec05",url:"./tags/tags/index.html"},{revision:"9315d2df2ad934f435f71a18c0858157",url:"./tags/terminal/index.html"},{revision:"82a7cb0edf93f09aed9b25b706222469",url:"./tags/webm/index.html"},{revision:"caf720892df11d1733920d088376688d",url:"./tags/自研/index.html"},{revision:"ca5751ba99adf068359db0aaa366b877",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();