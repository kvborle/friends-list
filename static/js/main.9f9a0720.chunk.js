(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r,i=n(1),a=n.n(i),c=n(8),l=n.n(c),o=(n(13),n(5)),s=n(2);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){var n=e.title,a=e.titleId,c=d(e,["title","titleId"]);return i.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",width:15,height:16,viewBox:"0 0 15 16",ref:t,"aria-labelledby":a},c),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("g",{fill:"#a2a0a0",fillRule:"evenodd",stroke:"#a2a0a0",strokeWidth:.2},i.createElement("path",{d:"M8.686 1.899V0H4.1v1.899H0v.689h1.21l.873 11.373h8.635l.873-11.373h1.395v-.69h-4.3zM8.014.672v1.21H4.788V.671h3.226zm2.89 1.881L10.08 13.24H2.705L1.9 2.553h9.005z",transform:"translate(1 1)"}),i.createElement("path",{d:"M6.115 4.469L6.804 4.469 6.804 11.576 6.115 11.576zM8.391 4.438L9.079 4.476 8.694 11.588 8.006 11.551zM4.52 4.442L4.905 11.554 4.217 11.591 3.832 4.479z",transform:"translate(1 1)"}))))}var h,v=i.forwardRef(f);n.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function O(e,t){var n=e.title,r=e.titleId,a=b(e,["title","titleId"]);return i.createElement("svg",j({width:16,height:16,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,h||(h=i.createElement("path",{d:"M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z",fill:"current",stroke:"#a2a0a0",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round"})))}var m=i.forwardRef(O),p=(n.p,n(7),n(0));function g(e){var t=e.item,n=void 0===t?{}:t,r=e.handleDelete,a=void 0===r?function(){}:r,c=e.handleFavorite,l=void 0===c?function(){}:c,o=Object(i.useState)(""),u=Object(s.a)(o,2),d=u[0],f=u[1],h=function(e){n.isFavorite?f(e?"#d3d3d3":"#ffffff"):f(e?"#ffffff":"#d3d3d3")},j=d||(n&&n.isFavorite?"#d3d3d3":"#ffffff");return Object(p.jsxs)("div",{className:"list",children:[Object(p.jsxs)("div",{className:"name-container",children:[Object(p.jsx)("div",{className:"title",children:n&&n.name}),Object(p.jsx)("div",{className:"subtext",children:"is your friend"})]}),Object(p.jsx)("button",{className:"favorite-button",onClick:function(){return l(n)},onMouseEnter:function(){return h(!1)},onMouseLeave:function(){return h(!0)},children:Object(p.jsx)(m,{fill:j})}),Object(p.jsx)("button",{onClick:function(){return a(n)},children:Object(p.jsx)(v,{})})]})}var x=function(e){var t=e.list,n=void 0===t?[]:t,r=e.handleDelete,i=void 0===r?function(){}:r,a=e.handleFavorite,c=void 0===a?function(){}:a;return n&&n.length>0?n.map((function(e){return Object(p.jsx)(g,{item:e,handleDelete:function(){return i(e)},handleFavorite:function(){return c(e)}},e.id)})):Object(p.jsx)("div",{className:"list",children:"No Friends List Found"})};var y=function(e){var t=e.placeholder,n=e.value,r=e.handleSubmit,i=void 0===r?function(){}:r,a=e.handleChange,c=void 0===a?function(){}:a;return Object(p.jsx)("form",{className:"form-container",onSubmit:i,children:Object(p.jsx)("input",{className:"name-input p-10-20",value:n,placeholder:t,onChange:c})})};var w=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)(""),c=Object(s.a)(a,2),l=c[0],u=c[1],d=Object(i.useState)(1),f=Object(s.a)(d,2),h=f[0],v=f[1],j=Object(i.useState)([]),b=Object(s.a)(j,2),O=b[0],m=b[1],g=Object(i.useState)(!1),w=Object(s.a)(g,2),F=w[0],L=w[1],S=4*h,N=S-4,k=O.filter((function(e){return-1!==e.name.indexOf(l)}));return F&&(k=k.sort((function(e,t){return!e.isFavorite-!t.isFavorite}))),Object(p.jsxs)("div",{className:"main-container",children:[Object(p.jsx)("header",{className:"header p-10-20",children:"Friends list"}),Object(p.jsx)(y,{handleSubmit:function(e){e.preventDefault(),n&&n.trim()&&n.trim().length>0?m([].concat(Object(o.a)(O),[{id:Math.random(),name:n&&n.trim(),isFavorite:!1}])):alert("Please enter name"),r("")},value:n,placeholder:"Enter your friend's name",handleChange:function(e){var t=e&&e.target&&e.target.value||"";r(t)}}),Object(p.jsx)("input",{className:"p-10-20",value:l,placeholder:"Search friend's name",onChange:function(e){v(1);var t=e&&e.target&&e.target.value||"";u(t)}}),Object(p.jsxs)("div",{className:"list-container",children:[O.length>0&&Object(p.jsxs)("div",{className:"p-10-20",style:{alignSelf:"flex-end"},children:[Object(p.jsx)("input",{type:"checkbox",id:"sortByFavorite",value:F,onChange:function(e){L(e&&e.target&&e.target.checked||!1)}}),Object(p.jsx)("label",{htmlFor:"sortByFavorite",children:"Sort By Favorite"})]}),Object(p.jsx)(x,{list:k.slice(N,S),handleDelete:function(e){if(window.confirm("Are you sure want to delete?")){var t=Object(o.a)(O),n=t.findIndex((function(t){return t.id===e.id})),r=k.findIndex((function(t){return t.id===e.id}));r%4!==0||k[r+1]||v(1===h?1:h-1),t.splice(n,1),m(t)}},handleFavorite:function(e){var t=Object(o.a)(O);t.map((function(t){return t.id===e.id&&(t.isFavorite=!t.isFavorite),t})),m(t)}}),k.length>0&&Object(p.jsx)("div",{className:"pagination",children:Array.from({length:Math.ceil(k.length/4)},(function(e,t){return t+1})).map((function(e){return Object(p.jsx)("a",{className:h===e?"active":"",onClick:function(){v(e)},children:e},e)}))})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};l.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),F()},7:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.9f9a0720.chunk.js.map