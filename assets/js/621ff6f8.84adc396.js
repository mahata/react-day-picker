"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6098],{7257:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=r(651),a=r(82844),s=r(25728),i=r(218);const l={sidebar_position:5},d="Upgrading",c={id:"upgrading",title:"Upgrading",description:"Upgrade to v8",source:"@site/versioned_docs/version-8.10.1/upgrading.mdx",sourceDirName:".",slug:"/upgrading",permalink:"/upgrading",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/versioned_docs/version-8.10.1/upgrading.mdx",tags:[],version:"8.10.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Changelog",permalink:"/changelog"},next:{title:"License",permalink:"/license"}},o={},u=[{value:"Upgrade to v8",id:"upgrade-to-v8",level:2},{value:"Checklist",id:"checklist",level:3},{value:"Updated Props",id:"updated-props",level:3},{value:"ISO weeks",id:"iso-weeks",level:3},{value:"DayPickerInput",id:"daypickerinput",level:3}];function h(e){const n={a:"a",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrading",children:"Upgrading"}),"\n",(0,t.jsx)(n.h2,{id:"upgrade-to-v8",children:"Upgrade to v8"}),"\n",(0,t.jsx)(n.p,{children:"DayPicker v8 is a major upgrade for DayPicker with new props and styles. Follow the checklist for a smooth upgrade."}),"\n",(0,t.jsx)(n.h3,{id:"checklist",children:"Checklist"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Upgrade the dependency"}),". DayPicker now has ",(0,t.jsx)(n.a,{href:"https://date-fns.org/",children:"date-fns"})," as peer dependency.","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install react-day-picker@latest date-fns\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add react-day-picker@latest date-fns\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add react-day-picker@latest date-fns\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Remove the types package"}),", if you were using it:","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm uninstall @types/react-day-picker\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn remove @types/react-day-picker\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm remove @types/react-day-picker\n"})})})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update the CSS import"}),":","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"- import `react-day-picker/lib/style.css`\n+ import `react-day-picker/dist/style.css`\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update your custom styles"}),". See the ",(0,t.jsx)(n.a,{href:"/using-daypicker/styling",children:"Styling Guide"})," for more information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Update the changed props"}),". See the list below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Replace ",(0,t.jsx)(n.code,{children:"DateUtils"})," with date-fns"]}),". Use ",(0,t.jsx)(n.a,{href:"https://date-fns.org/",children:"date-fns"})," instead of ",(0,t.jsx)(n.a,{href:"https://react-day-picker-v7.netlify.app/api/DateUtils",children:"DateUtils"})," to handle dates.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Replace ",(0,t.jsx)(n.code,{children:"addDayToRange"})," with ",(0,t.jsx)(n.a,{href:"../api/functions/addToRange",children:"addToRange"}),", which is still exported in v8"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"updated-props",children:"Updated Props"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showWeekNumbers"})," has been renamed to ",(0,t.jsx)(n.code,{children:"showWeekNumber"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"todayButton"})," has been removed. See ",(0,t.jsx)(n.a,{href:"https://daypicker.dev/basics/navigation#controlling-the-current-month",children:"Controlling the current month"})," for an example implementing the same feature."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"initialMonth"})," has been renamed to ",(0,t.jsx)(n.code,{children:"defaultMonth"}),". See ",(0,t.jsx)(n.a,{href:"https://daypicker.dev/basics/navigation",children:"Navigating months"})," for more details about using ",(0,t.jsx)(n.code,{children:"month"})," and ",(0,t.jsx)(n.code,{children:"defaultMonth"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"canChangeMonth"})," has been renamed to ",(0,t.jsx)(n.code,{children:"disableNavigation"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selectedDays"})," has been renamed to ",(0,t.jsx)(n.code,{children:"selected"}),". See also: ",(0,t.jsx)(n.a,{href:"https://daypicker.dev/basics/selecting-days",children:"Selecting Days guide"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"disabledDays"})," has been renamed to ",(0,t.jsx)(n.code,{children:"disabled"}),". See also: ",(0,t.jsx)(n.a,{href:"https://daypicker.dev/basics/modifiers#disabling-days",children:"Disabling days"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"iso-weeks",children:"ISO weeks"}),"\n",(0,t.jsxs)(n.p,{children:["This version use the locale setting to calculate the week days and numbers. The previous versions were using ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_week_date",children:"ISO week dates"}),". To toggle the ISO week dates, use the ",(0,t.jsx)(n.code,{children:"ISOWeek"})," prop."]}),"\n",(0,t.jsx)(n.h3,{id:"daypickerinput",children:"DayPickerInput"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"DayPickerInput"})," component has been removed. If you upgrade to v8, you will need to rewrite your implementation:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See ",(0,t.jsx)(n.a,{href:"./advanced-guides/input-fields",children:"Input Fields Guide"})," for an example"]}),"\n",(0,t.jsxs)(n.li,{children:["Please note that ",(0,t.jsx)(n.a,{href:"../api/functions/useInput",children:(0,t.jsx)(n.del,{children:"useInput hook"})})," has been deprecated since v8.10.0."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},218:(e,n,r)=>{r.d(n,{Z:()=>i});r(92379);var t=r(53048);const a={tabItem:"tabItem_FOZf"};var s=r(651);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},25728:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(92379),a=r(53048),s=r(81054),i=r(75900),l=r(43256),d=r(83247),c=r(28786),o=r(12862);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,o.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&d(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=r(28706);const x={tabList:"tabList_so7n",tabItem:"tabItem_TcIW"};var b=r(651);function j(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const n=e.currentTarget,r=d.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},82844:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(92379);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);