"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410],{4635:function(n,t,e){e.d(t,{Df:function(){return i},HI:function(){return h},Jh:function(){return d},_r:function(){return v},gH:function(){return f}});var r=e(5861),u=e(7757),c=e.n(u),a=e(4569),o=e.n(a);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/trending/movie/day").then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/search/movie?api_key=4a5a1e8e9c9af768c9d74bb009ae596f&query=".concat(t)).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t)).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits")).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews")).then((function(n){return n})).catch((function(n){return console.log(n.message)}));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"65248391dec78c4625c205b53ad0430c",page:1,language:"en-US"}},8489:function(n,t,e){e.r(t),e.d(t,{default:function(){return i}});var r=e(885),u=e(4635),c=e(2791),a=e(3504),o=e(184);function i(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],i=t[1];return(0,c.useEffect)((function(){(0,u.Df)().then((function(n){return i(n.results)}))}),[]),(0,o.jsx)("ul",{children:e&&e.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}}}]);
//# sourceMappingURL=MoviesPage.15b0e5a8.chunk.js.map