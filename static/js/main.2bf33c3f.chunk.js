(this.webpackJsonpcovid19_wmap=this.webpackJsonpcovid19_wmap||[]).push([[0],{124:function(e,t,r){},197:function(e,t,r){"use strict";r.r(t);var n=r(12),c=r(0),a=r.n(c),s=r(24),i=r.n(s),o=(r(124),r(199)),d=o.a.Header,l=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(d,{children:[Object(n.jsx)("div",{className:"logo"}),Object(n.jsx)("h1",{style:{color:"red",marginLeft:"420px"},children:" COVID-19 World Map Results"})]})})},u=r(60),j=r(103),h=r.n(j),x=Object(c.createContext)(),b=function(e){var t=Object(c.useState)([]),r=Object(u.a)(t,2),a=r[0],s=r[1],i=Object(c.useState)(!0),o=Object(u.a)(i,2),d=o[0],l=o[1];Object(c.useEffect)((function(){l(!0),fetch("https://covid-193.p.rapidapi.com/statistics",{method:"GET",headers:{"x-rapidapi-key":"f7e5465559mshf80278a8387011ap1b5f37jsn2c8fda8798d1","x-rapidapi-host":"covid-193.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){var t=e.response;l(!1),j(t)})).catch((function(e){console.error(e)}))}),[]);var j=function(e){var t=e.map((function(e){return{Country:e.country,Population:e.population?e.population:"-",Cases_new:e.cases.new?e.cases.new:"-",Cases_critical:e.cases.critical?e.cases.critical:"-",Cases_recovered:e.cases.recovered?e.cases.recovered:"-",Deaths_new:e.deaths.new?e.deaths.new:"-",Deaths_total:e.deaths.total,Key:h()()}}));s(t)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x.Provider,{value:{results:a,isLoading:d},children:e.children})})},O=r(201),f=r(202),p=r(104),C=r(200),m=O.a.Search,v=function(){var e=Object(c.useContext)(x),t=e.results,r=e.isLoading,a=Object(c.useState)(""),s=Object(u.a)(a,2),i=s[0],o=s[1],d=t.filter((function(e){return e.Country.toLowerCase().indexOf(i)>-1})),l=[{title:"Name",dataIndex:"Country",sorter:function(e,t){return e.Country<t.Country?-1:1}},{title:"New Cases",dataIndex:"Cases_new",sorter:function(e,t){return e.Cases_new-t.Cases_new},render:function(e){return Object(n.jsx)(f.a,{color:"cyan",children:e})}},{title:"Critical Cases",dataIndex:"Cases_critical",sorter:function(e,t){return e.Cases_critical-t.Cases_critical}},{title:"Recovered Cases",dataIndex:"Cases_recovered",sorter:function(e,t){return e.Cases_recovered-t.Cases_recovered},render:function(e){return Object(n.jsx)(f.a,{color:"green",children:e})}},{title:"New Deaths",dataIndex:"Deaths_new",sorter:function(e,t){return e.Deaths_new-t.Deaths_new}},{title:"Total Deaths",dataIndex:"Deaths_total",sorter:function(e,t){return e.Cases_critical-t.Cases_critical},render:function(e){return Object(n.jsx)(f.a,{color:"red",children:e})}}];return Object(n.jsx)(n.Fragment,{children:r?Object(n.jsx)(p.a,{size:"large"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{placeholder:"Search Name",onChange:function(e){return o(e.target.value.toLowerCase())},style:{width:200}}),Object(n.jsx)(C.a,{columns:l,dataSource:d,size:"small",rowKey:"Key",scroll:{y:370}})]})})},w=o.a.Footer,_=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(w,{style:{textAlign:"center"},children:"Kerim YILMAZ \xa92021 "})})},g=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{className:"layout",children:[Object(n.jsx)(l,{}),Object(n.jsx)(b,{children:Object(n.jsx)(v,{})}),Object(n.jsx)(_,{})]})})};var y=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g,{})})};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.2bf33c3f.chunk.js.map