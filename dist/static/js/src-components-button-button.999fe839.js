(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/button/button.scss":function(e,n,o){(e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"/* Named colors */\n/* Primary colors */\n/* Secondary colors */\n/* Accent colors */\n/* Success colors */\n/* Info colors */\n/* Backgrounds */\n/* Text */\n/* different */\n/* Borders */\n/* Map of supported appearances */\n/* Map of background color for each appearance */\n/* Size map for padding */\n.button {\n  font-family: neue-haas-grotesk-text, Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  line-height: 1.5;\n  text-align: center;\n  border: 1px solid;\n  border-radius: 4px;\n  cursor: pointer;\n  /* default to normal padding */\n  padding: 10px 15px; }\n\n/* For each appearance, created a new class  */\n.button--primary {\n  color: #fff;\n  background-color: #d95988;\n  border-color: #d95988; }\n  .button--primary:hover {\n    color: #fff;\n    background-color: #df3e7b;\n    border-color: #df3e7b; }\n  .button--primary:focus, .button--primary:active {\n    color: #fff;\n    background-color: #c22b65;\n    border-color: #d95988; }\n  .button--primary:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #fff;\n    background-color: #d95988;\n    border-color: #d95988; }\n\n.button--secondary {\n  color: #777;\n  background-color: transparent;\n  border-color: #777; }\n  .button--secondary:hover {\n    color: #444;\n    background-color: transparent;\n    border-color: #444; }\n  .button--secondary:focus, .button--secondary:active {\n    color: #3a8bbb;\n    background-color: transparent;\n    border-color: transparent; }\n  .button--secondary:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #777;\n    background-color: transparent;\n    border-color: #777; }\n\n.button--secondary-alt {\n  color: #777;\n  background-color: #fff;\n  border-color: #777; }\n  .button--secondary-alt:hover {\n    color: #444;\n    background-color: #fff;\n    border-color: #444; }\n  .button--secondary-alt:focus, .button--secondary-alt:active {\n    color: #3a8bbb;\n    background-color: #fff;\n    border-color: #fff; }\n  .button--secondary-alt:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #777;\n    background-color: #fff;\n    border-color: #777; }\n\n.button--info {\n  color: #777;\n  background-color: #ddd;\n  border-color: #ddd; }\n  .button--info:hover {\n    color: #fff;\n    background-color: #3a8bbb;\n    border-color: #3a8bbb; }\n  .button--info:focus, .button--info:active {\n    color: #fff;\n    background-color: #1e6189;\n    border-color: #ddd; }\n  .button--info:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #777;\n    background-color: #ddd;\n    border-color: #ddd; }\n\n.button--accent {\n  color: #fff;\n  background-color: #3a8bbb;\n  border-color: #3a8bbb; }\n  .button--accent:hover {\n    color: #fff;\n    background-color: #1e6189;\n    border-color: #1e6189; }\n  .button--accent:focus, .button--accent:active {\n    color: #fff;\n    background-color: #0c3f5d;\n    border-color: #3a8bbb; }\n  .button--accent:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #fff;\n    background-color: #3a8bbb;\n    border-color: #3a8bbb; }\n\n.button--success {\n  color: #fff;\n  background-color: #7bbb5e;\n  border-color: #7bbb5e; }\n  .button--success:hover {\n    color: #fff;\n    background-color: #5b9540;\n    border-color: #5b9540; }\n  .button--success:focus, .button--success:active {\n    color: #fff;\n    background-color: #3b6d25;\n    border-color: #7bbb5e; }\n  .button--success:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    color: #fff;\n    background-color: #7bbb5e;\n    border-color: #7bbb5e; }\n\n/* For each size, created a new class  */\n.button--large {\n  padding: 20px 20px; }\n\n.button--normal {\n  padding: 10px 15px; }\n\n.button--small {\n  padding: 5px 10px; }\n\n/* Styles for icon inside button */\n.button .icon {\n  margin-right: 10px; }\n",""])},"./src/components/button/button.mdx":function(e,n,o){"use strict";o.r(n);var a=o("./node_modules/react/index.js"),t=o.n(a),r=o("./node_modules/@mdx-js/tag/dist/index.js"),c=o("./node_modules/docz/dist/index.m.js"),l=(o("./src/components/button/button.scss"),o("./src/components/icon/index.js")),s=function(e){return t.a.createElement("button",{className:"button button--".concat(e.appearance," button--").concat(e.size),disabled:e.disabled},e.icon?t.a.createElement(l.a,{name:e.icon}):null,e.children)};s.defaultProps={disabled:!1,appearance:"primary",size:"normal"};var d=s;s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},appearance:{defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"secondary-alt"',computed:!1},{value:'"info"',computed:!1},{value:'"accent"',computed:!1},{value:'"success"',computed:!1}]},required:!1,description:""},size:{defaultValue:{value:'"normal"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"normal"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""}}};var p=o("./src/components/_helpers/index.js");function u(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}n.default=function(e){var n=e.components,o=u(e,["components"]);return t.a.createElement(r.MDXTag,{name:"wrapper",components:n},t.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),t.a.createElement(p.a,null,t.a.createElement(d,{appearance:"primary"},"Click me")),t.a.createElement(c.PropsTable,{of:d}),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic usage"),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button")," supports multiple styles with the ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"appearance")," prop"),t.a.createElement(c.Playground,{__codesandbox:"undefined",__position:2,__code:'<Stack>\n  <Button appearance="primary">Click me</Button>\n  <Button appearance="secondary">Click me</Button>\n  <Button appearance="secondary-alt">Click me</Button>\n  <Button appearance="info">Click me</Button>\n  <Button appearance="accent">Click me</Button>\n  <Button appearance="success">Click me</Button>\n</Stack>',__scope:{props:o,Button:d,Preview:p.a,Stack:p.b}},t.a.createElement(p.b,null,t.a.createElement(d,{appearance:"primary"},"Click me"),t.a.createElement(d,{appearance:"secondary"},"Click me"),t.a.createElement(d,{appearance:"secondary-alt"},"Click me"),t.a.createElement(d,{appearance:"info"},"Click me"),t.a.createElement(d,{appearance:"accent"},"Click me"),t.a.createElement(d,{appearance:"success"},"Click me"))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"disabled"}},"Disabled"),t.a.createElement(r.MDXTag,{name:"p",components:n},"You can pass the disabled prop to make the ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button")," disabled"),t.a.createElement(c.Playground,{__codesandbox:"undefined",__position:3,__code:'<Stack>\n  <Button disabled appearance="primary">\n    Click me\n  </Button>\n  <Button disabled appearance="secondary">\n    Click me\n  </Button>\n  <Button disabled appearance="secondary-alt">\n    Click me\n  </Button>\n  <Button disabled appearance="info">\n    Click me\n  </Button>\n  <Button disabled appearance="accent">\n    Click me\n  </Button>\n  <Button disabled appearance="success">\n    Click me\n  </Button>\n</Stack>',__scope:{props:o,Button:d,Preview:p.a,Stack:p.b}},t.a.createElement(p.b,null,t.a.createElement(d,{disabled:!0,appearance:"primary"},"Click me"),t.a.createElement(d,{disabled:!0,appearance:"secondary"},"Click me"),t.a.createElement(d,{disabled:!0,appearance:"secondary-alt"},"Click me"),t.a.createElement(d,{disabled:!0,appearance:"info"},"Click me"),t.a.createElement(d,{disabled:!0,appearance:"accent"},"Click me"),t.a.createElement(d,{disabled:!0,appearance:"success"},"Click me"))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"sizes"}},"Sizes"),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Button")," supports multiple sizes as well"),t.a.createElement(c.Playground,{__codesandbox:"undefined",__position:4,__code:'<Stack>\n  <Button size="large" appearance="secondary">\n    Click me\n  </Button>\n  <Button appearance="secondary">Click me</Button>\n  <Button size="small" appearance="secondary">\n    Click me\n  </Button>\n</Stack>',__scope:{props:o,Button:d,Preview:p.a,Stack:p.b}},t.a.createElement(p.b,null,t.a.createElement(d,{size:"large",appearance:"secondary"},"Click me"),t.a.createElement(d,{appearance:"secondary"},"Click me"),t.a.createElement(d,{size:"small",appearance:"secondary"},"Click me"))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"with-icon"}},"With Icon"),t.a.createElement(r.MDXTag,{name:"p",components:n},"You can pass the name of the ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"icon")," as a prop"),t.a.createElement(c.Playground,{__codesandbox:"undefined",__position:5,__code:'<Stack>\n  <Button appearance="secondary-alt" icon="heart">\n    Like\n  </Button>\n  <Button appearance="secondary" icon="copy">\n    Copy\n  </Button>\n</Stack>',__scope:{props:o,Button:d,Preview:p.a,Stack:p.b}},t.a.createElement(p.b,null,t.a.createElement(d,{appearance:"secondary-alt",icon:"heart"},"Like"),t.a.createElement(d,{appearance:"secondary",icon:"copy"},"Copy"))))}},"./src/components/button/button.scss":function(e,n,o){var a=o("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/button/button.scss");"string"===typeof a&&(a=[[e.i,a,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};o("./node_modules/style-loader/lib/addStyles.js")(a,t);a.locals&&(e.exports=a.locals)}}]);