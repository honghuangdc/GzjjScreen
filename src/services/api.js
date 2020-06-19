import Vue from 'vue';
const basicUrl = 'http://192.168.3.26:8800/';
function requestFunc(api, data) {
  const axiosData = {
    url: basicUrl + api,
    headers: {
      'Content-type': 'application/json',
    },
    method: 'post',
    params: {
      token: '123456'
    },
    data: data
  }
  return Vue.axios({
    ...axiosData
  })
}
// 获取所有组织及子部门
function getOrganizationList() {
  return requestFunc('/organization/findAllOrganization')
}


// 传到后台的数据格式{ id: id, add: [{ name: ''}...], update: [{name: '', nodeId: ''}...], delete: [{nodeId: ''}...] }
function handleOrganization(data) {
  const JsonData = JSON.stringify(data)
  return requestFunc('/organization/handleOrganizationAndChildren', JsonData)
}

// 添加一个组织
function addOrganization(data) {
  return requestFunc('/organization/addOneOrganization', data)
}

// 更新一个组织
function updateOrganization() {
  return requestFunc('/organization/updateOneOrganization')
}

// 删除一个组织
function deleteOrganizationById(id) {
  return requestFunc('/organization/deleteOneOrganizationById', { id: id })
}

//添加组织的子部门
function addChildOrganization(data) {
  return requestFunc('/organization/addOneZiOrganization', data)
}

function getPeopleByOrganizationId() {

}

export {
  getOrganizationList,
  handleOrganization,
  addOrganization,
  updateOrganization,
  deleteOrganizationById,
  addChildOrganization,
  getPeopleByOrganizationId
}
