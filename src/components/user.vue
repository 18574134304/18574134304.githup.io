<template>
  <div class="user">
    <div class="header">
      <div class="userInfo">
        <div class="info">
          <img src="../assets/images/avatar.jpg" />
          <div class="info_right">
            <p class="username">
              昵称:
              <span>鱼</span>
            </p>
            <p class="mobile">
              手机号:
              <span>18695831229</span>
            </p>
          </div>
        </div>
        <div class="settingBox">
          <span class="mui-icon mui-icon-gear"></span>
        </div>
      </div>
    </div>
    <div class="content">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a href="#JuCan" class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-yonghu"></span>聚餐圈点餐
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-haoyou"></span>我的好友
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-ic_reserve"></span>我的预定
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-qianbao"></span>我的钱包
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-jifen"></span>我的积分
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-shoucang"></span>我的收藏
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="mi_b mui-icon iconfont icon-coupon"></span>我的优惠券
          </a>
        </li>
      </ul>
    </div>
    <div class="submitBtn">
      <button type="button" class="sub_btn mui-btn mui-btn-block">退出账号</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user {
  min-height: 670px;
  .header {
    display: flex;
    justify-content: space-between;
    height: 160px;
    background-color: #33baac;
    padding: 45px 18px 25px;
    .userInfo {
      display: flex;
      width: 100%;
      .info {
        display: flex;
        width: 75%;
        img {
          width: 75px;
          height: 78px;
          border-radius: 50%;
          margin-right: 10px;
          vertical-align: middle;
        }
        .info_right {
          width: 175px;
          p {
            color: #fff;
            font-size: 16px;
            margin: 0;
            margin-top: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .settingBox {
        width: 25%;
        text-align: right;
        line-height: 80px;
        span {
          font-size: 36px;
          color: #fff;
        }
      }
    }
  }
  .mi_b {
    color: #33baac;
    margin-right: 3px;
  }
  .content {
    ul {
      li {
        padding: 13px 15px;
        a {
          span {
            transform: translateY(2px);
          }
        }
      }
    }
  }
  .submitBtn {
    box-sizing: border-box;
    padding: 20px 0 10px;
    .sub_btn {
      border-radius: 8px;
      background-color: #2cb5a5;
      color: #fff;
    }
  }
}
</style>
