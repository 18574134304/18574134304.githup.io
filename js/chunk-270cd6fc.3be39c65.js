(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270cd6fc"],{"20f7":function(t,e,r){"use strict";var i=r("b2cc"),s=r.n(i);s.a},2909:function(t,e,r){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function s(t){if(Array.isArray(t))return i(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("d3b7"),r("3ca3"),r("ddb0");function n(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function a(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||n(t)||a(t)||o()}},"4df4":function(t,e,r){"use strict";var i=r("0366"),s=r("7b0b"),n=r("9bdd"),a=r("e95a"),o=r("50c4"),c=r("8418"),d=r("35a1");t.exports=function(t){var e,r,u,l,f,v,h=s(t),m="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,_=void 0!==b,y=d(h),g=0;if(_&&(b=i(b,p>2?arguments[2]:void 0,2)),void 0==y||m==Array&&a(y))for(e=o(h.length),r=new m(e);e>g;g++)v=_?b(h[g],g):h[g],c(r,g,v);else for(l=y.call(h),f=l.next,r=new m;!(u=f.call(l)).done;g++)v=_?n(l,b,[u.value,g],!0):u.value,c(r,g,v);return r.length=g,r}},a630:function(t,e,r){var i=r("23e7"),s=r("4df4"),n=r("1c7e"),a=!n((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:s})},b2cc:function(t,e,r){},b3db:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"My_Order"}},[r("div",{staticClass:"mui-navbar-inner mui-bar mui-bar-nav"},[r("button",{staticClass:"mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left",attrs:{type:"button"},on:{tap:t.back}},[r("span",{staticClass:"mui-icon mui-icon-left-nav"})]),r("h1",{staticClass:"mui-center mui-title",staticStyle:{"margin-left":"-30px"}},[t._v("我的订单")]),r("h1",{staticClass:"mui-title"})]),r("div",{staticClass:"mui-scroll-wrapper",attrs:{id:"m_scroll"}},[r("div",{staticClass:"mui-content"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],attrs:{id:"my_order"}},[t.orderList[1]?t._l(t.orderList[1],(function(e,i){return r("div",{key:i,staticClass:"order_item",on:{tap:function(r){return t.go_orderDetail(e[0])}}},[r("div",{staticClass:"o_left"},[r("span",[t._v(t._s(t.shopName))]),r("p",[t._v("下单时间:"+t._s(e[2]))]),r("p",[t._v("完成时间:"+t._s(""!=e[5]?e[5]:"未完成"))])]),r("div",{staticClass:"o_right"},[1==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("待支付")]):2==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("待收货")]):3==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("待评价")]):4==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("退款")]):5==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("完成")]):7==e[3]?r("a",{attrs:{href:"javascript:void(0);"}},[t._v("已付款")]):t._e(),r("span",[t._v(t._s("￥"+e[1]))])])])})):r("h2",{staticClass:"n_msg"},[r("span",{staticClass:"mi_b mui-icon iconfont icon-meiyoushuju"}),r("p",[t._v("没有订单")])])],2)])]),r("Loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1)},s=[],n=(r("99af"),r("4de4"),r("2909")),a=r("2b0e"),o=r("54a1"),c=(r("3022"),{components:{Loading:o["a"]},data:function(){return{queryOrder_info:{setUserid:null,setShopid:this.$shopId,setSendcount:1,setAskcount:10,setType:1},tim:null,orderList:[],queryDetail_info:{setUserid:null,setShopid:this.$shopId,setOrderid:null},ts:a["a"].filter("byteToString"),shopName:"",isLoading:!0,ti_flag:!0}},methods:{queryOrder:function(){var t=this;this.isLoading=!0;var e=this.$request("QueryOrder_req",this.queryOrder_info,17);this.$ws.websocketsend(e),this.tim=setInterval((function(){t.$res&&(clearInterval(t.tim),0===t.orderList.length?t.orderList=t.$res:t.orderList[1]=[].concat(Object(n["a"])(t.orderList[1]),Object(n["a"])(t.$res[1])),t.$res[1].length>=t.queryOrder_info.setAskcount?t.ti_flag=!0:t.ti_flag=!1,t.shopName=t.ts(t.orderList[5]),t.isLoading=!1)}),50)},go_orderDetail:function(t){this.queryDetail_info.setOrderid=t;var e={sn:this.shopName,q:this.queryDetail_info};window.sessionStorage.setItem("os",JSON.stringify(e)),this.$router.push("/Order_Detail")},back:function(){var t={tabIndex:4};window.sessionStorage.setItem("tabData",JSON.stringify(t))}},created:function(){var t=this,e=JSON.parse(window.sessionStorage.getItem("user"));if(e){this.queryOrder_info.setUserid=e[1],this.queryDetail_info.setUserid=e[1];var r=setInterval((function(){t.$ws.websock&&1===t.$ws.websock.readyState&&(t.queryOrder(),clearInterval(r))}),10)}},mounted:function(){(function(t){t("#m_scroll").scroll({indicators:!1,deceleration:.01})})(this.mui),this.$nextTick((function(){var t=this;window.onscroll=function(e){var r=Math.abs(e.detail.lastY),i=e.detail.wrapperHeight,s=e.detail.scrollerHeight;r+i>s&&t.ti_flag&&(t.ti_flag=!1,t.queryOrder_info.setSendcount+=1,t.queryOrder())}}))},destroyed:function(){window.sessionStorage.removeItem("os")}}),d=c,u=(r("20f7"),r("2877")),l=Object(u["a"])(d,i,s,!1,null,"cbbc9012",null);e["default"]=l.exports}}]);