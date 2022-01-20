"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Moelody"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6cf010dab6d5bef049966bc5efc8a912",url:"./404.html"},{revision:"26a8cbe19b8862ceeddd5de0f9f61755",url:"./about/index.html"},{revision:"e67e55a64b1905d05f5a7927deec4798",url:"./animated/index.html"},{revision:"80843142049d929b092d2d9b38ce9e64",url:"./archives/2020/06/index.html"},{revision:"ab7e52aaa461000c9a7bbf3b11c64518",url:"./archives/2020/07/index.html"},{revision:"3a2533ac7387c8e0cad53e9e1b3534d4",url:"./archives/2020/08/index.html"},{revision:"91bde3e73883b682658675a7a644123a",url:"./archives/2020/10/index.html"},{revision:"84d8ca72da358e7dbcca8d9e426d9f44",url:"./archives/2020/index.html"},{revision:"b3238d215718d7420b2facd729b9dc3d",url:"./archives/2021/06/index.html"},{revision:"b16a2351490e48d17e8b8738048c5cd6",url:"./archives/2021/index.html"},{revision:"b530497a98805d81553c76bcb34b5db2",url:"./archives/index.html"},{revision:"ffa963241f5b19fe15aef0b880b8320a",url:"./background/index.html"},{revision:"139c7683503bb6447ac635d58832c4db",url:"./categories/AE/index.html"},{revision:"91a275290e008830dcb9b4d02e985f48",url:"./categories/AE/插件/index.html"},{revision:"ff89e76622d443ffd4acc13356660c0e",url:"./categories/index.html"},{revision:"9c67559b5aca5722c97dc81c15a79d14",url:"./categories/博客/Hexo/index.html"},{revision:"e852146d3c1cdecd03507240d4e68770",url:"./categories/博客/index.html"},{revision:"f568267ab4673dc448cd09fcf8bda102",url:"./categories/笔记/ffmpeg/index.html"},{revision:"74d4610e444eb9fc5ffa1fae36ea4466",url:"./categories/笔记/index.html"},{revision:"1a49d7a9c595ba68b6e20cc9c68a4fbf",url:"./categories/笔记/常用/index.html"},{revision:"5489bcb6340c879c2f60c48bb436720f",url:"./categories/软件/Directory-Opus/index.html"},{revision:"93731e02a20f2c76f2f10e2e0e02d3ad",url:"./categories/软件/index.html"},{revision:"4ede74a38a4e7b980705e7dab5f1b43e",url:"./content.json"},{revision:"683c8fd4b9b34c2331f22885c7e2b3dd",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b2e281fa2193bd3347c58008d83ae95e",url:"./demo/index.html"},{revision:"2571b0735b971d8bd0afc7c2457f6be9",url:"./Gallery/index.html"},{revision:"869911bb06ee59349d91319e61a6a46e",url:"./Gallery/wallpaper/index.html"},{revision:"a72dbc1c41dfeae34eb75e6136039b76",url:"./go.html"},{revision:"463614610e2565f4f6da0e3d6251ced6",url:"./iconfont/index.html"},{revision:"f88fa1f8810f35ca72be0dec1a41f0db",url:"./img/pwa/manifest.json"},{revision:"622e1429447b24dd67b11bf8079c0aa0",url:"./index.html"},{revision:"67ef93b7026979d99da673cfd9fd85de",url:"./js/main.js"},{revision:"f4bd467eea69027d851055dc4c99ef41",url:"./js/pikaday.js"},{revision:"d36a279469bce7854189f9481d3d0860",url:"./js/search/algolia.js"},{revision:"1685cd43da0de7abd4a649dd5b2d81db",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"9f465e7dd29ec62dbc6af321882c2b59",url:"./js/utils.js"},{revision:"30878f58245a40f05448a7159a24bd39",url:"./link/index.html"},{revision:"56b9ff1710ba2d65e7d79d8332e6996c",url:"./messageboard/index.html"},{revision:"f14b33ca8fd620bb0c0820edd87e5c4f",url:"./musics/index.html"},{revision:"3125b474dbdeb31a24ff21be9e480e72",url:"./posts/31e4c77c/index.html"},{revision:"0bc322e04699edc634a38b6544020ae9",url:"./posts/492571b8/index.html"},{revision:"c460dfd09626547a4c95449201e9a0ce",url:"./posts/4f62ec51/index.html"},{revision:"53825258891a19d14b4b804c5977fdbb",url:"./posts/9c50ad86/index.html"},{revision:"dce7a092593e87c3266b1ec85e56e143",url:"./posts/bb9a879a/index.html"},{revision:"a721e8b4d45f2e030ce527b4ff57b531",url:"./posts/cf8e3b18/index.html"},{revision:"4a8288ef3a1ce899768f7f8363b6e49a",url:"./posts/d78f4fea/index.html"},{revision:"4629195f95a0d2780affca5f5bee2335",url:"./posts/ec931d23/index.html"},{revision:"0bd89a85ba4dbac0082f5fe10ee68aa0",url:"./share/index.html"},{revision:"2d26f5610b1a8b62a9a5b8d60ca40a32",url:"./tags/bat/index.html"},{revision:"7b720a3692462d8090feef4ca64f6150",url:"./tags/butterfly/index.html"},{revision:"cae9015bc052e317469f94758985a6aa",url:"./tags/button/index.html"},{revision:"f7a3aad30e54440fb15791024b71384e",url:"./tags/cmd/index.html"},{revision:"b5ec066b647ec9bc545da5657de38632",url:"./tags/explorer/index.html"},{revision:"e2a17e07b785b111f020f2aeb0b6e456",url:"./tags/ffmpeg/index.html"},{revision:"22f5e54f3a0c55a3850b878d764f496c",url:"./tags/front-matter/index.html"},{revision:"c2d016a2913de99e49b948aba1588729",url:"./tags/gif/index.html"},{revision:"2c5ded51966dbb37bd776b4c1739f834",url:"./tags/hexo/index.html"},{revision:"f4992cddd2f46abd76d969e9accf71b0",url:"./tags/index.html"},{revision:"f520f2278ade7af1843603c09d5fad18",url:"./tags/mp4/index.html"},{revision:"02ab573c10d151a8bbe8d5ff2ef692ce",url:"./tags/opus/index.html"},{revision:"47986397ec7301763cdf686587eb9ad2",url:"./tags/QALap/index.html"},{revision:"91961a2278aea6335944813e1240084a",url:"./tags/tags/index.html"},{revision:"7d75efe66bfe400bc1c4c4e913ce5833",url:"./tags/terminal/index.html"},{revision:"92eb2952d236e53cd27a260d42567488",url:"./tags/webm/index.html"},{revision:"e319f0ab1d53ede244bcbed96b96972f",url:"./tags/自研/index.html"},{revision:"1397e5dc218389e1de444eb5421eefe6",url:"./tags/魔改/index.html"},{revision:"270980d4320ec607d6db4784fb11ebbc",url:"./vercel.json"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();