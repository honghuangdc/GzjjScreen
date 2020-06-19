import Vue from 'vue'

function useAntdVue(component) {
  component.map(value => {
    Vue.component(value.name, value)
  })
}

function starsMoveProps(nums) {
  const pi = Math.PI;
  const arr = []
  for(let i = 0; i < nums; i ++) {
    arr.push({
      id: `starId${i}`,
      angle: 2 * pi / nums * i,
      x: 600 * Math.cos(2 * pi / nums * i) + 600,
      y: 300 * Math.sin(2 * pi / nums * i) + 300
    })
  }
  return arr
}
export { useAntdVue, starsMoveProps }