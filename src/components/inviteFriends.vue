<template>
  <div class="friends">
    <div class="dinn">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>门 &nbsp;&nbsp; 店</label>
          <input type="text" class="mui-input-clear" placeholder="门店地址" />
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
          <label>聚餐类型</label>
          <input type="text" class="mui-input-clear" placeholder="订婚宴/朋友宴/商务宴/毕业宴" />
        </div>
        <div class="mui-input-row">
          <label>聚餐费用</label>
          <div class="options">
            <span class="op_item">我请客</span>
            <span class="op_item">好友请客</span>
            <span class="op_item">AA制</span>
          </div>
        </div>
      </form>
    </div>

    <div class="invite_friends">
      <div class="mui-input-row mui-checkbox">
        <div class="avatar_box"></div>
        <label>好友1</label>
        <input name="checkbox1" value="Item 1" type="checkbox" checked />
      </div>
      <div class="mui-input-row mui-checkbox">
        <div class="avatar_box"></div>
        <label>好友2</label>
        <input name="checkbox1" value="Item 1" type="checkbox" />
      </div>
      <div class="mui-input-row mui-checkbox">
        <div class="avatar_box"></div>
        <label>好友3</label>
        <input name="checkbox1" value="Item 1" type="checkbox" />
      </div>
      <div class="mui-input-row mui-checkbox">
        <div class="avatar_box"></div>
        <label>好友4</label>
        <input name="checkbox1" value="Item 1" type="checkbox" />
      </div>
      <div class="mui-input-row mui-checkbox">
        <div class="avatar_box"></div>
        <label>好友5</label>
        <input name="checkbox1" value="Item 1" type="checkbox" />
      </div>

      <div class="submitBtn">
        <button class="sub_btn mui-btn-block" @tap="submitForm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateTime: ""
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
      this.mui.alert("点击了确定提交了", () => {
        console.log(1);
      });
    }
  },
  mounted() {
    let options = document.querySelectorAll(".op_item");
    for (let i = 0; i < options.length; i++) {
      options[i].onclick = function() {
        for (let j = 0; j < options.length; j++) {
          options[j].classList.remove("current");
        }
        this.classList.add("current");
      };
    }
  }
};
</script>

<style lang="less" scoped>
#tabbar-with-contact.mui-control-content {
  background-color: none;
}
.friends {
  .dinn {
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
      .options {
        height: 100%;
        line-height: 40px;
        .op_item {
          font-size: 14px;
          color: #909090;
          padding: 3px 10px;
          border: 1px solid #909090;
          margin-right: 12px;
        }
      }
    }
    .current {
      background-color: #2cb5a5;
      color: #fff !important;
      border: none;
    }
  }
  .invite_friends {
    background-color: #fff;
    margin-top: 10px;
    .mui-input-row {
      position: relative;
      height: 55px;
      border-bottom: 1px solid #c8c7cc;
      label {
        line-height: 2.1;
        margin-left: 40px;
      }
      input {
        line-height: 3;
      }
      input::before {
      }
      .avatar_box {
        position: absolute;
        top: 0;
        left: 10px;
        bottom: 0;
        right: 0;
        float: left;
        width: 40px;
        height: 40px;
        background-color: orange;
        margin: auto 0;
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
}
</style>