<template>
  <div class="container">
    <div class="label">
      <span>组织架构</span>
    </div>
    <div class="main">
      <div class="organizations-wrapper">
        <div class="organizations">
          <div class="organizations-name">{{ organization.name }}</div>
          <!-- 四角装饰 -->
          <div
            v-for="(item, index) in ['left-top', 'right-top', 'left-bottom', 'right-bottom']"
            :key="index"
            :class="['corner-decorate', `corner-decorate-${item}`]"
          >
          </div>
        </div>
        <!-- 连线 -->
        <div class="links-line">
          <div
            v-for="(item, index) in ['left-top', 'right-top', 'left-bottom', 'right-bottom']"
            :class="['lines-item', `lines-${item}`]"
            :key="index"
          >
          </div>
        </div>
        <div class="child-organizations">
          <div
            class="child-organizations-item"
            v-for="(item, index) in organization.childNode"
            :key="index"
            :style="{ margin: (index + 2) % 3 === 0 ? '0 140px' : '0'}"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="leader">
        <div
          class="leader-item"
          v-for="(item, index) in leaders" :key="index"
        >
          <img :src="item.avatar"/>
          <div class="name-position">
            <h3>{{ item.name }}</h3>
            <p>{{ item.position }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    organization: {
      type: Object,
      default: () => {
        return {
          name: '',
          childNode: []
        }
      }
    },
    leaders: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      
    }
  },
  created() {
    // console.log(this.leaders)
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1300px;
    height: 749px;
    box-sizing: border-box;
    padding: 76px 0;
    background: url('../../../assets/img/organization/square-bg-left.png') center center no-repeat;
    background-size: cover;

    .organizations-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #f1881b;

      .organizations {
        position: relative;

        .organizations-name {
          width: 180px;
          height: 42px;
          box-sizing: border-box;
          background-color: #0b152c;
          border: 2px solid #6076ad;
          line-height: 38px;
          text-align: center;
          font-size: 27px;
          font-weight: bold;
          overflow: hidden;
        }
      }
      .links-line {
        display: flex;
        flex-flow: row wrap;
        width: 660px;

        .lines-item {
          width: 330px;
          height: 34px;
          box-sizing: border-box;
          border: 1px solid #0efcff;
        }
        .lines-left-top {
          border-left: 0;
          border-top: 0;
        }
        .lines-right-top {
          border-right: 0;
          border-top: 0;
        }
        .lines-left-bottom {
          border-bottom: 0;
          border-left-width: 2px;
        }
        .lines-right-bottom {
          border-bottom: 0;
          border-right-width: 2px;
        }
      }
      .child-organizations {
        display: flex;
        flex-flow: row wrap;
        width: 850px;

        .child-organizations-item {
          width: 190px;
          height: 40px;
          margin-bottom: 10px !important;
          font-size: 25px;
          line-height: 36px;
          text-align: center;
          box-sizing: border-box;
          background-color: rgba(11, 21, 44, 0.75);
          border: 2px solid #6076ad;
          cursor: pointer;
        }
        .active-child-organization {
          background-color: #6076ad !important;
          color: #0efcff !important;
        }
      }
    }
    .leader {
      width: 990px;
      height: 226px;
      box-sizing: border-box;
      margin: 60px auto 0;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar{  
        width: 8px;  
        height: 8px;  
      }
      .leader-item {
        display: flex;
        align-items: center;
        width: 310px;
        height: 88px;
        margin: 0 8px 25px;
        padding: 10px 0;
        border-radius: 10px;
        background-color: #fff;

        > img {
          width: 60px;
          height: 60px;
          margin: 0 14px 0 17px;
        }
        .name-position {
          > h3 {
            font-size: 24px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
          }
          > p {
            font-size: 21px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>