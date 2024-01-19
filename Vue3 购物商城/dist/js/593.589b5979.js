"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[593],{651:function(c,t,s){s.d(t,{j:function(){return _}});var n=s(3396),a=s(65);const _=c=>{const t=(0,a.oR)(),s=t.state.cartList,_=(c,s,n,a)=>{t.commit("changeCart",{shopId:c,productId:s,productInfo:n,num:a})},o=(0,n.Fl)((()=>{const t=s[c]?.productList||[],n={};for(const c in t){const s=t[c];s.count>0&&(n[c]=s)}return n})),e=(0,n.Fl)((()=>s[c]?.shopName||"")),i=(0,n.Fl)((()=>{const t={totalCount:0,totalPrice:0,allChecked:!0},n=s[c]?.productList;if(n)for(const c in n){const s=n[c];t.totalCount+=s.count,s.check&&(t.totalPrice+=s.count*s.price),!s.check&&s.count>0&&(t.allChecked=!1)}return t.totalPrice=t.totalPrice.toFixed(2),t}));return{cartList:s,changeCart:_,productList:o,shopName:e,calculations:i}}},8069:function(c,t,s){s.d(t,{Z:function(){return k}});var n=s(3396),a=s(7139);const _={class:"shop"},o=["src"],e={class:"shop__content__title"},i={class:"shop__content__tags"},l={class:"shop__content__tag"},r={class:"shop__content__tag"},d={class:"shop__content__tag"},u={class:"shop__content__highlight"},p={name:"ShopInfo"};var m=Object.assign(p,{props:["item","hideBorder"],setup(c){return(t,s)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("img",{src:c.item.imgUrl,class:"shop__img"},null,8,o),(0,n._)("div",{class:(0,a.C_)({shop__content:!0,"shop__content--bordered":!c.hideBorder})},[(0,n._)("div",e,(0,a.zw)(c.item.name),1),(0,n._)("div",i,[(0,n._)("span",l,"月售: "+(0,a.zw)(c.item.sales),1),(0,n._)("span",r,"起送: "+(0,a.zw)(c.item.expressLimit),1),(0,n._)("span",d,"基础运费: "+(0,a.zw)(c.item.expressPrice),1)]),(0,n._)("span",u,(0,a.zw)(c.item.slogan),1)],2)]))}}),h=s(89);const v=(0,h.Z)(m,[["__scopeId","data-v-b12dbcd4"]]);var k=v},3593:function(c,t,s){s.r(t),s.d(t,{default:function(){return lc}});var n=s(3396),a=s(4870),_=s(9242),o=s(2483),e=s(5088),i=s(8069),l=s(7139),r=s(651),d=s(4239);const u={class:"content"},p={class:"category"},m=["onClick"],h={class:"product"},v=["src"],k={class:"product__item__detail"},g={class:"product__item__title"},w={class:"product__item__sales"},f={class:"product__item__price"},C={class:"product__item__yen"},b={class:"product__item__origin"},U={class:"product__number"},S=["onClick"],y=["onClick"],z={name:"ContentView"};var L=Object.assign(z,{props:["shopName"],setup(c){const t=(0,o.yj)(),{cartList:s,changeCart:_}=(0,r.j)(),i=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}],z=t.params.id;function L(c,t,s,n,a){_(c,t,s,n),d.Z.commit("changeShopName",{shopId:c,shopName:a})}function D(c){I.value=c,j(c)}const H=(0,a.iH)([]),I=(0,a.iH)(i[0].tab);async function j(c){const t=await(0,e.U)(`/api/shop/${z}/products`,{category:c});0===t?.errno&&t?.data?.length&&(H.value=t.data)}return(0,n.m0)((()=>j(I))),(t,_)=>((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",p,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(i,(c=>(0,n._)("div",{class:(0,l.C_)({category__item:!0,"category__item--active":I.value===c.tab}),key:c.name,onClick:t=>D(c.tab)},(0,l.zw)(c.name),11,m))),64))]),(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(H.value,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product__item",key:t._id},[(0,n._)("img",{class:"product__item__img",src:t.imgUrl},null,8,v),(0,n._)("div",k,[(0,n._)("span",g,(0,l.zw)(t.name),1),(0,n._)("span",w,"月售"+(0,l.zw)(t.sales)+"件",1),(0,n._)("div",f,[(0,n._)("span",C,(0,l.zw)(t.price),1),(0,n._)("span",b,(0,l.zw)(t.oldPrice),1)])]),(0,n._)("div",U,[(0,n._)("span",{class:"product__number__minus iconfont",onClick:()=>{L((0,a.SU)(z),t._id,t,-1,c.shopName)}},"",8,S),(0,n.Uk)(" "+(0,l.zw)((0,a.SU)(s)?.[(0,a.SU)(z)]?.productList?.[t._id]?.count||0)+" ",1),(0,n._)("span",{class:"product__number__plus iconfont",onClick:()=>{L((0,a.SU)(z),t._id,t,1,c.shopName)}},"",8,y)])])))),128))])]))}}),D=s(89);const H=(0,D.Z)(L,[["__scopeId","data-v-a8b76bde"]]);var I=H,j=s(65);const N={class:"cart"},P={key:0,class:"product"},Z={class:"product__header"},F=["innerHTML"],O={key:0,class:"product__item"},Y=["innerHTML","onClick"],M=["src"],T={class:"product__item__detail"},W={class:"product__item__title"},q={class:"product__item__price"},x={class:"product__item__yen"},B={class:"product__item__origin"},K={class:"product__number"},R=["onClick"],V=["onClick"],$={class:"check"},A={class:"check__icon"},E={class:"check__icon__tag"},G={class:"check__info"},J={class:"check__info__price"},Q={class:"check__btn"},X={name:"CartView"};var cc=Object.assign(X,{setup(c){const t=(0,j.oR)(),s=(0,o.yj)(),e=s.params.id,{changeCart:i,productList:d,calculations:u}=(0,r.j)(e);function p(){m.value=!m.value}const m=(0,a.iH)(!1);function h(c){t.commit("handleCheck",{shopId:e,productId:c})}function v(){t.commit("checkAll",{shopId:e})}function k(){t.commit("clearAll",{shopId:e})}return(c,t)=>{const s=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[m.value&&(0,a.SU)(u).totalCount>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"mask",onClick:p})):(0,n.kq)("",!0),(0,n._)("div",N,[m.value&&(0,a.SU)(u).totalCount>0?((0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("div",Z,[(0,n._)("div",{class:"product__header__all",onClick:t[0]||(t[0]=()=>v())},[(0,n._)("span",{class:"product__header__icon iconfont",innerHTML:(0,a.SU)(u).allChecked?"":""},null,8,F),(0,n.Uk)(" 全选 ")]),(0,n._)("div",{class:"product__header__clear"},[(0,n._)("span",{class:"product__header__clear__btn",onClick:k}," 清空购物车 ")])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(d),(c=>((0,n.wg)(),(0,n.iD)(n.HY,{key:c._id},[c.count>0?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",{class:"product__item__checked iconfont",innerHTML:c.check?"":"",onClick:()=>h(c._id)},null,8,Y),(0,n._)("img",{class:"product__item__img",src:c.imgUrl},null,8,M),(0,n._)("div",T,[(0,n._)("span",W,(0,l.zw)(c.name),1),(0,n._)("div",q,[(0,n._)("span",x,(0,l.zw)(c.price),1),(0,n._)("span",B,(0,l.zw)(c.oldPrice),1)])]),(0,n._)("div",K,[(0,n._)("span",{class:"product__number__minus iconfont",onClick:t=>(0,a.SU)(i)((0,a.SU)(e),c._id,c,-1)},"",8,R),(0,n.Uk)(" "+(0,l.zw)(c.count||0)+" ",1),(0,n._)("span",{class:"product__number__plus iconfont",onClick:t=>(0,a.SU)(i)((0,a.SU)(e),c._id,c,1)},"",8,V)])])):(0,n.kq)("",!0)],64)))),128))])):(0,n.kq)("",!0),(0,n._)("div",$,[(0,n._)("div",A,[(0,n._)("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img",onClick:p}),(0,n._)("div",E,(0,l.zw)((0,a.SU)(u).totalCount),1)]),(0,n._)("div",G,[(0,n.Uk)(" 总计："),(0,n._)("span",J,"¥"+(0,l.zw)((0,a.SU)(u).totalPrice),1)]),(0,n.wy)((0,n._)("div",Q,[(0,n.Wm)(s,{to:{path:`/confirmOrder/${(0,a.SU)(e)}`}},{default:(0,n.w5)((()=>[(0,n.Uk)("去结算")])),_:1},8,["to"])],512),[[_.F8,(0,a.SU)(u).totalCount>0]])])])],64)}}});const tc=(0,D.Z)(cc,[["__scopeId","data-v-e3ef49b0"]]);var sc=tc;const nc=c=>((0,n.dD)("data-v-26262f50"),c=c(),(0,n.Cn)(),c),ac={class:"wrapper"},_c=nc((()=>(0,n._)("div",{class:"search__content"},[(0,n._)("span",{class:"search__content__icon iconfont"},""),(0,n._)("input",{class:"search__content__input",placeholder:"请输入商品名称"})],-1))),oc={name:"ShopView"};var ec=Object.assign(oc,{setup(c){const t=(0,o.tv)(),s=(0,o.yj)(),l=(0,a.iH)({});async function r(){const c=await(0,e.U)(`/api/shop/${s.params.id}`);0===c?.errno&&c?.data&&(l.value=c.data)}function d(){t.back()}return r(),(c,t)=>((0,n.wg)(),(0,n.iD)("div",ac,[(0,n._)("div",{class:"search"},[(0,n._)("div",{class:"search__back iconfont",onClick:d},""),_c]),(0,n.wy)((0,n.Wm)((0,a.SU)(i.Z),{item:l.value,hideBorder:!0},null,8,["item"]),[[_.F8,l.value.imgUrl]]),(0,n.Wm)((0,a.SU)(I),{shopName:l.value.name},null,8,["shopName"]),(0,n.Wm)(sc)]))}});const ic=(0,D.Z)(ec,[["__scopeId","data-v-26262f50"]]);var lc=ic}}]);
//# sourceMappingURL=593.589b5979.js.map