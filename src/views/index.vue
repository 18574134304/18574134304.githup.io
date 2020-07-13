<template>
  <!-- 主页 -->
  <div class="home">
    <!--页面主结构开始-->
    <div id="app" class="mui-views">
      <div class="mui-view">
        <div class="mui-navbar"></div>
        <div class="mui-pages"></div>
      </div>
    </div>
    <!--页面主结构结束-->
    <!--单页面开始-->
    <div id="setting" class="mui-page">
      <!--页面标题栏1开始-->
      <div :class="{'mui_bar1 mui-navbar-inner mui-bar-nav':true,'hidden':flag}">
        <h1 class="m_tit">
          三华餐厅
          <span class="mui-icon mui-icon-arrowdown"></span>
        </h1>
        <div class="searchBox">
          <span class="mui-icon mui-icon-search"></span>
          <input class="mt_input" type="text" />
        </div>
        <div class="ic_box">
          <span class="mui-icon mui-icon-person"></span>
        </div>
      </div>
      <!--页面标题栏结束-->

      <!--  页面标题栏2开始  -->
      <div :class="{'mui_bar2 mui-navbar-inner mui-bar mui-bar-nav':true,'hidden':!flag}">
        <h1 class="mui-center mui-title">{{title}}</h1>
      </div>
      <!-- 页面标题栏2结束 -->

      <!--页面主内容区开始-->
      <nav class="mui-bar mui-bar-tab fot_bar tb_fot">
        <a class="mui-tab-item mui-active" href="#tabbar" @tap="tabSwitch($event,1)">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat" @tap="tabSwitch($event,2)">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">预定</span>
        </a>
        <!-- <a class="mui-tab-item" href="#tabbar-with-made">
          <img class="custom_made" src="../assets/logo.png" alt />
        </a>-->
        <a class="mui-tab-item" href="#tabbar-with-contact" @tap="tabSwitch($event,3)">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map" @tap="tabSwitch($event,4)">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">我的</span>
        </a>
      </nav>

      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-content">
            <!-- 一 -->

            <div id="popover" class="mui-popover">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                  <a href="#">新菜尝鲜</a>
                </li>
                <li class="mui-table-view-cell">
                  <a href="#">新菜尝鲜</a>
                </li>
              </ul>
            </div>

            <div id="tabbar" class="mui-control-content mui-active">
              <div id="slider" class="mui-slider">
                <div
                  id="sliderSegmentedControl"
                  class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative"
                >
                  <div class="down_menu">
                    <a class="sh_slide" href="#popover" id="openPopover">全部</a>
                    <span class="arrowdown mui-icon mui-icon-arrowdown"></span>
                  </div>

                  <a class="mui-control-item" href="#item1mobile">综合</a>
                  <a class="mui-control-item" href="#item2mobile">销量</a>
                  <a class="mui-control-item" href="#item3mobile">评分</a>
                  <a class="mui-control-item" href="#item4mobile">价格</a>
                </div>
                <div
                  style="width:20%;margin-left:20%"
                  id="sliderProgressBar"
                  class="mui-slider-progress-bar"
                ></div>
                <div class="mui-slider-group">
                  <div
                    id="item1mobile"
                    class="itemmobile itm_1 mui-slider-item mui-control-content mui-active"
                  >
                    <!-- <div id="scroll1" class="mui-scroll-wrapper"> -->
                    <!-- 第一个选项卡 -->
                    <!-- <div class="mui-scroll"> -->
                    <ul class="mui-table-view">
                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="mui-table-view-cell">
                        <!-- 商品列表信息 -->
                        <div class="good_box">
                          <div class="good_item mui-clearfix">
                            <div class="good_img mui-pull-left">
                              <img src="../assets/logo.png" />
                            </div>
                            <div class="good_info mui-pull-left">
                              <p class="good_title mui-clearfix">
                                <span class="mui-pull-left">标题标题标题标题标题</span>
                                <strong class="mui-pull-right">￥18</strong>
                              </p>
                              <p class="good_msg">
                                <span>鲁菜大师崔伯成作品</span>
                              </p>
                              <div class="good_coolect mui-clearfix">
                                <div class="coolect_left mui-pull-left">
                                  <img src="../assets/logo.png" />
                                  <span>收藏</span>
                                </div>
                                <div class="cool_right mui-pull-right">
                                  <div class="step_box mui-clearfix">
                                    <div class="hidden step_btn less mui-pull-left">－</div>
                                    <span class="hidden mui-pull-left cool_num">21312</span>
                                    <div class="step_btn add mui-pull-right">＋</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- </div> -->
                    <!-- </div> -->
                  </div>
                  <div id="item2mobile" class="itemmobile mui-slider-item mui-control-content">
                    <div id="scroll2" class="mui-scroll-wrapper">
                      <!-- 第二个选项卡 -->
                      <div class="mui-scroll">
                        <div class="mui-loading">
                          <div class="mui-spinner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="item3mobile" class="itemmobile mui-slider-item mui-control-content">
                    <div id="scroll3" class="mui-scroll-wrapper">
                      <!-- 第三个选项卡 -->
                      <div class="mui-scroll">
                        <div class="mui-loading">
                          <div class="mui-spinner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="item4mobile" class="itemmobile mui-slider-item mui-control-content">
                    <div id="scroll3" class="mui-scroll-wrapper">
                      <!-- 第四个选项卡 -->
                      <div class="mui-scroll">价格</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 预定 -->
            <div id="tabbar-with-chat" class="mui-control-content">
              <YuDing></YuDing>
            </div>
            <!-- 私人订制模块
            <div id="tabbar-with-made" class="mui-control-content">私人订制</div>
            -->
            <!-- 三 -->
            <div id="tabbar-with-contact" class="mui-control-content">
              <inviteFriends></inviteFriends> 
            </div>
            <!-- 四 -->
            <div id="tabbar-with-map" class="mui-control-content">
              <User></User>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <header class="mui-bar mui-bar-nav hed_bar">
        <h1 class="mui-title">堂食</h1>
        <span class="mui-icon mui-icon mui-icon-search mui-pull-right"></span>
        <span class="mui-icon mui-icon mui-icon-search mui-pull-right"></span>
    </header>-->

    <div class="showBar">
      <div class="shopBox">
        <p>
          合计:
          <span>￥33.8</span>
        </p>
        <button>去结算</button>
      </div>
    </div>
    <!-- 预定 选桌 -->
    <div id="chooseTab" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">选桌</h1>
        <h1 class="mui-title">确定</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <chooseTab></chooseTab>
          </div>
        </div>
      </div>
    </div>

    <!-- 预定 排号 -->
    <div id="PaiHao" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">排号</h1>
        <h1 class="mui-title"></h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <PaiHao></PaiHao>
          </div>
        </div>
      </div>
    </div>

    <!-- 个人中心聚餐圈 -->
    <div id="JuCan" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">聚餐</h1>
        <h1 class="mui-title"></h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <JuCan></JuCan>
        </div>
      </div>
    </div>

    <!-- 聚餐圈已完成订单 -->
    <div id="complated_order" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
        <button
          type="button"
          class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"
        >
          <span class="mui-icon mui-icon-left-nav"></span>
        </button>
        <h1 class="mui-center mui-title">已完成聚餐</h1>
        <h1 class="mui-title"></h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <complated-order></complated-order>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YuDing from "@/components/yuding.vue";
