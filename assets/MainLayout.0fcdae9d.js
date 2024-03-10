import{c as $,h as j,a as ae,b as re,Q as U}from"./QIcon.be38c0f3.js";import{c as d,h as g,r as x,i as te,o as P,a as V,n as oe,d as K,g as Q,l as M,e as ne,f as q,w as S,j as A,p as le,k as se,m as R,q as ue,_ as ce,s as F,t as B,u as G,v as w,x as m,y as H,z as J,F as de,A as fe,B as ve}from"./index.55b4a059.js";import{Q as N}from"./QBtn.39e7909e.js";import{g as he,a as me,b as ge,c as D}from"./scroll.e9e21afe.js";import{D as pe}from"./DefaultButton.03be08ec.js";var X=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:h}){const o=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:o.value},j(h.default))}}),Y=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:h}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:o.value,role:"toolbar"},j(h.default))}});function be(){const e=x(!te.value);return e.value===!1&&P(()=>{e.value=!0}),e}const ie=typeof ResizeObserver!="undefined",Z=ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var W=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:h}){let o=null,t,l={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==l.width||i!==l.height)&&(l={width:r,height:i},h("resize",l))}}const{proxy:f}=Q();if(f.trigger=s,ie===!0){let r;const i=p=>{t=f.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):p!==!0&&K(()=>{i(!0)})};return P(()=>{i()}),V(()=>{o!==null&&clearTimeout(o),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),oe}else{let p=function(){o!==null&&(clearTimeout(o),o=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,M.passive),i=void 0)},b=function(){p(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,M.passive),u())};const r=be();let i;return P(()=>{K(()=>{t=f.$el,t&&b()})}),V(p),()=>{if(r.value===!0)return g("object",{class:"q--avoid-card-border",style:Z.style,tabindex:-1,type:"text/html",data:Z.url,"aria-hidden":"true",onLoad:b})}}}}),ye=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:h,emit:o}){const{proxy:{$q:t}}=Q(),l=ne(A,q);if(l===q)return console.error("QHeader needs to be child of QLayout"),q;const s=x(parseInt(e.heightHint,10)),u=x(!0),f=d(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||t.platform.is.ios&&l.isContainer.value===!0),r=d(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?s.value:0;const n=s.value-l.scroll.value.position;return n>0?n:0}),i=d(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),p=d(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const n=l.rows.value.top,y={};return n[0]==="l"&&l.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),y});function c(n,y){l.update("header",n,y)}function _(n,y){n.value!==y&&(n.value=y)}function k({height:n}){_(s,n),c("size",n)}function O(n){p.value===!0&&_(u,!0),o("focusin",n)}S(()=>e.modelValue,n=>{c("space",n),_(u,!0),l.animate()}),S(r,n=>{c("offset",n)}),S(()=>e.reveal,n=>{n===!1&&_(u,e.modelValue)}),S(u,n=>{l.animate(),o("reveal",n)}),S(l.scroll,n=>{e.reveal===!0&&_(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const L={};return l.instances.header=L,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),V(()=>{l.instances.header===L&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=ae(h.default,[]);return e.elevated===!0&&n.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(g(W,{debounce:0,onResize:k})),g("header",{class:b.value,style:z.value,onFocusin:O},n)}}}),_e=$({name:"QPageContainer",setup(e,{slots:h}){const{proxy:{$q:o}}=Q(),t=ne(A,q);if(t===q)return console.error("QPageContainer needs to be child of QLayout"),q;le(se,!0);const l=d(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:l.value},j(h.default))}});const{passive:ee}=M,we=["both","horizontal","vertical"];var xe=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>we.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:h}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,s;S(()=>e.scrollTarget,()=>{r(),f()});function u(){t!==null&&t();const b=Math.max(0,me(l)),z=ge(l),c={top:b-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const _=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:b,left:z},o.directionChanged=o.direction!==_,o.delta=c,o.directionChanged===!0&&(o.direction=_,o.inflectionPoint=o.position),h("scroll",{...o})}function f(){l=he(s,e.scrollTarget),l.addEventListener("scroll",i,ee),i(!0)}function r(){l!==void 0&&(l.removeEventListener("scroll",i,ee),l=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:p}=Q();return S(()=>p.$q.lang.rtl,u),P(()=>{s=p.$el.parentNode,f()}),V(()=>{t!==null&&t(),r()}),Object.assign(p,{trigger:i,getPosition:()=>o}),oe}}),ze=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:h,emit:o}){const{proxy:{$q:t}}=Q(),l=x(null),s=x(t.screen.height),u=x(e.container===!0?0:t.screen.width),f=x({position:0,direction:"down",inflectionPoint:0}),r=x(0),i=x(te.value===!0?0:D()),p=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=d(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function _(a){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};f.value=v,e.onScroll!==void 0&&o("scroll",v)}}function k(a){const{height:v,width:T}=a;let C=!1;s.value!==v&&(C=!0,s.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),L()),u.value!==T&&(C=!0,u.value=T),C===!0&&e.onResize!==void 0&&o("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,L())}function L(){if(e.container===!0){const a=s.value>r.value?D():0;i.value!==a&&(i.value=a)}}let n=null;const y={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:d(()=>u.value+i.value),rows:d(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:f,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,v,T){y[a][v]=T}};if(le(A,y),D()>0){let T=function(){a=null,v.classList.remove("hide-scrollbar")},C=function(){if(a===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(T,300)},E=function(I){a!==null&&I==="remove"&&(clearTimeout(a),T()),window[`${I}EventListener`]("resize",C)},a=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ue(()=>{E("remove")})}return()=>{const a=re(h.default,[g(xe,{onScroll:_}),g(W,{onResize:k})]),v=g("div",{class:p.value,style:b.value,ref:e.container===!0?void 0:l,tabindex:-1},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:l},[g(W,{onResize:O}),g("div",{class:"absolute-full",style:z.value},[g("div",{class:"scroll",style:c.value},[v])])]):v}}});const Se={name:"MainLayout",components:{DefaultButton:pe},data(){return{}}},Te={key:0,class:"q-py-xs q-pl-lg"},$e={class:"footer__contact"};function qe(e,h,o,t,l,s){const u=F("router-link"),f=F("DefaultButton"),r=F("router-view");return B(),G(ze,{view:"hHh lpR fFf"},{default:w(()=>[m(ye,{class:"bg-dark shadow-3 header flex-center flex"},{default:w(()=>[m(Y,null,{default:w(()=>[m(X,null,{default:w(()=>[m(u,{class:"items-center header__logo",to:"/",style:{display:"inline-flex"}},{default:w(()=>[m(U,{size:"xl",name:"mdi-unity"}),H(" Cool School ")]),_:1})]),_:1}),this.$route.name!=="login"?(B(),J("div",Te,[e.$store.getters.isAuth?(B(),G(f,{key:0,class:"xs-hide",label:"\u041F\u0440\u043E\u0444\u0438\u043B\u044C",to:"/account"})):(B(),J(de,{key:1},[m(f,{class:"xs-hide",label:"\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",to:"/login"}),m(N,{class:"xs",icon:"login",size:"xl",to:"/login",flat:""})],64))])):fe("",!0)]),_:1})]),_:1}),m(_e,null,{default:w(()=>[m(r)]),_:1}),m(Y,{class:"shadow-up-3 footer"},{default:w(()=>[m(U,{size:"xl",name:"mdi-unity"}),m(X,null,{default:w(()=>[H(" Cool School ")]),_:1}),ve("div",$e,[m(N,{unelevated:"",rounded:"",flat:"",icon:"mail",href:"mailto:asd@mail.ru"},{default:w(()=>[H("\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C")]),_:1}),m(N,{unelevated:"",rounded:"",flat:"",icon:"phone",href:"tel:+123"},{default:w(()=>[H("\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430\u043C")]),_:1})])]),_:1})]),_:1})}var He=ce(Se,[["render",qe]]);export{He as default};
