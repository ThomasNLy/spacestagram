(this.webpackJsonpspacestagram=this.webpackJsonpspacestagram||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(9),s=n.n(i),r=(n(16),n(10)),o=n(2),l=(n(17),n(18),n(0));var d=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=n?Object(l.jsx)("i",{className:"fas fa-heart heart-animation"}):"Like",s=n?"red":"white";return Object(l.jsx)("button",{className:"my-like-button",onClick:function(){a(!n)},style:{backgroundColor:s},children:i})},j=n(28),u=n(29),b=n(30),h=n(31);n(20);var O=function(e){var t=e.linkButtonClicked;return Object(l.jsx)("div",{className:"my-toast",style:t?{animation:"notify 3s normal forwards"}:{display:"none"},children:Object(l.jsx)("p",{children:"Link Copied"})})};n(21);var f=function(e){var t,n=e.urlLink,a=e.description,i=e.title,s=Object(c.useState)(!1),r=Object(o.a)(s,2),d=r[0],f=r[1],m=Object(c.useState)(!1),v=Object(o.a)(m,2),x=v[0],p=v[1],g=Object(c.useRef)(null);return Object(c.useEffect)((function(){function e(e){d&&g.current&&!g.current.contains(e.target)&&f(!1)}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}})),d&&(t=Object(l.jsxs)("div",{ref:g,className:"share-options",children:[Object(l.jsx)(j.a,{url:n,quote:a,children:Object(l.jsx)(u.a,{size:50})}),Object(l.jsx)(b.a,{url:n,title:i,children:Object(l.jsx)(h.a,{size:50})}),Object(l.jsx)("i",{className:"fas fa-link",onClick:function(){navigator.clipboard.writeText(n),p(!0)}})]})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"share-button-container",children:[Object(l.jsx)("button",{className:"my-share-button",onClick:function(){f(!0)},children:"Share"}),t]}),Object(l.jsx)(O,{linkButtonClicked:x})]})};n(22);var m=function(e){var t,n=e.title,c=e.mediaType,a=e.imageUrl,i=e.date,s=e.description;return t="image"===c?Object(l.jsx)("img",{src:a,alt:"an picture taken by NASA of space",className:"card-img-top"}):Object(l.jsx)("iframe",{title:"youtube video of "+n,style:{height:"20em",width:"auto"},controls:!0,src:a,alt:"an picture taken by NASA of space",className:"card-img-top"}),Object(l.jsxs)("div",{className:"card pb-2 shadow-sm",children:[t,Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h2",{className:"card-title",children:n}),Object(l.jsx)("p",{children:i}),Object(l.jsx)("p",{className:"card-text",children:s}),Object(l.jsxs)("div",{className:"my-buttons",children:[Object(l.jsx)(d,{}),Object(l.jsx)(f,{urlLink:a,description:s,title:n})]})]})]})};n(23);var v=function(e){var t=e.display;return Object(l.jsx)("div",{className:"background-overlay",style:{display:t},children:Object(l.jsxs)("div",{className:"loading-icon-wrapper",children:[Object(l.jsx)("div",{className:"loading-icon loading-icon-animation"}),Object(l.jsx)("p",{children:"Loading"})]})})};n(24),n(25);var x=function(e){var t=e.dateSelection,n=[10,20,30,60];return Object(l.jsxs)("div",{className:"date-selector-menu",children:[Object(l.jsx)("label",{htmlFor:"date-selector",children:"Posts from last"}),Object(l.jsxs)("select",{name:"date-selector",id:"date-selector",onChange:function(e){t(e.target.value)},children:[Object(l.jsx)("option",{value:n[0],children:"10 days"}),Object(l.jsx)("option",{value:n[1],children:"20 days"}),Object(l.jsx)("option",{value:n[2],children:"30 days"}),Object(l.jsx)("option",{value:n[3],children:"2 months"})]})]})};var p=function(e){var t=e.dateSelection;return Object(l.jsxs)("nav",{className:"navbar fixed-top",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"navbar-brand h1",href:"#",children:"Spacestagram"}),Object(l.jsx)("p",{children:"Brought to you by NASA's Astronomy Picture of the Day (APOD) API"})]}),Object(l.jsx)(x,{dateSelection:t})]})};var g=function(){var e,t,n=(new Date).toISOString().slice(0,10),i=new Date;i.setDate(i.getDate()-10),i=i.toISOString().slice(0,10);var s,d=Object(c.useState)(!0),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(c.useState)(null),O=Object(o.a)(h,2),f=O[0],x=O[1];function g(e){s="https://api.nasa.gov/planetary/apod?api_key=".concat("vn0fMtp6NRQpMEMQlXgvuFttofKGuxcMKFG0cixN","&start_date=").concat(e,"&end_date=").concat(n),fetch(s).then((function(e){if(!e.ok)throw new Error("no reposnse");return e.json()})).then((function(e){x(e.reverse()),b(!1)})).catch((function(e){console.error("problem fetching data")}))}return Object(c.useEffect)((function(){g(i)}),[]),u?t="block":(t="none",e=function(e){var t,n=[],c=Object(r.a)(e);try{for(c.s();!(t=c.n()).done;){var a=t.value;n.push(Object(l.jsx)("div",{className:"row justify-content-center mt-4",children:Object(l.jsx)("div",{className:"col-lg-4 col-md-8 col-sm-auto",children:Object(l.jsx)(m,{title:a.title,mediaType:a.media_type,imageUrl:a.url,date:a.date,description:a.explanation})})},a.title))}}catch(i){c.e(i)}finally{c.f()}return n}(f)),Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(p,{dateSelection:function(e){var t=new Date;t.setDate((new Date).getDate()-e),t=t.toISOString().slice(0,10),b(!0),g(t)}}),Object(l.jsx)(v,{display:t}),Object(l.jsx)("div",{className:"container ",children:e})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.ec7940c7.chunk.js.map