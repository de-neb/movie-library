(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,5,7,8],{208:function(t,e,n){"use strict";n.r(e);n(81);var r={props:["rating","movieId"],beforeUpdate:function(){var t=document.querySelector("span.stars"),e="".concat(this.rating/10*100,"%");t.style.background="linear-gradient(90deg,#fdb93c ".concat(e,",#fff ").concat(e,")")},mounted:function(){if(this.movieId){var t=document.getElementById(this.movieId+"-rating"),e="".concat(this.rating/10*100,"%");t.style.background="linear-gradient(90deg,#fdb93c ".concat(e,",#fff ").concat(e,")")}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"stars-wrapper"},[n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.rating))]),t._v(" "),n("span",{staticClass:"stars",attrs:{id:t.movieId+"-rating"}},[t._v("★★★★★")])])])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,n){"use strict";n.r(e);var r={props:["current-page","total-pages"],data:function(){return{pageNum:1,numList:[]}},methods:{nextPage:function(){this.pageNum=this.currentPage+1,this.$emit("next-page",this.pageNum)},previousPage:function(){this.pageNum=this.currentPage-1,this.$emit("previous-page",this.pageNum)},jumpToPage:function(){(this.pageNum<1||this.pageNum>this.totalPages)&&(new bootstrap.Modal(document.getElementById("pageNumErrorModal"),{keyboard:!1}).toggle(),this.pageNum=this.numList[0]);this.$emit("jump-to-page",this.pageNum),this.numList=[]}},watch:{pageNum:function(t,e){this.numList.push(e)}}},o=n(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row d-flex align-items-center text-center"},[n("div",{staticClass:"col-2"},[n("button",{staticClass:"\n          btn btn-dark\n          d-flex\n          justify-content-center\n          w-100\n          px-3\n          rounded-circle\n        ",class:{disabled:1===t.currentPage},on:{click:t.previousPage}},[n("span",{staticClass:"material-icons text-warning"},[t._v(" navigate_before ")])])]),t._v(" "),n("div",{staticClass:"col-8"},[n("h6",{staticClass:"m-0"},[t._v("\n        Page\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.pageNum,expression:"pageNum",modifiers:{number:!0}}],ref:"pageNum",attrs:{type:"number",id:"page-num"},domProps:{value:t.pageNum},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.jumpToPage.apply(null,arguments)},input:function(e){e.target.composing||(t.pageNum=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(t._s(" of "+t.totalPages)+"\n      ")])]),t._v(" "),n("div",{staticClass:"col-2"},[n("button",{staticClass:"\n          btn btn-dark\n          d-flex\n          justify-content-center\n          w-100\n          px-3\n          rounded-circle\n        ",class:{disabled:t.currentPage===t.totalPages},on:{click:t.nextPage}},[n("span",{staticClass:"material-icons text-warning"},[t._v(" navigate_next ")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"modal fade",attrs:{id:"pageNumErrorModal",tabindex:"-1","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body"},[t._v("\n            Page number should only be from 1 to\n            "+t._s(t.totalPages)+"\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title text-dark",attrs:{id:"error-header"}},[t._v("\n              Requested page doesn't exist!\n            ")]),t._v(" "),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],!1,null,null,null);e.default=component.exports},210:function(t,e,n){t.exports=n.p+"img/no poster.0419112.png"},211:function(t,e,n){t.exports=n.p+"img/profile.4113f21.png"},213:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("26f06d39",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.r(e);var r=n(105);var o=n(113);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(5),d=(n(35),n(81),n(12),{props:["movie-id"],data:function(){return{imgURL:"https://image.tmdb.org/t/p/w200",baseURL:"https://api.themoviedb.org/3/movie",apiKey:"2f606ab1225d921304a26a2c089d5062",cast:"",crew:""}},methods:{fetchCredits:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(t.baseURL,"/").concat(t.movieId,"/credits?api_key=").concat(t.apiKey,"&language=en-US"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:data=e.sent,t.cast=c(data.cast),t.crew=c(data.crew),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error while fetching credits ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},scrollRight:function(){var t=this.$refs["cast-collection"],e=this.$refs["crew-collection"];t.scrollLeft+=1e3,e.scrollLeft+=1e3},scrollLeft:function(){var t=this.$refs["cast-collection"],e=this.$refs["crew-collection"];t.scrollLeft-=1e3,e.scrollLeft-=1e3}},mounted:function(){this.fetchCredits()}}),m=n(23),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Credits")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[r("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-cast",role:"tabpanel","aria-labelledby":"nav-home-tab"}},[r("div",{staticClass:"pic-main-container h-300"},[r("div",{staticClass:"pic-collection-wrapper"},[r("div",{ref:"cast-collection",staticClass:"pic-collection container-md"},[r("button",{staticClass:"scroll-np top-0 start-0",on:{click:t.scrollLeft}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_back_ios\n              ")])]),t._v(" "),t._l(t.cast,(function(e){return r("div",{key:e.id,staticClass:"card card-width g-center me-3"},[e.profile_path?r("img",{staticClass:"card-img-top w-100",attrs:{src:t.imgURL+e.profile_path,alt:e.name+"-thumbnail"}}):r("img",{staticClass:"img-fluid poster-img",attrs:{src:n(211),alt:e.name+"-thumbnail"}}),t._v(" "),r("div",{staticClass:"card-body p-0 text-center"},[r("h6",{staticClass:"card-text mt-2 pt-1 mx-0 mb-0 fw-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v("\n                  "+t._s(e.character)+"\n                ")])])])})),t._v(" "),t.cast.length?t._e():r("h2",{staticClass:"mx-auto text-secondary"},[t._v("\n              No Cast found.\n            ")]),t._v(" "),r("button",{staticClass:"scroll-np top-0 end-0",on:{click:t.scrollRight}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_forward_ios\n              ")])])],2)])])]),t._v(" "),r("div",{staticClass:"tab-pane fade",attrs:{id:"nav-crew",role:"tabpanel","aria-labelledby":"nav-profile-tab"}},[r("div",{staticClass:"pic-main-container h-300"},[r("div",{staticClass:"pic-collection-wrapper"},[r("div",{ref:"crew-collection",staticClass:"pic-collection container-md"},[r("button",{staticClass:"scroll-np top-0 start-0",on:{click:t.scrollLeft}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_back_ios\n              ")])]),t._v(" "),t._l(t.crew,(function(e){return r("div",{key:e.id+"-"+e.job,staticClass:"card card-width g-center me-3"},[e.profile_path?r("img",{staticClass:"card-img-top w-100",attrs:{src:t.imgURL+e.profile_path,alt:e.name+"-thumbnail"}}):r("img",{staticClass:"img-fluid poster-img",attrs:{src:n(211),alt:e.name+"-thumbnail"}}),t._v(" "),r("div",{staticClass:"card-body p-0 text-center"},[r("h6",{staticClass:"card-text mt-2 pt-1 mx-0 mb-0 fw-bold"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),r("span",{staticClass:"text-secondary"},[t._v("\n                  "+t._s(e.job)+"\n                ")])])])})),t._v(" "),t.crew.length?t._e():r("h2",{staticClass:"mx-auto text-secondary"},[t._v("\n              No Crew found.\n            ")]),t._v(" "),r("button",{staticClass:"scroll-np top-0 end-0",on:{click:t.scrollRight}},[r("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n                arrow_forward_ios\n              ")])])],2)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav nav-tabs text-dark",attrs:{id:"nav-tab",role:"tablist"}},[n("button",{staticClass:"nav-link active tab-bg me-1",attrs:{id:"cast-tab","data-bs-toggle":"tab","data-bs-target":"#nav-cast",type:"button",role:"tab","aria-controls":"nav-cast","aria-selected":"true"}},[t._v("\n        Cast\n      ")]),t._v(" "),n("button",{staticClass:"nav-link tab-bg",attrs:{id:"crew-tab","data-bs-toggle":"tab","data-bs-target":"#nav-crew",type:"button",role:"tab","aria-controls":"nav-crew","aria-selected":"false"}},[t._v("\n        Crew\n      ")])])])}],!1,null,"3bd84eae",null);e.default=component.exports;installComponents(component,{Nav:n(112).default})},216:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(35),n(81),n(12),n(32),{props:["movie-id"],data:function(){return{apiKey:"2f606ab1225d921304a26a2c089d5062",baseURL:"https://api.themoviedb.org/3/movie",imgThumbnail:"https://image.tmdb.org/t/p/w300",imgOriginal:"https://image.tmdb.org/t/p/w1280",backdropPaths:[]}},methods:{fetchMovieImages:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=" ".concat(t.baseURL,"/").concat(t.movieId,"/images?api_key=").concat(t.apiKey),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent.backdrops.forEach((function(e){t.backdropPaths.push(e.file_path)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error while fetching images",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},getSelectedPic:function(t){var e=this.$refs.modal,n=document.getElementById("slide-".concat(t)),r=document.getElementById("button-".concat(t)),o=document.querySelectorAll(".indicator"),c=document.querySelectorAll(".carousel-item");n.classList.add("active"),r.classList.add("active"),e.addEventListener("hide.bs.modal",(function(t){o.forEach((function(t){return t.classList.remove("active")})),c.forEach((function(t){return t.classList.remove("active")}))}))},scrollRight:function(){this.$refs["pic-collection"].scrollLeft+=1e3,console.log("scrolling!")},scrollLeft:function(){this.$refs["pic-collection"].scrollLeft-=1e3}},mounted:function(){this.fetchMovieImages()}}),c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"modal",staticClass:"modal fade",attrs:{id:"photosModal",tabindex:"-1","aria-labelledby":"photosModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered modal-xl"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-body bg-dark p-1"},[n("div",{ref:"carousel",staticClass:"carousel slide",attrs:{id:"carouselPhotos","data-bs-interval":"false"}},[n("div",{staticClass:"carousel-indicators"},t._l(t.backdropPaths,(function(path,t){return n("button",{key:t,staticClass:"indicator",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":t,"aria-current":0===t,"aria-label":"Slide2",id:"button-"+t}})})),0),t._v(" "),n("div",{staticClass:"carousel-inner"},t._l(t.backdropPaths,(function(path,e){return n("div",{key:path,staticClass:"carousel-item",attrs:{id:"slide-"+e}},[n("img",{staticClass:"d-block w-100",attrs:{src:t.imgOriginal+path,alt:"backdrop"}})])})),0),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])]),t._v(" "),n("h2",[t._v("Photos")]),t._v(" "),n("div",{staticClass:"pic-main-container"},[n("div",{staticClass:"pic-collection-wrapper"},[n("div",{ref:"pic-collection",staticClass:"pic-collection container-md"},[n("button",{staticClass:"scroll-np top-0 start-0",on:{click:t.scrollLeft}},[n("span",{staticClass:"material-icons fs-2 text-light"},[t._v(" arrow_back_ios ")])]),t._v(" "),t._l(t.backdropPaths,(function(path,e){return n("a",{key:path,attrs:{href:"#","data-bs-toggle":"modal","data-bs-target":"#photosModal"}},[n("img",{staticClass:"rounded-3 shadow pe-3",attrs:{src:t.imgThumbnail+path,alt:"backdrop"},on:{click:function(n){return t.getSelectedPic(e)}}})])})),t._v(" "),t.backdropPaths.length?t._e():n("h2",{staticClass:"mx-auto text-secondary"},[t._v("\n          No Photos found.\n        ")]),t._v(" "),n("button",{staticClass:"scroll-np top-0 end-0",on:{click:t.scrollRight}},[n("span",{staticClass:"material-icons fs-2 text-light"},[t._v("\n            arrow_forward_ios\n          ")])])],2)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselPhotos","data-bs-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselPhotos","data-bs-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),n("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(35),n(12),n(32),n(81),n(82),{scrollToTop:!0,props:["movie-id","title"],data:function(){return{apiKey:"2f606ab1225d921304a26a2c089d5062",baseURL:"https://api.themoviedb.org/3/movie",recoList:[],currentPage:1,totalPages:0}},methods:{getPage:function(t){this.currentPage=parseInt(t),this.recoList=[],this.fetchRecommendations(this.apiURL),this.$el.scrollIntoView({behavior:"smooth"})},fetchRecommendations:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:(data=n.sent).results.forEach((function(t){e.recoList.push({title:t.title,overview:t.overview,poster:t.poster_path,rating:t.vote_average,id:t.id})})),e.totalPages=data.total_pages,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("an error occured while fetching recommendations ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}},mounted:function(){this.fetchRecommendations(this.apiURL)},computed:{apiURL:function(){return"".concat(this.baseURL,"/").concat(this.movieId,"/similar?api_key=").concat(this.apiKey,"&language=en-US&page=").concat(this.currentPage.toString())}}}),c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{ref:"recommendations"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"row text-center"},t._l(t.recoList,(function(e){return r("div",{key:e.id,staticClass:"col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 p-3",attrs:{id:"movieColumn"}},[r("div",{staticClass:"position-relative"},[r("nuxt-link",{attrs:{to:{name:"movie-id",params:{id:e.id}}}},[e.poster?r("img",{staticClass:"img-fluid rounded-3 poster-img",attrs:{src:"https://image.tmdb.org/t/p/w400"+e.poster,alt:e.title+" poster"}}):r("img",{staticClass:"img-fluid rounded-3 poster-img",attrs:{src:n(210),alt:e.title+" poster"}}),t._v(" "),r("div",{staticClass:"overview-container line-clamp shadow-lg"},[r("div",{staticClass:"overview-text"},[r("h5",{staticClass:"text-center"},[t._v("Overview")]),t._v(" "),r("hr",{staticClass:"text-warning"}),t._v("\n              "+t._s(e.overview)+"\n            ")])])])],1),t._v(" "),r("h5",{staticClass:"mt-2 fw-bold"},[t._v(t._s(e.title))]),t._v(" "),r("Rating",{attrs:{rating:e.rating,movieId:e.id}})],1)})),0),t._v(" "),r("div",{staticClass:"row"},[r("nav",{staticClass:"d-flex justify-content-center align-items-center py-5"},[r("Pagination",{attrs:{"current-page":t.currentPage,"total-pages":t.totalPages},on:{"next-page":t.getPage,"previous-page":t.getPage,"jump-to-page":t.getPage}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Rating:n(208).default,Pagination:n(209).default,Nav:n(112).default})},220:function(t,e,n){t.exports=n.p+"img/no_poster_w200.e53533f.png"},221:function(t,e,n){"use strict";n(213)},222:function(t,e,n){var r=n(45)(!1);r.push([t.i,".video-size[data-v-992eb210]{width:800px}.circle-badge[data-v-992eb210]{height:55px;width:55px!important;border-radius:50px;display:inline-grid;align-items:center;justify-items:center;place-items:center;border:3px solid #fdb93c;box-shadow:0 0 0 4px #212529}",""]),t.exports=r},227:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(35),n(81),n(12),n(114),n(48),n(50),n(158),{data:function(){return{baseURL:"https://api.themoviedb.org/3/movie",apiKey:"2f606ab1225d921304a26a2c089d5062",youtubeKey:"",movieDetails:{},movieId:this.$route.params.id}},methods:{fetchTrailer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(t.baseURL,"/").concat(t.movieId,"/videos?api_key=").concat(t.apiKey,"&language=en-US"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:data=e.sent,t.youtubeKey=data.results[0].key,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("an error occured while fetching trailer ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},fetchmovieDetails:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(t.baseURL,"/").concat(t.movieId,"?api_key=").concat(t.apiKey,"&language=en-US"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:data=e.sent,t.movieDetails={backdrop:data.backdrop_path,poster:data.poster_path,genres:data.genres,voteAvg:data.vote_average,voteCount:data.vote_count,id:data.id,runtime:data.runtime,imdb:data.imdb_id,title:data.title,overview:data.overview,website:data.homepage,releaseDate:new Date(data.release_date).toDateString().split(" ").slice(1).join(" ")},e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("an error occured while fetching movie details ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.fetchTrailer(),this.fetchmovieDetails()},computed:{styleBG:function(){if(this.movieDetails.backdrop)return{"background-image":"linear-gradient(0deg, rgba(253,185,60,1) 14%, rgba(0,0,0,1) 100%),url("+"https://image.tmdb.org/t/p/original".concat(this.movieDetails.backdrop)+")"}}}}),c=(n(221),n(23)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid px-0"},[r("div",{staticClass:"modal fade",attrs:{id:"trailerModal",tabindex:"-1","aria-labelledby":"trailerModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-body bg-dark p-2"},[r("div",{staticClass:"ratio ratio-16x9"},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.youtubeKey,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])])]),t._v(" "),r("div",{staticClass:"\n      d-flex\n      align-items-start\n      justify-content-center\n      mt-sm-5 mt-2\n      position-relative\n      parallax\n      py-5\n      mx-0\n    ",style:t.styleBG},[r("div",{staticClass:"\n        container-md\n        position-relative\n        d-flex\n        justify-content-center\n        align-items-md-end\n        box-margin\n        flex-md-row flex-column\n        align-items-sm-center\n        pt-md-3 pt-1\n      "},[r("div",{staticClass:"poster-container d-flex justify-content-center"},[t.movieDetails.poster?r("img",{staticClass:"rounded-3 shadow-lg",attrs:{src:"https://image.tmdb.org/t/p/w200"+t.movieDetails.poster,alt:t.movieDetails.title+"-poster"}}):r("img",{staticClass:"rounded-3 shadow-lg",attrs:{src:n(220),alt:t.movieDetails.title+"-poster"}})]),t._v(" "),r("div",{staticClass:"container d-inline mb-5 ms-2"},[r("h1",{staticClass:"text-light fw-bolder fs-1"},[t._v("\n          "+t._s(t.movieDetails.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"row d-flex justify-content-md-start justify-content-center"},[r("div",{staticClass:"col-10 order-1"},[r("span",{staticClass:"text-center text-light"},[t._v(t._s(t.movieDetails.runtime)+" min | "+t._s(t.movieDetails.releaseDate)+"\n            ")]),t._v(" "),r("div",{staticClass:"genre mt-1"},t._l(t.movieDetails.genres,(function(e){return r("span",{key:e.id,staticClass:"\n                  text-center\n                  badge\n                  rounded-1\n                  btn btn-outline-warning\n                  me-2\n                "},[t._v("\n                "+t._s(e.name)+"\n              ")])})),0)]),t._v(" "),r("div",{staticClass:"col-12 order-2 my-1"},[r("Rating",{attrs:{rating:t.movieDetails.voteAvg}})],1)]),t._v(" "),r("div",{staticClass:"d-grid gap-2 d-md-block mb-md-4 col-6 mx-md-0 mx-auto"},[t._m(0),t._v(" "),r("a",{staticClass:"btn btn-outline-light g-center rounded-pill btn-sm",attrs:{href:t.movieDetails.website,target:"_blank"}},[r("span",{staticClass:"material-icons"},[t._v(" open_in_new ")]),t._v(" Website")])])])])]),t._v(" "),r("div",{staticClass:"container-md"},[r("div",{staticClass:"row"},[r("h2",[t._v("Overview")]),t._v(" "),r("p",[t._v("\n        "+t._s(t.movieDetails.overview)+"\n      ")])]),t._v(" "),r("div",{staticClass:"row my-3"},[r("hr"),t._v(" "),r("Carousel",{attrs:{"movie-id":t.movieId}})],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row my-3"},[r("Credits",{attrs:{"movie-id":t.movieId}})],1),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row mt-3 mb-5"},[r("Recommendations",{attrs:{"movie-id":t.movieId,title:"Recommendations"}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn btn-outline-light g-center rounded-pill btn-sm d-block",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#trailerModal"}},[n("span",{staticClass:"material-icons"},[t._v(" play_arrow ")]),t._v("Trailer\n          ")])}],!1,null,"992eb210",null);e.default=component.exports;installComponents(component,{Rating:n(208).default,Carousel:n(216).default,Credits:n(215).default,Recommendations:n(217).default})}}]);