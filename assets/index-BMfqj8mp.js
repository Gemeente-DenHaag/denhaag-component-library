import{e as d}from"./index-raSRI-5R.js";var o=".denhaag-sidenav{display:var(--denhaag-sidenav-display);flex-direction:var(--denhaag-sidenav-flex-direction);min-width:var(--denhaag-sidenav-min-width);row-gap:var(--denhaag-sidenav-row-gap)}@media (width <= 1023px){.denhaag-sidenav{display:var(--denhaag-sidenav-mobile-display)}}.denhaag-sidenav__list{list-style:none;margin-block-end:0;margin-block-start:0;padding-block-end:0;padding-block-start:0;padding-inline-start:0}.denhaag-sidenav__item{font-family:var(--denhaag-sidenav-item-font-family,sans-serif);font-size:var(--denhaag-sidenav-item-font-size);font-weight:var(--denhaag-sidenav-item-font-weight,normal);line-height:1.5}.denhaag-sidenav__item,.denhaag-sidenav__link{align-items:center;display:flex;flex-direction:row}.denhaag-sidenav__link{color:var(--denhaag-sidenav-link-color);column-gap:16px;flex-grow:1;padding-block-end:var(--denhaag-sidenav-link-padding-block-end);padding-block-start:var(--denhaag-sidenav-link-padding-block-start);text-decoration:none}.denhaag-sidenav__link-label{align-items:center;display:flex;gap:var(--denhaag-sidenav-link-label-gap)}.denhaag-sidenav__link--hover,.denhaag-sidenav__link:hover{color:var(--denhaag-sidenav-link-hover-color);cursor:pointer}.denhaag-sidenav__link--focus,.denhaag-sidenav__link:focus-visible{outline:var(--denhaag-focus-border)}.denhaag-sidenav__link--current{color:var(--denhaag-sidenav-link-active-color);font-weight:var(--denhaag-sidenav-link-active-font-weight)}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",a.nonce=window.NONCE,e.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}var t=function(){return t=Object.assign||function(a){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(a[l]=i[l])}return a},t.apply(this,arguments)};function c(e,a){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i}function v(e){var a,i,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(i=v(e[a]))&&(n&&(n+=" "),n+=i)}else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}function s(){for(var e,a,i=0,n="",r=arguments.length;i<r;i++)(e=arguments[i])&&(a=v(e))&&(n&&(n+=" "),n+=a);return n}var g=function(e){var a=s("denhaag-sidenav",e.className);return d.createElement("nav",t({},e,{className:a}),e.children)},m=function(e){var a=s("denhaag-sidenav__item",e.className);return d.createElement("li",t({},e,{className:a}),e.children)},h=function(e){var a=s("denhaag-sidenav__list",e.className);return d.createElement("ul",t({},e,{className:a}),e.children)},f=function(e){var a=e.current,i=c(e,["current"]),n=s("denhaag-sidenav__link",a&&"denhaag-sidenav__link--current",i.className);return d.createElement("a",t({},i,{"aria-current":a||i["aria-current"]?"page":void 0,className:n}),i.children)},u=function(e){var a=e.className,i=c(e,["className"]),n=s("denhaag-sidenav__link-label",a);return d.createElement("span",t({},i,{className:n}),i.children)};g.__docgenInfo={description:"",methods:[],displayName:"Sidenav"};m.__docgenInfo={description:"",methods:[],displayName:"SidenavItem"};f.__docgenInfo={description:"",methods:[],displayName:"SidenavLink"};u.__docgenInfo={description:"",methods:[],displayName:"SidenavLinkLabel"};h.__docgenInfo={description:"",methods:[],displayName:"SidenavList"};export{g as S,h as a,m as b,f as c,u as d};