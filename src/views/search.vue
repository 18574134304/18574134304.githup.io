<template>
  <div id="search">
    <div class="searchBox">
      <router-link to="/index">
        <span class="back_icon mui-icon mui-icon mui-icon-arrowleft"></span>
      </router-link>
      <input type="text" class="searchIpt" placeholder="搜索" />
    </div>
    <div class="msgBox">
      <p class="msg">搜索指定内容</p>
      <div class="cate">
        <a href="javascript:void(0);">菜品</a>
        <a href="javascript:void(0);">门店</a>
        <a href="javascript:void(0);">朋友圈</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#search {
  width: 100%;
  height: 100%;
  background-color: #eee;
  .searchBox {
    position: relative;
    padding: 10px;
    padding-left: 25px;
    height: 50px;
    background-color: #bbb;
    .back_icon {
      position: absolute;
      top: 11px;
      left: 0px;
      font-size: 28px;
      color: #222;
    }
    .searchIpt {
      width: 100%;
      height: 30px;
      border-radius: 15px;
    }
  }
  .msgBox {
    margin-top: 20px;
    text-align: center;
    .cate {
      a {
        margin-right: 10px;
        color: #2cb5a5;
      }
    }
  }
}
</style>