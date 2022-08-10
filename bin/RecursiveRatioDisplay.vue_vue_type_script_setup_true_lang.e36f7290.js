import{g as h,I as f,J as k,o as s,c as n,j as d,n as A,u as c,d as $,k as x,a as i,e as g,t as r,m as C,K as M,b,w as D,C as z,F as y,r as S,q as P,L as V,E as L,_ as B,p as F,h as N,i as j}from"./index.20f1027e.js";const R={__name:"SpellImage",props:{iconPath:String,image:Object,size:String},setup(a){const e=a,l=h(()=>e.image?e.size==="small"?`background: url('${f}/${k}/img/sprite/small_${e.image.sprite}') -${e.image.x*.75}px -${e.image.y*.75}px;`:e.size==="tiny"?`background: url('${f}/${k}/img/sprite/tiny_${e.image.sprite}') -${e.image.x*.5}px -${e.image.y*.5}px;`:`background: url('${f}/${k}/img/sprite/${e.image.sprite}') -${e.image.x}px -${e.image.y}px;`:e.iconPath?`background: url('${e.iconPath}') 0px 0px; background-size:contain;`:"background: transparent; background-size:contain;");return(u,_)=>(s(),n("span",{class:d(["spell-image",a.size]),style:A(c(l))},null,6))}},I={class:"dd-control"},E={class:"dd-label"},K={type:"button",class:"button dd-select"},O=$({__name:"DropdownSelect",props:{label:null,value:null},setup(a){const e=x(!1);return(l,u)=>(s(),n("div",I,[i("label",E,[g(r(a.label)+" ",1),i("button",K,[C(l.$slots,"value",{},()=>[g(r(a.value),1)]),i("div",{class:d(["dd-content",{selected:e.value}])},[C(l.$slots,"default")],2)])])]))}});const T={class:"control champsearch"},q={class:"champsearch__name"},J={class:"dd__champlist"},U=["data-name"],G=["onClick"],H={class:"champsearch__name"},Q={class:"multiColumnsFilterSearchField"},re=$({__name:"ChampSearch",props:{champ:null,mode:null},emits:["update:champ"],setup(a,{emit:e}){const l=a;x(null);const u=x(""),_=M(()=>u.value.toLowerCase()),m=L();function v(o,p){document.body.focus(),l.mode==="player"?m.push({params:{player:o}}):l.mode==="target"?m.push({params:{target:o}}):e("update:champ",o)}return(o,p)=>(s(),n("div",T,[b(O,{label:"Champion"},{value:D(()=>{var t;return[b(R,{size:"tiny",image:(t=c(z)[a.champ])==null?void 0:t.image},null,8,["image"]),i("span",q,r(a.champ),1)]}),default:D(()=>[i("ul",J,[(s(!0),n(y,null,S(c(z),t=>(s(),n("li",{"data-name":t.name,class:d({hidden:t.name.toLowerCase().indexOf(c(_))===-1})},[(s(),n("a",{class:"flex__center",onClick:w=>v(t.name),key:t.name},[b(R,{size:"tiny",image:t.image},null,8,["image"]),i("span",H,r(t.name),1)],8,G))],10,U))),256))]),i("div",Q,[P(i("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=t=>u.value=t),placeholder:"Search Champion",autocomplete:"off"},null,512),[[V,u.value]])])]),_:1})]))}});const W={prefex:"Default",color:"ap",sufex:"Default",html:"Default"},X={base:{html:null,color:"base_damage"},total_ap:{html:"AP",color:"ap"},total_ad:{html:"AD",color:"ad"},bonus_ad:{html:"<i>bonus</i> AD",color:"ad"},total_armor:{html:"total Armor",color:"armor"},bonus_armor:{html:"<i>bonus</i> Armor",color:"armor"},base_armor:{html:"<b>base</ib> Armor",color:"armor"},total_mr:{html:"total Magic Resistance",color:"mr"},bonus_mr:{html:"<i>bonus</i> Magic Resistance",color:"mr"},base_mr:{html:"<b>base</ib> Magic Resistance",color:"mr"},total_critical_strike_chance:{html:"critical strike chance",color:"hp"},total_life_steal:{html:"life steal",color:"hp"},total_hp:{html:"health",color:"hp"},maximum_hp:{html:"maximum health",color:"hp"},bonus_hp:{html:"<i>bonus</i> health",color:"hp"},base_hp:{html:"<b>base</b> health",color:"hp"},missing_hp:{html:"<i>missing</i> health",color:"hp"},current_hp:{html:"<b>current</ib> health",color:"hp"},total_mana:{html:"Mana",color:"mana"},total_kindred_mark:{html:"Kindred Mark",color:"mr"},total_feast_stack:{html:"Feast Stack",color:"mr"},total_nasus_stack:{html:"Siphoning Strike",color:"mr"}};const Y={name:"SpellSpan",props:{list:[Array,Number,String]},inject:["rankindex"]},Z={key:0},ee={key:0,class:"ss-noclick"},ae=["onClick"],te={key:1,class:"spelleffect"};function se(a,e,l,u,_,m){return Array.isArray(l.list)?(s(),n("span",Z,[(s(!0),n(y,null,S(l.list,(v,o)=>(s(),n(y,{key:o},[o!=0?(s(),n("span",ee,"/")):F("",!0),i("span",{class:d([{spelleffect:m.rankindex==o},"ss-click"]),onClick:p=>m.rankindex=o},r(v),11,ae)],64))),128))])):(s(),n("span",te,r(l.list),1))}const le=B(Y,[["render",se]]),ne=["title"],ce=$({__name:"RecursiveRatioDisplay",props:{val:null,recursive:{type:[Boolean,null]},display:null},setup(a){const e=a,l=h(()=>e.display==="value"&&e.val.apply||""),u=h(()=>e.display==="value"?e.val.units:""),_=h(()=>X[e.val.stat||"base"]||W),m=h(()=>{switch(e.display){case"value":return e.val.values;case"dmg_premitigation":return Math.round(e.val.damagePostValue);case"dmg_postmitigation":return Math.round(e.val.damagePostValue);default:return 0}});return(v,o)=>{const p=N("RecursiveRatioDisplay",!0);return s(),n("span",{class:d(c(_).color),title:a.val.stat||"base"},[g(r(a.recursive?"(+":"")+" ",1),b(le,{class:d(c(_).color),list:c(m)},null,8,["class","list"]),g(r(c(l))+" ",1),(s(!0),n(y,null,S(a.val.sub_calcs||a.val.sub_ratios,(t,w)=>(s(),j(p,{recursive:!0,display:a.display,val:t,key:t.stat},null,8,["display","val"]))),128)),g(" "+r(c(u))+r(a.recursive?") ":""),1)],10,ne)}}});export{le as S,R as _,O as a,re as b,ce as c,X as s};
