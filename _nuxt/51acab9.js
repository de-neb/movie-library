(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{211:function(t,e,n){t.exports=n.p+"img/profile.4113f21.png"},215:function(t,e,n){"use strict";n.r(e);var r=n(105);var c=n(113);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(5),d=(n(35),n(81),n(12),{props:["movie-id"],data:function(){return{imgURL:"https://image.tmdb.org/t/p/w200",baseURL:"https://api.themoviedb.org/3/movie",apiKey:"2f606ab1225d921304a26a2c089d5062",cast:"",crew:""}},methods:{fetchCredits:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(t.baseURL,"/").concat(t.movieId,"/credits?api_key=").concat(t.apiKey,"&language=en-US"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:data=e.sent,t.cast=o(data.cast),t.crew=o(data.crew),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error while fetching credits ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},scrollRight:function(){var t=this.$refs["cast-collection"],e=this.$refs["crew-collection"];t.scrollLeft+=1e3,e.scrollLeft+=1e3},scrollLeft:function(){var t=this.$refs["cast-collection"],e=this.$refs["crew-collection"];t.scrollLeft-=1e3,e.scrollLeft-=1e3}},mounted:function(){this.fetchCredits()}}),v=n(23),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Credits")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-cast",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[r("div",{staticClass:"pic-main-container h-300"},[r("div",{staticClass:"pic-collection-wrapper"},[r("div",{ref:"cast-collection",staticClass:"pic-collection container-md"},[r("button",{staticClass:"scroll-np top-0 start-0",on:{click:t.scrollLeft}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_back_ios\n              ")])]),t._v(" "),t._l(t.cast,(function(e){return r("div",{key:e.id,staticClass:"card card-width g-center me-3"},[e.profile_path?r("img",{staticClass:"card-img-top w-100",attrs:{src:t.imgURL+e.profile_path,alt:e.name+"-thumbnail"}}):r("img",{staticClass:"img-fluid poster-img",attrs:{src:n(211),alt:e.name+"-thumbnail"}}),t._v(" "),r("div",{staticClass:"card-body p-0 text-center"},[r("h6",{staticClass:"card-text mt-2 pt-1 mx-0 mb-0 fw-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v("\n                  "+t._s(e.character)+"\n                ")])])])})),t._v(" "),t.cast.length?t._e():r("h2",{staticClass:"mx-auto text-secondary"},[t._v("\n              No Cast found.\n            ")]),t._v(" "),r("button",{staticClass:"scroll-np top-0 end-0",on:{click:t.scrollRight}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_forward_ios\n              ")])])],2)])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"nav-crew",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[r("div",{staticClass:"pic-main-container h-300"},[r("div",{staticClass:"pic-collection-wrapper"},[r("div",{ref:"crew-collection",staticClass:"pic-collection container-md"},[r("button",{staticClass:"scroll-np top-0 start-0",on:{click:t.scrollLeft}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_back_ios\n              ")])]),t._v(" "),t._l(t.crew,(function(e){return r("div",{key:e.id+"-"+e.job,staticClass:"card card-width g-center me-3"},[e.profile_path?r("img",{staticClass:"card-img-top w-100",attrs:{src:t.imgURL+e.profile_path,alt:e.name+"-thumbnail"}}):r("img",{staticClass:"img-fluid poster-img",attrs:{src:n(211),alt:e.name+"-thumbnail"}}),t._v(" "),r("div",{staticClass:"card-body p-0 text-center"},[r("h6",{staticClass:"card-text mt-2 pt-1 mx-0 mb-0 fw-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v("\n                  "+t._s(e.job)+"\n                ")])])])})),t._v(" "),t.crew.length?t._e():r("h2",{staticClass:"mx-auto text-secondary"},[t._v("\n              No Crew found.\n            ")]),t._v(" "),r("button",{staticClass:"scroll-np top-0 end-0",on:{click:t.scrollRight}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_forward_ios\n              ")])])],2)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav nav-tabs text-dark",attrs:{id:"nav-tab",role:"tablist"}},[n("button",{staticClass:"nav-link active tab-bg me-1",attrs:{id:"cast-tab","data-bs-toggle":"tab","data-bs-target":"#nav-cast",type:"button",role:"tab","aria-controls":"nav-cast","aria-selected":"true"}},[t._v("\n        Cast\n      ")]),t._v(" "),n("button",{staticClass:"nav-link tab-bg",attrs:{id:"crew-tab","data-bs-toggle":"tab","data-bs-target":"#nav-crew",type:"button",role:"tab","aria-controls":"nav-crew","aria-selected":"false"}},[t._v("\n        Crew\n      ")])])])}],!1,null,"3bd84eae",null);e.default=component.exports;installComponents(component,{Nav:n(112).default})}}]);