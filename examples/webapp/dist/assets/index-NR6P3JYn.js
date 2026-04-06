var K0=Object.defineProperty;var Up=n=>{throw TypeError(n)};var Z0=(n,e,t)=>e in n?K0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Xi=(n,e,t)=>Z0(n,typeof e!="symbol"?e+"":e,t),Zu=(n,e,t)=>e.has(n)||Up("Cannot "+t);var ie=(n,e,t)=>(Zu(n,e,"read from private field"),t?t.call(n):e.get(n)),gt=(n,e,t)=>e.has(n)?Up("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),yt=(n,e,t,i)=>(Zu(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),tn=(n,e,t)=>(Zu(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const J0="5";var Xg;typeof window<"u"&&((Xg=window.__svelte??(window.__svelte={})).v??(Xg.v=new Set)).add(J0);const $0=1,Q0=2,qg=4,ex=8,tx=16,nx=1,ix=2,jg=4,rx=8,sx=16,ox=1,ax=2,lx=4,cx=1,ux=2,Cn=Symbol(),Kg="http://www.w3.org/1999/xhtml",fx=!1;var xd=Array.isArray,hx=Array.prototype.indexOf,Ra=Array.prototype.includes,yu=Array.from,Zg=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Jg=Object.getOwnPropertyDescriptors,dx=Object.prototype,px=Array.prototype,yd=Object.getPrototypeOf,Np=Object.isExtensible;function fa(n){return typeof n=="function"}const xn=()=>{};function mx(n){return typeof(n==null?void 0:n.then)=="function"}function gx(n){return n()}function iu(n){for(var e=0;e<n.length;e++)n[e]()}function $g(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}function Sd(n,e){if(Array.isArray(n))return n;if(!(Symbol.iterator in n))return Array.from(n);const t=[];for(const i of n)if(t.push(i),t.length===e)break;return t}const Pn=2,Ca=4,Hl=8,Qg=1<<24,Dr=16,ar=32,bo=64,Zf=128,Fi=512,dn=1024,Fn=2048,lr=4096,li=8192,Ti=16384,Gs=32768,Jf=1<<25,os=65536,$f=1<<17,_x=1<<18,Ha=1<<19,e_=1<<20,Rr=1<<25,Eo=65536,Qf=1<<21,Su=1<<22,Is=1<<23,Cr=Symbol("$state"),t_=Symbol("legacy props"),vx=Symbol(""),jr=new class extends Error{constructor(){super(...arguments);Xi(this,"name","StaleReactionError");Xi(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Js(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Md(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function xx(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function yx(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Sx(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Mx(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function bx(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Ex(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function wx(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function Tx(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ax(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rx(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Cx(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Px(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Lx(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function n_(n){return n===this.v}function i_(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function r_(n){return!i_(n,this.v)}let Ga=!1,Dx=!1;function Ix(){Ga=!0}let Nt=null;function Pa(n){Nt=n}function eh(n){return s_().get(n)}function Ju(n,e){return s_().set(n,e),e}function Xt(n,e=!1,t){Nt={p:Nt,i:!1,c:null,e:null,s:n,x:null,r:mt,l:Ga&&!e?{s:null,u:null,$:[]}:null}}function Yt(n){var e=Nt,t=e.e;if(t!==null){e.e=null;for(var i of t)C_(i)}return e.i=!0,Nt=e.p,{}}function Io(){return!Ga||Nt!==null&&Nt.l===null}function s_(n){return Nt===null&&Md(),Nt.c??(Nt.c=new Map(Ux(Nt)||void 0))}function Ux(n){let e=n.p;for(;e!==null;){const t=e.c;if(t!==null)return t;e=e.p}return null}let uo=[];function o_(){var n=uo;uo=[],iu(n)}function Pr(n){if(uo.length===0&&!_a){var e=uo;queueMicrotask(()=>{e===uo&&o_()})}uo.push(n)}function Nx(){for(;uo.length>0;)o_()}function a_(n){var e=mt;if(e===null)return _t.f|=Is,n;if(!(e.f&Gs)&&!(e.f&Ca))throw n;Ls(n,e)}function Ls(n,e){for(;e!==null;){if(e.f&Zf){if(!(e.f&Gs))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}const Ox=-7169;function on(n,e){n.f=n.f&Ox|e}function bd(n){n.f&Fi||n.deps===null?on(n,dn):on(n,lr)}function l_(n){if(n!==null)for(const e of n)!(e.f&Pn)||!(e.f&Eo)||(e.f^=Eo,l_(e.deps))}function c_(n,e,t){n.f&Fn?e.add(n):n.f&lr&&t.add(n),l_(n.deps),on(n,dn)}function Ed(n,e,t){if(n==null)return e(void 0),t&&t(void 0),xn;const i=ui(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}const Ko=[];function Fx(n,e){return{subscribe:da(n,e).subscribe}}function da(n,e=xn){let t=null;const i=new Set;function r(a){if(i_(n,a)&&(n=a,t)){const l=!Ko.length;for(const c of i)c[1](),Ko.push(c,n);if(l){for(let c=0;c<Ko.length;c+=2)Ko[c][0](Ko[c+1]);Ko.length=0}}}function s(a){r(a(n))}function o(a,l=xn){const c=[a,l];return i.add(c),i.size===1&&(t=e(r,s)||xn),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Bx(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Fx(t,(o,a)=>{let l=!1;const c=[];let u=0,d=xn;const f=()=>{if(u)return;d();const g=e(i?c[0]:c,o,a);s?o(g):d=typeof g=="function"?g:xn},p=r.map((g,_)=>Ed(g,h=>{c[_]=h,u&=~(1<<_),l&&f()},()=>{u|=1<<_}));return l=!0,f(),function(){iu(p),d(),l=!1}})}function wd(n){let e;return Ed(n,t=>e=t)(),e}let cc=!1,th=Symbol();function vl(n,e,t){const i=t[e]??(t[e]={store:null,source:wo(void 0),unsubscribe:xn});if(i.store!==n&&!(th in t))if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=xn;else{var r=!0;i.unsubscribe=Ed(n,s=>{r?i.source.v=s:Ue(i.source,s)}),r=!1}return n&&th in t?wd(n):B(i.source)}function u_(){const n={};function e(){Mu(()=>{for(var t in n)n[t].unsubscribe();Zg(n,th,{enumerable:!1,value:!0})})}return[n,e]}function kx(n){var e=cc;try{return cc=!1,[n(),cc]}finally{cc=e}}const gs=new Set;let rt=null,Nn=null,nh=null,_a=!1,$u=!1,pa=null,Gc=null;var Op=0;let zx=1;var Ea,wa,Kr,yr,Nl,Mi,Ol,Cs,Zr,Sr,Ta,go,pn,Vc,f_,Wc,ih,rh,h_;const _u=class _u{constructor(){gt(this,pn);Xi(this,"id",zx++);Xi(this,"current",new Map);Xi(this,"previous",new Map);gt(this,Ea,new Set);gt(this,wa,new Set);gt(this,Kr,new Map);gt(this,yr,new Map);gt(this,Nl,null);gt(this,Mi,[]);gt(this,Ol,[]);gt(this,Cs,new Set);gt(this,Zr,new Set);gt(this,Sr,new Map);Xi(this,"is_fork",!1);gt(this,Ta,!1);gt(this,go,new Set)}skip_effect(e){ie(this,Sr).has(e)||ie(this,Sr).set(e,{d:[],m:[]})}unskip_effect(e){var t=ie(this,Sr).get(e);if(t){ie(this,Sr).delete(e);for(var i of t.d)on(i,Fn),this.schedule(i);for(i of t.m)on(i,lr),this.schedule(i)}}capture(e,t,i=!1){t!==Cn&&!this.previous.has(e)&&this.previous.set(e,t),e.f&Is||(this.current.set(e,[e.v,i]),Nn==null||Nn.set(e,e.v))}activate(){rt=this}deactivate(){rt=null,Nn=null}flush(){try{$u=!0,rt=this,tn(this,pn,Wc).call(this)}finally{Op=0,nh=null,pa=null,Gc=null,$u=!1,rt=null,Nn=null,Us.clear()}}discard(){for(const e of ie(this,wa))e(this);ie(this,wa).clear(),gs.delete(this)}register_created_effect(e){ie(this,Ol).push(e)}increment(e,t){let i=ie(this,Kr).get(t)??0;if(ie(this,Kr).set(t,i+1),e){let r=ie(this,yr).get(t)??0;ie(this,yr).set(t,r+1)}}decrement(e,t,i){let r=ie(this,Kr).get(t)??0;if(r===1?ie(this,Kr).delete(t):ie(this,Kr).set(t,r-1),e){let s=ie(this,yr).get(t)??0;s===1?ie(this,yr).delete(t):ie(this,yr).set(t,s-1)}ie(this,Ta)||i||(yt(this,Ta,!0),Pr(()=>{yt(this,Ta,!1),this.flush()}))}transfer_effects(e,t){for(const i of e)ie(this,Cs).add(i);for(const i of t)ie(this,Zr).add(i);e.clear(),t.clear()}oncommit(e){ie(this,Ea).add(e)}ondiscard(e){ie(this,wa).add(e)}settled(){return(ie(this,Nl)??yt(this,Nl,$g())).promise}static ensure(){if(rt===null){const e=rt=new _u;$u||(gs.add(rt),_a||Pr(()=>{rt===e&&e.flush()}))}return rt}apply(){{Nn=null;return}}schedule(e){var r;if(nh=e,(r=e.b)!=null&&r.is_pending&&e.f&(Ca|Hl|Qg)&&!(e.f&Gs)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(pa!==null&&t===mt&&(_t===null||!(_t.f&Pn)))return;if(i&(bo|ar)){if(!(i&dn))return;t.f^=dn}}ie(this,Mi).push(t)}};Ea=new WeakMap,wa=new WeakMap,Kr=new WeakMap,yr=new WeakMap,Nl=new WeakMap,Mi=new WeakMap,Ol=new WeakMap,Cs=new WeakMap,Zr=new WeakMap,Sr=new WeakMap,Ta=new WeakMap,go=new WeakMap,pn=new WeakSet,Vc=function(){return this.is_fork||ie(this,yr).size>0},f_=function(){for(const i of ie(this,go))for(const r of ie(i,yr).keys()){for(var e=!1,t=r;t.parent!==null;){if(ie(this,Sr).has(t)){e=!0;break}t=t.parent}if(!e)return!0}return!1},Wc=function(){var a,l;if(Op++>1e3&&(gs.delete(this),Hx()),!tn(this,pn,Vc).call(this)){for(const c of ie(this,Cs))ie(this,Zr).delete(c),on(c,Fn),this.schedule(c);for(const c of ie(this,Zr))on(c,lr),this.schedule(c)}const e=ie(this,Mi);yt(this,Mi,[]),this.apply();var t=pa=[],i=[],r=Gc=[];for(const c of e)try{tn(this,pn,ih).call(this,c,t,i)}catch(u){throw g_(c),u}if(rt=null,r.length>0){var s=_u.ensure();for(const c of r)s.schedule(c)}if(pa=null,Gc=null,tn(this,pn,Vc).call(this)||tn(this,pn,f_).call(this)){tn(this,pn,rh).call(this,i),tn(this,pn,rh).call(this,t);for(const[c,u]of ie(this,Sr))m_(c,u)}else{ie(this,Kr).size===0&&gs.delete(this),ie(this,Cs).clear(),ie(this,Zr).clear();for(const c of ie(this,Ea))c(this);ie(this,Ea).clear(),Fp(i),Fp(t),(a=ie(this,Nl))==null||a.resolve()}var o=rt;if(ie(this,Mi).length>0){const c=o??(o=this);ie(c,Mi).push(...ie(this,Mi).filter(u=>!ie(c,Mi).includes(u)))}o!==null&&(gs.add(o),tn(l=o,pn,Wc).call(l)),gs.has(this)||tn(this,pn,h_).call(this)},ih=function(e,t,i){e.f^=dn;for(var r=e.first;r!==null;){var s=r.f,o=(s&(ar|bo))!==0,a=o&&(s&dn)!==0,l=a||(s&li)!==0||ie(this,Sr).has(r);if(!l&&r.fn!==null){o?r.f^=dn:s&Ca?t.push(r):Wa(r)&&(s&Dr&&ie(this,Zr).add(r),To(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}},rh=function(e){for(var t=0;t<e.length;t+=1)c_(e[t],ie(this,Cs),ie(this,Zr))},h_=function(){var u,d,f;for(const p of gs){var e=p.id<this.id,t=[];for(const[g,[_,h]]of this.current){if(p.current.has(g)){var i=p.current.get(g)[0];if(e&&_!==i)p.current.set(g,[_,h]);else continue}t.push(g)}var r=[...p.current.keys()].filter(g=>!this.current.has(g));if(r.length===0)e&&p.discard();else if(t.length>0){p.activate();var s=new Set,o=new Map;for(var a of t)p_(a,r,s,o);o=new Map;var l=[...p.current.keys()].filter(g=>this.current.has(g)?this.current.get(g)[0]!==g:!0);for(const g of ie(this,Ol))!(g.f&(Ti|li|$f))&&Td(g,l,o)&&(g.f&(Su|Dr)?(on(g,Fn),p.schedule(g)):ie(p,Cs).add(g));if(ie(p,Mi).length>0){p.apply();for(var c of ie(p,Mi))tn(u=p,pn,ih).call(u,c,[],[]);yt(p,Mi,[])}p.deactivate()}}for(const p of gs)ie(p,go).has(this)&&(ie(p,go).delete(this),ie(p,go).size===0&&!tn(d=p,pn,Vc).call(d)&&(p.activate(),tn(f=p,pn,Wc).call(f)))};let Fs=_u;function d_(n){var e=_a;_a=!0;try{for(var t;;){if(Nx(),rt===null)return t;rt.flush()}}finally{_a=e}}function Hx(){try{Ex()}catch(n){Ls(n,nh)}}let Zi=null;function Fp(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if(!(i.f&(Ti|li))&&Wa(i)&&(Zi=new Set,To(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&D_(i),(Zi==null?void 0:Zi.size)>0)){Us.clear();for(const r of Zi){if(r.f&(Ti|li))continue;const s=[r];let o=r.parent;for(;o!==null;)Zi.has(o)&&(Zi.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];l.f&(Ti|li)||To(l)}}Zi.clear()}}Zi=null}}function p_(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;s&Pn?p_(r,e,t,i):s&(Su|Dr)&&!(s&Fn)&&Td(r,e,i)&&(on(r,Fn),Ad(r))}}function Td(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Ra.call(e,r))return!0;if(r.f&Pn&&Td(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function Ad(n){rt.schedule(n)}function m_(n,e){if(!(n.f&ar&&n.f&dn)){n.f&Fn?e.d.push(n):n.f&lr&&e.m.push(n),on(n,dn);for(var t=n.first;t!==null;)m_(t,e),t=t.next}}function g_(n){on(n,dn);for(var e=n.first;e!==null;)g_(e),e=e.next}function Gx(n){let e=0,t=Ir(0),i;return()=>{Pd()&&(B(t),Wl(()=>(e===0&&(i=ui(()=>n(()=>El(t)))),e+=1,()=>{Pr(()=>{e-=1,e===0&&(i==null||i(),i=void 0,El(t))})})))}}var Vx=os|Ha;function Wx(n,e,t,i){new Xx(n,e,t,i)}var Ui,vd,Mr,_o,si,br,bi,Ji,Jr,vo,Ps,Aa,Fl,Bl,$r,vu,yn,Yx,qx,jx,sh,Xc,Yc,oh;class Xx{constructor(e,t,i,r){gt(this,yn);Xi(this,"parent");Xi(this,"is_pending",!1);Xi(this,"transform_error");gt(this,Ui);gt(this,vd,null);gt(this,Mr);gt(this,_o);gt(this,si);gt(this,br,null);gt(this,bi,null);gt(this,Ji,null);gt(this,Jr,null);gt(this,vo,0);gt(this,Ps,0);gt(this,Aa,!1);gt(this,Fl,new Set);gt(this,Bl,new Set);gt(this,$r,null);gt(this,vu,Gx(()=>(yt(this,$r,Ir(ie(this,vo))),()=>{yt(this,$r,null)})));var s;yt(this,Ui,e),yt(this,Mr,t),yt(this,_o,o=>{var a=mt;a.b=this,a.f|=Zf,i(o)}),this.parent=mt.b,this.transform_error=r??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),yt(this,si,Uo(()=>{tn(this,yn,sh).call(this)},Vx))}defer_effect(e){c_(e,ie(this,Fl),ie(this,Bl))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!ie(this,Mr).pending}update_pending_count(e,t){tn(this,yn,oh).call(this,e,t),yt(this,vo,ie(this,vo)+e),!(!ie(this,$r)||ie(this,Aa))&&(yt(this,Aa,!0),Pr(()=>{yt(this,Aa,!1),ie(this,$r)&&ns(ie(this,$r),ie(this,vo))}))}get_effect_pending(){return ie(this,vu).call(this),B(ie(this,$r))}error(e){var t=ie(this,Mr).onerror;let i=ie(this,Mr).failed;if(!t&&!i)throw e;ie(this,br)&&(ci(ie(this,br)),yt(this,br,null)),ie(this,bi)&&(ci(ie(this,bi)),yt(this,bi,null)),ie(this,Ji)&&(ci(ie(this,Ji)),yt(this,Ji,null));var r=!1,s=!1;const o=()=>{if(r){Lx();return}r=!0,s&&Cx(),ie(this,Ji)!==null&&yo(ie(this,Ji),()=>{yt(this,Ji,null)}),tn(this,yn,Yc).call(this,()=>{tn(this,yn,sh).call(this)})},a=l=>{try{s=!0,t==null||t(l,o),s=!1}catch(c){Ls(c,ie(this,si)&&ie(this,si).parent)}i&&yt(this,Ji,tn(this,yn,Yc).call(this,()=>{try{return Ni(()=>{var c=mt;c.b=this,c.f|=Zf,i(ie(this,Ui),()=>l,()=>o)})}catch(c){return Ls(c,ie(this,si).parent),null}}))};Pr(()=>{var l;try{l=this.transform_error(e)}catch(c){Ls(c,ie(this,si)&&ie(this,si).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(a,c=>Ls(c,ie(this,si)&&ie(this,si).parent)):a(l)})}}Ui=new WeakMap,vd=new WeakMap,Mr=new WeakMap,_o=new WeakMap,si=new WeakMap,br=new WeakMap,bi=new WeakMap,Ji=new WeakMap,Jr=new WeakMap,vo=new WeakMap,Ps=new WeakMap,Aa=new WeakMap,Fl=new WeakMap,Bl=new WeakMap,$r=new WeakMap,vu=new WeakMap,yn=new WeakSet,Yx=function(){try{yt(this,br,Ni(()=>ie(this,_o).call(this,ie(this,Ui))))}catch(e){this.error(e)}},qx=function(e){const t=ie(this,Mr).failed;t&&yt(this,Ji,Ni(()=>{t(ie(this,Ui),()=>e,()=>()=>{})}))},jx=function(){const e=ie(this,Mr).pending;e&&(this.is_pending=!0,yt(this,bi,Ni(()=>e(ie(this,Ui)))),Pr(()=>{var t=yt(this,Jr,document.createDocumentFragment()),i=is();t.append(i),yt(this,br,tn(this,yn,Yc).call(this,()=>Ni(()=>ie(this,_o).call(this,i)))),ie(this,Ps)===0&&(ie(this,Ui).before(t),yt(this,Jr,null),yo(ie(this,bi),()=>{yt(this,bi,null)}),tn(this,yn,Xc).call(this,rt))}))},sh=function(){try{if(this.is_pending=this.has_pending_snippet(),yt(this,Ps,0),yt(this,vo,0),yt(this,br,Ni(()=>{ie(this,_o).call(this,ie(this,Ui))})),ie(this,Ps)>0){var e=yt(this,Jr,document.createDocumentFragment());Ud(ie(this,br),e);const t=ie(this,Mr).pending;yt(this,bi,Ni(()=>t(ie(this,Ui))))}else tn(this,yn,Xc).call(this,rt)}catch(t){this.error(t)}},Xc=function(e){this.is_pending=!1,e.transfer_effects(ie(this,Fl),ie(this,Bl))},Yc=function(e){var t=mt,i=_t,r=Nt;hi(ie(this,si)),zi(ie(this,si)),Pa(ie(this,si).ctx);try{return Fs.ensure(),e()}catch(s){return a_(s),null}finally{hi(t),zi(i),Pa(r)}},oh=function(e,t){var i;if(!this.has_pending_snippet()){this.parent&&tn(i=this.parent,yn,oh).call(i,e,t);return}yt(this,Ps,ie(this,Ps)+e),ie(this,Ps)===0&&(tn(this,yn,Xc).call(this,t),ie(this,bi)&&yo(ie(this,bi),()=>{yt(this,bi,null)}),ie(this,Jr)&&(ie(this,Ui).before(ie(this,Jr)),yt(this,Jr,null)))};function Kx(n,e,t,i){const r=Io()?Gl:Rd;var s=n.filter(f=>!f.settled);if(t.length===0&&s.length===0){i(e.map(r));return}var o=mt,a=__(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(f=>f.promise)):null;function c(f){a();try{i(f)}catch(p){o.f&Ti||Ls(p,o)}Pl()}if(t.length===0){l.then(()=>c(e.map(r)));return}var u=v_();function d(){Promise.all(t.map(f=>Zx(f))).then(f=>c([...e.map(r),...f])).catch(f=>Ls(f,o)).finally(()=>u())}l?l.then(()=>{a(),d(),Pl()}):d()}function __(){var n=mt,e=_t,t=Nt,i=rt;return function(s=!0){hi(n),zi(e),Pa(t),s&&!(n.f&Ti)&&(i==null||i.activate(),i==null||i.apply())}}function Pl(n=!0){hi(null),zi(null),Pa(null),n&&(rt==null||rt.deactivate())}function v_(){var n=mt,e=n.b,t=rt,i=e.is_rendered();return e.update_pending_count(1,t),t.increment(i,n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(i,n,r)}}function Gl(n){var e=Pn|Fn,t=_t!==null&&_t.f&Pn?_t:null;return mt!==null&&(mt.f|=Ha),{ctx:Nt,deps:null,effects:null,equals:n_,f:e,fn:n,reactions:null,rv:0,v:Cn,wv:0,parent:t??mt,ac:null}}function Zx(n,e,t){let i=mt;i===null&&xx();var r=void 0,s=Ir(Cn),o=!_t,a=new Map;return cy(()=>{var p;var l=mt,c=$g();r=c.promise;try{Promise.resolve(n()).then(c.resolve,c.reject).finally(Pl)}catch(g){c.reject(g),Pl()}var u=rt;if(o){if(l.f&Gs)var d=v_();if(i.b.is_rendered())(p=a.get(u))==null||p.reject(jr),a.delete(u);else{for(const g of a.values())g.reject(jr);a.clear()}a.set(u,c)}const f=(g,_=void 0)=>{if(d){var h=_===jr;d(h)}if(!(_===jr||l.f&Ti)){if(u.activate(),_)s.f|=Is,ns(s,_);else{s.f&Is&&(s.f^=Is),ns(s,g);for(const[m,M]of a){if(a.delete(m),m===u)break;M.reject(jr)}}u.deactivate()}};c.promise.then(f,g=>f(null,g||"unknown"))}),Mu(()=>{for(const l of a.values())l.reject(jr)}),new Promise(l=>{function c(u){function d(){u===r?l(s):c(r)}u.then(d,d)}c(r)})}function Vt(n){const e=Gl(n);return N_(e),e}function Rd(n){const e=Gl(n);return e.equals=r_,e}function Jx(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)ci(e[t])}}function $x(n){for(var e=n.parent;e!==null;){if(!(e.f&Pn))return e.f&Ti?null:e;e=e.parent}return null}function Cd(n){var e,t=mt;hi($x(n));try{n.f&=~Eo,Jx(n),e=k_(n)}finally{hi(t)}return e}function x_(n){var e=n.v,t=Cd(n);if(!n.equals(t)&&(n.wv=F_(),(!(rt!=null&&rt.is_fork)||n.deps===null)&&(n.v=t,rt==null||rt.capture(n,e,!0),n.deps===null))){on(n,dn);return}Bs||(Nn!==null?(Pd()||rt!=null&&rt.is_fork)&&Nn.set(n,t):bd(n))}function Qx(n){var e,t;if(n.effects!==null)for(const i of n.effects)(i.teardown||i.ac)&&((e=i.teardown)==null||e.call(i),(t=i.ac)==null||t.abort(jr),i.teardown=xn,i.ac=null,Ll(i,0),Dd(i))}function y_(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&To(e)}let ah=new Set;const Us=new Map;let S_=!1;function Ir(n,e){var t={f:0,v:n,reactions:null,equals:n_,rv:0,wv:0};return t}function Qe(n,e){const t=Ir(n);return N_(t),t}function wo(n,e=!1,t=!0){var r;const i=Ir(n);return e||(i.equals=r_),Ga&&t&&Nt!==null&&Nt.l!==null&&((r=Nt.l).s??(r.s=[])).push(i),i}function Ue(n,e,t=!1){_t!==null&&(!ir||_t.f&$f)&&Io()&&_t.f&(Pn|Dr|Su|$f)&&(ki===null||!Ra.call(ki,n))&&Rx();let i=t?Vn(e):e;return ns(n,i,Gc)}function ns(n,e,t=null){if(!n.equals(e)){var i=n.v;Bs?Us.set(n,e):Us.set(n,i),n.v=e;var r=Fs.ensure();if(r.capture(n,i),n.f&Pn){const s=n;n.f&Fn&&Cd(s),Nn===null&&bd(s)}n.wv=F_(),M_(n,Fn,t),Io()&&mt!==null&&mt.f&dn&&!(mt.f&(ar|bo))&&(Ii===null?hy([n]):Ii.push(n)),!r.is_fork&&ah.size>0&&!S_&&ey()}return e}function ey(){S_=!1;for(const n of ah)n.f&dn&&on(n,lr),Wa(n)&&To(n);ah.clear()}function Bp(n,e=1){var t=B(n),i=e===1?t++:t--;return Ue(n,t),i}function El(n){Ue(n,n.v+1)}function M_(n,e,t){var i=n.reactions;if(i!==null)for(var r=Io(),s=i.length,o=0;o<s;o++){var a=i[o],l=a.f;if(!(!r&&a===mt)){var c=(l&Fn)===0;if(c&&on(a,e),l&Pn){var u=a;Nn==null||Nn.delete(u),l&Eo||(l&Fi&&(a.f|=Eo),M_(u,lr,t))}else if(c){var d=a;l&Dr&&Zi!==null&&Zi.add(d),t!==null?t.push(d):Ad(d)}}}}function Vn(n){if(typeof n!="object"||n===null||Cr in n)return n;const e=yd(n);if(e!==dx&&e!==px)return n;var t=new Map,i=xd(n),r=Qe(0),s=So,o=a=>{if(So===s)return a();var l=_t,c=So;zi(null),Vp(s);var u=a();return zi(l),Vp(c),u};return i&&t.set("length",Qe(n.length)),new Proxy(n,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Tx();var u=t.get(l);return u===void 0?o(()=>{var d=Qe(c.value);return t.set(l,d),d}):Ue(u,c.value,!0),!0},deleteProperty(a,l){var c=t.get(l);if(c===void 0){if(l in a){const u=o(()=>Qe(Cn));t.set(l,u),El(r)}}else Ue(c,Cn),El(r);return!0},get(a,l,c){var p;if(l===Cr)return n;var u=t.get(l),d=l in a;if(u===void 0&&(!d||(p=Ds(a,l))!=null&&p.writable)&&(u=o(()=>{var g=Vn(d?a[l]:Cn),_=Qe(g);return _}),t.set(l,u)),u!==void 0){var f=B(u);return f===Cn?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=B(u))}else if(c===void 0){var d=t.get(l),f=d==null?void 0:d.v;if(d!==void 0&&f!==Cn)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){var f;if(l===Cr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==Cn||Reflect.has(a,l);if(c!==void 0||mt!==null&&(!u||(f=Ds(a,l))!=null&&f.writable)){c===void 0&&(c=o(()=>{var p=u?Vn(a[l]):Cn,g=Qe(p);return g}),t.set(l,c));var d=B(c);if(d===Cn)return!1}return u},set(a,l,c,u){var S;var d=t.get(l),f=l in a;if(i&&l==="length")for(var p=c;p<d.v;p+=1){var g=t.get(p+"");g!==void 0?Ue(g,Cn):p in a&&(g=o(()=>Qe(Cn)),t.set(p+"",g))}if(d===void 0)(!f||(S=Ds(a,l))!=null&&S.writable)&&(d=o(()=>Qe(void 0)),Ue(d,Vn(c)),t.set(l,d));else{f=d.v!==Cn;var _=o(()=>Vn(c));Ue(d,_)}var h=Reflect.getOwnPropertyDescriptor(a,l);if(h!=null&&h.set&&h.set.call(u,c),!f){if(i&&typeof l=="string"){var m=t.get("length"),M=Number(l);Number.isInteger(M)&&M>=m.v&&Ue(m,M+1)}El(r)}return!0},ownKeys(a){B(r);var l=Reflect.ownKeys(a).filter(d=>{var f=t.get(d);return f===void 0||f.v!==Cn});for(var[c,u]of t)u.v!==Cn&&!(c in a)&&l.push(c);return l},setPrototypeOf(){Ax()}})}function kp(n){try{if(n!==null&&typeof n=="object"&&Cr in n)return n[Cr]}catch{}return n}function ty(n,e){return Object.is(kp(n),kp(e))}var zp,b_,E_,w_;function ny(){if(zp===void 0){zp=window,b_=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;E_=Ds(e,"firstChild").get,w_=Ds(e,"nextSibling").get,Np(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),Np(t)&&(t.__t=void 0)}}function is(n=""){return document.createTextNode(n)}function ru(n){return E_.call(n)}function Vl(n){return w_.call(n)}function et(n,e){return ru(n)}function kt(n,e=!1){{var t=ru(n);return t instanceof Comment&&t.data===""?Vl(t):t}}function lt(n,e=1,t=!1){let i=n;for(;e--;)i=Vl(i);return i}function iy(n){n.textContent=""}function T_(){return!1}function ry(n,e,t){return document.createElementNS(Kg,n,void 0)}let Hp=!1;function sy(){Hp||(Hp=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Va(n){var e=_t,t=mt;zi(null),hi(null);try{return n()}finally{zi(e),hi(t)}}function A_(n,e,t,i=t){n.addEventListener(e,()=>Va(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),sy()}function R_(n){mt===null&&(_t===null&&bx(),Mx()),Bs&&Sx()}function oy(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function Nr(n,e){var t=mt;t!==null&&t.f&li&&(n|=li);var i={ctx:Nt,deps:null,nodes:null,f:n|Fn|Fi,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};rt==null||rt.register_created_effect(i);var r=i;if(n&Ca)pa!==null?pa.push(i):Fs.ensure().schedule(i);else if(e!==null){try{To(i)}catch(o){throw ci(i),o}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&!(r.f&Ha)&&(r=r.first,n&Dr&&n&os&&r!==null&&(r.f|=os))}if(r!==null&&(r.parent=t,t!==null&&oy(r,t),_t!==null&&_t.f&Pn&&!(n&bo))){var s=_t;(s.effects??(s.effects=[])).push(r)}return i}function Pd(){return _t!==null&&!ir}function Mu(n){const e=Nr(Hl,null);return on(e,dn),e.teardown=n,e}function Bi(n){R_();var e=mt.f,t=!_t&&(e&ar)!==0&&(e&Gs)===0;if(t){var i=Nt;(i.e??(i.e=[])).push(n)}else return C_(n)}function C_(n){return Nr(Ca|e_,n)}function ay(n){return R_(),Nr(Hl|e_,n)}function ly(n){Fs.ensure();const e=Nr(bo|Ha,n);return(t={})=>new Promise(i=>{t.outro?yo(e,()=>{ci(e),i(void 0)}):(ci(e),i(void 0))})}function Ld(n){return Nr(Ca,n)}function lh(n,e){var t=Nt,i={effect:null,ran:!1,deps:n};t.l.$.push(i),i.effect=Wl(()=>{if(n(),!i.ran){i.ran=!0;var r=mt;try{hi(r.parent),ui(e)}finally{hi(r)}}})}function P_(){var n=Nt;Wl(()=>{for(var e of n.l.$){e.deps();var t=e.effect;t.f&dn&&t.deps!==null&&on(t,lr),Wa(t)&&To(t),e.ran=!1}})}function cy(n){return Nr(Su|Ha,n)}function Wl(n,e=0){return Nr(Hl|e,n)}function bt(n,e=[],t=[],i=[]){Kx(i,e,t,r=>{Nr(Hl,()=>n(...r.map(B)))})}function Uo(n,e=0){var t=Nr(Dr|e,n);return t}function Ni(n){return Nr(ar|Ha,n)}function L_(n){var e=n.teardown;if(e!==null){const t=Bs,i=_t;Gp(!0),zi(null);try{e.call(null)}finally{Gp(t),zi(i)}}}function Dd(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&Va(()=>{r.abort(jr)});var i=t.next;t.f&bo?t.parent=null:ci(t,e),t=i}}function uy(n){for(var e=n.first;e!==null;){var t=e.next;e.f&ar||ci(e),e=t}}function ci(n,e=!0){var t=!1;(e||n.f&_x)&&n.nodes!==null&&n.nodes.end!==null&&(fy(n.nodes.start,n.nodes.end),t=!0),on(n,Jf),Dd(n,e&&!t),Ll(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();L_(n),n.f^=Jf,n.f|=Ti;var r=n.parent;r!==null&&r.first!==null&&D_(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function fy(n,e){for(;n!==null;){var t=n===e?null:Vl(n);n.remove(),n=t}}function D_(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function yo(n,e,t=!0){var i=[];I_(n,i,!0);var r=()=>{t&&ci(n),e&&e()},s=i.length;if(s>0){var o=()=>--s||r();for(var a of i)a.out(o)}else r()}function I_(n,e,t){if(!(n.f&li)){n.f^=li;var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&e.push(a);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&os)!==0||(r.f&ar)!==0&&(n.f&Dr)!==0;I_(r,e,o?t:!1),r=s}}}function Id(n){U_(n,!0)}function U_(n,e){if(n.f&li){n.f^=li,n.f&dn||(on(n,Fn),Fs.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&os)!==0||(t.f&ar)!==0;U_(t,r?e:!1),t=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const o of s)(o.is_global||e)&&o.in()}}function Ud(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:Vl(t);e.append(t),t=r}}let qc=!1,Bs=!1;function Gp(n){Bs=n}let _t=null,ir=!1;function zi(n){_t=n}let mt=null;function hi(n){mt=n}let ki=null;function N_(n){_t!==null&&(ki===null?ki=[n]:ki.push(n))}let oi=null,yi=0,Ii=null;function hy(n){Ii=n}let O_=1,fo=0,So=fo;function Vp(n){So=n}function F_(){return++O_}function Wa(n){var e=n.f;if(e&Fn)return!0;if(e&Pn&&(n.f&=~Eo),e&lr){for(var t=n.deps,i=t.length,r=0;r<i;r++){var s=t[r];if(Wa(s)&&x_(s),s.wv>n.wv)return!0}e&Fi&&Nn===null&&on(n,dn)}return!1}function B_(n,e,t=!0){var i=n.reactions;if(i!==null&&!(ki!==null&&Ra.call(ki,n)))for(var r=0;r<i.length;r++){var s=i[r];s.f&Pn?B_(s,e,!1):e===s&&(t?on(s,Fn):s.f&dn&&on(s,lr),Ad(s))}}function k_(n){var _;var e=oi,t=yi,i=Ii,r=_t,s=ki,o=Nt,a=ir,l=So,c=n.f;oi=null,yi=0,Ii=null,_t=c&(ar|bo)?null:n,ki=null,Pa(n.ctx),ir=!1,So=++fo,n.ac!==null&&(Va(()=>{n.ac.abort(jr)}),n.ac=null);try{n.f|=Qf;var u=n.fn,d=u();n.f|=Gs;var f=n.deps,p=rt==null?void 0:rt.is_fork;if(oi!==null){var g;if(p||Ll(n,yi),f!==null&&yi>0)for(f.length=yi+oi.length,g=0;g<oi.length;g++)f[yi+g]=oi[g];else n.deps=f=oi;if(Pd()&&n.f&Fi)for(g=yi;g<f.length;g++)((_=f[g]).reactions??(_.reactions=[])).push(n)}else!p&&f!==null&&yi<f.length&&(Ll(n,yi),f.length=yi);if(Io()&&Ii!==null&&!ir&&f!==null&&!(n.f&(Pn|lr|Fn)))for(g=0;g<Ii.length;g++)B_(Ii[g],n);if(r!==null&&r!==n){if(fo++,r.deps!==null)for(let h=0;h<t;h+=1)r.deps[h].rv=fo;if(e!==null)for(const h of e)h.rv=fo;Ii!==null&&(i===null?i=Ii:i.push(...Ii))}return n.f&Is&&(n.f^=Is),d}catch(h){return a_(h)}finally{n.f^=Qf,oi=e,yi=t,Ii=i,_t=r,ki=s,Pa(o),ir=a,So=l}}function dy(n,e){let t=e.reactions;if(t!==null){var i=hx.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&e.f&Pn&&(oi===null||!Ra.call(oi,e))){var s=e;s.f&Fi&&(s.f^=Fi,s.f&=~Eo),bd(s),Qx(s),Ll(s,0)}}function Ll(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)dy(n,t[i])}function To(n){var e=n.f;if(!(e&Ti)){on(n,dn);var t=mt,i=qc;mt=n,qc=!0;try{e&(Dr|Qg)?uy(n):Dd(n),L_(n);var r=k_(n);n.teardown=typeof r=="function"?r:null,n.wv=O_;var s;fx&&Dx&&n.f&Fn&&n.deps}finally{qc=i,mt=t}}}async function py(){await Promise.resolve(),d_()}function B(n){var e=n.f,t=(e&Pn)!==0;if(_t!==null&&!ir){var i=mt!==null&&(mt.f&Ti)!==0;if(!i&&(ki===null||!Ra.call(ki,n))){var r=_t.deps;if(_t.f&Qf)n.rv<fo&&(n.rv=fo,oi===null&&r!==null&&r[yi]===n?yi++:oi===null?oi=[n]:oi.push(n));else{(_t.deps??(_t.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[_t]:Ra.call(s,_t)||s.push(_t)}}}if(Bs&&Us.has(n))return Us.get(n);if(t){var o=n;if(Bs){var a=o.v;return(!(o.f&dn)&&o.reactions!==null||H_(o))&&(a=Cd(o)),Us.set(o,a),a}var l=(o.f&Fi)===0&&!ir&&_t!==null&&(qc||(_t.f&Fi)!==0),c=(o.f&Gs)===0;Wa(o)&&(l&&(o.f|=Fi),x_(o)),l&&!c&&(y_(o),z_(o))}if(Nn!=null&&Nn.has(n))return Nn.get(n);if(n.f&Is)throw n.v;return n.v}function z_(n){if(n.f|=Fi,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&Pn&&!(e.f&Fi)&&(y_(e),z_(e))}function H_(n){if(n.v===Cn)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Us.has(e)||e.f&Pn&&H_(e))return!0;return!1}function ui(n){var e=ir;try{return ir=!0,n()}finally{ir=e}}function G_(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(Cr in n)ch(n);else if(!Array.isArray(n))for(let e in n){const t=n[e];typeof t=="object"&&t&&Cr in t&&ch(t)}}}function ch(n,e=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!e.has(n)){e.add(n),n instanceof Date&&n.getTime();for(let i in n)try{ch(n[i],e)}catch{}const t=yd(n);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const i=Jg(t);for(let r in i){const s=i[r].get;if(s)try{s.call(n)}catch{}}}}}const ho=Symbol("events"),V_=new Set,uh=new Set;function my(n,e,t,i={}){function r(s){if(i.capture||fh.call(e,s),!s.cancelBubble)return Va(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?Pr(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function gy(n,e,t,i,r){var s={capture:i,passive:r},o=my(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Mu(()=>{e.removeEventListener(n,o,s)})}function Ao(n,e,t){(e[ho]??(e[ho]={}))[n]=t}function Xa(n){for(var e=0;e<n.length;e++)V_.add(n[e]);for(var t of uh)t(n)}let Wp=null;function fh(n){var h,m;var e=this,t=e.ownerDocument,i=n.type,r=((h=n.composedPath)==null?void 0:h.call(n))||[],s=r[0]||n.target;Wp=n;var o=0,a=Wp===n&&n[ho];if(a){var l=r.indexOf(a);if(l!==-1&&(e===document||e===window)){n[ho]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(o=l)}if(s=r[o]||n.target,s!==e){Zg(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=_t,d=mt;zi(null),hi(null);try{for(var f,p=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=(m=s[ho])==null?void 0:m[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(M){f?p.push(M):f=M}if(n.cancelBubble||g===e||g===null)break;s=g}if(f){for(let M of p)queueMicrotask(()=>{throw M});throw f}}finally{n[ho]=e,delete n.currentTarget,zi(u),hi(d)}}}var Yg;const Qu=((Yg=globalThis==null?void 0:globalThis.window)==null?void 0:Yg.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function _y(n){return(Qu==null?void 0:Qu.createHTML(n))??n}function vy(n){var e=ry("template");return e.innerHTML=_y(n.replaceAll("<!>","<!---->")),e.content}function su(n,e){var t=mt;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function $e(n,e){var t=(e&cx)!==0,i=(e&ux)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=vy(s?n:"<!>"+n),t||(r=ru(r)));var o=i||b_?document.importNode(r,!0):r.cloneNode(!0);if(t){var a=ru(o),l=o.lastChild;su(a,l)}else su(o,o);return o}}function Hi(n=""){{var e=is(n+"");return su(e,e),e}}function Tr(){var n=document.createDocumentFragment(),e=document.createComment(""),t=is();return n.append(e,t),su(e,t),n}function Le(n,e){n!==null&&n.before(e)}const xy=["touchstart","touchmove"];function yy(n){return xy.includes(n)}let hh=!0;function Wt(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=`${t}`)}function Sy(n,e){return My(n,e)}const uc=new Map;function My(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:o=!0,transformError:a}){ny();var l=void 0,c=ly(()=>{var u=t??e.appendChild(is());Wx(u,{pending:()=>{}},p=>{Xt({});var g=Nt;s&&(g.c=s),r&&(i.$$events=r),hh=o,l=n(p,i)||{},hh=!0,Yt()},a);var d=new Set,f=p=>{for(var g=0;g<p.length;g++){var _=p[g];if(!d.has(_)){d.add(_);var h=yy(_);for(const S of[e,document]){var m=uc.get(S);m===void 0&&(m=new Map,uc.set(S,m));var M=m.get(_);M===void 0?(S.addEventListener(_,fh,{passive:h}),m.set(_,1)):m.set(_,M+1)}}}};return f(yu(V_)),uh.add(f),()=>{var h;for(var p of d)for(const m of[e,document]){var g=uc.get(m),_=g.get(p);--_==0?(m.removeEventListener(p,fh),g.delete(p),g.size===0&&uc.delete(m)):g.set(p,_)}uh.delete(f),u!==t&&((h=u.parentNode)==null||h.removeChild(u))}});return by.set(l,c),l}let by=new WeakMap;var $i,Er,Ei,xo,kl,zl,xu;class Xl{constructor(e,t=!0){Xi(this,"anchor");gt(this,$i,new Map);gt(this,Er,new Map);gt(this,Ei,new Map);gt(this,xo,new Set);gt(this,kl,!0);gt(this,zl,e=>{if(ie(this,$i).has(e)){var t=ie(this,$i).get(e),i=ie(this,Er).get(t);if(i)Id(i),ie(this,xo).delete(t);else{var r=ie(this,Ei).get(t);r&&(ie(this,Er).set(t,r.effect),ie(this,Ei).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,o]of ie(this,$i)){if(ie(this,$i).delete(s),s===e)break;const a=ie(this,Ei).get(o);a&&(ci(a.effect),ie(this,Ei).delete(o))}for(const[s,o]of ie(this,Er)){if(s===t||ie(this,xo).has(s))continue;const a=()=>{if(Array.from(ie(this,$i).values()).includes(s)){var c=document.createDocumentFragment();Ud(o,c),c.append(is()),ie(this,Ei).set(s,{effect:o,fragment:c})}else ci(o);ie(this,xo).delete(s),ie(this,Er).delete(s)};ie(this,kl)||!i?(ie(this,xo).add(s),yo(o,a,!1)):a()}}});gt(this,xu,e=>{ie(this,$i).delete(e);const t=Array.from(ie(this,$i).values());for(const[i,r]of ie(this,Ei))t.includes(i)||(ci(r.effect),ie(this,Ei).delete(i))});this.anchor=e,yt(this,kl,t)}ensure(e,t){var i=rt,r=T_();if(t&&!ie(this,Er).has(e)&&!ie(this,Ei).has(e))if(r){var s=document.createDocumentFragment(),o=is();s.append(o),ie(this,Ei).set(e,{effect:Ni(()=>t(o)),fragment:s})}else ie(this,Er).set(e,Ni(()=>t(this.anchor)));if(ie(this,$i).set(i,e),r){for(const[a,l]of ie(this,Er))a===e?i.unskip_effect(l):i.skip_effect(l);for(const[a,l]of ie(this,Ei))a===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(ie(this,zl)),i.ondiscard(ie(this,xu))}else ie(this,zl).call(this,i)}}$i=new WeakMap,Er=new WeakMap,Ei=new WeakMap,xo=new WeakMap,kl=new WeakMap,zl=new WeakMap,xu=new WeakMap;function Yl(n,e,...t){var i=new Xl(n);Uo(()=>{const r=e()??null;i.ensure(r,r&&(s=>r(s,...t)))},os)}function di(n){Nt===null&&Md(),Ga&&Nt.l!==null?Ey(Nt).m.push(n):Bi(()=>{const e=ui(n);if(typeof e=="function")return e})}function ql(n){Nt===null&&Md(),di(()=>()=>ui(n))}function Ey(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const wy=0,Xp=1,Ty=2;function Ay(n,e,t,i,r){var s=Io(),o=Cn,a=s?Ir(o):wo(o,!1,!1),l=s?Ir(o):wo(o,!1,!1),c=new Xl(n);Uo(()=>{var u=rt;u.deactivate();var d=e();u.activate();var f=!1;if(mx(d)){var p=__(),g=!1;const _=h=>{if(!f){g=!0,p(!1),Fs.ensure();try{h()}finally{Pl(!1),_a||d_()}}};d.then(h=>{_(()=>{ns(a,h),c.ensure(Xp,i&&(m=>i(m,a)))})},h=>{_(()=>{if(ns(l,h),c.ensure(Ty,r&&(m=>r(m,l))),!r)throw l.v})}),Pr(()=>{g||_(()=>{c.ensure(wy,t)})})}else ns(a,d),c.ensure(Xp,i&&(_=>i(_,a)));return()=>{f=!0}})}function Xn(n,e,t=!1){var i=new Xl(n),r=t?os:0;function s(o,a){i.ensure(o,a)}Uo(()=>{var o=!1;e((a,l=0)=>{o=!0,s(l,a)}),o||s(-1,null)},r)}const Ry=Symbol("NaN");function Cy(n,e,t){var i=new Xl(n),r=!Io();Uo(()=>{var s=e();s!==s&&(s=Ry),r&&s!==null&&typeof s=="object"&&(s={}),i.ensure(s,t)})}function cr(n,e){return e}function Py(n,e,t){for(var i=[],r=e.length,s,o=e.length,a=0;a<r;a++){let d=e[a];yo(d,()=>{if(s){if(s.pending.delete(d),s.done.add(d),s.pending.size===0){var f=n.outrogroups;dh(n,yu(s.done)),f.delete(s),f.size===0&&(n.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=i.length===0&&t!==null;if(l){var c=t,u=c.parentNode;iy(u),u.append(c),n.items.clear()}dh(n,e,!l)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function dh(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const o of n.pending.values())for(const a of o)i.add(n.items.get(a).e)}for(var r=0;r<e.length;r++){var s=e[r];if(i!=null&&i.has(s)){s.f|=Rr;const o=document.createDocumentFragment();Ud(s,o)}else ci(e[r],t)}}var Yp;function ur(n,e,t,i,r,s=null){var o=n,a=new Map,l=(e&qg)!==0;if(l){var c=n;o=c.appendChild(is())}var u=null,d=Rd(()=>{var S=t();return xd(S)?S:S==null?[]:yu(S)}),f,p=new Map,g=!0;function _(S){M.effect.f&Ti||(M.pending.delete(S),M.fallback=u,Ly(M,f,o,e,i),u!==null&&(f.length===0?u.f&Rr?(u.f^=Rr,xl(u,null,o)):Id(u):yo(u,()=>{u=null})))}function h(S){M.pending.delete(S)}var m=Uo(()=>{f=B(d);for(var S=f.length,b=new Set,O=rt,L=T_(),A=0;A<S;A+=1){var E=f[A],C=i(E,A),v=g?null:a.get(C);v?(v.v&&ns(v.v,E),v.i&&ns(v.i,A),L&&O.unskip_effect(v.e)):(v=Dy(a,g?o:Yp??(Yp=is()),E,C,A,r,e,t),g||(v.e.f|=Rr),a.set(C,v)),b.add(C)}if(S===0&&s&&!u&&(g?u=Ni(()=>s(o)):(u=Ni(()=>s(Yp??(Yp=is()))),u.f|=Rr)),S>b.size&&yx(),!g)if(p.set(O,b),L){for(const[x,P]of a)b.has(x)||O.skip_effect(P.e);O.oncommit(_),O.ondiscard(h)}else _(O);B(d)}),M={effect:m,items:a,pending:p,outrogroups:null,fallback:u};g=!1}function ol(n){for(;n!==null&&!(n.f&ar);)n=n.next;return n}function Ly(n,e,t,i,r){var v,x,P,U,k,H,G,z,K;var s=(i&ex)!==0,o=e.length,a=n.items,l=ol(n.effect.first),c,u=null,d,f=[],p=[],g,_,h,m;if(s)for(m=0;m<o;m+=1)g=e[m],_=r(g,m),h=a.get(_).e,h.f&Rr||((x=(v=h.nodes)==null?void 0:v.a)==null||x.measure(),(d??(d=new Set)).add(h));for(m=0;m<o;m+=1){if(g=e[m],_=r(g,m),h=a.get(_).e,n.outrogroups!==null)for(const Q of n.outrogroups)Q.pending.delete(h),Q.done.delete(h);if(h.f&li&&(Id(h),s&&((U=(P=h.nodes)==null?void 0:P.a)==null||U.unfix(),(d??(d=new Set)).delete(h))),h.f&Rr)if(h.f^=Rr,h===l)xl(h,null,t);else{var M=u?u.next:l;h===n.effect.last&&(n.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),_s(n,u,h),_s(n,h,M),xl(h,M,t),u=h,f=[],p=[],l=ol(u.next);continue}if(h!==l){if(c!==void 0&&c.has(h)){if(f.length<p.length){var S=p[0],b;u=S.prev;var O=f[0],L=f[f.length-1];for(b=0;b<f.length;b+=1)xl(f[b],S,t);for(b=0;b<p.length;b+=1)c.delete(p[b]);_s(n,O.prev,L.next),_s(n,u,O),_s(n,L,S),l=S,u=L,m-=1,f=[],p=[]}else c.delete(h),xl(h,l,t),_s(n,h.prev,h.next),_s(n,h,u===null?n.effect.first:u.next),_s(n,u,h),u=h;continue}for(f=[],p=[];l!==null&&l!==h;)(c??(c=new Set)).add(l),p.push(l),l=ol(l.next);if(l===null)continue}h.f&Rr||f.push(h),u=h,l=ol(h.next)}if(n.outrogroups!==null){for(const Q of n.outrogroups)Q.pending.size===0&&(dh(n,yu(Q.done)),(k=n.outrogroups)==null||k.delete(Q));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var A=[];if(c!==void 0)for(h of c)h.f&li||A.push(h);for(;l!==null;)!(l.f&li)&&l!==n.fallback&&A.push(l),l=ol(l.next);var E=A.length;if(E>0){var C=i&qg&&o===0?t:null;if(s){for(m=0;m<E;m+=1)(G=(H=A[m].nodes)==null?void 0:H.a)==null||G.measure();for(m=0;m<E;m+=1)(K=(z=A[m].nodes)==null?void 0:z.a)==null||K.fix()}Py(n,A,C)}}s&&Pr(()=>{var Q,ae;if(d!==void 0)for(h of d)(ae=(Q=h.nodes)==null?void 0:Q.a)==null||ae.apply()})}function Dy(n,e,t,i,r,s,o,a){var l=o&$0?o&tx?Ir(t):wo(t,!1,!1):null,c=o&Q0?Ir(r):null;return{v:l,i:c,e:Ni(()=>(s(e,l??t,c??r,a),()=>{n.delete(i)}))}}function xl(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=e&&!(e.f&Rr)?e.nodes.start:t;i!==null;){var o=Vl(i);if(s.before(i),i===r)return;i=o}}function _s(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function ph(n,e,t,i,r){var a;var s=(a=e.$$slots)==null?void 0:a[t],o=!1;s===!0&&(s=e.children,o=!0),s===void 0||s(n,o?()=>i:i)}function Iy(n,e,t){var i=new Xl(n);Uo(()=>{var r=e()??null;i.ensure(r,r&&(s=>t(s,r)))},os)}const Uy=()=>performance.now(),Qr={tick:n=>requestAnimationFrame(n),now:()=>Uy(),tasks:new Set};function W_(){const n=Qr.now();Qr.tasks.forEach(e=>{e.c(n)||(Qr.tasks.delete(e),e.f())}),Qr.tasks.size!==0&&Qr.tick(W_)}function Ny(n){let e;return Qr.tasks.size===0&&Qr.tick(W_),{promise:new Promise(t=>{Qr.tasks.add(e={c:n,f:t})}),abort(){Qr.tasks.delete(e)}}}function ou(n,e){Va(()=>{n.dispatchEvent(new CustomEvent(e))})}function Oy(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function qp(n){const e={},t=n.split(";");for(const i of t){const[r,s]=i.split(":");if(!r||s===void 0)break;const o=Oy(r.trim());e[o]=s.trim()}return e}const Fy=n=>n;function jp(n,e,t,i){var S;var r=(n&ox)!==0,s=(n&ax)!==0,o=r&&s,a=(n&lx)!==0,l=o?"both":r?"in":"out",c,u=e.inert,d=e.style.overflow,f,p;function g(){return Va(()=>c??(c=t()(e,(i==null?void 0:i())??{},{direction:l})))}var _={is_global:a,in(){var b;if(e.inert=u,!r){p==null||p.abort(),(b=p==null?void 0:p.reset)==null||b.call(p);return}s||f==null||f.abort(),f=mh(e,g(),p,1,()=>{ou(e,"introend"),f==null||f.abort(),f=c=void 0,e.style.overflow=d})},out(b){if(!s){b==null||b(),c=void 0;return}e.inert=!0,p=mh(e,g(),f,0,()=>{ou(e,"outroend"),b==null||b()})},stop:()=>{f==null||f.abort(),p==null||p.abort()}},h=mt;if(((S=h.nodes).t??(S.t=[])).push(_),r&&hh){var m=a;if(!m){for(var M=h.parent;M&&M.f&os;)for(;(M=M.parent)&&!(M.f&Dr););m=!M||(M.f&Gs)!==0}m&&Ld(()=>{ui(()=>_.in())})}}function mh(n,e,t,i,r){var s=i===1;if(fa(e)){var o,a=!1;return Pr(()=>{if(!a){var h=e({direction:s?"in":"out"});o=mh(n,h,t,i,r)}}),{abort:()=>{a=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration)&&!(e!=null&&e.delay))return ou(n,s?"introstart":"outrostart"),r(),{abort:xn,deactivate:xn,reset:xn,t:()=>i};const{delay:l=0,css:c,tick:u,easing:d=Fy}=e;var f=[];if(s&&t===void 0&&(u&&u(0,1),c)){var p=qp(c(0,1));f.push(p,p)}var g=()=>1-i,_=n.animate(f,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel(),ou(n,s?"introstart":"outrostart");var h=(t==null?void 0:t.t())??1-i;t==null||t.abort();var m=i-h,M=e.duration*Math.abs(m),S=[];if(M>0){var b=!1;if(c)for(var O=Math.ceil(M/16.666666666666668),L=0;L<=O;L+=1){var A=h+m*d(L/O),E=qp(c(A,1-A));S.push(E),b||(b=E.overflow==="hidden")}b&&(n.style.overflow="hidden"),g=()=>{var C=_.currentTime;return h+m*d(C/M)},u&&Ny(()=>{if(_.playState!=="running")return!1;var C=g();return u(C,1-C),!0})}_=n.animate(S,{duration:M,fill:"forwards"}),_.onfinish=()=>{g=()=>i,u==null||u(i,1-i),r()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=xn)},deactivate:()=>{r=xn},reset:()=>{i===0&&(u==null||u(1,0))},t:()=>g()}}function X_(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(t=X_(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function Y_(){for(var n,e,t=0,i="",r=arguments.length;t<r;t++)(n=arguments[t])&&(e=X_(n))&&(i&&(i+=" "),i+=e);return i}function Vs(n){return typeof n=="object"?Y_(n):n??""}function By(n,e,t){var i=n==null?"":""+n;return i===""?null:i}function ls(n,e,t,i,r,s){var o=n.__className;if(o!==t||o===void 0){var a=By(t);a==null?n.removeAttribute("class"):n.className=a,n.__className=t}return s}function q_(n,e,t=!1){if(n.multiple){if(e==null)return;if(!xd(e))return Px();for(var i of n.options)i.selected=e.includes(wl(i));return}for(i of n.options){var r=wl(i);if(ty(r,e)){i.selected=!0;return}}(!t||e!==void 0)&&(n.selectedIndex=-1)}function ky(n){var e=new MutationObserver(()=>{q_(n,n.__value)});e.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Mu(()=>{e.disconnect()})}function Nd(n,e,t=e){var i=new WeakSet,r=!0;A_(n,"change",s=>{var o=s?"[selected]":":checked",a;if(n.multiple)a=[].map.call(n.querySelectorAll(o),wl);else{var l=n.querySelector(o)??n.querySelector("option:not([disabled])");a=l&&wl(l)}t(a),n.__value=a,rt!==null&&i.add(rt)}),Ld(()=>{var s=e();if(n===document.activeElement){var o=rt;if(i.has(o))return}if(q_(n,s,r),r&&s===void 0){var a=n.querySelector(":checked");a!==null&&(s=wl(a),t(s))}n.__value=s,r=!1}),ky(n)}function wl(n){return"__value"in n?n.__value:n.value}const zy=Symbol("is custom element"),Hy=Symbol("is html");function or(n,e,t,i){var r=Gy(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[vx]=t),t==null?n.removeAttribute(e):typeof t!="string"&&Vy(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Gy(n){return n.__attributes??(n.__attributes={[zy]:n.nodeName.includes("-"),[Hy]:n.namespaceURI===Kg})}var Kp=new Map;function Vy(n){var e=n.getAttribute("is")||n.nodeName,t=Kp.get(e);if(t)return t;Kp.set(e,t=[]);for(var i,r=n,s=Element.prototype;s!==r;){i=Jg(r);for(var o in i)i[o].set&&t.push(o);r=yd(r)}return t}function j_(n,e,t=e){var i=new WeakSet;A_(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=ef(n)?tf(s):s,t(s),rt!==null&&i.add(rt),await py(),s!==(s=e())){var o=n.selectionStart,a=n.selectionEnd,l=n.value.length;if(n.value=s??"",a!==null){var c=n.value.length;o===a&&a===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=o,n.selectionEnd=Math.min(a,c))}}}),ui(e)==null&&n.value&&(t(ef(n)?tf(n.value):n.value),rt!==null&&i.add(rt)),Wl(()=>{var r=e();if(n===document.activeElement){var s=rt;if(i.has(s))return}ef(n)&&r===tf(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function ef(n){var e=n.type;return e==="number"||e==="range"}function tf(n){return n===""?null:+n}function Zp(n,e){return n===e||(n==null?void 0:n[Cr])===e}function jl(n={},e,t,i){var r=Nt.r,s=mt;return Ld(()=>{var o,a;return Wl(()=>{o=a,a=(i==null?void 0:i())||[],ui(()=>{n!==t(...a)&&(e(n,...a),o&&Zp(t(...o),n)&&e(null,...o))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Jf;)l=l.parent;const c=()=>{a&&Zp(t(...a),n)&&e(null,...a)},u=l.teardown;l.teardown=()=>{c(),u==null||u()}}}),n}function K_(n=!1){const e=Nt,t=e.l.u;if(!t)return;let i=()=>G_(e.s);if(n){let r=0,s={};const o=Gl(()=>{let a=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&r++,r});i=()=>B(o)}t.b.length&&ay(()=>{Jp(e,i),iu(t.b)}),Bi(()=>{const r=ui(()=>t.m.map(gx));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Bi(()=>{Jp(e,i),iu(t.a)})}function Jp(n,e){if(n.l.s)for(const t of n.l.s)B(t);e()}const Wy={get(n,e){if(!n.exclude.includes(e))return B(n.version),e in n.special?n.special[e]():n.props[e]},set(n,e,t){if(!(e in n.special)){var i=mt;try{hi(n.parent_effect),n.special[e]=Dt({get[e](){return n.props[e]}},e,jg)}finally{hi(i)}}return n.special[e](t),Bp(n.version),!0},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},deleteProperty(n,e){return n.exclude.includes(e)||(n.exclude.push(e),Bp(n.version)),!0},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function Xy(n,e){return new Proxy({props:n,exclude:e,special:{},version:Ir(0),parent_effect:mt},Wy)}const Yy={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(fa(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];fa(r)&&(r=r());const s=Ds(r,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(fa(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=Ds(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===Cr||e===t_)return!1;for(let t of n.props)if(fa(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props)if(fa(t)&&(t=t()),!!t){for(const i in t)e.includes(i)||e.push(i);for(const i of Object.getOwnPropertySymbols(t))e.includes(i)||e.push(i)}return e}};function qy(...n){return new Proxy({props:n},Yy)}function Dt(n,e,t,i){var S;var r=!Ga||(t&ix)!==0,s=(t&rx)!==0,o=(t&sx)!==0,a=i,l=!0,c=()=>(l&&(l=!1,a=o?ui(i):i),a);let u;if(s){var d=Cr in n||t_ in n;u=((S=Ds(n,e))==null?void 0:S.set)??(d&&e in n?b=>n[e]=b:void 0)}var f,p=!1;s?[f,p]=kx(()=>n[e]):f=n[e],f===void 0&&i!==void 0&&(f=c(),u&&(r&&wx(),u(f)));var g;if(r?g=()=>{var b=n[e];return b===void 0?c():(l=!0,b)}:g=()=>{var b=n[e];return b!==void 0&&(a=void 0),b===void 0?a:b},r&&!(t&jg))return g;if(u){var _=n.$$legacy;return function(b,O){return arguments.length>0?((!r||!O||_||p)&&u(O?g():b),b):g()}}var h=!1,m=(t&nx?Gl:Rd)(()=>(h=!1,g()));s&&B(m);var M=mt;return function(b,O){if(arguments.length>0){const L=O?B(m):r&&s?Vn(b):b;return Ue(m,L),h=!0,a!==void 0&&(a=L),b}return Bs&&h||M.f&Ti?m.v:B(m)}}Ix();const $p={},gh={},jy={},Z_=/^:(.+)/,Qp=4,Ky=3,Zy=2,Jy=1,$y=1,_h=n=>n.replace(/(^\/+|\/+$)/g,"").split("/"),nf=n=>n.replace(/(^\/+|\/+$)/g,""),Qy=(n,e)=>{const t=n.default?0:_h(n.path).reduce((i,r)=>(i+=Qp,r===""?i+=$y:Z_.test(r)?i+=Zy:r[0]==="*"?i-=Qp+Jy:i+=Ky,i),0);return{route:n,score:t,index:e}},eS=n=>n.map(Qy).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index),em=(n,e)=>{let t,i;const[r]=e.split("?"),s=_h(r),o=s[0]==="",a=eS(n);for(let l=0,c=a.length;l<c;l++){const u=a[l].route;let d=!1;if(u.default){i={route:u,params:{},uri:e};continue}const f=_h(u.path),p={},g=Math.max(s.length,f.length);let _=0;for(;_<g;_++){const h=f[_],m=s[_];if(h&&h[0]==="*"){const S=h==="*"?"*":h.slice(1);p[S]=s.slice(_).map(decodeURIComponent).join("/");break}if(typeof m>"u"){d=!0;break}const M=Z_.exec(h);if(M&&!o){const S=decodeURIComponent(m);p[M[1]]=S}else if(h!==m){d=!0;break}}if(!d){t={route:u,params:p,uri:"/"+s.slice(0,_).join("/")};break}}return t||i||null},rf=(n,e)=>`${nf(e==="/"?n:`${nf(n)}/${nf(e)}`)}/`,vh=()=>typeof window<"u"&&"document"in window&&"location"in window;function zr(n,e){const t=Xy(e,["children","$$slots","$$events","$$legacy"]);Xt(e,!1);const i=()=>vl(f,"$activeRoute",r),[r,s]=u_();let o=Dt(e,"path",8,""),a=Dt(e,"component",12,null),l=wo({}),c=wo({});const{registerRoute:u,unregisterRoute:d,activeRoute:f}=eh(gh),p={path:o(),default:o()===""};u(p),ql(()=>{d(p)}),lh(()=>(i(),G_(t),vh),()=>{if(i()&&i().route===p){Ue(l,i().params);const{component:m,path:M,...S}=t;Ue(c,S),m&&(m.toString().startsWith("class ")?a(m):a(m())),vh()&&!i().preserveScroll&&(window==null||window.scrollTo(0,0))}}),P_(),K_();var g=Tr(),_=kt(g);{var h=m=>{var M=Tr(),S=kt(M);{var b=L=>{var A=Tr(),E=kt(A);Ay(E,a,null,(C,v)=>{var x=Tr(),P=kt(x);Iy(P,()=>{var U;return((U=B(v))==null?void 0:U.default)||B(v)},(U,k)=>{k(U,qy(()=>B(l),()=>B(c)))}),Le(C,x)}),Le(L,A)},O=L=>{var A=Tr(),E=kt(A);ph(E,e,"default",{get params(){return B(l)}}),Le(L,A)};Xn(S,L=>{a()?L(b):L(O,-1)})}Le(m,M)};Xn(_,m=>{i(),ui(()=>i()&&i().route===p)&&m(h)})}Le(n,g),Yt(),s()}const sf=n=>({...n.location,state:n.history.state,key:n.history.state&&n.history.state.key||"initial"}),tS=n=>{const e=[];let t=sf(n);return{get location(){return t},listen(i){e.push(i);const r=()=>{t=sf(n),i({location:t,action:"POP"})};return n.addEventListener("popstate",r),()=>{n.removeEventListener("popstate",r);const s=e.indexOf(i);e.splice(s,1)}},navigate(i,{state:r,replace:s=!1,preserveScroll:o=!1,blurActiveElement:a=!0}={}){r={...r,key:Date.now()+""};try{s?n.history.replaceState(r,"",i):n.history.pushState(r,"",i)}catch{n.location[s?"replace":"assign"](i)}t=sf(n),e.forEach(l=>l({location:t,action:"PUSH",preserveScroll:o})),a&&document.activeElement.blur()}}},nS=(n="/")=>{let e=0;const t=[{pathname:n,search:""}],i=[];return{get location(){return t[e]},addEventListener(r,s){},removeEventListener(r,s){},history:{get entries(){return t},get index(){return e},get state(){return i[e]},pushState(r,s,o){const[a,l=""]=o.split("?");e++,t.push({pathname:a,search:l}),i.push(r)},replaceState(r,s,o){const[a,l=""]=o.split("?");t[e]={pathname:a,search:l},i[e]=r}}}},J_=tS(vh()?window:nS()),{navigate:Kl}=J_;var iS=$e("<div><!></div>");function rS(n,e){Xt(e,!1);const t=()=>vl(S,"$base",o),i=()=>vl(M,"$location",o),r=()=>vl(_,"$routes",o),s=()=>vl(h,"$activeRoute",o),[o,a]=u_();let l=Dt(e,"basepath",8,"/"),c=Dt(e,"url",8,null),u=Dt(e,"viewtransition",8,null),d=Dt(e,"history",8,J_);const f=(P,U,k)=>{const H=u()(k);return typeof(H==null?void 0:H.fn)=="function"?H.fn(P,H):H};Ju(jy,d());const p=eh($p),g=eh(gh),_=da([]),h=da(null);let m=!1;const M=p||da(c()?{pathname:c()}:d().location),S=g?g.routerBase:da({path:l(),uri:l()}),b=Bx([S,h],([P,U])=>{if(!U)return P;const{path:k}=P,{route:H,uri:G}=U;return{path:H.default?k:H.path.replace(/\*.*$/,""),uri:G}}),O=P=>{const{path:U}=t();let{path:k}=P;if(P._path=k,P.path=rf(U,k),typeof window>"u"){if(m)return;const H=em([P],i().pathname);H&&(h.set(H),m=!0)}else _.update(H=>[...H,P])},L=P=>{_.update(U=>U.filter(k=>k!==P))};let A=wo(!1);p||(di(()=>d().listen(U=>{Ue(A,U.preserveScroll||!1),M.set(U.location)})),Ju($p,M)),Ju(gh,{activeRoute:h,base:S,routerBase:b,registerRoute:O,unregisterRoute:L}),lh(()=>(t(),rf),()=>{const{path:P}=t();_.update(U=>U.map(k=>Object.assign(k,{path:rf(P,k._path)})))}),lh(()=>(r(),i(),B(A)),()=>{const P=em(r(),i().pathname);h.set(P&&{...P,preserveScroll:B(A)})}),P_(),K_();var E=Tr(),C=kt(E);{var v=P=>{var U=Tr(),k=kt(U);Cy(k,()=>(i(),ui(()=>i().pathname)),H=>{var G=iS(),z=et(G);ph(z,e,"default",{get route(){return s(),ui(()=>s()&&s().uri)},get location(){return i()}}),jp(1,G,()=>f),jp(2,G,()=>f),Le(H,G)}),Le(P,U)},x=P=>{var U=Tr(),k=kt(U);ph(k,e,"default",{get route(){return s(),ui(()=>s()&&s().uri)},get location(){return i()}}),Le(P,U)};Xn(C,P=>{u()?P(v):P(x,-1)})}Le(n,E),Yt(),a()}const fc="reservoir_api_key";function sS(){const n=localStorage.getItem(fc)??"",{subscribe:e,set:t}=da(n);return{subscribe:e,set(i){i?localStorage.setItem(fc,i):localStorage.removeItem(fc),t(i)},clear(){localStorage.removeItem(fc),t("")}}}const Dl=sS();function oS(){const n=wd(Dl);return n?{"X-API-Key":n}:{}}async function bu(n,e={}){const t=await fetch(`/api${n}`,{...e,headers:{...oS(),...e.headers}});if(!t.ok)throw new Error(`${t.status}: ${t.statusText}`);return t}async function aS(){return(await bu("/health")).json()}async function lS(){return(await bu("/reservoirs")).json()}async function $_(n){return(await bu(`/reservoirs/${encodeURIComponent(n)}`)).json()}async function Ro(n,e){return(await bu(`/reservoirs/${encodeURIComponent(n)}/${encodeURIComponent(e)}`)).json()}function Zl(n,e,t){return`/api/reservoirs/${encodeURIComponent(n)}/${encodeURIComponent(e)}/${t}`}function xh(n,e,t){return`/api/images/${encodeURIComponent(n)}/${encodeURIComponent(e)}/${t}`}const Od="-",cS=n=>{const e=fS(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:i}=n;return{getClassGroupId:o=>{const a=o.split(Od);return a[0]===""&&a.length!==1&&a.shift(),Q_(a,e)||uS(o)},getConflictingClassGroupIds:(o,a)=>{const l=t[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},Q_=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const t=n[0],i=e.nextPart.get(t),r=i?Q_(n.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=n.join(Od);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},tm=/^\[(.+)\]$/,uS=n=>{if(tm.test(n)){const e=tm.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},fS=n=>{const{theme:e,prefix:t}=n,i={nextPart:new Map,validators:[]};return dS(Object.entries(n.classGroups),t).forEach(([s,o])=>{yh(o,i,s,e)}),i},yh=(n,e,t,i)=>{n.forEach(r=>{if(typeof r=="string"){const s=r===""?e:nm(e,r);s.classGroupId=t;return}if(typeof r=="function"){if(hS(r)){yh(r(i),e,t,i);return}e.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(([s,o])=>{yh(o,nm(e,s),t,i)})})},nm=(n,e)=>{let t=n;return e.split(Od).forEach(i=>{t.nextPart.has(i)||t.nextPart.set(i,{nextPart:new Map,validators:[]}),t=t.nextPart.get(i)}),t},hS=n=>n.isThemeGetter,dS=(n,e)=>e?n.map(([t,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[t,r]}):n,pS=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,i=new Map;const r=(s,o)=>{t.set(s,o),e++,e>n&&(e=0,i=t,t=new Map)};return{get(s){let o=t.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){t.has(s)?t.set(s,o):r(s,o)}}},ev="!",mS=n=>{const{separator:e,experimentalParseClassName:t}=n,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,d;for(let h=0;h<a.length;h++){let m=a[h];if(c===0){if(m===r&&(i||a.slice(h,h+s)===e)){l.push(a.slice(u,h)),u=h+s;continue}if(m==="/"){d=h;continue}}m==="["?c++:m==="]"&&c--}const f=l.length===0?a:a.substring(u),p=f.startsWith(ev),g=p?f.substring(1):f,_=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:_}};return t?a=>t({className:a,parseClassName:o}):o},gS=n=>{if(n.length<=1)return n;const e=[];let t=[];return n.forEach(i=>{i[0]==="["?(e.push(...t.sort(),i),t=[]):t.push(i)}),e.push(...t.sort()),e},_S=n=>({cache:pS(n.cacheSize),parseClassName:mS(n),...cS(n)}),vS=/\s+/,xS=(n,e)=>{const{parseClassName:t,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=n.trim().split(vS);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=t(c);let g=!!p,_=i(g?f.substring(0,p):f);if(!_){if(!g){a=c+(a.length>0?" "+a:a);continue}if(_=i(f),!_){a=c+(a.length>0?" "+a:a);continue}g=!1}const h=gS(u).join(":"),m=d?h+ev:h,M=m+_;if(s.includes(M))continue;s.push(M);const S=r(_,g);for(let b=0;b<S.length;++b){const O=S[b];s.push(m+O)}a=c+(a.length>0?" "+a:a)}return a};function yS(){let n=0,e,t,i="";for(;n<arguments.length;)(e=arguments[n++])&&(t=tv(e))&&(i&&(i+=" "),i+=t);return i}const tv=n=>{if(typeof n=="string")return n;let e,t="";for(let i=0;i<n.length;i++)n[i]&&(e=tv(n[i]))&&(t&&(t+=" "),t+=e);return t};function SS(n,...e){let t,i,r,s=o;function o(l){const c=e.reduce((u,d)=>d(u),n());return t=_S(c),i=t.cache.get,r=t.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=xS(l,t);return r(l,u),u}return function(){return s(yS.apply(null,arguments))}}const Zt=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},nv=/^\[(?:([a-z-]+):)?(.+)\]$/i,MS=/^\d+\/\d+$/,bS=new Set(["px","full","screen"]),ES=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,TS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,AS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,RS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Hr=n=>va(n)||bS.has(n)||MS.test(n),vs=n=>Ya(n,"length",OS),va=n=>!!n&&!Number.isNaN(Number(n)),of=n=>Ya(n,"number",va),al=n=>!!n&&Number.isInteger(Number(n)),CS=n=>n.endsWith("%")&&va(n.slice(0,-1)),ht=n=>nv.test(n),xs=n=>ES.test(n),PS=new Set(["length","size","percentage"]),LS=n=>Ya(n,PS,iv),DS=n=>Ya(n,"position",iv),IS=new Set(["image","url"]),US=n=>Ya(n,IS,BS),NS=n=>Ya(n,"",FS),ll=()=>!0,Ya=(n,e,t)=>{const i=nv.exec(n);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):t(i[2]):!1},OS=n=>wS.test(n)&&!TS.test(n),iv=()=>!1,FS=n=>AS.test(n),BS=n=>RS.test(n),kS=()=>{const n=Zt("colors"),e=Zt("spacing"),t=Zt("blur"),i=Zt("brightness"),r=Zt("borderColor"),s=Zt("borderRadius"),o=Zt("borderSpacing"),a=Zt("borderWidth"),l=Zt("contrast"),c=Zt("grayscale"),u=Zt("hueRotate"),d=Zt("invert"),f=Zt("gap"),p=Zt("gradientColorStops"),g=Zt("gradientColorStopPositions"),_=Zt("inset"),h=Zt("margin"),m=Zt("opacity"),M=Zt("padding"),S=Zt("saturate"),b=Zt("scale"),O=Zt("sepia"),L=Zt("skew"),A=Zt("space"),E=Zt("translate"),C=()=>["auto","contain","none"],v=()=>["auto","hidden","clip","visible","scroll"],x=()=>["auto",ht,e],P=()=>[ht,e],U=()=>["",Hr,vs],k=()=>["auto",va,ht],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",ht],ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],re=()=>[va,ht];return{cacheSize:500,separator:":",theme:{colors:[ll],spacing:[Hr,vs],blur:["none","",xs,ht],brightness:re(),borderColor:[n],borderRadius:["none","","full",xs,ht],borderSpacing:P(),borderWidth:U(),contrast:re(),grayscale:Q(),hueRotate:re(),invert:Q(),gap:P(),gradientColorStops:[n],gradientColorStopPositions:[CS,vs],inset:x(),margin:x(),opacity:re(),padding:P(),saturate:re(),scale:re(),sepia:Q(),skew:re(),space:P(),translate:P()},classGroups:{aspect:[{aspect:["auto","square","video",ht]}],container:["container"],columns:[{columns:[xs]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),ht]}],overflow:[{overflow:v()}],"overflow-x":[{"overflow-x":v()}],"overflow-y":[{"overflow-y":v()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",al,ht]}],basis:[{basis:x()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ht]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",al,ht]}],"grid-cols":[{"grid-cols":[ll]}],"col-start-end":[{col:["auto",{span:["full",al,ht]},ht]}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":[ll]}],"row-start-end":[{row:["auto",{span:[al,ht]},ht]}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ht]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ht]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ht,e]}],"min-w":[{"min-w":[ht,e,"min","max","fit"]}],"max-w":[{"max-w":[ht,e,"none","full","min","max","fit","prose",{screen:[xs]},xs]}],h:[{h:[ht,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ht,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ht,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ht,e,"auto","min","max","fit"]}],"font-size":[{text:["base",xs,vs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",of]}],"font-family":[{font:[ll]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ht]}],"line-clamp":[{"line-clamp":["none",va,of]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Hr,ht]}],"list-image":[{"list-image":["none",ht]}],"list-style-type":[{list:["none","disc","decimal",ht]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Hr,vs]}],"underline-offset":[{"underline-offset":["auto",Hr,ht]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:P()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ht]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ht]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),DS]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",LS]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},US]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:G()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Hr,ht]}],"outline-w":[{outline:[Hr,vs]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Hr,vs]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",xs,NS]}],"shadow-color":[{shadow:[ll]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",xs,ht]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[S]}],sepia:[{sepia:[O]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ht]}],duration:[{duration:re()}],ease:[{ease:["linear","in","out","in-out",ht]}],delay:[{delay:re()}],animate:[{animate:["none","spin","ping","pulse","bounce",ht]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[al,ht]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ht]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ht]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":P()}],"scroll-mx":[{"scroll-mx":P()}],"scroll-my":[{"scroll-my":P()}],"scroll-ms":[{"scroll-ms":P()}],"scroll-me":[{"scroll-me":P()}],"scroll-mt":[{"scroll-mt":P()}],"scroll-mr":[{"scroll-mr":P()}],"scroll-mb":[{"scroll-mb":P()}],"scroll-ml":[{"scroll-ml":P()}],"scroll-p":[{"scroll-p":P()}],"scroll-px":[{"scroll-px":P()}],"scroll-py":[{"scroll-py":P()}],"scroll-ps":[{"scroll-ps":P()}],"scroll-pe":[{"scroll-pe":P()}],"scroll-pt":[{"scroll-pt":P()}],"scroll-pr":[{"scroll-pr":P()}],"scroll-pb":[{"scroll-pb":P()}],"scroll-pl":[{"scroll-pl":P()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ht]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[Hr,vs,of]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},zS=SS(kS);function No(...n){return zS(Y_(n))}var HS=$e("<div><!></div>");function rv(n,e){Xt(e,!0);let t=Dt(e,"class",3,"");var i=HS(),r=et(i);Yl(r,()=>e.children??xn),bt(s=>ls(i,1,s),[()=>Vs(No("rounded-lg border bg-card text-card-foreground shadow-sm",e.onclick&&"cursor-pointer hover:shadow-md transition-shadow",t()))]),Ao("click",i,function(...s){var o;(o=e.onclick)==null||o.apply(this,s)}),Le(n,i),Yt()}Xa(["click"]);var GS=$e("<input/>");function VS(n,e){Xt(e,!0);let t=Dt(e,"value",15,""),i=Dt(e,"placeholder",3,""),r=Dt(e,"type",3,"text"),s=Dt(e,"class",3,"");var o=GS();bt(a=>{or(o,"type",r()),or(o,"placeholder",i()),ls(o,1,a)},[()=>Vs(No("flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50",s()))]),Ao("input",o,function(...a){var l;(l=e.oninput)==null||l.apply(this,a)}),Ao("keydown",o,function(...a){var l;(l=e.onkeydown)==null||l.apply(this,a)}),j_(o,t),Le(n,o),Yt()}Xa(["input","keydown"]);var WS=$e("<button><!></button>");function Fd(n,e){Xt(e,!0);let t=Dt(e,"variant",3,"default"),i=Dt(e,"size",3,"md"),r=Dt(e,"disabled",3,!1),s=Dt(e,"type",3,"button"),o=Dt(e,"class",3,"");const a="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",l={default:"bg-primary text-primary-foreground hover:bg-primary/90",outline:"border border-input hover:bg-muted",ghost:"hover:bg-muted",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90"},c={sm:"h-8 px-3 text-xs",md:"h-9 px-4 text-sm",lg:"h-10 px-6 text-base"};var u=WS(),d=et(u);Yl(d,()=>e.children??xn),bt(f=>{or(u,"type",s()),u.disabled=r(),ls(u,1,f)},[()=>Vs(No(a,l[t()],c[i()],o()))]),Ao("click",u,function(...f){var p;(p=e.onclick)==null||p.apply(this,f)}),Le(n,u),Yt()}Xa(["click"]);var XS=$e("<div><!></div>");function cs(n,e){Xt(e,!0);let t=Dt(e,"variant",3,"default"),i=Dt(e,"class",3,"");const r={default:"bg-muted text-foreground",destructive:"bg-destructive/10 text-destructive border-destructive/30"};var s=XS(),o=et(s);Yl(o,()=>e.children??xn),bt(a=>ls(s,1,a),[()=>Vs(No("relative w-full rounded-lg border p-4 text-sm",r[t()],i()))]),Le(n,s),Yt()}var YS=$e("<div></div>");function us(n,e){Xt(e,!0);let t=Dt(e,"class",3,"");var i=YS();bt(r=>ls(i,1,r),[()=>Vs(No("animate-spin rounded-full border-2 border-muted border-t-primary h-5 w-5",t()))]),Le(n,i),Yt()}var qS=$e("<!> Connect",1),jS=$e('<h1 class="text-2xl font-bold text-center">Reservoir Manager</h1> <p class="text-sm text-muted-foreground text-center">Enter your API key to connect</p> <!> <!> <!>',1),KS=$e('<div class="min-h-screen flex items-center justify-center bg-muted/30"><!></div>');function ZS(n,e){Xt(e,!0);let t=Qe(""),i=Qe(!1),r=Qe("");async function s(){if(!B(t).trim()){Ue(r,"API key is required");return}Ue(i,!0),Ue(r,""),Dl.set(B(t).trim());try{await aS(),Kl("/",{replace:!0})}catch(l){Dl.clear();const c=l instanceof Error?l.message:String(l);Ue(r,c.startsWith("401")?"Invalid API key":`Connection failed: ${c}`,!0)}finally{Ue(i,!1)}}var o=KS(),a=et(o);rv(a,{class:"w-full max-w-sm p-8 flex flex-col gap-4",children:(l,c)=>{var u=jS(),d=lt(kt(u),4);{var f=_=>{cs(_,{variant:"destructive",children:(h,m)=>{var M=Hi();bt(()=>Wt(M,B(r))),Le(h,M)},$$slots:{default:!0}})};Xn(d,_=>{B(r)&&_(f)})}var p=lt(d,2);VS(p,{placeholder:"X-API-Key value",type:"password",onkeydown:_=>_.key==="Enter"&&s(),get value(){return B(t)},set value(_){Ue(t,_,!0)}});var g=lt(p,2);Fd(g,{onclick:s,get disabled(){return B(i)},class:"w-full",children:(_,h)=>{var m=qS(),M=kt(m);{var S=b=>{us(b,{class:"mr-2"})};Xn(M,b=>{B(i)&&b(S)})}Le(_,m)},$$slots:{default:!0}}),Le(l,u)},$$slots:{default:!0}}),Le(n,o),Yt()}var JS=$e('<span class="text-muted-foreground">/</span> <span> </span>',1),$S=$e('<header class="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-6 h-14 shadow-sm"><div class="flex items-center gap-2 text-sm font-medium"><span class="font-semibold text-primary">Reservoir Manager</span> <!></div> <!></header>');function Ws(n,e){Xt(e,!0);let t=Dt(e,"breadcrumb",19,()=>[]);function i(){Dl.clear(),Kl("/login",{replace:!0})}var r=$S(),s=et(r),o=lt(et(s),2);ur(o,17,t,cr,(l,c,u)=>{var d=JS(),f=lt(kt(d),2),p=et(f);bt(()=>{ls(f,1,Vs(u===t().length-1?"text-foreground":"text-muted-foreground")),Wt(p,B(c))}),Le(l,d)});var a=lt(s,2);Fd(a,{variant:"ghost",size:"sm",onclick:i,children:(l,c)=>{var u=Hi("Disconnect");Le(l,u)},$$slots:{default:!0}}),Le(n,r),Yt()}var QS=$e("<span><!></span>");function eM(n,e){Xt(e,!0);let t=Dt(e,"variant",3,"default"),i=Dt(e,"class",3,"");const r={default:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",outline:"border border-input text-foreground"};var s=QS(),o=et(s);Yl(o,()=>e.children??xn),bt(a=>ls(s,1,a),[()=>Vs(No("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",r[t()],i()))]),Le(n,s),Yt()}var tM=$e('<div class="flex justify-center py-12"><!></div>'),nM=$e('<h2 class="text-lg font-semibold mb-2"> </h2> <div class="flex flex-wrap gap-1"></div>',1),iM=$e('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>'),rM=$e('<!> <main class="p-6 max-w-4xl mx-auto"><h1 class="text-2xl font-bold mb-6">Reservoirs</h1> <!></main>',1);function sM(n,e){Xt(e,!0);let t=Qe(!0),i=Qe(""),r=Qe(Vn([]));di(async()=>{try{const f=await lS(),p=await Promise.all(f.map(g=>$_(g)));Ue(r,f.map((g,_)=>({name:g,summary:p[_]})),!0)}catch(f){Ue(i,f instanceof Error?f.message:String(f),!0)}finally{Ue(t,!1)}});var s=rM(),o=kt(s);Ws(o,{});var a=lt(o,2),l=lt(et(a),2);{var c=f=>{var p=tM(),g=et(p);us(g,{class:"h-8 w-8"}),Le(f,p)},u=f=>{cs(f,{variant:"destructive",children:(p,g)=>{var _=Hi();bt(()=>Wt(_,B(i))),Le(p,_)},$$slots:{default:!0}})},d=f=>{var p=iM();ur(p,21,()=>B(r),cr,(g,_)=>{let h=()=>B(_).name,m=()=>B(_).summary;rv(g,{onclick:()=>Kl(`/reservoirs/${h()}`),class:"p-5",children:(M,S)=>{var b=nM(),O=kt(b),L=et(O),A=lt(O,2);ur(A,21,()=>Object.entries(m()),cr,(E,C)=>{var v=Vt(()=>Sd(B(C),2));let x=()=>B(v)[0],P=()=>B(v)[1];eM(E,{variant:"secondary",children:(U,k)=>{var H=Hi();bt(()=>Wt(H,`${x()??""}: ${P()??""}`)),Le(U,H)},$$slots:{default:!0}})}),bt(()=>Wt(L,h())),Le(M,b)},$$slots:{default:!0}})}),Le(f,p)};Xn(l,f=>{B(t)?f(c):B(i)?f(u,1):f(d,-1)})}Le(n,s),Yt()}var oM=$e('<div class="flex justify-center py-12"><!></div>'),aM=$e('<button><div class="text-sm font-medium mb-1"> </div> <div class="text-3xl font-bold"> </div></button>'),lM=$e('<div class="grid grid-cols-2 sm:grid-cols-3 gap-4"></div>'),cM=$e('<!> <main class="p-6 max-w-4xl mx-auto"><h1 class="text-2xl font-bold mb-6"> </h1> <!></main>',1);function uM(n,e){Xt(e,!0);let t=Qe(!0),i=Qe(""),r=Qe(Vn({}));const s=[{key:"well_logs",label:"Well Logs",color:"bg-blue-100 text-blue-800 hover:bg-blue-200"},{key:"production",label:"Production",color:"bg-green-100 text-green-800 hover:bg-green-200"},{key:"well_paths",label:"Well Paths",color:"bg-orange-100 text-orange-800 hover:bg-orange-200"},{key:"seismic",label:"Seismic",color:"bg-red-100 text-red-800 hover:bg-red-200"},{key:"core_photos",label:"Core Photos",color:"bg-purple-100 text-purple-800 hover:bg-purple-200"},{key:"osdu_manifests",label:"OSDU Manifests",color:"bg-cyan-100 text-cyan-800 hover:bg-cyan-200"}];di(async()=>{try{Ue(r,await $_(e.name),!0)}catch(_){Ue(i,_ instanceof Error?_.message:String(_),!0)}finally{Ue(t,!1)}});var o=cM(),a=kt(o);{let _=Vt(()=>[e.name]);Ws(a,{get breadcrumb(){return B(_)}})}var l=lt(a,2),c=et(l),u=et(c),d=lt(c,2);{var f=_=>{var h=oM(),m=et(h);us(m,{class:"h-8 w-8"}),Le(_,h)},p=_=>{cs(_,{variant:"destructive",children:(h,m)=>{var M=Hi();bt(()=>Wt(M,B(i))),Le(h,M)},$$slots:{default:!0}})},g=_=>{var h=lM();ur(h,21,()=>s,cr,(m,M)=>{var S=Tr(),b=kt(S);{var O=L=>{var A=aM(),E=et(A),C=et(E),v=lt(E,2),x=et(v);bt(()=>{ls(A,1,`rounded-lg border p-5 text-left transition-colors cursor-pointer ${B(M).color??""}`),Wt(C,B(M).label),Wt(x,B(r)[B(M).key])}),Ao("click",A,()=>Kl(`/reservoirs/${e.name}/${B(M).key}`)),Le(L,A)};Xn(b,L=>{B(r)[B(M).key]!==void 0&&L(O)})}Le(m,S)}),Le(_,h)};Xn(d,_=>{B(t)?_(f):B(i)?_(p,1):_(g,-1)})}bt(()=>Wt(u,e.name)),Le(n,o),Yt()}Xa(["click"]);function fM(n){const e=n.split(`
`),t=[],i={};let r=-9999.25,s=!1,o=!1;const a=[];for(const u of e){const d=u.trim();if(!d||d.startsWith("#"))continue;if(d.startsWith("~")){s=d.toUpperCase().startsWith("~C"),o=d.toUpperCase().startsWith("~A");continue}if(s){const p=d.match(/^(\w+)\s*\.\s*(\S*)\s/);p&&(t.push(p[1].toUpperCase()),i[p[1].toUpperCase()]=p[2]);continue}const f=d.match(/^NULL\s*\.\s*\S*\s+([-\d.]+)/i);if(f&&(r=parseFloat(f[1])),o){const p=d.split(/\s+/).map(Number);p.length===t.length&&a.push(p)}}const l=[],c={};for(const u of t.slice(1))c[u]=[];for(const u of a)l.push(u[0]),t.slice(1).forEach((d,f)=>{const p=u[f+1];c[d].push(Math.abs(p-r)<.01?NaN:p)});return{depth:l,curves:c,units:i}}const hM=!0,bn="u-",dM="uplot",pM=bn+"hz",mM=bn+"vt",gM=bn+"title",_M=bn+"wrap",vM=bn+"under",xM=bn+"over",yM=bn+"axis",ao=bn+"off",SM=bn+"select",MM=bn+"cursor-x",bM=bn+"cursor-y",EM=bn+"cursor-pt",wM=bn+"legend",TM=bn+"live",AM=bn+"inline",RM=bn+"series",CM=bn+"marker",im=bn+"label",PM=bn+"value",yl="width",Sl="height",cl="top",rm="bottom",Zo="left",af="right",Bd="#000",sm=Bd+"0",lf="mousemove",om="mousedown",cf="mouseup",am="mouseenter",lm="mouseleave",cm="dblclick",LM="resize",DM="scroll",um="change",au="dppxchange",kd="--",qa=typeof window<"u",Sh=qa?document:null,xa=qa?window:null,IM=qa?navigator:null;let Lt,hc;function Mh(){let n=devicePixelRatio;Lt!=n&&(Lt=n,hc&&Eh(um,hc,Mh),hc=matchMedia(`(min-resolution: ${Lt-.001}dppx) and (max-resolution: ${Lt+.001}dppx)`),Mo(um,hc,Mh),xa.dispatchEvent(new CustomEvent(au)))}function Si(n,e){if(e!=null){let t=n.classList;!t.contains(e)&&t.add(e)}}function bh(n,e){let t=n.classList;t.contains(e)&&t.remove(e)}function Jt(n,e,t){n.style[e]=t+"px"}function Ki(n,e,t,i){let r=Sh.createElement(n);return e!=null&&Si(r,e),t!=null&&t.insertBefore(r,i),r}function Di(n,e){return Ki("div",n,e)}const fm=new WeakMap;function vr(n,e,t,i,r){let s="translate("+e+"px,"+t+"px)",o=fm.get(n);s!=o&&(n.style.transform=s,fm.set(n,s),e<0||t<0||e>i||t>r?Si(n,ao):bh(n,ao))}const hm=new WeakMap;function dm(n,e,t){let i=e+t,r=hm.get(n);i!=r&&(hm.set(n,i),n.style.background=e,n.style.borderColor=t)}const pm=new WeakMap;function mm(n,e,t,i){let r=e+""+t,s=pm.get(n);r!=s&&(pm.set(n,r),n.style.height=t+"px",n.style.width=e+"px",n.style.marginLeft=i?-e/2+"px":0,n.style.marginTop=i?-t/2+"px":0)}const zd={passive:!0},UM={...zd,capture:!0};function Mo(n,e,t,i){e.addEventListener(n,t,i?UM:zd)}function Eh(n,e,t,i){e.removeEventListener(n,t,zd)}qa&&Mh();function Qi(n,e,t,i){let r;t=t||0,i=i||e.length-1;let s=i<=2147483647;for(;i-t>1;)r=s?t+i>>1:Ai((t+i)/2),e[r]<n?t=r:i=r;return n-e[t]<=e[i]-n?t:i}function sv(n){return(t,i,r)=>{let s=-1,o=-1;for(let a=i;a<=r;a++)if(n(t[a])){s=a;break}for(let a=r;a>=i;a--)if(n(t[a])){o=a;break}return[s,o]}}const ov=n=>n!=null,av=n=>n!=null&&n>0,Eu=sv(ov),NM=sv(av);function OM(n,e,t,i=0,r=!1){let s=r?NM:Eu,o=r?av:ov;[e,t]=s(n,e,t);let a=n[e],l=n[e];if(e>-1)if(i==1)a=n[e],l=n[t];else if(i==-1)a=n[t],l=n[e];else for(let c=e;c<=t;c++){let u=n[c];o(u)&&(u<a?a=u:u>l&&(l=u))}return[a??zt,l??-zt]}function wu(n,e,t,i){let r=vm(n),s=vm(e);n==e&&(r==-1?(n*=t,e/=t):(n/=t,e*=t));let o=t==10?rs:lv,a=r==1?Ai:Oi,l=s==1?Oi:Ai,c=a(o(vn(n))),u=l(o(vn(e))),d=La(t,c),f=La(t,u);return t==10&&(c<0&&(d=Ht(d,-c)),u<0&&(f=Ht(f,-u))),i||t==2?(n=d*r,e=f*s):(n=hv(n,d),e=Tu(e,f)),[n,e]}function Hd(n,e,t,i){let r=wu(n,e,t,i);return n==0&&(r[0]=0),e==0&&(r[1]=0),r}const Gd=.1,gm={mode:3,pad:Gd},Tl={pad:0,soft:null,mode:0},FM={min:Tl,max:Tl};function lu(n,e,t,i){return Au(t)?_m(n,e,t):(Tl.pad=t,Tl.soft=i?0:null,Tl.mode=i?3:0,_m(n,e,FM))}function Rt(n,e){return n??e}function BM(n,e,t){for(e=Rt(e,0),t=Rt(t,n.length-1);e<=t;){if(n[e]!=null)return!0;e++}return!1}function _m(n,e,t){let i=t.min,r=t.max,s=Rt(i.pad,0),o=Rt(r.pad,0),a=Rt(i.hard,-zt),l=Rt(r.hard,zt),c=Rt(i.soft,zt),u=Rt(r.soft,-zt),d=Rt(i.mode,0),f=Rt(r.mode,0),p=e-n,g=rs(p),_=$n(vn(n),vn(e)),h=rs(_),m=vn(h-g);(p<1e-24||m>10)&&(p=0,(n==0||e==0)&&(p=1e-24,d==2&&c!=zt&&(s=0),f==2&&u!=-zt&&(o=0)));let M=p||_||1e3,S=rs(M),b=La(10,Ai(S)),O=M*(p==0?n==0?.1:1:s),L=Ht(hv(n-O,b/10),24),A=n>=c&&(d==1||d==3&&L<=c||d==2&&L>=c)?c:zt,E=$n(a,L<A&&n>=A?A:er(A,L)),C=M*(p==0?e==0?.1:1:o),v=Ht(Tu(e+C,b/10),24),x=e<=u&&(f==1||f==3&&v>=u||f==2&&v<=u)?u:-zt,P=er(l,v>x&&e<=x?x:$n(x,v));return E==P&&E==0&&(P=100),[E,P]}const kM=new Intl.NumberFormat(qa?IM.language:"en-US"),Vd=n=>kM.format(n),Ri=Math,jc=Ri.PI,vn=Ri.abs,Ai=Ri.floor,_n=Ri.round,Oi=Ri.ceil,er=Ri.min,$n=Ri.max,La=Ri.pow,vm=Ri.sign,rs=Ri.log10,lv=Ri.log2,zM=(n,e=1)=>Ri.sinh(n)*e,uf=(n,e=1)=>Ri.asinh(n/e),zt=1/0;function xm(n){return(rs((n^n>>31)-(n>>31))|0)+1}function wh(n,e,t){return er($n(n,e),t)}function cv(n){return typeof n=="function"}function St(n){return cv(n)?n:()=>n}const HM=()=>{},uv=n=>n,fv=(n,e)=>e,GM=n=>null,ym=n=>!0,Sm=(n,e)=>n==e,VM=/\.\d*?(?=9{6,}|0{6,})/gm,Co=n=>{if(pv(n)||ks.has(n))return n;const e=`${n}`,t=e.match(VM);if(t==null)return n;let i=t[0].length-1;if(e.indexOf("e-")!=-1){let[r,s]=e.split("e");return+`${Co(r)}e${s}`}return Ht(n,i)};function ro(n,e){return Co(Ht(Co(n/e))*e)}function Tu(n,e){return Co(Oi(Co(n/e))*e)}function hv(n,e){return Co(Ai(Co(n/e))*e)}function Ht(n,e=0){if(pv(n))return n;let t=10**e,i=n*t*(1+Number.EPSILON);return _n(i)/t}const ks=new Map;function dv(n){return((""+n).split(".")[1]||"").length}function Il(n,e,t,i){let r=[],s=i.map(dv);for(let o=e;o<t;o++){let a=vn(o),l=Ht(La(n,o),a);for(let c=0;c<i.length;c++){let u=n==10?+`${i[c]}e${o}`:i[c]*l,d=(o>=0?0:a)+(o>=s[c]?0:s[c]),f=n==10?u:Ht(u,d);r.push(f),ks.set(f,d)}}return r}const Al={},Wd=[],Da=[null,null],Ts=Array.isArray,pv=Number.isInteger,WM=n=>n===void 0;function Mm(n){return typeof n=="string"}function Au(n){let e=!1;if(n!=null){let t=n.constructor;e=t==null||t==Object}return e}function XM(n){return n!=null&&typeof n=="object"}const YM=Object.getPrototypeOf(Uint8Array),mv="__proto__";function Ia(n,e=Au){let t;if(Ts(n)){let i=n.find(r=>r!=null);if(Ts(i)||e(i)){t=Array(n.length);for(let r=0;r<n.length;r++)t[r]=Ia(n[r],e)}else t=n.slice()}else if(n instanceof YM)t=n.slice();else if(e(n)){t={};for(let i in n)i!=mv&&(t[i]=Ia(n[i],e))}else t=n;return t}function hn(n){let e=arguments;for(let t=1;t<e.length;t++){let i=e[t];for(let r in i)r!=mv&&(Au(n[r])?hn(n[r],Ia(i[r])):n[r]=Ia(i[r]))}return n}const qM=0,jM=1,KM=2;function ZM(n,e,t){for(let i=0,r,s=-1;i<e.length;i++){let o=e[i];if(o>s){for(r=o-1;r>=0&&n[r]==null;)n[r--]=null;for(r=o+1;r<t&&n[r]==null;)n[s=r++]=null}}}function JM(n,e){if(eb(n)){let o=n[0].slice();for(let a=1;a<n.length;a++)o.push(...n[a].slice(1));return tb(o[0])||(o=QM(o)),o}let t=new Set;for(let o=0;o<n.length;o++){let l=n[o][0],c=l.length;for(let u=0;u<c;u++)t.add(l[u])}let i=[Array.from(t).sort((o,a)=>o-a)],r=i[0].length,s=new Map;for(let o=0;o<r;o++)s.set(i[0][o],o);for(let o=0;o<n.length;o++){let a=n[o],l=a[0];for(let c=1;c<a.length;c++){let u=a[c],d=Array(r).fill(void 0),f=e?e[o][c]:jM,p=[];for(let g=0;g<u.length;g++){let _=u[g],h=s.get(l[g]);_===null?f!=qM&&(d[h]=_,f==KM&&p.push(h)):d[h]=_}ZM(d,p,r),i.push(d)}}return i}const $M=typeof queueMicrotask>"u"?n=>Promise.resolve().then(n):queueMicrotask;function QM(n){let e=n[0],t=e.length,i=Array(t);for(let s=0;s<i.length;s++)i[s]=s;i.sort((s,o)=>e[s]-e[o]);let r=[];for(let s=0;s<n.length;s++){let o=n[s],a=Array(t);for(let l=0;l<t;l++)a[l]=o[i[l]];r.push(a)}return r}function eb(n){let e=n[0][0],t=e.length;for(let i=1;i<n.length;i++){let r=n[i][0];if(r.length!=t)return!1;if(r!=e){for(let s=0;s<t;s++)if(r[s]!=e[s])return!1}}return!0}function tb(n,e=100){const t=n.length;if(t<=1)return!0;let i=0,r=t-1;for(;i<=r&&n[i]==null;)i++;for(;r>=i&&n[r]==null;)r--;if(r<=i)return!0;const s=$n(1,Ai((r-i+1)/e));for(let o=n[i],a=i+s;a<=r;a+=s){const l=n[a];if(l!=null){if(l<=o)return!1;o=l}}return!0}const gv=["January","February","March","April","May","June","July","August","September","October","November","December"],_v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function vv(n){return n.slice(0,3)}const nb=_v.map(vv),ib=gv.map(vv),rb={MMMM:gv,MMM:ib,WWWW:_v,WWW:nb};function ul(n){return(n<10?"0":"")+n}function sb(n){return(n<10?"00":n<100?"0":"")+n}const ob={YYYY:n=>n.getFullYear(),YY:n=>(n.getFullYear()+"").slice(2),MMMM:(n,e)=>e.MMMM[n.getMonth()],MMM:(n,e)=>e.MMM[n.getMonth()],MM:n=>ul(n.getMonth()+1),M:n=>n.getMonth()+1,DD:n=>ul(n.getDate()),D:n=>n.getDate(),WWWW:(n,e)=>e.WWWW[n.getDay()],WWW:(n,e)=>e.WWW[n.getDay()],HH:n=>ul(n.getHours()),H:n=>n.getHours(),h:n=>{let e=n.getHours();return e==0?12:e>12?e-12:e},AA:n=>n.getHours()>=12?"PM":"AM",aa:n=>n.getHours()>=12?"pm":"am",a:n=>n.getHours()>=12?"p":"a",mm:n=>ul(n.getMinutes()),m:n=>n.getMinutes(),ss:n=>ul(n.getSeconds()),s:n=>n.getSeconds(),fff:n=>sb(n.getMilliseconds())};function Xd(n,e){e=e||rb;let t=[],i=/\{([a-z]+)\}|[^{]+/gi,r;for(;r=i.exec(n);)t.push(r[0][0]=="{"?ob[r[1]]:r[0]);return s=>{let o="";for(let a=0;a<t.length;a++)o+=typeof t[a]=="string"?t[a]:t[a](s,e);return o}}const ab=new Intl.DateTimeFormat().resolvedOptions().timeZone;function lb(n,e){let t;return e=="UTC"||e=="Etc/UTC"?t=new Date(+n+n.getTimezoneOffset()*6e4):e==ab?t=n:(t=new Date(n.toLocaleString("en-US",{timeZone:e})),t.setMilliseconds(n.getMilliseconds())),t}const xv=n=>n%1==0,cu=[1,2,2.5,5],cb=Il(10,-32,0,cu),yv=Il(10,0,32,cu),ub=yv.filter(xv),so=cb.concat(yv),Yd=`
`,Sv="{YYYY}",bm=Yd+Sv,Mv="{M}/{D}",Ml=Yd+Mv,dc=Ml+"/{YY}",bv="{aa}",fb="{h}:{mm}",ha=fb+bv,Em=Yd+ha,wm=":{ss}",It=null;function Ev(n){let e=n*1e3,t=e*60,i=t*60,r=i*24,s=r*30,o=r*365,l=(n==1?Il(10,0,3,cu).filter(xv):Il(10,-3,0,cu)).concat([e,e*5,e*10,e*15,e*30,t,t*5,t*10,t*15,t*30,i,i*2,i*3,i*4,i*6,i*8,i*12,r,r*2,r*3,r*4,r*5,r*6,r*7,r*8,r*9,r*10,r*15,s,s*2,s*3,s*4,s*6,o,o*2,o*5,o*10,o*25,o*50,o*100]);const c=[[o,Sv,It,It,It,It,It,It,1],[r*28,"{MMM}",bm,It,It,It,It,It,1],[r,Mv,bm,It,It,It,It,It,1],[i,"{h}"+bv,dc,It,Ml,It,It,It,1],[t,ha,dc,It,Ml,It,It,It,1],[e,wm,dc+" "+ha,It,Ml+" "+ha,It,Em,It,1],[n,wm+".{fff}",dc+" "+ha,It,Ml+" "+ha,It,Em,It,1]];function u(d){return(f,p,g,_,h,m)=>{let M=[],S=h>=o,b=h>=s&&h<o,O=d(g),L=Ht(O*n,3),A=ff(O.getFullYear(),S?0:O.getMonth(),b||S?1:O.getDate()),E=Ht(A*n,3);if(b||S){let C=b?h/s:0,v=S?h/o:0,x=L==E?L:Ht(ff(A.getFullYear()+v,A.getMonth()+C,1)*n,3),P=new Date(_n(x/n)),U=P.getFullYear(),k=P.getMonth();for(let H=0;x<=_;H++){let G=ff(U+v*H,k+C*H,1),z=G-d(Ht(G*n,3));x=Ht((+G+z)*n,3),x<=_&&M.push(x)}}else{let C=h>=r?r:h,v=Ai(g)-Ai(L),x=E+v+Tu(L-E,C);M.push(x);let P=d(x),U=P.getHours()+P.getMinutes()/t+P.getSeconds()/i,k=h/i,H=f.axes[p]._space,G=m/H;for(;x=Ht(x+h,n==1?0:3),!(x>_);)if(k>1){let z=Ai(Ht(U+k,6))%24,ae=d(x).getHours()-z;ae>1&&(ae=-1),x-=ae*i,U=(U+k)%24;let re=M[M.length-1];Ht((x-re)/h,3)*G>=.7&&M.push(x)}else M.push(x)}return M}}return[l,c,u]}const[hb,db,pb]=Ev(1),[mb,gb,_b]=Ev(.001);Il(2,-53,53,[1]);function Tm(n,e){return n.map(t=>t.map((i,r)=>r==0||r==8||i==null?i:e(r==1||t[8]==0?i:t[1]+i)))}function Am(n,e){return(t,i,r,s,o)=>{let a=e.find(g=>o>=g[0])||e[e.length-1],l,c,u,d,f,p;return i.map(g=>{let _=n(g),h=_.getFullYear(),m=_.getMonth(),M=_.getDate(),S=_.getHours(),b=_.getMinutes(),O=_.getSeconds(),L=h!=l&&a[2]||m!=c&&a[3]||M!=u&&a[4]||S!=d&&a[5]||b!=f&&a[6]||O!=p&&a[7]||a[1];return l=h,c=m,u=M,d=S,f=b,p=O,L(_)})}}function vb(n,e){let t=Xd(e);return(i,r,s,o,a)=>r.map(l=>t(n(l)))}function ff(n,e,t){return new Date(n,e,t)}function Rm(n,e){return e(n)}const xb="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function Cm(n,e){return(t,i,r,s)=>s==null?kd:e(n(i))}function yb(n,e){let t=n.series[e];return t.width?t.stroke(n,e):t.points.width?t.points.stroke(n,e):null}function Sb(n,e){return n.series[e].fill(n,e)}const Mb={show:!0,live:!0,isolate:!1,mount:HM,markers:{show:!0,width:2,stroke:yb,fill:Sb,dash:"solid"},idx:null,idxs:null,values:[]};function bb(n,e){let t=n.cursor.points,i=Di(),r=t.size(n,e);Jt(i,yl,r),Jt(i,Sl,r);let s=r/-2;Jt(i,"marginLeft",s),Jt(i,"marginTop",s);let o=t.width(n,e,r);return o&&Jt(i,"borderWidth",o),i}function Eb(n,e){let t=n.series[e].points;return t._fill||t._stroke}function wb(n,e){let t=n.series[e].points;return t._stroke||t._fill}function Tb(n,e){return n.series[e].points.size}const hf=[0,0];function Ab(n,e,t){return hf[0]=e,hf[1]=t,hf}function pc(n,e,t,i=!0){return r=>{r.button==0&&(!i||r.target==e)&&t(r)}}function df(n,e,t,i=!0){return r=>{(!i||r.target==e)&&t(r)}}const Rb={show:!0,x:!0,y:!0,lock:!1,move:Ab,points:{one:!1,show:bb,size:Tb,width:0,stroke:wb,fill:Eb},bind:{mousedown:pc,mouseup:pc,click:pc,dblclick:pc,mousemove:df,mouseleave:df,mouseenter:df},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(n,e)=>{e.stopPropagation(),e.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(n,e,t,i,r)=>i-r,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},wv={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},qd=hn({},wv,{filter:fv}),Tv=hn({},qd,{size:10}),Av=hn({},wv,{show:!1}),jd='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Rv="bold "+jd,Cv=1.5,Pm={show:!0,scale:"x",stroke:Bd,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Rv,side:2,grid:qd,ticks:Tv,border:Av,font:jd,lineGap:Cv,rotate:0},Cb="Value",Pb="Time",Lm={show:!0,scale:"x",auto:!1,sorted:1,min:zt,max:-zt,idxs:[]};function Lb(n,e,t,i,r){return e.map(s=>s==null?"":Vd(s))}function Db(n,e,t,i,r,s,o){let a=[],l=ks.get(r)||0;t=o?t:Ht(Tu(t,r),l);for(let c=t;c<=i;c=Ht(c+r,l))a.push(Object.is(c,-0)?0:c);return a}function Th(n,e,t,i,r,s,o){const a=[],l=n.scales[n.axes[e].scale].log,c=l==10?rs:lv,u=Ai(c(t));r=La(l,u),l==10&&(r=so[Qi(r,so)]);let d=t,f=r*l;l==10&&(f=so[Qi(f,so)]);do a.push(d),d=d+r,l==10&&!ks.has(d)&&(d=Ht(d,ks.get(r))),d>=f&&(r=d,f=r*l,l==10&&(f=so[Qi(f,so)]));while(d<=i);return a}function Ib(n,e,t,i,r,s,o){let l=n.scales[n.axes[e].scale].asinh,c=i>l?Th(n,e,$n(l,t),i,r):[l],u=i>=0&&t<=0?[0]:[];return(t<-l?Th(n,e,$n(l,-i),-t,r):[l]).reverse().map(f=>-f).concat(u,c)}const Pv=/./,Ub=/[12357]/,Nb=/[125]/,Dm=/1/,Ah=(n,e,t,i)=>n.map((r,s)=>e==4&&r==0||s%i==0&&t.test(r.toExponential()[r<0?1:0])?r:null);function Ob(n,e,t,i,r){let s=n.axes[t],o=s.scale,a=n.scales[o],l=n.valToPos,c=s._space,u=l(10,o),d=l(9,o)-u>=c?Pv:l(7,o)-u>=c?Ub:l(5,o)-u>=c?Nb:Dm;if(d==Dm){let f=vn(l(1,o)-u);if(f<c)return Ah(e.slice().reverse(),a.distr,d,Oi(c/f)).reverse()}return Ah(e,a.distr,d,1)}function Fb(n,e,t,i,r){let s=n.axes[t],o=s.scale,a=s._space,l=n.valToPos,c=vn(l(1,o)-l(2,o));return c<a?Ah(e.slice().reverse(),3,Pv,Oi(a/c)).reverse():e}function Bb(n,e,t,i){return i==null?kd:e==null?"":Vd(e)}const Im={show:!0,scale:"y",stroke:Bd,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Rv,side:3,grid:qd,ticks:Tv,border:Av,font:jd,lineGap:Cv,rotate:0};function kb(n,e){let t=3+(n||1)*2;return Ht(t*e,3)}function zb(n,e){let{scale:t,idxs:i}=n.series[0],r=n._data[0],s=n.valToPos(r[i[0]],t,!0),o=n.valToPos(r[i[1]],t,!0),a=vn(o-s),l=n.series[e],c=a/(l.points.space*Lt);return i[1]-i[0]<=c}const Um={scale:null,auto:!0,sorted:0,min:zt,max:-zt},Lv=(n,e,t,i,r)=>r,Nm={show:!0,auto:!0,sorted:0,gaps:Lv,alpha:1,facets:[hn({},Um,{scale:"x"}),hn({},Um,{scale:"y"})]},Om={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Lv,alpha:1,points:{show:zb,filter:null},values:null,min:zt,max:-zt,idxs:[],path:null,clip:null};function Hb(n,e,t,i,r){return t/10}const Dv={time:hM,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},Gb=hn({},Dv,{time:!1,ori:1}),Fm={};function Iv(n,e){let t=Fm[n];return t||(t={key:n,plots:[],sub(i){t.plots.push(i)},unsub(i){t.plots=t.plots.filter(r=>r!=i)},pub(i,r,s,o,a,l,c){for(let u=0;u<t.plots.length;u++)t.plots[u]!=r&&t.plots[u].pub(i,r,s,o,a,l,c)}},n!=null&&(Fm[n]=t)),t}const Ua=1,Rh=2;function Oo(n,e,t){const i=n.mode,r=n.series[e],s=i==2?n._data[e]:n._data,o=n.scales,a=n.bbox;let l=s[0],c=i==2?s[1]:s[e],u=i==2?o[r.facets[0].scale]:o[n.series[0].scale],d=i==2?o[r.facets[1].scale]:o[r.scale],f=a.left,p=a.top,g=a.width,_=a.height,h=n.valToPosH,m=n.valToPosV;return u.ori==0?t(r,l,c,u,d,h,m,f,p,g,_,Cu,ja,Lu,Nv,Fv):t(r,l,c,u,d,m,h,p,f,_,g,Pu,Ka,Jd,Ov,Bv)}function Kd(n,e){let t=0,i=0,r=Rt(n.bands,Wd);for(let s=0;s<r.length;s++){let o=r[s];o.series[0]==e?t=o.dir:o.series[1]==e&&(o.dir==1?i|=1:i|=2)}return[t,i==1?-1:i==2?1:i==3?2:0]}function Vb(n,e,t,i,r){let s=n.mode,o=n.series[e],a=s==2?o.facets[1].scale:o.scale,l=n.scales[a];return r==-1?l.min:r==1?l.max:l.distr==3?l.dir==1?l.min:l.max:0}function ss(n,e,t,i,r,s){return Oo(n,e,(o,a,l,c,u,d,f,p,g,_,h)=>{let m=o.pxRound;const M=c.dir*(c.ori==0?1:-1),S=c.ori==0?ja:Ka;let b,O;M==1?(b=t,O=i):(b=i,O=t);let L=m(d(a[b],c,_,p)),A=m(f(l[b],u,h,g)),E=m(d(a[O],c,_,p)),C=m(f(s==1?u.max:u.min,u,h,g)),v=new Path2D(r);return S(v,E,C),S(v,L,C),S(v,L,A),v})}function Ru(n,e,t,i,r,s){let o=null;if(n.length>0){o=new Path2D;const a=e==0?Lu:Jd;let l=t;for(let d=0;d<n.length;d++){let f=n[d];if(f[1]>f[0]){let p=f[0]-l;p>0&&a(o,l,i,p,i+s),l=f[1]}}let c=t+r-l,u=10;c>0&&a(o,l,i-u/2,c,i+s+u)}return o}function Wb(n,e,t){let i=n[n.length-1];i&&i[0]==e?i[1]=t:n.push([e,t])}function Zd(n,e,t,i,r,s,o){let a=[],l=n.length;for(let c=r==1?t:i;c>=t&&c<=i;c+=r)if(e[c]===null){let d=c,f=c;if(r==1)for(;++c<=i&&e[c]===null;)f=c;else for(;--c>=t&&e[c]===null;)f=c;let p=s(n[d]),g=f==d?p:s(n[f]),_=d-r;p=o<=0&&_>=0&&_<l?s(n[_]):p;let m=f+r;g=o>=0&&m>=0&&m<l?s(n[m]):g,g>=p&&a.push([p,g])}return a}function Bm(n){return n==0?uv:n==1?_n:e=>ro(e,n)}function Uv(n){let e=n==0?Cu:Pu,t=n==0?(r,s,o,a,l,c)=>{r.arcTo(s,o,a,l,c)}:(r,s,o,a,l,c)=>{r.arcTo(o,s,l,a,c)},i=n==0?(r,s,o,a,l)=>{r.rect(s,o,a,l)}:(r,s,o,a,l)=>{r.rect(o,s,l,a)};return(r,s,o,a,l,c=0,u=0)=>{c==0&&u==0?i(r,s,o,a,l):(c=er(c,a/2,l/2),u=er(u,a/2,l/2),e(r,s+c,o),t(r,s+a,o,s+a,o+l,c),t(r,s+a,o+l,s,o+l,u),t(r,s,o+l,s,o,u),t(r,s,o,s+a,o,c),r.closePath())}}const Cu=(n,e,t)=>{n.moveTo(e,t)},Pu=(n,e,t)=>{n.moveTo(t,e)},ja=(n,e,t)=>{n.lineTo(e,t)},Ka=(n,e,t)=>{n.lineTo(t,e)},Lu=Uv(0),Jd=Uv(1),Nv=(n,e,t,i,r,s)=>{n.arc(e,t,i,r,s)},Ov=(n,e,t,i,r,s)=>{n.arc(t,e,i,r,s)},Fv=(n,e,t,i,r,s,o)=>{n.bezierCurveTo(e,t,i,r,s,o)},Bv=(n,e,t,i,r,s,o)=>{n.bezierCurveTo(t,e,r,i,o,s)};function kv(n){return(e,t,i,r,s)=>Oo(e,t,(o,a,l,c,u,d,f,p,g,_,h)=>{let{pxRound:m,points:M}=o,S,b;c.ori==0?(S=Cu,b=Nv):(S=Pu,b=Ov);const O=Ht(M.width*Lt,3);let L=(M.size-M.width)/2*Lt,A=Ht(L*2,3),E=new Path2D,C=new Path2D,{left:v,top:x,width:P,height:U}=e.bbox;Lu(C,v-A,x-A,P+A*2,U+A*2);const k=H=>{if(l[H]!=null){let G=m(d(a[H],c,_,p)),z=m(f(l[H],u,h,g));S(E,G+L,z),b(E,G,z,L,0,jc*2)}};if(s)s.forEach(k);else for(let H=i;H<=r;H++)k(H);return{stroke:O>0?E:null,fill:E,clip:C,flags:Ua|Rh}})}function zv(n){return(e,t,i,r,s,o)=>{i!=r&&(s!=i&&o!=i&&n(e,t,i),s!=r&&o!=r&&n(e,t,r),n(e,t,o))}}const Xb=zv(ja),Yb=zv(Ka);function Hv(n){const e=Rt(n==null?void 0:n.alignGaps,0);return(t,i,r,s)=>Oo(t,i,(o,a,l,c,u,d,f,p,g,_,h)=>{[r,s]=Eu(l,r,s);let m=o.pxRound,M=U=>m(d(U,c,_,p)),S=U=>m(f(U,u,h,g)),b,O;c.ori==0?(b=ja,O=Xb):(b=Ka,O=Yb);const L=c.dir*(c.ori==0?1:-1),A={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Ua},E=A.stroke;let C=!1;if(s-r>=_*4){let U=se=>t.posToVal(se,c.key,!0),k=null,H=null,G,z,K,Q=M(a[L==1?r:s]),ae=M(a[r]),re=M(a[s]),pe=U(L==1?ae+1:re-1);for(let se=L==1?r:s;se>=r&&se<=s;se+=L){let ne=a[se],me=(L==1?ne<pe:ne>pe)?Q:M(ne),he=l[se];me==Q?he!=null?(z=he,k==null?(b(E,me,S(z)),G=k=H=z):z<k?k=z:z>H&&(H=z)):he===null&&(C=!0):(k!=null&&O(E,Q,S(k),S(H),S(G),S(z)),he!=null?(z=he,b(E,me,S(z)),k=H=G=z):(k=H=null,he===null&&(C=!0)),Q=me,pe=U(Q+L))}k!=null&&k!=H&&K!=Q&&O(E,Q,S(k),S(H),S(G),S(z))}else for(let U=L==1?r:s;U>=r&&U<=s;U+=L){let k=l[U];k===null?C=!0:k!=null&&b(E,M(a[U]),S(k))}let[x,P]=Kd(t,i);if(o.fill!=null||x!=0){let U=A.fill=new Path2D(E),k=o.fillTo(t,i,o.min,o.max,x),H=S(k),G=M(a[r]),z=M(a[s]);L==-1&&([z,G]=[G,z]),b(U,z,H),b(U,G,H)}if(!o.spanGaps){let U=[];C&&U.push(...Zd(a,l,r,s,L,M,e)),A.gaps=U=o.gaps(t,i,r,s,U),A.clip=Ru(U,c.ori,p,g,_,h)}return P!=0&&(A.band=P==2?[ss(t,i,r,s,E,-1),ss(t,i,r,s,E,1)]:ss(t,i,r,s,E,P)),A})}function qb(n){const e=Rt(n.align,1),t=Rt(n.ascDesc,!1),i=Rt(n.alignGaps,0),r=Rt(n.extend,!1);return(s,o,a,l)=>Oo(s,o,(c,u,d,f,p,g,_,h,m,M,S)=>{[a,l]=Eu(d,a,l);let b=c.pxRound,{left:O,width:L}=s.bbox,A=ae=>b(g(ae,f,M,h)),E=ae=>b(_(ae,p,S,m)),C=f.ori==0?ja:Ka;const v={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Ua},x=v.stroke,P=f.dir*(f.ori==0?1:-1);let U=E(d[P==1?a:l]),k=A(u[P==1?a:l]),H=k,G=k;r&&e==-1&&(G=O,C(x,G,U)),C(x,k,U);for(let ae=P==1?a:l;ae>=a&&ae<=l;ae+=P){let re=d[ae];if(re==null)continue;let pe=A(u[ae]),se=E(re);e==1?C(x,pe,U):C(x,H,se),C(x,pe,se),U=se,H=pe}let z=H;r&&e==1&&(z=O+L,C(x,z,U));let[K,Q]=Kd(s,o);if(c.fill!=null||K!=0){let ae=v.fill=new Path2D(x),re=c.fillTo(s,o,c.min,c.max,K),pe=E(re);C(ae,z,pe),C(ae,G,pe)}if(!c.spanGaps){let ae=[];ae.push(...Zd(u,d,a,l,P,A,i));let re=c.width*Lt/2,pe=t||e==1?re:-re,se=t||e==-1?-re:re;ae.forEach(ne=>{ne[0]+=pe,ne[1]+=se}),v.gaps=ae=c.gaps(s,o,a,l,ae),v.clip=Ru(ae,f.ori,h,m,M,S)}return Q!=0&&(v.band=Q==2?[ss(s,o,a,l,x,-1),ss(s,o,a,l,x,1)]:ss(s,o,a,l,x,Q)),v})}function km(n,e,t,i,r,s,o=zt){if(n.length>1){let a=null;for(let l=0,c=1/0;l<n.length;l++)if(e[l]!==void 0){if(a!=null){let u=vn(n[l]-n[a]);u<c&&(c=u,o=vn(t(n[l],i,r,s)-t(n[a],i,r,s)))}a=l}}return o}function jb(n){n=n||Al;const e=Rt(n.size,[.6,zt,1]),t=n.align||0,i=n.gap||0;let r=n.radius;r=r==null?[0,0]:typeof r=="number"?[r,0]:r;const s=St(r),o=1-e[0],a=Rt(e[1],zt),l=Rt(e[2],1),c=Rt(n.disp,Al),u=Rt(n.each,p=>{}),{fill:d,stroke:f}=c;return(p,g,_,h)=>Oo(p,g,(m,M,S,b,O,L,A,E,C,v,x)=>{let P=m.pxRound,U=t,k=i*Lt,H=a*Lt,G=l*Lt,z,K;b.ori==0?[z,K]=s(p,g):[K,z]=s(p,g);const Q=b.dir*(b.ori==0?1:-1);let ae=b.ori==0?Lu:Jd,re=b.ori==0?u:(W,ge,de,be,ft,_e,Ae)=>{u(W,ge,de,ft,be,Ae,_e)},pe=Rt(p.bands,Wd).find(W=>W.series[0]==g),se=pe!=null?pe.dir:0,ne=m.fillTo(p,g,m.min,m.max,se),le=P(A(ne,O,x,C)),me,he,ye,xe=v,Te=P(m.width*Lt),Re=!1,He=null,F=null,st=null,Fe=null;d!=null&&(Te==0||f!=null)&&(Re=!0,He=d.values(p,g,_,h),F=new Map,new Set(He).forEach(W=>{W!=null&&F.set(W,new Path2D)}),Te>0&&(st=f.values(p,g,_,h),Fe=new Map,new Set(st).forEach(W=>{W!=null&&Fe.set(W,new Path2D)})));let{x0:Ce,size:Ge}=c;if(Ce!=null&&Ge!=null){U=1,M=Ce.values(p,g,_,h),Ce.unit==2&&(M=M.map(de=>p.posToVal(E+de*v,b.key,!0)));let W=Ge.values(p,g,_,h);Ge.unit==2?he=W[0]*v:he=L(W[0],b,v,E)-L(0,b,v,E),xe=km(M,S,L,b,v,E,xe),ye=xe-he+k}else xe=km(M,S,L,b,v,E,xe),ye=xe*o+k,he=xe-ye;ye<1&&(ye=0),Te>=he/2&&(Te=0),ye<5&&(P=uv);let je=ye>0,Pe=xe-ye-(je?Te:0);he=P(wh(Pe,G,H)),me=(U==0?he/2:U==Q?0:he)-U*Q*((U==0?k/2:0)+(je?Te/2:0));const D={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},T=Re?null:new Path2D;let Z=null;if(pe!=null)Z=p.data[pe.series[1]];else{let{y0:W,y1:ge}=c;W!=null&&ge!=null&&(S=ge.values(p,g,_,h),Z=W.values(p,g,_,h))}let ce=z*he,te=K*he;for(let W=Q==1?_:h;W>=_&&W<=h;W+=Q){let ge=S[W];if(ge==null)continue;if(Z!=null){let Ee=Z[W]??0;if(ge-Ee==0)continue;le=A(Ee,O,x,C)}let de=b.distr!=2||c!=null?M[W]:W,be=L(de,b,v,E),ft=A(Rt(ge,ne),O,x,C),_e=P(be-me),Ae=P($n(ft,le)),Be=P(er(ft,le)),Xe=Ae-Be;if(ge!=null){let Ee=ge<0?te:ce,ot=ge<0?ce:te;Re?(Te>0&&st[W]!=null&&ae(Fe.get(st[W]),_e,Be+Ai(Te/2),he,$n(0,Xe-Te),Ee,ot),He[W]!=null&&ae(F.get(He[W]),_e,Be+Ai(Te/2),he,$n(0,Xe-Te),Ee,ot)):ae(T,_e,Be+Ai(Te/2),he,$n(0,Xe-Te),Ee,ot),re(p,g,W,_e-Te/2,Be,he+Te,Xe)}}return Te>0?D.stroke=Re?Fe:T:Re||(D._fill=m.width==0?m._fill:m._stroke??m._fill,D.width=0),D.fill=Re?F:T,D})}function Kb(n,e){const t=Rt(e==null?void 0:e.alignGaps,0);return(i,r,s,o)=>Oo(i,r,(a,l,c,u,d,f,p,g,_,h,m)=>{[s,o]=Eu(c,s,o);let M=a.pxRound,S=z=>M(f(z,u,h,g)),b=z=>M(p(z,d,m,_)),O,L,A;u.ori==0?(O=Cu,A=ja,L=Fv):(O=Pu,A=Ka,L=Bv);const E=u.dir*(u.ori==0?1:-1);let C=S(l[E==1?s:o]),v=C,x=[],P=[];for(let z=E==1?s:o;z>=s&&z<=o;z+=E)if(c[z]!=null){let Q=l[z],ae=S(Q);x.push(v=ae),P.push(b(c[z]))}const U={stroke:n(x,P,O,A,L,M),fill:null,clip:null,band:null,gaps:null,flags:Ua},k=U.stroke;let[H,G]=Kd(i,r);if(a.fill!=null||H!=0){let z=U.fill=new Path2D(k),K=a.fillTo(i,r,a.min,a.max,H),Q=b(K);A(z,v,Q),A(z,C,Q)}if(!a.spanGaps){let z=[];z.push(...Zd(l,c,s,o,E,S,t)),U.gaps=z=a.gaps(i,r,s,o,z),U.clip=Ru(z,u.ori,g,_,h,m)}return G!=0&&(U.band=G==2?[ss(i,r,s,o,k,-1),ss(i,r,s,o,k,1)]:ss(i,r,s,o,k,G)),U})}function Zb(n){return Kb(Jb,n)}function Jb(n,e,t,i,r,s){const o=n.length;if(o<2)return null;const a=new Path2D;if(t(a,n[0],e[0]),o==2)i(a,n[1],e[1]);else{let l=Array(o),c=Array(o-1),u=Array(o-1),d=Array(o-1);for(let f=0;f<o-1;f++)u[f]=e[f+1]-e[f],d[f]=n[f+1]-n[f],c[f]=u[f]/d[f];l[0]=c[0];for(let f=1;f<o-1;f++)c[f]===0||c[f-1]===0||c[f-1]>0!=c[f]>0?l[f]=0:(l[f]=3*(d[f-1]+d[f])/((2*d[f]+d[f-1])/c[f-1]+(d[f]+2*d[f-1])/c[f]),isFinite(l[f])||(l[f]=0));l[o-1]=c[o-2];for(let f=0;f<o-1;f++)r(a,n[f]+d[f]/3,e[f]+l[f]*d[f]/3,n[f+1]-d[f]/3,e[f+1]-l[f+1]*d[f]/3,n[f+1],e[f+1])}return a}const Ch=new Set;function zm(){for(let n of Ch)n.syncRect(!0)}qa&&(Mo(LM,xa,zm),Mo(DM,xa,zm,!0),Mo(au,xa,()=>{Bn.pxRatio=Lt}));const $b=Hv(),Qb=kv();function Hm(n,e,t,i){return(i?[n[0],n[1]].concat(n.slice(2)):[n[0]].concat(n.slice(1))).map((s,o)=>Ph(s,o,e,t))}function eE(n,e){return n.map((t,i)=>i==0?{}:hn({},e,t))}function Ph(n,e,t,i){return hn({},e==0?t:i,n)}function Gv(n,e,t){return e==null?Da:[e,t]}const tE=Gv;function nE(n,e,t){return e==null?Da:lu(e,t,Gd,!0)}function Vv(n,e,t,i){return e==null?Da:wu(e,t,n.scales[i].log,!1)}const iE=Vv;function Wv(n,e,t,i){return e==null?Da:Hd(e,t,n.scales[i].log,!1)}const rE=Wv;function sE(n,e,t,i,r){let s=$n(xm(n),xm(e)),o=e-n,a=Qi(r/i*o,t);do{let l=t[a],c=i*l/o;if(c>=r&&s+(l<5?ks.get(l):0)<=17)return[l,c]}while(++a<t.length);return[0,0]}function Gm(n){let e,t;return n=n.replace(/(\d+)px/,(i,r)=>(e=_n((t=+r)*Lt))+"px"),[n,e,t]}function oE(n){n.show&&[n.font,n.labelFont].forEach(e=>{let t=Ht(e[2]*Lt,1);e[0]=e[0].replace(/[0-9.]+px/,t+"px"),e[1]=t})}function Bn(n,e,t){const i={mode:Rt(n.mode,1)},r=i.mode;function s(y,w,I,N){let V=w.valToPct(y);return N+I*(w.dir==-1?1-V:V)}function o(y,w,I,N){let V=w.valToPct(y);return N+I*(w.dir==-1?V:1-V)}function a(y,w,I,N){return w.ori==0?s(y,w,I,N):o(y,w,I,N)}i.valToPosH=s,i.valToPosV=o;let l=!1;i.status=0;const c=i.root=Di(dM);if(n.id!=null&&(c.id=n.id),Si(c,n.class),n.title){let y=Di(gM,c);y.textContent=n.title}const u=Ki("canvas"),d=i.ctx=u.getContext("2d"),f=Di(_M,c);Mo("click",f,y=>{y.target===g&&(qt!=Wo||Qt!=Xo)&&Un.click(i,y)},!0);const p=i.under=Di(vM,f);f.appendChild(u);const g=i.over=Di(xM,f);n=Ia(n);const _=+Rt(n.pxAlign,1),h=Bm(_);(n.plugins||[]).forEach(y=>{y.opts&&(n=y.opts(i,n)||n)});const m=n.ms||.001,M=i.series=r==1?Hm(n.series||[],Lm,Om,!1):eE(n.series||[null],Nm),S=i.axes=Hm(n.axes||[],Pm,Im,!0),b=i.scales={},O=i.bands=n.bands||[];O.forEach(y=>{y.fill=St(y.fill||null),y.dir=Rt(y.dir,-1)});const L=r==2?M[1].facets[0].scale:M[0].scale,A={axes:U0,series:Qa},E=(n.drawOrder||["axes","series"]).map(y=>A[y]);function C(y){const w=y.distr==3?I=>rs(I>0?I:y.clamp(i,I,y.min,y.max,y.key)):y.distr==4?I=>uf(I,y.asinh):y.distr==100?I=>y.fwd(I):I=>I;return I=>{let N=w(I),{_min:V,_max:ee}=y,fe=ee-V;return(N-V)/fe}}function v(y){let w=b[y];if(w==null){let I=(n.scales||Al)[y]||Al;if(I.from!=null){v(I.from);let N=hn({},b[I.from],I,{key:y});N.valToPct=C(N),b[y]=N}else{w=b[y]=hn({},y==L?Dv:Gb,I),w.key=y;let N=w.time,V=w.range,ee=Ts(V);if((y!=L||r==2&&!N)&&(ee&&(V[0]==null||V[1]==null)&&(V={min:V[0]==null?gm:{mode:1,hard:V[0],soft:V[0]},max:V[1]==null?gm:{mode:1,hard:V[1],soft:V[1]}},ee=!1),!ee&&Au(V))){let fe=V;V=(ve,Me,Oe)=>Me==null?Da:lu(Me,Oe,fe)}w.range=St(V||(N?tE:y==L?w.distr==3?iE:w.distr==4?rE:Gv:w.distr==3?Vv:w.distr==4?Wv:nE)),w.auto=St(ee?!1:w.auto),w.clamp=St(w.clamp||Hb),w._min=w._max=null,w.valToPct=C(w)}}}v("x"),v("y"),r==1&&M.forEach(y=>{v(y.scale)}),S.forEach(y=>{v(y.scale)});for(let y in n.scales)v(y);const x=b[L],P=x.distr;let U,k;x.ori==0?(Si(c,pM),U=s,k=o):(Si(c,mM),U=o,k=s);const H={};for(let y in b){let w=b[y];(w.min!=null||w.max!=null)&&(H[y]={min:w.min,max:w.max},w.min=w.max=null)}const G=n.tzDate||(y=>new Date(_n(y/m))),z=n.fmtDate||Xd,K=m==1?pb(G):_b(G),Q=Am(G,Tm(m==1?db:gb,z)),ae=Cm(G,Rm(xb,z)),re=[],pe=i.legend=hn({},Mb,n.legend),se=i.cursor=hn({},Rb,{drag:{y:r==2}},n.cursor),ne=pe.show,le=se.show,me=pe.markers;pe.idxs=re,me.width=St(me.width),me.dash=St(me.dash),me.stroke=St(me.stroke),me.fill=St(me.fill);let he,ye,xe,Te=[],Re=[],He,F=!1,st={};if(pe.live){const y=M[1]?M[1].values:null;F=y!=null,He=F?y(i,1,0):{_:0};for(let w in He)st[w]=kd}if(ne)if(he=Ki("table",wM,c),xe=Ki("tbody",null,he),pe.mount(i,he),F){ye=Ki("thead",null,he,xe);let y=Ki("tr",null,ye);Ki("th",null,y);for(var Fe in He)Ki("th",im,y).textContent=Fe}else Si(he,AM),pe.live&&Si(he,TM);const Ce={show:!0},Ge={show:!1};function je(y,w){if(w==0&&(F||!pe.live||r==2))return Da;let I=[],N=Ki("tr",RM,xe,xe.childNodes[w]);Si(N,y.class),y.show||Si(N,ao);let V=Ki("th",null,N);if(me.show){let ve=Di(CM,V);if(w>0){let Me=me.width(i,w);Me&&(ve.style.border=Me+"px "+me.dash(i,w)+" "+me.stroke(i,w)),ve.style.background=me.fill(i,w)}}let ee=Di(im,V);y.label instanceof HTMLElement?ee.appendChild(y.label):ee.textContent=y.label,w>0&&(me.show||(ee.style.color=y.width>0?me.stroke(i,w):me.fill(i,w)),D("click",V,ve=>{if(se._lock)return;Ln(ve);let Me=M.indexOf(y);if((ve.ctrlKey||ve.metaKey)!=pe.isolate){let Oe=M.some((ze,We)=>We>0&&We!=Me&&ze.show);M.forEach((ze,We)=>{We>0&&pr(We,Oe?We==Me?Ce:Ge:Ce,!0,un.setSeries)})}else pr(Me,{show:!y.show},!0,un.setSeries)},!1),ti&&D(am,V,ve=>{se._lock||(Ln(ve),pr(M.indexOf(y),qo,!0,un.setSeries))},!1));for(var fe in He){let ve=Ki("td",PM,N);ve.textContent="--",I.push(ve)}return[N,I]}const Pe=new Map;function D(y,w,I,N=!0){const V=Pe.get(w)||{},ee=se.bind[y](i,w,I,N);ee&&(Mo(y,w,V[y]=ee),Pe.set(w,V))}function T(y,w,I){const N=Pe.get(w)||{};for(let V in N)(y==null||V==y)&&(Eh(V,w,N[V]),delete N[V]);y==null&&Pe.delete(w)}let Z=0,ce=0,te=0,W=0,ge=0,de=0,be=ge,ft=de,_e=te,Ae=W,Be=0,Xe=0,Ee=0,ot=0;i.bbox={};let at=!1,Ct=!1,Y=!1,De=!1,oe=!1,ue=!1;function Ne(y,w,I){(I||y!=i.width||w!=i.height)&&ke(y,w),zo(!1),Y=!0,Ct=!0,Ho()}function ke(y,w){i.width=Z=te=y,i.height=ce=W=w,ge=de=0,wt(),zn();let I=i.bbox;Be=I.left=ro(ge*Lt,.5),Xe=I.top=ro(de*Lt,.5),Ee=I.width=ro(te*Lt,.5),ot=I.height=ro(W*Lt,.5)}const Mt=3;function nn(){let y=!1,w=0;for(;!y;){w++;let I=D0(w),N=I0(w);y=w==Mt||I&&N,y||(ke(i.width,i.height),Ct=!0)}}function kn({width:y,height:w}){Ne(y,w)}i.setSize=kn;function wt(){let y=!1,w=!1,I=!1,N=!1;S.forEach((V,ee)=>{if(V.show&&V._show){let{side:fe,_size:ve}=V,Me=fe%2,Oe=V.label!=null?V.labelSize:0,ze=ve+Oe;ze>0&&(Me?(te-=ze,fe==3?(ge+=ze,N=!0):I=!0):(W-=ze,fe==0?(de+=ze,y=!0):w=!0))}}),Fr[0]=y,Fr[1]=I,Fr[2]=w,Fr[3]=N,te-=q[1]+q[3],ge+=q[3],W-=q[2]+q[0],de+=q[0]}function zn(){let y=ge+te,w=de+W,I=ge,N=de;function V(ee,fe){switch(ee){case 1:return y+=fe,y-fe;case 2:return w+=fe,w-fe;case 3:return I-=fe,I+fe;case 0:return N-=fe,N+fe}}S.forEach((ee,fe)=>{if(ee.show&&ee._show){let ve=ee.side;ee._pos=V(ve,ee._size),ee.label!=null&&(ee._lpos=V(ve,ee.labelSize))}})}if(se.dataIdx==null){let y=se.hover,w=y.skip=new Set(y.skip??[]);w.add(void 0);let I=y.prox=St(y.prox),N=y.bias??(y.bias=0);se.dataIdx=(V,ee,fe,ve)=>{if(ee==0)return fe;let Me=fe,Oe=I(V,ee,fe,ve)??zt,ze=Oe>=0&&Oe<zt,We=x.ori==0?te:W,ut=se.left,Pt=e[0],At=e[ee];if(w.has(At[fe])){Me=null;let xt=null,it=null,Ze;if(N==0||N==-1)for(Ze=fe;xt==null&&Ze-- >0;)w.has(At[Ze])||(xt=Ze);if(N==0||N==1)for(Ze=fe;it==null&&Ze++<At.length;)w.has(At[Ze])||(it=Ze);if(xt!=null||it!=null)if(ze){let Kt=xt==null?-1/0:U(Pt[xt],x,We,0),rn=it==null?1/0:U(Pt[it],x,We,0),An=ut-Kt,Ft=rn-ut;An<=Ft?An<=Oe&&(Me=xt):Ft<=Oe&&(Me=it)}else Me=it==null?xt:xt==null?it:fe-xt<=it-fe?xt:it}else ze&&vn(ut-U(Pt[fe],x,We,0))>Oe&&(Me=null);return Me}}const Ln=y=>{se.event=y};se.idxs=re,se._lock=!1;let mn=se.points;mn.show=St(mn.show),mn.size=St(mn.size),mn.stroke=St(mn.stroke),mn.width=St(mn.width),mn.fill=St(mn.fill);const pi=i.focus=hn({},n.focus||{alpha:.3},se.focus),ti=pi.prox>=0,hr=ti&&mn.one;let Yn=[],Or=[],Gi=[];function $a(y,w){let I=mn.show(i,w);if(I instanceof HTMLElement)return Si(I,EM),Si(I,y.class),vr(I,-10,-10,te,W),g.insertBefore(I,Yn[w]),I}function Ys(y,w){if(r==1||w>0){let I=r==1&&b[y.scale].time,N=y.value;y.value=I?Mm(N)?Cm(G,Rm(N,z)):N||ae:N||Bb,y.label=y.label||(I?Pb:Cb)}if(hr||w>0){y.width=y.width==null?1:y.width,y.paths=y.paths||$b||GM,y.fillTo=St(y.fillTo||Vb),y.pxAlign=+Rt(y.pxAlign,_),y.pxRound=Bm(y.pxAlign),y.stroke=St(y.stroke||null),y.fill=St(y.fill||null),y._stroke=y._fill=y._paths=y._focus=null;let I=kb($n(1,y.width),1),N=y.points=hn({},{size:I,width:$n(1,I*.2),stroke:y.stroke,space:I*2,paths:Qb,_stroke:null,_fill:null},y.points);N.show=St(N.show),N.filter=St(N.filter),N.fill=St(N.fill),N.stroke=St(N.stroke),N.paths=St(N.paths),N.pxAlign=y.pxAlign}if(ne){let I=je(y,w);Te.splice(w,0,I[0]),Re.splice(w,0,I[1]),pe.values.push(null)}if(le){re.splice(w,0,null);let I=null;hr?w==0&&(I=$a(y,w)):w>0&&(I=$a(y,w)),Yn.splice(w,0,I),Or.splice(w,0,0),Gi.splice(w,0,0)}Tn("addSeries",w)}function nc(y,w){w=w??M.length,y=r==1?Ph(y,w,Lm,Om):Ph(y,w,{},Nm),M.splice(w,0,y),Ys(M[w],w)}i.addSeries=nc;function ic(y){if(M.splice(y,1),ne){pe.values.splice(y,1),Re.splice(y,1);let w=Te.splice(y,1)[0];T(null,w.firstChild),w.remove()}le&&(re.splice(y,1),Yn.splice(y,1)[0].remove(),Or.splice(y,1),Gi.splice(y,1)),Tn("delSeries",y)}i.delSeries=ic;const Fr=[!1,!1,!1,!1];function Ou(y,w){if(y._show=y.show,y.show){let I=y.side%2,N=b[y.scale];N==null&&(y.scale=I?M[1].scale:L,N=b[y.scale]);let V=N.time;y.size=St(y.size),y.space=St(y.space),y.rotate=St(y.rotate),Ts(y.incrs)&&y.incrs.forEach(fe=>{!ks.has(fe)&&ks.set(fe,dv(fe))}),y.incrs=St(y.incrs||(N.distr==2?ub:V?m==1?hb:mb:so)),y.splits=St(y.splits||(V&&N.distr==1?K:N.distr==3?Th:N.distr==4?Ib:Db)),y.stroke=St(y.stroke),y.grid.stroke=St(y.grid.stroke),y.ticks.stroke=St(y.ticks.stroke),y.border.stroke=St(y.border.stroke);let ee=y.values;y.values=Ts(ee)&&!Ts(ee[0])?St(ee):V?Ts(ee)?Am(G,Tm(ee,z)):Mm(ee)?vb(G,ee):ee||Q:ee||Lb,y.filter=St(y.filter||(N.distr>=3&&N.log==10?Ob:N.distr==3&&N.log==2?Fb:fv)),y.font=Gm(y.font),y.labelFont=Gm(y.labelFont),y._size=y.size(i,null,w,0),y._space=y._rotate=y._incrs=y._found=y._splits=y._values=null,y._size>0&&(Fr[w]=!0,y._el=Di(yM,f))}}function qs(y,w,I,N){let[V,ee,fe,ve]=I,Me=w%2,Oe=0;return Me==0&&(ve||ee)&&(Oe=w==0&&!V||w==2&&!fe?_n(Pm.size/3):0),Me==1&&(V||fe)&&(Oe=w==1&&!ee||w==3&&!ve?_n(Im.size/2):0),Oe}const R=i.padding=(n.padding||[qs,qs,qs,qs]).map(y=>St(Rt(y,qs))),q=i._padding=R.map((y,w)=>y(i,w,Fr,0));let J,$=null,X=null;const Se=r==1?M[0].idxs:null;let we=null,Ve=!1;function qe(y,w){if(e=y??[],i.data=i._data=e,r==2){J=0;for(let I=1;I<M.length;I++)J+=e[I][0].length}else{e.length==0&&(i.data=i._data=e=[[]]),we=e[0],J=we.length;let I=e;if(P==2){I=e.slice();let N=I[0]=Array(J);for(let V=0;V<J;V++)N[V]=V}i._data=e=I}if(zo(!0),Tn("setData"),P==2&&(Y=!0),w!==!1){let I=x;I.auto(i,Ve)?tt():ds(L,I.min,I.max),De=De||se.left>=0,ue=!0,Ho()}}i.setData=qe;function tt(){Ve=!0;let y,w;r==1&&(J>0?($=Se[0]=0,X=Se[1]=J-1,y=e[0][$],w=e[0][X],P==2?(y=$,w=X):y==w&&(P==3?[y,w]=wu(y,y,x.log,!1):P==4?[y,w]=Hd(y,y,x.log,!1):x.time?w=y+_n(86400/m):[y,w]=lu(y,w,Gd,!0))):($=Se[0]=y=null,X=Se[1]=w=null)),ds(L,y,w)}let nt,Ye,Tt,Ot,Gt,Dn,Et,Ke,ln,ct;function ni(y,w,I,N,V,ee){y??(y=sm),I??(I=Wd),N??(N="butt"),V??(V=sm),ee??(ee="round"),y!=nt&&(d.strokeStyle=nt=y),V!=Ye&&(d.fillStyle=Ye=V),w!=Tt&&(d.lineWidth=Tt=w),ee!=Gt&&(d.lineJoin=Gt=ee),N!=Dn&&(d.lineCap=Dn=N),I!=Ot&&d.setLineDash(Ot=I)}function Br(y,w,I,N){w!=Ye&&(d.fillStyle=Ye=w),y!=Et&&(d.font=Et=y),I!=Ke&&(d.textAlign=Ke=I),N!=ln&&(d.textBaseline=ln=N)}function In(y,w,I,N,V=0){if(N.length>0&&y.auto(i,Ve)&&(w==null||w.min==null)){let ee=Rt($,0),fe=Rt(X,N.length-1),ve=I.min==null?OM(N,ee,fe,V,y.distr==3):[I.min,I.max];y.min=er(y.min,I.min=ve[0]),y.max=$n(y.max,I.max=ve[1])}}const Bo={min:null,max:null};function en(){for(let N in b){let V=b[N];H[N]==null&&(V.min==null||H[L]!=null&&V.auto(i,Ve))&&(H[N]=Bo)}for(let N in b){let V=b[N];H[N]==null&&V.from!=null&&H[V.from]!=null&&(H[N]=Bo)}H[L]!=null&&zo(!0);let y={};for(let N in H){let V=H[N];if(V!=null){let ee=y[N]=Ia(b[N],XM);if(V.min!=null)hn(ee,V);else if(N!=L||r==2)if(J==0&&ee.from==null){let fe=ee.range(i,null,null,N);ee.min=fe[0],ee.max=fe[1]}else ee.min=zt,ee.max=-zt}}if(J>0){M.forEach((N,V)=>{if(r==1){let ee=N.scale,fe=H[ee];if(fe==null)return;let ve=y[ee];if(V==0){let Me=ve.range(i,ve.min,ve.max,ee);ve.min=Me[0],ve.max=Me[1],$=Qi(ve.min,e[0]),X=Qi(ve.max,e[0]),X-$>1&&(e[0][$]<ve.min&&$++,e[0][X]>ve.max&&X--),N.min=we[$],N.max=we[X]}else N.show&&N.auto&&In(ve,fe,N,e[V],N.sorted);N.idxs[0]=$,N.idxs[1]=X}else if(V>0&&N.show&&N.auto){let[ee,fe]=N.facets,ve=ee.scale,Me=fe.scale,[Oe,ze]=e[V],We=y[ve],ut=y[Me];We!=null&&In(We,H[ve],ee,Oe,ee.sorted),ut!=null&&In(ut,H[Me],fe,ze,fe.sorted),N.min=fe.min,N.max=fe.max}});for(let N in y){let V=y[N],ee=H[N];if(V.from==null&&(ee==null||ee.min==null)){let fe=V.range(i,V.min==zt?null:V.min,V.max==-zt?null:V.max,N);V.min=fe[0],V.max=fe[1]}}}for(let N in y){let V=y[N];if(V.from!=null){let ee=y[V.from];if(ee.min==null)V.min=V.max=null;else{let fe=V.range(i,ee.min,ee.max,N);V.min=fe[0],V.max=fe[1]}}}let w={},I=!1;for(let N in y){let V=y[N],ee=b[N];if(ee.min!=V.min||ee.max!=V.max){ee.min=V.min,ee.max=V.max;let fe=ee.distr;ee._min=fe==3?rs(ee.min):fe==4?uf(ee.min,ee.asinh):fe==100?ee.fwd(ee.min):ee.min,ee._max=fe==3?rs(ee.max):fe==4?uf(ee.max,ee.asinh):fe==100?ee.fwd(ee.max):ee.max,w[N]=I=!0}}if(I){M.forEach((N,V)=>{r==2?V>0&&w.y&&(N._paths=null):w[N.scale]&&(N._paths=null)});for(let N in w)Y=!0,Tn("setScale",N);le&&se.left>=0&&(De=ue=!0)}for(let N in H)H[N]=null}function dr(y){let w=wh($-1,0,J-1),I=wh(X+1,0,J-1);for(;y[w]==null&&w>0;)w--;for(;y[I]==null&&I<J-1;)I++;return[w,I]}function Qa(){if(J>0){let y=M.some(w=>w._focus)&&ct!=pi.alpha;y&&(d.globalAlpha=ct=pi.alpha),M.forEach((w,I)=>{if(I>0&&w.show&&(qn(I,!1),qn(I,!0),w._paths==null)){let N=ct;ct!=w.alpha&&(d.globalAlpha=ct=w.alpha);let V=r==2?[0,e[I][0].length-1]:dr(e[I]);w._paths=w.paths(i,I,V[0],V[1]),ct!=N&&(d.globalAlpha=ct=N)}}),M.forEach((w,I)=>{if(I>0&&w.show){let N=ct;ct!=w.alpha&&(d.globalAlpha=ct=w.alpha),w._paths!=null&&ko(I,!1);{let V=w._paths!=null?w._paths.gaps:null,ee=w.points.show(i,I,$,X,V),fe=w.points.filter(i,I,ee,V);(ee||fe)&&(w.points._paths=w.points.paths(i,I,$,X,fe),ko(I,!0))}ct!=N&&(d.globalAlpha=ct=N),Tn("drawSeries",I)}}),y&&(d.globalAlpha=ct=1)}}function qn(y,w){let I=w?M[y].points:M[y];I._stroke=I.stroke(i,y),I._fill=I.fill(i,y)}function ko(y,w){let I=w?M[y].points:M[y],{stroke:N,fill:V,clip:ee,flags:fe,_stroke:ve=I._stroke,_fill:Me=I._fill,_width:Oe=I.width}=I._paths;Oe=Ht(Oe*Lt,3);let ze=null,We=Oe%2/2;w&&Me==null&&(Me=Oe>0?"#fff":ve);let ut=I.pxAlign==1&&We>0;if(ut&&d.translate(We,We),!w){let Pt=Be-Oe/2,At=Xe-Oe/2,xt=Ee+Oe,it=ot+Oe;ze=new Path2D,ze.rect(Pt,At,xt,it)}w?Bu(ve,Oe,I.dash,I.cap,Me,N,V,fe,ee):Fu(y,ve,Oe,I.dash,I.cap,Me,N,V,fe,ze,ee),ut&&d.translate(-We,-We)}function Fu(y,w,I,N,V,ee,fe,ve,Me,Oe,ze){let We=!1;Me!=0&&O.forEach((ut,Pt)=>{if(ut.series[0]==y){let At=M[ut.series[1]],xt=e[ut.series[1]],it=(At._paths||Al).band;Ts(it)&&(it=ut.dir==1?it[0]:it[1]);let Ze,Kt=null;At.show&&it&&BM(xt,$,X)?(Kt=ut.fill(i,Pt)||ee,Ze=At._paths.clip):it=null,Bu(w,I,N,V,Kt,fe,ve,Me,Oe,ze,Ze,it),We=!0}}),We||Bu(w,I,N,V,ee,fe,ve,Me,Oe,ze)}const el=Ua|Rh;function Bu(y,w,I,N,V,ee,fe,ve,Me,Oe,ze,We){ni(y,w,I,N,V),(Me||Oe||We)&&(d.save(),Me&&d.clip(Me),Oe&&d.clip(Oe)),We?(ve&el)==el?(d.clip(We),ze&&d.clip(ze),sc(V,fe),rc(y,ee,w)):ve&Rh?(sc(V,fe),d.clip(We),rc(y,ee,w)):ve&Ua&&(d.save(),d.clip(We),ze&&d.clip(ze),sc(V,fe),d.restore(),rc(y,ee,w)):(sc(V,fe),rc(y,ee,w)),(Me||Oe||We)&&d.restore()}function rc(y,w,I){I>0&&(w instanceof Map?w.forEach((N,V)=>{d.strokeStyle=nt=V,d.stroke(N)}):w!=null&&y&&d.stroke(w))}function sc(y,w){w instanceof Map?w.forEach((I,N)=>{d.fillStyle=Ye=N,d.fill(I)}):w!=null&&y&&d.fill(w)}function L0(y,w,I,N){let V=S[y],ee;if(N<=0)ee=[0,0];else{let fe=V._space=V.space(i,y,w,I,N),ve=V._incrs=V.incrs(i,y,w,I,N,fe);ee=sE(w,I,ve,N,fe)}return V._found=ee}function ku(y,w,I,N,V,ee,fe,ve,Me,Oe){let ze=fe%2/2;_==1&&d.translate(ze,ze),ni(ve,fe,Me,Oe,ve),d.beginPath();let We,ut,Pt,At,xt=V+(N==0||N==3?-ee:ee);I==0?(ut=V,At=xt):(We=V,Pt=xt);for(let it=0;it<y.length;it++)w[it]!=null&&(I==0?We=Pt=y[it]:ut=At=y[it],d.moveTo(We,ut),d.lineTo(Pt,At));d.stroke(),_==1&&d.translate(-ze,-ze)}function D0(y){let w=!0;return S.forEach((I,N)=>{if(!I.show)return;let V=b[I.scale];if(V.min==null){I._show&&(w=!1,I._show=!1,zo(!1));return}else I._show||(w=!1,I._show=!0,zo(!1));let ee=I.side,fe=ee%2,{min:ve,max:Me}=V,[Oe,ze]=L0(N,ve,Me,fe==0?te:W);if(ze==0)return;let We=V.distr==2,ut=I._splits=I.splits(i,N,ve,Me,Oe,ze,We),Pt=V.distr==2?ut.map(Ze=>we[Ze]):ut,At=V.distr==2?we[ut[1]]-we[ut[0]]:Oe,xt=I._values=I.values(i,I.filter(i,Pt,N,ze,At),N,ze,At);I._rotate=ee==2?I.rotate(i,xt,N,ze):0;let it=I._size;I._size=Oi(I.size(i,xt,N,y)),it!=null&&I._size!=it&&(w=!1)}),w}function I0(y){let w=!0;return R.forEach((I,N)=>{let V=I(i,N,Fr,y);V!=q[N]&&(w=!1),q[N]=V}),w}function U0(){for(let y=0;y<S.length;y++){let w=S[y];if(!w.show||!w._show)continue;let I=w.side,N=I%2,V,ee,fe=w.stroke(i,y),ve=I==0||I==3?-1:1,[Me,Oe]=w._found;if(w.label!=null){let Kn=w.labelGap*ve,_i=_n((w._lpos+Kn)*Lt);Br(w.labelFont[0],fe,"center",I==2?cl:rm),d.save(),N==1?(V=ee=0,d.translate(_i,_n(Xe+ot/2)),d.rotate((I==3?-jc:jc)/2)):(V=_n(Be+Ee/2),ee=_i);let Zs=cv(w.label)?w.label(i,y,Me,Oe):w.label;d.fillText(Zs,V,ee),d.restore()}if(Oe==0)continue;let ze=b[w.scale],We=N==0?Ee:ot,ut=N==0?Be:Xe,Pt=w._splits,At=ze.distr==2?Pt.map(Kn=>we[Kn]):Pt,xt=ze.distr==2?we[Pt[1]]-we[Pt[0]]:Me,it=w.ticks,Ze=w.border,Kt=it.show?it.size:0,rn=_n(Kt*Lt),An=_n((w.alignTo==2?w._size-Kt-w.gap:w.gap)*Lt),Ft=w._rotate*-jc/180,sn=h(w._pos*Lt),mi=(rn+An)*ve,jn=sn+mi;ee=N==0?jn:0,V=N==1?jn:0;let Ci=w.font[0],Vi=w.align==1?Zo:w.align==2?af:Ft>0?Zo:Ft<0?af:N==0?"center":I==3?af:Zo,gr=Ft||N==1?"middle":I==2?cl:rm;Br(Ci,fe,Vi,gr);let gi=w.font[1]*w.lineGap,Pi=Pt.map(Kn=>h(a(Kn,ze,We,ut))),Wi=w._values;for(let Kn=0;Kn<Wi.length;Kn++){let _i=Wi[Kn];if(_i!=null){N==0?V=Pi[Kn]:ee=Pi[Kn],_i=""+_i;let Zs=_i.indexOf(`
`)==-1?[_i]:_i.split(/\n/gm);for(let Zn=0;Zn<Zs.length;Zn++){let Ip=Zs[Zn];Ft?(d.save(),d.translate(V,ee+Zn*gi),d.rotate(Ft),d.fillText(Ip,0,0),d.restore()):d.fillText(Ip,V,ee+Zn*gi)}}}it.show&&ku(Pi,it.filter(i,At,y,Oe,xt),N,I,sn,rn,Ht(it.width*Lt,3),it.stroke(i,y),it.dash,it.cap);let _r=w.grid;_r.show&&ku(Pi,_r.filter(i,At,y,Oe,xt),N,N==0?2:1,N==0?Xe:Be,N==0?ot:Ee,Ht(_r.width*Lt,3),_r.stroke(i,y),_r.dash,_r.cap),Ze.show&&ku([sn],[1],N==0?1:0,N==0?1:2,N==1?Xe:Be,N==1?ot:Ee,Ht(Ze.width*Lt,3),Ze.stroke(i,y),Ze.dash,Ze.cap)}Tn("drawAxes")}function zo(y){M.forEach((w,I)=>{I>0&&(w._paths=null,y&&(r==1?(w.min=null,w.max=null):w.facets.forEach(N=>{N.min=null,N.max=null})))})}let oc=!1,zu=!1,tl=[];function N0(){zu=!1;for(let y=0;y<tl.length;y++)Tn(...tl[y]);tl.length=0}function Ho(){oc||($M(mp),oc=!0)}function O0(y,w=!1){oc=!0,zu=w,y(i),mp(),w&&tl.length>0&&queueMicrotask(N0)}i.batch=O0;function mp(){if(at&&(en(),at=!1),Y&&(nn(),Y=!1),Ct){if(Jt(p,Zo,ge),Jt(p,cl,de),Jt(p,yl,te),Jt(p,Sl,W),Jt(g,Zo,ge),Jt(g,cl,de),Jt(g,yl,te),Jt(g,Sl,W),Jt(f,yl,Z),Jt(f,Sl,ce),u.width=_n(Z*Lt),u.height=_n(ce*Lt),S.forEach(({_el:y,_show:w,_size:I,_pos:N,side:V})=>{if(y!=null)if(w){let ee=V===3||V===0?I:0,fe=V%2==1;Jt(y,fe?"left":"top",N-ee),Jt(y,fe?"width":"height",I),Jt(y,fe?"top":"left",fe?de:ge),Jt(y,fe?"height":"width",fe?W:te),bh(y,ao)}else Si(y,ao)}),nt=Ye=Tt=Gt=Dn=Et=Ke=ln=Ot=null,ct=1,rl(!0),ge!=be||de!=ft||te!=_e||W!=Ae){zo(!1);let y=te/_e,w=W/Ae;if(le&&!De&&se.left>=0){se.left*=y,se.top*=w,Go&&vr(Go,_n(se.left),0,te,W),Vo&&vr(Vo,0,_n(se.top),te,W);for(let I=0;I<Yn.length;I++){let N=Yn[I];N!=null&&(Or[I]*=y,Gi[I]*=w,vr(N,Oi(Or[I]),Oi(Gi[I]),te,W))}}if(jt.show&&!oe&&jt.left>=0&&jt.width>0){jt.left*=y,jt.width*=y,jt.top*=w,jt.height*=w;for(let I in Yu)Jt(Yo,I,jt[I])}be=ge,ft=de,_e=te,Ae=W}Tn("setSize"),Ct=!1}Z>0&&ce>0&&(d.clearRect(0,0,u.width,u.height),Tn("drawClear"),E.forEach(y=>y()),Tn("draw")),jt.show&&oe&&(ac(jt),oe=!1),le&&De&&(Ks(null,!0,!1),De=!1),pe.show&&pe.live&&ue&&(Wu(),ue=!1),l||(l=!0,i.status=1,Tn("ready")),Ve=!1,oc=!1}i.redraw=(y,w)=>{Y=w||!1,y!==!1?ds(L,x.min,x.max):Ho()};function Hu(y,w){let I=b[y];if(I.from==null){if(J==0){let N=I.range(i,w.min,w.max,y);w.min=N[0],w.max=N[1]}if(w.min>w.max){let N=w.min;w.min=w.max,w.max=N}if(J>1&&w.min!=null&&w.max!=null&&w.max-w.min<1e-16)return;y==L&&I.distr==2&&J>0&&(w.min=Qi(w.min,e[0]),w.max=Qi(w.max,e[0]),w.min==w.max&&w.max++),H[y]=w,at=!0,Ho()}}i.setScale=Hu;let Gu,Vu,Go,Vo,gp,_p,Wo,Xo,vp,xp,qt,Qt,hs=!1;const Un=se.drag;let En=Un.x,wn=Un.y;le&&(se.x&&(Gu=Di(MM,g)),se.y&&(Vu=Di(bM,g)),x.ori==0?(Go=Gu,Vo=Vu):(Go=Vu,Vo=Gu),qt=se.left,Qt=se.top);const jt=i.select=hn({show:!0,over:!0,left:0,width:0,top:0,height:0},n.select),Yo=jt.show?Di(SM,jt.over?g:p):null;function ac(y,w){if(jt.show){for(let I in y)jt[I]=y[I],I in Yu&&Jt(Yo,I,y[I]);w!==!1&&Tn("setSelect")}}i.setSelect=ac;function F0(y){if(M[y].show)ne&&bh(Te[y],ao);else if(ne&&Si(Te[y],ao),le){let I=hr?Yn[0]:Yn[y];I!=null&&vr(I,-10,-10,te,W)}}function ds(y,w,I){Hu(y,{min:w,max:I})}function pr(y,w,I,N){w.focus!=null&&G0(y),w.show!=null&&M.forEach((V,ee)=>{ee>0&&(y==ee||y==null)&&(V.show=w.show,F0(ee),r==2?(ds(V.facets[0].scale,null,null),ds(V.facets[1].scale,null,null)):ds(V.scale,null,null),Ho())}),I!==!1&&Tn("setSeries",y,w),N&&sl("setSeries",i,y,w)}i.setSeries=pr;function B0(y,w){hn(O[y],w)}function k0(y,w){y.fill=St(y.fill||null),y.dir=Rt(y.dir,-1),w=w??O.length,O.splice(w,0,y)}function z0(y){y==null?O.length=0:O.splice(y,1)}i.addBand=k0,i.setBand=B0,i.delBand=z0;function H0(y,w){M[y].alpha=w,le&&Yn[y]!=null&&(Yn[y].style.opacity=w),ne&&Te[y]&&(Te[y].style.opacity=w)}let kr,ps,js;const qo={focus:!0};function G0(y){if(y!=js){let w=y==null,I=pi.alpha!=1;M.forEach((N,V)=>{if(r==1||V>0){let ee=w||V==0||V==y;N._focus=w?null:ee,I&&H0(V,ee?1:pi.alpha)}}),js=y,I&&Ho()}}ne&&ti&&D(lm,he,y=>{se._lock||(Ln(y),js!=null&&pr(null,qo,!0,un.setSeries))});function mr(y,w,I){let N=b[w];I&&(y=y/Lt-(N.ori==1?de:ge));let V=te;N.ori==1&&(V=W,y=V-y),N.dir==-1&&(y=V-y);let ee=N._min,fe=N._max,ve=y/V,Me=ee+(fe-ee)*ve,Oe=N.distr;return Oe==3?La(10,Me):Oe==4?zM(Me,N.asinh):Oe==100?N.bwd(Me):Me}function V0(y,w){let I=mr(y,L,w);return Qi(I,e[0],$,X)}i.valToIdx=y=>Qi(y,e[0]),i.posToIdx=V0,i.posToVal=mr,i.valToPos=(y,w,I)=>b[w].ori==0?s(y,b[w],I?Ee:te,I?Be:0):o(y,b[w],I?ot:W,I?Xe:0),i.setCursor=(y,w,I)=>{qt=y.left,Qt=y.top,Ks(null,w,I)};function yp(y,w){Jt(Yo,Zo,jt.left=y),Jt(Yo,yl,jt.width=w)}function Sp(y,w){Jt(Yo,cl,jt.top=y),Jt(Yo,Sl,jt.height=w)}let nl=x.ori==0?yp:Sp,il=x.ori==1?yp:Sp;function W0(){if(ne&&pe.live)for(let y=r==2?1:0;y<M.length;y++){if(y==0&&F)continue;let w=pe.values[y],I=0;for(let N in w)Re[y][I++].firstChild.nodeValue=w[N]}}function Wu(y,w){if(y!=null&&(y.idxs?y.idxs.forEach((I,N)=>{re[N]=I}):WM(y.idx)||re.fill(y.idx),pe.idx=re[0]),ne&&pe.live){for(let I=0;I<M.length;I++)(I>0||r==1&&!F)&&X0(I,re[I]);W0()}ue=!1,w!==!1&&Tn("setLegend")}i.setLegend=Wu;function X0(y,w){let I=M[y],N=y==0&&P==2?we:e[y],V;F?V=I.values(i,y,w)??st:(V=I.value(i,w==null?null:N[w],y,w),V=V==null?st:{_:V}),pe.values[y]=V}function Ks(y,w,I){vp=qt,xp=Qt,[qt,Qt]=se.move(i,qt,Qt),se.left=qt,se.top=Qt,le&&(Go&&vr(Go,_n(qt),0,te,W),Vo&&vr(Vo,0,_n(Qt),te,W));let N,V=$>X;kr=zt,ps=null;let ee=x.ori==0?te:W,fe=x.ori==1?te:W;if(qt<0||J==0||V){N=se.idx=null;for(let ve=0;ve<M.length;ve++){let Me=Yn[ve];Me!=null&&vr(Me,-10,-10,te,W)}ti&&pr(null,qo,!0,y==null&&un.setSeries),pe.live&&(re.fill(N),ue=!0)}else{let ve,Me,Oe;r==1&&(ve=x.ori==0?qt:Qt,Me=mr(ve,L),N=se.idx=Qi(Me,e[0],$,X),Oe=U(e[0][N],x,ee,0));let ze=-10,We=-10,ut=0,Pt=0,At=!0,xt="",it="";for(let Ze=r==2?1:0;Ze<M.length;Ze++){let Kt=M[Ze],rn=re[Ze],An=rn==null?null:r==1?e[Ze][rn]:e[Ze][1][rn],Ft=se.dataIdx(i,Ze,N,Me),sn=Ft==null?null:r==1?e[Ze][Ft]:e[Ze][1][Ft];if(ue=ue||sn!=An||Ft!=rn,re[Ze]=Ft,Ze>0&&Kt.show){let mi=Ft==null?-10:Ft==N?Oe:U(r==1?e[0][Ft]:e[Ze][0][Ft],x,ee,0),jn=sn==null?-10:k(sn,r==1?b[Kt.scale]:b[Kt.facets[1].scale],fe,0);if(ti&&sn!=null){let Ci=x.ori==1?qt:Qt,Vi=vn(pi.dist(i,Ze,Ft,jn,Ci));if(Vi<kr){let gr=pi.bias;if(gr!=0){let gi=mr(Ci,Kt.scale),Pi=sn>=0?1:-1,Wi=gi>=0?1:-1;Wi==Pi&&(Wi==1?gr==1?sn>=gi:sn<=gi:gr==1?sn<=gi:sn>=gi)&&(kr=Vi,ps=Ze)}else kr=Vi,ps=Ze}}if(ue||hr){let Ci,Vi;x.ori==0?(Ci=mi,Vi=jn):(Ci=jn,Vi=mi);let gr,gi,Pi,Wi,_r,Kn,_i=!0,Zs=mn.bbox;if(Zs!=null){_i=!1;let Zn=Zs(i,Ze);Pi=Zn.left,Wi=Zn.top,gr=Zn.width,gi=Zn.height}else Pi=Ci,Wi=Vi,gr=gi=mn.size(i,Ze);if(Kn=mn.fill(i,Ze),_r=mn.stroke(i,Ze),hr)Ze==ps&&kr<=pi.prox&&(ze=Pi,We=Wi,ut=gr,Pt=gi,At=_i,xt=Kn,it=_r);else{let Zn=Yn[Ze];Zn!=null&&(Or[Ze]=Pi,Gi[Ze]=Wi,mm(Zn,gr,gi,_i),dm(Zn,Kn,_r),vr(Zn,Oi(Pi),Oi(Wi),te,W))}}}}if(hr){let Ze=pi.prox,Kt=js==null?kr<=Ze:kr>Ze||ps!=js;if(ue||Kt){let rn=Yn[0];rn!=null&&(Or[0]=ze,Gi[0]=We,mm(rn,ut,Pt,At),dm(rn,xt,it),vr(rn,Oi(ze),Oi(We),te,W))}}}if(jt.show&&hs)if(y!=null){let[ve,Me]=un.scales,[Oe,ze]=un.match,[We,ut]=y.cursor.sync.scales,Pt=y.cursor.drag;if(En=Pt._x,wn=Pt._y,En||wn){let{left:At,top:xt,width:it,height:Ze}=y.select,Kt=y.scales[We].ori,rn=y.posToVal,An,Ft,sn,mi,jn,Ci=ve!=null&&Oe(ve,We),Vi=Me!=null&&ze(Me,ut);Ci&&En?(Kt==0?(An=At,Ft=it):(An=xt,Ft=Ze),sn=b[ve],mi=U(rn(An,We),sn,ee,0),jn=U(rn(An+Ft,We),sn,ee,0),nl(er(mi,jn),vn(jn-mi))):nl(0,ee),Vi&&wn?(Kt==1?(An=At,Ft=it):(An=xt,Ft=Ze),sn=b[Me],mi=k(rn(An,ut),sn,fe,0),jn=k(rn(An+Ft,ut),sn,fe,0),il(er(mi,jn),vn(jn-mi))):il(0,fe)}else qu()}else{let ve=vn(vp-gp),Me=vn(xp-_p);if(x.ori==1){let ut=ve;ve=Me,Me=ut}En=Un.x&&ve>=Un.dist,wn=Un.y&&Me>=Un.dist;let Oe=Un.uni;Oe!=null?En&&wn&&(En=ve>=Oe,wn=Me>=Oe,!En&&!wn&&(Me>ve?wn=!0:En=!0)):Un.x&&Un.y&&(En||wn)&&(En=wn=!0);let ze,We;En&&(x.ori==0?(ze=Wo,We=qt):(ze=Xo,We=Qt),nl(er(ze,We),vn(We-ze)),wn||il(0,fe)),wn&&(x.ori==1?(ze=Wo,We=qt):(ze=Xo,We=Qt),il(er(ze,We),vn(We-ze)),En||nl(0,ee)),!En&&!wn&&(nl(0,0),il(0,0))}if(Un._x=En,Un._y=wn,y==null){if(I){if(Dp!=null){let[ve,Me]=un.scales;un.values[0]=ve!=null?mr(x.ori==0?qt:Qt,ve):null,un.values[1]=Me!=null?mr(x.ori==1?qt:Qt,Me):null}sl(lf,i,qt,Qt,te,W,N)}if(ti){let ve=I&&un.setSeries,Me=pi.prox;js==null?kr<=Me&&pr(ps,qo,!0,ve):kr>Me?pr(null,qo,!0,ve):ps!=js&&pr(ps,qo,!0,ve)}}ue&&(pe.idx=N,Wu()),w!==!1&&Tn("setCursor")}let ms=null;Object.defineProperty(i,"rect",{get(){return ms==null&&rl(!1),ms}});function rl(y=!1){y?ms=null:(ms=g.getBoundingClientRect(),Tn("syncRect",ms))}function Mp(y,w,I,N,V,ee,fe){se._lock||hs&&y!=null&&y.movementX==0&&y.movementY==0||(Xu(y,w,I,N,V,ee,fe,!1,y!=null),y!=null?Ks(null,!0,!0):Ks(w,!0,!1))}function Xu(y,w,I,N,V,ee,fe,ve,Me){if(ms==null&&rl(!1),Ln(y),y!=null)I=y.clientX-ms.left,N=y.clientY-ms.top;else{if(I<0||N<0){qt=-10,Qt=-10;return}let[Oe,ze]=un.scales,We=w.cursor.sync,[ut,Pt]=We.values,[At,xt]=We.scales,[it,Ze]=un.match,Kt=w.axes[0].side%2==1,rn=x.ori==0?te:W,An=x.ori==1?te:W,Ft=Kt?ee:V,sn=Kt?V:ee,mi=Kt?N:I,jn=Kt?I:N;if(At!=null?I=it(Oe,At)?a(ut,b[Oe],rn,0):-10:I=rn*(mi/Ft),xt!=null?N=Ze(ze,xt)?a(Pt,b[ze],An,0):-10:N=An*(jn/sn),x.ori==1){let Ci=I;I=N,N=Ci}}Me&&(w==null||w.cursor.event.type==lf)&&((I<=1||I>=te-1)&&(I=ro(I,te)),(N<=1||N>=W-1)&&(N=ro(N,W))),ve?(gp=I,_p=N,[Wo,Xo]=se.move(i,I,N)):(qt=I,Qt=N)}const Yu={width:0,height:0,left:0,top:0};function qu(){ac(Yu,!1)}let bp,Ep,wp,Tp;function Ap(y,w,I,N,V,ee,fe){hs=!0,En=wn=Un._x=Un._y=!1,Xu(y,w,I,N,V,ee,fe,!0,!1),y!=null&&(D(cf,Sh,Rp,!1),sl(om,i,Wo,Xo,te,W,null));let{left:ve,top:Me,width:Oe,height:ze}=jt;bp=ve,Ep=Me,wp=Oe,Tp=ze}function Rp(y,w,I,N,V,ee,fe){hs=Un._x=Un._y=!1,Xu(y,w,I,N,V,ee,fe,!1,!0);let{left:ve,top:Me,width:Oe,height:ze}=jt,We=Oe>0||ze>0,ut=bp!=ve||Ep!=Me||wp!=Oe||Tp!=ze;if(We&&ut&&ac(jt),Un.setScale&&We&&ut){let Pt=ve,At=Oe,xt=Me,it=ze;if(x.ori==1&&(Pt=Me,At=ze,xt=ve,it=Oe),En&&ds(L,mr(Pt,L),mr(Pt+At,L)),wn)for(let Ze in b){let Kt=b[Ze];Ze!=L&&Kt.from==null&&Kt.min!=zt&&ds(Ze,mr(xt+it,Ze),mr(xt,Ze))}qu()}else se.lock&&(se._lock=!se._lock,Ks(w,!0,y!=null));y!=null&&(T(cf,Sh),sl(cf,i,qt,Qt,te,W,null))}function Y0(y,w,I,N,V,ee,fe){if(se._lock)return;Ln(y);let ve=hs;if(hs){let Me=!0,Oe=!0,ze=10,We,ut;x.ori==0?(We=En,ut=wn):(We=wn,ut=En),We&&ut&&(Me=qt<=ze||qt>=te-ze,Oe=Qt<=ze||Qt>=W-ze),We&&Me&&(qt=qt<Wo?0:te),ut&&Oe&&(Qt=Qt<Xo?0:W),Ks(null,!0,!0),hs=!1}qt=-10,Qt=-10,re.fill(null),Ks(null,!0,!0),ve&&(hs=ve)}function Cp(y,w,I,N,V,ee,fe){se._lock||(Ln(y),tt(),qu(),y!=null&&sl(cm,i,qt,Qt,te,W,null))}function Pp(){S.forEach(oE),Ne(i.width,i.height,!0)}Mo(au,xa,Pp);const jo={};jo.mousedown=Ap,jo.mousemove=Mp,jo.mouseup=Rp,jo.dblclick=Cp,jo.setSeries=(y,w,I,N)=>{let V=un.match[2];I=V(i,w,I),I!=-1&&pr(I,N,!0,!1)},le&&(D(om,g,Ap),D(lf,g,Mp),D(am,g,y=>{Ln(y),rl(!1)}),D(lm,g,Y0),D(cm,g,Cp),Ch.add(i),i.syncRect=rl);const lc=i.hooks=n.hooks||{};function Tn(y,w,I){zu?tl.push([y,w,I]):y in lc&&lc[y].forEach(N=>{N.call(null,i,w,I)})}(n.plugins||[]).forEach(y=>{for(let w in y.hooks)lc[w]=(lc[w]||[]).concat(y.hooks[w])});const Lp=(y,w,I)=>I,un=hn({key:null,setSeries:!1,filters:{pub:ym,sub:ym},scales:[L,M[1]?M[1].scale:null],match:[Sm,Sm,Lp],values:[null,null]},se.sync);un.match.length==2&&un.match.push(Lp),se.sync=un;const Dp=un.key,ju=Iv(Dp);function sl(y,w,I,N,V,ee,fe){un.filters.pub(y,w,I,N,V,ee,fe)&&ju.pub(y,w,I,N,V,ee,fe)}ju.sub(i);function q0(y,w,I,N,V,ee,fe){un.filters.sub(y,w,I,N,V,ee,fe)&&jo[y](null,w,I,N,V,ee,fe)}i.pub=q0;function j0(){ju.unsub(i),Ch.delete(i),Pe.clear(),Eh(au,xa,Pp),c.remove(),he==null||he.remove(),Tn("destroy")}i.destroy=j0;function Ku(){Tn("init",n,e),qe(e||n.data,!1),H[L]?Hu(L,H[L]):tt(),oe=jt.show&&(jt.width>0||jt.height>0),De=ue=!0,Ne(n.width,n.height)}return M.forEach(Ys),S.forEach(Ou),t?t instanceof HTMLElement?(t.appendChild(c),Ku()):t(i,Ku):Ku(),i}Bn.assign=hn;Bn.fmtNum=Vd;Bn.rangeNum=lu;Bn.rangeLog=wu;Bn.rangeAsinh=Hd;Bn.orient=Oo;Bn.pxRatio=Lt;Bn.join=JM;Bn.fmtDate=Xd,Bn.tzDate=lb;Bn.sync=Iv;{Bn.addGap=Wb,Bn.clipGaps=Ru;let n=Bn.paths={points:kv};n.linear=Hv,n.stepped=qb,n.bars=jb,n.spline=Zb}var aE=$e("<div></div>"),lE=$e('<div class="flex gap-2 overflow-x-auto border rounded-lg bg-background p-2" style="min-height: 500px;"><div class="flex flex-col justify-between text-xs text-muted-foreground py-8 pr-1 min-w-[40px]"><span> </span> <span>Depth</span> <span> </span></div> <!></div>');function cE(n,e){Xt(e,!0);let t=Dt(e,"visibleCurves",19,()=>["GR","RHOB","NPHI","RT","DT"]);const i={GR:"#22c55e",RHOB:"#3b82f6",NPHI:"#ef4444",RT:"#f59e0b",DT:"#8b5cf6"};let r=Vn([]),s=[];function o(_,h){var b;const m=e.data.depth,M=e.data.curves[h]??[],S={width:140,height:((b=_.parentElement)==null?void 0:b.clientHeight)??500,title:h,axes:[{show:!1},{label:h}],series:[{},{stroke:i[h]??"#64748b",width:1.5,label:h,spanGaps:!1}]};return new Bn(S,[m,M],_)}di(()=>{s=r.map((_,h)=>o(_,B(a)[h]))}),ql(()=>{s.forEach(_=>_.destroy()),s=[]});const a=Vt(()=>t().filter(_=>Object.keys(e.data.curves).includes(_)));var l=lE(),c=et(l),u=et(c),d=et(u),f=lt(u,4),p=et(f),g=lt(c,2);ur(g,17,()=>B(a),cr,(_,h,m)=>{var M=aE();jl(M,(S,b)=>r[b]=S,S=>r==null?void 0:r[S],()=>[m]),Le(_,M)}),bt((_,h)=>{Wt(d,`${_??""} m`),Wt(p,`${h??""} m`)},[()=>{var _;return(_=e.data.depth[0])==null?void 0:_.toFixed(0)},()=>{var _;return(_=e.data.depth[e.data.depth.length-1])==null?void 0:_.toFixed(0)}]),Le(n,l),Yt()}var uE=$e("<option> </option>"),fE=$e('<div class="flex justify-center py-12"><!></div>'),hE=$e('<img class="h-48 rounded border object-cover"/>'),dE=$e('<h2 class="text-lg font-semibold mt-6 mb-2">Core Photos</h2> <div class="flex gap-3 overflow-x-auto"></div>',1),pE=$e("<!> <!>",1),mE=$e('<!> <main class="p-6 max-w-7xl mx-auto"><div class="flex items-center gap-4 mb-4"><label class="text-sm font-medium">Well:</label> <select class="border rounded-md px-2 py-1 text-sm bg-background"></select></div> <!></main>',1);function gE(n,e){Xt(e,!0);let t=Qe(Vn([])),i=Qe(Vn([])),r=Qe(""),s=Qe(null),o=Qe(!1),a=Qe("");di(async()=>{try{await(async S=>{var b=Sd(S,2);Ue(t,b[0],!0),Ue(i,b[1],!0)})(await Promise.all([Ro(e.name,"well_logs"),Ro(e.name,"core_photos").catch(()=>[])])),B(t).length&&Ue(r,B(t)[0],!0)}catch(S){Ue(a,S instanceof Error?S.message:String(S),!0)}}),Bi(()=>{B(r)&&(Ue(o,!0),Ue(s,null),fetch(Zl(e.name,"well_logs",B(r)),{headers:{"X-API-Key":localStorage.getItem("reservoir_api_key")??""}}).then(S=>S.text()).then(S=>{Ue(s,fM(S),!0)}).catch(S=>{Ue(a,S.message,!0)}).finally(()=>{Ue(o,!1)}))});const l=Vt(()=>B(r).replace(/\.las$/i,"")),c=Vt(()=>B(i).filter(S=>S.startsWith(B(l)+"/")));var u=mE(),d=kt(u);{let S=Vt(()=>[e.name,"Well Logs"]);Ws(d,{get breadcrumb(){return B(S)}})}var f=lt(d,2),p=et(f),g=lt(et(p),2);ur(g,21,()=>B(t),cr,(S,b)=>{var O=uE(),L=et(O),A={};bt(E=>{Wt(L,E),A!==(A=B(b))&&(O.value=(O.__value=B(b))??"")},[()=>B(b).replace(".las","")]),Le(S,O)});var _=lt(p,2);{var h=S=>{cs(S,{variant:"destructive",children:(b,O)=>{var L=Hi();bt(()=>Wt(L,B(a))),Le(b,L)},$$slots:{default:!0}})},m=S=>{var b=fE(),O=et(b);us(O,{class:"h-8 w-8"}),Le(S,b)},M=S=>{var b=pE(),O=kt(b);cE(O,{get data(){return B(s)}});var L=lt(O,2);{var A=E=>{var C=dE(),v=lt(kt(C),2);ur(v,21,()=>B(c),cr,(x,P)=>{var U=hE();bt(k=>{or(U,"src",k),or(U,"alt",B(P))},[()=>xh(e.name,"core_photos",B(P))]),Le(x,U)}),Le(E,C)};Xn(L,E=>{B(c).length&&E(A)})}Le(S,b)};Xn(_,S=>{B(a)?S(h):B(o)?S(m,1):B(s)&&S(M,2)})}Nd(g,()=>B(r),S=>Ue(r,S)),Le(n,u),Yt()}var _E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xv={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,e){((t,i)=>{n.exports=i()})(_E,function t(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r,s=!i.document&&!!i.postMessage,o=i.IS_PAPA_WORKER||!1,a={},l=0,c={};function u(E){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(C){var v=O(C);v.chunkSize=parseInt(v.chunkSize),C.step||C.chunk||(v.chunkSize=null),this._handle=new _(v),(this._handle.streamer=this)._config=v}).call(this,E),this.parseChunk=function(C,v){var x=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<x){let U=this._config.newline;U||(P=this._config.quoteChar||'"',U=this._handle.guessLineEndings(C,P)),C=[...C.split(U).slice(x)].join(U)}this.isFirstChunk&&A(this._config.beforeFirstChunk)&&(P=this._config.beforeFirstChunk(C))!==void 0&&(C=P),this.isFirstChunk=!1,this._halted=!1;var x=this._partialLine+C,P=(this._partialLine="",this._handle.parse(x,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(C=P.meta.cursor,x=(this._finished||(this._partialLine=x.substring(C-this._baseIndex),this._baseIndex=C),P&&P.data&&(this._rowCount+=P.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)i.postMessage({results:P,workerId:c.WORKER_ID,finished:x});else if(A(this._config.chunk)&&!v){if(this._config.chunk(P,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=P=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(P.data),this._completeResults.errors=this._completeResults.errors.concat(P.errors),this._completeResults.meta=P.meta),this._completed||!x||!A(this._config.complete)||P&&P.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),x||P&&P.meta.paused||this._nextChunk(),P}this._halted=!0},this._sendError=function(C){A(this._config.error)?this._config.error(C):o&&this._config.error&&i.postMessage({workerId:c.WORKER_ID,error:C,finished:!1})}}function d(E){var C;(E=E||{}).chunkSize||(E.chunkSize=c.RemoteChunkSize),u.call(this,E),this._nextChunk=s?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(C=new XMLHttpRequest,this._config.withCredentials&&(C.withCredentials=this._config.withCredentials),s||(C.onload=L(this._chunkLoaded,this),C.onerror=L(this._chunkError,this)),C.open(this._config.downloadRequestBody?"POST":"GET",this._input,!s),this._config.downloadRequestHeaders){var v,x=this._config.downloadRequestHeaders;for(v in x)C.setRequestHeader(v,x[v])}var P;this._config.chunkSize&&(P=this._start+this._config.chunkSize-1,C.setRequestHeader("Range","bytes="+this._start+"-"+P));try{C.send(this._config.downloadRequestBody)}catch(U){this._chunkError(U.message)}s&&C.status===0&&this._chunkError()}},this._chunkLoaded=function(){C.readyState===4&&(C.status<200||400<=C.status?this._chunkError():(this._start+=this._config.chunkSize||C.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(C),this.parseChunk(C.responseText)))},this._chunkError=function(v){v=C.statusText||v,this._sendError(new Error(v))}}function f(E){(E=E||{}).chunkSize||(E.chunkSize=c.LocalChunkSize),u.call(this,E);var C,v,x=typeof FileReader<"u";this.stream=function(P){this._input=P,v=P.slice||P.webkitSlice||P.mozSlice,x?((C=new FileReader).onload=L(this._chunkLoaded,this),C.onerror=L(this._chunkError,this)):C=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var P=this._input,U=(this._config.chunkSize&&(U=Math.min(this._start+this._config.chunkSize,this._input.size),P=v.call(P,this._start,U)),C.readAsText(P,this._config.encoding));x||this._chunkLoaded({target:{result:U}})},this._chunkLoaded=function(P){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(P.target.result)},this._chunkError=function(){this._sendError(C.error)}}function p(E){var C;u.call(this,E=E||{}),this.stream=function(v){return C=v,this._nextChunk()},this._nextChunk=function(){var v,x;if(!this._finished)return v=this._config.chunkSize,C=v?(x=C.substring(0,v),C.substring(v)):(x=C,""),this._finished=!C,this.parseChunk(x)}}function g(E){u.call(this,E=E||{});var C=[],v=!0,x=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(P){this._input=P,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){x&&C.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),C.length?this.parseChunk(C.shift()):v=!0},this._streamData=L(function(P){try{C.push(typeof P=="string"?P:P.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(C.shift()))}catch(U){this._streamError(U)}},this),this._streamError=L(function(P){this._streamCleanUp(),this._sendError(P)},this),this._streamEnd=L(function(){this._streamCleanUp(),x=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function _(E){var C,v,x,P,U=Math.pow(2,53),k=-U,H=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,G=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,z=this,K=0,Q=0,ae=!1,re=!1,pe=[],se={data:[],errors:[],meta:{}};function ne(ye){return E.skipEmptyLines==="greedy"?ye.join("").trim()==="":ye.length===1&&ye[0].length===0}function le(){if(se&&x&&(he("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+c.DefaultDelimiter+"'"),x=!1),E.skipEmptyLines&&(se.data=se.data.filter(function(He){return!ne(He)})),me()){let He=function(F,st){A(E.transformHeader)&&(F=E.transformHeader(F,st)),pe.push(F)};var Re=He;if(se)if(Array.isArray(se.data[0])){for(var ye=0;me()&&ye<se.data.length;ye++)se.data[ye].forEach(He);se.data.splice(0,1)}else se.data.forEach(He)}function xe(He,F){for(var st=E.header?{}:[],Fe=0;Fe<He.length;Fe++){var Ce=Fe,Ge=He[Fe],Ge=((je,Pe)=>(D=>(E.dynamicTypingFunction&&E.dynamicTyping[D]===void 0&&(E.dynamicTyping[D]=E.dynamicTypingFunction(D)),(E.dynamicTyping[D]||E.dynamicTyping)===!0))(je)?Pe==="true"||Pe==="TRUE"||Pe!=="false"&&Pe!=="FALSE"&&((D=>{if(H.test(D)&&(D=parseFloat(D),k<D&&D<U))return 1})(Pe)?parseFloat(Pe):G.test(Pe)?new Date(Pe):Pe===""?null:Pe):Pe)(Ce=E.header?Fe>=pe.length?"__parsed_extra":pe[Fe]:Ce,Ge=E.transform?E.transform(Ge,Ce):Ge);Ce==="__parsed_extra"?(st[Ce]=st[Ce]||[],st[Ce].push(Ge)):st[Ce]=Ge}return E.header&&(Fe>pe.length?he("FieldMismatch","TooManyFields","Too many fields: expected "+pe.length+" fields but parsed "+Fe,Q+F):Fe<pe.length&&he("FieldMismatch","TooFewFields","Too few fields: expected "+pe.length+" fields but parsed "+Fe,Q+F)),st}var Te;se&&(E.header||E.dynamicTyping||E.transform)&&(Te=1,!se.data.length||Array.isArray(se.data[0])?(se.data=se.data.map(xe),Te=se.data.length):se.data=xe(se.data,0),E.header&&se.meta&&(se.meta.fields=pe),Q+=Te)}function me(){return E.header&&pe.length===0}function he(ye,xe,Te,Re){ye={type:ye,code:xe,message:Te},Re!==void 0&&(ye.row=Re),se.errors.push(ye)}A(E.step)&&(P=E.step,E.step=function(ye){se=ye,me()?le():(le(),se.data.length!==0&&(K+=ye.data.length,E.preview&&K>E.preview?v.abort():(se.data=se.data[0],P(se,z))))}),this.parse=function(ye,xe,Te){var Re=E.quoteChar||'"',Re=(E.newline||(E.newline=this.guessLineEndings(ye,Re)),x=!1,E.delimiter?A(E.delimiter)&&(E.delimiter=E.delimiter(ye),se.meta.delimiter=E.delimiter):((Re=((He,F,st,Fe,Ce)=>{var Ge,je,Pe,D;Ce=Ce||[",","	","|",";",c.RECORD_SEP,c.UNIT_SEP];for(var T=0;T<Ce.length;T++){for(var Z,ce=Ce[T],te=0,W=0,ge=0,de=(Pe=void 0,new m({comments:Fe,delimiter:ce,newline:F,preview:10}).parse(He)),be=0;be<de.data.length;be++)st&&ne(de.data[be])?ge++:(Z=de.data[be].length,W+=Z,Pe===void 0?Pe=Z:0<Z&&(te+=Math.abs(Z-Pe),Pe=Z));0<de.data.length&&(W/=de.data.length-ge),(je===void 0||te<=je)&&(D===void 0||D<W)&&1.99<W&&(je=te,Ge=ce,D=W)}return{successful:!!(E.delimiter=Ge),bestDelimiter:Ge}})(ye,E.newline,E.skipEmptyLines,E.comments,E.delimitersToGuess)).successful?E.delimiter=Re.bestDelimiter:(x=!0,E.delimiter=c.DefaultDelimiter),se.meta.delimiter=E.delimiter),O(E));return E.preview&&E.header&&Re.preview++,C=ye,v=new m(Re),se=v.parse(C,xe,Te),le(),ae?{meta:{paused:!0}}:se||{meta:{paused:!1}}},this.paused=function(){return ae},this.pause=function(){ae=!0,v.abort(),C=A(E.chunk)?"":C.substring(v.getCharIndex())},this.resume=function(){z.streamer._halted?(ae=!1,z.streamer.parseChunk(C,!0)):setTimeout(z.resume,3)},this.aborted=function(){return re},this.abort=function(){re=!0,v.abort(),se.meta.aborted=!0,A(E.complete)&&E.complete(se),C=""},this.guessLineEndings=function(He,Re){He=He.substring(0,1048576);var Re=new RegExp(h(Re)+"([^]*?)"+h(Re),"gm"),Te=(He=He.replace(Re,"")).split("\r"),Re=He.split(`
`),He=1<Re.length&&Re[0].length<Te[0].length;if(Te.length===1||He)return`
`;for(var F=0,st=0;st<Te.length;st++)Te[st][0]===`
`&&F++;return F>=Te.length/2?`\r
`:"\r"}}function h(E){return E.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(E){var C=(E=E||{}).delimiter,v=E.newline,x=E.comments,P=E.step,U=E.preview,k=E.fastMode,H=null,G=!1,z=E.quoteChar==null?'"':E.quoteChar,K=z;if(E.escapeChar!==void 0&&(K=E.escapeChar),(typeof C!="string"||-1<c.BAD_DELIMITERS.indexOf(C))&&(C=","),x===C)throw new Error("Comment character same as delimiter");x===!0?x="#":(typeof x!="string"||-1<c.BAD_DELIMITERS.indexOf(x))&&(x=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var Q=0,ae=!1;this.parse=function(re,pe,se){if(typeof re!="string")throw new Error("Input must be a string");var ne=re.length,le=C.length,me=v.length,he=x.length,ye=A(P),xe=[],Te=[],Re=[],He=Q=0;if(!re)return te();if(k||k!==!1&&re.indexOf(z)===-1){for(var F=re.split(v),st=0;st<F.length;st++){if(Re=F[st],Q+=Re.length,st!==F.length-1)Q+=v.length;else if(se)return te();if(!x||Re.substring(0,he)!==x){if(ye){if(xe=[],D(Re.split(C)),W(),ae)return te()}else D(Re.split(C));if(U&&U<=st)return xe=xe.slice(0,U),te(!0)}}return te()}for(var Fe=re.indexOf(C,Q),Ce=re.indexOf(v,Q),Ge=new RegExp(h(K)+h(z),"g"),je=re.indexOf(z,Q);;)if(re[Q]===z)for(je=Q,Q++;;){if((je=re.indexOf(z,je+1))===-1)return se||Te.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:xe.length,index:Q}),Z();if(je===ne-1)return Z(re.substring(Q,je).replace(Ge,z));if(z===K&&re[je+1]===K)je++;else if(z===K||je===0||re[je-1]!==K){Fe!==-1&&Fe<je+1&&(Fe=re.indexOf(C,je+1));var Pe=T((Ce=Ce!==-1&&Ce<je+1?re.indexOf(v,je+1):Ce)===-1?Fe:Math.min(Fe,Ce));if(re.substr(je+1+Pe,le)===C){Re.push(re.substring(Q,je).replace(Ge,z)),re[Q=je+1+Pe+le]!==z&&(je=re.indexOf(z,Q)),Fe=re.indexOf(C,Q),Ce=re.indexOf(v,Q);break}if(Pe=T(Ce),re.substring(je+1+Pe,je+1+Pe+me)===v){if(Re.push(re.substring(Q,je).replace(Ge,z)),ce(je+1+Pe+me),Fe=re.indexOf(C,Q),je=re.indexOf(z,Q),ye&&(W(),ae))return te();if(U&&xe.length>=U)return te(!0);break}Te.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:xe.length,index:Q}),je++}}else if(x&&Re.length===0&&re.substring(Q,Q+he)===x){if(Ce===-1)return te();Q=Ce+me,Ce=re.indexOf(v,Q),Fe=re.indexOf(C,Q)}else if(Fe!==-1&&(Fe<Ce||Ce===-1))Re.push(re.substring(Q,Fe)),Q=Fe+le,Fe=re.indexOf(C,Q);else{if(Ce===-1)break;if(Re.push(re.substring(Q,Ce)),ce(Ce+me),ye&&(W(),ae))return te();if(U&&xe.length>=U)return te(!0)}return Z();function D(ge){xe.push(ge),He=Q}function T(ge){var de=0;return de=ge!==-1&&(ge=re.substring(je+1,ge))&&ge.trim()===""?ge.length:de}function Z(ge){return se||(ge===void 0&&(ge=re.substring(Q)),Re.push(ge),Q=ne,D(Re),ye&&W()),te()}function ce(ge){Q=ge,D(Re),Re=[],Ce=re.indexOf(v,Q)}function te(ge){if(E.header&&!pe&&xe.length&&!G){var de=xe[0],be=Object.create(null),ft=new Set(de);let _e=!1;for(let Ae=0;Ae<de.length;Ae++){let Be=de[Ae];if(be[Be=A(E.transformHeader)?E.transformHeader(Be,Ae):Be]){let Xe,Ee=be[Be];for(;Xe=Be+"_"+Ee,Ee++,ft.has(Xe););ft.add(Xe),de[Ae]=Xe,be[Be]++,_e=!0,(H=H===null?{}:H)[Xe]=Be}else be[Be]=1,de[Ae]=Be;ft.add(Be)}_e&&console.warn("Duplicate headers found and renamed."),G=!0}return{data:xe,errors:Te,meta:{delimiter:C,linebreak:v,aborted:ae,truncated:!!ge,cursor:He+(pe||0),renamedHeaders:H}}}function W(){P(te()),xe=[],Te=[]}},this.abort=function(){ae=!0},this.getCharIndex=function(){return Q}}function M(E){var C=E.data,v=a[C.workerId],x=!1;if(C.error)v.userError(C.error,C.file);else if(C.results&&C.results.data){var P={abort:function(){x=!0,S(C.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(A(v.userStep)){for(var U=0;U<C.results.data.length&&(v.userStep({data:C.results.data[U],errors:C.results.errors,meta:C.results.meta},P),!x);U++);delete C.results}else A(v.userChunk)&&(v.userChunk(C.results,P,C.file),delete C.results)}C.finished&&!x&&S(C.workerId,C.results)}function S(E,C){var v=a[E];A(v.userComplete)&&v.userComplete(C),v.terminate(),delete a[E]}function b(){throw new Error("Not implemented.")}function O(E){if(typeof E!="object"||E===null)return E;var C,v=Array.isArray(E)?[]:{};for(C in E)v[C]=O(E[C]);return v}function L(E,C){return function(){E.apply(C,arguments)}}function A(E){return typeof E=="function"}return c.parse=function(E,C){var v=(C=C||{}).dynamicTyping||!1;if(A(v)&&(C.dynamicTypingFunction=v,v={}),C.dynamicTyping=v,C.transform=!!A(C.transform)&&C.transform,!C.worker||!c.WORKERS_SUPPORTED)return v=null,c.NODE_STREAM_INPUT,typeof E=="string"?(E=(x=>x.charCodeAt(0)!==65279?x:x.slice(1))(E),v=new(C.download?d:p)(C)):E.readable===!0&&A(E.read)&&A(E.on)?v=new g(C):(i.File&&E instanceof File||E instanceof Object)&&(v=new f(C)),v.stream(E);(v=(()=>{var x;return!!c.WORKERS_SUPPORTED&&(x=(()=>{var P=i.URL||i.webkitURL||null,U=t.toString();return c.BLOB_URL||(c.BLOB_URL=P.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",U,")();"],{type:"text/javascript"})))})(),(x=new i.Worker(x)).onmessage=M,x.id=l++,a[x.id]=x)})()).userStep=C.step,v.userChunk=C.chunk,v.userComplete=C.complete,v.userError=C.error,C.step=A(C.step),C.chunk=A(C.chunk),C.complete=A(C.complete),C.error=A(C.error),delete C.worker,v.postMessage({input:E,config:C,workerId:v.id})},c.unparse=function(E,C){var v=!1,x=!0,P=",",U=`\r
`,k='"',H=k+k,G=!1,z=null,K=!1,Q=((()=>{if(typeof C=="object"){if(typeof C.delimiter!="string"||c.BAD_DELIMITERS.filter(function(pe){return C.delimiter.indexOf(pe)!==-1}).length||(P=C.delimiter),typeof C.quotes!="boolean"&&typeof C.quotes!="function"&&!Array.isArray(C.quotes)||(v=C.quotes),typeof C.skipEmptyLines!="boolean"&&typeof C.skipEmptyLines!="string"||(G=C.skipEmptyLines),typeof C.newline=="string"&&(U=C.newline),typeof C.quoteChar=="string"&&(k=C.quoteChar),typeof C.header=="boolean"&&(x=C.header),Array.isArray(C.columns)){if(C.columns.length===0)throw new Error("Option columns is empty");z=C.columns}C.escapeChar!==void 0&&(H=C.escapeChar+k),C.escapeFormulae instanceof RegExp?K=C.escapeFormulae:typeof C.escapeFormulae=="boolean"&&C.escapeFormulae&&(K=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(k),"g"));if(typeof E=="string"&&(E=JSON.parse(E)),Array.isArray(E)){if(!E.length||Array.isArray(E[0]))return ae(null,E,G);if(typeof E[0]=="object")return ae(z||Object.keys(E[0]),E,G)}else if(typeof E=="object")return typeof E.data=="string"&&(E.data=JSON.parse(E.data)),Array.isArray(E.data)&&(E.fields||(E.fields=E.meta&&E.meta.fields||z),E.fields||(E.fields=Array.isArray(E.data[0])?E.fields:typeof E.data[0]=="object"?Object.keys(E.data[0]):[]),Array.isArray(E.data[0])||typeof E.data[0]=="object"||(E.data=[E.data])),ae(E.fields||[],E.data||[],G);throw new Error("Unable to serialize unrecognized input");function ae(pe,se,ne){var le="",me=(typeof pe=="string"&&(pe=JSON.parse(pe)),typeof se=="string"&&(se=JSON.parse(se)),Array.isArray(pe)&&0<pe.length),he=!Array.isArray(se[0]);if(me&&x){for(var ye=0;ye<pe.length;ye++)0<ye&&(le+=P),le+=re(pe[ye],ye);0<se.length&&(le+=U)}for(var xe=0;xe<se.length;xe++){var Te=(me?pe:se[xe]).length,Re=!1,He=me?Object.keys(se[xe]).length===0:se[xe].length===0;if(ne&&!me&&(Re=ne==="greedy"?se[xe].join("").trim()==="":se[xe].length===1&&se[xe][0].length===0),ne==="greedy"&&me){for(var F=[],st=0;st<Te;st++){var Fe=he?pe[st]:st;F.push(se[xe][Fe])}Re=F.join("").trim()===""}if(!Re){for(var Ce=0;Ce<Te;Ce++){0<Ce&&!He&&(le+=P);var Ge=me&&he?pe[Ce]:Ce;le+=re(se[xe][Ge],Ce)}xe<se.length-1&&(!ne||0<Te&&!He)&&(le+=U)}}return le}function re(pe,se){var ne,le;return pe==null?"":pe.constructor===Date?JSON.stringify(pe).slice(1,25):(le=!1,K&&typeof pe=="string"&&K.test(pe)&&(pe="'"+pe,le=!0),ne=pe.toString().replace(Q,H),(le=le||v===!0||typeof v=="function"&&v(pe,se)||Array.isArray(v)&&v[se]||((me,he)=>{for(var ye=0;ye<he.length;ye++)if(-1<me.indexOf(he[ye]))return!0;return!1})(ne,c.BAD_DELIMITERS)||-1<ne.indexOf(P)||ne.charAt(0)===" "||ne.charAt(ne.length-1)===" ")?k+ne+k:ne)}},c.RECORD_SEP="",c.UNIT_SEP="",c.BYTE_ORDER_MARK="\uFEFF",c.BAD_DELIMITERS=["\r",`
`,'"',c.BYTE_ORDER_MARK],c.WORKERS_SUPPORTED=!s&&!!i.Worker,c.NODE_STREAM_INPUT=1,c.LocalChunkSize=10485760,c.RemoteChunkSize=5242880,c.DefaultDelimiter=",",c.Parser=m,c.ParserHandle=_,c.NetworkStreamer=d,c.FileStreamer=f,c.StringStreamer=p,c.ReadableStreamStreamer=g,i.jQuery&&((r=i.jQuery).fn.parse=function(E){var C=E.config||{},v=[];return this.each(function(U){if(!(r(this).prop("tagName").toUpperCase()==="INPUT"&&r(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var k=0;k<this.files.length;k++)v.push({file:this.files[k],inputElem:this,instanceConfig:r.extend({},C)})}),x(),this;function x(){if(v.length===0)A(E.complete)&&E.complete();else{var U,k,H,G,z=v[0];if(A(E.before)){var K=E.before(z.file,z.inputElem);if(typeof K=="object"){if(K.action==="abort")return U="AbortError",k=z.file,H=z.inputElem,G=K.reason,void(A(E.error)&&E.error({name:U},k,H,G));if(K.action==="skip")return void P();typeof K.config=="object"&&(z.instanceConfig=r.extend(z.instanceConfig,K.config))}else if(K==="skip")return void P()}var Q=z.instanceConfig.complete;z.instanceConfig.complete=function(ae){A(Q)&&Q(ae,z.file,z.inputElem),P()},c.parse(z.file,z.instanceConfig)}}function P(){v.splice(0,1),x()}}),o&&(i.onmessage=function(E){E=E.data,c.WORKER_ID===void 0&&E&&(c.WORKER_ID=E.workerId),typeof E.input=="string"?i.postMessage({workerId:c.WORKER_ID,results:c.parse(E.input,E.config),finished:!0}):(i.File&&E.input instanceof File||E.input instanceof Object)&&(E=c.parse(E.input,E.config))&&i.postMessage({workerId:c.WORKER_ID,results:E,finished:!0})}),(d.prototype=Object.create(u.prototype)).constructor=d,(f.prototype=Object.create(u.prototype)).constructor=f,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,c})})(Xv);var xE=Xv.exports;const yE=vE(xE);var SE=$e('<div class="w-full border rounded-lg overflow-hidden"></div>');function ME(n,e){Xt(e,!0);let t=Dt(e,"visibleSeries",19,()=>["oil","gas","water","pressure"]),i=Qe(void 0),r;const s={oil:{label:"Oil (m³/d)",stroke:"#22c55e",scale:"rate"},gas:{label:"Gas (m³/d)",stroke:"#f59e0b",scale:"rate"},water:{label:"Water (m³/d)",stroke:"#3b82f6",scale:"rate"},pressure:{label:"Pressure (bar)",stroke:"#ef4444",scale:"pressure"}};function o(){if(!B(i))return;const l=e.rows.map(d=>d.date),c=t().map(d=>e.rows.map(f=>f[d])),u={width:B(i).clientWidth||800,height:350,scales:{x:{time:!0},rate:{auto:!0},pressure:{auto:!0,side:1}},axes:[{label:"Date"},{scale:"rate",label:"Rate (m³/d)"},{scale:"pressure",label:"Pressure (bar)",side:1}],series:[{},...t().map(d=>({label:s[d].label,stroke:s[d].stroke,scale:s[d].scale,width:1.5,spanGaps:!1}))]};r==null||r.destroy(),r=new Bn(u,[l,...c],B(i))}di(o),ql(()=>r==null?void 0:r.destroy()),Bi(()=>{e.rows,o()});var a=SE();jl(a,l=>Ue(i,l),()=>B(i)),Le(n,a),Yt()}var bE=$e("<option> </option>"),EE=$e('<div class="flex justify-center py-12"><!></div>'),wE=$e('<!> <main class="p-6 max-w-5xl mx-auto"><div class="flex items-center gap-4 mb-4"><label class="text-sm font-medium">Well:</label> <select class="border rounded-md px-2 py-1 text-sm bg-background"></select></div> <!></main>',1);function TE(n,e){Xt(e,!0);let t=Qe(Vn([])),i=Qe(""),r=Qe(Vn([])),s=Qe(!1),o=Qe("");di(async()=>{try{Ue(t,await Ro(e.name,"production"),!0),B(t).length&&Ue(i,B(t)[0],!0)}catch(h){Ue(o,h instanceof Error?h.message:String(h),!0)}}),Bi(()=>{B(i)&&(Ue(s,!0),Ue(r,[],!0),fetch(Zl(e.name,"production",B(i)),{headers:{"X-API-Key":localStorage.getItem("reservoir_api_key")??""}}).then(h=>h.text()).then(h=>{const m=yE.parse(h,{header:!0,skipEmptyLines:!0});Ue(r,m.data.map(M=>({date:new Date(M.date).getTime()/1e3,oil:+M.oil_rate_m3d,gas:+M.gas_rate_m3d,water:+M.water_rate_m3d,pressure:+M.wellhead_pressure_bar,temperature:+M.temperature_c})),!0)}).catch(h=>{Ue(o,h.message,!0)}).finally(()=>{Ue(s,!1)}))});var a=wE(),l=kt(a);{let h=Vt(()=>[e.name,"Production"]);Ws(l,{get breadcrumb(){return B(h)}})}var c=lt(l,2),u=et(c),d=lt(et(u),2);ur(d,21,()=>B(t),cr,(h,m)=>{var M=bE(),S=et(M),b={};bt(O=>{Wt(S,O),b!==(b=B(m))&&(M.value=(M.__value=B(m))??"")},[()=>B(m).replace("_production.csv","")]),Le(h,M)});var f=lt(u,2);{var p=h=>{cs(h,{variant:"destructive",children:(m,M)=>{var S=Hi();bt(()=>Wt(S,B(o))),Le(m,S)},$$slots:{default:!0}})},g=h=>{var m=EE(),M=et(m);us(M,{class:"h-8 w-8"}),Le(h,m)},_=h=>{ME(h,{get rows(){return B(r)}})};Xn(f,h=>{B(o)?h(p):B(s)?h(g,1):B(r).length&&h(_,2)})}Nd(d,()=>B(i),h=>Ue(i,h)),Le(n,a),Yt()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="169",ya={ROTATE:0,DOLLY:1,PAN:2},ma={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AE=0,Vm=1,RE=2,Yv=1,CE=2,qr=3,zs=0,fi=1,Ar=2,Ns=0,Sa=1,Wm=2,Xm=3,Ym=4,PE=5,lo=100,LE=101,DE=102,IE=103,UE=104,NE=200,OE=201,FE=202,BE=203,Lh=204,Dh=205,kE=206,zE=207,HE=208,GE=209,VE=210,WE=211,XE=212,YE=213,qE=214,Ih=0,Uh=1,Nh=2,Na=3,Oh=4,Fh=5,Bh=6,kh=7,Qd=0,jE=1,KE=2,Os=0,ZE=1,JE=2,$E=3,QE=4,ew=5,tw=6,nw=7,qv=300,Oa=301,Fa=302,zh=303,Hh=304,Du=306,Gh=1e3,po=1001,Vh=1002,ai=1003,iw=1004,mc=1005,tr=1006,pf=1007,mo=1008,as=1009,jv=1010,Kv=1011,Ul=1012,ep=1013,Po=1014,es=1015,Jl=1016,tp=1017,np=1018,Ba=1020,Zv=35902,Jv=1021,$v=1022,rr=1023,ip=1024,Qv=1025,Ma=1026,ka=1027,e0=1028,rp=1029,t0=1030,sp=1031,op=1033,Kc=33776,Zc=33777,Jc=33778,$c=33779,Wh=35840,Xh=35841,Yh=35842,qh=35843,jh=36196,Kh=37492,Zh=37496,Jh=37808,$h=37809,Qh=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,Qc=36492,fd=36494,hd=36495,n0=36283,dd=36284,pd=36285,md=36286,rw=3200,sw=3201,i0=0,ow=1,Rs="",xr="srgb",Xs="srgb-linear",ap="display-p3",Iu="display-p3-linear",uu="linear",$t="srgb",fu="rec709",hu="p3",Jo=7680,qm=519,aw=512,lw=513,cw=514,r0=515,uw=516,fw=517,hw=518,dw=519,jm=35044,Km="300 es",ts=2e3,du=2001;class Fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,gd=180/Math.PI;function $l(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function On(n,e,t){return Math.max(e,Math.min(t,n))}function pw(n,e){return(n%e+e)%e}function mf(n,e,t){return(1-t)*n+t*e}function fl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const mw={DEG2RAD:eu};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(On(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,r,s,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],h=r[3],m=r[6],M=r[1],S=r[4],b=r[7],O=r[2],L=r[5],A=r[8];return s[0]=o*_+a*M+l*O,s[3]=o*h+a*S+l*L,s[6]=o*m+a*b+l*A,s[1]=c*_+u*M+d*O,s[4]=c*h+u*S+d*L,s[7]=c*m+u*b+d*A,s[2]=f*_+p*M+g*O,s[5]=f*h+p*S+g*L,s[8]=f*m+p*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gf=new pt;function s0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function gw(){const n=pu("canvas");return n.style.display="block",n}const Zm={};function tu(n){n in Zm||(Zm[n]=!0,console.warn(n))}function _w(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function vw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jm=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$m=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hl={[Xs]:{transfer:uu,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[xr]:{transfer:$t,primaries:fu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Iu]:{transfer:uu,primaries:hu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($m),fromReference:n=>n.applyMatrix3(Jm)},[ap]:{transfer:$t,primaries:hu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($m),fromReference:n=>n.applyMatrix3(Jm).convertLinearToSRGB()}},yw=new Set([Xs,Iu]),Ut={enabled:!0,_workingColorSpace:Xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yw.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=hl[e].toReference,r=hl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return hl[n].primaries},getTransfer:function(n){return n===Rs?uu:hl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(hl[e].luminanceCoefficients)}};function ba(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _f(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $o;class Sw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$o===void 0&&($o=pu("canvas")),$o.width=e.width,$o.height=e.height;const i=$o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$o}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ba(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ba(t[i]/255)*255):t[i]=ba(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mw=0;class o0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=$l(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vf(r[o].image)):s.push(vf(r[o]))}else s=vf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bw=0;class Qn extends Fo{constructor(e=Qn.DEFAULT_IMAGE,t=Qn.DEFAULT_MAPPING,i=po,r=po,s=tr,o=mo,a=rr,l=as,c=Qn.DEFAULT_ANISOTROPY,u=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=$l(),this.name="",this.source=new o0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gh:e.x=e.x-Math.floor(e.x);break;case po:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gh:e.y=e.y-Math.floor(e.y);break;case po:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=qv;Qn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,r=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],h=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+h)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,O=(m+1)/2,L=(u+f)/4,A=(d+_)/4,E=(g+h)/4;return S>b&&S>O?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=L/i,s=A/i):b>O?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=E/r):O<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(O),i=A/s,r=E/s),this.set(i,r,s,t),this}let M=Math.sqrt((h-g)*(h-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(h-g)/M,this.y=(d-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ew extends Fo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new o0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends Ew{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class a0 extends Qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ww extends Qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=po,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let h=1-a;const m=l*f+c*p+u*g+d*_,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const O=Math.sqrt(S),L=Math.atan2(O,m*M);h=Math.sin(h*L)/O,a=Math.sin(a*L)/O}const b=a*M;if(l=l*h+f*b,c=c*h+p*b,u=u*h+g*b,d=d*h+_*b,h===1-a){const O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(On(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xf=new j,Qm=new Do;class Ql{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),_c.subVectors(this.max,dl),Qo.subVectors(e.a,dl),ea.subVectors(e.b,dl),ta.subVectors(e.c,dl),ys.subVectors(ea,Qo),Ss.subVectors(ta,ea),$s.subVectors(Qo,ta);let t=[0,-ys.z,ys.y,0,-Ss.z,Ss.y,0,-$s.z,$s.y,ys.z,0,-ys.x,Ss.z,0,-Ss.x,$s.z,0,-$s.x,-ys.y,ys.x,0,-Ss.y,Ss.x,0,-$s.y,$s.x,0];return!yf(t,Qo,ea,ta,_c)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Qo,ea,ta,_c))?!1:(vc.crossVectors(ys,Ss),t=[vc.x,vc.y,vc.z],yf(t,Qo,ea,ta,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gr=[new j,new j,new j,new j,new j,new j,new j,new j],Yi=new j,gc=new Ql,Qo=new j,ea=new j,ta=new j,ys=new j,Ss=new j,$s=new j,dl=new j,_c=new j,vc=new j,Qs=new j;function yf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Qs.fromArray(n,s);const a=r.x*Math.abs(Qs.x)+r.y*Math.abs(Qs.y)+r.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),u=i.dot(Qs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Tw=new Ql,pl=new j,Sf=new j;class Uu{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const t=pl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Sf)),this.expandByPoint(pl.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vr=new j,Mf=new j,xc=new j,Ms=new j,bf=new j,yc=new j,Ef=new j;class lp{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mf.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(Mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=Ms.dot(this.direction),l=-Ms.dot(xc),c=Ms.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mf).addScaledVector(xc,f),p}intersectSphere(e,t){Vr.subVectors(e.center,this.origin);const i=Vr.dot(this.direction),r=Vr.dot(Vr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,i,r,s){bf.subVectors(t,e),yc.subVectors(i,e),Ef.crossVectors(bf,yc);let o=this.direction.dot(Ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);const l=a*this.direction.dot(yc.crossVectors(Ms,yc));if(l<0)return null;const c=a*this.direction.dot(bf.cross(Ms));if(c<0||l+c>o)return null;const u=-a*Ms.dot(Ef);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,h){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,h)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),o=1/na.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Aw,e,Rw)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),bs.crossVectors(i,vi),bs.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),bs.crossVectors(i,vi)),bs.normalize(),Sc.crossVectors(vi,bs),r[0]=bs.x,r[4]=Sc.x,r[8]=vi.x,r[1]=bs.y,r[5]=Sc.y,r[9]=vi.y,r[2]=bs.z,r[6]=Sc.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],h=i[10],m=i[14],M=i[3],S=i[7],b=i[11],O=i[15],L=r[0],A=r[4],E=r[8],C=r[12],v=r[1],x=r[5],P=r[9],U=r[13],k=r[2],H=r[6],G=r[10],z=r[14],K=r[3],Q=r[7],ae=r[11],re=r[15];return s[0]=o*L+a*v+l*k+c*K,s[4]=o*A+a*x+l*H+c*Q,s[8]=o*E+a*P+l*G+c*ae,s[12]=o*C+a*U+l*z+c*re,s[1]=u*L+d*v+f*k+p*K,s[5]=u*A+d*x+f*H+p*Q,s[9]=u*E+d*P+f*G+p*ae,s[13]=u*C+d*U+f*z+p*re,s[2]=g*L+_*v+h*k+m*K,s[6]=g*A+_*x+h*H+m*Q,s[10]=g*E+_*P+h*G+m*ae,s[14]=g*C+_*U+h*z+m*re,s[3]=M*L+S*v+b*k+O*K,s[7]=M*A+S*x+b*H+O*Q,s[11]=M*E+S*P+b*G+O*ae,s[15]=M*C+S*U+b*z+O*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],h=e[11],m=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+h*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+m*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],h=e[14],m=e[15],M=d*h*c-_*f*c+_*l*p-a*h*p-d*l*m+a*f*m,S=g*f*c-u*h*c-g*l*p+o*h*p+u*l*m-o*f*m,b=u*_*c-g*d*c+g*a*p-o*_*p-u*a*m+o*d*m,O=g*d*l-u*_*l-g*a*f+o*_*f+u*a*h-o*d*h,L=t*M+i*S+r*b+s*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=M*A,e[1]=(_*f*s-d*h*s-_*r*p+i*h*p+d*r*m-i*f*m)*A,e[2]=(a*h*s-_*l*s+_*r*c-i*h*c-a*r*m+i*l*m)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=S*A,e[5]=(u*h*s-g*f*s+g*r*p-t*h*p-u*r*m+t*f*m)*A,e[6]=(g*l*s-o*h*s-g*r*c+t*h*c+o*r*m-t*l*m)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=b*A,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*m-t*d*m)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*m+t*a*m)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*A,e[12]=O*A,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*h+t*d*h)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*h-t*a*h)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,h=o*d,m=a*d,M=l*c,S=l*u,b=l*d,O=i.x,L=i.y,A=i.z;return r[0]=(1-(_+m))*O,r[1]=(p+b)*O,r[2]=(g-S)*O,r[3]=0,r[4]=(p-b)*L,r[5]=(1-(f+m))*L,r[6]=(h+M)*L,r[7]=0,r[8]=(g+S)*A,r[9]=(h-M)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=na.set(r[0],r[1],r[2]).length();const o=na.set(r[4],r[5],r[6]).length(),a=na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qi.copy(this);const c=1/s,u=1/o,d=1/a;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=d,qi.elements[9]*=d,qi.elements[10]*=d,t.setFromRotationMatrix(qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ts){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===ts)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===du)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ts){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,_;if(a===ts)g=(o+s)*d,_=-2*d;else if(a===du)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const na=new j,qi=new an,Aw=new j(0,0,0),Rw=new j(1,1,1),bs=new j,Sc=new j,vi=new j,eg=new an,tg=new Do;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(On(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-On(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(On(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(On(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-On(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class l0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cw=0;const ng=new j,ia=new Do,Wr=new an,Mc=new j,ml=new j,Pw=new j,Lw=new Do,ig=new j(1,0,0),rg=new j(0,1,0),sg=new j(0,0,1),og={type:"added"},Dw={type:"removed"},ra={type:"childadded",child:null},wf={type:"childremoved",child:null};class ei extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=$l(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new j,t=new Ur,i=new Do,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new an},normalMatrix:{value:new pt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mc.copy(e):Mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(ml,Mc,this.up):Wr.lookAt(Mc,ml,this.up),this.quaternion.setFromRotationMatrix(Wr),r&&(Wr.extractRotation(r.matrixWorld),ia.setFromRotationMatrix(Wr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dw),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,Pw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,Lw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ei.DEFAULT_UP=new j(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new j,Xr=new j,Tf=new j,Yr=new j,sa=new j,oa=new j,ag=new j,Af=new j,Rf=new j,Cf=new j,Pf=new cn,Lf=new cn,Df=new cn;class nr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Xr.subVectors(i,t),Tf.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Xr),l=ji.dot(Tf),c=Xr.dot(Xr),u=Xr.dot(Tf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yr)===null?!1:Yr.x>=0&&Yr.y>=0&&Yr.x+Yr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Yr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yr.x),l.addScaledVector(o,Yr.y),l.addScaledVector(a,Yr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Pf.setScalar(0),Lf.setScalar(0),Df.setScalar(0),Pf.fromBufferAttribute(e,t),Lf.fromBufferAttribute(e,i),Df.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pf,s.x),o.addScaledVector(Lf,s.y),o.addScaledVector(Df,s.z),o}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Xr.subVectors(e,t),ji.cross(Xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),ji.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;sa.subVectors(r,i),oa.subVectors(s,i),Af.subVectors(e,i);const l=sa.dot(Af),c=oa.dot(Af);if(l<=0&&c<=0)return t.copy(i);Rf.subVectors(e,r);const u=sa.dot(Rf),d=oa.dot(Rf);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(sa,o);Cf.subVectors(e,s);const p=sa.dot(Cf),g=oa.dot(Cf);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(oa,a);const h=u*g-p*d;if(h<=0&&d-u>=0&&p-g>=0)return ag.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(ag,a);const m=1/(h+_+f);return o=_*m,a=f*m,t.copy(i).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},bc={h:0,s:0,l:0};function If(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ut.workingColorSpace){if(e=pw(e,1),t=On(t,0,1),i=On(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=If(o,s,e+1/3),this.g=If(o,s,e),this.b=If(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,t=xr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xr){const i=c0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=_f(e.r),this.g=_f(e.g),this.b=_f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xr){return Ut.fromWorkingColorSpace(Gn.copy(this),e),Math.round(On(Gn.r*255,0,255))*65536+Math.round(On(Gn.g*255,0,255))*256+Math.round(On(Gn.b*255,0,255))}getHexString(e=xr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Gn.copy(this),t);const i=Gn.r,r=Gn.g,s=Gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=xr){Ut.fromWorkingColorSpace(Gn.copy(this),e);const t=Gn.r,i=Gn.g,r=Gn.b;return e!==xr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(bc);const i=mf(Es.h,bc.h,t),r=mf(Es.s,bc.s,t),s=mf(Es.l,bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new vt;vt.NAMES=c0;let Iw=0;class Za extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=$l(),this.name="",this.type="Material",this.blending=Sa,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sa&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lh&&(i.blendSrc=this.blendSrc),this.blendDst!==Dh&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cp extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new j,Ec=new Je;class Lr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jm,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fl(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fl(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fl(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array),s=ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jm&&(e.usage=this.usage),e}}class u0 extends Lr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class f0 extends Lr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Lr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Uw=0;const Li=new an,Uf=new ei,aa=new j,xi=new Ql,gl=new Ql,Rn=new j;class fr extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=$l(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?f0:u0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gl.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(xi.min,gl.min),xi.expandByPoint(Rn),Rn.addVectors(xi.max,gl.max),xi.expandByPoint(Rn)):(xi.expandByPoint(gl.min),xi.expandByPoint(gl.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rn.fromBufferAttribute(a,c),l&&(aa.fromBufferAttribute(e,c),Rn.add(aa)),r=Math.max(r,i.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new j,l[E]=new j;const c=new j,u=new j,d=new j,f=new Je,p=new Je,g=new Je,_=new j,h=new j;function m(E,C,v){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,v),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const x=1/(p.x*g.y-g.x*p.y);isFinite(x)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(x),h.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(x),a[E].add(_),a[C].add(_),a[v].add(_),l[E].add(h),l[C].add(h),l[v].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let E=0,C=M.length;E<C;++E){const v=M[E],x=v.start,P=v.count;for(let U=x,k=x+P;U<k;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new j,b=new j,O=new j,L=new j;function A(E){O.fromBufferAttribute(r,E),L.copy(O);const C=a[E];S.copy(C),S.sub(O.multiplyScalar(O.dot(C))).normalize(),b.crossVectors(L,C);const x=b.dot(l[E])<0?-1:1;o.setXYZW(E,S.x,S.y,S.z,x)}for(let E=0,C=M.length;E<C;++E){const v=M[E],x=v.start,P=v.count;for(let U=x,k=x+P;U<k;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,h),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,h),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[p++]}return new Lr(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new an,eo=new lp,wc=new Uu,cg=new j,Tc=new j,Ac=new j,Rc=new j,Nf=new j,Cc=new j,ug=new j,Pc=new j;class sr extends ei{constructor(e=new fr,t=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Nf.fromBufferAttribute(d,e),o?Cc.addScaledVector(Nf,u):Cc.addScaledVector(Nf.sub(t),u))}t.add(Cc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),eo.copy(e.ray).recast(e.near),!(wc.containsPoint(eo.origin)===!1&&(eo.intersectSphere(wc,cg)===null||eo.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(s).invert(),eo.copy(e.ray).applyMatrix4(lg),!(i.boundingBox!==null&&eo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,eo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const h=f[g],m=o[h.materialIndex],M=Math.max(h.start,p.start),S=Math.min(a.count,Math.min(h.start+h.count,p.start+p.count));for(let b=M,O=S;b<O;b+=3){const L=a.getX(b),A=a.getX(b+1),E=a.getX(b+2);r=Lc(this,m,e,i,c,u,d,L,A,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let h=g,m=_;h<m;h+=3){const M=a.getX(h),S=a.getX(h+1),b=a.getX(h+2);r=Lc(this,o,e,i,c,u,d,M,S,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const h=f[g],m=o[h.materialIndex],M=Math.max(h.start,p.start),S=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let b=M,O=S;b<O;b+=3){const L=b,A=b+1,E=b+2;r=Lc(this,m,e,i,c,u,d,L,A,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let h=g,m=_;h<m;h+=3){const M=h,S=h+1,b=h+2;r=Lc(this,o,e,i,c,u,d,M,S,b),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Nw(n,e,t,i,r,s,o,a){let l;if(e.side===fi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pc);return c<t.near||c>t.far?null:{distance:c,point:Pc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Tc),n.getVertexPosition(l,Ac),n.getVertexPosition(c,Rc);const u=Nw(n,e,t,i,Tc,Ac,Rc,ug);if(u){const d=new j;nr.getBarycoord(ug,Tc,Ac,Rc,d),r&&(u.uv=nr.getInterpolatedAttribute(r,a,l,c,d,new Je)),s&&(u.uv1=nr.getInterpolatedAttribute(s,a,l,c,d,new Je)),o&&(u.normal=nr.getInterpolatedAttribute(o,a,l,c,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new j,materialIndex:0};nr.getNormal(Tc,Ac,Rc,f.normal),u.face=f,u.barycoord=d}return u}class ec extends fr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(d,2));function g(_,h,m,M,S,b,O,L,A,E,C){const v=b/A,x=O/E,P=b/2,U=O/2,k=L/2,H=A+1,G=E+1;let z=0,K=0;const Q=new j;for(let ae=0;ae<G;ae++){const re=ae*x-U;for(let pe=0;pe<H;pe++){const se=pe*v-P;Q[_]=se*M,Q[h]=re*S,Q[m]=k,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[h]=0,Q[m]=L>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(pe/A),d.push(1-ae/E),z+=1}}for(let ae=0;ae<E;ae++)for(let re=0;re<A;re++){const pe=f+re+H*ae,se=f+re+H*(ae+1),ne=f+(re+1)+H*(ae+1),le=f+(re+1)+H*ae;l.push(pe,se,le),l.push(se,ne,le),K+=6}a.addGroup(p,K,C),p+=K,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jn(n){const e={};for(let t=0;t<n.length;t++){const i=za(n[t]);for(const r in i)e[r]=i[r]}return e}function Ow(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function h0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Fw={clone:za,merge:Jn};var Bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hs extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bw,this.fragmentShader=kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=Ow(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class d0 extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ts}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new j,fg=new Je,hg=new Je;class wi extends d0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gd*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,t){return this.getViewBounds(e,fg,hg),t.subVectors(hg,fg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ca=1;class zw extends ei{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wi(la,ca,e,t);r.layers=this.layers,this.add(r);const s=new wi(la,ca,e,t);s.layers=this.layers,this.add(s);const o=new wi(la,ca,e,t);o.layers=this.layers,this.add(o);const a=new wi(la,ca,e,t);a.layers=this.layers,this.add(a);const l=new wi(la,ca,e,t);l.layers=this.layers,this.add(l);const c=new wi(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===ts)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class p0 extends Qn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Oa,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hw extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ec(5,5,5),s=new Hs({name:"CubemapFromEquirect",uniforms:za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:Ns});s.uniforms.tEquirect.value=t;const o=new sr(r,s),a=t.minFilter;return t.minFilter===mo&&(t.minFilter=tr),new zw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Of=new j,Gw=new j,Vw=new pt;class As{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Of.subVectors(i,t).cross(Gw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vw.getNormalMatrix(e),r=this.coplanarPoint(Of).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new Uu,Dc=new j;class m0{constructor(e=new As,t=new As,i=new As,r=new As,s=new As,o=new As){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ts){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],h=r[11],m=r[12],M=r[13],S=r[14],b=r[15];if(i[0].setComponents(l-s,f-c,h-p,b-m).normalize(),i[1].setComponents(l+s,f+c,h+p,b+m).normalize(),i[2].setComponents(l+o,f+u,h+g,b+M).normalize(),i[3].setComponents(l-o,f-u,h-g,b-M).normalize(),i[4].setComponents(l-a,f-d,h-_,b-S).normalize(),t===ts)i[5].setComponents(l+a,f+d,h+_,b+S).normalize();else if(t===du)i[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),to.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(to)}intersectsSprite(e){return to.center.set(0,0,0),to.radius=.7071067811865476,to.applyMatrix4(e.matrixWorld),this.intersectsSphere(to)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ww(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class tc extends fr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],_=[],h=[];for(let m=0;m<u;m++){const M=m*f-o;for(let S=0;S<c;S++){const b=S*d-s;g.push(b,-M,0),_.push(0,0,1),h.push(S/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const S=M+c*m,b=M+c*(m+1),O=M+1+c*(m+1),L=M+1+c*m;p.push(S,b,L),p.push(b,O,L)}this.setIndex(p),this.setAttribute("position",new Wn(g,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ST="gl_FragColor = linearToOutputTexel( gl_FragColor );",MT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Xw,alphahash_pars_fragment:Yw,alphamap_fragment:qw,alphamap_pars_fragment:jw,alphatest_fragment:Kw,alphatest_pars_fragment:Zw,aomap_fragment:Jw,aomap_pars_fragment:$w,batching_pars_vertex:Qw,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:rT,bumpmap_pars_fragment:sT,clipping_planes_fragment:oT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:hT,color_vertex:dT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:_T,displacementmap_vertex:vT,emissivemap_fragment:xT,emissivemap_pars_fragment:yT,colorspace_fragment:ST,colorspace_pars_fragment:MT,envmap_fragment:bT,envmap_common_pars_fragment:ET,envmap_pars_fragment:wT,envmap_pars_vertex:TT,envmap_physical_pars_fragment:FT,envmap_vertex:AT,fog_vertex:RT,fog_pars_vertex:CT,fog_fragment:PT,fog_pars_fragment:LT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:IT,lights_lambert_fragment:UT,lights_lambert_pars_fragment:NT,lights_pars_begin:OT,lights_toon_fragment:BT,lights_toon_pars_fragment:kT,lights_phong_fragment:zT,lights_phong_pars_fragment:HT,lights_physical_fragment:GT,lights_physical_pars_fragment:VT,lights_fragment_begin:WT,lights_fragment_maps:XT,lights_fragment_end:YT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:ZT,map_fragment:JT,map_pars_fragment:$T,map_particle_fragment:QT,map_particle_pars_fragment:eA,metalnessmap_fragment:tA,metalnessmap_pars_fragment:nA,morphinstance_vertex:iA,morphcolor_vertex:rA,morphnormal_vertex:sA,morphtarget_pars_vertex:oA,morphtarget_vertex:aA,normal_fragment_begin:lA,normal_fragment_maps:cA,normal_pars_fragment:uA,normal_pars_vertex:fA,normal_vertex:hA,normalmap_pars_fragment:dA,clearcoat_normal_fragment_begin:pA,clearcoat_normal_fragment_maps:mA,clearcoat_pars_fragment:gA,iridescence_pars_fragment:_A,opaque_fragment:vA,packing:xA,premultiplied_alpha_fragment:yA,project_vertex:SA,dithering_fragment:MA,dithering_pars_fragment:bA,roughnessmap_fragment:EA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:TA,shadowmap_pars_vertex:AA,shadowmap_vertex:RA,shadowmask_pars_fragment:CA,skinbase_vertex:PA,skinning_pars_vertex:LA,skinning_vertex:DA,skinnormal_vertex:IA,specularmap_fragment:UA,specularmap_pars_fragment:NA,tonemapping_fragment:OA,tonemapping_pars_fragment:FA,transmission_fragment:BA,transmission_pars_fragment:kA,uv_pars_fragment:zA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:VA,background_vert:WA,background_frag:XA,backgroundCube_vert:YA,backgroundCube_frag:qA,cube_vert:jA,cube_frag:KA,depth_vert:ZA,depth_frag:JA,distanceRGBA_vert:$A,distanceRGBA_frag:QA,equirect_vert:e1,equirect_frag:t1,linedashed_vert:n1,linedashed_frag:i1,meshbasic_vert:r1,meshbasic_frag:s1,meshlambert_vert:o1,meshlambert_frag:a1,meshmatcap_vert:l1,meshmatcap_frag:c1,meshnormal_vert:u1,meshnormal_frag:f1,meshphong_vert:h1,meshphong_frag:d1,meshphysical_vert:p1,meshphysical_frag:m1,meshtoon_vert:g1,meshtoon_frag:_1,points_vert:v1,points_frag:x1,shadow_vert:y1,shadow_frag:S1,sprite_vert:M1,sprite_frag:b1},Ie={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},wr={basic:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Jn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Jn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Jn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new vt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Jn([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Jn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Jn([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Jn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Jn([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Jn([Ie.common,Ie.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Jn([Ie.lights,Ie.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};wr.physical={uniforms:Jn([wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ic={r:0,b:0,g:0},no=new Ur,E1=new an;function w1(n,e,t,i,r,s,o){const a=new vt(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function _(M){let S=!1;const b=g(M);b===null?m(a,l):b&&b.isColor&&(m(b,1),S=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(M,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===Du)?(u===void 0&&(u=new sr(new ec(1,1,1),new Hs({name:"BackgroundCubeMaterial",uniforms:za(wr.backgroundCube.uniforms),vertexShader:wr.backgroundCube.vertexShader,fragmentShader:wr.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),no.copy(S.backgroundRotation),no.x*=-1,no.y*=-1,no.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(no.y*=-1,no.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(no)),u.material.toneMapped=Ut.getTransfer(b.colorSpace)!==$t,(d!==b||f!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,p=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new sr(new tc(2,2),new Hs({name:"BackgroundMaterial",uniforms:za(wr.background.uniforms),vertexShader:wr.background.vertexShader,fragmentShader:wr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,p=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(Ic,h0(n)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:h}}function T1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(v,x,P,U,k){let H=!1;const G=d(U,P,x);s!==G&&(s=G,c(s.object)),H=p(v,U,P,k),H&&g(v,U,P,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,b(v,x,P,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,x,P){const U=P.wireframe===!0;let k=i[v.id];k===void 0&&(k={},i[v.id]=k);let H=k[x.id];H===void 0&&(H={},k[x.id]=H);let G=H[U];return G===void 0&&(G=f(l()),H[U]=G),G}function f(v){const x=[],P=[],U=[];for(let k=0;k<t;k++)x[k]=0,P[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:P,attributeDivisors:U,object:v,attributes:{},index:null}}function p(v,x,P,U){const k=s.attributes,H=x.attributes;let G=0;const z=P.getAttributes();for(const K in z)if(z[K].location>=0){const ae=k[K];let re=H[K];if(re===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(v,x,P,U){const k={},H=x.attributes;let G=0;const z=P.getAttributes();for(const K in z)if(z[K].location>=0){let ae=H[K];ae===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),k[K]=re,G++}s.attributes=k,s.attributesNum=G,s.index=U}function _(){const v=s.newAttributes;for(let x=0,P=v.length;x<P;x++)v[x]=0}function h(v){m(v,0)}function m(v,x){const P=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;P[v]=1,U[v]===0&&(n.enableVertexAttribArray(v),U[v]=1),k[v]!==x&&(n.vertexAttribDivisor(v,x),k[v]=x)}function M(){const v=s.newAttributes,x=s.enabledAttributes;for(let P=0,U=x.length;P<U;P++)x[P]!==v[P]&&(n.disableVertexAttribArray(P),x[P]=0)}function S(v,x,P,U,k,H,G){G===!0?n.vertexAttribIPointer(v,x,P,k,H):n.vertexAttribPointer(v,x,P,U,k,H)}function b(v,x,P,U){_();const k=U.attributes,H=P.getAttributes(),G=x.defaultAttributeValues;for(const z in H){const K=H[z];if(K.location>=0){let Q=k[z];if(Q===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const ae=Q.normalized,re=Q.itemSize,pe=e.get(Q);if(pe===void 0)continue;const se=pe.buffer,ne=pe.type,le=pe.bytesPerElement,me=ne===n.INT||ne===n.UNSIGNED_INT||Q.gpuType===ep;if(Q.isInterleavedBufferAttribute){const he=Q.data,ye=he.stride,xe=Q.offset;if(he.isInstancedInterleavedBuffer){for(let Te=0;Te<K.locationSize;Te++)m(K.location+Te,he.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Te=0;Te<K.locationSize;Te++)h(K.location+Te);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Te=0;Te<K.locationSize;Te++)S(K.location+Te,re/K.locationSize,ne,ae,ye*le,(xe+re/K.locationSize*Te)*le,me)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)m(K.location+he,Q.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<K.locationSize;he++)h(K.location+he);n.bindBuffer(n.ARRAY_BUFFER,se);for(let he=0;he<K.locationSize;he++)S(K.location+he,re/K.locationSize,ne,ae,re*le,re/K.locationSize*he*le,me)}}else if(G!==void 0){const ae=G[z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(K.location,ae);break;case 3:n.vertexAttrib3fv(K.location,ae);break;case 4:n.vertexAttrib4fv(K.location,ae);break;default:n.vertexAttrib1fv(K.location,ae)}}}}M()}function O(){E();for(const v in i){const x=i[v];for(const P in x){const U=x[P];for(const k in U)u(U[k].object),delete U[k];delete x[P]}delete i[v]}}function L(v){if(i[v.id]===void 0)return;const x=i[v.id];for(const P in x){const U=x[P];for(const k in U)u(U[k].object),delete U[k];delete x[P]}delete i[v.id]}function A(v){for(const x in i){const P=i[x];if(P[v.id]===void 0)continue;const U=P[v.id];for(const k in U)u(U[k].object),delete U[k];delete P[v.id]}}function E(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:h,disableUnusedAttributes:M}}function A1(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==rr&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===Jl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==as&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==es&&!E)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:O,maxSamples:L}}function C1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new As,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,h=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const M=s?0:i,S=M*4;let b=m.clippingState||null;l.value=b,b=u(g,f,S,p);for(let O=0;O!==S;++O)b[O]=t[O];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const m=p+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<m)&&(h=new Float32Array(m));for(let S=0,b=p;S!==_;++S,b+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(h,b),h[b+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function P1(n){let e=new WeakMap;function t(o,a){return a===zh?o.mapping=Oa:a===Hh&&(o.mapping=Fa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class L1 extends d0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ga=4,dg=[.125,.215,.35,.446,.526,.582],co=20,Ff=new L1,pg=new vt;let Bf=null,kf=0,zf=0,Hf=!1;const oo=(1+Math.sqrt(5))/2,ua=1/oo,mg=[new j(-oo,ua,0),new j(oo,ua,0),new j(-ua,0,oo),new j(ua,0,oo),new j(0,oo,-ua),new j(0,oo,ua),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,kf,zf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,Uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oa||e.mapping===Fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tr,minFilter:tr,generateMipmaps:!1,type:Jl,format:rr,colorSpace:Xs,depthBuffer:!1},r=_g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(s)),this._blurMaterial=I1(s,e,t)}return r}_compileMaterial(e){const t=new sr(this._lodPlanes[0],e);this._renderer.compile(t,Ff)}_sceneToCubeUV(e,t,i,r){const a=new wi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pg),u.toneMapping=Os,u.autoClear=!1;const p=new cp({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1}),g=new sr(new ec,p);let _=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,_=!0):(p.color.copy(pg),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const S=this._cubeSize;Uc(r,M*S,m>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oa||e.mapping===Fa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ff)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mg[(r-s-1)%mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sr(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*co-1),_=s/g,h=isFinite(s)?1+Math.floor(u*_):co;h>co&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${co}`);const m=[];let M=0;for(let A=0;A<co;++A){const E=A/_,C=Math.exp(-E*E/2);m.push(C),A===0?M+=C:A<h&&(M+=2*C)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const b=this._sizeLods[r],O=3*b*(r>S-ga?r-S+ga:0),L=4*(this._cubeSize-b);Uc(t,O,L,3*b,2*b),l.setRenderTarget(t),l.render(d,Ff)}}function D1(n){const e=[],t=[],i=[];let r=n;const s=n-ga+1+dg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ga?l=dg[o-n+ga-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,h=2,m=1,M=new Float32Array(_*g*p),S=new Float32Array(h*g*p),b=new Float32Array(m*g*p);for(let L=0;L<p;L++){const A=L%3*2/3-1,E=L>2?0:-1,C=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];M.set(C,_*g*L),S.set(f,h*g*L);const v=[L,L,L,L,L,L];b.set(v,m*g*L)}const O=new fr;O.setAttribute("position",new Lr(M,_)),O.setAttribute("uv",new Lr(S,h)),O.setAttribute("faceIndex",new Lr(b,m)),e.push(O),r>ga&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _g(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=Du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function I1(n,e,t){const i=new Float32Array(co),r=new j(0,1,0);return new Hs({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function vg(){return new Hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function xg(){return new Hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zh||l===Hh,u=l===Oa||l===Fa;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gg(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new gg(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function N1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&tu("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function O1(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let h=0,m=_.length;h<m;h++)e.remove(_[h])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let h=0,m=_.length;h<m;h++)e.update(_[h],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let S=0,b=M.length;S<b;S+=3){const O=M[S+0],L=M[S+1],A=M[S+2];f.push(O,L,L,A,A,O)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,b=M.length/3-1;S<b;S+=3){const O=S+0,L=S+1,A=S+2;f.push(O,L,L,A,A,O)}}else return;const h=new(s0(f)?f0:u0)(f,1);h.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,h)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function F1(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let h=0;for(let m=0;m<g;m++)h+=p[m];t.update(h,i,1)}function d(f,p,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],_[m]);else{h.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=p[M];for(let M=0;M<_.length;M++)t.update(m,i,_[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function B1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function k1(n,e,t){const i=new WeakMap,r=new cn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let v=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),h===!0&&(b=3);let O=a.attributes.position.count*b,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const A=new Float32Array(O*L*4*d),E=new a0(A,O,L,d);E.type=es,E.needsUpdate=!0;const C=b*4;for(let x=0;x<d;x++){const P=m[x],U=M[x],k=S[x],H=O*L*4*x;for(let G=0;G<P.count;G++){const z=G*C;g===!0&&(r.fromBufferAttribute(P,G),A[H+z+0]=r.x,A[H+z+1]=r.y,A[H+z+2]=r.z,A[H+z+3]=0),_===!0&&(r.fromBufferAttribute(U,G),A[H+z+4]=r.x,A[H+z+5]=r.y,A[H+z+6]=r.z,A[H+z+7]=0),h===!0&&(r.fromBufferAttribute(k,G),A[H+z+8]=r.x,A[H+z+9]=r.y,A[H+z+10]=r.z,A[H+z+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:E,size:new Je(O,L)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function z1(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class _0 extends Qn{constructor(e,t,i,r,s,o,a,l,c,u=Ma){if(u!==Ma&&u!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ma&&(i=Po),i===void 0&&u===ka&&(i=Ba),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const v0=new Qn,yg=new _0(1,1),x0=new a0,y0=new ww,S0=new p0,Sg=[],Mg=[],bg=new Float32Array(16),Eg=new Float32Array(9),wg=new Float32Array(4);function Ja(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sg[r];if(s===void 0&&(s=new Float32Array(r),Sg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nu(n,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2fv(this.addr,e),Mn(t,e)}}function V1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;n.uniform3fv(this.addr,e),Mn(t,e)}}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4fv(this.addr,e),Mn(t,e)}}function X1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;wg.set(i),n.uniformMatrix2fv(this.addr,!1,wg),Mn(t,i)}}function Y1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;Eg.set(i),n.uniformMatrix3fv(this.addr,!1,Eg),Mn(t,i)}}function q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;bg.set(i),n.uniformMatrix4fv(this.addr,!1,bg),Mn(t,i)}}function j1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2iv(this.addr,e),Mn(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3iv(this.addr,e),Mn(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4iv(this.addr,e),Mn(t,e)}}function $1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;n.uniform2uiv(this.addr,e),Mn(t,e)}}function eR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;n.uniform3uiv(this.addr,e),Mn(t,e)}}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;n.uniform4uiv(this.addr,e),Mn(t,e)}}function nR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yg.compareFunction=r0,s=yg):s=v0,t.setTexture2D(e||s,r)}function iR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||y0,r)}function rR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||S0,r)}function sR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||x0,r)}function oR(n){switch(n){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return W1;case 35674:return X1;case 35675:return Y1;case 35676:return q1;case 5124:case 35670:return j1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return Q1;case 36295:return eR;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return sR}}function aR(n,e){n.uniform1fv(this.addr,e)}function lR(n,e){const t=Ja(e,this.size,2);n.uniform2fv(this.addr,t)}function cR(n,e){const t=Ja(e,this.size,3);n.uniform3fv(this.addr,t)}function uR(n,e){const t=Ja(e,this.size,4);n.uniform4fv(this.addr,t)}function fR(n,e){const t=Ja(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hR(n,e){const t=Ja(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dR(n,e){const t=Ja(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pR(n,e){n.uniform1iv(this.addr,e)}function mR(n,e){n.uniform2iv(this.addr,e)}function gR(n,e){n.uniform3iv(this.addr,e)}function _R(n,e){n.uniform4iv(this.addr,e)}function vR(n,e){n.uniform1uiv(this.addr,e)}function xR(n,e){n.uniform2uiv(this.addr,e)}function yR(n,e){n.uniform3uiv(this.addr,e)}function SR(n,e){n.uniform4uiv(this.addr,e)}function MR(n,e,t){const i=this.cache,r=e.length,s=Nu(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),Mn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||v0,s[o])}function bR(n,e,t){const i=this.cache,r=e.length,s=Nu(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),Mn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||y0,s[o])}function ER(n,e,t){const i=this.cache,r=e.length,s=Nu(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),Mn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||S0,s[o])}function wR(n,e,t){const i=this.cache,r=e.length,s=Nu(t,r);Sn(i,s)||(n.uniform1iv(this.addr,s),Mn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||x0,s[o])}function TR(n){switch(n){case 5126:return aR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return fR;case 35675:return hR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return xR;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return wR}}class AR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oR(t.type)}}class RR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TR(t.type)}}class CR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Gf=/(\w+)(\])?(\[|\.)?/g;function Tg(n,e){n.seq.push(e),n.map[e.id]=e}function PR(n,e,t){const i=n.name,r=i.length;for(Gf.lastIndex=0;;){const s=Gf.exec(i),o=Gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tg(t,c===void 0?new AR(a,n,e):new RR(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new CR(a),Tg(t,d)),t=d}}}class nu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);PR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LR=37297;let DR=0;function IR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function UR(n){const e=Ut.getPrimaries(Ut.workingColorSpace),t=Ut.getPrimaries(n);let i;switch(e===t?i="":e===hu&&t===fu?i="LinearDisplayP3ToLinearSRGB":e===fu&&t===hu&&(i="LinearSRGBToLinearDisplayP3"),n){case Xs:case Iu:return[i,"LinearTransferOETF"];case xr:case ap:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+IR(n.getShaderSource(e),o)}else return r}function NR(n,e){const t=UR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OR(n,e){let t;switch(e){case ZE:t="Linear";break;case JE:t="Reinhard";break;case $E:t="Cineon";break;case QE:t="ACESFilmic";break;case tw:t="AgX";break;case nw:t="Neutral";break;case ew:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nc=new j;function FR(){Ut.getLuminanceCoefficients(Nc);const n=Nc.x.toFixed(4),e=Nc.y.toFixed(4),t=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function kR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bl(n){return n!==""}function Cg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(n){return n.replace(HR,VR)}const GR=new Map;function VR(n,e){let t=dt[e];if(t===void 0){const i=GR.get(e);if(i!==void 0)t=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _d(t)}const WR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(n){return n.replace(WR,XR)}function XR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function qR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oa:case Fa:e="ENVMAP_TYPE_CUBE";break;case Du:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fa:e="ENVMAP_MODE_REFRACTION";break}return e}function KR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case jE:e="ENVMAP_BLENDING_MIX";break;case KE:e="ENVMAP_BLENDING_ADD";break}return e}function ZR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function JR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YR(t),c=qR(t),u=jR(t),d=KR(t),f=ZR(t),p=BR(t),g=kR(s),_=r.createProgram();let h,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bl).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(bl).join(`
`),m.length>0&&(m+=`
`)):(h=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),m=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Os?"#define TONE_MAPPING":"",t.toneMapping!==Os?dt.tonemapping_pars_fragment:"",t.toneMapping!==Os?OR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,NR("linearToOutputTexel",t.outputColorSpace),FR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bl).join(`
`)),o=_d(o),o=Cg(o,t),o=Pg(o,t),a=_d(a),a=Cg(a,t),a=Pg(a,t),o=Lg(o),a=Lg(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===Km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+h+o,b=M+m+a,O=Ag(r,r.VERTEX_SHADER,S),L=Ag(r,r.FRAGMENT_SHADER,b);r.attachShader(_,O),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(x){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(O).trim(),k=r.getShaderInfoLog(L).trim();let H=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,O,L);else{const z=Rg(r,O,"vertex"),K=Rg(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+P+`
`+z+`
`+K)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||k==="")&&(G=!1);G&&(x.diagnostics={runnable:H,programLog:P,vertexShader:{log:U,prefix:h},fragmentShader:{log:k,prefix:m}})}r.deleteShader(O),r.deleteShader(L),E=new nu(r,_),C=zR(r,_)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,LR)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=L,this}let $R=0;class QR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eC(e),t.set(e,i)),i}}class eC{constructor(e){this.id=$R++,this.code=e,this.usedTimes=0}}function tC(n,e,t,i,r,s,o){const a=new l0,l=new QR,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,P,U,k){const H=U.fog,G=k.geometry,z=v.isMeshStandardMaterial?U.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),Q=K&&K.mapping===Du?K.image.height:null,ae=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=re!==void 0?re.length:0;let se=0;G.morphAttributes.position!==void 0&&(se=1),G.morphAttributes.normal!==void 0&&(se=2),G.morphAttributes.color!==void 0&&(se=3);let ne,le,me,he;if(ae){const zn=wr[ae];ne=zn.vertexShader,le=zn.fragmentShader}else ne=v.vertexShader,le=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),he=l.getFragmentShaderID(v);const ye=n.getRenderTarget(),xe=k.isInstancedMesh===!0,Te=k.isBatchedMesh===!0,Re=!!v.map,He=!!v.matcap,F=!!K,st=!!v.aoMap,Fe=!!v.lightMap,Ce=!!v.bumpMap,Ge=!!v.normalMap,je=!!v.displacementMap,Pe=!!v.emissiveMap,D=!!v.metalnessMap,T=!!v.roughnessMap,Z=v.anisotropy>0,ce=v.clearcoat>0,te=v.dispersion>0,W=v.iridescence>0,ge=v.sheen>0,de=v.transmission>0,be=Z&&!!v.anisotropyMap,ft=ce&&!!v.clearcoatMap,_e=ce&&!!v.clearcoatNormalMap,Ae=ce&&!!v.clearcoatRoughnessMap,Be=W&&!!v.iridescenceMap,Xe=W&&!!v.iridescenceThicknessMap,Ee=ge&&!!v.sheenColorMap,ot=ge&&!!v.sheenRoughnessMap,at=!!v.specularMap,Ct=!!v.specularColorMap,Y=!!v.specularIntensityMap,De=de&&!!v.transmissionMap,oe=de&&!!v.thicknessMap,ue=!!v.gradientMap,Ne=!!v.alphaMap,ke=v.alphaTest>0,Mt=!!v.alphaHash,nn=!!v.extensions;let kn=Os;v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(kn=n.toneMapping);const wt={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:le,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Te,batchingColor:Te&&k._colorsTexture!==null,instancing:xe,instancingColor:xe&&k.instanceColor!==null,instancingMorph:xe&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Xs,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:He,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:Q,aoMap:st,lightMap:Fe,bumpMap:Ce,normalMap:Ge,displacementMap:p&&je,emissiveMap:Pe,normalMapObjectSpace:Ge&&v.normalMapType===ow,normalMapTangentSpace:Ge&&v.normalMapType===i0,metalnessMap:D,roughnessMap:T,anisotropy:Z,anisotropyMap:be,clearcoat:ce,clearcoatMap:ft,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ae,dispersion:te,iridescence:W,iridescenceMap:Be,iridescenceThicknessMap:Xe,sheen:ge,sheenColorMap:Ee,sheenRoughnessMap:ot,specularMap:at,specularColorMap:Ct,specularIntensityMap:Y,transmission:de,transmissionMap:De,thicknessMap:oe,gradientMap:ue,opaque:v.transparent===!1&&v.blending===Sa&&v.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ke,alphaHash:Mt,combine:v.combine,mapUv:Re&&h(v.map.channel),aoMapUv:st&&h(v.aoMap.channel),lightMapUv:Fe&&h(v.lightMap.channel),bumpMapUv:Ce&&h(v.bumpMap.channel),normalMapUv:Ge&&h(v.normalMap.channel),displacementMapUv:je&&h(v.displacementMap.channel),emissiveMapUv:Pe&&h(v.emissiveMap.channel),metalnessMapUv:D&&h(v.metalnessMap.channel),roughnessMapUv:T&&h(v.roughnessMap.channel),anisotropyMapUv:be&&h(v.anisotropyMap.channel),clearcoatMapUv:ft&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&h(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:ot&&h(v.sheenRoughnessMap.channel),specularMapUv:at&&h(v.specularMap.channel),specularColorMapUv:Ct&&h(v.specularColorMap.channel),specularIntensityMapUv:Y&&h(v.specularIntensityMap.channel),transmissionMapUv:De&&h(v.transmissionMap.channel),thicknessMapUv:oe&&h(v.thicknessMap.channel),alphaMapUv:Ne&&h(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ge||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Re||Ne),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:se,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:kn,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&Ut.getTransfer(v.map.colorSpace)===$t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ar,flipSided:v.side===fi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:nn&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nn&&v.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function M(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)x.push(P),x.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(S(x,v),b(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function S(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),v.push(a.mask)}function O(v){const x=_[v.type];let P;if(x){const U=wr[x];P=Fw.clone(U.uniforms)}else P=v.uniforms;return P}function L(v,x){let P;for(let U=0,k=u.length;U<k;U++){const H=u[U];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new JR(n,x,v,s),u.push(P)),P}function A(v){if(--v.usedTimes===0){const x=u.indexOf(v);u[x]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:O,acquireProgram:L,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:C}}function nC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function iC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ig(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ug(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,h){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:h},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=h),e++,m}function a(d,f,p,g,_,h){const m=o(d,f,p,g,_,h);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):t.push(m)}function l(d,f,p,g,_,h){const m=o(d,f,p,g,_,h);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||iC),i.length>1&&i.sort(f||Ig),r.length>1&&r.sort(f||Ig)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function rC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ug,n.set(i,[o])):r>=s.length?(o=new Ug,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new vt};break;case"SpotLight":t={position:new j,direction:new j,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function oC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aC=0;function lC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cC(n){const e=new sC,t=oC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new an,o=new an;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,g=0,_=0,h=0,m=0,M=0,S=0,b=0,O=0,L=0,A=0;c.sort(lC);for(let C=0,v=c.length;C<v;C++){const x=c[C],P=x.color,U=x.intensity,k=x.distance,H=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)u+=P.r*U,d+=P.g*U,f+=P.b*U;else if(x.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(x.sh.coefficients[G],U);A++}else if(x.isDirectionalLight){const G=e.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const z=x.shadow,K=t.get(x);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=x.shadow.matrix,M++}i.directional[p]=G,p++}else if(x.isSpotLight){const G=e.get(x);G.position.setFromMatrixPosition(x.matrixWorld),G.color.copy(P).multiplyScalar(U),G.distance=k,G.coneCos=Math.cos(x.angle),G.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),G.decay=x.decay,i.spot[_]=G;const z=x.shadow;if(x.map&&(i.spotLightMap[O]=x.map,O++,z.updateMatrices(x),x.castShadow&&L++),i.spotLightMatrix[_]=z.matrix,x.castShadow){const K=t.get(x);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=H,b++}_++}else if(x.isRectAreaLight){const G=e.get(x);G.color.copy(P).multiplyScalar(U),G.halfWidth.set(x.width*.5,0,0),G.halfHeight.set(0,x.height*.5,0),i.rectArea[h]=G,h++}else if(x.isPointLight){const G=e.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),G.distance=x.distance,G.decay=x.decay,x.castShadow){const z=x.shadow,K=t.get(x);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=x.shadow.matrix,S++}i.point[g]=G,g++}else if(x.isHemisphereLight){const G=e.get(x);G.skyColor.copy(x.color).multiplyScalar(U),G.groundColor.copy(x.groundColor).multiplyScalar(U),i.hemi[m]=G,m++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==h||E.hemiLength!==m||E.numDirectionalShadows!==M||E.numPointShadows!==S||E.numSpotShadows!==b||E.numSpotMaps!==O||E.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=h,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+O-L,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,E.directionalLength=p,E.pointLength=g,E.spotLength=_,E.rectAreaLength=h,E.hemiLength=m,E.numDirectionalShadows=M,E.numPointShadows=S,E.numSpotShadows=b,E.numSpotMaps=O,E.numLightProbes=A,i.version=aC++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const h=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),d++}else if(S.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(h),p++}else if(S.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),o.identity(),s.copy(S.matrixWorld),s.premultiply(h),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(h),f++}else if(S.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(h),_++}}}return{setup:a,setupView:l,state:i}}function Ng(n){const e=new cC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function uC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ng(n),e.set(r,[a])):s>=o.length?(a=new Ng(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class fC extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hC extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mC(n,e,t){let i=new m0;const r=new Je,s=new Je,o=new cn,a=new fC({depthPacking:sw}),l=new hC,c={},u=t.maxTextureSize,d={[zs]:fi,[fi]:zs,[Ar]:Ar},f=new Hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new fr;g.setAttribute("position",new Lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new sr(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let m=this.type;this.render=function(L,A,E){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||L.length===0)return;const C=n.getRenderTarget(),v=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Ns),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==qr&&this.type===qr,k=m===qr&&this.type!==qr;for(let H=0,G=L.length;H<G;H++){const z=L[H],K=z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const Q=K.getFrameExtents();if(r.multiply(Q),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,K.mapSize.y=s.y)),K.map===null||U===!0||k===!0){const re=this.type!==qr?{minFilter:ai,magFilter:ai}:{};K.map!==null&&K.map.dispose(),K.map=new Lo(r.x,r.y,re),K.map.texture.name=z.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const ae=K.getViewportCount();for(let re=0;re<ae;re++){const pe=K.getViewport(re);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),P.viewport(o),K.updateMatrices(z,re),i=K.getFrustum(),b(A,E,K.camera,z,this.type)}K.isPointLightShadow!==!0&&this.type===qr&&M(K,E),K.needsUpdate=!1}m=this.type,h.needsUpdate=!1,n.setRenderTarget(C,v,x)};function M(L,A){const E=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Lo(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(A,null,E,f,_,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(A,null,E,p,_,null)}function S(L,A,E,C){let v=null;const x=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(x!==void 0)v=x;else if(v=E.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const P=v.uuid,U=A.uuid;let k=c[P];k===void 0&&(k={},c[P]=k);let H=k[U];H===void 0&&(H=v.clone(),k[U]=H,A.addEventListener("dispose",O)),v=H}if(v.visible=A.visible,v.wireframe=A.wireframe,C===qr?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,E.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=n.properties.get(v);P.light=E}return v}function b(L,A,E,C,v){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&v===qr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const U=e.update(L),k=L.material;if(Array.isArray(k)){const H=U.groups;for(let G=0,z=H.length;G<z;G++){const K=H[G],Q=k[K.materialIndex];if(Q&&Q.visible){const ae=S(L,Q,C,v);L.onBeforeShadow(n,L,A,E,U,ae,K),n.renderBufferDirect(E,null,U,ae,L,K),L.onAfterShadow(n,L,A,E,U,ae,K)}}}else if(k.visible){const H=S(L,k,C,v);L.onBeforeShadow(n,L,A,E,U,H,null),n.renderBufferDirect(E,null,U,H,L,null),L.onAfterShadow(n,L,A,E,U,H,null)}}const P=L.children;for(let U=0,k=P.length;U<k;U++)b(P[U],A,E,C,v)}function O(L){L.target.removeEventListener("dispose",O);for(const E in c){const C=c[E],v=L.target.uuid;v in C&&(C[v].dispose(),delete C[v])}}}const gC={[Ih]:Uh,[Nh]:Bh,[Oh]:kh,[Na]:Fh,[Uh]:Ih,[Bh]:Nh,[kh]:Oh,[Fh]:Na};function _C(n){function e(){let Y=!1;const De=new cn;let oe=null;const ue=new cn(0,0,0,0);return{setMask:function(Ne){oe!==Ne&&!Y&&(n.colorMask(Ne,Ne,Ne,Ne),oe=Ne)},setLocked:function(Ne){Y=Ne},setClear:function(Ne,ke,Mt,nn,kn){kn===!0&&(Ne*=nn,ke*=nn,Mt*=nn),De.set(Ne,ke,Mt,nn),ue.equals(De)===!1&&(n.clearColor(Ne,ke,Mt,nn),ue.copy(De))},reset:function(){Y=!1,oe=null,ue.set(-1,0,0,0)}}}function t(){let Y=!1,De=!1,oe=null,ue=null,Ne=null;return{setReversed:function(ke){De=ke},setTest:function(ke){ke?me(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ke){oe!==ke&&!Y&&(n.depthMask(ke),oe=ke)},setFunc:function(ke){if(De&&(ke=gC[ke]),ue!==ke){switch(ke){case Ih:n.depthFunc(n.NEVER);break;case Uh:n.depthFunc(n.ALWAYS);break;case Nh:n.depthFunc(n.LESS);break;case Na:n.depthFunc(n.LEQUAL);break;case Oh:n.depthFunc(n.EQUAL);break;case Fh:n.depthFunc(n.GEQUAL);break;case Bh:n.depthFunc(n.GREATER);break;case kh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ke}},setLocked:function(ke){Y=ke},setClear:function(ke){Ne!==ke&&(n.clearDepth(ke),Ne=ke)},reset:function(){Y=!1,oe=null,ue=null,Ne=null}}}function i(){let Y=!1,De=null,oe=null,ue=null,Ne=null,ke=null,Mt=null,nn=null,kn=null;return{setTest:function(wt){Y||(wt?me(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(wt){De!==wt&&!Y&&(n.stencilMask(wt),De=wt)},setFunc:function(wt,zn,Ln){(oe!==wt||ue!==zn||Ne!==Ln)&&(n.stencilFunc(wt,zn,Ln),oe=wt,ue=zn,Ne=Ln)},setOp:function(wt,zn,Ln){(ke!==wt||Mt!==zn||nn!==Ln)&&(n.stencilOp(wt,zn,Ln),ke=wt,Mt=zn,nn=Ln)},setLocked:function(wt){Y=wt},setClear:function(wt){kn!==wt&&(n.clearStencil(wt),kn=wt)},reset:function(){Y=!1,De=null,oe=null,ue=null,Ne=null,ke=null,Mt=null,nn=null,kn=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,h=null,m=null,M=null,S=null,b=null,O=null,L=new vt(0,0,0),A=0,E=!1,C=null,v=null,x=null,P=null,U=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=G>=2);let K=null,Q={};const ae=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),pe=new cn().fromArray(ae),se=new cn().fromArray(re);function ne(Y,De,oe,ue){const Ne=new Uint8Array(4),ke=n.createTexture();n.bindTexture(Y,ke),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<oe;Mt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(De+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return ke}const le={};le[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(Na),Fe(!1),Ce(Vm),me(n.CULL_FACE),F(Ns);function me(Y){c[Y]!==!0&&(n.enable(Y),c[Y]=!0)}function he(Y){c[Y]!==!1&&(n.disable(Y),c[Y]=!1)}function ye(Y,De){return u[Y]!==De?(n.bindFramebuffer(Y,De),u[Y]=De,Y===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=De),Y===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=De),!0):!1}function xe(Y,De){let oe=f,ue=!1;if(Y){oe=d.get(De),oe===void 0&&(oe=[],d.set(De,oe));const Ne=Y.textures;if(oe.length!==Ne.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,Mt=Ne.length;ke<Mt;ke++)oe[ke]=n.COLOR_ATTACHMENT0+ke;oe.length=Ne.length,ue=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,ue=!0);ue&&n.drawBuffers(oe)}function Te(Y){return p!==Y?(n.useProgram(Y),p=Y,!0):!1}const Re={[lo]:n.FUNC_ADD,[LE]:n.FUNC_SUBTRACT,[DE]:n.FUNC_REVERSE_SUBTRACT};Re[IE]=n.MIN,Re[UE]=n.MAX;const He={[NE]:n.ZERO,[OE]:n.ONE,[FE]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[VE]:n.SRC_ALPHA_SATURATE,[HE]:n.DST_COLOR,[kE]:n.DST_ALPHA,[BE]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[GE]:n.ONE_MINUS_DST_COLOR,[zE]:n.ONE_MINUS_DST_ALPHA,[WE]:n.CONSTANT_COLOR,[XE]:n.ONE_MINUS_CONSTANT_COLOR,[YE]:n.CONSTANT_ALPHA,[qE]:n.ONE_MINUS_CONSTANT_ALPHA};function F(Y,De,oe,ue,Ne,ke,Mt,nn,kn,wt){if(Y===Ns){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),Y!==PE){if(Y!==_||wt!==E){if((h!==lo||S!==lo)&&(n.blendEquation(n.FUNC_ADD),h=lo,S=lo),wt)switch(Y){case Sa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wm:n.blendFunc(n.ONE,n.ONE);break;case Xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ym:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Sa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ym:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}m=null,M=null,b=null,O=null,L.set(0,0,0),A=0,_=Y,E=wt}return}Ne=Ne||De,ke=ke||oe,Mt=Mt||ue,(De!==h||Ne!==S)&&(n.blendEquationSeparate(Re[De],Re[Ne]),h=De,S=Ne),(oe!==m||ue!==M||ke!==b||Mt!==O)&&(n.blendFuncSeparate(He[oe],He[ue],He[ke],He[Mt]),m=oe,M=ue,b=ke,O=Mt),(nn.equals(L)===!1||kn!==A)&&(n.blendColor(nn.r,nn.g,nn.b,kn),L.copy(nn),A=kn),_=Y,E=!1}function st(Y,De){Y.side===Ar?he(n.CULL_FACE):me(n.CULL_FACE);let oe=Y.side===fi;De&&(oe=!oe),Fe(oe),Y.blending===Sa&&Y.transparent===!1?F(Ns):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),s.setFunc(Y.depthFunc),s.setTest(Y.depthTest),s.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const ue=Y.stencilWrite;o.setTest(ue),ue&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),je(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(Y){C!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),C=Y)}function Ce(Y){Y!==AE?(me(n.CULL_FACE),Y!==v&&(Y===Vm?n.cullFace(n.BACK):Y===RE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),v=Y}function Ge(Y){Y!==x&&(H&&n.lineWidth(Y),x=Y)}function je(Y,De,oe){Y?(me(n.POLYGON_OFFSET_FILL),(P!==De||U!==oe)&&(n.polygonOffset(De,oe),P=De,U=oe)):he(n.POLYGON_OFFSET_FILL)}function Pe(Y){Y?me(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=n.TEXTURE0+k-1),K!==Y&&(n.activeTexture(Y),K=Y)}function T(Y,De,oe){oe===void 0&&(K===null?oe=n.TEXTURE0+k-1:oe=K);let ue=Q[oe];ue===void 0&&(ue={type:void 0,texture:void 0},Q[oe]=ue),(ue.type!==Y||ue.texture!==De)&&(K!==oe&&(n.activeTexture(oe),K=oe),n.bindTexture(Y,De||le[Y]),ue.type=Y,ue.texture=De)}function Z(){const Y=Q[K];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Be(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xe(Y){pe.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),pe.copy(Y))}function Ee(Y){se.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),se.copy(Y))}function ot(Y,De){let oe=l.get(De);oe===void 0&&(oe=new WeakMap,l.set(De,oe));let ue=oe.get(Y);ue===void 0&&(ue=n.getUniformBlockIndex(De,Y.name),oe.set(Y,ue))}function at(Y,De){const ue=l.get(De).get(Y);a.get(De)!==ue&&(n.uniformBlockBinding(De,ue,Y.__bindingPointIndex),a.set(De,ue))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},K=null,Q={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,h=null,m=null,M=null,S=null,b=null,O=null,L=new vt(0,0,0),A=0,E=!1,C=null,v=null,x=null,P=null,U=null,pe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:he,bindFramebuffer:ye,drawBuffers:xe,useProgram:Te,setBlending:F,setMaterial:st,setFlipSided:Fe,setCullFace:Ce,setLineWidth:Ge,setPolygonOffset:je,setScissorTest:Pe,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:ce,compressedTexImage3D:te,texImage2D:Ae,texImage3D:Be,updateUBOMapping:ot,uniformBlockBinding:at,texStorage2D:ft,texStorage3D:_e,texSubImage2D:W,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:Xe,viewport:Ee,reset:Ct}}function Og(n,e,t,i){const r=vC(i);switch(t){case Jv:return n*e;case ip:return n*e;case Qv:return n*e*2;case e0:return n*e/r.components*r.byteLength;case rp:return n*e/r.components*r.byteLength;case t0:return n*e*2/r.components*r.byteLength;case sp:return n*e*2/r.components*r.byteLength;case $v:return n*e*3/r.components*r.byteLength;case rr:return n*e*4/r.components*r.byteLength;case op:return n*e*4/r.components*r.byteLength;case Kc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xh:case qh:return Math.max(n,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(n,8)*Math.max(e,8)/2;case jh:case Kh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qc:case fd:case hd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case n0:case dd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vC(n){switch(n){case as:case jv:return{byteLength:1,components:1};case Ul:case Kv:case Jl:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case Po:case ep:case es:return{byteLength:4,components:1};case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):pu("canvas")}function _(D,T,Z){let ce=1;const te=Pe(D);if((te.width>Z||te.height>Z)&&(ce=Z/Math.max(te.width,te.height)),ce<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const W=Math.floor(ce*te.width),ge=Math.floor(ce*te.height);d===void 0&&(d=g(W,ge));const de=T?g(W,ge):d;return de.width=W,de.height=ge,de.getContext("2d").drawImage(D,0,0,W,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+W+"x"+ge+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function h(D){return D.generateMipmaps&&D.minFilter!==ai&&D.minFilter!==tr}function m(D){n.generateMipmap(D)}function M(D,T,Z,ce,te=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let W=T;if(T===n.RED&&(Z===n.FLOAT&&(W=n.R32F),Z===n.HALF_FLOAT&&(W=n.R16F),Z===n.UNSIGNED_BYTE&&(W=n.R8)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(W=n.R8UI),Z===n.UNSIGNED_SHORT&&(W=n.R16UI),Z===n.UNSIGNED_INT&&(W=n.R32UI),Z===n.BYTE&&(W=n.R8I),Z===n.SHORT&&(W=n.R16I),Z===n.INT&&(W=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(W=n.RG32F),Z===n.HALF_FLOAT&&(W=n.RG16F),Z===n.UNSIGNED_BYTE&&(W=n.RG8)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(W=n.RG8UI),Z===n.UNSIGNED_SHORT&&(W=n.RG16UI),Z===n.UNSIGNED_INT&&(W=n.RG32UI),Z===n.BYTE&&(W=n.RG8I),Z===n.SHORT&&(W=n.RG16I),Z===n.INT&&(W=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(W=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(W=n.RGB16UI),Z===n.UNSIGNED_INT&&(W=n.RGB32UI),Z===n.BYTE&&(W=n.RGB8I),Z===n.SHORT&&(W=n.RGB16I),Z===n.INT&&(W=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),Z===n.UNSIGNED_INT&&(W=n.RGBA32UI),Z===n.BYTE&&(W=n.RGBA8I),Z===n.SHORT&&(W=n.RGBA16I),Z===n.INT&&(W=n.RGBA32I)),T===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),T===n.RGBA){const ge=te?uu:Ut.getTransfer(ce);Z===n.FLOAT&&(W=n.RGBA32F),Z===n.HALF_FLOAT&&(W=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(W=ge===$t?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(D,T){let Z;return D?T===null||T===Po||T===Ba?Z=n.DEPTH24_STENCIL8:T===es?Z=n.DEPTH32F_STENCIL8:T===Ul&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Po||T===Ba?Z=n.DEPTH_COMPONENT24:T===es?Z=n.DEPTH_COMPONENT32F:T===Ul&&(Z=n.DEPTH_COMPONENT16),Z}function b(D,T){return h(D)===!0||D.isFramebufferTexture&&D.minFilter!==ai&&D.minFilter!==tr?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function O(D){const T=D.target;T.removeEventListener("dispose",O),A(T),T.isVideoTexture&&u.delete(T)}function L(D){const T=D.target;T.removeEventListener("dispose",L),C(T)}function A(D){const T=i.get(D);if(T.__webglInit===void 0)return;const Z=D.source,ce=f.get(Z);if(ce){const te=ce[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(D),Object.keys(ce).length===0&&f.delete(Z)}i.remove(D)}function E(D){const T=i.get(D);n.deleteTexture(T.__webglTexture);const Z=D.source,ce=f.get(Z);delete ce[T.__cacheKey],o.memory.textures--}function C(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let te=0;te<T.__webglFramebuffer[ce].length;te++)n.deleteFramebuffer(T.__webglFramebuffer[ce][te]);else n.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)n.deleteFramebuffer(T.__webglFramebuffer[ce]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let ce=0,te=Z.length;ce<te;ce++){const W=i.get(Z[ce]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(Z[ce])}i.remove(D)}let v=0;function x(){v=0}function P(){const D=v;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),v+=1,D}function U(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function k(D,T){const Z=i.get(D);if(D.isVideoTexture&&Ge(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const ce=D.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,D,T);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function H(D,T){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function G(D,T){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){se(Z,D,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function z(D,T){const Z=i.get(D);if(D.version>0&&Z.__version!==D.version){ne(Z,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}const K={[Gh]:n.REPEAT,[po]:n.CLAMP_TO_EDGE,[Vh]:n.MIRRORED_REPEAT},Q={[ai]:n.NEAREST,[iw]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[tr]:n.LINEAR,[pf]:n.LINEAR_MIPMAP_NEAREST,[mo]:n.LINEAR_MIPMAP_LINEAR},ae={[aw]:n.NEVER,[dw]:n.ALWAYS,[lw]:n.LESS,[r0]:n.LEQUAL,[cw]:n.EQUAL,[hw]:n.GEQUAL,[uw]:n.GREATER,[fw]:n.NOTEQUAL};function re(D,T){if(T.type===es&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===tr||T.magFilter===pf||T.magFilter===mc||T.magFilter===mo||T.minFilter===tr||T.minFilter===pf||T.minFilter===mc||T.minFilter===mo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,K[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,K[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,K[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Q[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==mc&&T.minFilter!==mo||T.type===es&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function pe(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",O));const ce=T.source;let te=f.get(ce);te===void 0&&(te={},f.set(ce,te));const W=U(T);if(W!==D.__cacheKey){te[W]===void 0&&(te[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),te[W].usedTimes++;const ge=te[D.__cacheKey];ge!==void 0&&(te[D.__cacheKey].usedTimes--,ge.usedTimes===0&&E(T)),D.__cacheKey=W,D.__webglTexture=te[W].texture}return Z}function se(D,T,Z){let ce=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ce=n.TEXTURE_3D);const te=pe(D,T),W=T.source;t.bindTexture(ce,D.__webglTexture,n.TEXTURE0+Z);const ge=i.get(W);if(W.version!==ge.__version||te===!0){t.activeTexture(n.TEXTURE0+Z);const de=Ut.getPrimaries(Ut.workingColorSpace),be=T.colorSpace===Rs?null:Ut.getPrimaries(T.colorSpace),ft=T.colorSpace===Rs||de===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let _e=_(T.image,!1,r.maxTextureSize);_e=je(T,_e);const Ae=s.convert(T.format,T.colorSpace),Be=s.convert(T.type);let Xe=M(T.internalFormat,Ae,Be,T.colorSpace,T.isVideoTexture);re(ce,T);let Ee;const ot=T.mipmaps,at=T.isVideoTexture!==!0,Ct=ge.__version===void 0||te===!0,Y=W.dataReady,De=b(T,_e);if(T.isDepthTexture)Xe=S(T.format===ka,T.type),Ct&&(at?t.texStorage2D(n.TEXTURE_2D,1,Xe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ae,Be,null));else if(T.isDataTexture)if(ot.length>0){at&&Ct&&t.texStorage2D(n.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let oe=0,ue=ot.length;oe<ue;oe++)Ee=ot[oe],at?Y&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,oe,Xe,Ee.width,Ee.height,0,Ae,Be,Ee.data);T.generateMipmaps=!1}else at?(Ct&&t.texStorage2D(n.TEXTURE_2D,De,Xe,_e.width,_e.height),Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e.width,_e.height,Ae,Be,_e.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ae,Be,_e.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Xe,ot[0].width,ot[0].height,_e.depth);for(let oe=0,ue=ot.length;oe<ue;oe++)if(Ee=ot[oe],T.format!==rr)if(Ae!==null)if(at){if(Y)if(T.layerUpdates.size>0){const Ne=Og(Ee.width,Ee.height,T.format,T.type);for(const ke of T.layerUpdates){const Mt=Ee.data.subarray(ke*Ne/Ee.data.BYTES_PER_ELEMENT,(ke+1)*Ne/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ke,Ee.width,Ee.height,1,Ae,Mt,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,_e.depth,Ae,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Xe,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Y&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ee.width,Ee.height,_e.depth,Ae,Be,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Xe,Ee.width,Ee.height,_e.depth,0,Ae,Be,Ee.data)}else{at&&Ct&&t.texStorage2D(n.TEXTURE_2D,De,Xe,ot[0].width,ot[0].height);for(let oe=0,ue=ot.length;oe<ue;oe++)Ee=ot[oe],T.format!==rr?Ae!==null?at?Y&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Xe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Y&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ee.width,Ee.height,Ae,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,oe,Xe,Ee.width,Ee.height,0,Ae,Be,Ee.data)}else if(T.isDataArrayTexture)if(at){if(Ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Xe,_e.width,_e.height,_e.depth),Y)if(T.layerUpdates.size>0){const oe=Og(_e.width,_e.height,T.format,T.type);for(const ue of T.layerUpdates){const Ne=_e.data.subarray(ue*oe/_e.data.BYTES_PER_ELEMENT,(ue+1)*oe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,_e.width,_e.height,1,Ae,Be,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Be,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,_e.width,_e.height,_e.depth,0,Ae,Be,_e.data);else if(T.isData3DTexture)at?(Ct&&t.texStorage3D(n.TEXTURE_3D,De,Xe,_e.width,_e.height,_e.depth),Y&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Be,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,_e.width,_e.height,_e.depth,0,Ae,Be,_e.data);else if(T.isFramebufferTexture){if(Ct)if(at)t.texStorage2D(n.TEXTURE_2D,De,Xe,_e.width,_e.height);else{let oe=_e.width,ue=_e.height;for(let Ne=0;Ne<De;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Xe,oe,ue,0,Ae,Be,null),oe>>=1,ue>>=1}}else if(ot.length>0){if(at&&Ct){const oe=Pe(ot[0]);t.texStorage2D(n.TEXTURE_2D,De,Xe,oe.width,oe.height)}for(let oe=0,ue=ot.length;oe<ue;oe++)Ee=ot[oe],at?Y&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ae,Be,Ee):t.texImage2D(n.TEXTURE_2D,oe,Xe,Ae,Be,Ee);T.generateMipmaps=!1}else if(at){if(Ct){const oe=Pe(_e);t.texStorage2D(n.TEXTURE_2D,De,Xe,oe.width,oe.height)}Y&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Be,_e)}else t.texImage2D(n.TEXTURE_2D,0,Xe,Ae,Be,_e);h(T)&&m(ce),ge.__version=W.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ne(D,T,Z){if(T.image.length!==6)return;const ce=pe(D,T),te=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Z);const W=i.get(te);if(te.version!==W.__version||ce===!0){t.activeTexture(n.TEXTURE0+Z);const ge=Ut.getPrimaries(Ut.workingColorSpace),de=T.colorSpace===Rs?null:Ut.getPrimaries(T.colorSpace),be=T.colorSpace===Rs||ge===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,_e=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let ue=0;ue<6;ue++)!ft&&!_e?Ae[ue]=_(T.image[ue],!0,r.maxCubemapSize):Ae[ue]=_e?T.image[ue].image:T.image[ue],Ae[ue]=je(T,Ae[ue]);const Be=Ae[0],Xe=s.convert(T.format,T.colorSpace),Ee=s.convert(T.type),ot=M(T.internalFormat,Xe,Ee,T.colorSpace),at=T.isVideoTexture!==!0,Ct=W.__version===void 0||ce===!0,Y=te.dataReady;let De=b(T,Be);re(n.TEXTURE_CUBE_MAP,T);let oe;if(ft){at&&Ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ot,Be.width,Be.height);for(let ue=0;ue<6;ue++){oe=Ae[ue].mipmaps;for(let Ne=0;Ne<oe.length;Ne++){const ke=oe[Ne];T.format!==rr?Xe!==null?at?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,ke.width,ke.height,Xe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,ot,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,0,0,ke.width,ke.height,Xe,Ee,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne,ot,ke.width,ke.height,0,Xe,Ee,ke.data)}}}else{if(oe=T.mipmaps,at&&Ct){oe.length>0&&De++;const ue=Pe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ot,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(_e){at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae[ue].width,Ae[ue].height,Xe,Ee,Ae[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ot,Ae[ue].width,Ae[ue].height,0,Xe,Ee,Ae[ue].data);for(let Ne=0;Ne<oe.length;Ne++){const Mt=oe[Ne].image[ue].image;at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,Mt.width,Mt.height,Xe,Ee,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,ot,Mt.width,Mt.height,0,Xe,Ee,Mt.data)}}else{at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Xe,Ee,Ae[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ot,Xe,Ee,Ae[ue]);for(let Ne=0;Ne<oe.length;Ne++){const ke=oe[Ne];at?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,0,0,Xe,Ee,ke.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ne+1,ot,Xe,Ee,ke.image[ue])}}}h(T)&&m(n.TEXTURE_CUBE_MAP),W.__version=te.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function le(D,T,Z,ce,te,W){const ge=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),be=M(Z.internalFormat,ge,de,Z.colorSpace);if(!i.get(T).__hasExternalTextures){const _e=Math.max(1,T.width>>W),Ae=Math.max(1,T.height>>W);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,W,be,_e,Ae,T.depth,0,ge,de,null):t.texImage2D(te,W,be,_e,Ae,0,ge,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Ce(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,te,i.get(Z).__webglTexture,0,Fe(T)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,te,i.get(Z).__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(D,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const ce=T.depthTexture,te=ce&&ce.isDepthTexture?ce.type:null,W=S(T.stencilBuffer,te),ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Fe(T);Ce(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,W,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,W,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,W,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,D)}else{const ce=T.textures;for(let te=0;te<ce.length;te++){const W=ce[te],ge=s.convert(W.format,W.colorSpace),de=s.convert(W.type),be=M(W.internalFormat,ge,de,W.colorSpace),ft=Fe(T);Z&&Ce(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,be,T.width,T.height):Ce(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,be,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,be,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const ce=i.get(T.depthTexture).__webglTexture,te=Fe(T);if(T.depthTexture.format===Ma)Ce(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(T.depthTexture.format===ka)Ce(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ye(D){const T=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ce=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ce){const te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ce.removeEventListener("dispose",te)};ce.addEventListener("dispose",te),T.__depthDisposeCallback=te}T.__boundDepthTexture=ce}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ce]),T.__webglDepthbuffer[ce]===void 0)T.__webglDepthbuffer[ce]=n.createRenderbuffer(),me(T.__webglDepthbuffer[ce],D,!1);else{const te=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=T.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(D,T,Z){const ce=i.get(D);T!==void 0&&le(ce.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ye(D)}function Te(D){const T=D.texture,Z=i.get(D),ce=i.get(T);D.addEventListener("dispose",L);const te=D.textures,W=D.isWebGLCubeRenderTarget===!0,ge=te.length>1;if(ge||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=T.version,o.memory.textures++),W){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let be=0;be<T.mipmaps.length;be++)Z.__webglFramebuffer[de][be]=n.createFramebuffer()}else Z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)Z.__webglFramebuffer[de]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(ge)for(let de=0,be=te.length;de<be;de++){const ft=i.get(te[de]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&Ce(D)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const be=te[de];Z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const ft=s.convert(be.format,be.colorSpace),_e=s.convert(be.type),Ae=M(be.internalFormat,ft,_e,be.colorSpace,D.isXRRenderTarget===!0),Be=Fe(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Ae,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),me(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),re(n.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)le(Z.__webglFramebuffer[de][be],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,be);else le(Z.__webglFramebuffer[de],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);h(T)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let de=0,be=te.length;de<be;de++){const ft=te[de],_e=i.get(ft);t.bindTexture(n.TEXTURE_2D,_e.__webglTexture),re(n.TEXTURE_2D,ft),le(Z.__webglFramebuffer,D,ft,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),h(ft)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ce.__webglTexture),re(de,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)le(Z.__webglFramebuffer[be],D,T,n.COLOR_ATTACHMENT0,de,be);else le(Z.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,de,0);h(T)&&m(de),t.unbindTexture()}D.depthBuffer&&ye(D)}function Re(D){const T=D.textures;for(let Z=0,ce=T.length;Z<ce;Z++){const te=T[Z];if(h(te)){const W=D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ge=i.get(te).__webglTexture;t.bindTexture(W,ge),m(W),t.unbindTexture()}}}const He=[],F=[];function st(D){if(D.samples>0){if(Ce(D)===!1){const T=D.textures,Z=D.width,ce=D.height;let te=n.COLOR_BUFFER_BIT;const W=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(D),de=T.length>1;if(de)for(let be=0;be<T.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let be=0;be<T.length;be++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[be]);const ft=i.get(T[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,Z,ce,0,0,Z,ce,te,n.NEAREST),l===!0&&(He.length=0,F.length=0,He.push(n.COLOR_ATTACHMENT0+be),D.depthBuffer&&D.resolveDepthBuffer===!1&&(He.push(W),F.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<T.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ge.__webglColorRenderbuffer[be]);const ft=i.get(T[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ft,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Fe(D){return Math.min(r.maxSamples,D.samples)}function Ce(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ge(D){const T=o.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function je(D,T){const Z=D.colorSpace,ce=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Xs&&Z!==Rs&&(Ut.getTransfer(Z)===$t?(ce!==rr||te!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=x,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=xe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ce}function yC(n,e){function t(i,r=Rs){let s;const o=Ut.getTransfer(r);if(i===as)return n.UNSIGNED_BYTE;if(i===tp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===np)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return n.BYTE;if(i===Kv)return n.SHORT;if(i===Ul)return n.UNSIGNED_SHORT;if(i===ep)return n.INT;if(i===Po)return n.UNSIGNED_INT;if(i===es)return n.FLOAT;if(i===Jl)return n.HALF_FLOAT;if(i===Jv)return n.ALPHA;if(i===$v)return n.RGB;if(i===rr)return n.RGBA;if(i===ip)return n.LUMINANCE;if(i===Qv)return n.LUMINANCE_ALPHA;if(i===Ma)return n.DEPTH_COMPONENT;if(i===ka)return n.DEPTH_STENCIL;if(i===e0)return n.RED;if(i===rp)return n.RED_INTEGER;if(i===t0)return n.RG;if(i===sp)return n.RG_INTEGER;if(i===op)return n.RGBA_INTEGER;if(i===Kc||i===Zc||i===Jc||i===$c)if(o===$t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Kc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Kc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wh||i===Xh||i===Yh||i===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jh||i===Kh||i===Zh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jh||i===Kh)return o===$t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zh)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jh||i===$h||i===Qh||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jh)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$h)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qh)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ld)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===$t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qc||i===fd||i===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qc)return o===$t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===n0||i===dd||i===pd||i===md)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class SC extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MC={type:"move"};class Vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,i),m=this._getHandJoint(c,_);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hs({vertexShader:bC,fragmentShader:EC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sr(new tc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends Fo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new wC,h=t.getContextAttributes();let m=null,M=null;const S=[],b=[],O=new Je;let L=null;const A=new wi;A.layers.enable(1),A.viewport=new cn;const E=new wi;E.layers.enable(2),E.viewport=new cn;const C=[A,E],v=new SC;v.layers.enable(1),v.layers.enable(2);let x=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=S[ne];return le===void 0&&(le=new Vf,S[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=S[ne];return le===void 0&&(le=new Vf,S[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=S[ne];return le===void 0&&(le=new Vf,S[ne]=le),le.getHandSpace()};function U(ne){const le=b.indexOf(ne.inputSource);if(le===-1)return;const me=S[le];me!==void 0&&(me.update(ne.inputSource,ne.frame,c||o),me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",H);for(let ne=0;ne<S.length;ne++){const le=b[ne];le!==null&&(b[ne]=null,S[ne].disconnect(le))}x=null,P=null,_.reset(),e.setRenderTarget(m),p=null,f=null,d=null,r=null,M=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",k),r.addEventListener("inputsourceschange",H),h.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(O),r.renderState.layers===void 0){const le={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Lo(p.framebufferWidth,p.framebufferHeight,{format:rr,type:as,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let le=null,me=null,he=null;h.depth&&(he=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=h.stencil?ka:Ma,me=h.stencil?Ba:Po);const ye={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Lo(f.textureWidth,f.textureHeight,{format:rr,type:as,depthTexture:new _0(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(ne){for(let le=0;le<ne.removed.length;le++){const me=ne.removed[le],he=b.indexOf(me);he>=0&&(b[he]=null,S[he].disconnect(me))}for(let le=0;le<ne.added.length;le++){const me=ne.added[le];let he=b.indexOf(me);if(he===-1){for(let xe=0;xe<S.length;xe++)if(xe>=b.length){b.push(me),he=xe;break}else if(b[xe]===null){b[xe]=me,he=xe;break}if(he===-1)break}const ye=S[he];ye&&ye.connect(me)}}const G=new j,z=new j;function K(ne,le,me){G.setFromMatrixPosition(le.matrixWorld),z.setFromMatrixPosition(me.matrixWorld);const he=G.distanceTo(z),ye=le.projectionMatrix.elements,xe=me.projectionMatrix.elements,Te=ye[14]/(ye[10]-1),Re=ye[14]/(ye[10]+1),He=(ye[9]+1)/ye[5],F=(ye[9]-1)/ye[5],st=(ye[8]-1)/ye[0],Fe=(xe[8]+1)/xe[0],Ce=Te*st,Ge=Te*Fe,je=he/(-st+Fe),Pe=je*-st;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Pe),ne.translateZ(je),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ye[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const D=Te+je,T=Re+je,Z=Ce-Pe,ce=Ge+(he-Pe),te=He*Re/T*D,W=F*Re/T*D;ne.projectionMatrix.makePerspective(Z,ce,te,W,D,T),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Q(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let le=ne.near,me=ne.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(me=_.depthFar)),v.near=E.near=A.near=le,v.far=E.far=A.far=me,(x!==v.near||P!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,P=v.far);const he=ne.parent,ye=v.cameras;Q(v,he);for(let xe=0;xe<ye.length;xe++)Q(ye[xe],he);ye.length===2?K(v,A,E):v.projectionMatrix.copy(A.projectionMatrix),ae(ne,v,he)};function ae(ne,le,me){me===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=gd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let re=null;function pe(ne,le){if(u=le.getViewerPose(c||o),g=le,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let he=!1;me.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let xe=0;xe<me.length;xe++){const Te=me[xe];let Re=null;if(p!==null)Re=p.getViewport(Te);else{const F=d.getViewSubImage(f,Te);Re=F.viewport,xe===0&&(e.setRenderTargetTextures(M,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(M))}let He=C[xe];He===void 0&&(He=new wi,He.layers.enable(xe),He.viewport=new cn,C[xe]=He),He.matrix.fromArray(Te.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Te.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Re.x,Re.y,Re.width,Re.height),xe===0&&(v.matrix.copy(He.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),he===!0&&v.cameras.push(He)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const xe=d.getDepthInformation(me[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let me=0;me<S.length;me++){const he=b[me],ye=S[me];he!==null&&ye!==void 0&&ye.update(he,le,c||o)}re&&re(ne,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),g=null}const se=new g0;se.setAnimationLoop(pe),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}}const io=new Ur,AC=new an;function RC(n,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function i(h,m){m.color.getRGB(h.fogColor.value,h0(n)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function r(h,m,M,S,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(h,m):m.isMeshToonMaterial?(s(h,m),d(h,m)):m.isMeshPhongMaterial?(s(h,m),u(h,m)):m.isMeshStandardMaterial?(s(h,m),f(h,m),m.isMeshPhysicalMaterial&&p(h,m,b)):m.isMeshMatcapMaterial?(s(h,m),g(h,m)):m.isMeshDepthMaterial?s(h,m):m.isMeshDistanceMaterial?(s(h,m),_(h,m)):m.isMeshNormalMaterial?s(h,m):m.isLineBasicMaterial?(o(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?l(h,m,M,S):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===fi&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===fi&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,b=M.envMapRotation;S&&(h.envMap.value=S,io.copy(b),io.x*=-1,io.y*=-1,io.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),h.envMapRotation.value.setFromMatrix4(AC.makeRotationFromEuler(io)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function o(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,M,S){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*M,h.scale.value=S*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function d(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,M){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fi&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function _(h,m){const M=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const b=S.program;i.uniformBlockBinding(M,b)}function c(M,S){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",h));const O=S.program;i.updateUBOMapping(M,O);const L=e.render.frame;s[M.id]!==L&&(f(M),s[M.id]=L)}function u(M){const S=d();M.__bindingPointIndex=S;const b=n.createBuffer(),O=M.__size,L=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,O,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=r[M.id],b=M.uniforms,O=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let L=0,A=b.length;L<A;L++){const E=Array.isArray(b[L])?b[L]:[b[L]];for(let C=0,v=E.length;C<v;C++){const x=E[C];if(p(x,L,C,O)===!0){const P=x.__offset,U=Array.isArray(x.value)?x.value:[x.value];let k=0;for(let H=0;H<U.length;H++){const G=U[H],z=_(G);typeof G=="number"||typeof G=="boolean"?(x.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,P+k,x.__data)):G.isMatrix3?(x.__data[0]=G.elements[0],x.__data[1]=G.elements[1],x.__data[2]=G.elements[2],x.__data[3]=0,x.__data[4]=G.elements[3],x.__data[5]=G.elements[4],x.__data[6]=G.elements[5],x.__data[7]=0,x.__data[8]=G.elements[6],x.__data[9]=G.elements[7],x.__data[10]=G.elements[8],x.__data[11]=0):(G.toArray(x.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,x.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,S,b,O){const L=M.value,A=S+"_"+b;if(O[A]===void 0)return typeof L=="number"||typeof L=="boolean"?O[A]=L:O[A]=L.clone(),!0;{const E=O[A];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return O[A]=L,!0}else if(E.equals(L)===!1)return E.copy(L),!0}return!1}function g(M){const S=M.uniforms;let b=0;const O=16;for(let A=0,E=S.length;A<E;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,x=C.length;v<x;v++){const P=C[v],U=Array.isArray(P.value)?P.value:[P.value];for(let k=0,H=U.length;k<H;k++){const G=U[k],z=_(G),K=b%O,Q=K%z.boundary,ae=K+Q;b+=Q,ae!==0&&O-ae<z.storage&&(b+=O-ae),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=z.storage}}}const L=b%O;return L>0&&(b+=O-L),M.__size=b,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function h(M){const S=M.target;S.removeEventListener("dispose",h);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class M0{constructor(e={}){const{canvas:t=gw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,h=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xr,this.toneMapping=Os,this.toneMappingExposure=1;const S=this;let b=!1,O=0,L=0,A=null,E=-1,C=null;const v=new cn,x=new cn;let P=null;const U=new vt(0);let k=0,H=t.width,G=t.height,z=1,K=null,Q=null;const ae=new cn(0,0,H,G),re=new cn(0,0,H,G);let pe=!1;const se=new m0;let ne=!1,le=!1;const me=new an,he=new an,ye=new j,xe=new cn,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function He(){return A===null?z:1}let F=i;function st(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$d}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ke,!1),F===null){const q="webgl2";if(F=st(q,R),F===null)throw st(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ce,Ge,je,Pe,D,T,Z,ce,te,W,ge,de,be,ft,_e,Ae,Be,Xe,Ee,ot,at,Ct,Y;function De(){Fe=new N1(F),Fe.init(),at=new yC(F,Fe),Ce=new R1(F,Fe,e,at),Ge=new _C(F),Ce.reverseDepthBuffer&&Ge.buffers.depth.setReversed(!0),je=new B1(F),Pe=new nC,D=new xC(F,Fe,Ge,Pe,Ce,at,je),T=new P1(S),Z=new U1(S),ce=new Ww(F),Ct=new T1(F,ce),te=new O1(F,ce,je,Ct),W=new z1(F,te,ce,je),Xe=new k1(F,Ce,D),_e=new C1(Pe),ge=new tC(S,T,Z,Fe,Ce,Ct,_e),de=new RC(S,Pe),be=new rC,ft=new uC(Fe),Be=new w1(S,T,Z,Ge,W,f,l),Ae=new mC(S,W,Ce),Y=new CC(F,je,Ce,Ge),Ee=new A1(F,Fe,je),ot=new F1(F,Fe,je),je.programs=ge.programs,S.capabilities=Ce,S.extensions=Fe,S.properties=Pe,S.renderLists=be,S.shadowMap=Ae,S.state=Ge,S.info=je}De();const oe=new TC(S,F);this.xr=oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(H,G,!1))},this.getSize=function(R){return R.set(H,G)},this.setSize=function(R,q,J=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,G=q,t.width=Math.floor(R*z),t.height=Math.floor(q*z),J===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(H*z,G*z).floor()},this.setDrawingBufferSize=function(R,q,J){H=R,G=q,z=J,t.width=Math.floor(R*J),t.height=Math.floor(q*J),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(v)},this.getViewport=function(R){return R.copy(ae)},this.setViewport=function(R,q,J,$){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,q,J,$),Ge.viewport(v.copy(ae).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,q,J,$){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,q,J,$),Ge.scissor(x.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){Ge.setScissorTest(pe=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(R=!0,q=!0,J=!0){let $=0;if(R){let X=!1;if(A!==null){const Se=A.texture.format;X=Se===op||Se===sp||Se===rp}if(X){const Se=A.texture.type,we=Se===as||Se===Po||Se===Ul||Se===Ba||Se===tp||Se===np,Ve=Be.getClearColor(),qe=Be.getClearAlpha(),tt=Ve.r,nt=Ve.g,Ye=Ve.b;we?(p[0]=tt,p[1]=nt,p[2]=Ye,p[3]=qe,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=tt,g[1]=nt,g[2]=Ye,g[3]=qe,F.clearBufferiv(F.COLOR,0,g))}else $|=F.COLOR_BUFFER_BIT}q&&($|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),J&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),be.dispose(),ft.dispose(),Pe.dispose(),T.dispose(),Z.dispose(),W.dispose(),Ct.dispose(),Y.dispose(),ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",mn),oe.removeEventListener("sessionend",pi),ti.stop()};function ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=je.autoReset,q=Ae.enabled,J=Ae.autoUpdate,$=Ae.needsUpdate,X=Ae.type;De(),je.autoReset=R,Ae.enabled=q,Ae.autoUpdate=J,Ae.needsUpdate=$,Ae.type=X}function ke(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Mt(R){const q=R.target;q.removeEventListener("dispose",Mt),nn(q)}function nn(R){kn(R),Pe.remove(R)}function kn(R){const q=Pe.get(R).programs;q!==void 0&&(q.forEach(function(J){ge.releaseProgram(J)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,J,$,X,Se){q===null&&(q=Te);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Fr(R,q,J,$,X);Ge.setMaterial($,we);let qe=J.index,tt=1;if($.wireframe===!0){if(qe=te.getWireframeAttribute(J),qe===void 0)return;tt=2}const nt=J.drawRange,Ye=J.attributes.position;let Tt=nt.start*tt,Ot=(nt.start+nt.count)*tt;Se!==null&&(Tt=Math.max(Tt,Se.start*tt),Ot=Math.min(Ot,(Se.start+Se.count)*tt)),qe!==null?(Tt=Math.max(Tt,0),Ot=Math.min(Ot,qe.count)):Ye!=null&&(Tt=Math.max(Tt,0),Ot=Math.min(Ot,Ye.count));const Gt=Ot-Tt;if(Gt<0||Gt===1/0)return;Ct.setup(X,$,Ve,J,qe);let Dn,Et=Ee;if(qe!==null&&(Dn=ce.get(qe),Et=ot,Et.setIndex(Dn)),X.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*He()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(X.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),Ge.setLineWidth(Ke*He()),X.isLineSegments?Et.setMode(F.LINES):X.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else X.isPoints?Et.setMode(F.POINTS):X.isSprite&&Et.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Et.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ke=X._multiDrawStarts,ln=X._multiDrawCounts,ct=X._multiDrawCount,ni=qe?ce.get(qe).bytesPerElement:1,Br=Pe.get($).currentProgram.getUniforms();for(let In=0;In<ct;In++)Br.setValue(F,"_gl_DrawID",In),Et.render(Ke[In]/ni,ln[In])}else if(X.isInstancedMesh)Et.renderInstances(Tt,Gt,X.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ln=Math.min(J.instanceCount,Ke);Et.renderInstances(Tt,Gt,ln)}else Et.render(Tt,Gt)};function wt(R,q,J){R.transparent===!0&&R.side===Ar&&R.forceSinglePass===!1?(R.side=fi,R.needsUpdate=!0,Ys(R,q,J),R.side=zs,R.needsUpdate=!0,Ys(R,q,J),R.side=Ar):Ys(R,q,J)}this.compile=function(R,q,J=null){J===null&&(J=R),h=ft.get(J),h.init(q),M.push(h),J.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),R!==J&&R.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights();const $=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Ve=Se[we];wt(Ve,J,X),$.add(Ve)}else wt(Se,J,X),$.add(Se)}),M.pop(),h=null,$},this.compileAsync=function(R,q,J=null){const $=this.compile(R,q,J);return new Promise(X=>{function Se(){if($.forEach(function(we){Pe.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){X(R);return}setTimeout(Se,10)}Fe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let zn=null;function Ln(R){zn&&zn(R)}function mn(){ti.stop()}function pi(){ti.start()}const ti=new g0;ti.setAnimationLoop(Ln),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){zn=R,oe.setAnimationLoop(R),R===null?ti.stop():ti.start()},oe.addEventListener("sessionstart",mn),oe.addEventListener("sessionend",pi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(q),q=oe.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,q,A),h=ft.get(R,M.length),h.init(q),M.push(h),he.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(he),le=this.localClippingEnabled,ne=_e.init(this.clippingPlanes,le),_=be.get(R,m.length),_.init(),m.push(_),oe.enabled===!0&&oe.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&hr(Se,q,-1/0,S.sortObjects)}hr(R,q,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(K,Q),Re=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Re&&Be.addToRenderList(_,R),this.info.render.frame++,ne===!0&&_e.beginShadows();const J=h.state.shadowsArray;Ae.render(J,R,q),ne===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,X=_.transmissive;if(h.setupLights(),q.isArrayCamera){const Se=q.cameras;if(X.length>0)for(let we=0,Ve=Se.length;we<Ve;we++){const qe=Se[we];Or($,X,R,qe)}Re&&Be.render(R);for(let we=0,Ve=Se.length;we<Ve;we++){const qe=Se[we];Yn(_,R,qe,qe.viewport)}}else X.length>0&&Or($,X,R,q),Re&&Be.render(R),Yn(_,R,q);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(S,R,q),Ct.resetDefaultState(),E=-1,C=null,M.pop(),M.length>0?(h=M[M.length-1],ne===!0&&_e.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function hr(R,q,J,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){$&&xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const we=W.update(R),Ve=R.material;Ve.visible&&_.push(R,we,Ve,J,xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const we=W.update(R),Ve=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xe.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xe.copy(we.boundingSphere.center)),xe.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Ve)){const qe=we.groups;for(let tt=0,nt=qe.length;tt<nt;tt++){const Ye=qe[tt],Tt=Ve[Ye.materialIndex];Tt&&Tt.visible&&_.push(R,we,Tt,J,xe.z,Ye)}}else Ve.visible&&_.push(R,we,Ve,J,xe.z,null)}}const Se=R.children;for(let we=0,Ve=Se.length;we<Ve;we++)hr(Se[we],q,J,$)}function Yn(R,q,J,$){const X=R.opaque,Se=R.transmissive,we=R.transparent;h.setupLightsView(J),ne===!0&&_e.setGlobalState(S.clippingPlanes,J),$&&Ge.viewport(v.copy($)),X.length>0&&Gi(X,q,J),Se.length>0&&Gi(Se,q,J),we.length>0&&Gi(we,q,J),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Or(R,q,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new Lo(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Jl:as,minFilter:mo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Se=h.state.transmissionRenderTarget[$.id],we=$.viewport||v;Se.setSize(we.z,we.w);const Ve=S.getRenderTarget();S.setRenderTarget(Se),S.getClearColor(U),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),Re&&Be.render(J);const qe=S.toneMapping;S.toneMapping=Os;const tt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),ne===!0&&_e.setGlobalState(S.clippingPlanes,$),Gi(R,J,$),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ye=0,Tt=q.length;Ye<Tt;Ye++){const Ot=q[Ye],Gt=Ot.object,Dn=Ot.geometry,Et=Ot.material,Ke=Ot.group;if(Et.side===Ar&&Gt.layers.test($.layers)){const ln=Et.side;Et.side=fi,Et.needsUpdate=!0,$a(Gt,J,$,Dn,Et,Ke),Et.side=ln,Et.needsUpdate=!0,nt=!0}}nt===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}S.setRenderTarget(Ve),S.setClearColor(U,k),tt!==void 0&&($.viewport=tt),S.toneMapping=qe}function Gi(R,q,J){const $=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Se=R.length;X<Se;X++){const we=R[X],Ve=we.object,qe=we.geometry,tt=$===null?we.material:$,nt=we.group;Ve.layers.test(J.layers)&&$a(Ve,q,J,qe,tt,nt)}}function $a(R,q,J,$,X,Se){R.onBeforeRender(S,q,J,$,X,Se),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(S,q,J,$,R,Se),X.transparent===!0&&X.side===Ar&&X.forceSinglePass===!1?(X.side=fi,X.needsUpdate=!0,S.renderBufferDirect(J,q,$,X,R,Se),X.side=zs,X.needsUpdate=!0,S.renderBufferDirect(J,q,$,X,R,Se),X.side=Ar):S.renderBufferDirect(J,q,$,X,R,Se),R.onAfterRender(S,q,J,$,X,Se)}function Ys(R,q,J){q.isScene!==!0&&(q=Te);const $=Pe.get(R),X=h.state.lights,Se=h.state.shadowsArray,we=X.state.version,Ve=ge.getParameters(R,X.state,Se,q,J),qe=ge.getProgramCacheKey(Ve);let tt=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?Z:T).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",Mt),tt=new Map,$.programs=tt);let nt=tt.get(qe);if(nt!==void 0){if($.currentProgram===nt&&$.lightsStateVersion===we)return ic(R,Ve),nt}else Ve.uniforms=ge.getUniforms(R),R.onBeforeCompile(Ve,S),nt=ge.acquireProgram(Ve,qe),tt.set(qe,nt),$.uniforms=Ve.uniforms;const Ye=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=_e.uniform),ic(R,Ve),$.needsLights=qs(R),$.lightsStateVersion=we,$.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotLightMatrix.value=X.state.spotLightMatrix,Ye.spotLightMap.value=X.state.spotLightMap,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=nt,$.uniformsList=null,nt}function nc(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=nu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ic(R,q){const J=Pe.get(R);J.outputColorSpace=q.outputColorSpace,J.batching=q.batching,J.batchingColor=q.batchingColor,J.instancing=q.instancing,J.instancingColor=q.instancingColor,J.instancingMorph=q.instancingMorph,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function Fr(R,q,J,$,X){q.isScene!==!0&&(q=Te),D.resetTextureUnits();const Se=q.fog,we=$.isMeshStandardMaterial?q.environment:null,Ve=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xs,qe=($.isMeshStandardMaterial?Z:T).get($.envMap||we),tt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,nt=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!J.morphAttributes.position,Tt=!!J.morphAttributes.normal,Ot=!!J.morphAttributes.color;let Gt=Os;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Gt=S.toneMapping);const Dn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Et=Dn!==void 0?Dn.length:0,Ke=Pe.get($),ln=h.state.lights;if(ne===!0&&(le===!0||R!==C)){const qn=R===C&&$.id===E;_e.setState($,R,qn)}let ct=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ln.state.version||Ke.outputColorSpace!==Ve||X.isBatchedMesh&&Ke.batching===!1||!X.isBatchedMesh&&Ke.batching===!0||X.isBatchedMesh&&Ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ke.instancing===!1||!X.isInstancedMesh&&Ke.instancing===!0||X.isSkinnedMesh&&Ke.skinning===!1||!X.isSkinnedMesh&&Ke.skinning===!0||X.isInstancedMesh&&Ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ke.instancingMorph===!1&&X.morphTexture!==null||Ke.envMap!==qe||$.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==_e.numPlanes||Ke.numIntersection!==_e.numIntersection)||Ke.vertexAlphas!==tt||Ke.vertexTangents!==nt||Ke.morphTargets!==Ye||Ke.morphNormals!==Tt||Ke.morphColors!==Ot||Ke.toneMapping!==Gt||Ke.morphTargetsCount!==Et)&&(ct=!0):(ct=!0,Ke.__version=$.version);let ni=Ke.currentProgram;ct===!0&&(ni=Ys($,q,X));let Br=!1,In=!1,Bo=!1;const en=ni.getUniforms(),dr=Ke.uniforms;if(Ge.useProgram(ni.program)&&(Br=!0,In=!0,Bo=!0),$.id!==E&&(E=$.id,In=!0),Br||C!==R){Ce.reverseDepthBuffer?(me.copy(R.projectionMatrix),vw(me),xw(me),en.setValue(F,"projectionMatrix",me)):en.setValue(F,"projectionMatrix",R.projectionMatrix),en.setValue(F,"viewMatrix",R.matrixWorldInverse);const qn=en.map.cameraPosition;qn!==void 0&&qn.setValue(F,ye.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&en.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&en.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,In=!0,Bo=!0)}if(X.isSkinnedMesh){en.setOptional(F,X,"bindMatrix"),en.setOptional(F,X,"bindMatrixInverse");const qn=X.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),en.setValue(F,"boneTexture",qn.boneTexture,D))}X.isBatchedMesh&&(en.setOptional(F,X,"batchingTexture"),en.setValue(F,"batchingTexture",X._matricesTexture,D),en.setOptional(F,X,"batchingIdTexture"),en.setValue(F,"batchingIdTexture",X._indirectTexture,D),en.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&en.setValue(F,"batchingColorTexture",X._colorsTexture,D));const Qa=J.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0)&&Xe.update(X,J,ni),(In||Ke.receiveShadow!==X.receiveShadow)&&(Ke.receiveShadow=X.receiveShadow,en.setValue(F,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(dr.envMap.value=qe,dr.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(dr.envMapIntensity.value=q.environmentIntensity),In&&(en.setValue(F,"toneMappingExposure",S.toneMappingExposure),Ke.needsLights&&Ou(dr,Bo),Se&&$.fog===!0&&de.refreshFogUniforms(dr,Se),de.refreshMaterialUniforms(dr,$,z,G,h.state.transmissionRenderTarget[R.id]),nu.upload(F,nc(Ke),dr,D)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(nu.upload(F,nc(Ke),dr,D),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&en.setValue(F,"center",X.center),en.setValue(F,"modelViewMatrix",X.modelViewMatrix),en.setValue(F,"normalMatrix",X.normalMatrix),en.setValue(F,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qn=$.uniformsGroups;for(let ko=0,Fu=qn.length;ko<Fu;ko++){const el=qn[ko];Y.update(el,ni),Y.bind(el,ni)}}return ni}function Ou(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function qs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,q,J){Pe.get(R.texture).__webglTexture=q,Pe.get(R.depthTexture).__webglTexture=J;const $=Pe.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=J===void 0,$.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const J=Pe.get(R);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,J=0){A=R,O=q,L=J;let $=!0,X=null,Se=!1,we=!1;if(R){const qe=Pe.get(R);if(qe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(qe.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(qe.__hasExternalTextures)D.rebindTextures(R,Pe.get(R.texture).__webglTexture,Pe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(qe.__boundDepthTexture!==Ye){if(Ye!==null&&Pe.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(we=!0);const nt=Pe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?X=nt[q][J]:X=nt[q],Se=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?X=Pe.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[J]:X=nt,v.copy(R.viewport),x.copy(R.scissor),P=R.scissorTest}else v.copy(ae).multiplyScalar(z).floor(),x.copy(re).multiplyScalar(z).floor(),P=pe;if(Ge.bindFramebuffer(F.FRAMEBUFFER,X)&&$&&Ge.drawBuffers(R,X),Ge.viewport(v),Ge.scissor(x),Ge.setScissorTest(P),Se){const qe=Pe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,qe.__webglTexture,J)}else if(we){const qe=Pe.get(R.texture),tt=q||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,J||0,tt)}E=-1},this.readRenderTargetPixels=function(R,q,J,$,X,Se,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ve=Ve[we]),Ve){Ge.bindFramebuffer(F.FRAMEBUFFER,Ve);try{const qe=R.texture,tt=qe.format,nt=qe.type;if(!Ce.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-$&&J>=0&&J<=R.height-X&&F.readPixels(q,J,$,X,at.convert(tt),at.convert(nt),Se)}finally{const qe=A!==null?Pe.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(F.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,q,J,$,X,Se,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Pe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ve=Ve[we]),Ve){const qe=R.texture,tt=qe.format,nt=qe.type;if(!Ce.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-$&&J>=0&&J<=R.height-X){Ge.bindFramebuffer(F.FRAMEBUFFER,Ve);const Ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),F.readPixels(q,J,$,X,at.convert(tt),at.convert(nt),0);const Tt=A!==null?Pe.get(A).__webglFramebuffer:null;Ge.bindFramebuffer(F.FRAMEBUFFER,Tt);const Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await _w(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(Ye),F.deleteSync(Ot),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,J=0){R.isTexture!==!0&&(tu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-J),X=Math.floor(R.image.width*$),Se=Math.floor(R.image.height*$),we=q!==null?q.x:0,Ve=q!==null?q.y:0;D.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,we,Ve,X,Se),Ge.unbindTexture()},this.copyTextureToTexture=function(R,q,J=null,$=null,X=0){R.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],q=arguments[2],X=arguments[3]||0,J=null);let Se,we,Ve,qe,tt,nt;J!==null?(Se=J.max.x-J.min.x,we=J.max.y-J.min.y,Ve=J.min.x,qe=J.min.y):(Se=R.image.width,we=R.image.height,Ve=0,qe=0),$!==null?(tt=$.x,nt=$.y):(tt=0,nt=0);const Ye=at.convert(q.format),Tt=at.convert(q.type);D.setTexture2D(q,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Ot=F.getParameter(F.UNPACK_ROW_LENGTH),Gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=F.getParameter(F.UNPACK_SKIP_PIXELS),Et=F.getParameter(F.UNPACK_SKIP_ROWS),Ke=F.getParameter(F.UNPACK_SKIP_IMAGES),ln=R.isCompressedTexture?R.mipmaps[X]:R.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ln.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ln.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ve),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,X,tt,nt,Se,we,Ye,Tt,ln.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,X,tt,nt,ln.width,ln.height,Ye,ln.data):F.texSubImage2D(F.TEXTURE_2D,X,tt,nt,Se,we,Ye,Tt,ln),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke),X===0&&q.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(R,q,J=null,$=null,X=0){R.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,$=arguments[1]||null,R=arguments[2],q=arguments[3],X=arguments[4]||0);let Se,we,Ve,qe,tt,nt,Ye,Tt,Ot;const Gt=R.isCompressedTexture?R.mipmaps[X]:R.image;J!==null?(Se=J.max.x-J.min.x,we=J.max.y-J.min.y,Ve=J.max.z-J.min.z,qe=J.min.x,tt=J.min.y,nt=J.min.z):(Se=Gt.width,we=Gt.height,Ve=Gt.depth,qe=0,tt=0,nt=0),$!==null?(Ye=$.x,Tt=$.y,Ot=$.z):(Ye=0,Tt=0,Ot=0);const Dn=at.convert(q.format),Et=at.convert(q.type);let Ke;if(q.isData3DTexture)D.setTexture3D(q,0),Ke=F.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)D.setTexture2DArray(q,0),Ke=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const ln=F.getParameter(F.UNPACK_ROW_LENGTH),ct=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ni=F.getParameter(F.UNPACK_SKIP_PIXELS),Br=F.getParameter(F.UNPACK_SKIP_ROWS),In=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Gt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,nt),R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ke,X,Ye,Tt,Ot,Se,we,Ve,Dn,Et,Gt.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ke,X,Ye,Tt,Ot,Se,we,Ve,Dn,Gt.data):F.texSubImage3D(Ke,X,Ye,Tt,Ot,Se,we,Ve,Dn,Et,Gt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ln),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ni),F.pixelStorei(F.UNPACK_SKIP_ROWS,Br),F.pixelStorei(F.UNPACK_SKIP_IMAGES,In),X===0&&q.generateMipmaps&&F.generateMipmap(Ke),Ge.unbindTexture()},this.initRenderTarget=function(R){Pe.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Ge.unbindTexture()},this.resetState=function(){O=0,L=0,A=null,Ge.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ap?"display-p3":"srgb",t.unpackColorSpace=Ut.workingColorSpace===Iu?"display-p3":"srgb"}}class b0 extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class PC extends Qn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=ai,u=ai,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends Za{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new j,gu=new j,Fg=new an,_l=new lp,Fc=new Uu,Wf=new j,Bg=new j;class LC extends ei{constructor(e=new fr,t=new fp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)mu.fromBufferAttribute(t,r-1),gu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;Fg.copy(r).invert(),_l.copy(e.ray).applyMatrix4(Fg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,h=g-1;_<h;_+=c){const m=u.getX(_),M=u.getX(_+1),S=Bc(this,e,_l,l,m,M);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),h=u.getX(p),m=Bc(this,e,_l,l,_,h);m&&t.push(m)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,h=g-1;_<h;_+=c){const m=Bc(this,e,_l,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=Bc(this,e,_l,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(mu.fromBufferAttribute(o,r),gu.fromBufferAttribute(o,s),t.distanceSqToSegment(mu,gu,Wf,Bg)>i)return;Wf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wf);if(!(l<e.near||l>e.far))return{distance:l,point:Bg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const kg=new j,zg=new j;class E0 extends LC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)kg.fromBufferAttribute(t,r),zg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kg.distanceTo(zg);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Je:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new j,r=[],s=[],o=[],a=new j,l=new an;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new j)}s[0]=new j,o[0]=new j;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(On(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(On(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class w0 extends fs{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Je){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class DC extends w0{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const kc=new j,Xf=new hp,Yf=new hp,qf=new hp;class T0 extends fs{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new j){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(kc.subVectors(r[0],r[1]).add(r[0]),c=kc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(kc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=kc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),h=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),h<1e-4&&(h=_),Xf.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,_,h),Yf.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,_,h),qf.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,_,h)}else this.curveType==="catmullrom"&&(Xf.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Yf.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),qf.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(Xf.calc(l),Yf.calc(l),qf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new j().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hg(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function IC(n,e){const t=1-n;return t*t*e}function UC(n,e){return 2*(1-n)*n*e}function NC(n,e){return n*n*e}function Rl(n,e,t,i){return IC(n,e)+UC(n,t)+NC(n,i)}function OC(n,e){const t=1-n;return t*t*t*e}function FC(n,e){const t=1-n;return 3*t*t*n*e}function BC(n,e){return 3*(1-n)*n*n*e}function kC(n,e){return n*n*n*e}function Cl(n,e,t,i,r){return OC(n,e)+FC(n,t)+BC(n,i)+kC(n,r)}class zC extends fs{constructor(e=new Je,t=new Je,i=new Je,r=new Je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Je){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cl(e,r.x,s.x,o.x,a.x),Cl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HC extends fs{constructor(e=new j,t=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new j){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Cl(e,r.x,s.x,o.x,a.x),Cl(e,r.y,s.y,o.y,a.y),Cl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GC extends fs{constructor(e=new Je,t=new Je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Je){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VC extends fs{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WC extends fs{constructor(e=new Je,t=new Je,i=new Je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Je){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Rl(e,r.x,s.x,o.x),Rl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A0 extends fs{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Rl(e,r.x,s.x,o.x),Rl(e,r.y,s.y,o.y),Rl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XC extends fs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Je){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Hg(a,l.x,c.x,u.x,d.x),Hg(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Je().fromArray(r))}return this}}var YC=Object.freeze({__proto__:null,ArcCurve:DC,CatmullRomCurve3:T0,CubicBezierCurve:zC,CubicBezierCurve3:HC,EllipseCurve:w0,LineCurve:GC,LineCurve3:VC,QuadraticBezierCurve:WC,QuadraticBezierCurve3:A0,SplineCurve:XC});class dp extends fr{constructor(e=new A0(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new j,l=new j,c=new Je;let u=new j;const d=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Wn(d,3)),this.setAttribute("normal",new Wn(f,3)),this.setAttribute("uv",new Wn(p,2));function _(){for(let S=0;S<t;S++)h(S);h(s===!1?t:0),M(),m()}function h(S){u=e.getPointAt(S/t,u);const b=o.normals[S],O=o.binormals[S];for(let L=0;L<=r;L++){const A=L/r*Math.PI*2,E=Math.sin(A),C=-Math.cos(A);l.x=C*b.x+E*O.x,l.y=C*b.y+E*O.y,l.z=C*b.z+E*O.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let b=1;b<=r;b++){const O=(r+1)*(S-1)+(b-1),L=(r+1)*S+(b-1),A=(r+1)*S+b,E=(r+1)*(S-1)+b;g.push(O,L,E),g.push(L,A,E)}}function M(){for(let S=0;S<=t;S++)for(let b=0;b<=r;b++)c.x=S/t,c.y=b/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dp(new YC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class qC extends Za{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i0,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jC extends ei{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class KC extends jC{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(On(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ZC extends E0{constructor(e=10,t=10,i=4473924,r=8947848){i=new vt(i),r=new vt(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new fr;u.setAttribute("position",new Wn(l,3)),u.setAttribute("color",new Wn(c,3));const d=new fp({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class R0 extends E0{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new fr;r.setAttribute("position",new Wn(t,3)),r.setAttribute("color",new Wn(i,3));const s=new fp({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new vt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class JC extends Fo{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);const Vg={type:"change"},pp={type:"start"},C0={type:"end"},zc=new lp,Wg=new As,$C=Math.cos(70*mw.DEG2RAD),gn=new j,ri=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jf=1e-6;class P0 extends JC{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ya.ROTATE,MIDDLE:ya.DOLLY,RIGHT:ya.PAN},this.touches={ONE:ma.ROTATE,TWO:ma.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Do,this._lastTargetPosition=new j,this._quat=new Do().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gg,this._sphericalDelta=new Gg,this._scale=1,this._panOffset=new j,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new j,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eP.bind(this),this._onPointerDown=QC.bind(this),this._onPointerUp=tP.bind(this),this._onContextMenu=lP.bind(this),this._onMouseWheel=rP.bind(this),this._onKeyDown=sP.bind(this),this._onTouchStart=oP.bind(this),this._onTouchMove=aP.bind(this),this._onMouseDown=nP.bind(this),this._onMouseMove=iP.bind(this),this._interceptControlDown=cP.bind(this),this._interceptControlUp=uP.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vg),this.update(),this.state=Bt.NONE}update(e=null){const t=this.object.position;gn.copy(t).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ri:i>Math.PI&&(i-=ri),r<-Math.PI?r+=ri:r>Math.PI&&(r-=ri),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),t.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=gn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<$C?this.object.lookAt(this.target):(Wg.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane(Wg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jf||this._lastTargetPosition.distanceToSquared(this.target)>jf?(this.dispatchEvent(Vg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ri/60*this.autoRotateSpeed*e:ri/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gn.setFromMatrixColumn(t,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,t){this.screenSpacePanning===!0?gn.setFromMatrixColumn(t,1):(gn.setFromMatrixColumn(t,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let s=gn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ri*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ri*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ri*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ri*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function QC(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function eP(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function tP(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(C0),this.state=Bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nP(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ya.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Bt.DOLLY;break;case ya.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}break;case ya.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(pp)}function iP(n){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function rP(n){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(n.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(C0))}function sP(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function oP(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ma.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Bt.TOUCH_ROTATE;break;case ma.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case ma.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Bt.TOUCH_DOLLY_PAN;break;case ma.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(pp)}function aP(n){switch(this._trackPointer(n),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Bt.NONE}}function lP(n){this.enabled!==!1&&n.preventDefault()}function cP(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uP(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Hc=Math.PI/180;function fP(n){const{md:e,tvd:t,inclination:i,azimuth:r}=n,s=e.length,o=[{x:0,y:0,z:0}];let a=0,l=0;for(let c=1;c<s;c++){const u=e[c]-e[c-1],d=i[c-1]*Hc,f=i[c]*Hc,p=r[c-1]*Hc,g=r[c]*Hc,_=Math.acos(Math.cos(f-d)-Math.sin(d)*Math.sin(f)*(1-Math.cos(g-p))),h=_===0?1:2/_*Math.tan(_/2);a+=u/2*(Math.sin(d)*Math.sin(p)+Math.sin(f)*Math.sin(g))*h,l+=u/2*(Math.sin(d)*Math.cos(p)+Math.sin(f)*Math.cos(g))*h,o.push({x:a,y:-t[c],z:l})}return o}var hP=$e('<canvas class="w-full rounded-lg border" style="height: 600px;"></canvas>');function dP(n,e){Xt(e,!0);let t=Qe(void 0),i,r;const s=Array.from({length:50},(a,l)=>new vt().setHSL(l/50,.75,.5));di(()=>{if(!B(t))return;const a=B(t).clientWidth,l=B(t).clientHeight;i=new M0({canvas:B(t),antialias:!0}),i.setSize(a,l),i.setPixelRatio(window.devicePixelRatio);const c=new b0;c.background=new vt(16317180);const u=new wi(45,a/l,1,5e4);u.position.set(2e3,-1500,3e3),u.lookAt(0,-1500,0);const d=new P0(u,B(t));d.enableDamping=!0,d.target.set(0,-1500,0),c.add(new ZC(5e3,20,13421772,14870768)),c.add(new R0(500)),c.add(new KC(16777215,1)),e.wellPaths.forEach(({path:g},_)=>{const h=fP(g),m=new T0(h.map(b=>new j(b.x,b.y,b.z))),M=new dp(m,h.length,8,6,!1),S=new qC({color:s[_%s.length]});c.add(new sr(M,S))});function f(){r=requestAnimationFrame(f),d.update(),i.render(c,u)}f();const p=new ResizeObserver(()=>{const g=B(t).clientWidth,_=B(t).clientHeight;u.aspect=g/_,u.updateProjectionMatrix(),i.setSize(g,_)});return p.observe(B(t)),()=>p.disconnect()}),ql(()=>{r&&cancelAnimationFrame(r),i==null||i.dispose()});var o=hP();jl(o,a=>Ue(t,a),()=>B(t)),Le(n,o),Yt()}var pP=$e('<div class="flex flex-col items-center gap-3 py-12"><!> <p class="text-sm text-muted-foreground"> </p></div>'),mP=$e('<!> <p class="text-xs text-muted-foreground mt-2"> </p>',1),gP=$e('<!> <main class="p-6 max-w-6xl mx-auto"><!></main>',1);function _P(n,e){Xt(e,!0);let t=Qe(Vn([])),i=Qe(!0),r=Qe(""),s=Qe(0);di(async()=>{try{const p=await Ro(e.name,"well_paths"),g=localStorage.getItem("reservoir_api_key")??"",_=await Promise.all(p.map(async h=>{const M=await(await fetch(Zl(e.name,"well_paths",h),{headers:{"X-API-Key":g}})).json();return Ue(s,B(s)+1),{name:h.replace("_path.json",""),path:M}}));Ue(t,_,!0)}catch(p){Ue(r,p instanceof Error?p.message:String(p),!0)}finally{Ue(i,!1)}});var o=gP(),a=kt(o);{let p=Vt(()=>[e.name,"Well Paths"]);Ws(a,{get breadcrumb(){return B(p)}})}var l=lt(a,2),c=et(l);{var u=p=>{cs(p,{variant:"destructive",children:(g,_)=>{var h=Hi();bt(()=>Wt(h,B(r))),Le(g,h)},$$slots:{default:!0}})},d=p=>{var g=pP(),_=et(g);us(_,{class:"h-8 w-8"});var h=lt(_,2),m=et(h);bt(()=>Wt(m,`Loading well paths… ${B(s)??""} fetched`)),Le(p,g)},f=p=>{var g=mP(),_=kt(g);dP(_,{get wellPaths(){return B(t)}});var h=lt(_,2),m=et(h);bt(()=>Wt(m,`${B(t).length??""} wells — drag to rotate, scroll to zoom, right-click to pan`)),Le(p,g)};Xn(c,p=>{B(r)?p(u):B(i)?p(d,1):p(f,-1)})}Le(n,o),Yt()}function vP(n){if(n===0)return 0;const e=n>>>31&1,t=(n>>>24&127)-64,r=(n&16777215)/16777216*Math.pow(16,t);return e?-r:r}function xP(n){const e=new DataView(n),t=e.getInt16(3216,!1),i=e.getInt16(3220,!1),r=e.getInt16(3224,!1),s=240+i*4,o=new Map;let a=3600;for(;a+240+i*4<=n.byteLength;){const f=e.getInt32(a+188,!1),p=e.getInt32(a+192,!1),g=`${f},${p}`,_=new Float32Array(i),h=a+240;for(let m=0;m<i;m++){const M=e.getUint32(h+m*4,!1);_[m]=r===1?vP(M):e.getFloat32(h+m*4,!1)}o.set(g,_),a+=s}const l=new Set,c=new Set;for(const f of o.keys()){const[p,g]=f.split(",").map(Number);l.add(p),c.add(g)}const u=[...l].sort((f,p)=>f-p),d=[...c].sort((f,p)=>f-p);return{samplesPerTrace:i,sampleIntervalUs:t,inlines:u,crosslines:d,amplitude(f,p,g){const _=o.get(`${f},${p}`);return _?_[g]:NaN}}}var yP=$e('<span class="text-xs text-muted-foreground"> </span>'),SP=$e('<div class="flex flex-col gap-1"><!> <input type="range" class="w-full h-2 accent-primary cursor-pointer"/></div>');function Kf(n,e){Xt(e,!0);let t=Dt(e,"value",15,0),i=Dt(e,"min",3,0),r=Dt(e,"max",3,100),s=Dt(e,"step",3,1);var o=SP(),a=et(o);{var l=u=>{var d=yP(),f=et(d);bt(()=>Wt(f,`${e.label??""}: ${t()??""}`)),Le(u,d)};Xn(a,u=>{e.label&&u(l)})}var c=lt(a,2);bt(()=>{or(c,"min",i()),or(c,"max",r()),or(c,"step",s())}),Ao("input",c,u=>{var d;return(d=e.onchange)==null?void 0:d.call(e,Number(u.target.value))}),j_(c,t),Le(n,o),Yt()}Xa(["input"]);var MP=$e('<div class="flex flex-col gap-4"><canvas class="w-full rounded-lg border" style="height: 550px;"></canvas> <div class="grid grid-cols-3 gap-4"><!> <!> <!></div></div>');function bP(n,e){Xt(e,!0);let t=Qe(void 0),i,r,s=Qe(0),o=Qe(0),a=Qe(0),l,c,u,d,f;const p=Vt(()=>e.segy.inlines.length),g=Vt(()=>e.segy.crosslines.length),_=Vt(()=>e.segy.samplesPerTrace);function h(x,P,U){const k=new Uint8Array(P*U);let H=1/0,G=-1/0;for(let Q=0;Q<P;Q++)for(let ae=0;ae<U;ae++){const re=x(Q,ae);isFinite(re)&&(H=Math.min(H,re),G=Math.max(G,re))}const z=G-H||1;for(let Q=0;Q<P;Q++)for(let ae=0;ae<U;ae++)k[Q*U+ae]=Math.round((x(Q,ae)-H)/z*255);const K=new PC(k,U,P,ip);return K.needsUpdate=!0,K}function m(x,P,U){const k=new tc(x,P),H=new cp({map:U,side:Ar});return new sr(k,H)}function M(){if(!d||!l)return;const x=e.segy.inlines[B(s)],P=h((U,k)=>e.segy.amplitude(x,e.segy.crosslines[U],k),B(g),B(_));l.material.map=P,l.material.needsUpdate=!0,l.position.x=B(s)-B(p)/2}function S(){if(!d||!c)return;const x=e.segy.crosslines[B(o)],P=h((U,k)=>e.segy.amplitude(e.segy.inlines[U],x,k),B(p),B(_));c.material.map=P,c.material.needsUpdate=!0,c.position.z=B(o)-B(g)/2}function b(){if(!d||!u)return;const x=h((P,U)=>e.segy.amplitude(e.segy.inlines[P],e.segy.crosslines[U],B(a)),B(p),B(g));u.material.map=x,u.material.needsUpdate=!0,u.position.y=-B(a)+B(_)/2}di(()=>{if(!B(t))return;i=new M0({canvas:B(t),antialias:!0}),i.setSize(B(t).clientWidth,B(t).clientHeight),i.setPixelRatio(window.devicePixelRatio),d=new b0,d.background=new vt(1973806),f=new wi(45,B(t).clientWidth/B(t).clientHeight,.1,2e3),f.position.set(B(p),B(_),B(g)),f.lookAt(0,0,0);const x=new P0(f,B(t));x.enableDamping=!0;const P=h((G,z)=>e.segy.amplitude(e.segy.inlines[0],e.segy.crosslines[G],z),B(g),B(_));l=m(B(g),B(_),P),l.rotation.y=Math.PI/2,d.add(l);const U=h((G,z)=>e.segy.amplitude(e.segy.inlines[G],e.segy.crosslines[0],z),B(p),B(_));c=m(B(p),B(_),U),d.add(c);const k=h((G,z)=>e.segy.amplitude(e.segy.inlines[G],e.segy.crosslines[z],0),B(p),B(g));u=m(B(p),B(g),k),u.rotation.x=Math.PI/2,d.add(u),d.add(new R0(Math.max(B(p),B(g),B(_))*.5));function H(){r=requestAnimationFrame(H),x.update(),i.render(d,f)}H()}),ql(()=>{r&&cancelAnimationFrame(r),i==null||i.dispose()}),Bi(()=>{B(s),M()}),Bi(()=>{B(o),S()}),Bi(()=>{B(a),b()});var O=MP(),L=et(O);jl(L,x=>Ue(t,x),()=>B(t));var A=lt(L,2),E=et(A);{let x=Vt(()=>B(p)-1);Kf(E,{min:0,get max(){return B(x)},step:1,label:"Inline",get value(){return B(s)},set value(P){Ue(s,P,!0)}})}var C=lt(E,2);{let x=Vt(()=>B(g)-1);Kf(C,{min:0,get max(){return B(x)},step:1,label:"Crossline",get value(){return B(o)},set value(P){Ue(o,P,!0)}})}var v=lt(C,2);{let x=Vt(()=>B(_)-1);Kf(v,{min:0,get max(){return B(x)},step:1,label:"Time slice",get value(){return B(a)},set value(P){Ue(a,P,!0)}})}Le(n,O),Yt()}var EP=$e('<div class="flex flex-col items-center gap-3 py-12"><!> <p class="text-sm text-muted-foreground">Loading SEG-Y file…</p></div>'),wP=$e('<!> <p class="text-xs text-muted-foreground mt-2"> </p>',1),TP=$e('<!> <main class="p-6 max-w-6xl mx-auto"><!></main>',1);function AP(n,e){Xt(e,!0);let t=Qe(null),i=Qe(!0),r=Qe("");di(async()=>{try{const p=(await Ro(e.name,"seismic")).find(m=>m.endsWith(".segy")||m.endsWith(".sgy"));if(!p)throw new Error("No SEG-Y file found for this reservoir");const g=localStorage.getItem("reservoir_api_key")??"",h=await(await fetch(Zl(e.name,"seismic",p),{headers:{"X-API-Key":g}})).arrayBuffer();Ue(t,xP(h),!0)}catch(f){Ue(r,f instanceof Error?f.message:String(f),!0)}finally{Ue(i,!1)}});var s=TP(),o=kt(s);{let f=Vt(()=>[e.name,"Seismic"]);Ws(o,{get breadcrumb(){return B(f)}})}var a=lt(o,2),l=et(a);{var c=f=>{cs(f,{variant:"destructive",children:(p,g)=>{var _=Hi();bt(()=>Wt(_,B(r))),Le(p,_)},$$slots:{default:!0}})},u=f=>{var p=EP(),g=et(p);us(g,{class:"h-8 w-8"}),Le(f,p)},d=f=>{var p=wP(),g=kt(p);bP(g,{get segy(){return B(t)}});var _=lt(g,2),h=et(_);bt(()=>Wt(h,`${B(t).inlines.length??""} inlines × ${B(t).crosslines.length??""} crosslines × ${B(t).samplesPerTrace??""} time samples
      — drag to orbit, scroll to zoom, sliders control slice position`)),Le(f,p)};Xn(l,f=>{B(r)?f(c):B(i)?f(u,1):B(t)&&f(d,2)})}Le(n,s),Yt()}var RP=$e("<dialog><!></dialog>");function CP(n,e){Xt(e,!0);let t=Dt(e,"open",15,!1),i=Dt(e,"class",3,""),r=Qe(void 0);Bi(()=>{B(r)&&(t()?B(r).showModal():B(r).close())});var s=RP(),o=et(s);Yl(o,()=>e.children??xn),jl(s,a=>Ue(r,a),()=>B(r)),bt(a=>ls(s,1,a),[()=>Vs(No("rounded-lg border bg-card p-6 shadow-lg backdrop:bg-black/50 w-full max-w-lg",i()))]),gy("close",s,()=>{var a;t(!1),(a=e.onclose)==null||a.call(e)}),Le(n,s),Yt()}var PP=$e('<div class="flex justify-center py-12"><!></div>'),LP=$e('<p class="text-muted-foreground">No core photos available for this reservoir.</p>'),DP=$e('<img class="h-48 rounded-lg border object-cover cursor-pointer hover:opacity-90 transition-opacity"/>'),IP=$e('<section class="mb-8"><h2 class="text-lg font-semibold mb-3"> </h2> <div class="flex flex-wrap gap-3"></div></section>'),UP=$e('<img alt="Core photo" class="w-full rounded"/> <div class="flex justify-end mt-2"><!></div>',1),NP=$e('<!> <main class="p-6 max-w-6xl mx-auto"><!></main> <!>',1);function OP(n,e){Xt(e,!0);let t=Qe(Vn([])),i=Qe(!0),r=Qe(""),s=Qe(""),o=Qe(!1);const a=Vt(()=>()=>{const M=new Map;for(const S of B(t)){const b=S.indexOf("/");if(b===-1)continue;const O=S.slice(0,b);M.has(O)||M.set(O,[]),M.get(O).push(S)}return M});di(async()=>{try{Ue(t,await Ro(e.name,"core_photos"),!0)}catch(M){Ue(r,M instanceof Error?M.message:String(M),!0)}finally{Ue(i,!1)}});function l(M){Ue(s,M,!0),Ue(o,!0)}var c=NP(),u=kt(c);{let M=Vt(()=>[e.name,"Core Photos"]);Ws(u,{get breadcrumb(){return B(M)}})}var d=lt(u,2),f=et(d);{var p=M=>{cs(M,{variant:"destructive",children:(S,b)=>{var O=Hi();bt(()=>Wt(O,B(r))),Le(S,O)},$$slots:{default:!0}})},g=M=>{var S=PP(),b=et(S);us(b,{class:"h-8 w-8"}),Le(M,S)},_=M=>{var S=LP();Le(M,S)},h=M=>{var S=Tr(),b=kt(S);ur(b,17,()=>[...B(a)().entries()],cr,(O,L)=>{var A=Vt(()=>Sd(B(L),2));let E=()=>B(A)[0],C=()=>B(A)[1];var v=IP(),x=et(v),P=et(x),U=lt(x,2);ur(U,21,C,cr,(k,H)=>{var G=DP();bt(z=>{or(G,"src",z),or(G,"alt",B(H))},[()=>xh(e.name,"core_photos",B(H))]),Ao("click",G,()=>l(xh(e.name,"core_photos",B(H)))),Le(k,G)}),bt(()=>Wt(P,E())),Le(O,v)}),Le(M,S)};Xn(f,M=>{B(r)?M(p):B(i)?M(g,1):B(t).length===0?M(_,2):M(h,-1)})}var m=lt(d,2);CP(m,{class:"max-w-3xl p-2",get open(){return B(o)},set open(M){Ue(o,M,!0)},children:(M,S)=>{var b=UP(),O=kt(b),L=lt(O,2),A=et(L);Fd(A,{variant:"outline",size:"sm",onclick:()=>{Ue(o,!1)},children:(E,C)=>{var v=Hi("Close");Le(E,v)},$$slots:{default:!0}}),bt(()=>or(O,"src",B(s))),Le(M,b)},$$slots:{default:!0}}),Le(n,c),Yt()}Xa(["click"]);var FP=$e("<option> </option>"),BP=$e('<div class="flex justify-center py-12"><!></div>'),kP=$e('<pre class="rounded-lg border bg-muted/40 p-4 text-xs overflow-auto max-h-[70vh] font-mono"> </pre>'),zP=$e('<!> <main class="p-6 max-w-4xl mx-auto"><div class="flex items-center gap-4 mb-4"><label class="text-sm font-medium">File:</label> <select class="border rounded-md px-2 py-1 text-sm bg-background flex-1"></select></div> <!></main>',1);function HP(n,e){Xt(e,!0);let t=Qe(Vn([])),i=Qe(""),r=Qe(null),s=Qe(!1),o=Qe("");di(async()=>{try{Ue(t,await Ro(e.name,"osdu_manifests"),!0),B(t).length&&Ue(i,B(t)[0],!0)}catch(h){Ue(o,h instanceof Error?h.message:String(h),!0)}}),Bi(()=>{B(i)&&(Ue(s,!0),Ue(r,null),fetch(Zl(e.name,"osdu_manifests",B(i)),{headers:{"X-API-Key":localStorage.getItem("reservoir_api_key")??""}}).then(h=>h.json()).then(h=>{Ue(r,h,!0)}).catch(h=>{Ue(o,h.message,!0)}).finally(()=>{Ue(s,!1)}))});var a=zP(),l=kt(a);{let h=Vt(()=>[e.name,"OSDU Manifests"]);Ws(l,{get breadcrumb(){return B(h)}})}var c=lt(l,2),u=et(c),d=lt(et(u),2);ur(d,21,()=>B(t),cr,(h,m)=>{var M=FP(),S=et(M),b={};bt(()=>{Wt(S,B(m)),b!==(b=B(m))&&(M.value=(M.__value=B(m))??"")}),Le(h,M)});var f=lt(u,2);{var p=h=>{cs(h,{variant:"destructive",children:(m,M)=>{var S=Hi();bt(()=>Wt(S,B(o))),Le(m,S)},$$slots:{default:!0}})},g=h=>{var m=BP(),M=et(m);us(M,{class:"h-8 w-8"}),Le(h,m)},_=h=>{var m=kP(),M=et(m);bt(S=>Wt(M,S),[()=>JSON.stringify(B(r),null,2)]),Le(h,m)};Xn(f,h=>{B(o)?h(p):B(s)?h(g,1):B(r)&&h(_,2)})}Nd(d,()=>B(i),h=>Ue(i,h)),Le(n,a),Yt()}var GP=$e("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function VP(n,e){Xt(e,!0),Bi(()=>{!wd(Dl)&&window.location.pathname!=="/login"&&Kl("/login",{replace:!0})}),rS(n,{children:(t,i)=>{var r=GP(),s=kt(r);zr(s,{path:"/login",get component(){return ZS}});var o=lt(s,2);zr(o,{path:"/",get component(){return sM}});var a=lt(o,2);zr(a,{path:"/reservoirs/:name",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);uM(g,{get name(){return B(h).name}})}}});var l=lt(a,2);zr(l,{path:"/reservoirs/:name/well_logs",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);gE(g,{get name(){return B(h).name}})}}});var c=lt(l,2);zr(c,{path:"/reservoirs/:name/production",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);TE(g,{get name(){return B(h).name}})}}});var u=lt(c,2);zr(u,{path:"/reservoirs/:name/well_paths",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);_P(g,{get name(){return B(h).name}})}}});var d=lt(u,2);zr(d,{path:"/reservoirs/:name/seismic",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);AP(g,{get name(){return B(h).name}})}}});var f=lt(d,2);zr(f,{path:"/reservoirs/:name/core_photos",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);OP(g,{get name(){return B(h).name}})}}});var p=lt(f,2);zr(p,{path:"/reservoirs/:name/osdu_manifests",children:Js,$$slots:{default:(g,_)=>{const h=Vt(()=>_.params);HP(g,{get name(){return B(h).name}})}}}),Le(t,r)},$$slots:{default:!0}}),Yt()}Sy(VP,{target:document.getElementById("app")});
