(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[9953],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/css/CtaLink.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>CtaLink_stories,defaultStory:()=>defaultStory,focused:()=>focused,grouped:()=>grouped,hovered:()=>hovered,long:()=>CtaLink_stories_long,video:()=>video});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.7_@types+react-dom@18.2.18_@types+react@18.2.47_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("../../components/CtaLink/dist/mjs/index.js");const package_namespaceObject=JSON.parse('{"u2":"@gemeente-denhaag/ctalink","i8":"0.1.1-alpha.278"}'),README_namespaceObject="# Call To Action Link\n\nA CTA icon is a standalone link that links to another page within the website or an external website related to the current page or to a video.\n\n## When to use\n\nCTA links are used as navigational elements and are used on their own. They provide a middleweight option for navigation and stand out more than the normal links so use it sparingly. Like other interactive elements, too many CTA icons will clutter a page and make it difficult for users to identify their next steps.\n\nUse CTA links when you want users to:\n\n- Navigate to a page or entirely different site that can also be viewed (see also - variant);\n- Navigate to a website where a video is shown (such as YouTube or Vimeo);\n\n## Alternatives and related components\n\n- Use links for navigation actions that appear within or immediately after a sentence.\n- Use calendar events when you link to an event.\n- Use a download when there is a file to download.\n- Use a CTA image when there is a link in conjunction with an image.\n\n## Anatomy\n\nThe CTA links consists of:\n\n- Support icon: informs users at a glance about the type of the CTA;\n- Text: additional information about the link;\n- Link: shows the name of the page where it is being linked to;\n- Container\n\n## (Interactive) states\n\nThe CTA links contains the states normal, hover and focus.\n\n## Design properties\n\n### Typography\n\n- Text: TheSans/lg/400\n- Link: TheSans/lg/700\n\n### Colors\n\n- Supportive icon: background-color Blue/3, icon svg color white\n- Text: text color Grey/4\n- Link: text color Blue/3\n- Container: border-top and border-bottom line color Grey/2\n\n### Interactive states\n\n#### Hover:\n\nlink text color Blue/4, supportive icon background-color Blue/4\n\n#### Focus:\n\nlink text color Blue/4, supportive icon background-color Blue/4, container border color Ocher/5\n\n### Structure\n\n- Supportive icon: background circle size 64px, icon size 24px, padding-left 16px, padding-right 24px\n- Text and link: padding-right 16px\n- Container: padding-top and padding-bottom 24px, border line 1px\n\n## Accessibility\n\n[technical requirements]\n\n## Content guidelines\n\n### Text\n\n_See also variant_\n\nThe text should:\n\n- Be supportive to the link.\n- Briefly provide context to the surrounding text as needed.\n- Be able for users to anticipate what will happen when they click on the CTA icon.\n- Always start with ‘Zie ook:’.\n\n### Video variant\n\nThe text should:\n\n- Be supportive to the link.\n- Start with a link when referring to a video.\n- Be able for users to anticipate what will happen when they click on the CTA link.\n- Be scannable avoiding unnecessary words.\n- Briefly provide context to the surrounding text as needed.\n- Always start with ‘Bekijk’.\n\n### Link\n\n_See also variant_\n\nThe link should:\n\n- Must show a short and clear page name being linked to.\n\n#### Video variant\n\nThe link should:\n\n- Provide enough context use the {verb}+{noun} format unless the action is clear with a single verb.\n\n## Best practices\n\n### Do's\n\nCTA links should:\n\n- Link to a page related to the current page;\n- Link to a video;\n- Be placed under or between a text (usually in a list);\n- Be placed below each other if there are several CTA links;\n\n### Don'ts\n\nCTA links should:\n\n- Not be used as a standalone link like ‘Learn more’ or ‘Forgot password?’;\n- Not contain more than 3 CTA link in a row;\n\n### Logic\n\n- Always show the first and current page\n- Only use the collapsed icon if there are more than 4 pages.\n- If the collapsed icon is used, always show on the right side the underlying page and next to this the current page.\n  - If there are for example 5 pages, then show the homepage (1), hide the 2nd and 3rd page and show the 4th and current page (5).\n  - If there are for example 6 pages, then show the homepage\n\n## References\n\n- [Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=8105%3A21885)\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",h3:"h3",a:"a",div:"div",svg:"svg",path:"path",p:"p",span:"span"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"CSS/Actions/CTA Link",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}}}),"\n",(0,jsx_runtime.jsx)(dist.dk,{markdown:README_namespaceObject}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"stories",children:"Stories"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",children:()=>(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hovered",children:"Hovered"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Hovered",children:()=>(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link denhaag-cta-link--hover",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"focused",children:"Focused"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Focused",children:()=>(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link denhaag-cta-link--focus",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"grouped",children:"Grouped"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Grouped",children:()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"long",children:"Long"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Long",children:()=>(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:["Zie ook:"," ",(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"video",children:"Video"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{name:"Video",children:()=>(0,jsx_runtime.jsxs)(_components.a,{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)(_components.div,{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)(_components.svg,{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)(_components.path,{d:"M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)(_components.p,{class:"denhaag-cta-link__excerpt",children:[(0,jsx_runtime.jsx)(_components.span,{class:"denhaag-cta-link__highlight",children:"Bekijk"})," een lange tekst over de video"]})]})})})]})}const defaultStory=()=>(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:'() => <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n        <div class="denhaag-cta-link__dot">\n          <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n          </svg>\n        </div>\n        <p class="denhaag-cta-link__excerpt">\n          Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n        </p>\n      </a>'}};const hovered=()=>(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link denhaag-cta-link--hover",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]});hovered.storyName="Hovered",hovered.parameters={storySource:{source:'() => <a class="denhaag-cta-link denhaag-cta-link--hover" href="#example-url" rel="nofollow noopener">\n        <div class="denhaag-cta-link__dot">\n          <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n          </svg>\n        </div>\n        <p class="denhaag-cta-link__excerpt">\n          Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n        </p>\n      </a>'}};const focused=()=>(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link denhaag-cta-link--focus",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]});focused.storyName="Focused",focused.parameters={storySource:{source:'() => <a class="denhaag-cta-link denhaag-cta-link--focus" href="#example-url" rel="nofollow noopener">\n        <div class="denhaag-cta-link__dot">\n          <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n          </svg>\n        </div>\n        <p class="denhaag-cta-link__excerpt">\n          Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n        </p>\n      </a>'}};const grouped=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]}),(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook: ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Met een link"})]})]})]});grouped.storyName="Grouped",grouped.parameters={storySource:{source:'() => <>\n        <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n          <div class="denhaag-cta-link__dot">\n            <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n              <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n            </svg>\n          </div>\n          <p class="denhaag-cta-link__excerpt">\n            Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n          </p>\n        </a>\n        <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n          <div class="denhaag-cta-link__dot">\n            <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n              <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n            </svg>\n          </div>\n          <p class="denhaag-cta-link__excerpt">\n            Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n          </p>\n        </a>\n        <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n          <div class="denhaag-cta-link__dot">\n            <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n              <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n            </svg>\n          </div>\n          <p class="denhaag-cta-link__excerpt">\n            Zie ook: <span class="denhaag-cta-link__highlight">Met een link</span>\n          </p>\n        </a>\n      </>'}};const CtaLink_stories_long=()=>(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:["Zie ook:"," ",(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et"})]})]});CtaLink_stories_long.storyName="Long",CtaLink_stories_long.parameters={storySource:{source:'() => <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n        <div class="denhaag-cta-link__dot">\n          <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="currentColor" />\n          </svg>\n        </div>\n        <p class="denhaag-cta-link__excerpt">\n          Zie ook:{" "}\n          <span class="denhaag-cta-link__highlight">\n            Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et\n          </span>\n        </p>\n      </a>'}};const video=()=>(0,jsx_runtime.jsxs)("a",{class:"denhaag-cta-link",href:"#example-url",rel:"nofollow noopener",children:[(0,jsx_runtime.jsx)("div",{class:"denhaag-cta-link__dot",children:(0,jsx_runtime.jsx)("svg",{class:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,jsx_runtime.jsx)("path",{d:"M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z",fill:"currentColor"})})}),(0,jsx_runtime.jsxs)("p",{class:"denhaag-cta-link__excerpt",children:[(0,jsx_runtime.jsx)("span",{class:"denhaag-cta-link__highlight",children:"Bekijk"})," een lange tekst over de video"]})]});video.storyName="Video",video.parameters={storySource:{source:'() => <a class="denhaag-cta-link" href="#example-url" rel="nofollow noopener">\n        <div class="denhaag-cta-link__dot">\n          <svg class="denhaag-icon" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">\n            <path d="M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z" fill="currentColor" />\n          </svg>\n        </div>\n        <p class="denhaag-cta-link__excerpt">\n          <span class="denhaag-cta-link__highlight">Bekijk</span> een lange tekst over de video\n        </p>\n      </a>'}};const componentMeta={title:"CSS/Actions/CTA Link",parameters:{componentSubtitle:`${package_namespaceObject.u2} - ${package_namespaceObject.i8}`,docs:{source:{type:"dynamic"}},status:{type:"WORK IN PROGRESS"}},tags:["stories-mdx"],includeStories:["defaultStory","hovered","focused","grouped","long","video"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const CtaLink_stories=componentMeta,__namedExportsOrder=["defaultStory","hovered","focused","grouped","long","video"]},"../../components/CtaLink/dist/mjs/index.js":()=>{var css_248z=".denhaag-cta-link{align-items:center;border-left:1px solid var(--denhaag-cta-link-border-color,currentColor);border-right:1px solid var(--denhaag-cta-link-border-color,currentColor);box-shadow:0 1px 0 var(--denhaag-cta-link-border-color,currentColor),inset 0 1px 0 var(--denhaag-cta-link-border-color,currentColor);color:var(--denhaag-cta-link-color);display:flex;flex-direction:row;font-family:var(--denhaag-cta-link-font-family,inherit);font-weight:var(--denhaag-cta-link-font-weight,inherit);gap:var(--denhaag-cta-link-gap);hyphens:auto;padding-block-end:var(--denhaag-cta-link-padding-block,var(--denhaag-cta-link-gap));padding-block-start:var(--denhaag-cta-link-padding-block,var(--denhaag-cta-link-gap));padding-inline-end:var(--denhaag-cta-link-padding-inline,calc(var(--denhaag-cta-link-gap)/1.5));padding-inline-start:var(--denhaag-cta-link-padding-inline,calc(var(--denhaag-cta-link-gap)/1.5));text-decoration:none}.denhaag-cta-link--hover,.denhaag-cta-link:hover{--denhaag-cta-link-highlight-color:var(--denhaag-cta-link-hover-highlight-color,var(--denhaag-cta-link-color))}.denhaag-cta-link--focus,.denhaag-cta-link:focus-visible{--denhaag-cta-link-highlight-color:var(\n    --denhaag-cta-link-focus-highlight-color,var(--denhaag-cta-link-hover-highlight-color)\n  );outline:var(--denhaag-cta-link-focus-outline)}.denhaag-cta-link__dot{align-items:center;aspect-ratio:1/1;background-color:var(--denhaag-cta-link-highlight-color,var(--denhaag-cta-link-color));border-radius:var(--denhaag-cta-link-width,50%);color:var(--denhaag-cta-link-dot-color);display:inline-flex;flex:0 0 auto;height:auto;justify-content:center;width:var(--denhaag-cta-link-width,calc(var(--denhaag-cta-link-gap)*4))}.denhaag-cta-link__dot .denhaag-icon,.denhaag-cta-link__dot>svg{font-size:var(--denhaag-cta-icon-size,var(--denhaag-cta-link-gap))}.denhaag-cta-link__excerpt{font-size:var(--denhaag-typography-scale-lg-font-size)}.denhaag-cta-link>span,.denhaag-cta-link__highlight{font-weight:var(--denhaag-cta-link-highlight-font-weight,inherit)}";const head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css",style.nonce=window.NONCE,head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css_248z:style.appendChild(document.createTextNode(css_248z))},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);