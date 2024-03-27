"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[913],{4913:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});a(7658);var i=function(){var t=this,s=t._self._c;return t.detail.goods_name?s("div",{staticClass:"prodetail"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品详情页","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v(t._s(t.current+1)+" / "+t._s(t.images.length))])]},proxy:!0}],null,!1,3958565683)},t._l(t.images,(function(t,a){return s("van-swipe-item",{key:a},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.external_url,expression:"image.external_url"}]})])})),1),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.detail.goods_price_min))]),s("span",{staticClass:"oldprice"},[t._v("￥"+t._s(t.detail.goods_price_max))])]),s("div",{staticClass:"sellcount"},[t._v("已售"+t._s(t.detail.goods_sales)+"件")])]),s("div",{staticClass:"msg text-ellipsis-2"},[t._v(" "+t._s(t.detail.goods_name)+" ")]),s("div",{staticClass:"service"},[s("div",{staticClass:"left-words"},[s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("七天无理由退货")],1),s("span",[s("van-icon",{attrs:{name:"passed"}}),t._v("48小时发货")],1)]),s("div",{staticClass:"right-icon"},[s("van-icon",{attrs:{name:"arrow"}})],1)])]),s("div",{staticClass:"comment"},[s("div",{staticClass:"comment-title"},[s("div",{staticClass:"left"},[t._v("商品评价 ("+t._s(t.total)+")")]),s("div",{staticClass:"right"},[t._v("查看更多 "),s("van-icon",{attrs:{name:"arrow"}})],1)]),s("div",{staticClass:"comment-list"},t._l(t.commentList,(function(a){return s("div",{key:a.comment_id,staticClass:"comment-item"},[s("div",{staticClass:"top"},[s("img",{attrs:{src:a.user.avatar_url||t.defaultImg,alt:""}}),s("div",{staticClass:"name"},[t._v(t._s(a.user.nick_name))]),s("van-rate",{attrs:{size:16,value:a.score/2,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),s("div",{staticClass:"content"},[t._v(" "+t._s(a.content)+" ")]),s("div",{staticClass:"time"},[t._v(" "+t._s(a.create_time)+" ")])])})),0)]),s("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.detail.content)}}),s("div",{staticClass:"footer"},[s("div",{staticClass:"icon-home",on:{click:function(s){return t.$router.push("/")}}},[s("van-icon",{attrs:{name:"wap-home-o"}}),s("span",[t._v("首页")])],1),s("div",{staticClass:"icon-cart",on:{click:function(s){return t.$router.push("/cart")}}},[t.cartTotal>0?s("span",{staticClass:"num"},[t._v(t._s(t.cartTotal))]):t._e(),s("van-icon",{attrs:{name:"shopping-cart-o"}}),s("span",[t._v("购物车")])],1),s("div",{staticClass:"btn-add",on:{click:t.cart}},[t._v("加入购物车")]),s("div",{staticClass:"btn-buy",on:{click:t.pay}},[t._v("立刻购买")])]),s("van-action-sheet",{attrs:{title:"cart"===t.mode?"添加购物车":"立即购买"},model:{value:t.isshow,callback:function(s){t.isshow=s},expression:"isshow"}},[s("div",{staticClass:"product"},[s("div",{staticClass:"product-title"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.detail.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"price"},[s("span",[t._v("¥")]),s("span",{staticClass:"nowprice"},[t._v(t._s(t.detail.goods_price_min))])]),s("div",{staticClass:"count"},[s("span",[t._v("库存")]),s("span",[t._v(t._s(t.detail.stock_total))])])])]),s("div",{staticClass:"num-box"},[s("span",[t._v("数量")]),s("CountBox",{model:{value:t.addCount,callback:function(s){t.addCount=s},expression:"addCount"}})],1),t.detail.stock_total>0?s("div",{staticClass:"showbtn"},["cart"===t.mode?s("div",{staticClass:"btn",on:{click:t.addCart}},[t._v("加入购物车")]):s("div",{staticClass:"btn now",on:{click:t.goBuyNow}},[t._v("立刻购买")])]):s("div",{staticClass:"btn-none"},[t._v("该商品已抢完")])])])],1):t._e()},o=[],e=a(57),n=a(1787),c=a(6945),d=a(6624),l={methods:{loginConfirm(){return!this.$store.getters.token&&(this.$dialog.confirm({title:"温馨提示",message:"此时需要先登录才能继续操作哦",confirmButtonText:"去登陆",cancelButtonText:"再逛逛"}).then((()=>{this.$router.replace({path:"/login",query:{backUrl:this.$route.fullPath}})})).catch((()=>{})),!0)}}},r={name:"ProDetail",mixins:[l],components:{CountBox:e.Z},data(){return{images:["https://img01.yzcdn.cn/vant/apple-1.jpg","https://img01.yzcdn.cn/vant/apple-2.jpg"],current:0,detail:{},total:"",commentList:[],defaultImg:c,isshow:!1,mode:"",addCount:1,cartTotal:0}},async created(){this.getDetail(),this.getComments()},methods:{onChange(t){this.current=t},async getDetail(){const{data:{detail:t}}=await(0,n.Aw)(this.goodsId);this.detail=t,this.images=t.goods_images},async getComments(){const{data:{list:t,total:s}}=await(0,n.U3)(this.goodsId,3);this.total=s,this.commentList=t},cart(){this.isshow=!0,this.mode="cart"},pay(){this.isshow=!0,this.mode="pay"},async addCart(){if(this.loginConfirm())return;const{data:{cartTotal:t}}=await(0,d.Z5)(this.goodsId,this.addCount,this.detail.skuList[0].goods_sku_id);this.cartTotal=t,this.$toast("加入购物车成功"),this.isshow=!1},goBuyNow(){this.loginConfirm()||this.$router.push({path:"/pay",query:{mode:"buyNow",goodsId:this.goodsId,goodsSkuId:this.detail.skuList[0].goods_sku_id,goodsNum:this.addCount}})}},computed:{goodsId(){return this.$route.params.id}}},u=r,m=a(1001),v=(0,m.Z)(u,i,o,!1,null,"5b3f6448",null),g=v.exports},1787:function(t,s,a){a.d(s,{Aw:function(){return e},Fs:function(){return o},U3:function(){return n}});var i=a(4471);const o=t=>{const{categoryId:s,goodsName:a,page:o}=t;return i.Z.get("/goods/list",{params:{categoryId:s,goodsName:a,page:o}})},e=t=>i.Z.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>i.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=913.8618b499.js.map