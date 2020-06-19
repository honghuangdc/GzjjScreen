<template>
  <div class="container">
    <div class="label">
      <span>业务流程</span>
    </div>
    <div class="main">
      <div class="business-wrapper">
        <div class="business-label">
          <div
            class="business-label-item"
            v-for="(item, index) in business.businessItems" :key="index"
            :style="{ backgroundImage: activeBusinessId === item.businessId ? `url(${activeBusinessBg})` : `url(${defaultBusinessBg})` }"
            @click="activeBusinessId = item.businessId"
          >
            {{ item.businessName }}
          </div>
        </div>
        <div class="task">
          <div class="task-item" v-for="(item, index) in taskData" :key="index">
            <div class="task-name">
              <p>{{ item.stepName }}</p>
            </div>
            <div class="operation">
              <p v-for="(operationItem, operationIndex) in item.operations" :key="operationIndex">{{ (operationIndex + 1) + '.' + operationItem.operationName }}</p>
            </div>
          </div>
          <div class="task-title">主要环节</div>
          <div class="operation-title">操作清单</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    business: {
      type: Object,
      default: () => {
        return {
          businessItems: []
        }
      }
    }
  },
  data() {
    return {
      activeBusinessId: null,
      activeBusinessBg: require('@/assets/img/organization/business-bg-active.png'),
      defaultBusinessBg: require('@/assets/img/organization/business-bg.png'),
      taskData: {
        mainStep: []
      }
    }
  },
  methods: {
    getActiveBusiness() {
      if(this.business.businessItems.length > 0) {
        this.activeBusinessId = this.business.businessItems[0].businessId
      }
    },
    formatTaskData() {
      if(this.business.businessItems.length > 0) {
        this.taskData = this.business.businessItems.find(value => this.activeBusinessId === value.businessId).mainStep
      }
    }
  },
  created() {
    this.getActiveBusiness()
    this.formatTaskData()
  },
  watch: {
    activeBusinessId(newValue) {
      this.taskData = this.business.businessItems.find(value => newValue === value.businessId).mainStep
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  width: 2898px !important;

  .label {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 45px;
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
      right: -47px;
      width: 42px;
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
    width: 2776px;
    height: 768px;
    box-sizing: border-box;
    padding: 37px 51px 0;
    background: url('../../../assets/img/organization/square-bg-right.png') center center no-repeat;
    background-size: cover;

    .business-wrapper {
      .business-label {
        display: flex;
        padding: 3px 0 25px 75px;
        background-color: #004986;
        border-radius: 10px 10px 0 0;

        .business-label-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 264px;
          height: 105px;
          margin-right: 46px;
          line-height: 26px;
          box-sizing: border-box;
          padding: 0 22px 10px;
          background-size: cover;
          font-size: 23px;
          color: #fff;
          word-break: break-all;
        }
      }
      .task {
        display: flex;
        position: relative;
        padding-left: 40px;
        
        .task-item {
          margin: 0 27px;

          .task-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 258px;
            height: 180px;
            box-sizing: border-box;
            padding: 0 40px;
            margin: 16px 0;
            background: url('../../../assets/img/organization/main-task-bg.png');
            background-size: cover;

            > p {
              max-height: 160px;
              text-align: justify;
              line-height: 25px;
              font-size: 22px;
              color: #fe8f19;
              overflow: auto;
            }
          }
          .operation {
            width: 265px;
            height: 360px;
            box-sizing: border-box;
            padding: 12px 8px;
            background-color: #0b152c;
            border: 2px solid #0efcff;
            overflow: auto;
            
            &::-webkit-scrollbar-thumb{  
              background-color:#cdcdcd;  
              border-radius:4px;  
            }  
            &::-webkit-scrollbar-thumb:hover{  
              background-color:#cdcdcd;  
              border-radius:4px;  
            }
            &::-webkit-scrollbar{  
              width: 8px;  
              height: 8px;  
            }
            > p {
              margin-bottom: 8px;
              font-size: 20px;
              color: #ccc;
              line-height: 23px;
              word-break: break-all;
              text-align: justify;
            }
          }
        }
        .task-title {
          position: absolute;
          left: 20px;
          top: 35px;
          width: 28px;
          word-break: break-all;
          text-align: center;
          font-size: 24px;
          color: #fff;
        }
        .operation-title {
          position: absolute;
          left: 20px;
          bottom: 125px;
          width: 28px;
          word-break: break-all;
          text-align: center;
          font-size: 24px;
          color: #fff;
        }
      }
    }
  }
}
</style>