(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[325],{6964:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manipulate",function(){return i(8441)}])},8441:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(7294),a=i(9008),s=i.n(a),l=i(4298),c=i.n(l),o=i(1959),u=i(6618),d=i(8230),x=i(41);let h=()=>{let[e,t]=(0,r.useState)(o),i=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=document.getElementById("bank").value;h(e)},[]);let a=e=>{h(e.target.value)},l=e=>{e.preventDefault();let t=e.target[0].value,i=e.target[1].value,n=e.target[2].value;if(isNaN(i)||isNaN(n)||!["normal","party","dirty","dares"].includes(t))return;let r="/game?mode=".concat(t,"&q=").concat(i,"&offset=").concat(n);window.location.href=r},h=e=>{switch(e){case"party":t(u);break;case"dirty":t(d);break;case"dares":t(x);break;case"mix":t([...o,...u,...d,...x]);break;default:t(o)}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"h-full",children:[(0,n.jsx)(c(),{src:"https://omni.aru.wtf/script.js"}),(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Truth or Drink"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{className:"container flex mx-auto p-4 fixmobilevh",children:(0,n.jsx)("div",{className:"m-auto",children:(0,n.jsx)("div",{className:"max-w-3xl cursor-pointer",children:(0,n.jsxs)("form",{onSubmit:l,children:[(0,n.jsx)("div",{children:(0,n.jsxs)("select",{ref:i,id:"bank",onChange:a,children:[(0,n.jsx)("option",{value:"normal",children:"Normal"}),(0,n.jsx)("option",{value:"party",children:"Party"}),(0,n.jsx)("option",{value:"dirty",children:"Dirty"}),(0,n.jsx)("option",{value:"dares",children:"Dares"}),(0,n.jsx)("option",{value:"mix",children:"Mix"})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("select",{className:"max-w-md text-ellipsis",children:e.map((e,t)=>(0,n.jsx)("option",{value:t,children:e},t))})}),(0,n.jsx)("div",{children:(0,n.jsx)("select",{children:[...Array(10)].map((e,t)=>(0,n.jsx)("option",{value:t,children:t+1},t))})}),(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"submit",value:"Submit"})})]})})})})]})})};t.default=h},9008:function(e,t,i){e.exports=i(3121)},4298:function(e,t,i){e.exports=i(3573)}},function(e){e.O(0,[821,774,888,179],function(){return e(e.s=6964)}),_N_E=e.O()}]);