import PaiHao from "@/components/paihao.vue";
import chooseTab from "@/components/chooseTab.vue";
import inviteFriends from "@/components/inviteFriends.vue";
import User from "@/components/user.vue";
import JuCan from "@/components/userComponents/jucan.vue";
import complatedOrder from "@/components/userComponents/complatedOrder.vue";

export default {
  components: {
    YuDing,
    PaiHao,
    chooseTab,
    inviteFriends,
    User,
    JuCan,
    complatedOrder
  },
  data() {
    return {
      // 用来控制标题栏
      flag: false,
      // 标题
      title: ""
    };
  },
  methods: {
    // tab切换
    tabSwitch(e, index) {
      index !== 1 ? (this.flag = true) : (this.flag = false);
      switch (index) {
        case 2:
          this.title = "堂食预定";
          break;
        case 3:
          this.title = "购物车";
          break;
        case 4:
          this.title = "个人中心";
          break;
      }
      document.querySelector(".mui-content").style.transform =
        "translate3d(0px, 0px, 0px) translateZ(0px)";
    }
  },
  mounted() {
    this.mui.init();
    this.mui.init({
      swipeBack: false
    });
    //初始化单页view
    var viewApi = mui("#app").view({
      defaultPage: "#setting"
    });
    (function($) {
      //处理view的后退与webview后退
      var oldBack = $.back;
      $.back = function() {
        if (viewApi.canBack()) {
          //如果view可以后退，则执行view的后退
          viewApi.back();
        } else {
          //执行webview后退
          oldBack();
        }
      };

      $(".mui-scroll-wrapper").scroll({
        indicators: true //是否显示滚动条
      });
      var html2 =
        '<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
      var html3 =
        '<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
      var item2 = document.getElementById("item2mobile");
      var item3 = document.getElementById("item3mobile");
      document.getElementById("slider").addEventListener("slide", function(e) {
        if (e.detail.slideNumber === 1) {
          if (item2.querySelector(".mui-loading")) {
            setTimeout(function() {
              item2.querySelector(".mui-scroll").innerHTML = html2;
            }, 100);
          }
        } else if (e.detail.slideNumber === 2) {
          if (item3.querySelector(".mui-loading")) {
            setTimeout(function() {
              item3.querySelector(".mui-scroll").innerHTML = html3;
            }, 500);
          }
        }
      });
      // 获取标题栏
    })(this.mui);
  }
};
</script>

<style lang="less" scoped>
.mui-views,
.mui-view,
.mui-pages,
.mui-page,
.mui-page-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.mui-scroll-wrapper,
.mui-scroll {
  background-color: #fff;
}
.mui-content {
  #tabbar-with-chat {
    height: 100%;
    background-color: #fff;
  }
  #tabbar-with-contact {
    background-color: transparent;
  }
}
.mui-pages {
  top: 46px;
  height: auto;
}

