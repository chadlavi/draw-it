(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(74),l=a.n(c),o=a(44),i=a(10),s=a(84),u=a(83);a(200);var m=a(82),d=a.n(m);const h=["jazz elephant","cat hates cucumber","can't stop talking about my new hat","where everybody knows your name","learning to ride a skateboard","they're all gonna laugh at you","dog peeing on a fence","eight truly miniscule reindeer","houseplants","parallel parking","Nobel Prize award ceremony interrupted by flatulence","your favorite bagel order","huffing glue","riding a tricycle","I thought this was a costume party"];const E={loadTimeOffset:5,lazyRadius:0,brushRadius:2,catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",hideGrid:!0,canvasWidth:600,canvasHeight:600,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1,hideInterface:!1},g=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#000000","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB","#CCCCCC"],b="".concat(32*Math.ceil(g.length/2),"px"),f=e=>((e,t="#FFFFFF")=>{const a=document.createElement("canvas");a.width=e.width,a.height=e.height;const n=a.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,e.width,e.height),n.drawImage(e,0,0),a.toDataURL()})(e.current.canvasContainer.children[1],"#FFFFFF"),v=h[Math.floor(Math.random()*h.length)];function p(){const e=Boolean("false"!==localStorage.getItem("rotation_warning")),t=r.a.createRef(null),a=r.a.useState("#000000"),c=Object(i.a)(a,2),l=c[0],m=c[1],h=r.a.useState(!1),p=Object(i.a)(h,2),w=p[0],C=p[1],y=r.a.useState(""),F=Object(i.a)(y,2),O=F[0],k=F[1],j=r.a.useState(e),B=Object(i.a)(j,2),N=B[0],D=B[1],S=function(){const e=Object(n.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(()=>{function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),a}().width,L=function(e){const t=Object(n.useRef)(),a=Object(n.useRef)();return Object(n.useEffect)(()=>{a.current=e}),Object(n.useEffect)(()=>{return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e);function e(e){t.current&&a.current&&!t.current.contains(e.target)&&a.current(e)}},[]),Object(n.useEffect)(()=>{return document.addEventListener("touchstart",e),()=>document.removeEventListener("touchstart",e);function e(e){t.current&&a.current&&!t.current.contains(e.target)&&a.current(e)}},[]),Object(n.useEffect)(()=>{return document.addEventListener("click",e),()=>document.removeEventListener("click",e);function e(e){t.current&&a.current&&!t.current.contains(e.target)&&a.current(e)}},[]),t}(()=>{C(!1)}),I=Math.min(600,S),R=Object(o.a)(Object(o.a)({},E),{},{canvasWidth:I,canvasHeight:I,className:d()("canvas"),onChange:()=>{const e=f(t);k(e)},ref:t,brushColor:l,catenaryColor:l});return r.a.createElement("main",{id:"app"},N&&r.a.createElement("div",{id:"rotate-me"},r.a.createElement("div",null,r.a.createElement("span",{role:"img","aria-label":""},"\u26a0\ufe0f")," ","This works best in portrait mode on this device!"),r.a.createElement("div",{className:"dismissRWButton"},r.a.createElement("button",{onClick:()=>{localStorage.setItem("rotation_warning","false"),D(!1)}},"let me play this way anyway"))),r.a.createElement("div",{className:"prompt"},"draw this:",r.a.createElement("div",null,r.a.createElement("b",null,'"',v,'"'))),r.a.createElement(s.a,R),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{ref:L,className:"picker-container"},r.a.createElement("button",{className:"palette",onClick:()=>{C(e=>!e)}},r.a.createElement("span",{role:"img","aria-label":""},"\ud83c\udfa8")," ","color\u2026"),w&&r.a.createElement("div",{className:"picker-popper"},r.a.createElement(u.a,{triangle:"hide",color:l,colors:g,width:b,onChangeComplete:e=>m(e.hex)}))),r.a.createElement("button",{className:"undo",onClick:()=>{t.current.undo()}},r.a.createElement("span",{role:"img","aria-label":""},"\u21a9\ufe0f")," ","undo"),r.a.createElement("button",{className:"clear",onClick:()=>{t.current.clear(),k("")}},r.a.createElement("span",{className:"non-hover",role:"img","aria-label":""},"\ud83d\udca3")," ",r.a.createElement("span",{className:"hover",role:"img","aria-label":""},"\ud83e\udde8")," ","clear"),O&&r.a.createElement("button",{className:"save",onClick:()=>{!function(e,t){const a=document.createElement("a");a.href=e,a.setAttribute("download",t),a.click()}(O,"".concat((new Date).toISOString(),".png"))}},r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcf2")," ","download")),O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("br",null),"##########################",r.a.createElement("br",null),"# ~*~ DEBUGGING INFO ~*~ #",r.a.createElement("br",null),"##########################"),r.a.createElement("img",{src:O,alt:""}),r.a.createElement("textarea",{rows:10,value:O,readOnly:!0})))}const w=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),w)},85:function(e,t,a){e.exports=a(201)}},[[85,1,2]]]);
//# sourceMappingURL=main.254043db.chunk.js.map