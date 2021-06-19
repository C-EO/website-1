import{o as t,b as e,e as a,d as l,r as n,c as s,L as r,l as o,k as d,M as u,p as i,f as c,w as p,t as f,N as g,F as v,q as m,g as x,x as b,y,h,z as k,A as w,O as _,P as F,Q as T,R as j}from"./vendor.60e4b40c.js";import{M as S,i as C,u as V,C as E,a as M,R as z,f as B}from"./index.66ba1066.js";import{_ as D,a as R}from"./chevron-down.015708fe.js";import{D as A,a as I,b as U,L as K,c as L,d as O,e as Y,S as q,f as N,g as P}from"./headlessui.esm.fccd049d.js";import{_ as Q}from"./Spinner.56ea8f23.js";const $={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},G=a("g",{fill:"none"},[a("path",{d:"M5 15l7-7l7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var H={render:function(a,l){return t(),e("svg",$,[G])}};const J=a("span",{class:"sr-only"},"Open menu",-1),W={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},X={class:"my-5 px-2 space-y-1 z-10"},Z={class:"pb-1"},tt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},et={class:"sr-only"},at=x(" Docs settings "),lt={class:"relative mt-1"},nt={class:"relative mt-1"},st={class:"flex justify-between px-2"},rt=x("Show privates"),ot={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},dt={class:"sr-only"},ut={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},it={class:"sr-only"},ct=x(" Classes "),pt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft={class:"sr-only"},gt=x(" Typedefs ");var vt=l({expose:[],setup(l){var _,F,T,j,E;const M=k(),z=b(),B=V(),Q=y(w).greater("lg"),$=n(!1),G=n(),vt=s((()=>B.state.sources)),mt=s((()=>B.state.source)),xt=s((()=>B.state.tag)),bt=s((()=>B.state.docs)),yt=s((()=>B.state.branches)),ht=s((()=>vt.value.find((t=>z.params.source===t.id)))),kt=r({source:null!=(F=null==(_=ht.value)?void 0:_.source)?F:S,name:null!=(j=null==(T=ht.value)?void 0:T.name)?j:S.name}),wt=n(null!=(E=z.params.tag)?E:S.defaultTag),_t=s((()=>{var t,e;return C.value?null==(t=bt.value)?void 0:t.classes:null==(e=bt.value)?void 0:e.classes.filter((t=>"private"!==t.access))})),Ft=s((()=>{var t,e;return C.value?null==(t=bt.value)?void 0:t.typedefs:null==(e=bt.value)?void 0:e.typedefs.filter((t=>"private"!==t.access))}));return o(G,(()=>$.value=!1)),d(Q,(()=>$.value=!1),{immediate:!0}),u((()=>z.params),(t=>wt.value=t.tag)),u([kt,wt],(async([t,e],[a,l])=>t!==a?(wt.value=t.source.defaultTag,M.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:t.source.defaultTag,category:t.source.defaultFile.category,file:t.source.defaultFile.id}})):e!==l?M.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:e,category:t.source.defaultFile.category,file:t.source.defaultFile.id}}):void 0)),(l,n)=>{var s,r,o;const d=D,u=R,b=H,y=h("router-link");return t(),e(v,null,[$.value?i("",!0):(t(),e("div",{key:0,class:["block fixed lg:hidden z-10 transition-transform transform-gpu",$.value?"translate-x-72 md:translate-x-80":null]},[a("button",{type:"button",class:"\n\t\t\t\trounded-md rounded-l-none rounded-tr-none\n\t\t\t\tp-3\n\t\t\t\tinline-flex\n\t\t\t\titems-center\n\t\t\t\tjustify-center\n\t\t\t\ttext-gray-200\n\t\t\t\tbg-discord-blurple-600\n\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t","aria-controls":"sidebar-menu","aria-expanded":$.value,onClick:n[1]||(n[1]=t=>$.value=!$.value)},[J,a(d,{class:["h-6 w-6",{hidden:$.value,block:!$.value}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])],2)),a("div",{ref:G,class:["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",$.value?"translate-x-0":"-translate-x-full lg:translate-x-0"]},[a("div",W,[a("nav",X,[a("ul",null,[a("li",Z,[a(c(A),null,{default:p((({open:l})=>[a(c(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:p((()=>[a("div",tt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",et,f(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),at])])),_:2},1024),a(c(U),{as:"ul",class:"px-2 space-y-3"},{default:p((()=>[a("li",null,[a(c(K),{modelValue:c(kt),"onUpdate:modelValue":n[2]||(n[2]=t=>g(kt)?kt.value=t:kt=t)},{default:p((({open:l})=>[a("div",lt,[a(c(L),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:p((()=>[a("span",null,f(c(kt).name),1),l?i("",!0):(t(),e(u,{key:0})),l?(t(),e(b,{key:1})):i("",!0)])),_:2},1024),a(c(O),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:p((()=>[(t(!0),e(v,null,m(c(vt),(l=>(t(),e(c(Y),{key:l.source.id,class:"cursor-default",value:l},{default:p((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},f(l.name),3)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(c(K),{modelValue:wt.value,"onUpdate:modelValue":n[3]||(n[3]=t=>wt.value=t)},{default:p((({open:l})=>[a("div",nt,[a(c(L),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:p((()=>[a("span",null,f(wt.value),1),l?i("",!0):(t(),e(u,{key:0})),l?(t(),e(b,{key:1})):i("",!0)])),_:2},1024),a(c(O),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:p((()=>[(t(!0),e(v,null,m(c(yt),(l=>(t(),e(c(Y),{key:l,class:"cursor-default",value:l},{default:p((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-blurple-500 text-gray-200":t}]},f(l),3)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(c(q),null,{default:p((()=>[a("div",st,[a(c(N),{class:"mr-4 dark:text-gray-200"},{default:p((()=>[rt])),_:1}),a(c(P),{modelValue:c(C),"onUpdate:modelValue":n[4]||(n[4]=t=>g(C)?C.value=t:null),class:["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",c(C)?"bg-discord-red-500":"bg-gray-500"]},{default:p((()=>[a("span",{class:["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",c(C)?"translate-x-6":"translate-x-1"]},null,2)])),_:1},8,["modelValue","class"])])])),_:1})])])),_:1})])),_:1})]),(t(!0),e(v,null,m(null==(s=c(bt))?void 0:s.custom,((l,s)=>(t(),e("li",{key:s},[a(c(A),{"default-open":!0},{default:p((({open:r})=>[a(c(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:p((()=>[a("div",ot,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":r},[a("span",dt,f(r?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:r}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!r}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),x(" "+f(l.name),1)])])),_:2},1024),a(c(U),{as:"ul"},{default:p((()=>[(t(!0),e(v,null,m(l.files,((l,r)=>{var o;return t(),e("li",{key:r},[a(y,{to:{name:"docs-source-tag-category-file",params:{source:null==(o=c(mt))?void 0:o.id,tag:c(xt),category:s,file:r}},class:"\n\t\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[5]||(n[5]=t=>$.value=!1)},{default:p((()=>[x(f("object"==typeof l?l.name:l),1)])),_:2},1032,["to"])])})),128))])),_:2},1024)])),_:2},1024)])))),128)),(null==(r=c(_t))?void 0:r.length)?(t(),e(c(A),{key:0,as:"li","default-open":!0},{default:p((({open:l})=>[a(c(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:p((()=>[a("div",ut,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",it,f(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),ct])])),_:2},1024),a(c(U),{as:"ul"},{default:p((()=>[(t(!0),e(v,null,m(c(_t),(l=>{var s;return t(),e("li",{key:l.name},[a(y,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:null==(s=c(mt))?void 0:s.id,tag:c(xt),class:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[6]||(n[6]=t=>$.value=!1)},{default:p((()=>[x(f(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):i("",!0),(null==(o=c(Ft))?void 0:o.length)?(t(),e(c(A),{key:1,as:"li","default-open":!0},{default:p((({open:l})=>[a(c(I),{class:"w-full focus:outline-none",tabindex:"-1"},{default:p((()=>[a("div",pt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",ft,f(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),gt])])),_:2},1024),a(c(U),{as:"ul"},{default:p((()=>[(t(!0),e(v,null,m(c(Ft),(l=>{var s;return t(),e("li",{key:l.name},[a(y,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:null==(s=c(mt))?void 0:s.id,tag:c(xt),typedef:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-blurple-530 text-gray-900",onClick:n[7]||(n[7]=t=>$.value=!1)},{default:p((()=>[x(f(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):i("",!0)])])])],2)],64)}}});const mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},xt=a("g",{fill:"none"},[a("path",{d:"M8 7l4-4m0 0l4 4m-4-4v18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var bt={render:function(a,l){return t(),e("svg",mt,[xt])}};const yt={class:"fixed bottom-0 right-0 pb-4"},ht={class:"px-6 lg:px-8"};var kt=l({expose:[],setup:l=>(l,n)=>{const s=bt;return t(),e("div",yt,[a("div",ht,[a("button",{class:"\n\t\t\t\t\tbg-discord-blurple-500\n\t\t\t\t\thover:bg-discord-blurple-530\n\t\t\t\t\tdark:hover:bg-discord-blurple-560\n\t\t\t\t\ttext-gray-200\n\t\t\t\t\thover:text-white\n\t\t\t\t\trounded-md\n\t\t\t\t\tp-2\n\t\t\t\t\tleading-3\n\t\t\t\t\tfocus:outline-none\n\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t",onClick:n[1]||(n[1]=t=>{return null==(e=document.getElementById("container"))?void 0:e.scrollTo({top:0,behavior:"smooth"});var e})},[a(s,{class:"h-6 w-6"})])])])}});const wt={class:"lg:flex mx-auto w-full max-w-screen-2xl"},_t={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Ft=x(" Couldn't load the documentation data. ");var Tt=l({expose:[],setup(l){const o=k(),u=b(),p=V(),{Ctrl_K:g}=_({passive:!1,onEventFired(t){t.ctrlKey&&"k"===t.key&&"keydown"===t.type&&t.preventDefault()}}),v=r({[S.id]:S,[E.id]:E,[M.id]:M,[z.id]:z}),m=n(!1),x=s((()=>p.state.source)),y=s((()=>p.state.tag)),w=s((()=>p.state.docs));F((()=>{const t=document.getElementById("container");T(t,"scroll",(()=>{t&&t.scrollTop>300?m.value=!0:m.value=!1}))})),d(g,(()=>{var t;null==(t=document.getElementById("search"))||t.focus()}));return j((()=>{(async()=>{var t,e,a,l,n,s,r,d,i,c,f,g,m,b,h,k,_,F,T,j;if("/"!==u.path)u.params.source&&u.params.tag&&((null==(t=w.value)?void 0:t.id)!==v[u.params.source].id||(null==(e=w.value)?void 0:e.tag)!==u.params.tag)&&(await p.dispatch({type:"fetchDocs",inputSource:null!=(a=v[u.params.source])?a:S,inputTag:null!=(l=u.params.tag)?l:y.value}),await p.dispatch({type:"fetchTags",currentSource:null!=(n=v[u.params.source])?n:S})),u.params.source&&v[u.params.source]?(p.commit({type:"setSource",source:v[u.params.source]}),u.params.tag?(p.commit({type:"setTag",tag:u.params.tag}),p.commit({type:"setSource",source:v[u.params.source]}),u.params.file||u.params.class||u.params.typedef||"docs-source-tag-search"===u.name||o.replace({name:"docs-source-tag-category-file",params:{source:null!=(h=null==(b=x.value)?void 0:b.id)?h:S.id,tag:null!=(k=y.value)?k:S.defaultTag,category:null!=(F=null==(_=x.value)?void 0:_.defaultFile.category)?F:S.defaultFile.category,file:null!=(j=null==(T=x.value)?void 0:T.defaultFile.id)?j:S.defaultFile.id}})):o.replace({name:"docs-source-tag-category-file",params:{source:null!=(r=null==(s=x.value)?void 0:s.id)?r:S.id,tag:(null==(d=x.value)?void 0:d.recentTag)||(null==(i=x.value)?void 0:i.defaultTag),category:null!=(f=null==(c=x.value)?void 0:c.defaultFile.category)?f:S.defaultFile.category,file:null!=(m=null==(g=x.value)?void 0:g.defaultFile.id)?m:S.defaultFile.id}})):o.replace({name:"docs-source-tag-category-file",params:{source:S.id,tag:S.defaultTag,category:S.defaultFile.category,file:S.defaultFile.id}})})()})),(l,n)=>{const s=h("router-view");return t(),e("div",null,[a("div",wt,[a(vt),c(w)?(t(),e(s,{key:l.$route.path})):c(B)?(t(),e("div",_t,[Ft,a("pre",null,f(c(B).toString()),1)])):(t(),e(Q,{key:2}))]),m.value?(t(),e(kt,{key:0})):i("",!0)])}}});export default Tt;