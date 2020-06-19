<template>
  <div class="container">
    <div class="organizations">
      <div
        class="organizations-item"
        v-for="(item, index) in organizations"
        :key="index"
      >
        <div
          :class="[ 'organizations-name', currentOrganizationId === item.nodeId ? 'active-organization' : '']"
          @click=" currentOrganizationId = item.nodeId; currentPlanId = null;"
        >
          {{ item.name }}
        </div>
        <div
          class="corner-decorate"
          v-for="(item, index) in [ 'left-top', 'right-top', 'left-bottom', 'right-bottom']"
          :key="index"
          :class="`corner-decorate-${item}`"
        >
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="plans">
        <div class="plans-list">
          <div class="plans-list-item" v-for="(item, index) in plans" :key="index">
            <div
              :class="[ 'plans-name', currentPlanId === item.planId ? 'active-plan' : '']"
              @click=" currentPlanId = item.planId; currentOrganizationId = null;"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-projects">
        <div class="all-plans-projects">
          <div class="projects-item" v-for="(item, index) in projects" :key="index">
            <div class="projects-name-time">
              <h3 class="projects-name">
                <p>{{ item.name }}</p>
              </h3>
              <div class="projects-finished-time">
                <p>{{ item.finishedTime }}</p>
              </div>
            </div>
            <div class="projects-content">
              <div class="projects-title">具体工作</div>
              <img
                class="projects-top-border"
                src="@/assets/img/plan/projects-details-border.png"
              />
              <article class="projects-content-details">
                <p>{{ item.content }}</p>
              </article>
            </div>
            <div class="relative-organizations">
              <div class="responsible-orgznizations">
                <div class="responsible-orgznizations-item" v-for="(roItem, roIndex) in item.responsibleOrganizations" :key="roIndex">
                  {{ roItem.name }}
                </div>
              </div>
              <div class="assist-organizations">
                <h3 class="assist-organizations-title">
                  <img src="@/assets/img/plan/assist-organizations.png" alt="" />
                  <span>配合部门</span>
                </h3>
                <div class="assist-organizations-main">
                  <p>{{ item.assistOrganizations }}</p>
                </div>
              </div>
            </div>
            <div :class="[ item.planId === currentPlanId || item.responsibleOrganizationsId.indexOf(currentOrganizationId) > -1 ? '' : 'projects-item-modal']"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { organizations, plans, projects } from "./model/plan";
export default {
  data() {
    return {
      organizations,
      plans,
      projects,
      currentPlanId: null,
      currentOrganizationId: null
    };
  },
  watch: {
    currentOrganizationId(newValue) {
      if(newValue !== null) {
        const startArray = []
        const endArray = []
        this.projects.map(value => {
          if(value.responsibleOrganizationsId.indexOf(newValue) > -1) {
            startArray.push(value)
          } else {
            endArray.push(value)
          }
        })
        this.projects.length = 0
        this.projects.push(...startArray, ...endArray)
      }
    },
    currentPlanId(newValue) {
      if(newValue !== null) {
        const startArray = []
        const endArray = []
        this.projects.map(value => {
          if(value.planId.indexOf(newValue) > -1) {
            startArray.push(value)
          } else {
            endArray.push(value)
          }
        })
        this.projects.length = 0
        this.projects.push(...startArray, ...endArray)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba(0,0,0,0.6);

  .organizations {
    display: flex;
    padding: 32px 0 0 42px;

    .organizations-item {
      position: relative;
      margin-right: 25px;

      .organizations-name {
        width: 150px;
        height: 40px;
        box-sizing: border-box;
        background-color: #0b152c;
        border: 2px solid #6076ad;
        line-height: 36px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #f1881b;
      }
      .active-organization {
        background-color: #6076ad !important;
        color: #0efcff !important;
      }
    }
  }
  .main-content {
    display: flex;
    padding-left: 60px;
    padding-top: 24px;

    .plans {
      margin-right: 10px;

      .plans-list-item {
        position: relative;
        margin-bottom: 12px;
        padding-left: 13px;
        min-width: 335px;
        height: 42px;
        line-height: 42px;
        font-size: 20px;
        font-weight: bolder;
        color: #f1881b;
        background: linear-gradient(to right, rgba(25,54,112, 1), rgba(25,54,112, 0));

        &::before {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          left: -36px;
          border: 21px solid transparent;
          border-left-width: 18px;
          border-right-width: 18px;
          border-right-color: #193670;
        }
        .active-plan {
          color: #0efcff !important;
        }
      }
    }
    .scroll-projects {
      width: 6893px;
      height: 634px;
      overflow-x: auto;
      overflow-y: hidden;

      .all-plans-projects {
        display: flex;
        flex-flow: column wrap;
        align-content: flex-start;
        height: 634px;

        .projects-item {
          display: flex;
          margin: 0 25px 20px;
          position: relative;

          .projects-name {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: 152px;
            margin: 0 auto;
            padding: 10px 25px 0;
            background: url('../../assets/img/plan/finish-time-bg.png') no-repeat center center;
            background-size: 100% 100%;

            p {
              text-align: center;
              font-size: 20px;
              color: #f1881b;
            }
          }
          .projects-finished-time {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 289px;
            height: 133px;
            margin: 10px auto 0;
            padding: 0 32px 16px;
            box-sizing: border-box;
            background: url('../../assets/img/plan/projects-name.png') no-repeat center center;
            background-size: 100% 100%;

            p {
              line-height: 25px;
              font-size: 20px;
              color: #f1881b;
              text-align: justify;
            }
          }
          .projects-content {
            position: relative;
            margin: 0 20px 0 18px;
            top: 52px;
            width: 606px;
            height: 243px;
            box-sizing: border-box;
            border: 2px solid #0A97A6;
            border-top: 0;
            background: rgba(11, 21, 44, 0.6);

            .projects-title {
              position: absolute;
              left: 275px;
              top: -32px;
              width: 100px;
              font-size: 20px;
              font-weight: bold;
              color: #0efcff;
              text-align: center;
            }
            .projects-top-border {
              position: absolute;
              left: -2px;
              top: -29px;
              width: 606px;
              height: 29px;
            }
            .projects-content-details {
              height: 245px;
              overflow-y: auto;

              p {
                margin: 0;
                padding: 0 12px;
                font-size: 20px;
                font-weight: bold;
                color: #ccc;
                text-align: justify;
              }
            }
          }
          .relative-organizations {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 30px;
            height: 295px;

            .responsible-orgznizations-item {
              position: relative;
              margin-bottom: 3px;
              height: 32px;
              text-align: center;
              line-height: 32px;
              background-color: #0b152c;
              border: 2px solid #0efcff;
              font-size: 20px;
              font-weight: bold;
              color: #f1881b;

              &::before {
                position: absolute;
                left: -22px;
                top: 15px;
                content: '';
                width: 20px;
                height: 2px;
                background-color: #0efcff;
              }
            }
            .assist-organizations {
              width: 160px;
              border: 2px solid #0efcff;
              background-color: #0b152c;

              .assist-organizations-title {
                position: relative;
                margin: 0;
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-bottom: 2px solid #0d8b98;

                > img {
                  position: absolute;
                  left: 8px;
                  top: 6px;
                  width: 18px;
                  height: 18px;
                }
                > span {
                  font-size: 20px;
                  color: #ccc;
                }
              }
              .assist-organizations-main > p {
                margin: 0;
                padding: 8px;
                font-size: 20px;
                color: #ccc;
              }
            }
          }
          .projects-item-modal {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.6);
            z-index: 99;
          }
        }
      }
    }
  }
}
</style>
