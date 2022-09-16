import{N as Xe,S as We,i as Fe,s as Je,e as i,t as I,k as z,c as h,a as u,h as y,d as o,m as w,b as f,O as re,g as S,J as s,n as ce,P as Ye,x as Ee,y as ze,z as we,r as B,p as X,C as xe,K as Ze,f as et,q as De,L as $e,o as Te}from"../chunks/index-92502c41.js";import{b as M,a as tt}from"../chunks/paths-396f020f.js";import{C as Ke}from"../chunks/card-58fc12cb.js";import{p as lt}from"../chunks/projects-c4100f22.js";import{i as L}from"../chunks/general-info-a55be06f.js";var Le=[{title:"Computer Science & Design",description:"I am a fourth year Computer Science and Design student at the University of Auckland",image_url:"armImg_hpusqb.webp",follow_url:"https://github.com/etinaude/sandtable"},{title:"Headstrong Messenger",description:"I am part of a research team which created an interactive Ionic chatbot app to help struggling teen with depression and anxiety. I am currently heading front end development for this project, using Ionic and Angular.",image_url:"headstrongImg_wv4vdq.webp",follow_url:"https://appadvice.com/app/habits-messenger/1550723158"}];const rt=()=>{const a=Xe("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},st={subscribe(a){return rt().page.subscribe(a)}};function at(a){let r,c,l,v,p,k,$,j,g,C,x,E,O,q;return{c(){r=i("header"),c=i("nav"),l=i("ul"),v=i("li"),p=i("a"),k=I("Home"),$=z(),j=i("li"),g=i("a"),C=I("Projects"),x=z(),E=i("li"),O=i("a"),q=I("Contact"),this.h()},l(H){r=h(H,"HEADER",{class:!0});var A=u(r);c=h(A,"NAV",{class:!0});var W=u(c);l=h(W,"UL",{class:!0});var m=u(l);v=h(m,"LI",{class:!0});var R=u(v);p=h(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Y=u(p);k=y(Y,"Home"),Y.forEach(o),R.forEach(o),$=w(m),j=h(m,"LI",{class:!0});var Z=u(j);g=h(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var D=u(g);C=y(D,"Projects"),D.forEach(o),Z.forEach(o),x=w(m),E=h(m,"LI",{class:!0});var ee=u(E);O=h(ee,"A",{href:!0,class:!0});var T=u(O);q=y(T,"Contact"),T.forEach(o),ee.forEach(o),m.forEach(o),W.forEach(o),A.forEach(o),this.h()},h(){f(p,"sveltekit:prefetch",""),f(p,"href",M),f(p,"class","svelte-zkchb9"),f(v,"class","svelte-zkchb9"),re(v,"active",a[0].url.pathname===M),f(g,"sveltekit:prefetch",""),f(g,"href",`${M}/projects`),f(g,"class","svelte-zkchb9"),f(j,"class","svelte-zkchb9"),re(j,"active",a[0].url.pathname===`${M}/projects`),f(O,"href",`${M}#cta`),f(O,"class","svelte-zkchb9"),f(E,"class","svelte-zkchb9"),re(E,"active",a[0].url.pathname===`${M}/contact`),f(l,"class","svelte-zkchb9"),f(c,"class","svelte-zkchb9"),f(r,"class","svelte-zkchb9")},m(H,A){S(H,r,A),s(r,c),s(c,l),s(l,v),s(v,p),s(p,k),s(l,$),s(l,j),s(j,g),s(g,C),s(l,x),s(l,E),s(E,O),s(O,q)},p(H,[A]){A&1&&re(v,"active",H[0].url.pathname===M),A&1&&re(j,"active",H[0].url.pathname===`${M}/projects`),A&1&&re(E,"active",H[0].url.pathname===`${M}/contact`)},i:ce,o:ce,d(H){H&&o(r)}}}function ot(a,r,c){let l;return Ye(a,st,v=>c(0,l=v)),[l]}class nt extends We{constructor(r){super(),Fe(this,r,ot,at,Je,{})}}function Me(a,r,c){const l=a.slice();return l[1]=r[c],l}function qe(a,r,c){const l=a.slice();return l[4]=r[c],l}function Ue(a,r,c){const l=a.slice();return l[7]=r[c],l}function Ve(a){let r,c;return r=new Ke({props:{title:a[7].title,description:a[7].description,image_url:a[7].image_url,follow_url:a[7].follow_url}}),{c(){Ee(r.$$.fragment)},l(l){ze(r.$$.fragment,l)},m(l,v){we(r,l,v),c=!0},p:ce,i(l){c||(B(r.$$.fragment,l),c=!0)},o(l){X(r.$$.fragment,l),c=!1},d(l){xe(r,l)}}}function Be(a){let r,c;return r=new Ke({props:{title:a[4].title,description:a[4].description,image_url:a[4].image_url,follow_url:a[4].follow_url}}),{c(){Ee(r.$$.fragment)},l(l){ze(r.$$.fragment,l)},m(l,v){we(r,l,v),c=!0},p:ce,i(l){c||(B(r.$$.fragment,l),c=!0)},o(l){X(r.$$.fragment,l),c=!1},d(l){xe(r,l)}}}function Re(a){let r,c=a[1].type+"",l,v,p,k=a[1].displayText+"",$,j,g;return{c(){r=i("p"),l=I(c),v=I(": "),p=i("a"),$=I(k),g=z(),this.h()},l(C){r=h(C,"P",{});var x=u(r);l=y(x,c),v=y(x,": "),p=h(x,"A",{href:!0});var E=u(p);$=y(E,k),E.forEach(o),g=w(x),x.forEach(o),this.h()},h(){f(p,"href",j=a[1].url)},m(C,x){S(C,r,x),s(r,l),s(r,v),s(r,p),s(p,$),s(r,g)},p:ce,d(C){C&&o(r)}}}function ct(a){let r,c,l,v,p,k,$,j=L.firstName+"",g,C,x=L.lastName+"",E,O,q,H=L.tagLine+"",A,W,m,R,Y,Z,D,ee,T,de,ie,F,se,_e,he,U,ae,me,ge,J,ue,V,oe,be,ke,K,ne;document.title=r=L.firstName+" "+L.lastName,l=new nt({});let G=a[0],d=[];for(let e=0;e<G.length;e+=1)d[e]=Ve(Ue(a,G,e));const Ge=e=>X(d[e],1,1,()=>{d[e]=null});let Q=Le,_=[];for(let e=0;e<Q.length;e+=1)_[e]=Be(qe(a,Q,e));const Qe=e=>X(_[e],1,1,()=>{_[e]=null});let te=L.contacts,b=[];for(let e=0;e<te.length;e+=1)b[e]=Re(Me(a,te,e));return{c(){c=z(),Ee(l.$$.fragment),v=z(),p=i("section"),k=i("div"),$=i("h1"),g=I(j),C=z(),E=I(x),O=z(),q=i("h2"),A=I(H),W=z(),m=i("section"),R=i("h2"),Y=I("Projects"),Z=z(),D=i("div");for(let e=0;e<d.length;e+=1)d[e].c();ee=z(),T=i("a"),de=I("More Projects \u2192"),ie=z(),F=i("section"),se=i("h2"),_e=I("Current Work"),he=z(),U=i("section"),ae=i("h2"),me=I("Experince"),ge=z(),J=i("div");for(let e=0;e<_.length;e+=1)_[e].c();ue=z(),V=i("section"),oe=i("h1"),be=I("Contact Me"),ke=z(),K=i("div");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){Ze('[data-svelte="svelte-1i7xi25"]',document.head).forEach(o),c=w(e),ze(l.$$.fragment,e),v=w(e),p=h(e,"SECTION",{id:!0,style:!0});var t=u(p);k=h(t,"DIV",{class:!0});var N=u(k);$=h(N,"H1",{});var fe=u($);g=y(fe,j),C=w(fe),E=y(fe,x),fe.forEach(o),O=w(N),q=h(N,"H2",{});var Ie=u(q);A=y(Ie,H),Ie.forEach(o),N.forEach(o),t.forEach(o),W=w(e),m=h(e,"SECTION",{id:!0});var le=u(m);R=h(le,"H2",{});var ye=u(R);Y=y(ye,"Projects"),ye.forEach(o),Z=w(le),D=h(le,"DIV",{class:!0});var je=u(D);for(let P=0;P<d.length;P+=1)d[P].l(je);je.forEach(o),ee=w(le),T=h(le,"A",{class:!0,href:!0});var Ce=u(T);de=y(Ce,"More Projects \u2192"),Ce.forEach(o),le.forEach(o),ie=w(e),F=h(e,"SECTION",{id:!0});var Ne=u(F);se=h(Ne,"H2",{});var Se=u(se);_e=y(Se,"Current Work"),Se.forEach(o),Ne.forEach(o),he=w(e),U=h(e,"SECTION",{id:!0});var pe=u(U);ae=h(pe,"H2",{});var He=u(ae);me=y(He,"Experince"),He.forEach(o),ge=w(pe),J=h(pe,"DIV",{class:!0});var Ae=u(J);for(let P=0;P<_.length;P+=1)_[P].l(Ae);Ae.forEach(o),pe.forEach(o),ue=w(e),V=h(e,"SECTION",{id:!0});var ve=u(V);oe=h(ve,"H1",{});var Oe=u(oe);be=y(Oe,"Contact Me"),Oe.forEach(o),ke=w(ve),K=h(ve,"DIV",{class:!0});var Pe=u(K);for(let P=0;P<b.length;P+=1)b[P].l(Pe);Pe.forEach(o),ve.forEach(o),this.h()},h(){f(k,"class","header-text"),f(p,"id","about"),et(p,"--imageUrl",`url(${tt}/images/${L.heroImage})`),f(D,"class","flex-row"),f(T,"class","button more-projects-btn"),f(T,"href",`${M}/projects`),f(m,"id","projects"),f(F,"id","work"),f(J,"class","flex-row"),f(U,"id","awards"),f(K,"class","contacts"),f(V,"id","cta")},m(e,n){S(e,c,n),we(l,e,n),S(e,v,n),S(e,p,n),s(p,k),s(k,$),s($,g),s($,C),s($,E),s(k,O),s(k,q),s(q,A),S(e,W,n),S(e,m,n),s(m,R),s(R,Y),s(m,Z),s(m,D);for(let t=0;t<d.length;t+=1)d[t].m(D,null);s(m,ee),s(m,T),s(T,de),S(e,ie,n),S(e,F,n),s(F,se),s(se,_e),S(e,he,n),S(e,U,n),s(U,ae),s(ae,me),s(U,ge),s(U,J);for(let t=0;t<_.length;t+=1)_[t].m(J,null);S(e,ue,n),S(e,V,n),s(V,oe),s(oe,be),s(V,ke),s(V,K);for(let t=0;t<b.length;t+=1)b[t].m(K,null);ne=!0},p(e,[n]){if((!ne||n&0)&&r!==(r=L.firstName+" "+L.lastName)&&(document.title=r),n&1){G=e[0];let t;for(t=0;t<G.length;t+=1){const N=Ue(e,G,t);d[t]?(d[t].p(N,n),B(d[t],1)):(d[t]=Ve(N),d[t].c(),B(d[t],1),d[t].m(D,null))}for(Te(),t=G.length;t<d.length;t+=1)Ge(t);De()}if(n&16){Q=Le;let t;for(t=0;t<Q.length;t+=1){const N=qe(e,Q,t);_[t]?(_[t].p(N,n),B(_[t],1)):(_[t]=Be(N),_[t].c(),B(_[t],1),_[t].m(J,null))}for(Te(),t=Q.length;t<_.length;t+=1)Qe(t);De()}if(n&0){te=L.contacts;let t;for(t=0;t<te.length;t+=1){const N=Me(e,te,t);b[t]?b[t].p(N,n):(b[t]=Re(N),b[t].c(),b[t].m(K,null))}for(;t<b.length;t+=1)b[t].d(1);b.length=te.length}},i(e){if(!ne){B(l.$$.fragment,e);for(let n=0;n<G.length;n+=1)B(d[n]);for(let n=0;n<Q.length;n+=1)B(_[n]);ne=!0}},o(e){X(l.$$.fragment,e),d=d.filter(Boolean);for(let n=0;n<d.length;n+=1)X(d[n]);_=_.filter(Boolean);for(let n=0;n<_.length;n+=1)X(_[n]);ne=!1},d(e){e&&o(c),xe(l,e),e&&o(v),e&&o(p),e&&o(W),e&&o(m),$e(d,e),e&&o(ie),e&&o(F),e&&o(he),e&&o(U),$e(_,e),e&&o(ue),e&&o(V),$e(b,e)}}}const dt=!0;function it(a){return[lt.slice(0,3)]}class _t extends We{constructor(r){super(),Fe(this,r,it,ct,Je,{})}}export{_t as default,dt as prerender};