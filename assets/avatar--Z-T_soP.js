import{s as Rt}from"./index-hk4RlaDN.js";import{l as jt,w as re,aS as Ue,Y as me,aa as Nt,V as R,G as ge,a4 as At,o as N,C as I,F as It,O as it,K as j,X as x,H as se,d as ye,r as B,Z as lt,R as ne,$ as D,S as be,U as we,M as Ht,L as Fe,c as Z,aJ as Wt,Q as te,ap as Vt,ai as ut,aH as Ut,aj as Ft,q as Yt,t as Xt,al as ct,af as Ye,ab as pe,as as xt,g as qt,y as ft,I as Kt,ac as Gt,D as dt,N as Zt,P as Jt,aq as Qt,aA as _t,ae as er,j as tr,aD as rr,aG as nr,a1 as or,a9 as Xe,aT as xe,_ as ar,aU as sr,n as ir}from"./__uno--KafPJDN.js";import{u as lr}from"./shared--EFbdYCe.js";import{s as ur}from"./icon-4BzMejV4.js";const V=[];function cr(e,t){const{uid:r}=jt();re(e,l=>{l&&!i(r)?o():setTimeout(()=>{Ue(V,i(r))})}),me(()=>{e()&&o()}),Nt(()=>{Ue(V,i(r))});function n(){return V.length===0?!0:(V.sort((l,a)=>l.zIndex.value-a.zIndex.value),V[V.length-1].uid===r)}function o(){i(r)||V.push({uid:r,zIndex:t})}function i(l){return V.find(a=>a.uid===l)}return{onStackTop:n}}const pt={round:{type:Boolean,default:!0},size:{type:[String,Number],default:"normal"},alt:String,color:String,src:String,fit:{type:String,default:"cover"},bordered:Boolean,borderColor:String,loading:String,error:String,lazy:Boolean,hoverable:Boolean,onClick:R(),onLoad:R(),onError:R()},fr=e=>["mini","small","normal","large"].includes(e),{name:dr,n:pr,classes:vr}=ge("avatar"),hr=["src","alt","lazy-loading","lazy-error"],mr=["src","alt"];function gr(e,t){const r=At("lazy");return N(),I("div",{ref:"avatarElement",class:j(e.classes(e.n(),e.n("$--box"),[e.isInternalSize(e.size),e.n("--".concat(e.size))],[e.round,e.n("--round")],[e.bordered,e.n("--bordered")],[e.hoverable,e.n("--hoverable")])),style:x({width:e.isInternalSize(e.size)?void 0:e.toSizeUnit(e.size),height:e.isInternalSize(e.size)?void 0:e.toSizeUnit(e.size),borderColor:e.borderColor,backgroundColor:e.color}),onClick:t[3]||(t[3]=(...n)=>e.handleClick&&e.handleClick(...n))},[e.src?(N(),I(It,{key:0},[e.lazy?it((N(),I("img",{key:0,role:"img",class:j(e.n("image")),src:e.src,alt:e.alt,style:x({objectFit:e.fit}),"lazy-loading":e.loading,"lazy-error":e.error,onLoad:t[0]||(t[0]=(...n)=>e.handleLoad&&e.handleLoad(...n))},null,46,hr)),[[r,e.src]]):(N(),I("img",{key:1,role:"img",class:j(e.n("image")),src:e.src,alt:e.alt,style:x({objectFit:e.fit}),onLoad:t[1]||(t[1]=(...n)=>e.handleLoad&&e.handleLoad(...n)),onError:t[2]||(t[2]=(...n)=>e.handleError&&e.handleError(...n))},null,46,mr))],64)):(N(),I("div",{key:1,ref:"textElement",class:j(e.n("text")),style:x({transform:"scale(".concat(e.scale,")")})},[se(e.$slots,"default")],6))],6)}const vt=ye({name:dr,directives:{Lazy:Rt},props:pt,setup(e){const t=B(null),r=B(null),n=B(1);me(o),lt(o);function o(){if(!t.value||!r.value){n.value=1;return}const s=t.value.offsetWidth,c=r.value.offsetWidth;s>c?n.value=1:n.value=s/c}function i(s){const c=s.currentTarget,{lazy:u,onLoad:h,onError:y}=e;u?(c._lazy.state==="success"&&D(h,s),c._lazy.state==="error"&&D(y,s)):D(h,s)}function l(s){D(e.onError,s)}function a(s){D(e.onClick,s)}return{avatarElement:t,textElement:r,scale:n,n:pr,classes:vr,isInternalSize:fr,toSizeUnit:ne,handleLoad:i,handleError:l,handleClick:a}}});vt.render=gr;var Be=vt;be(Be);we(Be,pt);const Vn=Be,ht={inset:{type:[Boolean,Number,String],default:!1},vertical:Boolean,description:String,margin:String,dashed:Boolean,hairline:Boolean},{name:yr,n:br,classes:wr}=ge("divider");function Or(e,t){return N(),I("div",{class:j(e.classes(e.n(),e.n("$--box"),[e.vertical,e.n("--vertical")],[e.withText,e.n("--with-text")],[e.withPresetInset,e.n("--inset")],[e.dashed,e.n("--dashed")],[e.hairline,e.n("--hairline")])),style:x(e.style),role:"separator"},[e.vertical?Fe("v-if",!0):se(e.$slots,"default",{key:0},()=>[e.description?(N(),I("span",{key:0,class:j(e.n("text"))},Ht(e.description),3)):Fe("v-if",!0)])],6)}const mt=ye({name:yr,props:ht,setup(e,{slots:t}){const r=B(!1),n=Z(()=>{const{vertical:l,inset:a}=e;return!l&&a===!0}),o=Z(()=>{const{inset:l,vertical:a,margin:s}=e;if(Wt(l)||a)return{margin:s};const c=te(l),u=Math.abs(c)+(l+"").replace(c+"","");return{margin:s,width:"calc(100% - ".concat(ne(u),")"),left:c>0?ne(u):ne(0)}});me(i),lt(i);function i(){const{description:l,vertical:a}=e;r.value=(t.default||l!=null)&&!a}return{n:br,classes:wr,withText:r,style:o,withPresetInset:n}}});mt.render=Or;var De=mt;be(De);we(De,ht);const Un=De;var Sr={left:"right",right:"left",bottom:"top",top:"bottom"};function he(e){return e.replace(/left|right|bottom|top/g,function(t){return Sr[t]})}var H="top",Y="bottom",q="right",U="left",ze="auto",Oe=[H,Y,q,U],Se="start",ie="end",kr="clippingParents",gt="viewport",ee="popper",Cr="reference",qe=Oe.reduce(function(e,t){return e.concat([t+"-"+Se,t+"-"+ie])},[]),yt=[].concat(Oe,[ze]).reduce(function(e,t){return e.concat([t,t+"-"+Se,t+"-"+ie])},[]),Pr="beforeRead",Er="read",Tr="afterRead",$r="beforeMain",Mr="main",Br="afterMain",Dr="beforeWrite",zr="write",Lr="afterWrite",Rr=[Pr,Er,Tr,$r,Mr,Br,Dr,zr,Lr];function F(e){return e.split("-")[0]}var jr={start:"end",end:"start"};function Ke(e){return e.replace(/start|end/g,function(t){return jr[t]})}function z(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=z(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=z(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Le(e){if(typeof ShadowRoot>"u")return!1;var t=z(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function X(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}var oe=Math.max,Ge=Math.min,J=Math.round;function $e(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function bt(){return!/^((?!chrome|android).)*safari/i.test($e())}function Q(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&L(e)&&(o=e.offsetWidth>0&&J(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&J(n.height)/e.offsetHeight||1);var l=K(e)?z(e):window,a=l.visualViewport,s=!bt()&&r,c=(n.left+(s&&a?a.offsetLeft:0))/o,u=(n.top+(s&&a?a.offsetTop:0))/i,h=n.width/o,y=n.height/i;return{width:h,height:y,top:u,right:c+h,bottom:u+y,left:c,x:c,y:u}}function Re(e){var t=z(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function je(e){return Q(X(e)).left+Re(e).scrollLeft}function Nr(e,t){var r=z(e),n=X(e),o=r.visualViewport,i=n.clientWidth,l=n.clientHeight,a=0,s=0;if(o){i=o.width,l=o.height;var c=bt();(c||!c&&t==="fixed")&&(a=o.offsetLeft,s=o.offsetTop)}return{width:i,height:l,x:a+je(e),y:s}}function W(e){return z(e).getComputedStyle(e)}function Ar(e){var t,r=X(e),n=Re(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=oe(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=oe(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),a=-n.scrollLeft+je(e),s=-n.scrollTop;return W(o||r).direction==="rtl"&&(a+=oe(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}function A(e){return e?(e.nodeName||"").toLowerCase():null}function ke(e){return A(e)==="html"?e:e.assignedSlot||e.parentNode||(Le(e)?e.host:null)||X(e)}function Ne(e){var t=W(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function wt(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:L(e)&&Ne(e)?e:wt(ke(e))}function ae(e,t){var r;t===void 0&&(t=[]);var n=wt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=z(n),l=o?[i].concat(i.visualViewport||[],Ne(n)?n:[]):n,a=t.concat(l);return o?a:a.concat(ae(ke(l)))}function Ir(e){return["table","td","th"].indexOf(A(e))>=0}function Ze(e){return!L(e)||W(e).position==="fixed"?null:e.offsetParent}function Hr(e){var t=/firefox/i.test($e()),r=/Trident/i.test($e());if(r&&L(e)){var n=W(e);if(n.position==="fixed")return null}var o=ke(e);for(Le(o)&&(o=o.host);L(o)&&["html","body"].indexOf(A(o))<0;){var i=W(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Ae(e){for(var t=z(e),r=Ze(e);r&&Ir(r)&&W(r).position==="static";)r=Ze(r);return r&&(A(r)==="html"||A(r)==="body"&&W(r).position==="static")?t:r||Hr(e)||t}function Wr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Le(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Me(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Vr(e,t){var r=Q(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Je(e,t,r){return t===gt?Me(Nr(e,r)):K(t)?Vr(t,r):Me(Ar(X(e)))}function Ur(e){var t=ae(ke(e)),r=["absolute","fixed"].indexOf(W(e).position)>=0,n=r&&L(e)?Ae(e):e;return K(n)?t.filter(function(o){return K(o)&&Wr(o,n)&&A(o)!=="body"}):[]}function Fr(e,t,r,n){var o=t==="clippingParents"?Ur(e):[].concat(t),i=[].concat(o,[r]),l=i[0],a=i.reduce(function(s,c){var u=Je(e,c,n);return s.top=oe(u.top,s.top),s.right=Ge(u.right,s.right),s.bottom=Ge(u.bottom,s.bottom),s.left=oe(u.left,s.left),s},Je(e,l,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function le(e){return e.split("-")[1]}function Yr(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ot(e){var t=e.reference,r=e.element,n=e.placement,o=n?F(n):null,i=n?le(n):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(o){case H:s={x:l,y:t.y-r.height};break;case Y:s={x:l,y:t.y+t.height};break;case q:s={x:t.x+t.width,y:a};break;case U:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var c=o?Yr(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case Se:s[c]=s[c]-(t[u]/2-r[u]/2);break;case ie:s[c]=s[c]+(t[u]/2-r[u]/2);break}}return s}function Xr(){return{top:0,right:0,bottom:0,left:0}}function xr(e){return Object.assign({},Xr(),e)}function qr(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function St(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,l=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?kr:a,c=r.rootBoundary,u=c===void 0?gt:c,h=r.elementContext,y=h===void 0?ee:h,p=r.altBoundary,O=p===void 0?!1:p,m=r.padding,v=m===void 0?0:m,b=xr(typeof v!="number"?v:qr(v,Oe)),P=y===ee?Cr:ee,E=e.rects.popper,g=e.elements[O?P:y],S=Fr(K(g)?g:g.contextElement||X(e.elements.popper),s,u,l),k=Q(e.elements.reference),T=Ot({reference:k,element:E,strategy:"absolute",placement:o}),M=Me(Object.assign({},E,T)),C=y===ee?M:k,f={top:S.top-C.top+b.top,bottom:C.bottom-S.bottom+b.bottom,left:S.left-C.left+b.left,right:C.right-S.right+b.right},w=e.modifiersData.offset;if(y===ee&&w){var $=w[o];Object.keys(f).forEach(function(d){var G=[q,Y].indexOf(d)>=0?1:-1,ue=[H,Y].indexOf(d)>=0?"y":"x";f[d]+=$[ue]*G})}return f}function Kr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,l=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?yt:s,u=le(n),h=u?a?qe:qe.filter(function(O){return le(O)===u}):Oe,y=h.filter(function(O){return c.indexOf(O)>=0});y.length===0&&(y=h);var p=y.reduce(function(O,m){return O[m]=St(e,{placement:m,boundary:o,rootBoundary:i,padding:l})[F(m)],O},{});return Object.keys(p).sort(function(O,m){return p[O]-p[m]})}function Gr(e){if(F(e)===ze)return[];var t=he(e);return[Ke(e),t,Ke(t)]}function Zr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,l=r.altAxis,a=l===void 0?!0:l,s=r.fallbackPlacements,c=r.padding,u=r.boundary,h=r.rootBoundary,y=r.altBoundary,p=r.flipVariations,O=p===void 0?!0:p,m=r.allowedAutoPlacements,v=t.options.placement,b=F(v),P=b===v,E=s||(P||!O?[he(v)]:Gr(v)),g=[v].concat(E).reduce(function(de,_){return de.concat(F(_)===ze?Kr(t,{placement:_,boundary:u,rootBoundary:h,padding:c,flipVariations:O,allowedAutoPlacements:m}):_)},[]),S=t.rects.reference,k=t.rects.popper,T=new Map,M=!0,C=g[0],f=0;f<g.length;f++){var w=g[f],$=F(w),d=le(w)===Se,G=[H,Y].indexOf($)>=0,ue=G?"width":"height",Ce=St(t,{placement:w,boundary:u,rootBoundary:h,altBoundary:y,padding:c}),ce=G?d?q:U:d?Y:H;S[ue]>k[ue]&&(ce=he(ce));var $t=he(ce),fe=[];if(i&&fe.push(Ce[$]<=0),a&&fe.push(Ce[ce]<=0,Ce[$t]<=0),fe.every(function(de){return de})){C=w,M=!1;break}T.set(w,fe)}if(M)for(var Mt=O?3:1,Bt=function(_){var We=g.find(function(zt){var Ve=T.get(zt);if(Ve)return Ve.slice(0,_).every(function(Lt){return Lt})});if(We)return C=We,"break"},Pe=Mt;Pe>0;Pe--){var Dt=Bt(Pe);if(Dt==="break")break}t.placement!==C&&(t.modifiersData[n]._skip=!0,t.placement=C,t.reset=!0)}}const Jr={name:"flip",enabled:!0,phase:"main",fn:Zr,requiresIfExists:["offset"],data:{_skip:!1}};function Qr(e,t,r){var n=F(e),o=[U,H].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],a=i[1];return l=l||0,a=(a||0)*o,[U,q].indexOf(n)>=0?{x:a,y:l}:{x:l,y:a}}function _r(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,l=yt.reduce(function(u,h){return u[h]=Qr(h,t.rects,i),u},{}),a=l[t.placement],s=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=l}const en={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:_r};var tn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function rn(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:J(r*o)/o||0,y:J(n*o)/o||0}}function Qe(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,h=e.isFixed,y=l.x,p=y===void 0?0:y,O=l.y,m=O===void 0?0:O,v=typeof u=="function"?u({x:p,y:m}):{x:p,y:m};p=v.x,m=v.y;var b=l.hasOwnProperty("x"),P=l.hasOwnProperty("y"),E=U,g=H,S=window;if(c){var k=Ae(r),T="clientHeight",M="clientWidth";if(k===z(r)&&(k=X(r),W(k).position!=="static"&&a==="absolute"&&(T="scrollHeight",M="scrollWidth")),k=k,o===H||(o===U||o===q)&&i===ie){g=Y;var C=h&&k===S&&S.visualViewport?S.visualViewport.height:k[T];m-=C-n.height,m*=s?1:-1}if(o===U||(o===H||o===Y)&&i===ie){E=q;var f=h&&k===S&&S.visualViewport?S.visualViewport.width:k[M];p-=f-n.width,p*=s?1:-1}}var w=Object.assign({position:a},c&&tn),$=u===!0?rn({x:p,y:m},z(r)):{x:p,y:m};if(p=$.x,m=$.y,s){var d;return Object.assign({},w,(d={},d[g]=P?"0":"",d[E]=b?"0":"",d.transform=(S.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",d))}return Object.assign({},w,(t={},t[g]=P?m+"px":"",t[E]=b?p+"px":"",t.transform="",t))}function nn(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,l=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,c={placement:F(t.placement),variation:le(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const kt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nn,data:{}};function on(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function an(e){return e===z(e)||!L(e)?Re(e):on(e)}function sn(e){var t=e.getBoundingClientRect(),r=J(t.width)/e.offsetWidth||1,n=J(t.height)/e.offsetHeight||1;return r!==1||n!==1}function ln(e,t,r){r===void 0&&(r=!1);var n=L(t),o=L(t)&&sn(t),i=X(t),l=Q(e,o,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((A(t)!=="body"||Ne(i))&&(a=an(t)),L(t)?(s=Q(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=je(i))),{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function un(e){var t=Q(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function cn(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&o(s)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function fn(e){var t=cn(e);return Rr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function dn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function pn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var _e={placement:"bottom",modifiers:[],strategy:"absolute"};function et(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function vn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?_e:o;return function(a,s,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},_e,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},h=[],y=!1,p={state:u,setOptions:function(b){var P=typeof b=="function"?b(u.options):b;m(),u.options=Object.assign({},i,u.options,P),u.scrollParents={reference:K(a)?ae(a):a.contextElement?ae(a.contextElement):[],popper:ae(s)};var E=fn(pn([].concat(n,u.options.modifiers)));return u.orderedModifiers=E.filter(function(g){return g.enabled}),O(),p.update()},forceUpdate:function(){if(!y){var b=u.elements,P=b.reference,E=b.popper;if(et(P,E)){u.rects={reference:ln(P,Ae(E),u.options.strategy==="fixed"),popper:un(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(f){return u.modifiersData[f.name]=Object.assign({},f.data)});for(var g=0;g<u.orderedModifiers.length;g++){if(u.reset===!0){u.reset=!1,g=-1;continue}var S=u.orderedModifiers[g],k=S.fn,T=S.options,M=T===void 0?{}:T,C=S.name;typeof k=="function"&&(u=k({state:u,options:M,name:C,instance:p})||u)}}}},update:dn(function(){return new Promise(function(v){p.forceUpdate(),v(u)})}),destroy:function(){m(),y=!0}};if(!et(a,s))return p;p.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function O(){u.orderedModifiers.forEach(function(v){var b=v.name,P=v.options,E=P===void 0?{}:P,g=v.effect;if(typeof g=="function"){var S=g({state:u,name:b,instance:p,options:E}),k=function(){};h.push(S||k)}})}function m(){h.forEach(function(v){return v()}),h=[]}return p}}var ve={passive:!0};function hn(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,l=n.resize,a=l===void 0?!0:l,s=z(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",r.update,ve)}),a&&s.addEventListener("resize",r.update,ve),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",r.update,ve)}),a&&s.removeEventListener("resize",r.update,ve)}}const mn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:hn,data:{}};function gn(e){var t=e.state,r=e.name;t.modifiersData[r]=Ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yn={name:"popperOffsets",enabled:!0,phase:"read",fn:gn,data:{}};function bn(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!L(i)||!A(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(l){var a=o[l];a===!1?i.removeAttribute(l):i.setAttribute(l,a===!0?"":a)}))})}function wn(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},l=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),a=l.reduce(function(s,c){return s[c]="",s},{});!L(o)||!A(o)||(Object.assign(o.style,a),Object.keys(i).forEach(function(s){o.removeAttribute(s)}))})}}const On={name:"applyStyles",enabled:!0,phase:"write",fn:bn,effect:wn,requires:["computeStyles"]};var Sn=[mn,yn,kt,On],kn=vn({defaultModifiers:Sn}),Cn=Object.defineProperty,Pn=Object.defineProperties,En=Object.getOwnPropertyDescriptors,tt=Object.getOwnPropertySymbols,Tn=Object.prototype.hasOwnProperty,$n=Object.prototype.propertyIsEnumerable,rt=(e,t,r)=>t in e?Cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ee=(e,t)=>{for(var r in t||(t={}))Tn.call(t,r)&&rt(e,r,t[r]);if(tt)for(var r of tt(t))$n.call(t,r)&&rt(e,r,t[r]);return e},Te=(e,t)=>Pn(e,En(t)),nt=(e,t,r)=>new Promise((n,o)=>{var i=s=>{try{a(r.next(s))}catch(c){o(c)}},l=s=>{try{a(r.throw(s))}catch(c){o(c)}},a=s=>s.done?n(s.value):Promise.resolve(s.value).then(i,l);a((r=r.apply(e,t)).next())});function Mn(e){const t=B(null),r=B(null),n=B({width:0,height:0}),o=Vt(e,"show",{passive:!0,defaultValue:!1,emit(f,w){w?D(e.onOpen):D(e.onClose)}}),{zIndex:i}=lr(()=>o.value,1);cr(()=>o.value,i);let l=null,a=!1,s=!1;const c=()=>{if(!t.value)return;const{width:f,height:w}=xt(t.value);n.value={width:pe(f),height:pe(w)}},u=()=>{switch(e.placement){case"top":case"cover-bottom":return"bottom";case"top-start":case"right-end":case"cover-bottom-start":return"bottom left";case"top-end":case"left-end":case"cover-bottom-end":return"bottom right";case"bottom":case"cover-top":return"top";case"bottom-start":case"right-start":case"cover-top-start":return"top left";case"bottom-end":case"left-start":case"cover-top-end":return"top right";case"left":case"cover-right":return"right";case"right":case"cover-left":return"left"}},h=()=>{e.trigger==="hover"&&(s=!0,M())},y=()=>nt(this,null,function*(){e.trigger==="hover"&&(s=!1,yield Ye(),!a&&C())}),p=()=>{e.trigger==="hover"&&(a=!0)},O=()=>nt(this,null,function*(){e.trigger==="hover"&&(a=!1,yield Ye(),!s&&C())}),m=()=>{e.closeOnClickReference&&o.value?C():M()},v=()=>{C()},b=f=>{e.trigger==="click"&&(v(),D(e.onClickOutside,f))},P=()=>{T(),D(e.onClosed)},E=()=>{const{offsetX:f,offsetY:w,placement:$}=e;c();const d={x:pe(f),y:pe(w)};switch($){case"cover-top":return{placement:"bottom",skidding:d.x,distance:d.y-n.value.height};case"cover-top-start":return{placement:"bottom-start",skidding:d.x,distance:d.y-n.value.height};case"cover-top-end":return{placement:"bottom-end",skidding:d.x,distance:d.y-n.value.height};case"cover-bottom":return{placement:"top",skidding:d.x,distance:-d.y-n.value.height};case"cover-bottom-start":return{placement:"top-start",skidding:d.x,distance:-d.y-n.value.height};case"cover-bottom-end":return{placement:"top-end",skidding:d.x,distance:-d.y-n.value.height};case"cover-left":return{placement:"right",skidding:d.y,distance:d.x-n.value.width};case"cover-right":return{placement:"left",skidding:d.y,distance:-d.x-n.value.width};case"left":case"left-start":case"left-end":return{placement:$,skidding:d.y,distance:-d.x};case"top":case"top-start":case"top-end":return{placement:$,skidding:d.x,distance:-d.y};case"bottom":case"bottom-start":case"bottom-end":return{placement:$,skidding:d.x,distance:d.y};case"right":case"right-start":case"right-end":return{placement:$,skidding:d.y,distance:d.x}}},g=()=>{const{placement:f,skidding:w,distance:$}=E(),d=[Te(Ee({},Jr),{enabled:o.value}),Te(Ee({},en),{options:{offset:[w,$]}}),Te(Ee({},kt),{options:{adaptive:!1,gpuAcceleration:!1},enabled:o.value}),{name:"applyTransformOrigin",enabled:o.value,phase:"beforeWrite",fn({state:G}){G.styles.popper.transformOrigin=u()}}];return{placement:f,modifiers:d,strategy:e.strategy}},S=()=>e.reference?t.value.querySelector(e.reference):t.value,k=f=>{const{closeOnKeyEscape:w=!1}=e;f.key==="Escape"&&w&&o.value&&(ct(f),C())},T=()=>{l.setOptions(g())},M=()=>{e.disabled||(o.value=!0,D(e["onUpdate:show"],!0))},C=()=>{o.value=!1,D(e["onUpdate:show"],!1)};return ut(()=>window,"keydown",k),Ut(S,"click",b),Ft(T),re(()=>[e.offsetX,e.offsetY,e.placement,e.strategy],T),re(()=>e.disabled,C),re(()=>o.value,f=>{f&&T()}),Yt(()=>{var f;l=kn((f=S())!=null?f:t.value,r.value,g())}),Xt(()=>{l.destroy()}),{show:o,popover:r,zIndex:i,host:t,hostSize:n,handleHostClick:m,handleHostMouseenter:h,handleHostMouseleave:y,handlePopoverClose:v,handlePopoverMouseenter:p,handlePopoverMouseleave:O,handleClosed:P,resize:T,open:M,close:C}}const Ct={show:Boolean,disabled:Boolean,trigger:{type:String,default:"click"},reference:String,placement:{type:String,default:"cover-top-start"},strategy:{type:String,default:"absolute"},offsetX:{type:[Number,String],default:0},offsetY:{type:[Number,String],default:0},teleport:{type:[String,Object,Boolean],default:"body"},sameWidth:Boolean,elevation:{type:[Boolean,String,Number],default:!0},defaultStyle:{type:Boolean,default:!0},popoverClass:String,closeOnClickReference:Boolean,closeOnKeyEscape:{type:Boolean,default:!0},onOpen:R(),onOpened:R(),onClose:R(),onClosed:R(),onClickOutside:R(),"onUpdate:show":R()},{name:Bn,n:Dn,classes:zn}=ge("menu");function Ln(e,t){return N(),I("div",{ref:"host",class:j(e.classes(e.n(),e.n("$--box"))),onClick:t[3]||(t[3]=(...r)=>e.handleHostClick&&e.handleHostClick(...r)),onMouseenter:t[4]||(t[4]=(...r)=>e.handleHostMouseenter&&e.handleHostMouseenter(...r)),onMouseleave:t[5]||(t[5]=(...r)=>e.handleHostMouseleave&&e.handleHostMouseleave(...r))},[se(e.$slots,"default"),(N(),qt(Qt,{to:e.teleport===!1?void 0:e.teleport,disabled:e.teleportDisabled||e.teleport===!1},[ft(Jt,{name:e.n(),onAfterEnter:e.onOpened,onAfterLeave:e.handleClosed,persisted:""},{default:Kt(()=>[it(dt("div",{ref:"popover",style:x({zIndex:e.zIndex,width:e.sameWidth?e.toSizeUnit(Math.ceil(e.hostSize.width)):void 0}),class:j(e.classes(e.n("menu"),e.n("$--box"),e.popoverClass,[e.defaultStyle,e.n("--menu-background-color")],[e.defaultStyle,e.formatElevation(e.elevation,3)])),onClick:t[0]||(t[0]=Gt(()=>{},["stop"])),onMouseenter:t[1]||(t[1]=(...r)=>e.handlePopoverMouseenter&&e.handlePopoverMouseenter(...r)),onMouseleave:t[2]||(t[2]=(...r)=>e.handlePopoverMouseleave&&e.handlePopoverMouseleave(...r))},[se(e.$slots,"menu")],38),[[Zt,e.show]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to","disabled"]))],34)}const Pt=ye({name:Bn,props:Ct,setup(e){const{disabled:t}=_t(),{popover:r,host:n,hostSize:o,show:i,zIndex:l,handleHostClick:a,handleHostMouseenter:s,handleHostMouseleave:c,handlePopoverMouseenter:u,handlePopoverMouseleave:h,handlePopoverClose:y,handleClosed:p,open:O,close:m,resize:v}=Mn(e);return{popover:r,host:n,hostSize:o,show:i,zIndex:l,teleportDisabled:t,formatElevation:er,toSizeUnit:ne,n:Dn,classes:zn,handleHostClick:a,handleHostMouseenter:s,handleHostMouseleave:c,handlePopoverMouseenter:u,handlePopoverMouseleave:h,handlePopoverClose:y,handleClosed:p,resize:v,open:O,close:m}}});Pt.render=Ln;var Ie=Pt;be(Ie);we(Ie,Ct);const Fn=Ie,Et={modelValue:Boolean,disabled:Boolean,animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:String,successBgColor:String,color:String,successColor:String,target:[String,Object],onRefresh:R(),"onUpdate:modelValue":R()};var ot=(e,t,r)=>new Promise((n,o)=>{var i=s=>{try{a(r.next(s))}catch(c){o(c)}},l=s=>{try{a(r.throw(s))}catch(c){o(c)}},a=s=>s.done?n(s.value):Promise.resolve(s.value).then(i,l);a((r=r.apply(e,t)).next())});const{name:Rn,n:at,classes:jn}=ge("pull-refresh"),st=150;function Nn(e,t){const r=tr("var-icon");return N(),I("div",{ref:"freshNode",class:j(e.n()),onTouchstart:t[0]||(t[0]=(...n)=>e.handleTouchstart&&e.handleTouchstart(...n)),onTouchend:t[1]||(t[1]=(...n)=>e.handleTouchend&&e.handleTouchend(...n)),onTouchcancel:t[2]||(t[2]=(...n)=>e.handleTouchend&&e.handleTouchend(...n))},[dt("div",{ref:"controlNode",class:j(e.classes(e.n("control"),e.n("$-elevation--2"),[e.isSuccess,e.n("control-success")])),style:x(e.controlStyle)},[ft(r,{name:e.iconName,transition:e.ICON_TRANSITION,class:j(e.classes(e.n("icon"),[e.refreshStatus==="loading",e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),se(e.$slots,"default")],34)}const Tt=ye({name:Rn,components:{VarIcon:ur},props:Et,setup(e){const t=B(0),r=B(null),n=B(null),o=B(0),i=B("-125%"),l=B("arrow-down"),a=B("default"),s=B(!1),c=Z(()=>Math.abs(2*t.value)),u=Z(()=>a.value==="success"),h=Z(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),y=Z(()=>({transform:"translate3d(0px, ".concat(rr(i.value)?i.value:"".concat(i.value,"px"),", 0px) translate(-50%, 0)"),transition:s.value?"transform ".concat(e.animationDuration,"ms"):void 0,background:u.value?e.successBgColor:e.bgColor,color:u.value?e.successColor:e.color})),{startTouch:p,moveTouch:O,endTouch:m,isReachTop:v}=nr();let b,P;re(()=>e.modelValue,f=>{f===!1&&(s.value=!0,a.value="success",l.value="checkbox-marked-circle",setTimeout(()=>{i.value=t.value,C()},te(e.successDuration)))}),me(M),ut(r,"touchmove",k);function E(f){return ot(this,null,function*(){if(l.value!==f)return l.value=f,new Promise(w=>{window.setTimeout(w,st)})})}function g(f){("classList"in b?b:document.body).classList[f]("".concat(at(),"--lock"))}function S(f){if(p(f),t.value===0){const{width:w}=or(n.value);t.value=-(w+w*.25)}P=Xe(f.target)}function k(f){if(O(f),!h.value||!P||P!==b&&xe(P)>0||xe(b)>0)return;v(b)&&ct(f),a.value!=="pulling"&&(a.value="pulling",o.value=f.touches[0].clientY),v(b)&&ar(i.value)&&i.value>t.value&&g("add");const $=(f.touches[0].clientY-o.value)/2+t.value;i.value=$>=c.value?c.value:$,E(i.value>=c.value*.2?"refresh":"arrow-down")}function T(){return ot(this,null,function*(){m(),h.value&&(s.value=!0,te(i.value)>=c.value*.2?(yield E("refresh"),a.value="loading",i.value=c.value*.3,D(e["onUpdate:modelValue"],!0),ir(()=>{D(e.onRefresh)}),g("remove")):(a.value="loosing",l.value="arrow-down",i.value=t.value,setTimeout(()=>{s.value=!1,g("remove")},te(e.animationDuration))),P=null)})}function M(){b=e.target?sr(e.target,"PullRefresh"):Xe(r.value)}function C(){setTimeout(()=>{a.value="default",l.value="arrow-down",s.value=!1},te(e.animationDuration))}return{ICON_TRANSITION:st,refreshStatus:a,freshNode:r,controlNode:n,iconName:l,controlStyle:y,isSuccess:u,n:at,classes:jn,handleTouchstart:S,handleTouchmove:k,handleTouchend:T}}});Tt.render=Nn;var He=Tt;be(He);we(He,Et);const Yn=He,Xn=""+new URL("avatar-GEjKuFMv.jpg",import.meta.url).href;export{Yn as _,Fn as a,Un as b,Xn as c,Vn as d,cr as e,Mn as u};
