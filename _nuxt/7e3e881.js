(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{231:function(e,t,n){"use strict";n.r(t);n(81);var o={props:["discover-prop","current-page"],data:function(){return{pageNum:null,baseApiUrl:"https://api.themoviedb.org/3/movie",apiKey:"2f606ab1225d921304a26a2c089d5062",apiUrl:""}},methods:{previousPage:function(){this.pageNum=this.currentPage-1,this.apiUrl="".concat(this.baseApiUrl,"/").concat(this.discoverProp,"?api_key=").concat(this.apiKey,"&page=").concat(this.pageNum),this.$emit("previous-page",this.apiUrl,this.pageNum),console.log("pageNum",this.pageNum),console.log("url",this.apiUrl)}}},r=n(23),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-warning d-flex justify-content-center",class:{disabled:1===e.currentPage},on:{click:e.previousPage}},[n("span",{staticClass:"material-icons"},[e._v(" navigate_before ")])])])}),[],!1,null,null,null);t.default=component.exports}}]);