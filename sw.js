"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"26e5425b8a5efa1d986d6b930fc434ec",url:"./404.html"},{revision:"2337b89f12fa7efe9a2956b87f55ef06",url:"./about/index.html"},{revision:"4d7ba5bd284857927218e46c401abf11",url:"./animated/index.html"},{revision:"9761fe01a62caecc636868381d5146b9",url:"./archives/2020/06/index.html"},{revision:"2275170bdc2229937fb5181a7394d3ab",url:"./archives/2020/07/index.html"},{revision:"b19b196d7e7c6faff7c2bab0e3e324f9",url:"./archives/2020/08/index.html"},{revision:"93b0d3b11cd87475381e56bafb3babd0",url:"./archives/2020/10/index.html"},{revision:"57ade033b44d6d3fe5dc8956e6e8611e",url:"./archives/2020/index.html"},{revision:"3530e55320206a9ad3e994a6b7e2c446",url:"./archives/2021/06/index.html"},{revision:"b0dd0e00bae23e516fb4b7a992b0b843",url:"./archives/2021/index.html"},{revision:"dcb95e908b568fad0d97a8f39fc6352b",url:"./archives/2024/05/index.html"},{revision:"681c787f31580887d085c42130a5df5c",url:"./archives/2024/index.html"},{revision:"9fb6db16290cd1862b1c97665b1a05da",url:"./archives/index.html"},{revision:"0b1daecef9a78cd1c5a965ce3ad83107",url:"./background/index.html"},{revision:"f5935a1b0d73f928bcd71642654da373",url:"./categories/AE/index.html"},{revision:"4247089ac647b0dc07cca33639ffcb62",url:"./categories/AE/插件/index.html"},{revision:"c476892bb5450d2e71b0717034cf771e",url:"./categories/AE/脚本/index.html"},{revision:"7bdf4ec71bdc8ad226316f9a183a717e",url:"./categories/index.html"},{revision:"b1e98af670ebc44517822cc6e3091a61",url:"./categories/博客/Hexo/index.html"},{revision:"02d1841f3af177354c8767b8b9160988",url:"./categories/博客/index.html"},{revision:"cbf81ab27ca03a6382d0394a492ee845",url:"./categories/笔记/ffmpeg/index.html"},{revision:"c41edc2df0320e1bb6eae40a0ab69806",url:"./categories/笔记/index.html"},{revision:"6c4582d8e6309dd85cf467b5ea02119c",url:"./categories/笔记/常用/index.html"},{revision:"68a3e79240ad018d6134b62e6a595eb2",url:"./categories/软件/Directory-Opus/index.html"},{revision:"9f47eba9f02a8c34cf570b1c4803553c",url:"./categories/软件/index.html"},{revision:"15ec5127dc1474371b2c23dc5a930e23",url:"./content.json"},{revision:"bc5cecf480f72f7191c6d4fcc0d73987",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"abfb44e0f4b12189f679674bf6b56c6d",url:"./demo/index.html"},{revision:"66ddf07fbd3fb57fc14a18bc797ba57e",url:"./Gallery/index.html"},{revision:"b231536fcf1ebc834e733883c0e3c95b",url:"./Gallery/wallpaper/index.html"},{revision:"99f69b9084e64fde7eee1c85981cfe67",url:"./go.html"},{revision:"0df9c3311d61a6c9c594f647426ea061",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"1844b5a4158997aa9a8f4fdc0673ca7a",url:"./index.html"},{revision:"960297fafacb19dff1246d71f6dfcf6f",url:"./js/main.js"},{revision:"cf74e48f7893f8d4ceca6a2770a88448",url:"./js/pikaday.js"},{revision:"4491ac1d470a1693a502a9d09034aa21",url:"./js/search/algolia.js"},{revision:"9da6b76672a143c8c8449770a8d259f3",url:"./js/search/local-search.js"},{revision:"fb4da68124bbafbd2d3da537c80e27ce",url:"./js/tw_cn.js"},{revision:"420a15cf446b5670244a9ea05b2bccf0",url:"./js/utils.js"},{revision:"375b2ac8c600fec3e50648a10d5dd9b0",url:"./link/index.html"},{revision:"2596dc8d8f6b7961ce0db45ee06e7576",url:"./messageboard/index.html"},{revision:"3f778f11c1b1aa0f46d60d8b80a1e0e0",url:"./musics/index.html"},{revision:"7feba2a90d26cdd2f112dc16a1357622",url:"./posts/31e4c77c/index.html"},{revision:"9e5213a33bf06bdabd56acd454db997e",url:"./posts/492571b8/index.html"},{revision:"545dbf8556a7faf457b018f4a1158be7",url:"./posts/4f62ec51/index.html"},{revision:"f9bec5dcd54ae63ddc06dfacab61513d",url:"./posts/9c50ad86/index.html"},{revision:"ad5852902f36dde10cee8f3d588e7bc8",url:"./posts/bb9a879a/index.html"},{revision:"41bd765f4babca45978d9d947f84171e",url:"./posts/be1992ca/index.html"},{revision:"d932cfd9a9b75730896c5c64d29e7fc4",url:"./posts/cf8e3b18/index.html"},{revision:"8178a5a4123534a7496ad72b0e385686",url:"./posts/d78f4fea/index.html"},{revision:"b48b20fd11c9839c23289dea8a55ca13",url:"./posts/ec931d23/index.html"},{revision:"9036d02454bc3b270f194b4e8d822f24",url:"./share/index.html"},{revision:"720ebe2f8f8cc9168e305aeec1431e22",url:"./tags/bat/index.html"},{revision:"813c4b3ce30e06a23ab60f8c0bb5d514",url:"./tags/butterfly/index.html"},{revision:"a20274c256bba9a4a665c0e20e71c7bf",url:"./tags/button/index.html"},{revision:"b18dd190d8a4e811b96281a7760af3c6",url:"./tags/CellFX/index.html"},{revision:"12d9ea814978ca29e7a9d80c63e6d29d",url:"./tags/cmd/index.html"},{revision:"e20dc4f00550b8c44d4089310faf6358",url:"./tags/explorer/index.html"},{revision:"0e5e4a3826530305d583d971deaa00fd",url:"./tags/ffmpeg/index.html"},{revision:"295085261f7c89f5721a816d9dfb1666",url:"./tags/front-matter/index.html"},{revision:"8045d0e9a226f4a1f97f1d232b55be6e",url:"./tags/gif/index.html"},{revision:"155cc04b434611ed13201ed864d9f253",url:"./tags/hexo/index.html"},{revision:"bc97dc4421a5042e0e90df335e998801",url:"./tags/index.html"},{revision:"2a99e3b4cd13a49408477ba2b1282b98",url:"./tags/mp4/index.html"},{revision:"e98d8f45a62f4ee848e99a2e0510c2e5",url:"./tags/opus/index.html"},{revision:"44cd6d0f12622035f5298cd47102e94d",url:"./tags/QALap/index.html"},{revision:"19b3598c9f67fc702a70ba55adc97d36",url:"./tags/tags/index.html"},{revision:"77f0764945cc2638ce1b97e11db8418a",url:"./tags/terminal/index.html"},{revision:"7c37da19f24040d68fd770bb23306619",url:"./tags/webm/index.html"},{revision:"7a4738324e7feb097e66d85eb508fdda",url:"./tags/自研/index.html"},{revision:"8d4aee548b306534f97e3e2926251f30",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();