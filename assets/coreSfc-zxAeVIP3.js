import{E as y,V as p,G as F,j as C,O as ee,N as ne,o as c,C as S,D as T,K as f,H as d,a5 as oe,M as te,g as $,L as g,X as z,d as G,r as ae,c as V,w as B,$ as l,Y as re,y as b,I as O,J as P,aw as se,P as ie,aq as le,aA as ce,b as E,aB as de,S as M,U as ue,aC as pe,aD as fe,aE as me,Q as R,aF as ve}from"./__uno--KafPJDN.js";import{h as w,c as ye,s as ge,i as Oe}from"./icon-4BzMejV4.js";import{u as we,a as be}from"./shared--EFbdYCe.js";var he=Object.defineProperty,Se=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,L=(e,o,n)=>o in e?he(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,Pe=(e,o)=>{for(var n in o||(o={}))Ce.call(o,n)&&L(e,n,o[n]);if(D)for(var n of D(o))$e.call(o,n)&&L(e,n,o[n]);return e},_e=(e,o)=>Se(e,ke(o));const I={type:String,position:{type:String,default:"top"},content:[String,Function,Object],contentClass:String,duration:{type:Number,default:3e3},vertical:Boolean,loadingType:y(w,"type"),loadingSize:y(w,"size"),loadingRadius:y(w,"radius"),loadingColor:_e(Pe({},y(w,"color")),{default:"currentColor"}),lockScroll:Boolean,show:Boolean,teleport:{type:[String,Object,Boolean],default:"body"},forbidClick:Boolean,onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),"onUpdate:show":p(),_update:String},{n:Ee,classes:Ie}=F("snackbar"),Ae={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""};function Ne(e,o){const n=C("var-icon"),a=C("var-loading");return ee((c(),S("div",{class:f(e.n()),style:z({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[T("div",{class:f(e.classes(e.n("wrapper"),e.n("wrapper-".concat(e.position)),e.n("$-elevation--4"),[e.vertical,e.n("vertical")],[e.type&&e.SNACKBAR_TYPE.includes(e.type),e.n("wrapper-".concat(e.type))])),style:z({zIndex:e.zIndex})},[T("div",{class:f([e.n("content"),e.contentClass])},[d(e.$slots,"default",{},()=>[oe(te(e.content),1)])],2),e.iconName||e.type==="loading"||e.$slots.icon?(c(),S("div",{key:0,class:f(e.n("icon"))},[e.iconName?(c(),$(n,{key:0,name:e.iconName},null,8,["name"])):g("v-if",!0),e.type==="loading"?(c(),$(a,{key:1,type:e.loadingType,size:e.loadingSize,color:e.loadingColor,radius:e.loadingRadius},null,8,["type","size","color","radius"])):g("v-if",!0),d(e.$slots,"icon")],2)):g("v-if",!0),e.$slots.action?(c(),S("div",{key:1,class:f(e.n("action"))},[d(e.$slots,"action")],2)):g("v-if",!0)],6)],6)),[[ne,e.show]])}const Y=G({name:"VarSnackbarCore",components:{VarLoading:ye,VarIcon:ge},props:I,setup(e){const o=ae(null),{zIndex:n}=we(()=>e.show,1);be(()=>e.show,()=>e.lockScroll);const a=V(()=>{const{type:u,forbidClick:h}=e;return u==="loading"||h}),r=V(()=>e.type?Ae[e.type]:"");function i(){o.value=setTimeout(()=>{e.type!=="loading"&&l(e["onUpdate:show"],!1)},e.duration)}return B(()=>e.show,u=>{u?(l(e.onOpen),i()):(clearTimeout(o.value),l(e.onClose))}),B(()=>e._update,()=>{clearTimeout(o.value),i()}),re(()=>{e.show&&(l(e.onOpen),i())}),{SNACKBAR_TYPE:J,zIndex:n,iconName:r,isForbidClick:a,n:Ee,classes:Ie}}});Y.render=Ne;var K=Y;const{name:Te,n:ze}=F("snackbar");function Ve(e,o){const n=C("var-snackbar-core");return c(),$(le,{to:e.teleport===!1?void 0:e.teleport,disabled:e.disabled||e.teleport===!1},[b(ie,{name:"".concat(e.n(),"-fade"),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:O(()=>[b(n,P(e.$props,{class:e.n("transition")}),se({default:O(()=>[d(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:O(()=>[d(e.$slots,"icon")]),key:"0"}:void 0,e.$slots.action?{name:"action",fn:O(()=>[d(e.$slots,"action")]),key:"1"}:void 0]),1040,["class"])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"])}const H=G({name:Te,components:{VarSnackbarCore:K},props:I,setup(){const{disabled:e}=ce();return{disabled:e,n:ze}}});H.render=Ve;var A=H,Be=Object.defineProperty,j=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,q=(e,o,n)=>o in e?Be(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,m=(e,o)=>{for(var n in o||(o={}))De.call(o,n)&&q(e,n,o[n]);if(j)for(var n of j(o))Le.call(o,n)&&q(e,n,o[n]);return e};const J=["loading","success","warning","info","error"];let U=0,_=!1,Q,v=!1;const X={type:void 0,content:"",icon:"",action:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}};let t=E([]),N=X;const je={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},k=e=>()=>ve(e)?e():e,qe={setup(){return()=>{const e=t.map(({id:o,reactiveSnackOptions:n,_update:a})=>{const r=document.querySelector(".var-transition-group");n.forbidClick||n.type==="loading"?r.classList.add("var-pointer-auto"):r.classList.remove("var-pointer-auto");const i=m({position:v?"relative":"absolute"},Ye(n.position)),{content:u,icon:h,action:Z}=n,W={default:k(u),icon:k(h),action:k(Z)};return b(K,P(n,{key:o,style:i,"data-id":o,_update:a,show:n.show,"onUpdate:show":x=>n.show=x}),W)});return b(me,P(je,{style:{zIndex:Oe.zIndex},onAfterEnter:Ue,onAfterLeave:Fe}),{default:()=>[e]})}}},s=function(e){const o=Me(e),n=E(m(m({},N),o));n.show=!0,_||(_=!0,Q=pe(qe).unmountInstance);const{length:a}=t,r={id:U++,reactiveSnackOptions:n};if(a===0||v)Ge(r);else{const i="update-".concat(U);Re(n,i)}return{clear(){!v&&t.length?t[0].reactiveSnackOptions.show=!1:n.show=!1}}};J.forEach(e=>{s[e]=o=>(de(o)?o.type=e:o={content:o,type:e},s(o))});s.allowMultiple=function(e=!1){e!==v&&(t.forEach(o=>{o.reactiveSnackOptions.show=!1}),v=e)};s.clear=function(){t.forEach(e=>{e.reactiveSnackOptions.show=!1})};s.setDefaultOptions=function(e){N=e};s.resetDefaultOptions=function(){N=X};function Ue(e){const o=e.getAttribute("data-id"),n=t.find(a=>a.id===R(o));n&&l(n.reactiveSnackOptions.onOpened)}function Fe(e){e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const o=e.getAttribute("data-id"),n=t.find(r=>r.id===R(o));n&&(n.animationEnd=!0,l(n.reactiveSnackOptions.onClosed)),t.every(r=>r.animationEnd)&&(l(Q),t=E([]),_=!1)}function Ge(e){t.push(e)}function Me(e={}){return fe(e)?{content:e}:e}function Re(e,o){const[n]=t;n.reactiveSnackOptions=m(m({},n.reactiveSnackOptions),e),n._update=o}function Ye(e="top"){return e==="bottom"?{top:"85%"}:{top:e==="top"?"5%":"45%"}}s.Component=A;M(A);M(A,s);ue(s,I);var Qe=s;export{Qe as s};