<template>
  <div class="Order">
    <div class="Jitem">
      <div class="orderItem">
        <div class="o1">
          <img src="../../assets/images/avatar.jpg" alt />
        </div>
        <div class="o2">
          <div class="order_detail">
            <p class="order_title">同事聚餐</p>
            <p class="order_time">
              <span>时间:</span> 6月28日中午12:00
            </p>
            <p class="order_address">
              <span>地点:</span> 郑州市中原区陇海路工人路御都学府2号楼一单元312室
            </p>
            <div class="order_price">
              <div class="left">
                <span>费用:</span> XXX请客/AA制
              </div>
              <div class="right">
                <span data-v-7b4b534a class="mi_b mui-icon iconfont icon-yonghu"></span>16人
              </div>
            </div>
          </div>
        </div>
        <div class="o3">
          <button>已完成</button>
        </div>
      </div>
      <div class="orderItem">
        <div class="o1">
          <img src="../../assets/images/avatar.jpg" alt />
        </div>
        <div class="o2">
          <div class="order_detail">
            <p class="order_title">同事聚餐</p>
            <p class="order_time">
              <span>时间:</span> 6月28日中午12:00
            </p>
            <p class="order_address">
              <span>地点:</span> 郑州市中原区陇海路工人路御都学府2号楼一单元312室
            </p>
            <div class="order_price">
              <div class="left">
                <span>费用:</span> XXX请客/AA制
              </div>
              <div class="right">
                <span data-v-7b4b534a class="mi_b mui-icon iconfont icon-yonghu"></span>16人
              </div>
            </div>
          </div>
        </div>
        <div class="o3">
          <button>已完成</button>
        </div>
      </div>
      <div class="orderItem">
        <div class="o1">
          <img src="../../assets/images/avatar.jpg" alt />
        </div>
        <div class="o2">
          <div class="order_detail">
            <p class="order_title">同事聚餐</p>
            <p class="order_time">
              <span>时间:</span> 6月28日中午12:00
            </p>
            <p class="order_address">
              <span>地点:</span> 郑州市中原区陇海路工人路御都学府2号楼一单元312室
            </p>
            <div class="order_price">
              <div class="left">
                <span>费用:</span> XXX请客/AA制
              </div>
              <div class="right">
                <span data-v-7b4b534a class="mi_b mui-icon iconfont icon-yonghu"></span>16人
              </div>
            </div>
          </div>
        </div>
        <div class="o3">
          <button>已完成</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.Order {
  height: 100%;
  background-color: #ebebeb;
  .Jitem {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 12px 10px;
  }
  .orderItem {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 7px 5px;
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 15px;
    .o1 {
      flex: 20%;
      img {
        width: 100%;
        height: 100px;
      }
    }
    .o2 {
      box-sizing: border-box;
      flex: 60%;
      padding: 0 10px;
      p {
        margin: 0;
        font-size: 12px;
        color: #919191;
      }
      .order_title {
        font-size: 15px;
        color: #323232;
      }
      span {
        color: #313131;
      }
      .order_price {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #919191;
        span {
          color: #313131;
          font-size: 12px;
        }
      }
    }
    .o3 {
      box-sizing: border-box;
      padding: 10px 0;
      flex: 20%;
      button {
        width: 100%;
        border-radius: 30px;
        font-size: 14px;
        color: #fff;
        background-color: #bfbfbf;
        margin-top: 30px;
      }
    }
  }
}
</style>