(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,7],{208:function(e,t,n){"use strict";n.r(t);n(81);var r={props:["rating","movieId"],beforeUpdate:function(){var e=document.querySelector("span.stars"),t="".concat(this.rating/10*100,"%");e.style.background="linear-gradient(90deg,#fdb93c ".concat(t,",#fff ").concat(t,")")},mounted:function(){if(this.movieId){var e=document.getElementById(this.movieId+"-rating"),t="".concat(this.rating/10*100,"%");e.style.background="linear-gradient(90deg,#fdb93c ".concat(t,",#fff ").concat(t,")")}}},o=n(23),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"stars-wrapper"},[n("span",{staticClass:"visually-hidden"},[e._v(e._s(e.rating))]),e._v(" "),n("span",{staticClass:"stars",attrs:{id:e.movieId+"-rating"}},[e._v("★★★★★")])])])}),[],!1,null,null,null);t.default=component.exports},209:function(e,t,n){"use strict";n.r(t);var r={props:["current-page","total-pages"],data:function(){return{pageNum:1,numList:[]}},methods:{nextPage:function(){this.pageNum=this.currentPage+1,this.$emit("next-page",this.pageNum)},previousPage:function(){this.pageNum=this.currentPage-1,this.$emit("previous-page",this.pageNum)},jumpToPage:function(){(this.pageNum<1||this.pageNum>this.totalPages)&&(new bootstrap.Modal(document.getElementById("pageNumErrorModal"),{keyboard:!1}).toggle(),this.pageNum=this.numList[0]);this.$emit("jump-to-page",this.pageNum),this.numList=[]}},watch:{pageNum:function(e,t){this.numList.push(t)}}},o=n(23),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row d-flex align-items-center text-center"},[n("div",{staticClass:"col-2"},[n("button",{staticClass:"\n          btn btn-dark\n          d-flex\n          justify-content-center\n          w-100\n          px-3\n          rounded-circle\n        ",class:{disabled:1===e.currentPage},on:{click:e.previousPage}},[n("span",{staticClass:"material-icons text-warning"},[e._v(" navigate_before ")])])]),e._v(" "),n("div",{staticClass:"col-8"},[n("h6",{staticClass:"m-0"},[e._v("\n        Page\n        "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.pageNum,expression:"pageNum",modifiers:{number:!0}}],ref:"pageNum",attrs:{type:"number",id:"page-num"},domProps:{value:e.pageNum},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.jumpToPage.apply(null,arguments)},input:function(t){t.target.composing||(e.pageNum=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(e._s(" of "+e.totalPages)+"\n      ")])]),e._v(" "),n("div",{staticClass:"col-2"},[n("button",{staticClass:"\n          btn btn-dark\n          d-flex\n          justify-content-center\n          w-100\n          px-3\n          rounded-circle\n        ",class:{disabled:e.currentPage===e.totalPages},on:{click:e.nextPage}},[n("span",{staticClass:"material-icons text-warning"},[e._v(" navigate_next ")])])])]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"modal fade",attrs:{id:"pageNumErrorModal",tabindex:"-1","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),n("div",{staticClass:"modal-body"},[e._v("\n            Page number should only be from 1 to\n            "+e._s(e.totalPages)+"\n          ")])])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-header"},[n("h5",{staticClass:"modal-title text-dark",attrs:{id:"error-header"}},[e._v("\n              Requested page doesn't exist!\n            ")]),e._v(" "),n("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],!1,null,null,null);t.default=component.exports},210:function(e,t,n){e.exports=n.p+"img/no poster.0419112.png"},212:function(e,t,n){var content=n(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(46).default)("46bcd577",content,!0,{sourceMap:!1})},218:function(e,t,n){"use strict";n(212)},219:function(e,t,n){var r=n(45)(!1);r.push([e.i,".badge[data-v-06cd23f2]{font-size:1rem!important}.badge[data-v-06cd23f2]:hover{color:#393e46!important}.badge-cont[data-v-06cd23f2]{position:relative}.checkbox[data-v-06cd23f2]{width:100%;height:100%;opacity:0;position:absolute;cursor:pointer}.checkbox:hover~.badge[data-v-06cd23f2]{background-color:rgba(57,62,70,.8549)}.checkbox:checked~.badge[data-v-06cd23f2]{background-color:#42b16c}.h-100[data-v-06cd23f2]{min-height:400px}.select-underline[data-v-06cd23f2]{border:none;padding:10px;background:none;outline:none}.select-wrapper[data-v-06cd23f2]{border-bottom:3px solid #f79d39;padding:0;display:flex;align-items:center}",""]),e.exports=r},225:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(35),n(81),n(12),n(32),n(82),n(47),n(49),n(24),n(159),{watchQuery:!0,data:function(){return{apiKey:"2f606ab1225d921304a26a2c089d5062",genres:[],baseURL:"https://api.themoviedb.org/3",genreSelected:[],disable:!0,movieList:[],totalPages:null,currentPage:1,hide:!0,sortValues:["popularity.desc","release_date.desc","vote_average.desc"],sortValueCopy:"popularity.desc",nameList:[]}},methods:{fetchGenreList:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(e.baseURL,"/genre/movie/list?api_key=").concat(e.apiKey,"&language=en-US"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:data=t.sent,e.genres=data.genres,e.genres.forEach((function(e){e.isChecked=!1}));case 9:case"end":return t.stop()}}),t)})))()},fetchMovieByGenres:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.hide=!1,t.movieList=[],n.prev=2,n.next=5,fetch(e);case 5:return r=n.sent,n.next=8,r.json();case 8:(data=n.sent).results.forEach((function(e){t.movieList.push({title:e.title,overview:e.overview,poster:e.poster_path,rating:e.vote_average,id:e.id})})),t.totalPages=data.total_pages,n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log("an error occured while fetching results",n.t0);case 16:t.hide=!0;case 17:case"end":return n.stop()}}),n,null,[[2,13]])})))()},getMovieList:function(){var e="".concat(this.baseURL,"/discover/movie?api_key=").concat(this.apiKey,"&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=").concat(this.genreSelected.toString());this.fetchMovieByGenres(e)},getSelectedGenre:function(e){var t=this;this.genres.forEach((function(e){if(e.isChecked&&!t.genreSelected.includes(e.id))t.genreSelected.push(e.id),t.nameList.push(e.name.toLowerCase());else if(!e.isChecked&&t.genreSelected.includes(e.id)){var n=t.genreSelected.indexOf(e.id);t.genreSelected.splice(n,1),t.nameList.splice(n,1)}})),this.getMovieList()},getPage:function(e){this.currentPage=parseInt(e);var t="".concat(this.baseURL,"/discover/movie?api_key=").concat(this.apiKey,"&language=en-US&sort_by=popularity.desc&include_adult=false&page=").concat(e,"&with_genres=").concat(this.genreSelected.toString());this.fetchMovieByGenres(t),this.$el.scrollIntoView({behavior:"smooth"})},sortMovies:function(e){var t="".concat(this.baseURL,"/discover/movie?api_key=").concat(this.apiKey,"&language=en-US&sort_by=").concat(e.target.getAttribute("data-sort"),"&include_adult=false&page=1&with_genres=").concat(this.genreSelected.toString());this.fetchMovieByGenres(t),this.sortValueCopy=e.target.getAttribute("data-sort")}},mounted:function(){this.fetchGenreList(),this.fetchMovieByGenres("".concat(this.baseURL,"/discover/movie?api_key=").concat(this.apiKey,"&language=en-US&sort_by=popularity.desc&include_adult=false&page=1"))}}),c=(n(218),n(23)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"\n    container-lg\n    d-flex\n    justify-content-start\n    align-items-center\n    flex-column\n  "},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mt-5 px-3 pt-5 text-center"},e._l(e.genres,(function(t){return r("div",{key:t.id+"-"+t.name,staticClass:"badge-cont d-inline-block me-2 mb-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"genre.isChecked"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{value:t.name,checked:Array.isArray(t.isChecked)?e._i(t.isChecked,t.name)>-1:t.isChecked},on:{change:[function(n){var r=t.isChecked,o=n.target,c=!!o.checked;if(Array.isArray(r)){var l=t.name,d=e._i(r,l);o.checked?d<0&&e.$set(t,"isChecked",r.concat([l])):d>-1&&e.$set(t,"isChecked",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(t,"isChecked",c)},e.getSelectedGenre]}}),e._v(" "),r("span",{staticClass:"btn badge rounded-pill bg-pill text-light px-3 py-2"},[e._v(e._s(t.name))])])})),0)]),e._v(" "),r("div",{staticClass:"row mt-4 align-self-start"},[r("div",{staticClass:"dropdown ps-3"},[e._m(0),e._v(" "),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},[r("li",e._l(e.sortValues,(function(t,n){return r("a",{key:t,staticClass:"dropdown-item text-capitalize",attrs:{selected:0==n,"data-sort":t},on:{click:e.sortMovies}},[e._v(e._s(t.slice(0,-5).replace("_"," ")))])})),0)]),e._v(" "),r("span",{staticClass:"sort-text text-capitalize"},[e._v(e._s(e.sortValueCopy.slice(0,-5).replace("_"," ")))])])]),e._v(" "),r("div",{staticClass:"spinner-grow text-warning m-5",class:{"d-none":e.hide},attrs:{role:"status"}},[r("span",{staticClass:"visually-hidden"},[e._v("Loading...")])]),e._v(" "),e.movieList.length?r("div",{staticClass:"\n      row\n      d-flex\n      justify-content-md-start justify-content-center\n      align-items-stretch\n      w-100\n      text-center\n    ",class:{"d-none":!e.hide}},e._l(e.movieList,(function(t){return r("div",{key:t.id+"-"+t.title,staticClass:"col-10 col-md-3 col-sm-4 p-3",attrs:{id:"movieColumn"}},[r("div",{staticClass:"position-relative"},[r("nuxt-link",{attrs:{to:{name:"movie-id",params:{id:t.id}}}},[t.poster?r("img",{staticClass:"img-fluid rounded-3 poster-img",attrs:{src:"https://image.tmdb.org/t/p/w400"+t.poster,alt:t.title+" poster"}}):r("img",{staticClass:"img-fluid rounded-3 poster-img",attrs:{src:n(210),alt:t.title+" poster"}}),e._v(" "),r("div",{staticClass:"overview-container line-clamp"},[r("div",{staticClass:"overview-text"},[r("h5",{staticClass:"text-center"},[e._v("Overview")]),e._v(" "),r("hr",{staticClass:"text-warning"}),e._v("\n              "+e._s(t.overview)+"\n            ")])])])],1),e._v(" "),r("h5",{staticClass:"mt-2 fw-bold"},[e._v(e._s(t.title))]),e._v(" "),r("Rating",{attrs:{rating:t.rating,movieId:t.id}})],1)})),0):r("div",{staticClass:"row d-flex text-center align-items-center mt-2 w-100 h-100",class:{"d-none":!e.hide}},[r("h2",{staticClass:"text-secondary fw-bold fs-1"},[e._v("NO RESULTS FOUND")])]),e._v(" "),r("div",{staticClass:"row"},[r("nav",{staticClass:"d-flex justify-content-center align-items-center py-5"},[r("Pagination",{attrs:{"current-page":e.currentPage,"total-pages":e.totalPages},on:{"next-page":e.getPage,"previous-page":e.getPage,"jump-to-page":e.getPage}})],1)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"\n          btn btn-secondary\n          dropdown-toggle\n          rounded-circle\n          d-inline-flex\n          justify-content-center\n          align-items-center\n          filter-size\n          bg-warning\n          border-warning\n        ",attrs:{href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"}},[n("span",{staticClass:"material-icons text-dark"},[e._v(" sort ")])])}],!1,null,"06cd23f2",null);t.default=component.exports;installComponents(component,{Rating:n(208).default,Pagination:n(209).default,Nav:n(112).default})}}]);