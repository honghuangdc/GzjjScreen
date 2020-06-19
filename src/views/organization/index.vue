<template>
  <div class="container">
    <frame-work :organization="frameWorkData.organization" :leaders="frameWorkData.leaders"></frame-work>
    <staff-list :staffList="staffListData"></staff-list>
    <solar-system :organizations="solarSystemData" @activeOrganization="getActiveOrganization"></solar-system>
    <business-process :business="businessProcessData"></business-process>
  </div>
</template>

<script>
import { FrameWork, StaffList, SolarSystem, BusinessProcess } from './components';
import { organizations } from './model/organizations';
import { leaders, staff } from './model/staff';
import { business } from './model/business';
export default {
  components: {
    FrameWork, StaffList, SolarSystem, BusinessProcess
  },
  data() {
    return {
      dataSource: { organizations, leaders, staff, business },
      frameWorkData: {
        organization: {},
        leaders: []
      },
      staffListData: [],
      solarSystemData: [],
      businessProcessData: [],
      currentShow: {
        organizationId: organizations[0].nodeId,
        childOrganizationId: null
      }
    }
  },
  methods: {
    loadData() {
      // 加载组织架构的数据
      this.dataSource.organizations.some(value => {
        if(this.currentShow.organizationId === value.nodeId) {
          this.frameWorkData.organization = value
          return true
        }
      })
      this.dataSource.leaders.some(value => {
        if(this.currentShow.organizationId === value.nodeId) {
          this.frameWorkData.leaders = value.leaderItems
          return true
        }
      })
      // 加载人员数据
      this.staffListData = []
      this.dataSource.staff.forEach(item => {
        if(item.parentId === this.currentShow.organizationId) {
          item.leaderItems.forEach(element => {
            this.staffListData.push(element.name)
          });
          this.staffListData.push(...item.staffItems)
          return true
        }
      })
      // 加载部门数据
      this.solarSystemData = this.dataSource.organizations
      // 加载部门业务数据
      this.businessProcessData = this.dataSource.business[0]
    },
    getActiveOrganization(id) {
      console.log(id)
      this.currentShow.organizationId = id
    }
  },
  created() {
    this.loadData()
  },
  watch: {
    'currentShow.organizationId'(newvalue) {
      this.loadData()
      console.log(newvalue)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>