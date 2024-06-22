"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2424],{52666:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>x});var l=d(651),n=d(82844);const s={pagination_next:null,pagination_prev:null},i="Function: dateMatchModifiers()",c={id:"api/functions/dateMatchModifiers",title:"Function: dateMatchModifiers()",description:"dateMatchModifiers(date, matchers, dateUtils): boolean",source:"@site/docs/api/functions/dateMatchModifiers.md",sourceDirName:"api/functions",slug:"/api/functions/dateMatchModifiers",permalink:"/next/api/functions/dateMatchModifiers",draft:!1,unlisted:!1,editUrl:"https://github.com/gpbl/react-day-picker/tree/main/website/docs/api/functions/dateMatchModifiers.md",tags:[],version:"current",frontMatter:{pagination_next:null,pagination_prev:null},sidebar:"api"},r={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Source",id:"source",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"function-datematchmodifiers",children:"Function: dateMatchModifiers()"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"dateMatchModifiers"}),"(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"matchers"}),", ",(0,l.jsx)(t.code,{children:"dateUtils"}),"): ",(0,l.jsx)(t.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Returns whether a day matches against at least one of the given Matchers."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"const day = new Date(2022, 5, 19);\nconst matcher1: DateRange = {\n from: new Date(2021, 12, 21),\n to: new Date(2021, 12, 30)\n}\nconst matcher2: DateRange = {\n from: new Date(2022, 5, 1),\n to: new Date(2022, 5, 23)\n}\nconst isMatch(day, [matcher1, matcher2]); // true, since day is in the matcher1 range.\n"})}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Default value"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"date"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"Date"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"matchers"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.a,{href:"/next/api/type-aliases/Matcher",children:(0,l.jsx)(t.code,{children:"Matcher"})})," | ",(0,l.jsx)(t.a,{href:"/next/api/type-aliases/Matcher",children:(0,l.jsx)(t.code,{children:"Matcher"})}),"[]"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"object"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"defaultDateLib"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.Date"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"GenericDateConstructor"}),"<",(0,l.jsx)(t.code,{children:"Date"}),">"]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)("p",{children:"The constructor of the date object."}),(0,l.jsxs)("p",{children:["You can pass a ",(0,l.jsx)(t.code,{children:"DateConstructor"})," such as ",(0,l.jsx)(t.code,{children:"UTCDate"})," from ",(0,l.jsx)(t.code,{children:"@date-fns/utc"})," to use UTC dates."]}),(0,l.jsx)("p",{children:(0,l.jsx)(t.strong,{children:"See"})}),(0,l.jsx)("p",{children:(0,l.jsx)(t.a,{href:"https://react-day-picker.js.org/using-daypicker/localization#utc-dates",children:"https://react-day-picker.js.org/using-daypicker/localization#utc-dates"})})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.addDays"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"amount"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.addMonths"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"amount"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.addWeeks"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"amount"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.addYears"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"amount"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.differenceInCalendarDays"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dateLeft"}),", ",(0,l.jsx)(t.code,{children:"dateRight"}),") => ",(0,l.jsx)(t.code,{children:"number"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.differenceInCalendarMonths"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dateLeft"}),", ",(0,l.jsx)(t.code,{children:"dateRight"}),") => ",(0,l.jsx)(t.code,{children:"number"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.endOfISOWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.endOfMonth"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.endOfWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"options"}),"?) => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.endOfYear"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.format"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"formatStr"}),", ",(0,l.jsx)(t.code,{children:"options"}),"?) => ",(0,l.jsx)(t.code,{children:"string"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.getISOWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"number"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.getUnixTime"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"number"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.getWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"options"}),"?) => ",(0,l.jsx)(t.code,{children:"number"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isAfter"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"dateToCompare"}),") => ",(0,l.jsx)(t.code,{children:"boolean"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isBefore"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"dateToCompare"}),") => ",(0,l.jsx)(t.code,{children:"boolean"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isDate"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,l.jsx)(t.code,{children:"value"}),") => ",(0,l.jsx)(t.code,{children:"value is Date"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isSameDay"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dateLeft"}),", ",(0,l.jsx)(t.code,{children:"dateRight"}),") => ",(0,l.jsx)(t.code,{children:"boolean"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isSameMonth"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dateLeft"}),", ",(0,l.jsx)(t.code,{children:"dateRight"}),") => ",(0,l.jsx)(t.code,{children:"boolean"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.isSameYear"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dateLeft"}),", ",(0,l.jsx)(t.code,{children:"dateRight"}),") => ",(0,l.jsx)(t.code,{children:"boolean"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.max"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dates"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})," | ",(0,l.jsx)(t.code,{children:"Date"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.min"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"dates"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})," | ",(0,l.jsx)(t.code,{children:"Date"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.setMonth"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"month"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.setYear"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"year"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.startOfDay"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.startOfISOWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.startOfMonth"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.startOfWeek"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),", ",(0,l.jsx)(t.code,{children:"options"}),"?) => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"dateUtils.startOfYear"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["<",(0,l.jsx)(t.code,{children:"DateType"}),">(",(0,l.jsx)(t.code,{children:"date"}),") => ",(0,l.jsx)(t.code,{children:"DateType"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"undefined"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"boolean"})}),"\n",(0,l.jsx)(t.h2,{id:"source",children:"Source"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/gpbl/react-day-picker/blob/11b673418a3bac5948628bc5017f5e3d1de5427b/src/utils/dateMatchModifiers.ts#L41",children:"src/utils/dateMatchModifiers.ts:41"})})]})}function j(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},82844:(e,t,d)=>{d.d(t,{Z:()=>c,a:()=>i});var l=d(92379);const n={},s=l.createContext(n);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);