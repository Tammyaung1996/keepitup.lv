import{i as s}from"./icon-4BzMejV4.js";import{l as f,w as o,v as l,t as h,aL as u,aY as P,r as p,a2 as m,W as I,aS as v}from"./__uno--KafPJDN.js";function c(){Object.keys(s.locks).length<=0?document.body.classList.remove("var--lock"):document.body.classList.add("var--lock")}function i(e){s.locks[e]=1,c()}function r(e){delete s.locks[e],c()}function _(e,n){const{uid:t}=f();n&&o(n,a=>{a===!1?r(t):a===!0&&e()===!0&&i(t)}),o(e,a=>{n&&n()===!1||(a===!0?i(t):r(t))}),l(()=>{n&&n()===!1||e()===!0&&i(t)}),h(()=>{n&&n()===!1||e()===!0&&r(t)}),u(()=>{n&&n()===!1||e()===!0&&i(t)}),P(()=>{n&&n()===!1||e()===!0&&r(t)})}function x(e,n){const t=p(s.zIndex);return o(e,a=>{a&&(s.zIndex+=n,t.value=s.zIndex)},{immediate:!0}),{zIndex:t}}const d=Symbol("POPUP_BIND_POPUP_ITEM_KEY");function L(){const{bindParent:e,parentProvider:n,index:t}=m(d);return{index:t,popup:n,bindPopup:e}}function C(){const{bindChildren:e,childProviders:n,length:t}=I(d);return{length:t,popupItems:n,bindPopupItems:e}}const g=e=>{const n=[];return{cache:n,has(t){return this.cache.includes(t)},add(t){this.has(t)||(this.cache.length===e&&n.shift(),this.cache.push(t))},remove(t){this.has(t)&&v(this.cache,t)},clear(){this.cache.length=0}}},O=e=>e;export{_ as a,L as b,C as c,g as d,O as l,x as u};