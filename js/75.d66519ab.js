"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[75],{3075:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order"},[e("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-tabs",{attrs:{sticky:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tab",{attrs:{name:"all",title:"全部"}}),e("van-tab",{attrs:{name:"payment",title:"待支付"}}),e("van-tab",{attrs:{name:"delivery",title:"待发货"}}),e("van-tab",{attrs:{name:"received",title:"待收货"}}),e("van-tab",{attrs:{name:"comment",title:"待评价"}})],1),t._l(t.list,(function(t){return e("OrderListItem",{key:t.order_id,attrs:{item:t}})}))],2)},i=[],r=a(7535),n=function(){var t=this,e=t._self._c;return t.item.order_id?e("div",{staticClass:"order-list-item"},[e("div",{staticClass:"tit"},[e("div",{staticClass:"time"},[t._v(t._s(t.item.create_time))]),e("div",{staticClass:"status"},[e("span",[t._v(t._s(t.item.state_text))])])]),e("div",{staticClass:"list"},t._l(t.item.goods,(function(a,s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"goods-img"},[e("img",{attrs:{src:a.goods_image,alt:""}})]),e("div",{staticClass:"goods-content text-ellipsis-2"},[t._v(" "+t._s(a.goods_name)+" ")]),e("div",{staticClass:"goods-trade"},[e("p",[t._v("¥ "+t._s(a.total_pay_price))]),e("p",[t._v("x "+t._s(a.total_num))])])])})),0),e("div",{staticClass:"total"},[t._v(" 共 "+t._s(t.item.total_num)+" 件商品，总金额 ¥"+t._s(t.item.total_price)+" ")]),e("div",{staticClass:"actions"},[10===t.item.order_status?e("div",[10===t.item.pay_status?e("span",[t._v("立刻付款")]):10===t.item.delivery_status?e("span",[t._v("申请取消")]):20===t.item.delivery_status||30===t.item.delivery_status?e("span",[t._v("确认收货")]):t._e()]):t._e(),30===t.item.order_status?e("div",[e("span",[t._v("评价")])]):t._e()])]):t._e()},o=[],l={props:{item:{type:Object,default:()=>({})}}},d=l,c=a(1001),u=(0,c.Z)(d,n,o,!1,null,"ab137926",null),m=u.exports,v={props:{item:{type:Object,default:()=>({})}},name:"OrderPage",components:{OrderListItem:m},data(){return{active:this.$route.query.dataType||"all",page:1,list:[]}},methods:{async getOrderList(){const{data:{list:t}}=await(0,r.ue)(this.active,this.page);t.data.forEach((t=>{t.total_num=0,t.goods.forEach((e=>{t.total_num+=e.total_num}))})),this.list=t.data}},watch:{active:{immediate:!0,handler(){this.getOrderList()}}}},_=v,p=(0,c.Z)(_,s,i,!1,null,"a1b3b556",null),f=p.exports},7535:function(t,e,a){a.d(e,{Gd:function(){return i},pm:function(){return r},ue:function(){return n}});var s=a(4471);const i=(t,e)=>s.Z.get("/checkout/order",{params:{mode:t,delivery:0,couponId:0,isUsePoints:0,...e}}),r=(t,e)=>s.Z.post("/checkout/submit",{mode:t,delivery:10,couponId:0,payType:10,isUsePoints:0,...e}),n=(t,e)=>s.Z.get("/order/list",{params:{dataType:t,page:e}})}}]);
//# sourceMappingURL=75.d66519ab.js.map