(this.webpackJsonpmoviescore=this.webpackJsonpmoviescore||[]).push([[0],{11:function(e,t,s){e.exports={cards:"Cards_cards__3-H1G"}},14:function(e,t,s){e.exports={searchForm:"Search_searchForm__IxWVu",searchBar:"Search_searchBar__ArGSw",searchBtn:"Search_searchBtn__3A-aU",resultsHeader:"Search_resultsHeader__2U-1t"}},15:function(e,t,s){e.exports={header:"Header_header__JQyGM",nav:"Header_nav__3it6Z",searchform:"Header_searchform__3rm_g",auth:"Header_auth__3wUIy",logo:"Header_logo__13e7P",links:"Header_links__iAegM"}},17:function(e,t,s){},25:function(e,t,s){e.exports={movie:"movie_movie__3MmE9"}},26:function(e,t,s){e.exports={home:"Home_home__3gs94"}},27:function(e,t,s){e.exports={loader:"Loading_loader__2oEN3",spin:"Loading_spin__ZLZxY"}},32:function(e,t,s){},4:function(e,t,s){e.exports={container:"ItemDetail_container__AWHmj",imgDiv:"ItemDetail_imgDiv__xaJHo",contentDiv:"ItemDetail_contentDiv__2VUFz",detailscard:"ItemDetail_detailscard__3KOKJ",genres:"ItemDetail_genres__1XduK",genre:"ItemDetail_genre__KxWwV",backdrop:"ItemDetail_backdrop__1hnBT",releaseyear:"ItemDetail_releaseyear__gIV6f",otherdetails:"ItemDetail_otherdetails__1VIfh",network:"ItemDetail_network__3O9p4"}},40:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(22),r=s.n(n),i=(s(32),s(17),s(15)),o=s.n(i),l=s(12),j=s(0),d=function(){return Object(j.jsx)("header",{className:o.a.header,children:Object(j.jsxs)("nav",{className:o.a.nav,children:[Object(j.jsx)(l.b,{to:"/MoviesCore",children:Object(j.jsx)("img",{className:o.a.logo,src:"https://see.fontimg.com/api/renderfont4/WyonA/eyJyIjoiZnMiLCJoIjo3OCwidyI6MTI1MCwiZnMiOjYyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/TW92aWVzQ29yZQ/momcake-bold.png",alt:""})}),Object(j.jsxs)("ul",{className:o.a.links,children:[Object(j.jsx)(l.b,{to:"/MoviesCore/search",children:Object(j.jsx)("li",{children:"Search"})}),Object(j.jsx)(l.b,{to:"/MoviesCore/movies",children:Object(j.jsx)("li",{children:"Movies"})}),Object(j.jsx)(l.b,{to:"/MoviesCore/series",children:Object(j.jsx)("li",{children:"TV Shows"})})]}),Object(j.jsx)("button",{className:o.a.auth,children:"Login/Register"})]})})},u=s(3),h=s(2),p=s.n(h),b=s(7),v=s(5),m=s(25),O=s.n(m),x=function(e){var t=e.id,s=e.title,a=e.poster,c=e.rating,n="http://image.tmdb.org/t/p/w500/"+a;if("movie"===e.type)var r="/MoviesCore/moviedetail/".concat(t);else r="/MoviesCore/seriesdetail/".concat(t);return Object(j.jsxs)("div",{className:O.a.movie,children:[Object(j.jsxs)(l.b,{to:r,children:[Object(j.jsx)("img",{src:n,alt:"No image available"}),Object(j.jsx)("h4",{children:s})]}),Object(j.jsx)("p",{children:c})]})},f=s(11),_=s.n(f),g=function(e){var t=e.start,s=e.stop,c=Object(a.useState)([]),n=Object(v.a)(c,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,i(s.results),console.log("popular"),console.log(s.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Popular Movies"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,s).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})]})},y=function(e){var t=e.start,s=e.stop,c=Object(a.useState)([]),n=Object(v.a)(c,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,i(s.results),console.log("Top Rated"),console.log(s.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Top Rated Movies"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,s).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})]})},N=function(e){var t=e.start,s=e.stop,c=Object(a.useState)([]),n=Object(v.a)(c,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=c468f1a4793dde84b380dc978e620225");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,i(s.results),console.log("trending"),console.log(s.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Trending Series"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,s).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.name,poster:e.poster_path,rating:e.vote_average,type:"series"},t)}))})]})},w=s(26),k=s.n(w),S=function(e){return Object(j.jsxs)("div",{className:k.a.home,children:[Object(j.jsx)(g,{start:0,stop:10}),Object(j.jsx)(N,{start:0,stop:10}),Object(j.jsx)(y,{start:10,stop:20})]})},I=(s(27),function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=".concat("c468f1a4793dde84b380dc978e620225","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),t=Object(a.useState)([]),s=Object(v.a)(t,2),c=s[0],n=s[1],r=Object(a.useState)(!1),i=Object(v.a)(r,2),o=(i[0],i[1]);Object(a.useEffect)((function(){l()}),[]);var l=function(){var t=Object(b.a)(p.a.mark((function t(){var s,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return s=t.sent,t.next=5,s.json();case 5:a=t.sent,n(a.results),console.log("movies"),o(!0),console.log(a.results);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:_.a.cards,children:c.map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})}),M=function(){var e="https://api.themoviedb.org/3/discover/tv?api_key=".concat("c468f1a4793dde84b380dc978e620225","&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"),t=Object(a.useState)([]),s=Object(v.a)(t,2),c=s[0],n=s[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var t=Object(b.a)(p.a.mark((function t(){var s,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return s=t.sent,t.next=5,s.json();case 5:a=t.sent,n(a.results),console.log("Series"),console.log(a.results);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:_.a.cards,children:c.map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.name,poster:e.poster_path,rating:e.vote_average,type:"series"},t)}))})},C=s(4),D=s.n(C),H=function(e){var t=e.match,s="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat("c468f1a4793dde84b380dc978e620225","&language=en-US"),c=Object(a.useState)({backdrop_path:{},genres:[],releasedate:""}),n=Object(v.a)(c,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o(),console.log(t)}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l="http://image.tmdb.org/t/p/w500/"+r.poster_path;r.backdrop_path;return Object(j.jsx)("div",{className:D.a.container,children:Object(j.jsxs)("div",{className:D.a.detailscard,children:[Object(j.jsx)("div",{className:D.a.imgDiv,children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsxs)("div",{className:D.a.contentDiv,children:[Object(j.jsxs)("h1",{children:[r.title," ",Object(j.jsxs)("span",{className:D.a.releaseyear,children:["(",r.release_date,")"]})]}),Object(j.jsx)("div",{className:D.a.genres,children:r.genres.map((function(e){return Object(j.jsxs)("span",{className:D.a.genre,children:[e.name," "]},e.id)}))}),Object(j.jsx)("h3",{children:"Plot:"}),Object(j.jsx)("p",{children:r.overview}),Object(j.jsxs)("div",{className:D.a.otherdetails,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Rating"}),Object(j.jsxs)("p",{children:[r.vote_average,"/10"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Budget"}),Object(j.jsxs)("p",{children:["$",r.budget]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Revenue"}),Object(j.jsxs)("p",{children:["$",r.revenue]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Runtime"}),Object(j.jsxs)("p",{children:[r.runtime," mins"]})]})]})]})]})})},B=function(e){var t=e.match,s="https://api.themoviedb.org/3/tv/".concat(t.params.id,"?api_key=").concat("c468f1a4793dde84b380dc978e620225","&language=en-US"),c=Object(a.useState)({backdrop_path:{},genres:[],created_by:[],networks:[],seasons:[]}),n=Object(v.a)(c,2),r=n[0],i=n[1];Object(a.useEffect)((function(){o(),console.log(t)}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l="http://image.tmdb.org/t/p/w500/"+r.poster_path;return console.log("hello"),console.log(r.seasons.length),Object(j.jsx)("div",{className:D.a.container,children:Object(j.jsxs)("div",{className:D.a.detailscard,children:[Object(j.jsx)("div",{className:D.a.imgDiv,children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsxs)("div",{className:D.a.contentDiv,children:[Object(j.jsxs)("h1",{children:[r.name," ",Object(j.jsxs)("span",{className:D.a.releaseyear,children:["(",r.first_air_date,")"]})]}),Object(j.jsx)("div",{className:D.a.genres,children:Object(j.jsx)("p",{children:r.genres.map((function(e){return Object(j.jsxs)("span",{className:D.a.genre,children:[e.name," "]},e.id)}))})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created by:"})," ",r.created_by.map((function(e){return e.name}))]}),Object(j.jsx)("h4",{children:"Plot:"}),Object(j.jsx)("p",{children:r.overview}),Object(j.jsxs)("div",{className:D.a.otherdetails,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Rating"}),Object(j.jsxs)("p",{children:[r.vote_average,"/10"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Last Aired:"}),Object(j.jsx)("p",{children:r.last_air_date})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Status"}),Object(j.jsx)("p",{children:r.status})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Seasons"}),Object(j.jsx)("p",{children:r.seasons.length})]})]}),Object(j.jsx)("h5",{children:"Available on:"}),Object(j.jsx)("div",{className:D.a.networks,children:Object(j.jsx)("p",{children:r.networks.map((function(e){return Object(j.jsxs)("span",{className:D.a.network,children:[e.name," "]})}))})})]})]})})},E=s(14),R=s.n(E),U=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(v.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(""),d=Object(v.a)(l,2),u=d[0],h=d[1],m="https://api.themoviedb.org/3/search/multi?api_key=".concat("c468f1a4793dde84b380dc978e620225","&language=en-US&query=").concat(u,"&page=1&include_adult=false");Object(a.useEffect)((function(){O()}),[u]);var O=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,c(s.results),console.log(s.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(i)},className:R.a.searchForm,children:[Object(j.jsx)("input",{className:R.a.searchBar,type:"text",value:i,onChange:function(e){o(e.target.value),console.log(i)},placeholder:"Search for movies and tv shows"}),i?Object(j.jsx)("button",{className:R.a.searchBtn,type:"submit",children:"Search"}):Object(j.jsx)("button",{className:R.a.searchBtn,type:"submit",disabled:!0,children:"Search"})]}),u?Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{className:R.a.resultsHeader,children:["Results for ",u]}),Object(j.jsx)("div",{className:_.a.cards,children:s?s.map((function(e){return Object(j.jsx)(x,{id:e.id,title:e.title||e.name,poster:e.poster_path||e.profile_path,rating:e.vote_average,type:e.media_type},e.id)})):Object(j.jsx)("p",{children:"No Results to show"})})]}):Object(j.jsx)("p",{className:R.a.resultsHeader,children:"No results to show"})]})};var F=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",exact:!0,component:S}),Object(j.jsx)(u.a,{path:"/MoviesCore",exact:!0,component:S}),Object(j.jsx)(u.a,{path:"/MoviesCore/search",component:U}),Object(j.jsx)(u.a,{path:"/MoviesCore/movies",component:I}),Object(j.jsx)(u.a,{path:"/MoviesCore/series",component:M}),Object(j.jsx)(u.a,{path:"/MoviesCore/moviedetail/:id",component:H}),Object(j.jsx)(u.a,{path:"/MoviesCore/seriesdetail/:id",component:B})]})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),A()}},[[40,1,2]]]);
//# sourceMappingURL=main.2a32244c.chunk.js.map