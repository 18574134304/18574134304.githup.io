<template>
  <div>
    <div class="doom_Box">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label for="item1">门店名称</label>
          <input id="item1" type="text" class="mui-input-clear" placeholder="三华餐厅" />
        </div>
        <div class="mui-input-row" @click="showDataPicker($event)">
          <label>用餐时间</label>
          <input
            type="text"
            :value="dateTime"
            disabled
            class="disabled_input mui-input-clear"
            placeholder="日期"
          />
        </div>
        <div class="mui-input-row">
          <label for="item3">用餐人数</label>
          <input id="item3" type="text" class="mui-input-clear" placeholder="请输入用餐人数" />
        </div>
        <div class="mui-input-row">
          <label for="item4">所选桌位</label>
          <input id="item4" type="text" class="mui-input-clear" placeholder="桌位" />
        </div>
        <div class="mui-input-row invite_row">
          <div class="row_left" style="width:45%">
            <label>邀请好友点餐</label>
            <span>开启后显示邀请好友名称</span>
          </div>
          <a :href="switchFlag ? 'javascript:;' : '#chooseTab'">
            <div id="mySwitch" class="mui-switch mui-switch-mini" @tap="switchs">
              <div class="mui-switch-handle"></div>
            </div>
          </a>
        </div>
        <div class="mui-input-row">
          <label for="item5">备注</label>
          <input id="item5" type="text" class="mui-input-clear" placeholder="请输入你的备注" />
        </div>
      </form>
    </div>
    <div class="submitBtn">
      <button type="button" class="sub_btn mui-btn mui-btn-block" @tap="submitForm">确定提交</button>
    </div>
  </div>
</template>

<script>
// import "../assets/mui/js/mui.picker.min.js";

export default {
  data() {
    return {
      dateTime: "",
      switchFlag: false
    };
  },
  methods: {
    // 展示时间框
    showDataPicker(e) {
      let that = e.target;
      console.log(that);
      that.picker = new this.mui.DtPicker();
      that.picker.show(function(rs) {
        console.log(rs);
        that.picker.dispose();
        that.picker = null;
      });
    },
    submitForm() {
      this.mui.alert("预定成功！", () => {
        console.log(1);
      });
    },
    // 判断是否打开邀请好友
    switchs() {
      this.switchFlag = document
        .getElementById("mySwitch")
        .classList.contains("mui-active");
    }
  },
  mounted() {}
};
</script>

<!-- @import "../assets/mui/css/mui.picker.min.css"; -->
<style lang="less" scoped>
.doom_Box {
  .mui-input-row {
    .disabled_input {
      border-color: #e4e7ed;
      color: #c0c4cc;
    }
    label {
      width: 30%;
      color: #646464;
    }
    input {
      width: 70%;
      color: #323232;
    }
  }
  .mui-input-group {
    .mui-input-row {
      height: 45px;
      label {
        line-height: 1.4;
      }
      input {
        height: 45px;
        color: #323232;
        font-size: 16px;
      }
    }

    .invite_row {
      display: flex;
      justify-content: space-between;
      height: 55px;
      .row_left {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        label {
          width: 100%;
          padding: 5px 0 2px;
        }
        span {
          font-size: 12px;
          color: #646464;
        }
      }

      .mui-switch-mini {
        width: 65px;
        margin-top: 10px;
      }

      .mui-switch.mui-active {
        border-color: #2cb5a5;
        background-color: #2cb5a5;
      }
    }
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
</style>
