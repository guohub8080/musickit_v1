import{d as L,u as M,s as R,r as p,o as A,c as B,a as l,b as s,e as i,i as $,t as V,w as a,F as U,p as D,f as x,g as u,h as F,n as I,j as P,k as E,l as T,v as Y}from"./index-81d72a16.js";import{t as k}from"./utils-19984713.js";import{o as h}from"./index-8042371d.js";import{_ as S}from"./plugin-vue_export-helper-893979e1.js";const C=_=>(D("data-v-1babf09f"),_=_(),x(),_),j={class:"settings"},z={class:"scale_num_mode"},H={class:"btn_line"},K=C(()=>l("span",null,"\u4EE5\u7F57\u9A6C\u6570\u5B57\u663E\u793A",-1)),q={class:"tip"},J={class:"show_scales"},Q=C(()=>l("div",{class:"btn_line"},[l("span",null,"\u97F3\u9636\u663E\u793A\u9009\u62E9")],-1)),W=C(()=>l("div",{style:{height:"0.3rem"}},null,-1)),X=u("\u81EA\u7136\u5927\u8C03\uFF08Ionia\uFF09"),Z=u("\u81EA\u7136\u5C0F\u8C03\uFF08Aeolian\uFF09"),ee=u("Dorian\u5C0F\u8C03"),te=u("Phrygian\u5C0F\u8C03"),se=u("Lydian\u5927\u8C03"),oe=u("Mixo-lydian\u5927\u8C03"),ae=u("Locrian\u534A\u51CF\u4E03\u8C03"),le={class:"reverse_by"},ue=C(()=>l("div",{class:"btn_line"},[l("span",null,"\u53CD\u5411\u97F3\u9636\u663E\u793A")],-1)),ne=C(()=>l("div",{style:{height:"0.3rem"}},null,-1)),_e=u("\u6309\u97F3\u9636"),ie=u("\u6309\u4E3B\u97F3"),de=C(()=>l("div",{style:{height:"1.5rem"}},null,-1)),ce=L({setup(_){const y=M(),{is_show_scale_rome:t,show_scale_id:v,reverse_scale_show_by:m}=R(y);return(w,r)=>{const d=p("a-switch"),c=p("a-radio"),o=p("a-radio-group");return A(),B(U,null,[l("div",j,[l("div",z,[l("div",H,[K,s(d,{checked:i(t),"onUpdate:checked":r[0]||(r[0]=e=>$(t)?t.value=e:null),class:"right"},null,8,["checked"])]),l("div",q,V(i(t)?"\u6548\u679C\u9884\u89C8\uFF1A\u4E3B\u2160 \u5C5E\u2164 \u5BFC\u2166":"\u6548\u679C\u9884\u89C8\uFF1A\u4E3B1  \u5C5E5  \u5BFC7"),1)]),l("div",J,[Q,W,s(o,{value:i(v),"onUpdate:value":r[1]||(r[1]=e=>$(v)?v.value=e:null)},{default:a(()=>[s(c,{value:"ION",class:"mode_options"},{default:a(()=>[X]),_:1}),s(c,{value:"AEO",class:"mode_options"},{default:a(()=>[Z]),_:1}),s(c,{value:"DOR",class:"mode_options"},{default:a(()=>[ee]),_:1}),s(c,{value:"PHR",class:"mode_options"},{default:a(()=>[te]),_:1}),s(c,{value:"LYD",class:"mode_options"},{default:a(()=>[se]),_:1}),s(c,{value:"MLY",class:"mode_options"},{default:a(()=>[oe]),_:1}),s(c,{value:"LOC",class:"mode_options"},{default:a(()=>[ae]),_:1})]),_:1},8,["value"])]),l("div",le,[ue,ne,s(o,{value:i(m),"onUpdate:value":r[2]||(r[2]=e=>$(m)?m.value=e:null)},{default:a(()=>[s(c,{value:"by_mode",class:"mode_options"},{default:a(()=>[_e]),_:1}),s(c,{value:"by_tonic",class:"mode_options"},{default:a(()=>[ie]),_:1})]),_:1},8,["value"])])]),de],64)}}});var re=S(ce,[["__scopeId","data-v-1babf09f"]]);const ve={},pe=_=>(D("data-v-6bb941b9"),_=_(),x(),_),fe={class:"loading"},he=pe(()=>l("div",null,"\u52A0\u8F7D\u4E2D...",-1));function me(_,y){const t=p("a-spin");return A(),B("div",fe,[s(t,{class:"spin_kit"}),he])}var ge=S(ve,[["render",me],["__scopeId","data-v-6bb941b9"]]);const O=_=>(D("data-v-9665dcde"),_=_(),x(),_),Ce={class:"nav"},be=O(()=>l("div",null,"by Guo",-1)),Fe={class:"music"},ye={class:"tonic_choice"},we=u("C"),Ee=u("D"),$e=u("E"),ke=u("F"),Ae=u("G"),Be=u("A"),De=u("B"),xe=u("Flat(\u266D)"),Se=u("Natural"),Ie=u("Sharp(\u266F)"),Le=u(" \u8BBE\u7F6E"),Me=O(()=>l("div",{style:{height:"10rem"}},null,-1)),Re=L({setup(_){const y=M(),{tonic_choice_bar:t,tonic_n_db:v,nth:m,is_loading:w}=R(y);F.beforeEach((o,e,n)=>{w.value=!0,n()}),F.afterEach((o,e)=>{w.value=!1});const r=o=>{if(m.value===o)return"is_selected"},d=["C","D","E","F","G","A","B"];h("r",o=>{o.preventDefault();const e=[-1,0,1];t.value.step=d[Math.floor(Math.random()*d.length)],t.value.alter=e[Math.floor(Math.random()*e.length)]}),h(["c","d","e","f","g","a","b"],o=>{o.preventDefault(),t.value.step=o.key.toUpperCase()}),h(["0","-","="],o=>{o.preventDefault(),o.key==="-"?t.value.alter=-1:o.key==="0"?t.value.alter=0:t.value.alter=1}),h(["[","]"],o=>{o.preventDefault(),o.key==="["?t.value.alter>-1&&(t.value.alter-=1):t.value.alter<1&&(t.value.alter+=1)}),h([",","."],o=>{o.preventDefault();const e=o.key==="."?d.indexOf(t.value.step)+1:d.indexOf(t.value.step)-1;e<0?t.value.step=d[e+d.length]:e>d.length-1?t.value.step=d[e-d.length]:t.value.step=d[e]}),h("v",o=>{if(o.preventDefault(),v.value.is_black){const e=I({loc_id:v.value.loc_id},{is_normal:!0},{step:{"!=":v.value.step}}).first();t.value={step:e.step,alter:e.alter}}}),h(["ArrowLeft","ArrowRight"],o=>{o.preventDefault();let e;o.key==="ArrowLeft"?e=v.value.loc_id-1:e=v.value.loc_id+1,e<=0?e+=12:e>12&&(e-=12);const n=I({loc_id:e},{alter:{">=":-1}},{alter:{"<=":1}}).get(),b=k(n)({alter:0}).first();if(b!=!1){t.value={step:b.step,alter:0};return}if(o.key==="ArrowLeft"){const f=k(n)({alter:-1}).first();t.value={step:f.step,alter:f.alter};return}if(o.key==="ArrowRight"){const f=k(n)({alter:1}).first();t.value={step:f.step,alter:f.alter};return}});const c=P(()=>m.value!=3?"is_hidden":null);return(o,e)=>{const n=p("a-radio-button"),b=p("a-radio-group"),f=p("a-button"),N=p("a-popover"),G=p("router-view");return A(),B(U,null,[l("div",Ce,[be,l("div",{onClick:e[0]||(e[0]=g=>i(F).replace("/music/readme")),class:E(r(1))},"ReadMe",2),l("div",{onClick:e[1]||(e[1]=g=>i(F).replace("/music/interval")),class:E(r(2))},"Interval",2),l("div",{onClick:e[2]||(e[2]=g=>i(F).replace("/music/scales")),class:E(r(3))},"Scales",2)]),T(s(ge,null,null,512),[[Y,i(w)]]),l("div",Fe,[l("div",ye,[s(b,{value:i(t).step,"onUpdate:value":e[3]||(e[3]=g=>i(t).step=g),"button-style":"solid",class:"step"},{default:a(()=>[s(n,{value:"C"},{default:a(()=>[we]),_:1}),s(n,{value:"D"},{default:a(()=>[Ee]),_:1}),s(n,{value:"E"},{default:a(()=>[$e]),_:1}),s(n,{value:"F"},{default:a(()=>[ke]),_:1}),s(n,{value:"G"},{default:a(()=>[Ae]),_:1}),s(n,{value:"A"},{default:a(()=>[Be]),_:1}),s(n,{value:"B"},{default:a(()=>[De]),_:1})]),_:1},8,["value"]),s(b,{value:i(t).alter,"onUpdate:value":e[4]||(e[4]=g=>i(t).alter=g),"button-style":"solid",class:"alter"},{default:a(()=>[s(n,{value:-1},{default:a(()=>[xe]),_:1}),s(n,{value:0},{default:a(()=>[Se]),_:1}),s(n,{value:1},{default:a(()=>[Ie]),_:1})]),_:1},8,["value"]),s(N,{title:"\u4E50\u7406\u8BA1\u7B97\u5668\u8BBE\u7F6E",placement:"bottomRight",class:E(["settings",i(c)])},{content:a(()=>[s(re)]),default:a(()=>[s(f,{type:"link",shape:"round"},{default:a(()=>[Le]),_:1})]),_:1},8,["class"])])]),s(G),Me],64)}}});var Ve=S(Re,[["__scopeId","data-v-9665dcde"]]);export{Ve as default};