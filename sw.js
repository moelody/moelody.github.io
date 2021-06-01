"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1eb685771469a99f0b83dc073bc9688f",url:"./404.html"},{revision:"7b17fd11a9028ca480ab191604c3f983",url:"./about/index.html"},{revision:"019ab14a5ed97bae5bdf6101ba6e440b",url:"./animated/index.html"},{revision:"6d2b94c73fde133a7b8dc9c9dd19e7c0",url:"./archives/2020/06/index.html"},{revision:"4dc817ad02ad696eeb33419acf4cab06",url:"./archives/2020/07/index.html"},{revision:"66f1d7147038422a7cc205cab4b47832",url:"./archives/2020/08/index.html"},{revision:"d79c6924e0c8b3b9343ec85ba43e7ac6",url:"./archives/2020/10/index.html"},{revision:"c130694d41d2ce1178dcc22fa69f2f57",url:"./archives/2020/index.html"},{revision:"1ad5e4d6a581d99bf96a9d1713c6fc72",url:"./archives/2021/06/index.html"},{revision:"fcfba3af47fddc1e46e14241f735125d",url:"./archives/2021/index.html"},{revision:"f7ea0263abb5f0a018a5504ceabac23b",url:"./archives/index.html"},{revision:"0d4f16d8c14606cba90ebe5c1ac68dce",url:"./background/index.html"},{revision:"298f67df9375f3117351f46c652621b5",url:"./categories/笔记/常用/index.html"},{revision:"3917cfd23a311af6fd37ed04545dab85",url:"./categories/笔记/ffmpeg/index.html"},{revision:"a4de10e68888bef61f8a2bfa8649d00f",url:"./categories/笔记/index.html"},{revision:"e2eca56a92402d830c4f63657aa31f57",url:"./categories/博客/Hexo/index.html"},{revision:"c1e0c88f03bd67152d1f954dbccfab93",url:"./categories/博客/index.html"},{revision:"2f89f22cab55c368b0f638fb8899296d",url:"./categories/软件/Directory-Opus/index.html"},{revision:"cd56ebf590a402e14b8f34ceb66e0b9f",url:"./categories/软件/index.html"},{revision:"f6e4286e6fb94146088f80a911c70191",url:"./categories/AE/插件/index.html"},{revision:"d7707ca5a8f6c2088893169ea7ad5c24",url:"./categories/AE/index.html"},{revision:"b2c10838d62bf44998bfdd4045573de8",url:"./categories/index.html"},{revision:"ea6330baaea88b2e74de6a946f86a112",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c7ceb8ee53c0e529deae4cf8ac9c485c",url:"./demo/index.html"},{revision:"0f05804f5dfedd388d44f24cf48b598a",url:"./Gallery/index.html"},{revision:"093aeeaca35bbd756954438635b367bb",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"8e4cb339308bbb0b954c4f2f88f4dfc9",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"8817f01daebff2521e2dbf718670e636",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"f4bd467eea69027d851055dc4c99ef41",url:"./js/pikaday.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"78a9465b3caed4f522e16cccaedfdfba",url:"./link/index.html"},{revision:"760e04206967b3d22ea340933a645057",url:"./messageboard/index.html"},{revision:"cccf90cdc6a6d0d5619090c8ac7fce65",url:"./musics/index.html"},{revision:"cdb490484128eac5e7123609870a7756",url:"./posts/31e4c77c/index.html"},{revision:"b6c39b332a70a19c12dec9fc3d0664cd",url:"./posts/492571b8/index.html"},{revision:"791fbdde400e7d1f1ceb202ae73b1c64",url:"./posts/4f62ec51/index.html"},{revision:"a5fb256db947c1d4beb7b0eb34ff0266",url:"./posts/9c50ad86/index.html"},{revision:"62303511b374f59315effb966d5c0f54",url:"./posts/bb9a879a/index.html"},{revision:"6deccf7a156f7ebca436bd045f864c43",url:"./posts/cf8e3b18/index.html"},{revision:"4453a5e66e84721f8b0f26d199627709",url:"./posts/d78f4fea/index.html"},{revision:"f782334138563736db9dd65e6a1b429f",url:"./posts/ec931d23/index.html"},{revision:"c9c41f619a52627422aa32a073de5948",url:"./share/index.html"},{revision:"88205b140f95b459228faac1c6f7d1f2",url:"./tags/魔改/index.html"},{revision:"57a690770ab7b93d6895c72c2b9f330d",url:"./tags/自研/index.html"},{revision:"27067564b80866df3e1fab42923b27c5",url:"./tags/bat/index.html"},{revision:"ab5d0c23eee552b1bcd2fe01ecffb04c",url:"./tags/butterfly/index.html"},{revision:"47d311ccbe64ce88b124cd53f77a3a83",url:"./tags/button/index.html"},{revision:"fd85a8129e16b542190e7a83236e0203",url:"./tags/cmd/index.html"},{revision:"8ae8b0147253053ee1f0c9e7b4419d60",url:"./tags/explorer/index.html"},{revision:"b599ee21f7bb1d13b2d12b348f92afa9",url:"./tags/ffmpeg/index.html"},{revision:"685f4e68847d3776ceef234c2799f55d",url:"./tags/front-matter/index.html"},{revision:"9adc0dc34d51bc61e1378c9df3de63f7",url:"./tags/gif/index.html"},{revision:"d01b5d233c286dea35749de0cafdf8fd",url:"./tags/hexo/index.html"},{revision:"e67f54a0435d96d9cae3907429308fe5",url:"./tags/index.html"},{revision:"41b1be614f74dfac80fdd3826ea77195",url:"./tags/mp4/index.html"},{revision:"a6539d5087a12e7cf9d4b7b9d2bdec07",url:"./tags/opus/index.html"},{revision:"00bd48d8f3f34f91b79df51bba578480",url:"./tags/QALap/index.html"},{revision:"21a8dc6fbc5a61ae7de37fc3cdc6d56e",url:"./tags/tags/index.html"},{revision:"c73e802a9fcc3ba90db00daadcc9c587",url:"./tags/terminal/index.html"},{revision:"5c7d11285aef8ea1b33f678ec1a257bf",url:"./tags/webm/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();