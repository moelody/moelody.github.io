"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){l=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var btf={debounce:function(r,o,a){var i;return function(){var t=this,e=arguments,n=a&&!i;clearTimeout(i),i=setTimeout(function(){i=null,a||r.apply(t,e)},o),n&&r.apply(t,e)}},throttle:function(n,r,o){var a,i,l,u=0;function c(){u=!1===o.leading?0:(new Date).getTime(),a=null,n.apply(i,l),a||(i=l=null)}return o=o||{},function(){var t=(new Date).getTime();u||!1!==o.leading||(u=t);var e=r-(t-u);i=this,l=arguments,e<=0||r<e?(a&&(clearTimeout(a),a=null),u=t,n.apply(i,l),a||(i=l=null)):a||!1===o.trailing||(a=setTimeout(c,e))}},sidebarPaddingR:function(){var t=window.innerWidth,e=document.body.clientWidth;t!==e&&(document.body.style.paddingRight=t-e+"px")},snackbarShow:function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2e3,r=(a=GLOBAL_CONFIG.Snackbar).position,o=a.bgLight,a=a.bgDark,a="light"===document.documentElement.getAttribute("data-theme")?o:a;Snackbar.show({text:t,backgroundColor:a,showAction:e,duration:n,pos:r})},diffDate:function(t){var e,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=new Date,o=new Date(t),a=r.getTime()-o.getTime();return n?(e=a/864e5,t=a/36e5,r=a/6e4,12<(n=a/2592e6)?o.toLocaleDateString().replace(/\//g,"-"):1<=n?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.month:1<=e?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.day:1<=t?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.hour:1<=r?parseInt(r)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just):parseInt(a/864e5)},loadComment:function(t,e){var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(t){t[0].isIntersecting&&(e(),n.disconnect())},{threshold:[0]})).observe(t):e()},scrollToDest:function(n){var r,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500,a=window.pageYOffset;n<a&&(n-=70),"scrollBehavior"in document.documentElement.style?window.scrollTo({top:n,behavior:"smooth"}):(r=null,n=+n,window.requestAnimationFrame(function t(e){e-=r=r||e,a<n?window.scrollTo(0,(n-a)*e/o+a):window.scrollTo(0,a-(a-n)*e/o),e<o?window.requestAnimationFrame(t):window.scrollTo(0,n)}))},animateIn:function(t,e){t.style.display="block",t.style.animation=e},animateOut:function(e,t){e.addEventListener("animationend",function t(){e.style.display="",e.style.animation="",e.removeEventListener("animationend",t)}),e.style.animation=t},getParents:function(t,e){for(;t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},siblings:function(e,n){return _toConsumableArray(e.parentNode.children).filter(function(t){return n?t!==e&&t.matches(n):t!==e})},wrap:function(t,e,n){for(var r=document.createElement(e),o=0,a=Object.entries(n);o<a.length;o++){var i=(l=_slicedToArray(a[o],2))[0],l=l[1];r.setAttribute(i,l)}t.parentNode.insertBefore(r,t),r.appendChild(t)},unwrap:function(t){var e=t.parentNode;e!==document.body&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))},isHidden:function(t){return 0===t.offsetHeight&&0===t.offsetWidth},getEleTop:function(t){for(var e=t.offsetTop,n=t.offsetParent;null!==n;)e+=n.offsetTop,n=n.offsetParent;return e},loadLightbox:function(t){var n,e=GLOBAL_CONFIG.lightbox;"mediumZoom"===e&&(n=mediumZoom(t)).on("open",function(t){var e="dark"===document.documentElement.getAttribute("data-theme")?"#121212":"#fff";n.update({background:e})}),"fancybox"===e&&(t.forEach(function(t){var e,n;"A"!==t.parentNode.tagName&&(e=t.dataset.lazySrc||t.src,n=t.title||t.alt||"",btf.wrap(t,"a",{href:e,"data-fancybox":"gallery","data-caption":n,"data-thumb":e}))}),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{autoStart:!1}}),window.fancyboxRun=!0))},initJustifiedGallery:function(t){t.forEach(function(t){btf.isHidden(t)||fjGallery(t,{itemSelector:".fj-gallery-item",rowHeight:220,gutter:4,onJustify:function(){this.$container.style.opacity="1"}})})},updateAnchor:function(t){var e;t!==window.location.hash&&(t=t||location.pathname,e=GLOBAL_CONFIG_SITE.title,window.history.replaceState({url:location.href,title:e},e,t))}};