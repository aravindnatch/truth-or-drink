(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{134:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n(1593)}])},1593:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(1799);function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var i=n(797),c=n(5893),o=n(7294),a=n(1163),u=n(9008),l=n.n(u),p=n(4298),d=n.n(p),f=n(1664),h=n.n(f);const g={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},b={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},m="mousemove",O="mouseup";function v(e,t){if(0===t)return e;const n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function j(e,t){const n=t=>{const n="touches"in t;n&&t.touches.length>1||e(((e,s)=>{s.trackMouse&&!n&&(document.addEventListener(m,r),document.addEventListener(O,i));const{clientX:c,clientY:o}=n?t.touches[0]:t,a=v([c,o],s.rotationAngle);return s.onTouchStartOrOnMouseDown&&s.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),b),{initial:a.slice(),xy:a,start:t.timeStamp||0})}))},r=t=>{e(((e,n)=>{const r="touches"in t;if(r&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:s,clientY:i}=r?t.touches[0]:t,[c,o]=v([s,i],n.rotationAngle),a=c-e.xy[0],u=o-e.xy[1],l=Math.abs(a),p=Math.abs(u),d=(t.timeStamp||0)-e.start,f=Math.sqrt(l*l+p*p)/(d||1),h=[a/(d||1),u/(d||1)],b=function(e,t,n,r){return e>t?n>0?"Right":"Left":r>0?"Down":"Up"}(l,p,a,u),m="number"===typeof n.delta?n.delta:n.delta[b.toLowerCase()]||g.delta;if(l<m&&p<m&&!e.swiping)return e;const O={absX:l,absY:p,deltaX:a,deltaY:u,dir:b,event:t,first:e.first,initial:e.initial,velocity:f,vxvy:h};O.first&&n.onSwipeStart&&n.onSwipeStart(O),n.onSwiping&&n.onSwiping(O);let j=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${b}`])&&(j=!0),j&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:O,swiping:!0})}))},s=t=>{e(((e,n)=>{let r;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){r=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(r);const s=n[`onSwiped${r.dir}`];s&&s(r)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),b),{eventData:r})}))},i=e=>{document.removeEventListener(m,r),document.removeEventListener(O,i),s(e)},c=(e,t)=>{let i=()=>{};if(e&&e.addEventListener){const c=Object.assign(Object.assign({},g.touchEventOptions),t.touchEventOptions),o=[["touchstart",n,c],["touchmove",r,Object.assign(Object.assign({},c),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",s,c]];o.forEach((([t,n,r])=>e.addEventListener(t,n,r))),i=()=>o.forEach((([t,n])=>e.removeEventListener(t,n)))}return i},o={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;const r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&t&&(r.cleanUpTouch=c(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),r)}))}};return t.trackMouse&&(o.onMouseDown=n),[o,c]}function w(e){const{trackMouse:t}=e,n=o.useRef(Object.assign({},b)),r=o.useRef(Object.assign({},g)),s=o.useRef(Object.assign({},r.current));let i;for(i in s.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},g),e),g)void 0===r.current[i]&&(r.current[i]=g[i]);const[c,a]=o.useMemo((()=>j((e=>n.current=e(n.current,r.current)),{trackMouse:t})),[t]);return n.current=function(e,t,n,r){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(n.current,r.current,s.current,a),c}var x=n(1959),S=n(6618),y=n(8230),E=n(41),T=function(){var e=function(){p+1>=b.length?(j(b[0]),f(0)):(j(b[p+1]),f(p+1))},t=function(){p-1<0?(j(b[b.length-1]),f(b.length-1)):(j(b[p-1]),f(p-1))},n=(0,a.useRouter)(),u=(0,o.useState)(0),p=u[0],f=u[1],g=(0,o.useState)([""]),b=g[0],m=g[1],O=(0,o.useState)(""),v=O[0],j=O[1],T=(0,o.useState)(!1),k=(T[0],T[1]),D="normal",M=[],N="";switch(n.query.mode&&(D=String(n.query.mode)),D){case"party":N="bg-gradient-to-r from-[#FFC300] to-[#FF8900]",S.map((function(e){M.push(e)}));break;case"dirty":N="bg-gradient-to-r from-[#FF006D] to-[#FC0023]",y.map((function(e){M.push(e)}));break;case"dares":N="bg-gradient-to-r from-[#EA00C3] to-[#BE00FF]",E.map((function(e){M.push(e)}));break;case"mix":N="bg-black",M=(0,i.Z)(x).concat((0,i.Z)(S),(0,i.Z)(y),(0,i.Z)(E));break;default:N="bg-gradient-to-r from-[#00C5FF] to-[#009BFF]",x.map((function(e){M.push(e)}))}(0,o.useEffect)((function(){if(n.isReady){var e,t=parseInt(String(n.query.q)),r=parseInt(String(n.query.offset)),s=M.length,i="";for(t<M.length&&(i=M[t]);0!=s;){var c;e=Math.floor(Math.random()*s),s--,c=[M[e],M[s]],M[s]=c[0],M[e]=c[1]}var o=0;""!=i&&(o=M.indexOf(i)),isNaN(r)||(o-=r)<0&&(o=M.length+o),f(o),m(M),j(M[o]),document.getElementById("maindiv").focus()}}),[n.isReady]);var U=w({onSwipedLeft:function(){return e()},onSwipedRight:function(){return t()},onSwipeStart:function(){return k(!0)},onSwiped:function(){return k(!1)}});return(0,c.jsxs)("div",{className:"h-full",tabIndex:0,id:"maindiv",onKeyDown:function(n){"Space"===n.code||"ArrowRight"==n.code?e():"ArrowLeft"==n.code&&t()},children:[(0,c.jsx)(d(),{src:"https://omni.aru.wtf/script.js"}),(0,c.jsxs)(l(),{children:[(0,c.jsx)("title",{children:"Truth or Drink"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsxs)("div",{className:"fixmobilevh flex flex-col",children:[(0,c.jsx)(h(),{href:"/",children:(0,c.jsxs)("div",{className:"cursor-pointer",children:[(0,c.jsxs)("div",{className:"select-none text-4xl text-header font-semibold mx-auto text-center align-middle pt-4 pb-2",children:["TRUTH ",(0,c.jsx)("span",{className:"text-xl align-middle",children:"O R"})," DRINK"]}),(0,c.jsx)("div",{className:[N,"select-none rounded-lg text-center text-white font-bold max-w-fit px-4 m-auto"].join(" "),children:D.toUpperCase().split("").join(" ")})]})}),(0,c.jsx)("div",s((0,r.Z)({className:"flex flex-grow p-2 mx-auto mt-2 justify-center w-screen"},U),{style:{touchAction:"none"},children:(0,c.jsx)("div",{className:"select-none flex items-center text-5xl text-white font-semibold bg-black rounded-xl shadow-xl p-4 max-w-3xl w-full justify-center text-center",onClick:e,children:v})})),(0,c.jsx)("footer",{className:"flex flex-col text-center lg:text-left",children:(0,c.jsxs)("div",{className:"select-none text-center text-gray-700 p-2 mb-2 text-opacity-60",children:["\xa9 ",(new Date).getFullYear()," ",(0,c.jsx)("a",{className:"select-none font-semibold text-opacity-60",href:"https://aravindnatch.me/",children:"Aravind Natchiappan"})]})})]})]})}},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[557,548,774,888,179],(function(){return t=134,e(e.s=t);var t}));var t=e.O();_N_E=t}]);