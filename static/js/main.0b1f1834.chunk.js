(this["webpackJsonpebay-search"]=this["webpackJsonpebay-search"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=(n(20),n(21),n(5)),s=n.n(o),u=n(9),l=n(3),d="https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=".concat("MinaIsaa-myappfor-SBX-61a0826f6-6676bcab","&RESPONSE-DATA-FORMAT=JSON");var A={searchByKeywords:function(e){return fetch("https://fast-bastion-23256.herokuapp.com/"+function(e){var t=function(){var e=0;return function(){return Math.floor(e++/2)}}(),n=e.keywords,a=e.maxPrice,r=e.minPrice,i=e.pageNumber,c=null!==r?"&itemFilter(".concat(t(),").name=MinPrice&itemFilter(").concat(t(),").value=").concat(r):"",o=null!==a?"&itemFilter(".concat(t(),").name=MaxPrice&itemFilter(").concat(t(),").value=").concat(a):"",s=n.trim().split(/\s+/).join("%20"),u="&keywords=".concat(s),l="&paginationInput.pageNumber=".concat(i,"&paginationInput.entriesPerPage=").concat(30);return"".concat(d).concat(u).concat(c).concat(o).concat(l)}(e)).then((function(e){return e.json()}))}},m={results:void 0,list:[],searchStatus:"idle",nextPageStatus:"idle",error:void 0},b=Object(l.b)("data/searchProducts",function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState,r=a().settings,i=r.minPrice,c=r.maxPrice,o=r.keywords,e.next=4,A.searchByKeywords({keywords:o,minPrice:i,maxPrice:c,pageNumber:1});case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(l.b)("data/loadMoreData",function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,r,i,c,o,u,l,d,m,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,i=r(),c=i.settings,o=c.minPrice,u=c.maxPrice,l=c.keywords,d=Number(null===(a=i.data.results)||void 0===a?void 0:a.findItemsByKeywordsResponse[0].paginationOutput[0].pageNumber[0]),m=d?d+1:1,e.next=7,A.searchByKeywords({keywords:l,minPrice:o,maxPrice:u,pageNumber:m});case 7:return b=e.sent,e.abrupt("return",b);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(l.c)(m,(function(e){e.addCase(b.pending,(function(e){e.searchStatus="loading",e.error=void 0})).addCase(b.fulfilled,(function(e,t){var n,a;e.searchStatus="succeeded",e.results=t.payload;var r=(null===(n=e.results)||void 0===n||null===(a=n.findItemsByKeywordsResponse[0].searchResult)||void 0===a?void 0:a[0].item)||[];e.list=r,0===r.length&&(e.error="No items matching your search")})).addCase(b.rejected,(function(e,t){e.searchStatus="failed",e.error=t.error})).addCase(v.pending,(function(e){e.nextPageStatus="loading"})).addCase(v.fulfilled,(function(e,t){var n,a;e.nextPageStatus="succeeded",e.list=e.list.concat((null===(n=t.payload)||void 0===n||null===(a=n.findItemsByKeywordsResponse[0].searchResult)||void 0===a?void 0:a[0].item)||[]),e.results=t.payload})).addCase(v.rejected,(function(e,t){e.nextPageStatus="failed",e.error=t.error}))})),p=function(e){return e.data.results},f=function(e){return e.data.list},g=function(e){return e.data.searchStatus},w=function(e){var t;return null===(t=e.data.results)||void 0===t?void 0:t.findItemsByKeywordsResponse[0].paginationOutput},j=function(e){return e.data.error},y=h,x=n(4),O=function(){return Object(x.b)()},N=x.c,P=(n(29),n(1)),B=function(){return Object(P.jsx)("div",{id:"spinner"})},K=(n(31),function(e){var t=e.message;return Object(P.jsx)("div",{id:"error",children:Object(P.jsx)("p",{children:t})})}),S=r.a.memo(K),C=(n(32),Object(l.d)({name:"settings",initialState:{minPrice:null,maxPrice:null,keywords:""},reducers:{setMinPrice:function(e,t){e.minPrice=t.payload},setMaxPrice:function(e,t){e.maxPrice=t.payload},setKeywords:function(e,t){e.keywords=t.payload}}})),k=C.actions,E=k.setMinPrice,R=k.setMaxPrice,I=k.setKeywords,J=function(e){return e.settings.minPrice},D=function(e){return e.settings.maxPrice},U=function(e){return e.settings.keywords},M=C.reducer;function Q(){var e="loading"===N(g),t=N(J),n=N(D),a=N(U),r=O(),i=function(){var e;return(null===(e=a.match(/(\w+)/g))||void 0===e?void 0:e.length)>0&&r(b())};return Object(P.jsxs)("div",{className:"search-bar",children:[Object(P.jsx)("input",{type:"text",className:"search-input",placeholder:"Search...",disabled:e,onChange:function(e){r(I(e.target.value))},onKeyDown:function(e){return"Enter"===e.key&&i()},value:a}),Object(P.jsx)("button",{className:"search-button",onClick:i,children:Object(P.jsx)("img",{src:"data:image/png;base64,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",alt:"search",className:"search-icon"})}),Object(P.jsxs)("div",{className:"price-selector-container",children:[Object(P.jsx)("input",{type:"number",className:"price-selector",disabled:e,onChange:function(e){return r(E(+e.target.value))},value:null!==t&&void 0!==t?t:"",placeholder:"Min",min:0}),Object(P.jsx)("input",{type:"number",className:"price-selector",disabled:e,onChange:function(e){return r(R(+e.target.value))},value:null!==n&&void 0!==n?n:"",placeholder:"Max",min:0})]})]})}var W=r.a.memo(Q),F=n(15),H=n(12),L=(n(33),n.p+"static/media/noImage.09ea9f6b.jpg"),V=(n(34),function(e){var t=e.image,n=e.title,a=e.condition,r=e.price,i=e.viewItemURL;return Object(P.jsxs)("a",{href:i,className:"card",children:[Object(P.jsx)("div",{className:"img-container",style:{backgroundImage:"url(".concat(t||L,")")}}),Object(P.jsxs)("div",{className:"item-details",children:[Object(P.jsx)("h3",{className:"txt-overflow",children:n}),Object(P.jsx)("span",{className:"condition",children:"Condition: ".concat(a||"Unknown")}),Object(P.jsx)("span",{className:"price",children:"$".concat(r)})]})]})}),T=r.a.memo(V),z=n(14);function G(){var e,t,n=N(f),r=N(w),i=null===(e=N(p))||void 0===e||null===(t=e.findItemsByKeywordsResponse[0].searchResult)||void 0===t?void 0:t[0]["@count"],c=O(),o=!("0"===i||(null===r||void 0===r?void 0:r[0].pageNumber)===(null===r||void 0===r?void 0:r[0].totalPages)),s=Object(a.useMemo)((function(){return null===n||void 0===n?void 0:n.map((function(e,t){var n=e.title,a=e.galleryURL,r=e.condition,i=e.sellingStatus,c=e.viewItemURL,o=Object(H.a)(i,1),s=Object(H.a)(o[0].currentPrice,1)[0].__value__,u={title:n[0],image:null===a||void 0===a?void 0:a[0],condition:null===r||void 0===r?void 0:r[0].conditionDisplayName[0],viewItemURL:c[0],price:s};return Object(P.jsx)(T,Object(F.a)({},u),t)}))}),[n]);return Object(P.jsx)("div",{id:"grid",className:"results",children:Object(P.jsx)(z.a,{dataLength:(null===n||void 0===n?void 0:n.length)||0,next:function(){return c(v())},hasMore:o,loader:Object(P.jsx)("h4",{style:{position:"absolute",bottom:"10px",right:"50%"},children:"Loading..."}),scrollableTarget:"grid",children:s})})}var q=r.a.memo(G);var X=function(){var e=N(g),t=N(j),n=t&&("string"===typeof t?t:t.message);return Object(P.jsxs)("div",{className:"wrapper",children:[Object(P.jsx)(W,{}),"succeeded"===e&&!n&&Object(P.jsx)(q,{}),"loading"===e&&Object(P.jsx)(B,{}),n&&Object(P.jsx)(S,{message:n})]})},Y=Object(l.a)({reducer:{data:y,settings:M},devTools:!1});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(x.a,{store:Y,children:Object(P.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0b1f1834.chunk.js.map