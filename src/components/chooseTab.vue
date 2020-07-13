<template>
  <div class="chooseBox">
    <div class="chooseItem">
      <div class="title">
        <div class="left">
          <h3>大厅</h3>
          <span>当前大厅还有6桌可选</span>
        </div>
        <div class="right mui-clearfix">
          <div class="disabled_choos">
            <div class="msg_block"></div>不可选
          </div>
          <div class="choose">
            <div class="msg_block"></div>可选
          </div>
        </div>
      </div>
      <div class="choose_content">
        <div class="choose_rows mui-clearfix">
          <div class="choose_msg">4人桌</div>
          <ul class="options mui-clearfix">
            <li class="choose-current">D-01</li>
            <li class="choose-current">D-02</li>
            <li>D-03</li>
            <li>D-04</li>
            <li class="choose-current">D-05</li>
            <li class="choose-current">D-06</li>
          </ul>
        </div>

        <div class="choose_rows mui-clearfix">
          <div class="choose_msg">8人桌</div>
          <ul class="options mui-clearfix">
            <li class="choose-current">D-01</li>
            <li class="choose-current">D-02</li>
            <li>D-03</li>
            <li class="choose-current">D-04</li>
            <li>D-05</li>
            <li>D-06</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="chooseItem">
      <div class="title">
        <div class="left">
          <h3>包间</h3>
          <span>包间已满是否排号</span>
        </div>
        <div class="right mui-clearfix">
          <a class="paihao_btn" href="#PaiHao">排号</a>
        </div>
      </div>
      <div class="choose_content">
        <div class="choose_rows mui-clearfix">
          <div class="choose_msg">小包间（6~8人）</div>
          <ul class="options mui-clearfix">
            <li class="choose-current">珠光阁</li>
            <li class="choose-current">珠光阁</li>
            <li class="choose-current">珠光阁</li>
            <li class="choose-current">珠光阁</li>
            <li class="choose-current">珠光阁</li>
            <li class="choose-current">珠光阁</li>
          </ul>
        </div>

        <div class="choose_rows mui-clearfix">
          <div class="choose_msg mui-clearfix">大包间（8-12人）</div>
          <ul class="options mui-clearfix">
            <li class="choose-current">宝气阁</li>
            <li class="choose-current">宝气阁</li>
            <li class="choose-current">宝气阁</li>
            <li class="choose-current">宝气阁</li>
            <li class="choose-current">宝气阁</li>
            <li class="choose-current">宝气阁</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.chooseBox {
  .choose-current {
    background-color: #2bb5a5 !important;
  }
  .chooseItem {
    .title {
      display: flex;
      justify-content: space-between;
      padding: 15px 10px 10px;
      .left {
        max-width: 70%;
        h3 {
          display: inline-block;
          font-weight: 400;
          color: #656565;
        }
        span {
          color: #ff9801;
          font-size: 14px;
          letter-spacing: 1.5px;
        }
      }
      .right {
        padding-top: 10px;
        font-size: 14px;
        color: #656565;
        .msg_block {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 2px;
        }
        .disabled_choos {
          position: relative;
          margin-right: 15px;
          padding-left: 16px;
          float: left;
          div {
            background-color: #909090;
          }
        }
        .choose {
          position: relative;
          float: right;
          padding-left: 16px;
          div {
            background-color: #2cb5a5;
          }
        }
        .paihao_btn {
          padding: 3px 8px;
          background-color: #ff9900;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
    .choose_content {
      width: 100%;
      background-color: #fff;
      padding: 15px 18px;
      .choose_msg {
        margin-bottom: 5px;
      }
      .options {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          float: left;
          margin-right: 1.2%;
          font-size: 13px;
          color: #fff;
          width: 15%;
          height: 26px;
          line-height: 26px;
          text-align: center;
          background-color: #959595;
          border-radius: 4px;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
