import{S as b,i as k,s as v,e as d,a as f,b as y,n as p,d as h,o as C,P as S,c as T,g as P,t as _,f as q,h as m,j as I,m as D,k as w,l as E,p as B,q as g,r as L,u as N,v as O}from"./vendor.22f28242.js";const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}};F();function Z(i){let e;return{c(){e=d("div"),f(e,"class","plot-div"),f(e,"id",i[0])},m(n,a){y(n,e,a)},p(n,[a]){a&1&&f(e,"id",n[0])},i:p,o:p,d(n){n&&h(e)}}}function H(i,e,n){let{data:a=[]}=e,{layout:o={}}=e,{config:t={}}=e,{plotID:s=""}=e;return C(()=>{S.newPlot(document.getElementById(s),a,o,t)}),i.$$set=l=>{"data"in l&&n(1,a=l.data),"layout"in l&&n(2,o=l.layout),"config"in l&&n(3,t=l.config),"plotID"in l&&n(0,s=l.plotID)},[s,a,o,t]}class A extends b{constructor(e){super();k(this,e,H,Z,v,{data:1,layout:2,config:3,plotID:0})}}function Q(i){let e,n;return e=new A({props:{data:i[0],layout:i[1],config:i[2],plotID:i[3]}}),{c(){I(e.$$.fragment)},m(a,o){D(e,a,o),n=!0},p(a,o){const t={};o&1&&(t.data=a[0]),o&2&&(t.layout=a[1]),o&4&&(t.config=a[2]),o&8&&(t.plotID=a[3]),e.$set(t)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){_(e.$$.fragment,a),n=!1},d(a){w(e,a)}}}function J(i){let e,n,a,o,t,s,l;return s=new A({props:{data:i[0],layout:i[1],config:i[2],plotID:i[3]}}),{c(){e=d("div"),n=d("div"),a=E(i[3]),o=B(),t=d("div"),I(s.$$.fragment),f(n,"class","card-header"),f(t,"class","card-body"),f(e,"class","card text-center border-secondary")},m(r,c){y(r,e,c),g(e,n),g(n,a),g(e,o),g(e,t),D(s,t,null),l=!0},p(r,c){(!l||c&8)&&L(a,r[3]);const u={};c&1&&(u.data=r[0]),c&2&&(u.layout=r[1]),c&4&&(u.config=r[2]),c&8&&(u.plotID=r[3]),s.$set(u)},i(r){l||(m(s.$$.fragment,r),l=!0)},o(r){_(s.$$.fragment,r),l=!1},d(r){r&&h(e),w(s)}}}function K(i){let e,n,a,o;const t=[J,Q],s=[];function l(r,c){return r[4]?0:1}return e=l(i),n=s[e]=t[e](i),{c(){n.c(),a=T()},m(r,c){s[e].m(r,c),y(r,a,c),o=!0},p(r,[c]){let u=e;e=l(r),e===u?s[e].p(r,c):(P(),_(s[u],1,1,()=>{s[u]=null}),q(),n=s[e],n?n.p(r,c):(n=s[e]=t[e](r),n.c()),m(n,1),n.m(a.parentNode,a))},i(r){o||(m(n),o=!0)},o(r){_(n),o=!1},d(r){s[e].d(r),r&&h(a)}}}function R(i,e,n){let{data:a=[]}=e,{layout:o={}}=e,{config:t={}}=e,{plotID:s=""}=e,{border:l}=e;return console.log(l),i.$$set=r=>{"data"in r&&n(0,a=r.data),"layout"in r&&n(1,o=r.layout),"config"in r&&n(2,t=r.config),"plotID"in r&&n(3,s=r.plotID),"border"in r&&n(4,l=r.border)},[a,o,t,s,l]}class W extends b{constructor(e){super();k(this,e,R,K,v,{data:0,layout:1,config:2,plotID:3,border:4})}}function j(i,e,n){const a=i.slice();return a[1]=e[n],a}function M(i){let e,n,a,o;return n=new W({props:{data:i[1].data,layout:i[1].layout,config:i[1].config,plotID:i[1].id,border:!0}}),{c(){e=d("div"),I(n.$$.fragment),a=B(),f(e,"class","col")},m(t,s){y(t,e,s),D(n,e,null),g(e,a),o=!0},p,i(t){o||(m(n.$$.fragment,t),o=!0)},o(t){_(n.$$.fragment,t),o=!1},d(t){t&&h(e),w(n)}}}function z(i){let e,n,a,o=i[0],t=[];for(let l=0;l<o.length;l+=1)t[l]=M(j(i,o,l));const s=l=>_(t[l],1,1,()=>{t[l]=null});return{c(){e=d("div"),n=d("div");for(let l=0;l<t.length;l+=1)t[l].c();f(n,"class","row row-cols-1 row-cols-md-2 g-2"),f(e,"class","container-fluid gutter")},m(l,r){y(l,e,r),g(e,n);for(let c=0;c<t.length;c+=1)t[c].m(n,null);a=!0},p(l,[r]){if(r&1){o=l[0];let c;for(c=0;c<o.length;c+=1){const u=j(l,o,c);t[c]?(t[c].p(u,r),m(t[c],1)):(t[c]=M(u),t[c].c(),m(t[c],1),t[c].m(n,null))}for(P(),c=o.length;c<t.length;c+=1)s(c);q()}},i(l){if(!a){for(let r=0;r<o.length;r+=1)m(t[r]);a=!0}},o(l){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)_(t[r]);a=!1},d(l){l&&h(e),N(t,l)}}}function G(i){const e=[];for(let n=0;n<10;n++)e.push({id:"chart"+n,data:[{name:"trace 0",x:[0,1,2,3,4],y:[1,5,3,7,5],mode:"lines",type:"scatter"},{name:"trace B",x:[1,2,3,4,5],y:[4,0,4,6,8],mode:"lines+markers",type:"scatter"}],layout:{margin:{t:10}},config:{responsive:!0,displayModeBar:!1}});return[e]}class U extends b{constructor(e){super();k(this,e,G,z,v,{})}}function V(i){let e,n,a,o,t,s;return t=new U({}),{c(){e=d("link"),n=d("script"),o=B(),I(t.$$.fragment),f(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"),f(e,"rel","stylesheet"),f(e,"integrity","sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"),f(e,"crossorigin","anonymous"),O(n.src,a="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js")||f(n,"src",a),f(n,"integrity","sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"),f(n,"crossorigin","anonymous")},m(l,r){g(document.head,e),g(document.head,n),y(l,o,r),D(t,l,r),s=!0},p,i(l){s||(m(t.$$.fragment,l),s=!0)},o(l){_(t.$$.fragment,l),s=!1},d(l){h(e),h(n),l&&h(o),w(t,l)}}}class X extends b{constructor(e){super();k(this,e,null,V,v,{})}}new X({target:document.body});
