<template>
  <div class="container">
    <div class="ellipse-wrapper">
      <div class="ellipse">
        <div
          class="star"
          v-for="(item, index) in organizations"
          :key="index"
          :id="`starId${index}`"
          @click="handleStar(item.nodeId)"
        >
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="sun"></div>
    </div>
    <img class="play-pause-btn" v-if="animationStatus === 'playing'" src="@/assets/img/organization/pause-bg.png" @click="handleAnimation" />
    <img class="play-pause-btn" v-else src="@/assets/img/organization/play-bg.png" @click="handleAnimation" />
  </div>
</template>

<script>
import { starsMoveProps } from '@/utils'
export default {
  name: 'SolarSystem',
  props: {
    organizations: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      stars: starsMoveProps(13),
      animationId: null,
      animationStatus: 'playing'
    };
  },
  methods: {
    createAnimation() {
      window.requestAnimationFrame(this.move);
    },
    move() {
      const plus = Math.PI / 1080;
      this.stars.forEach((value, index) => {
        const star = document.getElementById(value.id);
        star.style.transform = `translate(${value.x}px, ${value.y}px)`;
        const tempAngle = value.angle;
        this.stars[index].angle += plus;
        this.stars[index].x = 600 * Math.cos(tempAngle + plus) + 600;
        this.stars[index].y = 300 * Math.sin(tempAngle + plus) + 300;
      })
      this.animationId = window.requestAnimationFrame(this.move);
    },
    handleStar(id) {
      window.cancelAnimationFrame(this.animationId);
      this.animationStatus = 'paused'
      this.animationId = null;
      this.$emit('activeOrganization', id)
    },
    handleAnimation() {
      if(this.animationStatus === 'playing') {
        this.animationStatus = 'paused'
        window.cancelAnimationFrame(this.animationId);
        this.animationId = null;
      } else {
        this.animationId = null;
        this.animationId = window.requestAnimationFrame(this.move);
        this.animationStatus = 'playing'
      }
    }
  },
  mounted() {
    this.createAnimation()
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  width: 1500px !important;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-bottom: 65px;

  .ellipse-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1200px;
    height: 600px;
    z-index: 99;

    /* 椭圆轨道 */
    .ellipse {
      position: relative;
      width: 1200px;
      height: 600px;
      border: 1px solid #cdcdcd;
      border-radius: 50%;

      .star {
        position: absolute;
        left: -50px;
        top: -50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: url('../../../assets/img/organization/star.png');
        background-size: cover;
        cursor: pointer;

        > p {
          padding: 0 10px;
          margin: auto 0;
          font-size: 20px;
          color: #fff;
          text-align: center;
        }
      }
    }
    .sun {
      position: absolute;
      width: 180px;
      height: 180px;
      background: url('../../../assets/img/organization/police-sign.png') center center no-repeat;
      background-size: cover;
    }
  }
  .play-pause-btn {
    position: absolute;
    left: 20px;
    top: 80px;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
}
</style>
