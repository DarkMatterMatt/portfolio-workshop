function N(){}const lt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function L(){return Object.create(null)}function b(t){t.forEach(J)}function K(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function zt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ot(t){return Object.keys(t).length===0}function ct(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ct(e,n))}function Rt(t,e,n,l){if(t){const r=W(t,e,n,l);return t[0](r)}}function W(t,e,n,l){return t[1]&&l?st(n.ctx.slice(),t[1](l(e))):n.ctx}function Tt(t,e,n,l){if(t[2]&&l){const r=t[2](l(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],i=Math.max(e.dirty.length,r.length);for(let o=0;o<i;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,l,r,u){if(r){const i=W(e,n,l,u);t.p(i,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}const Q=typeof window<"u";let ut=Q?()=>window.performance.now():()=>Date.now(),T=Q?t=>requestAnimationFrame(t):N;const x=new Set;function U(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&T(U)}function at(t){let e;return x.size===0&&T(U),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function ft(){O=!0}function _t(){O=!1}function dt(t,e,n,l){for(;t<e;){const r=t+(e-t>>1);n(r)<=l?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),l=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,_=(r>0&&e[n[r]].claim_order<=c?r+1:dt(1,r,a=>e[n[a]].claim_order,c))-1;l[s]=n[_]+1;const f=_+1;n[f]=s,r=Math.max(f,r)}const u=[],i=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=l[s-1]){for(u.push(e[s-1]);o>=s;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);u.reverse(),i.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<i.length;s++){for(;c<u.length&&i[s].claim_order>=u[c].claim_order;)c++;const _=c<u.length?u[c]:null;t.insertBefore(i[s],_)}}function mt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Y("style");return yt(V(t),e),e.sheet}function yt(t,e){return mt(t.head||t,e),e.sheet}function gt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){O&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Gt(){return F(" ")}function Jt(){return F("")}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,l,r=!1){bt(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,r||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return l()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function $t(t,e,n,l){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let i=0;i<r.attributes.length;i++){const o=r.attributes[i];n[o.name]||u.push(o.name)}u.forEach(i=>r.removeAttribute(i))},()=>l(e))}function Wt(t,e,n){return $t(t,e,n,Y)}function wt(t,e){return Z(t,n=>n.nodeType===3,n=>{const l=""+e;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>F(e),!0)}function Qt(t){return wt(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,l,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let q=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:pt(e),rules:{}};return M.set(t,n),n}function H(t,e,n,l,r,u,i,o=0){const s=16.666/l;let c=`{
`;for(let p=0;p<=1;p+=s){const g=e+(n-e)*u(p);c+=p*100+`%{${i(g,1-g)}}
`}const _=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${o}`,a=V(t),{stylesheet:d,rules:h}=M.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${l}ms linear ${r}ms 1 both`,q+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-l.length;r&&(t.style.animation=l.join(", "),q-=r,q||St())}function St(){T(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),M.clear())})}let E;function v(t){E=t}function tt(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){tt().$$.on_mount.push(t)}function te(t){tt().$$.after_update.push(t)}const w=[],I=[],j=[],G=[],et=Promise.resolve();let R=!1;function nt(){R||(R=!0,et.then(it))}function ee(){return nt(),et}function D(t){j.push(t)}const z=new Set;let C=0;function it(){const t=E;do{for(;C<w.length;){const e=w[C];C++,v(e),Ct(e.$$)}for(v(null),w.length=0,C=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];z.has(n)||(z.add(n),n())}j.length=0}while(w.length);for(;G.length;)G.pop()();R=!1,z.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function B(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const k=new Set;let m;function ne(){m={r:0,c:[],p:m}}function ie(){m.r||b(m.c),m=m.p}function kt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function re(t,e,n,l){if(t&&t.o){if(k.has(t))return;k.add(t),m.c.push(()=>{k.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const Mt={duration:0};function le(t,e,n,l){let r=e(t,n),u=l?0:1,i=null,o=null,s=null;function c(){s&&At(t,s)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=lt,tick:p=N,css:g}=r||Mt,P={start:ut()+d,b:a};a||(P.group=m,m.r+=1),i||o?o=P:(g&&(c(),s=H(t,u,a,h,d,y,g)),a&&p(0,1),i=_(P,h),D(()=>B(t,a,"start")),at(A=>{if(o&&A>o.start&&(i=_(o,h),o=null,B(t,i.b,"start"),g&&(c(),s=H(t,u,i.b,i.duration,0,y,r.css))),i){if(A>=i.end)p(u=i.b,1-u),B(t,i.b,"end"),o||(i.b?c():--i.group.r||b(i.group.c)),i=null;else if(A>=i.start){const rt=A-i.start;u=i.a+i.d*y(rt/i.duration),p(u,1-u)}}return!!(i||o)}))}return{run(a){K(r)?jt().then(()=>{r=r(),f(a)}):f(a)},end(){c(),i=o=null}}}function se(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function qt(t,e,n,l){const{fragment:r,on_mount:u,on_destroy:i,after_update:o}=t.$$;r&&r.m(e,n),l||D(()=>{const s=u.map(J).filter(K);i?i.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(D)}function Dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ce(t,e,n,l,r,u,i,o=[-1]){const s=E;v(t);const c=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:L(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};i&&i(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return c.ctx&&r(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),_&&Ot(t,f)),a}):[],c.update(),_=!0,b(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){ft();const f=xt(e.target);c.fragment&&c.fragment.l(f),f.forEach(X)}else c.fragment&&c.fragment.c();e.intro&&kt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),_t(),it()}v(s)}class ue{$destroy(){Dt(this,1),this.$destroy=N}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{N as A,Rt as B,Ft as C,Lt as D,Tt as E,gt as F,Bt as G,lt as H,Yt as I,D as J,le as K,It as L,zt as M,Xt as N,ue as S,Gt as a,Ht as b,Qt as c,ie as d,Jt as e,kt as f,ne as g,X as h,ce as i,te as j,Y as k,Wt as l,xt as m,Kt as n,Zt as o,Vt as p,F as q,wt as r,Pt as s,re as t,Ut as u,se as v,oe as w,qt as x,Dt as y,ee as z};