"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[928],{9928:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(7658);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],o=e(1787),n=e(8344),i={name:"SearchIndex",components:{GoodsItem:n.Z},data(){return{page:1,proList:[]}},computed:{querySearch(){return this.$route.query.search}},async created(){const{data:{list:t}}=await(0,o.Fs)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}},c=i,u=e(1001),d=(0,u.Z)(c,a,r,!1,null,"6a16b43e",null),l=d.exports},1787:function(t,s,e){e.d(s,{Aw:function(){return o},Fs:function(){return r},U3:function(){return n}});var a=e(4471);const r=t=>{const{categoryId:s,goodsName:e,page:r}=t;return a.Z.get("/goods/list",{params:{categoryId:s,goodsName:e,page:r}})},o=t=>a.Z.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>a.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=928.b2fcb8da.js.map