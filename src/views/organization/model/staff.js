import { organizations } from './organizations'

function leaderItems(name) {
  const data = []
  for(let i = 1; i <= 7; i ++) {
    data.push({ name: `${name}领导${i}`, position: `${name}职位${i}`, avatar: require('@/assets/img/organization/avatar-policeman.png') })
  }
  return data
}


const leaders = []
const staff = []

organizations.forEach(parent => {
  leaders.push({
    nodeId: parent.nodeId,
    parentId: 'none',
    leaderItems: [...leaderItems(parent.name)]
  })
  parent.childNode.map(child => {
    staff.push({
      nodeId: child.nodeId,
      parentId: parent.nodeId,
      leaderItems: [...leaderItems(child.name)],
      staffItems: [`${child.name}人员1`, `${child.name}人员2`, `${child.name}人员3`, `${child.name}人员4`, `${child.name}人员5`, `${child.name}人员6`, `${child.name}人员7`]
    })
  })
})

export { leaders, staff }