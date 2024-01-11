"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[8204],{"../../components/TextField/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>TextField,n:()=>TextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign$1=function(){return __assign$1=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign$1.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var css_248z$1='.denhaag-textfield__input,.utrecht-textbox{background-color:var(--utrecht-textbox-background-color,var(--utrecht-form-control-background-color));block-size:auto;border-width:var(--utrecht-textbox-border-width,var(--utrecht-form-control-border-width));border-block-end-width:var(--utrecht-textbox-border-bottom-width,var(--utrecht-textbox-border-width,var(--utrecht-form-control-border-width)));border-color:var(--utrecht-textbox-border-color,var(--utrecht-form-control-border-color));border-radius:var(--utrecht-textbox-border-radius,var(--utrecht-form-control-border-radius,0));border-style:solid;box-sizing:border-box;color:var(--utrecht-textbox-color,var(--utrecht-form-control-color));font-family:var(--utrecht-textbox-font-family,var(--utrecht-form-control-font-family));font-size:var(--utrecht-textbox-font-size,var(--utrecht-form-control-font-size,inherit));font-weight:400;inline-size:100%;line-height:var(--utrecht-textbox-line-height,var(--utrecht-form-control-line-height,initial));max-inline-size:var(--utrecht-textbox-max-inline-size,var(--utrecht-form-control-max-inline-size));padding-block-end:var(--utrecht-textbox-padding-block-end,var(--utrecht-form-control-padding-block-end,0));padding-block-start:var(--utrecht-textbox-padding-block-start,var(--utrecht-form-control-padding-block-start,0));padding-inline-end:var(--utrecht-textbox-padding-inline-end,var(--utrecht-form-control-padding-inline-end,initial));padding-inline-start:var(--utrecht-textbox-padding-inline-start,var(--utrecht-form-control-padding-inline-start,initial))}.denhaag-textfield__input--invalid,.denhaag-textfield__input:invalid,.utrecht-textbox--invalid{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,var(\n      --utrecht-form-control-invalid-border-width,var(--utrecht-textbox-border-width,var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color,var(--utrecht-form-control-invalid-background-color,var(--utrecht-textbox-background-color,var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width,var(--utrecht-form-control-invalid-border-bottom-width,var(--utrecht-textbox-border-bottom-width,var(--utrecht-form-control-border-bottom-width,var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color,var(--utrecht-form-control-invalid-border-color,var(--utrecht-textbox-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color,var(--utrecht-form-control-invalid-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))))}.denhaag-textfield__input--disabled,.denhaag-textfield__input:disabled,.utrecht-textbox--disabled{background-color:var(--utrecht-textbox-disabled-background-color,var(--utrecht-form-control-disabled-background-color,var(--utrecht-textarea-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color,var(--utrecht-form-control-disabled-border-color,var(--utrecht-textarea-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color,var(--utrecht-form-control-disabled-color,var(--utrecht-textarea-color,var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor,not-allowed)}.utrecht-textbox--focus{background-color:var(--utrecht-textbox-focus-background-color,var(--utrecht-form-control-focus-background-color,var(--utrecht-textarea-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color,var(--utrecht-form-control-focus-border-color,var(--utrecht-textarea-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-focus-color,var(--utrecht-form-control-focus-color,var(--utrecht-textarea-color,var(--utrecht-form-control-color))))}.utrecht-textbox--focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width,0) var(--utrecht-focus-inverse-outline-color,transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color,revert);outline-offset:var(--utrecht-focus-outline-offset,revert);outline-style:var(--utrecht-focus-outline-style,revert);outline-width:var(--utrecht-focus-outline-width,revert)}.utrecht-textbox--read-only{background-color:var(--utrecht-textbox-read-only-background-color,var(--utrecht-form-control-read-only-background-color,var(--utrecht-textbox-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color,var(--utrecht-form-control-read-only-border-color,var(--utrecht-textbox-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color,var(--utrecht-form-control-read-only-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))))}.denhaag-textfield__input::placeholder,.utrecht-textbox__placeholder{color:var(--utrecht-textbox-placeholder-color,var(--utrecht-form-control-placeholder-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--numeric{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}.utrecht-textbox--password{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--placeholder-ltr::placeholder,.utrecht-textbox--placeholder-ltr:placeholder-shown{direction:ltr}.utrecht-textbox--placeholder-rtl::placeholder,.utrecht-textbox--placeholder-rtl:placeholder-shown{direction:rtl}.utrecht-textbox--url{font-variant-ligatures:none}.utrecht-textbox--html-input:focus{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width,0) var(--utrecht-focus-inverse-outline-color,transparent);background-color:var(--utrecht-textbox-focus-background-color,var(--utrecht-form-control-focus-background-color,var(--utrecht-textarea-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-focus-border-color,var(--utrecht-form-control-focus-border-color,var(--utrecht-textarea-border-color,var(--utrecht-form-control-border-color))));box-shadow:var(--_utrecht-focus-ring-box-shadow);color:var(--utrecht-textbox-focus-color,var(--utrecht-form-control-focus-color,var(--utrecht-textarea-color,var(--utrecht-form-control-color))));outline-color:var(--utrecht-focus-outline-color,revert);outline-offset:var(--utrecht-focus-outline-offset,revert);outline-style:var(--utrecht-focus-outline-style,revert);outline-width:var(--utrecht-focus-outline-width,revert)}.utrecht-textbox--html-input:focus:not(:focus-visible){box-shadow:none;outline-style:revert}.utrecht-textbox--html-input:invalid,.utrecht-textbox--html-input[aria-invalid=true]{--_utrecht-textbox-border-width:var(\n    --utrecht-textbox-invalid-border-width,var(\n      --utrecht-form-control-invalid-border-width,var(--utrecht-textbox-border-width,var(--utrecht-form-control-border-width))\n    )\n  );background-color:var(--utrecht-textbox-invalid-background-color,var(--utrecht-form-control-invalid-background-color,var(--utrecht-textbox-background-color,var(--utrecht-form-control-background-color))));border-width:var(--_utrecht-textbox-border-width);border-block-end-width:var(--utrecht-textbox-invalid-border-bottom-width,var(--utrecht-form-control-invalid-border-bottom-width,var(--utrecht-textbox-border-bottom-width,var(--utrecht-form-control-border-bottom-width,var(--_utrecht-textbox-border-width)))));border-color:var(--utrecht-textbox-invalid-border-color,var(--utrecht-form-control-invalid-border-color,var(--utrecht-textbox-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-invalid-color,var(--utrecht-form-control-invalid-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:read-only{background-color:var(--utrecht-textbox-read-only-background-color,var(--utrecht-form-control-read-only-background-color,var(--utrecht-textbox-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-read-only-border-color,var(--utrecht-form-control-read-only-border-color,var(--utrecht-textbox-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-read-only-color,var(--utrecht-form-control-read-only-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))))}.utrecht-textbox--html-input:disabled{background-color:var(--utrecht-textbox-disabled-background-color,var(--utrecht-form-control-disabled-background-color,var(--utrecht-textarea-background-color,var(--utrecht-form-control-background-color))));border-color:var(--utrecht-textbox-disabled-border-color,var(--utrecht-form-control-disabled-border-color,var(--utrecht-textarea-border-color,var(--utrecht-form-control-border-color))));color:var(--utrecht-textbox-disabled-color,var(--utrecht-form-control-disabled-color,var(--utrecht-textarea-color,var(--utrecht-form-control-color))));cursor:var(--utrecht-action-disabled-cursor,not-allowed)}.utrecht-textbox--html-input::placeholder{color:var(--utrecht-textbox-placeholder-color,var(--utrecht-form-control-placeholder-color,var(--utrecht-textbox-color,var(--utrecht-form-control-color))));font-style:var(--utrecht-form-control-placeholder-font-style);opacity:100%}.utrecht-textbox--html-input[type=password i]{font-variant-ligatures:none;font-variant-numeric:slashed-zero}.utrecht-textbox--html-input[inputMode=email i],.utrecht-textbox--html-input[inputMode=url i],.utrecht-textbox--html-input[type=email i],.utrecht-textbox--html-input[type=url i]{font-variant-ligatures:none}.utrecht-textbox--html-input[inputMode=decimal i],.utrecht-textbox--html-input[inputMode=numeric i],.utrecht-textbox--html-input[inputMode=tel i],.utrecht-textbox--html-input[pattern="[0-9]*"],.utrecht-textbox--html-input[pattern="\\\\d*"],.utrecht-textbox--html-input[type=number i],.utrecht-textbox--html-input[type=tel i]{-moz-appearance:textfield;font-variant-numeric:lining-nums tabular-nums}.denhaag-textfield{display:inline-block;margin-block-end:var(--denhaag-form-input-margin-block-end);margin-block-start:var(--denhaag-form-input-margin-block-start);position:relative;width:100%}.denhaag-textfield--focus-within:after,.denhaag-textfield:focus-within:after{border:var(--denhaag-focus-border);border-radius:var(--denhaag-border-radius);bottom:-2px;content:"";display:block;left:-2px;position:absolute;right:-2px;top:-2px}.denhaag-textfield__input{line-height:var(--denhaag-form-input-line-height);margin-block-end:0;margin-block-start:0}.denhaag-textfield__input:focus{outline:none}.denhaag-textfield__input:focus-visible{outline:none}.denhaag-textfield__input--disabled::placeholder,.denhaag-textfield__input:disabled::placeholder{color:var(--utrecht-form-control-disabled-color)}.denhaag-textfield__input--invalid,.denhaag-textfield__input:invalid{padding-inline-end:calc(var(--utrecht-form-control-padding-inline-end)*2 + var(--denhaag-form-input-icon-font-size)*2)}.denhaag-textfield__icons{align-items:center;color:var(--utrecht-form-control-color);column-gap:8px;display:flex;flex-direction:row;height:100%;padding-inline-end:var(--utrecht-form-control-padding-inline-end);position:absolute;right:0;top:0}.denhaag-textfield__icons svg{font-size:var(--denhaag-form-input-icon-font-size)}.denhaag-textfield__invalid-icon{color:var(--utrecht-form-control-invalid-border-color)}.denhaag-textfield__input--disabled~.denhaag-textfield__icons svg,.denhaag-textfield__input:disabled~.denhaag-textfield__icons svg{color:var(--utrecht-form-control-disabled-color);cursor:var(--utrecht-action-disabled-cursor)}';const head$1=document.head||document.getElementsByTagName("head")[0],style$1=document.createElement("style");function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}style$1.type="text/css",style$1.nonce=window.NONCE,head$1.appendChild(style$1),style$1.styleSheet?style$1.styleSheet.cssText=css_248z$1:style$1.appendChild(document.createTextNode(css_248z$1));var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}"function"==typeof SuppressedError&&SuppressedError;var SvgIcon=function(_a){var _b,className=_a.className,_c=_a.component,component=void 0===_c?"svg":_c,_d=_a.focusable,focusable=void 0===_d?"false":_d,_e=_a.shapeRendering,shapeRendering=void 0===_e?"auto":_e,_f=_a.useDefaultClass,useDefaultClass=void 0===_f||_f,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["className","component","focusable","shapeRendering","useDefaultClass"]),iconClassName=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}({"denhaag-icon":useDefaultClass},className),Component=component;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,__assign({className:iconClassName,focusable,"aria-hidden":null===(_b=props["aria-hidden"])||void 0===_b||_b,shapeRendering},props),props.children)},css_248z=".denhaag-icon{fill:currentcolor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");var _path$s,_path2$9;function _extends$s(){return _extends$s=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$s.apply(this,arguments)}style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var SvgCircleWarning=function SvgCircleWarning(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$s({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},props),_path$s||(_path$s=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"})),_path2$9||(_path2$9=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1ZM10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"})))},Memo$s=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCircleWarning),CircleWarningIcon=function(props){return function(svg,props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SvgIcon,__assign({component:svg},props))}(Memo$s,props)},TextField=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function DenHaagTextField(props,ref){var inputClasses=function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-textfield__input",{"denhaag-textfield__input--invalid":props.invalid,"denhaag-textfield__input--disabled":props.disabled}),invalidIcon=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(props.invalidIcon||react__WEBPACK_IMPORTED_MODULE_0__.createElement(CircleWarningIcon,null),{className:"denhaag-textfield__invalid-icon"});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"denhaag-textfield"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",__assign$1({className:inputClasses,ref,"aria-invalid":props.invalid||void 0},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"denhaag-textfield__icons"},props.invalid&&invalidIcon,props.icon))}));TextField.__docgenInfo={description:"",methods:[],displayName:"TextField"}}}]);