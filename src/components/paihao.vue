<template>
  <div class="paihao">
    <form class="mui-input-group">
      <div class="mui-input-row">
        <label>门店名称</label>
        <input type="text" class="mui-input-clear" placeholder="门店名称" />
      </div>
      <div class="mui-input-row">
        <label>餐桌类型</label>
        <input type="text" class="mui-input-clear" placeholder="餐桌类型" />
      </div>
      <div class="mui-input-row">
        <label>餐桌数量</label>
        <input type="number" class="mui-input-clear" placeholder="餐桌数量" />
      </div>
      <div class="mui-input-row">
        <label>用餐人数</label>
        <input type="number" class="mui-input-clear" placeholder="用餐人数" />
      </div>
    </form>
    <div class="submitBtn">
      <button class="sub_btn mui-btn-block" @tap="submitForm">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.mui.alert("排队成功，你的号码是1001、1002 \n 请等待", () => {
        console.log(1);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.paihao {
  .mui-input-row {
    height: 45px;
    label {
      width: 30%;
      color: #646464;
    }
    input {
      width: 70%;
      color: #323232;
    }
  }
  .submitBtn {
    box-sizing: border-box;
    padding: 20px 10px 10px;
    .sub_btn {
      background-color: #2cb5a5;
      color: #fff;
    }
  }
}
</style>