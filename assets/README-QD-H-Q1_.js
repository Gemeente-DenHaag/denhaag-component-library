import{R as c}from"./index-Cs7sjTYM.js";var s=".utrecht-link-list--html-ul{margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-inline-start:0}.utrecht-link-list--html-ul>li{list-style:none}.utrecht-link-list{--utrecht-icon-inset-block-start:var(--utrecht-link-list-icon-inset-block-start);--utrecht-icon-size:var(--utrecht-link-list-icon-size);--utrecht-link-icon-size:var(--utrecht-link-list-icon-size);--utrecht-link-text-decoration:var(--utrecht-link-list-link-text-decoration,none);display:flex;flex-direction:column;margin-block-end:calc(var(--utrecht-space-around, 0)*var(--utrecht-link-list-margin-block-end, 0));margin-block-start:calc(var(--utrecht-space-around, 0)*var(--utrecht-link-list-margin-block-start, 0));row-gap:var(--utrecht-link-list-row-gap)}.utrecht-link-list__item{display:block}.utrecht-link-list__link{align-items:baseline;column-gap:var(--utrecht-link-list-link-column-gap);display:inline-flex;font-weight:var(--utrecht-link-list-link-font-weight)}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s))}var l=function(){return l=Object.assign||function(n){for(var r,t=1,i=arguments.length;t<i;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n},l.apply(this,arguments)};function o(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(r[t[i]]=e[t[i]]);return r}function u(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=u(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function m(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=u(e))&&(t&&(t+=" "),t+=n);return t}var p=function(e){var n=e.className,r=o(e,["className"]),t=m("utrecht-link-list--html-ul","utrecht-link-list",n);return c.createElement("ul",l({className:t},r))},d=function(e){var n=e.className,r=o(e,["className"]),t=m("utrecht-link-list__item",n);return c.createElement("li",l({className:t},r))};p.__docgenInfo={description:"",methods:[],displayName:"LinkList"};d.__docgenInfo={description:"",methods:[],displayName:"LinkListItem"};const f=`# Documentatie

https://www.nldesignsystem.nl/link-list
`;export{p as L,d as a,f as r};
