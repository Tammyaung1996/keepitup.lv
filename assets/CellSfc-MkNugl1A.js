import{p,s as S,b}from"./icon-4BzMejV4.js";import{E as f,V as k,G as y,j as g,a4 as $,O,o as n,C as r,H as i,K as s,y as h,L as l,D as B,M as m,X as D,d as N,c as V,R as d,$ as w,S as z,U as P}from"./__uno--KafPJDN.js";const C={title:String,icon:f(p,"name"),namespace:f(p,"namespace"),description:String,border:Boolean,borderOffset:[Number,String],iconClass:String,titleClass:String,descriptionClass:String,extraClass:String,ripple:Boolean,onClick:k()},{name:E,n:I,classes:L}=y("cell");function R(e,a){const o=g("var-icon"),t=$("ripple");return O((n(),r("div",{class:s(e.classes(e.n(),[e.border,e.n("--border")],[e.onClick,e.n("--cursor")])),style:D(e.borderOffsetStyles),onClick:a[0]||(a[0]=(...v)=>e.handleClick&&e.handleClick(...v))},[i(e.$slots,"icon",{},()=>[e.icon?(n(),r("div",{key:0,class:s(e.classes(e.n("icon"),e.iconClass))},[h(o,{name:e.icon,namespace:e.namespace},null,8,["name","namespace"])],2)):l("v-if",!0)]),B("div",{class:s(e.n("content"))},[i(e.$slots,"default",{},()=>[e.title?(n(),r("div",{key:0,class:s(e.classes(e.n("title"),e.titleClass))},m(e.title),3)):l("v-if",!0)]),i(e.$slots,"description",{},()=>[e.description?(n(),r("div",{key:0,class:s(e.classes(e.n("description"),e.descriptionClass))},m(e.description),3)):l("v-if",!0)])],2),e.$slots.extra?(n(),r("div",{key:0,class:s(e.classes(e.n("extra"),e.extraClass))},[i(e.$slots,"extra")],2)):l("v-if",!0)],6)),[[t,{disabled:!e.ripple}]])}const u=N({name:E,components:{VarIcon:S},directives:{Ripple:b},props:C,setup(e){const a=V(()=>e.borderOffset==null?{}:{"--cell-border-left":d(e.borderOffset),"--cell-border-right":d(e.borderOffset)});function o(t){w(e.onClick,t)}return{borderOffsetStyles:a,n:I,classes:L,toSizeUnit:d,handleClick:o}}});u.render=R;var c=u;z(c);P(c,C);const G=c;export{G as _};