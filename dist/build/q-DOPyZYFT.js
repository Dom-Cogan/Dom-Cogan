import{a8 as m,q as _,h as g,u,Y as p,b as d,i as P,X as b,a0 as r,e as l,a9 as c,a7 as v,a1 as x,Q as y}from"./q-nDBOl5zT.js";import{d as S,i as T,I as h}from"./q-WbeUaQZ1.js";import{B as I}from"./q-CcxcVdWh.js";import{s as L,h as f,p as E}from"./q-DuN2jobl.js";const j=m(_(()=>g(()=>import("./q-Ci2shwlw.js"),[]),"s_BYJFogMmj5g")),B=m(_(()=>g(()=>import("./q-DuN2jobl.js").then(a=>a.l),[]),"s_C3I542fyxnM")),D=async()=>{const[a,i]=u(),t=await S(i);console.log(t);const o=t.Pagesections.map(n=>n.$id),s=await Promise.all(o.map(async n=>{const e=await T(n);return{id:e.$id,pageSections:e.pageSections}}));a.blogPost={title:t.title,sections:s},console.log(a.blogPost)},U=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_apcqvFnvTxU:D},Symbol.toStringTag,{value:"Module"})),A=()=>{p();const i=d().params.id,t=P({blogPost:null});return b(_(()=>g(()=>Promise.resolve().then(()=>U),void 0),"s_apcqvFnvTxU",[t,i])),r("div",null,{class:E},t.blogPost?l(x,{children:[l(j,{get text(){return t.blogPost.title},[c]:{text:v(o=>o.blogPost.title,[t])}},3,"4y_0"),t.blogPost.sections.map(o=>r("div",null,{class:L},o.pageSections.map((s,n)=>p(r("div",{class:[s.type==="header"?f:""]},null,s.type==="break"?l(I,null,3,"4y_1"):s.type==="image"?s.imageURL.map(e=>(console.log(e),l(h,{altText:"Image Item",imageSrc:e,[c]:{altText:c}},3,e))):s.content,1,s.type+n))),1,o.id))]},1,"4y_2"):l(B,{message:"blog",[c]:{message:c}},3,"4y_3"),1,"4y_4")};export{B as L,j as T,y as _hW,A as s,D as s_apcqvFnvTxU};
