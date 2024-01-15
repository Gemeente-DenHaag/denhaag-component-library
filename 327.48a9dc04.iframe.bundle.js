"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[327],{"../../components/ProcessSteps/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qb:()=>Status});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),css_248z$2=".denhaag-process-steps__step{padding-block-end:var(--denhaag-process-steps-step-padding-block-end);padding-block-start:var(--denhaag-process-steps-step-padding-block-start);position:relative}.denhaag-process-steps__step+.denhaag-process-steps__step{margin-block-start:var(--denhaag-process-steps-step-distance)}.denhaag-process-steps{--denhaag-process-steps-step-distance:40px;--denhaag-process-steps-sub-step-distance:24px;font-family:var(--denhaag-process-steps-font-family);font-size:var(--denhaag-process-steps-font-size);line-height:var(--denhaag-process-steps-line-height);list-style:none;margin-block-end:0;margin-block-start:0;padding-inline-start:0;position:relative}.denhaag-process-steps__step-header{align-items:var(--denhaag-process-steps-step-header-align-items);display:flex;gap:16px}.denhaag-process-steps__step-header-toggle{--utrecht-button-subtle-font-size:inherit;--utrecht-button-subtle-background-color:transparent;--utrecht-button-subtle-color:auto;--utrecht-button-padding-block-end:0;--utrecht-button-padding-block-start:0;--utrecht-button-padding-inline-end:0;--utrecht-button-padding-inline-start:0;--utrecht-button-icon-gap:4px;align-items:center;appearance:none;background-color:inherit;border:0;display:flex;gap:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.denhaag-process-steps__step-heading{align-items:center;color:var(--denhaag-process-steps-step-heading-color);display:flex;font-family:var(--denhaag-process-steps-step-heading-font-family);font-size:var(--denhaag-process-steps-step-heading-font-size);font-weight:var(--denhaag-process-steps-step-heading-font-weight);line-height:var(--denhaag-process-steps-step-heading-line-height);margin-block-end:0;margin-block-start:0;overflow-wrap:var(--denhaag-process-steps-step-heading-overflow-wrap,anywhere);text-align:start}.denhaag-process-steps__step-heading--not-checked{color:var(--denhaag-process-steps-step-heading-not-checked-color)}.denhaag-process-steps__step-heading--checked{color:var(--denhaag-process-steps-step-heading-checked-color);font-size:var(--denhaag-process-steps-step-heading-checked-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-checked-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--current{color:var(--denhaag-process-steps-step-heading-current-color);font-size:var(--denhaag-process-steps-step-heading-current-font-size,var(--denhaag-process-steps-step-heading-font-size));font-weight:var(--denhaag-process-steps-step-heading-current-font-weight,var(--denhaag-process-steps-step-heading-font-weight))}.denhaag-process-steps__step-heading--warning{color:var(--denhaag-process-steps-step-heading-warning-color)}.denhaag-process-steps__step-heading--error{color:var(--denhaag-process-steps-step-heading-error-color)}.denhaag-process-steps__step-details{display:block}.denhaag-process-steps__step-details--hidden{display:none}.denhaag-process-steps__step-body{position:relative}.denhaag-process-steps__step-meta{color:var(--denhaag-process-steps-step-meta-color);font-size:var(--denhaag-process-steps-step-meta-font-size);margin-inline-start:calc(var(--denhaag-step-marker-size) + 16px);position:relative}.denhaag-process-steps__step-meta--date{color:var(--denhaag-process-steps-step-meta-date-color,var(--denhaag-process-steps-step-meta-color));font-size:var(--denhaag-process-steps-step-meta-date-font-size,var(--denhaag-process-steps-step-meta-font-size))}.denhaag-process-steps__sub-step{align-items:baseline;display:flex;flex-direction:row;gap:23px;margin-block-start:var(--denhaag-process-steps-sub-step-distance);position:relative}.denhaag-process-steps__sub-step-heading{margin-block-end:0;margin-block-start:0}";const head$2=document.head||document.getElementsByTagName("head")[0],style$2=document.createElement("style");style$2.type="text/css",style$2.nonce=window.NONCE,head$2.appendChild(style$2),style$2.styleSheet?style$2.styleSheet.cssText=css_248z$2:style$2.appendChild(document.createTextNode(css_248z$2));var __assign$2=function(){return __assign$2=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign$2.apply(this,arguments)};function __rest$2(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}function r$2(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$2(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$2(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$2(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var Step=function(_a){var className=_a.className,children=_a.children,_b=_a.current,current=void 0!==_b&&_b,_c=_a.appearance,appearance=void 0===_c?"not-checked":_c,props=__rest$2(_a,["className","children","current","appearance"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",__assign$2({},props,{className:clsx$2("denhaag-process-steps__step","denhaag-process-steps__step--".concat(appearance),className),"aria-current":current?"step":void 0}),children)},StepList=function(_a){var className=_a.className,_b=_a.nested,nested=void 0!==_b&&_b,children=_a.children,props=__rest$2(_a,["className","nested","children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol",__assign$2({},props,{className:clsx$2("denhaag-process-steps",nested&&"denhaag-process-steps--nested",className)}),children)},StepHeader=function(_a){var children=_a.children,className=_a.className,props=__rest$2(_a,["children","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign$2({className:clsx$2("denhaag-process-steps__step-header",className)},props),children)},StepHeading=function(_a){var children=_a.children,_b=_a.appearance,appearance=void 0===_b?"not-checked":_b,props=__rest$2(_a,["children","appearance"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",__assign$2({},props,{className:clsx$2("denhaag-process-steps__step-heading","denhaag-process-steps__step-heading--".concat(appearance))}),children)},SubStep=function(_a){var children=_a.children,_b=_a.appearance,appearance=void 0===_b?"not-checked":_b;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{className:clsx$2("denhaag-process-steps__sub-step","denhaag-process-steps__sub-step--".concat(appearance))},children)},SubStepHeading=function(_a){var children=_a.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"denhaag-process-steps__sub-step-heading"},children)},__assign$1=function(){return __assign$1=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign$1.apply(this,arguments)};function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}"function"==typeof SuppressedError&&SuppressedError;var SvgIcon=function(_a){var _b,className=_a.className,_c=_a.component,component=void 0===_c?"svg":_c,_d=_a.focusable,focusable=void 0===_d?"false":_d,_e=_a.shapeRendering,shapeRendering=void 0===_e?"auto":_e,_f=_a.useDefaultClass,useDefaultClass=void 0===_f||_f,props=function __rest$1(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["className","component","focusable","shapeRendering","useDefaultClass"]),iconClassName=function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}({"denhaag-icon":useDefaultClass},className),Component=component;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,__assign$1({className:iconClassName,focusable,"aria-hidden":null===(_b=props["aria-hidden"])||void 0===_b||_b,shapeRendering},props),props.children)},css_248z$1=".denhaag-icon{fill:currentcolor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";const head$1=document.head||document.getElementsByTagName("head")[0],style$1=document.createElement("style");var _path$S;function _extends$V(){return _extends$V=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$V.apply(this,arguments)}style$1.type="text/css",style$1.nonce=window.NONCE,head$1.appendChild(style$1),style$1.styleSheet?style$1.styleSheet.cssText=css_248z$1:style$1.appendChild(document.createTextNode(css_248z$1));var _path$Q,SvgChevronDown=function SvgChevronDown(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$V({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},props),_path$S||(_path$S=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"})))},Memo$V=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronDown);function _extends$T(){return _extends$T=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$T.apply(this,arguments)}var _path$L,SvgChevronUp=function SvgChevronUp(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$T({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},props),_path$Q||(_path$Q=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6Z"})))},Memo$T=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronUp);function _extends$O(){return _extends$O=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$O.apply(this,arguments)}var _path$K,SvgClose=function SvgClose(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$O({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},props),_path$L||(_path$L=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"})))},Memo$O=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgClose);function _extends$N(){return _extends$N=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$N.apply(this,arguments)}var _g,SvgChecked=function SvgChecked(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$N({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"1em",height:"1em",viewBox:"0 0 24 24"},props),_path$K||(_path$K=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeWidth:1.75,d:"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082Z"})))},Memo$N=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChecked);function _extends$w(){return _extends$w=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$w.apply(this,arguments)}var SvgAlertTriangle=function SvgAlertTriangle(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$w({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},props),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0v0ZM12 17h.01M12 9v4"}))))},Memo$w=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgAlertTriangle),buildIcon=function(svg,props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SvgIcon,__assign$1({component:svg},props))},ChevronDownIcon=function(props){return buildIcon(Memo$V,props)},ChevronUpIcon=function(props){return buildIcon(Memo$T,props)},CloseIcon=function(props){return buildIcon(Memo$O,props)},CheckedIcon=function(props){return buildIcon(Memo$N,props)},AlertTriangleIcon=function(props){return buildIcon(Memo$w,props)},css_248z=".denhaag-step-marker{align-items:center;background-color:var(--denhaag-step-marker-background-color);block-size:var(--denhaag-step-marker-size);border-color:var(--denhaag-step-marker-border-color,transparent);border-radius:var(--denhaag-step-marker-border-radius,50%);border-style:solid;border-width:var(--denhaag-step-marker-border-width);box-sizing:border-box;color:var(--denhaag-step-marker-color);display:flex;flex-grow:0;font-family:var(--denhaag-step-marker-font-family);font-size:var(--denhaag-step-marker-font-size);font-weight:var(--denhaag-step-marker-font-weight);inline-size:var(--denhaag-step-marker-size);justify-content:center;margin-block-end:var(--denhaag-step-marker-margin);margin-block-start:var(--denhaag-step-marker-margin);min-block-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));min-inline-size:var(--denhaag-step-marker-min-size,var(--denhaag-step-marker-size));padding-inline-end:0;position:relative;z-index:1}.denhaag-step-marker .denhaag-icon{block-size:var(--denhaag-step-marker-icon-size);inline-size:var(--denhaag-step-marker-icon-size)}.denhaag-step-marker--nested{block-size:var(--denhaag-step-marker-nested-size);border-width:var(--denhaag-step-marker-nested-border-width,var(--denhaag-step-marker-border-width));inline-size:var(--denhaag-step-marker-nested-size);margin-inline-start:calc((var(--denhaag-step-marker-size) - var(--denhaag-step-marker-nested-size))/2);min-block-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size));min-inline-size:var(--denhaag-step-marker-nested-min-size,var(--denhaag-step-marker-nested-size))}.denhaag-step-marker--nested .denhaag-icon{block-size:var(--denhaag-step-marker-nested-icon-size);inline-size:var(--denhaag-step-marker-nested-icon-size)}.denhaag-step-marker--not-checked{background-color:var(--denhaag-step-marker-not-checked-background-color);border-color:var(--denhaag-step-marker-not-checked-border-color);color:var(--denhaag-step-marker-not-checked-color)}.denhaag-step-marker--not-checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-not-checked-nested-background-color,var(--denhaag-step-marker-not-checked-background-color));border-color:var(--denhaag-step-marker-not-checked-nested-border-color,var(--denhaag-step-marker-not-checked-border-color));color:var(--denhaag-step-marker-not-checked-nested-color,var(--denhaag-step-marker-not-checked-color))}.denhaag-step-marker--checked{background-color:var(--denhaag-step-marker-checked-background-color);border-color:var(--denhaag-step-marker-checked-border-color);color:var(--denhaag-step-marker-checked-color)}.denhaag-step-marker--checked.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-checked-nested-background-color,var(--denhaag-step-marker-checked-background-color));border-color:var(--denhaag-step-marker-checked-nested-border-color,var(--denhaag-step-marker-checked-border-color));color:var(--denhaag-step-marker-checked-nested-color,var(--denhaag-step-marker-checked-color))}.denhaag-step-marker--current{background-color:var(--denhaag-step-marker-current-background-color);border-color:var(--denhaag-step-marker-current-border-color);color:var(--denhaag-step-marker-current-color)}.denhaag-step-marker--current.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-current-nested-background-color,var(--denhaag-step-marker-current-background-color));border-color:var(--denhaag-step-marker-current-nested-border-color,var(--denhaag-step-marker-current-border-color));color:var(--denhaag-step-marker-current-nested-color,var(--denhaag-step-marker-current-color))}.denhaag-step-marker--disabled{background-color:var(--denhaag-step-marker-disabled-background-color);border-color:var(--denhaag-step-marker-disabled-border-color);color:var(--denhaag-step-marker-disabled-color)}.denhaag-step-marker--disabled.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-disabled-nested-background-color,var(--denhaag-step-marker-disabled-background-color));border-color:var(--denhaag-step-marker-disabled-nested-border-color,var(--denhaag-step-marker-disabled-border-color));color:var(--denhaag-step-marker-disabled-nested-color,var(--denhaag-step-marker-disabled-color))}.denhaag-step-marker--warning{background-color:var(--denhaag-step-marker-warning-background-color);border-color:var(--denhaag-step-marker-warning-border-color);color:var(--denhaag-step-marker-warning-color)}.denhaag-step-marker--warning.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-warning-nested-background-color,var(--denhaag-step-marker-warning-background-color));border-color:var(--denhaag-step-marker-warning-nested-border-color,var(--denhaag-step-marker-warning-border-color));color:var(--denhaag-step-marker-warning-nested-color,var(--denhaag-step-marker-warning-color))}.denhaag-step-marker--error{background-color:var(--denhaag-step-marker-error-background-color);border-color:var(--denhaag-step-marker-error-border-color);color:var(--denhaag-step-marker-error-color)}.denhaag-step-marker--error.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-error-nested-background-color,var(--denhaag-step-marker-error-background-color));border-color:var(--denhaag-step-marker-error-nested-border-color,var(--denhaag-step-marker-error-border-color));color:var(--denhaag-step-marker-error-nested-color,var(--denhaag-step-marker-error-color))}.denhaag-step-marker--default{background-color:var(--denhaag-step-marker-default-background-color);border-color:var(--denhaag-step-marker-default-border-color);color:var(--denhaag-step-marker-default-color)}.denhaag-step-marker--default.denhaag-step-marker--nested{background-color:var(--denhaag-step-marker-default-nested-background-color,var(--denhaag-step-marker-default-background-color));border-color:var(--denhaag-step-marker-default-nested-border-color,var(--denhaag-step-marker-default-border-color));color:var(--denhaag-step-marker-default-nested-color,var(--denhaag-step-marker-default-color))}.denhaag-step-marker__connector{height:100%;left:calc(var(--denhaag-step-marker-size)/2);outline:var(--denhaag-step-marker-connector-width,1px) var(--denhaag-step-marker-connector-style,dashed) var(--denhaag-step-marker-connector-color);position:absolute;top:0}.denhaag-step-marker__connector--main-to-main{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--main-to-nested{padding-block-end:calc(var(--denhaag-process-steps-step-distance) + var(--denhaag-step-marker-nested-size));top:calc(var(--denhaag-step-marker-size)*-1/2)}.denhaag-step-marker__connector--nested-to-nested{padding-block-end:var(--denhaag-process-steps-sub-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--nested-to-main{padding-block-end:var(--denhaag-process-steps-step-distance);top:var(--denhaag-step-marker-nested-size)}.denhaag-step-marker__connector--not-checked{outline-color:var(--denhaag-step-marker-connector-not-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-not-checked-outline-style,dashed);outline-width:var(--denhaag-step-marker-connector-not-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--checked,.denhaag-step-marker__connector--current{outline-color:var(--denhaag-step-marker-connector-checked-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-checked-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-checked-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--warning{outline-color:var(--denhaag-step-marker-connector-warning-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-warning-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-warning-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--error{outline-color:var(--denhaag-step-marker-connector-error-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-error-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-error-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}.denhaag-step-marker__connector--default{outline-color:var(--denhaag-step-marker-connector-default-outline-color,var(--denhaag-step-marker-connector-outline-color));outline-style:var(--denhaag-step-marker-connector-default-outline-style,solid);outline-width:var(--denhaag-step-marker-connector-default-outline-width,var(--denhaag-step-marker-connector-outline-width,1px))}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var StepMarkerConnector=function(_a){var className=_a.className,_b=_a.appearance,appearance=void 0===_b?"not-checked":_b,from=_a.from,to=_a.to,props=__rest(_a,["className","appearance","from","to"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({},props,{className:clsx("denhaag-step-marker__connector","denhaag-step-marker__connector--".concat(appearance),"denhaag-step-marker__connector--".concat(from,"-to-").concat(to),className)}))},StepMarker=function(_a){var children=_a.children,_b=_a.appearance,appearance=void 0===_b?"not-checked":_b,nested=_a.nested,props=__rest(_a,["children","appearance","nested"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({},props,{className:clsx("denhaag-step-marker","denhaag-step-marker--".concat(appearance),nested&&"denhaag-step-marker--nested")}),children)},StepBody=function(_a){var children=_a.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:clsx$2("denhaag-process-steps__step-body")},children)},StepMeta=function(_a){var date=_a.date,children=_a.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:clsx$2("denhaag-process-steps__step-meta",date&&"denhaag-process-steps__step-meta--date")},children)},StepDetails=function(_a){var id=_a.id,className=_a.className,_b=_a.collapsed,collapsed=void 0!==_b&&_b,children=_a.children;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id,className:clsx$2("denhaag-process-steps__step-details",collapsed&&"denhaag-process-steps__step-details--hidden",className)},children)},StepHeaderToggle=function(_a){var children=_a.children,className=_a.className,ariaControls=_a.ariaControls,expanded=_a.expanded,onClick=_a.onClick,props=__rest$2(_a,["children","className","ariaControls","expanded","onClick"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",__assign$2({"aria-controls":ariaControls,className:clsx$2("utrecht-button","utrecht-button--subtle","denhaag-process-steps__step-header-toggle",className),onClick},props),children,expanded?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChevronUpIcon,{className:clsx$2("denhaag-process-steps__step-header-toggle-icon")}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChevronDownIcon,{className:clsx$2("denhaag-process-steps__step-header-toggle-icon")}))},getLineAppearance=function(_a){var _b=_a.stepStatus,stepStatus=void 0===_b?"not-checked":_b,_c=_a.nextStepStatus,nextStepStatus=void 0===_c?"not-checked":_c;return"checked"===stepStatus&&"error"===nextStepStatus||"checked"===stepStatus&&"warning"===nextStepStatus||"current"===stepStatus&&"error"===nextStepStatus||"current"===stepStatus&&"warning"===nextStepStatus?"checked":"not-checked"===nextStepStatus?"not-checked":stepStatus},StatusStep=function(_a){var _b,_c,_d,_e,step=_a.step,nextStep=_a.nextStep,_f=_a.expanded,expanded=void 0===_f||_f,toggleExpanded=_a.toggleExpanded,nextStatus=expanded&&(null===(_c=null===(_b=step.steps)||void 0===_b?void 0:_b[0])||void 0===_c?void 0:_c.status)||(null==nextStep?void 0:nextStep.status);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Step,{appearance:step.status,current:"current"===step.status},react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepHeader,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMarker,{appearance:step.status},"checked"===step.status?react__WEBPACK_IMPORTED_MODULE_0__.createElement(CheckedIcon,null):"warning"===step.status?react__WEBPACK_IMPORTED_MODULE_0__.createElement(AlertTriangleIcon,null):"error"===step.status?react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloseIcon,null):step.marker),toggleExpanded&&function(step){var _a;return!!(null===(_a=step.steps)||void 0===_a?void 0:_a.length)}(step)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepHeaderToggle,{ariaControls:"".concat(step.id,"--details"),expanded,onClick:toggleExpanded},react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepHeading,{appearance:step.status},step.title)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepHeading,{appearance:step.status},step.title)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepBody,null,nextStep&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMarkerConnector,{from:"main",to:expanded?"nested":"main",appearance:getLineAppearance({stepStatus:step.status,nextStepStatus:nextStatus})}),step.meta&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMeta,null,step.meta),step.date&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMeta,{date:!0},step.date)),(null===(_d=step.steps)||void 0===_d?void 0:_d.length)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepDetails,{id:"".concat(step.id,"--details"),collapsed:!expanded},react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepList,null,null===(_e=step.steps)||void 0===_e?void 0:_e.map((function(substep,index,substeps){var nextSubStep=substeps[index+1],nextStatus=(null==nextSubStep?void 0:nextSubStep.status)||(null==nextStep?void 0:nextStep.status);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubStep,{key:index},react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMarker,{appearance:substep.status,nested:!0},"checked"===substep.status&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(CheckedIcon,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(SubStepHeading,null,substep.title),(nextSubStep||nextStep)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepMarkerConnector,{from:"nested",to:nextSubStep?"nested":"main",appearance:getLineAppearance({stepStatus:substep.status,nextStepStatus:nextStatus})}))})))))},Status=function(_a){var _b=_a.steps,steps=void 0===_b?[]:_b,_c=_a.expandedSteps,initialExpanded=void 0===_c?[]:_c,_d=_a.disabledSteps,disabledSteps=void 0===_d?[]:_d,_e=_a.collapsible,collapsible=void 0!==_e&&_e,_f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialExpanded),expandedSteps=_f[0],setExpandedSteps=_f[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StepList,null,steps.map((function(step,index){var collapsibleStep=collapsible&&!1!==step.collapsible;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatusStep,{key:step.id,step,expanded:!collapsibleStep||expandedSteps.includes(step.id),disabled:disabledSteps.includes(step.id),nextStep:steps[index+1],toggleExpanded:collapsibleStep&&function(){var key,collection,setCollection;key=step.id,setCollection=setExpandedSteps,(collection=expandedSteps).includes(key)?setCollection(collection.filter((function(item){return item!==key}))):setCollection(__spreadArray(__spreadArray([],collection,!0),[key],!1))}})})))};Status.__docgenInfo={description:"",methods:[],displayName:"Status"},Step.__docgenInfo={description:"",methods:[],displayName:"Step"},StepBody.__docgenInfo={description:"",methods:[],displayName:"StepBody"},StepDetails.__docgenInfo={description:"",methods:[],displayName:"StepDetails"},StepHeader.__docgenInfo={description:"",methods:[],displayName:"StepHeader"},StepHeaderToggle.__docgenInfo={description:"",methods:[],displayName:"StepHeaderToggle"},StepHeading.__docgenInfo={description:"",methods:[],displayName:"StepHeading"},StepList.__docgenInfo={description:"",methods:[],displayName:"StepList"},StepMeta.__docgenInfo={description:"",methods:[],displayName:"StepMeta"},SubStep.__docgenInfo={description:"",methods:[],displayName:"SubStep"},SubStepHeading.__docgenInfo={description:"",methods:[],displayName:"SubStepHeading"}}}]);