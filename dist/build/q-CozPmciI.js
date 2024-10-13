import{u,a8 as f,q as g,h as d,Y as S,i as h,X as x,a0 as n,e as i,a9 as a,a1 as m,a7 as c,Q as _}from"./q-B3V1QaBI.js";import{e as k,d as I,f as p,h as y}from"./q-DylJ3uKQ.js";import{C as v}from"./q-BB4dTYtW.js";const D=async()=>{const[e]=u(),o=prompt("Enter the title of the blog section (max 150 characters):");if(o&&o.length<=150){const l=prompt("Enter an overview for the blog section (max 220 characters):");if(l&&l.length<=220){e.loading=!0,e.isButtonDisabled=!0;try{const s=await k(o,l);e.blogTitle=o,e.blogOverview=l,e.feedback=`Blog section created successfully! ID: ${s}`,localStorage.setItem("blogTitle",o),localStorage.setItem("blogOverview",l),localStorage.setItem("blogId",s);const t=await I(s);t.Pagesections&&(e.pageSectionIds=t.Pagesections.map(r=>r.$id)),setTimeout(()=>{e.feedback=null},3e3)}catch(s){e.feedback="Error creating blog section: "+s,console.error("Error creating blog section:",s)}finally{e.loading=!1}}else e.feedback="Overview is required and must be 220 characters or less."}else e.feedback="Title is required and must be 150 characters or less."},O=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_xscy3vItMAI:D},Symbol.toStringTag,{value:"Module"})),T=()=>{const[e]=u(),o=localStorage.getItem("user");if(o){const l=JSON.parse(o);e.isLoggedIn=!0,e.user=l;const s=localStorage.getItem("blogId");e.blogId=s,s&&I(s).then(t=>{t.image&&(e.blogImage=t.image),t.Pagesections&&(e.pageSectionIds=t.Pagesections.map(r=>r.$id))}).catch(t=>{console.error("Error fetching blog document:",t)})}},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_tMBxFGzy0Q8:T},Symbol.toStringTag,{value:"Module"})),L=async()=>{const[e]=u();try{await p.deleteSession("current"),localStorage.removeItem("user"),localStorage.removeItem("blogTitle"),localStorage.removeItem("blogOverview"),localStorage.removeItem("blogId"),e.isLoggedIn=!1,e.user=null,e.blogTitle=null,e.blogOverview=null,e.pageSectionIds=[],e.isButtonDisabled=!1}catch(o){console.error("Error logging out:",o)}},P=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_qWf9pV9vkho:L},Symbol.toStringTag,{value:"Module"})),w=f(g(()=>d(()=>import("./q-B_zcm6WI.js"),[]),"s_yfJ7uckPMKU")),C=f(g(()=>d(()=>import("./q-BLvcpQmv.js"),[]),"s_C7sbCcjEneQ")),z=()=>{S();const e=h({isLoggedIn:!1,user:null,feedback:null,loading:!1,blogTitle:null,blogOverview:null,isButtonDisabled:!1,pageSectionIds:[],blogId:null,blogImage:null});x(g(()=>d(()=>Promise.resolve().then(()=>E),void 0),"s_tMBxFGzy0Q8",[e]));const l=g(()=>d(()=>Promise.resolve().then(()=>j),void 0),"s_Lv21HWkpdcU",[g(()=>d(()=>Promise.resolve().then(()=>P),void 0),"s_qWf9pV9vkho",[e]),e]),s=g(()=>d(()=>Promise.resolve().then(()=>O),void 0),"s_xscy3vItMAI",[e]);return n("div",null,{class:"m-1 overflow-auto text-center"},e.isLoggedIn?n("div",null,null,e.loading?n("p",null,{class:"m-1 text-center"},"Loading...",3,"D0_3"):n("div",null,null,[n("p",null,null,["Welcome back, ",c(t=>{var r,b;return((r=t.user)==null?void 0:r.name)||((b=t.user)==null?void 0:b.email)},[e]),"!"],3,null),e.feedback&&n("p",null,{class:"m-1 text-center"},c(t=>t.feedback,[e]),3,"D0_4"),n("div",null,{class:"m-1 text-center"},[i(v,{get text(){return e.blogTitle?e.blogTitle:"Create Blog Section"},onClick:s,get disabled(){return e.isButtonDisabled},[a]:{text:c(t=>t.blogTitle?t.blogTitle:"Create Blog Section",[e]),onClick:a,disabled:c(t=>t.isButtonDisabled,[e])}},3,"D0_5"),e.blogOverview&&n("p",null,{class:"m-1 text-center"},c(t=>t.blogOverview,[e]),3,"D0_6"),e.pageSectionIds.length>0&&n("div",null,{class:"m-1"},e.pageSectionIds.map(t=>i(C,{id:t,get blogId(){return e.blogId||""},[a]:{blogId:c(r=>r.blogId||"",[e])}},3,t)),1,"D0_7"),e.blogId?n("div",null,{class:"my-3"},i(w,{text:"Add New Section",[a]:{text:a}},3,"D0_9"),1,null):i(m,null,3,"D0_8")],1,null)],1,null),1,null):i(m,{children:[i(v,{text:"Login",onClick:l,[a]:{text:a,onClick:a}},3,"D0_0"),e.loading&&n("p",null,{class:"m-1 text-center"},"Loading...",3,"D0_1")]},1,"D0_2"),1,"D0_10")},B=async()=>{const[e,o]=u();o.feedback=null,o.loading=!0,o.isLoggedIn&&await e();try{await y();const l=await p.get();o.isLoggedIn=!0,o.user=l,localStorage.setItem("user",JSON.stringify(l)),o.feedback="Login successful!",setTimeout(()=>{o.feedback=null},3e3)}catch(l){o.feedback="Error logging in. Please try again.",console.error("Error logging in:",l)}finally{o.loading=!1}},j=Object.freeze(Object.defineProperty({__proto__:null,_hW:_,s_Lv21HWkpdcU:B},Symbol.toStringTag,{value:"Module"}));export{_ as _hW,L as a,z as b,B as c,T as s,D as s_xscy3vItMAI};
