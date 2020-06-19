<template>
  <div class="container">
    <!-- 页面 -->
    <organization :class="[currentPage === 'organization' ? '' : 'hide-page']"></organization>
    <plan v-if="currentPage === 'plan'"></plan>
    <!-- 页面切换 -->
    <div class="toggle-page">
      <div @click="currentPage = 'organization'" :class="[ 'toggle-light', currentPage === 'organization' ? 'red-light-active' : 'red-light-disabled']"></div>
      <div @click="currentPage = 'plan'" :class="[ 'toggle-light', currentPage === 'plan' ? 'green-light-active' : 'green-light-disabled']"></div>
    </div>
  </div>
</template>

<script>
import organization from '../organization';
import plan from '../plan';
export default {
  components: {
    organization, plan
  },
  data() {
    return {
      currentPage: 'organization'
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;

  .hide-page {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
  .toggle-page {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 32px;
    bottom: 22px;
    width: 72px;
    height: 44px;
    box-sizing: border-box;
    background-color: #222;
    border-radius: 12px;
    border: 6px solid #fff;

    .toggle-light {
      width: 24px;
      height: 24px;
      margin: 0 2px;
      border-radius: 50%;
    }
    .red-light-active {
      background-color: rgb(255, 103, 102);
    }
    .red-light-disabled {
      background-color: rgba(255, 103, 102, 0.67);
    }
    .green-light-active {
      background-color: rgb(68, 211, 157);
    }
    .green-light-disabled {
      background-color: rgba(68, 211, 157, 0.67);
    }
    .yellow-light-active {
      background-color: rgb(255, 200, 0);
    }
    .yellow-light-disabled {
      background-color: rgba(255, 200, 0, 0.67);
    }
  }
}
</style>
