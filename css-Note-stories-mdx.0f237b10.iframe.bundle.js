(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[8518],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/Note.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,ariaLive:()=>ariaLive,default:()=>Note_stories,defaultStory:()=>defaultStory,iconLink:()=>iconLink,info:()=>info,long:()=>Note_stories_long,warning:()=>warning});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/Icons/dist/mjs/index.js"),__webpack_require__("../../components/Link/dist/mjs/index.js"),__webpack_require__("../../components/Note/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/note","i8":"0.1.1-alpha.276"}'),README_namespaceObject="# Note\n\n![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/button?logo=npm&style=flat-square)\n![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)\n\n## Introduction\n\nThe note shows a message that is important and should stand out for users to notice.\n\n## When to use\n\nUse notes when you need to inform or warn users about something important, such as exceptions or something not to forget to bring to an appointment. Notes can always be found in the body of a page.\n\n## Alternatives and related components\n\n• Use an alert to inform users of important changes, ongoing circumstances, updates or changes to system status and if you need to communicate prominently.\n\n## Anatomy\n\nThe note consists of:\n\n1. Icon: shows what kind of note it is.\n2. Text: provides information about the note.\n\n## (Interactive) states\n\nNone.\n\n## Design properties\n\n### Typography\n\n- Text: TheSans/md/400\n\n### Colors\n\n- Icon: info svg color Blue/3, warning svg color Orange/3\n- Text: text color Grey/4\n\n### Structure\n\n- Icon: height and width 24px, padding-right 8px\n- Text: padding-top and padding-bottom 4px\n\n## Accessibility\n\nDo not use in CMS template ‘Area live attribute’\n\n## Content guidelines\n\n- Notes should describe briefly and succinctly what matters.\n- Limit the text to one or two short sentences.\n\n## Best practices\n\n### Do's\n\nNotes should:\n\n- Explain in as few sentences as possible what it is about.\n- Appear in the body of a page.\n- Used carefully and sparingly for only important information.\n- Use the default icons for info and warning statuses.\n\n### Don'ts\n\nNotes should:\n\n- Not be shown in forms if, for example, there is an error.\n- Not show the same information that is already in the body text.\n- Not be used more than 2x on a page because otherwise it will get too much emphasis and the rest of the text will get less attention\n- Not rely on colour alone to convey meaning or tone.\n- Not be used for subsequent action. No button may be placed below it.\n\n## Usage\n\n- Info: Provide additional information to users.\n- Warning: Warn users about important information.\n\n## References\n\nhttps://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8123%3A24065\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",div:"div",svg:"svg",path:"path",p:"p",code:"code",a:"a",span:"span"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Surfaces/Note",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note",role:"note",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)(_components.div,{children:"Note"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Info",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note denhaag-note--info",role:"note",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Info:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#1261A3",stroke:"#1261A3","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)(_components.div,{children:"Note info"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Warning",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note denhaag-note--warning",role:"note",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Warning:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{fill:"#F18700",stroke:"#F18700","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 17.5H12.01"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.5V13.5"})]}),(0,jsx_runtime.jsx)(_components.div,{children:"Note warning"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"aria-live",children:"Aria Live"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["In case the note has been applied as reference in a form and will be updated by javascript, apply ",(0,jsx_runtime.jsx)(_components.code,{children:'aria-live="polite"'})," and ",(0,jsx_runtime.jsx)(_components.code,{children:'aria-atomic=true"'})," to the component.\nThis way screenreaders will re-read the element when the component has been updated."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Aria Live",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)(_components.div,{children:"Note"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long",children:"Long"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Long",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note",role:"note",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsxs)(_components.div,{children:["Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo. Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in nisl scelerisque lacinia."," ",(0,jsx_runtime.jsx)(_components.a,{href:"https://denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)(_components.span,{children:"Den Haag website"})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"icon-link",children:"Icon link"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Icon link",children:()=>(0,jsx_runtime.jsxs)(_components.div,{class:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[(0,jsx_runtime.jsxs)(_components.svg,{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)(_components.path,{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)(_components.path,{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsxs)(_components.div,{children:["Note with an link with icon"," ",(0,jsx_runtime.jsxs)(_components.a,{href:"#example-link",tabindex:"0",class:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end",children:[(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-link__icon",children:(0,jsx_runtime.jsx)(_components.svg,{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:(0,jsx_runtime.jsx)(_components.path,{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)(_components.span,{children:"Link with icon after"})]})]})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note",role:"note",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)("div",{children:"Note"})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <div class="denhaag-note" role="note">\n        <svg aria-label="Note:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />\n        </svg>\n        <div>Note</div>\n      </div>'}};const info=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note denhaag-note--info",role:"note",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Info:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#1261A3",stroke:"#1261A3","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)("div",{children:"Note info"})]});info.storyName="Info",info.parameters={storySource:{source:'() => <div class="denhaag-note denhaag-note--info" role="note">\n        <svg aria-label="Info:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#1261A3" stroke="#1261A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n          <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />\n          <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />\n        </svg>\n        <div>Note info</div>\n      </div>'}};const warning=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note denhaag-note--warning",role:"note",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Warning:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{fill:"#F18700",stroke:"#F18700","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 17.5H12.01"}),(0,jsx_runtime.jsx)("path",{fill:"#fff",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9.5V13.5"})]}),(0,jsx_runtime.jsx)("div",{children:"Note warning"})]});warning.storyName="Warning",warning.parameters={storySource:{source:'() => <div class="denhaag-note denhaag-note--warning" role="note">\n        <svg aria-label="Warning:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path fill="#F18700" stroke="#F18700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z" />\n          <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 17.5H12.01" />\n          <path fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 9.5V13.5" />\n        </svg>\n        <div>Note warning</div>\n      </div>'}};const ariaLive=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsx)("div",{children:"Note"})]});ariaLive.storyName="Aria Live",ariaLive.parameters={storySource:{source:'() => <div class="denhaag-note" role="note" aria-atomic="true" aria-live="polite">\n        <svg aria-label="Note:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />\n        </svg>\n        <div>Note</div>\n      </div>'}};const Note_stories_long=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note",role:"note",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsxs)("div",{children:["Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo. Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in nisl scelerisque lacinia."," ",(0,jsx_runtime.jsx)("a",{href:"https://denhaag.nl",class:"denhaag-link",children:(0,jsx_runtime.jsx)("span",{children:"Den Haag website"})})]})]});Note_stories_long.storyName="Long",Note_stories_long.parameters={storySource:{source:'() => <div class="denhaag-note" role="note">\n        <svg aria-label="Note:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />\n        </svg>\n        <div>\n          Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo.\n          Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in\n          nisl scelerisque lacinia.{" "}\n          <a href="https://denhaag.nl" class="denhaag-link">\n            <span>Den Haag website</span>\n          </a>\n        </div>\n      </div>'}};const iconLink=()=>(0,jsx_runtime.jsxs)("div",{class:"denhaag-note",role:"note","aria-atomic":"true","aria-live":"polite",children:[(0,jsx_runtime.jsxs)("svg",{"aria-label":"Note:",role:"img",class:"denhaag-note__icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z",fill:"#F1F1F1",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V12.5"}),(0,jsx_runtime.jsx)("path",{fill:"#4B4B4B",stroke:"#4B4B4B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.5H12.01"})]}),(0,jsx_runtime.jsxs)("div",{children:["Note with an link with icon"," ",(0,jsx_runtime.jsxs)("a",{href:"#example-link",tabindex:"0",class:"denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end",children:[(0,jsx_runtime.jsx)("span",{class:"denhaag-link__icon",children:(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"denhaag-icon",focusable:"false","aria-hidden":"true","shape-rendering":"auto",children:(0,jsx_runtime.jsx)("path",{d:"M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",fill:"currentColor"})})}),(0,jsx_runtime.jsx)("span",{children:"Link with icon after"})]})]})]});iconLink.storyName="Icon link",iconLink.parameters={storySource:{source:'() => <div class="denhaag-note" role="note" aria-atomic="true" aria-live="polite">\n        <svg aria-label="Note:" role="img" class="denhaag-note__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#F1F1F1" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V12.5" />\n          <path fill="#4B4B4B" stroke="#4B4B4B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8.5H12.01" />\n        </svg>\n        <div>\n          Note with an link with icon{" "}\n          <a href="#example-link" tabindex="0" class="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end">\n            <span class="denhaag-link__icon">\n              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="denhaag-icon" focusable="false" aria-hidden="true" shape-rendering="auto">\n                <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill="currentColor"></path>\n              </svg>\n            </span>\n            <span>Link with icon after</span>\n          </a>\n        </div>\n      </div>'}};const componentMeta={title:"CSS/Surfaces/Note",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["defaultStory","info","warning","ariaLive","long","iconLink"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const Note_stories=componentMeta,__namedExportsOrder=["defaultStory","info","warning","ariaLive","long","iconLink"]},"../../components/Link/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var css_248z=".denhaag-link{color:var(--denhaag-link-color);cursor:var(--denhaag-link-cursor,pointer);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding-inline-end:var(--denhaag-link-padding-inline-end,0);padding-inline-start:var(--denhaag-link-padding-inline-start,0);position:relative;text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon{align-items:center;display:inline-flex;gap:var(--denhaag-link-icon-gap);text-decoration:none;vertical-align:var(--denhaag-link-with-icon-vertical-align,baseline)}.denhaag-link--with-small-icon{--denhaag-link-icon-font-size:var(--denhaag-link-small-icon-font-size);--denhaag-link-icon-size:var(--denhaag-link-small-icon-size)}.denhaag-link--with-icon-start{--denhaag-link-icon-order:0;--denhaag-link-padding-inline-start:0}.denhaag-link--external,.denhaag-link--focus,.denhaag-link--hover,.denhaag-link:focus-visible,.denhaag-link:hover{text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon-end{--denhaag-link-icon-order:2;--denhaag-link-padding-inline-end:0}.denhaag-link--external{--denhaag-link-icon-align:var(--denhaag-link-external-icon-align)}.denhaag-link--focus,.denhaag-link:focus-visible{--denhaag-link-color:var(--denhaag-link-focus-color);outline:var(--denhaag-link-focus-outline)}.denhaag-link--hover,.denhaag-link:hover{--denhaag-link-color:var(--denhaag-link-hover-color);--denhaag-link-cursor:pointer}.denhaag-link--disabled,.denhaag-link--disabled--hover,.denhaag-link--disabled:hover{--denhaag-link-color:var(--denhaag-link-disabled-color);--denhaag-link-cursor:none;pointer-events:none}.denhaag-link__icon{align-items:var(--denhaag-link-icon-align);display:inline-flex;height:var(--denhaag-link-icon-size);justify-content:center;order:var(--denhaag-link-icon-order,0);position:relative;vertical-align:text-top;width:var(--denhaag-link-icon-size)}li .denhaag-link__icon{align-self:start;flex:1 0 auto}.denhaag-link__icon>:first-child{aspect-ratio:1/1;font-size:var(--denhaag-link-icon-font-size);height:var(--denhaag-link-icon-size);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--denhaag-link-icon-size)}.denhaag-link__sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin-block-end:-1px;margin-block-start:-1px;margin-inline-end:-1px;margin-inline-start:-1px;overflow:hidden;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0;position:absolute;width:1px}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z));var Link=function(_a){var href=_a.href,id=_a.id,_b=_a.children,children=void 0===_b?void 0:_b,_c=_a.disabled,disabled=void 0!==_c&&_c,_d=_a.icon,icon=void 0===_d?void 0:_d,_e=_a.iconAlign,iconAlign=void 0===_e?"end":_e,_f=_a.tabIndex,tabIndex=void 0===_f?0:_f,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["href","id","children","disabled","icon","iconAlign","tabIndex"]),rootClassNames=clsx("denhaag-link",{"denhaag-link--disabled":disabled,"denhaag-link--with-icon":void 0!==icon,"denhaag-link--with-icon-start":void 0!==icon&&"start"===iconAlign,"denhaag-link--with-icon-end":void 0!==icon&&"end"===iconAlign},props.className),iconClassName=clsx("denhaag-link__icon"),iconWrapped=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:iconClassName},icon);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",__assign({id,href,tabIndex:disabled?-1:tabIndex},props,{className:rootClassNames}),void 0!==icon&&"start"===iconAlign?iconWrapped:"",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,children),void 0!==icon&&"end"===iconAlign?iconWrapped:"")};Link.__docgenInfo={description:"An easily customizable anchor element.\n@param props The properties of a Link component.\n@constructor Constructs an instance of Link.",methods:[],displayName:"Link"}},"../../components/Note/dist/mjs/index.js":()=>{var css_248z=".denhaag-note{align-items:flex-start;color:var(--denhaag-note-color);display:flex;flex-direction:row;font-family:var(--denhaag-note-font-family,inherit);font-size:var(--denhaag-note-font-size,1.125em);font-weight:var(--denhaag-note-font-weight,normal);gap:var(--denhaag-note-icon-spacing);line-height:var(--denhaag-note-line-height,1.3);padding-block-end:var(--denhaag-note-padding-block,calc(var(--denhaag-note-icon-spacing)/2));padding-block-start:var(--denhaag-note-padding-block,calc(var(--denhaag-note-icon-spacing)/2))}.denhaag-note>svg,.denhaag-note__icon{aspect-ratio:1/1;color:var(--denhaag-note-icon-color,#4b4b4b);flex:0 0 auto;height:auto;width:var(--denhaag-note-icon-size,calc(var(--denhaag-note-icon-spacing)*3))}.denhaag-note--info{--denhaag-note-icon-color:var(--denhaag-note-icon-info-color,#fff)}.denhaag-note--warning{--denhaag-note-icon-color:var(--denhaag-note-icon-warning-color,#fff)}.denhaag-note .denhaag-link--with-icon-end{margin-inline-end:var(--denhaag-note-icon-end-margin-inline-end)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);