<template>
  <div class="container">
    <div class="label">
      <span>人员清单</span>
    </div>
    <div class="main">
      <div class="staff-list">
        <div class="staff-item" v-for="(item, index) in staffList" :key="index">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    staffList: {
      type: Array,
      default: () => []
    }
  },
  data()  {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 1449px !important;
  height: 749px !important;
  padding-left: 42px;

  .label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 17px;
    width: 70px;
    height: 310px;
    box-sizing: border-box;
    background-color: #0b152c;
    border: 5px solid #14c5ff;
    box-shadow: 0 0 10px 5px rgba(4, 246, 253, 0.41);

    &::before {
      content: '';
      position: absolute;
      top: -5px;
      right: -45px;
      width: 40px;
      height: 7px;
      background: linear-gradient(to right, #14c5ff, #49a4ca);
    }
    > span {
      font-size: 33px;
      font-weight: bold;
      color: #ccc;
      text-align: center;
    }
  }
  .main {
    width: 1300px;
    height: 765px;
    box-sizing: border-box;
    padding: 50px 0;
    background: url('../../../assets/img/organization/square-bg-left.png') center center no-repeat;
    background-size: cover;

    .staff-list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      width: 1205px;
      height: 665px;
      margin: 0 auto;
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar{  
        width: 8px;  
        height: 8px;  
      }
      .staff-item {
        width: 160px;
        height: 40px;
        margin: 8px 5px;
        font-size: 24px;
        color: #fe8f19;
        line-height: 36px;
        text-align: center;
        box-sizing: border-box;
        background-color: rgba(11, 21, 44, 0.75);
        border: 2px solid #6076ad;
        overflow: hidden;
      }
    }
  }
}
</style>