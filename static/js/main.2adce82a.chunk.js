(this.webpackJsonpmoviescore=this.webpackJsonpmoviescore||[]).push([[0],{11:function(e,t,a){e.exports={cards:"Cards_cards__3-H1G"}},14:function(e,t,a){e.exports={header:"Header_header__JQyGM",nav:"Header_nav__3it6Z",searchform:"Header_searchform__3rm_g",auth:"Header_auth__3wUIy",logo:"Header_logo__13e7P",links:"Header_links__iAegM"}},16:function(e,t,a){},17:function(e,t,a){e.exports={searchForm:"Search_searchForm__IxWVu",searchBar:"Search_searchBar__ArGSw",searchBtn:"Search_searchBtn__3A-aU"}},25:function(e,t,a){e.exports={movie:"movie_movie__3MmE9"}},26:function(e,t,a){e.exports={home:"Home_home__3gs94"}},27:function(e,t,a){e.exports={loader:"Loading_loader__2oEN3",spin:"Loading_spin__ZLZxY"}},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(22),r=a.n(c),i=(a(32),a(16),a(14)),o=a.n(i),l=a(12),j=a(0),d=function(){return Object(j.jsx)("header",{className:o.a.header,children:Object(j.jsxs)("nav",{className:o.a.nav,children:[Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("img",{className:o.a.logo,src:"https://see.fontimg.com/api/renderfont4/WyonA/eyJyIjoiZnMiLCJoIjo3OCwidyI6MTI1MCwiZnMiOjYyLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/TW92aWVzQ29yZQ/momcake-bold.png",alt:""})}),Object(j.jsxs)("ul",{className:o.a.links,children:[Object(j.jsx)(l.b,{to:"/search",children:Object(j.jsx)("li",{children:"Search"})}),Object(j.jsx)(l.b,{to:"/movies",children:Object(j.jsx)("li",{children:"Movies"})}),Object(j.jsx)(l.b,{to:"/series",children:Object(j.jsx)("li",{children:"TV Shows"})})]}),Object(j.jsx)("button",{className:o.a.auth,children:"Login/Register"})]})})},u=a(3),h=a(2),p=a.n(h),b=a(7),m=a(4),O=a(25),v=a.n(O),x=function(e){var t=e.id,a=e.title,s=e.poster,n=e.rating,c="http://image.tmdb.org/t/p/w500/"+s;if("movie"===e.type)var r="/moviedetail/".concat(t);else r="/seriesdetail/".concat(t);return Object(j.jsxs)("div",{className:v.a.movie,children:[Object(j.jsxs)(l.b,{to:r,children:[Object(j.jsx)("img",{src:c,alt:"No image available"}),Object(j.jsx)("h4",{children:a})]}),Object(j.jsx)("p",{children:n})]})},f=a(11),_=a.n(f),g=function(e){var t=e.start,a=e.stop,n=Object(s.useState)([]),c=Object(m.a)(n,2),r=c[0],i=c[1];Object(s.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.results),console.log("popular"),console.log(a.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Popular Movies"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,a).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})]})},y=function(e){var t=e.start,a=e.stop,n=Object(s.useState)([]),c=Object(m.a)(n,2),r=c[0],i=c[1];Object(s.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.results),console.log("Top Rated"),console.log(a.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Top Rated Movies"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,a).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})]})},w=function(e){var t=e.start,a=e.stop,n=Object(s.useState)([]),c=Object(m.a)(n,2),r=c[0],i=c[1];Object(s.useEffect)((function(){o()}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=c468f1a4793dde84b380dc978e620225");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.results),console.log("trending"),console.log(a.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"sectiontitle",children:"Trending Series"}),Object(j.jsx)("div",{className:_.a.cards,children:r.slice(t,a).map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.name,poster:e.poster_path,rating:e.vote_average,type:"series"},t)}))})]})},N=a(26),k=a.n(N),S=function(e){return Object(j.jsxs)("div",{className:k.a.home,children:[Object(j.jsx)(g,{start:0,stop:10}),Object(j.jsx)(w,{start:0,stop:10}),Object(j.jsx)(y,{start:10,stop:20})]})},I=(a(27),function(){var e="https://api.themoviedb.org/3/discover/movie?api_key=".concat("c468f1a4793dde84b380dc978e620225","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"),t=Object(s.useState)([]),a=Object(m.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!1),i=Object(m.a)(r,2),o=(i[0],i[1]);Object(s.useEffect)((function(){l()}),[]);var l=function(){var t=Object(b.a)(p.a.mark((function t(){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,c(s.results),console.log("movies"),o(!0),console.log(s.results);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:_.a.cards,children:n.map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.title,poster:e.poster_path,rating:e.vote_average,type:"movie"},t)}))})}),D=function(){var e="https://api.themoviedb.org/3/discover/tv?api_key=".concat("c468f1a4793dde84b380dc978e620225","&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"),t=Object(s.useState)([]),a=Object(m.a)(t,2),n=a[0],c=a[1];Object(s.useEffect)((function(){r()}),[]);var r=function(){var t=Object(b.a)(p.a.mark((function t(){var a,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,c(s.results),console.log("Series"),console.log(s.results);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:_.a.cards,children:n.map((function(e,t){return Object(j.jsx)(x,{id:e.id,title:e.name,poster:e.poster_path,rating:e.vote_average,type:"series"},t)}))})},M=a(5),E=a.n(M),B=function(e){var t=e.match,a="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat("c468f1a4793dde84b380dc978e620225","&language=en-US"),n=Object(s.useState)({backdrop_path:{},genres:[],releasedate:""}),c=Object(m.a)(n,2),r=c[0],i=c[1],o=Object(s.useState)(!1),l=Object(m.a)(o,2),d=(l[0],l[1]);Object(s.useEffect)((function(){u(),console.log(t)}),[]);var u=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,i(s),d(!0),console.log(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h="http://image.tmdb.org/t/p/w500/"+r.poster_path;r.backdrop_path;return Object(j.jsx)("div",{className:E.a.container,children:Object(j.jsxs)("div",{className:E.a.detailscard,children:[Object(j.jsx)("div",{className:E.a.imgDiv,children:Object(j.jsx)("img",{src:h,alt:""})}),Object(j.jsxs)("div",{className:E.a.contentDiv,children:[Object(j.jsxs)("h1",{children:[r.title," ",Object(j.jsxs)("span",{className:E.a.releaseyear,children:["(",r.release_date,")"]})]}),Object(j.jsx)("div",{className:E.a.genres,children:r.genres.map((function(e){return Object(j.jsxs)("span",{className:E.a.genre,children:[e.name," "]},e.id)}))}),Object(j.jsx)("h3",{children:"Plot:"}),Object(j.jsx)("p",{children:r.overview}),Object(j.jsxs)("div",{className:E.a.otherdetails,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Rating"}),Object(j.jsxs)("p",{children:[r.vote_average,"/10"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Budget"}),Object(j.jsxs)("p",{children:["$",r.budget]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Revenue"}),Object(j.jsxs)("p",{children:["$",r.revenue]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Revenue"}),Object(j.jsxs)("p",{children:[r.runtime," mins"]})]})]})]})]})})},C=function(e){var t=e.match,a="https://api.themoviedb.org/3/tv/".concat(t.params.id,"?api_key=").concat("c468f1a4793dde84b380dc978e620225","&language=en-US"),n=Object(s.useState)({backdrop_path:{},genres:[],created_by:[],networks:[],seasons:[]}),c=Object(m.a)(n,2),r=c[0],i=c[1];Object(s.useEffect)((function(){o(),console.log(t)}),[]);var o=function(){var e=Object(b.a)(p.a.mark((function e(){var t,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,i(s),console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l="http://image.tmdb.org/t/p/w500/"+r.poster_path;return console.log("hello"),console.log(r.seasons.length),Object(j.jsx)("div",{className:E.a.container,children:Object(j.jsxs)("div",{className:E.a.detailscard,children:[Object(j.jsx)("div",{className:E.a.imgDiv,children:Object(j.jsx)("img",{src:l,alt:""})}),Object(j.jsxs)("div",{className:E.a.contentDiv,children:[Object(j.jsxs)("h1",{children:[r.name," ",Object(j.jsxs)("span",{className:E.a.releaseyear,children:["(",r.first_air_date,")"]})]}),Object(j.jsx)("div",{className:E.a.genres,children:Object(j.jsx)("p",{children:r.genres.map((function(e){return Object(j.jsxs)("span",{className:E.a.genre,children:[e.name," "]},e.id)}))})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Created by:"})," ",r.created_by.map((function(e){return e.name}))]}),Object(j.jsx)("h4",{children:"Plot:"}),Object(j.jsx)("p",{children:r.overview}),Object(j.jsxs)("div",{className:E.a.otherdetails,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Rating"}),Object(j.jsxs)("p",{children:[r.vote_average,"/10"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Last Aired:"}),Object(j.jsx)("p",{children:r.last_air_date})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Status"}),Object(j.jsx)("p",{children:r.status})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Seasons"}),Object(j.jsx)("p",{children:r.seasons.length})]})]}),Object(j.jsx)("h5",{children:"Available on:"}),Object(j.jsx)("div",{className:E.a.networks,children:Object(j.jsx)("p",{children:r.networks.map((function(e){return Object(j.jsxs)("span",{className:E.a.network,children:[e.name," "]})}))})})]})]})})},F=a(17),H=a.n(F),U=function(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(m.a)(c,2),i=r[0],o=r[1],l=Object(s.useState)("afagsgsgsg"),d=Object(m.a)(l,2),u=d[0],h=d[1],O="https://api.themoviedb.org/3/search/multi?api_key=c468f1a4793dde84b380dc978e620225&language=en-US&query=".concat(u,"&page=1&include_adult=false");Object(s.useEffect)((function(){v()}),[u]);var v=function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n(a.results),console.log(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(i)},className:H.a.searchForm,children:[Object(j.jsx)("input",{className:H.a.searchBar,type:"text",value:i,onChange:function(e){o(e.target.value),console.log(i)},placeholder:"Search for movies and tv shows"}),Object(j.jsx)("button",{className:H.a.searchBtn,type:"submit",children:"Search"})]}),Object(j.jsx)("div",{className:_.a.cards,children:a.map((function(e){return Object(j.jsx)(x,{id:e.id,title:e.title||e.name,poster:e.poster_path||e.profile_path,rating:e.vote_average,type:e.media_type},e.id)}))})]})};var A=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",exact:!0,component:S}),Object(j.jsx)(u.a,{path:"/search",component:U}),Object(j.jsx)(u.a,{path:"/movies",component:I}),Object(j.jsx)(u.a,{path:"/series",component:D}),Object(j.jsx)(u.a,{path:"/moviedetail/:id",component:B}),Object(j.jsx)(u.a,{path:"/seriesdetail/:id",component:C})]})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),L()},5:function(e,t,a){e.exports={container:"ItemDetail_container__AWHmj",imgDiv:"ItemDetail_imgDiv__xaJHo",contentDiv:"ItemDetail_contentDiv__2VUFz",detailscard:"ItemDetail_detailscard__3KOKJ",genres:"ItemDetail_genres__1XduK",genre:"ItemDetail_genre__KxWwV",backdrop:"ItemDetail_backdrop__1hnBT",releaseyear:"ItemDetail_releaseyear__gIV6f",otherdetails:"ItemDetail_otherdetails__1VIfh",network:"ItemDetail_network__3O9p4"}}},[[40,1,2]]]);
//# sourceMappingURL=main.2adce82a.chunk.js.map