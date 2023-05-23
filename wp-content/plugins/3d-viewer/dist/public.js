(()=>{"use strict";function e(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){d=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(d)throw a}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}window.addEventListener("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/3dModelViewer.default",(function(e,n){var t=e[0].querySelector(".b3dviewer-wrapper.elementor");modelRendrer({animation:!0,variant:!0,wrapper:t})}))})),addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".bp_model_parent");Object.values(e).map((function(e){var n,t,r=e.querySelector("#openBtn"),o=e.querySelector("model-viewer"),l=e.querySelector(".progress"),a=new URL(null==o?void 0:o.src);(r.onclick=function(){var n=e.cloneNode(!0);n.classList.add("fullscreen");var t=n.querySelector("#closeBtn");document.querySelector("body").appendChild(n),t.onclick=function(){document.querySelector("body").removeChild(n)}},(null==a?void 0:a.protocol)!==(null===(n=location)||void 0===n?void 0:n.protocol))&&o.setAttribute("src",a.href.replace(null==a?void 0:a.protocol,null===(t=location)||void 0===t?void 0:t.protocol));l&&(o.addEventListener("progress",(function(e){l.innerHTML=parseInt(100*e.detail.totalProgress)+"%"})),o.addEventListener("load",(function(){setTimeout((function(){l.style.display="none"}),500)})))}));var n=document.querySelectorAll(".bp3dmodel-carousel");Object.values(n).map((function(e){var n,t;1==e.dataset.fullscreen&&(n=document.querySelectorAll(".bp_model_gallery"),t=document.createElement("div"),Object.values(n).map((function(e){var n=e.querySelector("model-viewer"),r=document.createElement("div");r.classList.add("bp3d-model-buttons"),r.innerHTML='<svg id="openBtn" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#f2f2f2" class="bi bi-arrows-fullscreen"> <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/> </svg> <svg id="closeBtn" width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#f2f2f2" stroke-width="2" d="M7,7 L17,17 M7,17 L17,7"/> </svg>',n.parentNode.appendChild(r);var o=n.parentNode.cloneNode(!0);o.style.display="none",o.onclick=function(e){e.preventDefault()};var l=o.querySelector("model-viewer");l.style.width="100%",l.style.height="100%",l.style.maxHeight="100%",t.appendChild(o);var a=r.querySelector("#openBtn"),i=o.querySelector("#closeBtn");a.onclick=function(){o.classList.add("fullscreen"),o.style.display="block"},i.onclick=function(e){e.preventDefault(),o.classList.remove("fullscreen"),o.style.display="none"}})),document.querySelector("body").appendChild(t))}))})),jQuery(document).ready((function(e){e(".bp3dmodel-carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!0})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".b3dviewer-wrapper:not(.elementor)");Object.values(e).map((function(e){r({animation:!0,variant:!0,wrapper:e})}))})),window.addEventListener("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/3dModelViewer.default",(function(e,n){r({animation:!0,variant:!0,wrapper:e[0].querySelector(".b3dviewer-wrapper.elementor")}),console.log("elementor loaded")}))}));var t=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(null!=n&&n.parentElement){o&&(n.parentElement.style.display="inline-block"),n.innerHTML="",!t.length&&n.parentElement&&(window.location.href.includes("wp-admin")?t[0]="not available":n.parentElement.style.display="none");var l,a=e(t);try{for(a.s();!(l=a.n()).done;){var i=l.value,d=document.createElement("option");d.value=i,d.textContent=i,n.appendChild(d),i===r&&(d.selected=!0)}}catch(e){a.e(e)}finally{a.f()}}};function r(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.animation,l=void 0!==o&&o,a=r.variant,i=void 0!==a&&a,d=r.wrapper;if(d){var c=d.querySelector("#openBtn"),u=d.querySelector("#closeBtn");c&&c.addEventListener("click",(function(){d.classList.add("fullscreen")})),u&&u.addEventListener("click",(function(){d.classList.remove("fullscreen")}));var s=d.querySelector("model-viewer");if(!s)return!1;if(s.src)try{var v=new URL(s.src);(null==v?void 0:v.protocol)!==window.location.protocol&&(s.src=v.href.replace(v.protocol,window.location.protocol))}catch(e){}var f=s.dataset.animation,p=d.querySelector("#variant"),m=d.querySelector("#animations"),y=d.querySelector(".percentageWrapper"),w=null==y?void 0:y.querySelector(".percentage");s.addEventListener("load",(function(){t(p,s.availableVariants,"",i),t(m,s.availableAnimations,f,l),s.animationName=f,setTimeout((function(){y&&(y.style.display="none")}),100)})),w&&s.addEventListener("progress",(function(e){w.innerHTML=parseInt(100*e.detail.totalProgress)+"%"})),p&&p.addEventListener("input",(function(e){s.variantName=e.target.value})),m&&m.addEventListener("input",(function(e){s.animationName=e.target.value}));var h,b=d.querySelectorAll(".slide"),g=e(b);try{var L=function(){var e=h.value;e.addEventListener("click",(function(n){var t,r;n.preventDefault(),s.src=null==e||null===(t=e.dataset)||void 0===t?void 0:t.source,s.poster=null==e||null===(r=e.dataset)||void 0===r?void 0:r.poster,b.forEach((function(e){e.classList.remove("selected")})),e.classList.add("selected"),p&&(p.innerHTML="")}))};for(g.s();!(h=g.n()).done;)L()}catch(e){g.e(e)}finally{g.f()}null===(n=document.querySelector(".slider"))||void 0===n||n.addEventListener("beforexrselect",(function(e){e.preventDefault()}))}}window.modelRendrer=r})();