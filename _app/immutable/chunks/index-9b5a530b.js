function k(){}const rt=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function x(t){t.forEach(K)}function Q(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Dt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ct(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function zt(t,e,n,o){if(t){const r=W(t,e,n,o);return t[0](r)}}function W(t,e,n,o){return t[1]&&o?ot(n.ctx.slice(),t[1](o(e))):n.ctx}function Bt(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],i=Math.max(e.dirty.length,r.length);for(let l=0;l<i;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function Ft(t,e,n,o,r,s){if(r){const i=W(e,n,o,s);t.p(i,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}const U=typeof window!="undefined";let st=U?()=>window.performance.now():()=>Date.now(),F=U?t=>requestAnimationFrame(t):k;const b=new Set;function V(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&F(V)}function ut(t){let e;return b.size===0&&F(V),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let O=!1;function at(){O=!0}function ft(){O=!1}function _t(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:_t(1,r,a=>e[n[a]].claim_order,u))-1;o[c]=n[_]+1;const f=_+1;n[f]=c,r=Math.max(f,r)}const s=[],i=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=o[c-1]){for(s.push(e[c-1]);l>=c;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);s.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<s.length&&i[c].claim_order>=s[u].claim_order;)u++;const _=u<s.length?s[u]:null;t.insertBefore(i[c],_)}}function ht(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=Y("style");return pt(X(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(O){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){O&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function Gt(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,o,r=!1){xt(t);const s=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,r||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return o()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function $t(t,e,n,o){return Z(t,r=>r.nodeName===e,r=>{const s=[];for(let i=0;i<r.attributes.length;i++){const l=r.attributes[i];n[l.name]||s.push(l.name)}s.forEach(i=>r.removeAttribute(i))},()=>o(e))}function Qt(t,e,n){return $t(t,e,n,Y)}function wt(t,e){return Z(t,n=>n.nodeType===3,n=>{const o=""+e;if(n.data.startsWith(o)){if(n.data.length!==o.length)return n.splitText(o.length)}else n.data=o},()=>L(e),!0)}function Wt(t){return wt(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,o,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let q=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:mt(e),rules:{}};return M.set(t,n),n}function I(t,e,n,o,r,s,i,l=0){const c=16.666/o;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*s(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${l}`,a=X(t),{stylesheet:d,rules:h}=M.get(a)||kt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${o}ms linear ${r}ms 1 both`,q+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),r=n.length-o.length;r&&(t.style.animation=o.join(", "),q-=r,q||Ct())}function Ct(){F(()=>{q||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function P(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){P().$$.on_mount.push(t)}function te(t){P().$$.after_update.push(t)}function ee(t,e){return P().$$.context.set(t,e),e}function ne(t){return P().$$.context.get(t)}const w=[],G=[],j=[],J=[],tt=Promise.resolve();let B=!1;function et(){B||(B=!0,tt.then(nt))}function ie(){return et(),tt}function R(t){j.push(t)}const T=new Set;let N=0;function nt(){const t=E;do{for(;N<w.length;){const e=w[N];N++,v(e),Nt(e.$$)}for(v(null),w.length=0,N=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];T.has(n)||(T.add(n),n())}j.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,T.clear(),v(t)}function Nt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let $;function jt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function z(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const S=new Set;let m;function re(){m={r:0,c:[],p:m}}function oe(){m.r||x(m.c),m=m.p}function St(t,e){t&&t.i&&(S.delete(t),t.i(e))}function ce(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),m.c.push(()=>{S.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const Mt={duration:0};function le(t,e,n,o){let r=e(t,n),s=o?0:1,i=null,l=null,c=null;function u(){c&&At(t,c)}function _(a,d){const h=a.b-s;return d*=Math.abs(h),{a:s,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=rt,tick:p=k,css:g}=r||Mt,D={start:st()+d,b:a};a||(D.group=m,m.r+=1),i||l?l=D:(g&&(u(),c=I(t,s,a,h,d,y,g)),a&&p(0,1),i=_(D,h),R(()=>z(t,a,"start")),ut(A=>{if(l&&A>l.start&&(i=_(l,h),l=null,z(t,i.b,"start"),g&&(u(),c=I(t,s,i.b,i.duration,0,y,r.css))),i){if(A>=i.end)p(s=i.b,1-s),z(t,i.b,"end"),l||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(A>=i.start){const it=A-i.start;s=i.a+i.d*y(it/i.duration),p(s,1-s)}}return!!(i||l)}))}return{run(a){Q(r)?jt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),i=l=null}}}function se(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],l=e[s];if(l){for(const c in i)c in l||(o[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[s]=l}else for(const c in i)r[c]=1}for(const i in o)i in n||(n[i]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function qt(t,e,n,o){const{fragment:r,on_mount:s,on_destroy:i,after_update:l}=t.$$;r&&r.m(e,n),o||R(()=>{const c=s.map(K).filter(Q);i?i.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(R)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,o,r,s,i,l=[-1]){const c=E;v(t);const u=t.$$={fragment:null,ctx:null,props:s,update:k,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){at();const f=bt(e.target);u.fragment&&u.fragment.l(f),f.forEach(gt)}else u.fragment&&u.fragment.c();e.intro&&St(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),ft(),nt()}v(c)}class de{$destroy(){Rt(this,1),this.$destroy=k}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as A,ue as B,Rt as C,ot as D,ie as E,zt as F,Ft as G,Lt as H,Bt as I,yt as J,Yt as K,It as L,Dt as M,ne as N,Xt as O,Tt as P,rt as Q,R,de as S,le as T,bt as a,Kt as b,Qt as c,gt as d,Y as e,Vt as f,Ht as g,wt as h,_e as i,Ut as j,Gt as k,Jt as l,Wt as m,k as n,re as o,ce as p,oe as q,St as r,Pt as s,L as t,ee as u,te as v,Zt as w,ae as x,fe as y,qt as z};