.mui-page.mui-transitioning {
  -webkit-transition: -webkit-transform 300ms ease;
  transition: transform 300ms ease;
}

.mui-page-left {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.mui-ios .mui-page-left {
  -webkit-transform: translate3d(-20%, 0, 0);
  transform: translate3d(-20%, 0, 0);
}

.mui-navbar {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  height: 44px;
  background-color: #f4f4f4;
}

.mui_bar1 {
  background-color: #2cb5a5;
}

.mui-navbar .mui-bar {
  position: absolute;
  background: transparent;
  text-align: center;
}

.mui-android .mui-navbar-inner.mui-navbar-left {
  opacity: 0;
}

.mui-ios .mui-navbar-left .mui-left,
.mui-ios .mui-navbar-left .mui-center,
.mui-ios .mui-navbar-left .mui-right {
  opacity: 0;
}

.mui-navbar .mui-btn-nav {
  -webkit-transition: none;
  transition: none;
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
}

.mui-navbar .mui-bar .mui-title {
  display: inline-block;
  width: auto;
}
.mui-ios .mui-navbar .mui-bar .mui-title {
  position: static;
}

.mui-page-shadow {
  position: absolute;
  right: 100%;
  top: 0;
  width: 16px;
  height: 100%;
  z-index: -1;
  content: "";
}

.mui-page-shadow {
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.01) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.01) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.mui-navbar-inner.mui-transitioning,
.mui-navbar-inner .mui-transitioning {
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease;
}

.mui-page {
  display: none;
}

.mui-pages .mui-page {
  display: block;
}

#popover {
  width: 97%;
  top: 45px !important;
  ul {
    background-color: #fff;
  }
}
.mui-segmented-control {
  display: inline-block !important;
}
#sliderSegmentedControl {
  position: relative;
  padding-left: 20%;

  .arrowdown {
    text-align: left;
    border: none;
    width: auto;
    margin-left: -2px;
  }
  .down_menu {
    position: absolute;
    left: 3px;
    top: 3px;
    width: 20%;
    a {
      color: #000;
    }
  }
}
.mui-control-content {
  background-color: white;
  min-height: 215px;
}
.mui-control-content .mui-loading {
  margin-top: 50px;
}
.custom_made {
  width: 1.2rem;
  height: 1.2rem;
}
.mui-table-view-cell {
  border-bottom: 1px solid #ccc;
}
.good_box {
  .good_item {
    .good_img {
      padding-top: 7px;
      width: 30%;
      img {
        width: 80px;
        height: 55px;
      }
    }
    .good_info {
      width: 70%;
      .good_msg {
        margin: 6px 0 10px;
      }
      .good_title {
        font-size: 17px;
        strong {
          color: #45bbab;
        }
      }
      .good_coolect {
        .coolect_left {
          img {
            width: 14px;
            height: 14px;
            vertical-align: middle;
          }
          span {
            color: #666;
          }
        }
        .cool_right {
          .step_box {
            .step_btn {
              width: 25px;
              height: 25px;
              line-height: 25px;
              background-color: #2cb5a5;
              border-radius: 50%;
              font-size: 20px;
              font-weight: normal;
              text-align: center;
              color: #fff;
            }
            .less {
              display: inline-block;
            }
            .cool_num {
              padding-top: 2px;
              height: 18px;
              margin: 0 2px;
            }
          }
        }
      }
    }
  }
}
.fot_bar {
  background-color: #fff;
}
.itemmobile {
  border-bottom: none !important;
  margin-bottom: 70px;
}
.showBar {
  position: fixed;
  bottom: 50px;
  z-index: 99;
  width: 100%;
  height: 70px;
  background-color: #434343;
  display: none;
  .shopBox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    p,
    button {
      font-size: 20px;
      color: #fff;
    }
    p {
      line-height: 70px;
      margin-left: 12px;
    }
    button {
      width: 140px;
      background-color: #2cb5a5;
      text-align: center;
      line-height: 70px;
      padding: 0;
      letter-spacing: 1px;
    }
  }
}

.mui-bar {
  background-color: #fff !important;
}

#setting {
  .mui-bar-nav {
    box-shadow: none;
  }
}

.mui_bar1 {
  position: fixed;
  z-index: 11;
  right: 0;
  left: 0;
}

.mui-navbar {
  color: #fff;
  .mui-navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 44px;
  }
  .m_tit {
    margin-left: 0;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: auto;
    width: 25%;
    margin-right: 1%;
    span {
      margin-left: -6px;
      margin-top: 4px;
    }
  }
  .searchBox {
    position: relative;
    width: 60%;
    padding-left: 5%;
    background-color: #fff;
    border-radius: 60px;
    color: #222;
    span {
      position: absolute;
      top: 15%;
      left: 5%;
      font-size: 22px;
    }
    .mt_input {
      height: 30px;
      border-radius: 60px;
      border-color: transparent;
      padding-left: 20px;
      margin: 0;
    }
  }
  .ic_box {
    width: 15%;
    text-align: right;
  }
}
</style>

