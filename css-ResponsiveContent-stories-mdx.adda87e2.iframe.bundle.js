(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[7563],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/ResponsiveContent.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var _home_runner_work_denhaag_denhaag_node_modules_pnpm_storybook_addon_docs_7_6_7_types_react_dom_18_2_18_types_react_18_2_47_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../components/ResponsiveContent/dist/mjs/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));function _createMdxContent(props){const _components=Object.assign({h3:"h3",div:"div"},(0,_home_runner_work_denhaag_denhaag_node_modules_pnpm_storybook_addon_docs_7_6_7_types_react_dom_18_2_18_types_react_18_2_47_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"CSS/Page Elements/Responsive Content wrapper"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,{name:"Default",children:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.div,{class:"denhaag-responsive-content",children:"Content Area"})})})]})}const defaultStory=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"denhaag-responsive-content",children:"Content Area"});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <div class="denhaag-responsive-content">Content Area</div>'}};const componentMeta={title:"CSS/Page Elements/Responsive Content wrapper",tags:["stories-mdx"],includeStories:["defaultStory"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_denhaag_denhaag_node_modules_pnpm_storybook_addon_docs_7_6_7_types_react_dom_18_2_18_types_react_18_2_47_react_dom_18_2_0_react_18_2_0_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["defaultStory"]},"../../components/ResponsiveContent/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>ResponsiveContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}var css_248z=".denhaag-responsive-content{--denhaag-responsive-content-padding:var(--denhaag-responsive-content-2xs-padding)}@media (width >= 360px){.denhaag-responsive-content{--denhaag-responsive-content-padding:var(--denhaag-responsive-content-xs-padding)}}@media (width <= 767px){.denhaag-responsive-content{box-sizing:border-box;padding-inline-end:var(--denhaag-responsive-content-padding);padding-inline-start:var(--denhaag-responsive-content-padding);width:100%}}@media (width >= 768px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-sm-max-width);margin-inline-end:auto;margin-inline-start:auto;max-width:100%;width:var(--denhaag-responsive-content-max-width,100%)}}@media (width >= 1024px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-md-max-width)}}@media (width >= 1280px){.denhaag-responsive-content{--denhaag-responsive-content-max-width:var(--denhaag-responsive-content-lg-max-width)}}.denhaag-responsive-content--sidebar{display:flex;gap:32px}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var ResponsiveContent=function(props){var classNames=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-responsive-content",props.className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classNames},props.children)};ResponsiveContent.__docgenInfo={description:"",methods:[],displayName:"ResponsiveContent"}},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);