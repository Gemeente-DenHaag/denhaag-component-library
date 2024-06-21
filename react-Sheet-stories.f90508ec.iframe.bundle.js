"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[6362],{"./src/react/Sheet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MobileDialog:()=>MobileDialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sheet_stories});var react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),mjs=__webpack_require__("../../components/Icons/dist/mjs/index.js"),dist_mjs=__webpack_require__("../../components/IconButton/dist/mjs/index.js"),css_248z=".denhaag-sheet{background-color:var(--denhaag-sheet-background-color);left:var(--denhaag-sheet-left);margin-block-start:var(--denhaag-sheet-margin-block-start);min-height:var(--denhaag-sheet-min-height);overflow-x:var(--denhaag-sheet-overflow-x);position:var(--denhaag-sheet-position);top:var(--denhaag-sheet-top);width:var(--denhaag-sheet-width);z-index:var(--denhaag-sheet-z-index)}.denhaag-sheet.denhaag-sheet--dialog{border:var(--denhaag-sheet-dialog-border);margin-block-start:var(--denhaag-sheet-dialog-margin-block-start);max-height:var(--denhaag-sheet-dialog-max-height);max-width:var(--denhaag-sheet-dialog-max-width);overflow-y:var(--denhaag-sheet-dialog-overflow-y);padding-block-end:var(--denhaag-sheet-dialog-padding-block-end);padding-block-start:var(--denhaag-sheet-dialog-padding-block-start);padding-inline-end:var(--denhaag-sheet-dialog-padding-inline-end);padding-inline-start:var(--denhaag-sheet-dialog-padding-inline-start);top:var(--denhaag-sheet-dialog-top)}.denhaag-sheet.denhaag-sheet--dialog::backdrop{top:var(--denhaag-sheet-dialog-backdrop-top)}@media (width >= 1024px){.denhaag-sheet{min-height:var(--denhaag-sheet-desktop-min-height);padding-block-start:var(--denhaag-sheet-desktop-padding-block-start);top:var(--denhaag-sheet-desktop-top)}}.denhaag-sheet__close-button{float:var(--denhaag-sheet-close-button-float)}.denhaag-sheet__container{margin-block-end:var(--denhaag-sheet-container-margin-block-end)}.denhaag-sheet__container-menu{display:var(--denhaag-sheet-container-menu-display)}.denhaag-sheet-overlay{background-color:var(--denhaag-sheet-overlay-background-color);height:var(--denhaag-sheet-overlay-height);left:var(--denhaag-sheet-overlay-left);position:var(--denhaag-sheet-overlay-position);top:calc(var(--denhaag-sheet-overlay-top) + var(--denhaag-sheet-margin-block-start));width:var(--denhaag-sheet-overlay-width);z-index:var(--denhaag-sheet-overlay-z-index)}@media (width >= 768px){.denhaag-sheet-overlay{top:calc(var(--denhaag-sheet-overlay-tablet-top) + var(--denhaag-sheet-margin-block-start))}}@media (width >= 1024px){.denhaag-sheet-overlay{top:calc(var(--denhaag-sheet-overlay-desktop-top) + var(--denhaag-sheet-margin-block-start))}}.denhaag-sheet .denhaag-sheet-title{--utrecht-paragraph-font-size:var(--denhaag-sheet-title-font-size);--utrecht-paragraph-font-weight:var(--denhaag-sheet-title-font-weight);--utrecht-paragraph-margin-block-end:var(--denhaag-sheet-title-margin-block-end)}";if("undefined"!=typeof document){const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))}var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var Sheet=function(props){var className=clsx("denhaag-sheet",props.className);return react.createElement("div",__assign({},props,{className}),props.children)},SheetDialog=react.forwardRef((function(props,ref){var className=clsx("denhaag-sheet denhaag-sheet--dialog",props.className);return react.createElement("dialog",__assign({},props,{className,ref}),props.children)}));SheetDialog.displayName="SheetDialog";var SheetContainer=function(props){var className=clsx("denhaag-sheet__container",props.className);return react.createElement("div",__assign({},props,{className}),props.children)};Sheet.__docgenInfo={description:"",methods:[],displayName:"Sheet"},SheetContainer.__docgenInfo={description:"",methods:[],displayName:"SheetContainer"},SheetDialog.__docgenInfo={description:"",methods:[],displayName:"SheetDialog"};var ResponsiveContent_dist_mjs=__webpack_require__("../../components/ResponsiveContent/dist/mjs/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const Sheet_stories={id:"react-page-elements-sheet",title:"React/Page Elements/Sheet",component:Sheet,args:{children:"Sheet"},tags:["autodocs"],parameters:{docs:{description:{component:"# Sheet\n\n## When to use\n\nUse sheets when expanding menu links or when opening a function that will be hidden and shown on the same page. So you can use it to show the topics, for the language switcher or for the search.\n\n## When not to use\n\nDo not use sheets for other dropdowns than the ones in the menu.\n\n## Anatomy\n\nThe Sheet consists of:\n\n## (Interactive) states\n\nThe Sheet contains the states\n\n## Design properties\n\n### Typography\n\n### Colors\n\n### Structure\n\n## Best practices\n\n### Do's\n\nThe sheet uses the entire width of the screen.\nPlace the sheet under the menu. The menu must always remain visible.\nAlways offers a closing option of the sheet. This can be done with the cross or by clicking on everything outside the sheet.\nAvoid scrolling in a sheet. Make sure the information is concise and if the content is long, the height of the sheet should be increased.\nHorizontal scrolling in sheets is not possible.\nSheets can display a wide variety of content and layouts, ranging from a list of actions to additional content in a table.\n\n### Don'ts\n\nTekst\n\n## Content guidelines\n\n## Accessibility\n\n## References\n\nhttps://material.io/components/sheets-side#usage\n"}}}},Default={render:()=>(0,jsx_runtime.jsx)(Sheet,{children:(0,jsx_runtime.jsxs)(ResponsiveContent_dist_mjs.u,{children:[(0,jsx_runtime.jsx)(dist_mjs.K,{className:"denhaag-sheet__close-button",children:(0,jsx_runtime.jsx)(mjs.CloseIcon,{})}),(0,jsx_runtime.jsx)(SheetContainer,{children:"Content"})]})})},MobileDialog={render:()=>(0,jsx_runtime.jsx)(SheetDialog,{open:!0,children:(0,jsx_runtime.jsx)(ResponsiveContent_dist_mjs.u,{children:"Content"})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => <Sheet>\n      <ResponsiveContent>\n        <IconButton className="denhaag-sheet__close-button">\n          <CloseIcon />\n        </IconButton>\n        <SheetContainer>Content</SheetContainer>\n      </ResponsiveContent>\n    </Sheet>\n}',...Default.parameters?.docs?.source}}},MobileDialog.parameters={...MobileDialog.parameters,docs:{...MobileDialog.parameters?.docs,source:{originalSource:"{\n  render: () => <SheetDialog open>\n      <ResponsiveContent>Content</ResponsiveContent>\n    </SheetDialog>\n}",...MobileDialog.parameters?.docs?.source}}};const __namedExportsOrder=["Default","MobileDialog"]},"../../components/IconButton/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconButton,K:()=>IconButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var css_248z=".denhaag-icon-button{appearance:none;background-color:transparent;border:0;border-radius:0;color:var(--denhaag-icon-button-color);cursor:pointer;display:inline-flex;outline:0;padding-block-end:var(--denhaag-icon-button-padding-block-end);padding-block-start:var(--denhaag-icon-button-padding-block-start);padding-inline-end:var(--denhaag-icon-button-padding-inline-end);padding-inline-start:var(--denhaag-icon-button-padding-inline-start)}.denhaag-icon-button--hover,.denhaag-icon-button:hover{color:var(--denhaag-icon-button-hover-color)}.denhaag-icon-button--focus,.denhaag-icon-button:focus-visible{color:var(--denhaag-icon-button-focus-color);outline-color:var(--denhaag-icon-button-focus-outline-color);outline-offset:var(--denhaag-icon-button-focus-outline-offset);outline-style:var(--denhaag-icon-button-focus-outline-style);outline-width:var(--denhaag-icon-button-focus-outline-width)}";if("undefined"!=typeof document){const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}var IconButton=function(_a){var props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,[]),rootClassNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-icon-button",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",__assign({},props,{className:rootClassNames}),props.children)};IconButton.__docgenInfo={description:"Displays a Button with an Icon as content.\n@param props The properties of an IconButton component.\n@constructor Constructs an instance of IconButton.",methods:[],displayName:"IconButton"}},"../../components/ResponsiveContent/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>ResponsiveContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}var css_248z=".denhaag-responsive-content{--denhaag-responsive-content-padding:var(--denhaag-responsive-content-2xs-padding)}@media (width >= 360px){.denhaag-responsive-content{--denhaag-responsive-content-padding:var(--denhaag-responsive-content-xs-padding)}}@media (width <= 767px){.denhaag-responsive-content{box-sizing:border-box;padding-inline-end:var(--denhaag-responsive-content-padding);padding-inline-start:var(--denhaag-responsive-content-padding);width:100%}}@media (width >= 768px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-sm-max-width);margin-inline-end:auto;margin-inline-start:auto;max-width:100%;width:var(--denhaag-responsive-content-max-width,100%)}}@media (width >= 1024px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-md-max-width)}}@media (width >= 1280px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-lg-max-width)}}.denhaag-responsive-content--sidebar{display:flex;gap:32px}";if("undefined"!=typeof document){const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))}var ResponsiveContent=function(props){var classNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-responsive-content",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)};ResponsiveContent.__docgenInfo={description:"",methods:[],displayName:"ResponsiveContent"}}}]);