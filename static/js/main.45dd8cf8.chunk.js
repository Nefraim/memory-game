(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{11:function(c,e,t){},12:function(c,e,t){},13:function(c,e,t){},15:function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(6),s=t.n(r),i=(t(11),t(3)),u=t(2),d=t(5),o=(t(12),t(13),t(0));function j(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:n?"flipped":"",children:[Object(o.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(o.jsx)("img",{onClick:function(){a||t(e),t(e)},className:"back",src:"/img/back.png",alt:"card back"})]})})}var m=[{src:"/img/earth.png",matched:!1},{src:"/img/mars.png",matched:!1},{src:"/img/moon.png",matched:!1},{src:"/img/neptune.png",matched:!1},{src:"/img/sun.png",matched:!1},{src:"/img/uranus.png",matched:!1}];var l=function(){var c=Object(n.useState)([]),e=Object(u.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),l=s[0],b=s[1],f=Object(n.useState)(null),h=Object(u.a)(f,2),O=h[0],p=h[1],g=Object(n.useState)(null),x=Object(u.a)(g,2),v=x[0],k=x[1],N=Object(n.useState)(!1),S=Object(u.a)(N,2),C=S[0],M=S[1],w=function(){var c=[].concat(m,m).sort((function(){return Math.random()-.5})).map((function(c){return Object(i.a)(Object(i.a)({},c),{},{id:Math.random()})}));p(null),k(null),a(c),b(0)},y=function(c){O?k(c):p(c)};Object(d.useEffect)((function(){w()}),[]),Object(d.useEffect)((function(){M(!0),O&&v&&(O.src===v.src?(a((function(c){return c.map((function(c){return c.src===O.src?Object(i.a)(Object(i.a)({},c),{},{matched:!0}):c}))})),E()):setTimeout((function(){return E()}),1e3))}),[O,v]);var E=function(){p(null),k(null),b((function(c){return c+1})),M(!1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Planet Match"}),Object(o.jsx)("button",{onClick:w,children:"Start New Game"}),Object(o.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(o.jsx)(j,{card:c,handleChoice:y,flipped:c===O||c===v||c.matched,disabled:C},c.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",l]})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.45dd8cf8.chunk.js.map