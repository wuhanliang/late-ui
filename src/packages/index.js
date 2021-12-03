import { version } from './../../package.json'
import Table from './Table/index.js'
import Modal from './Modal/index.js'
const components = {
  Table,
  Modal
}

const install = (Vue) => {
  // 判断是否安装
  if(install.installed) return
  Object.values(components).map(component => Vue.component(component.name, component))
}

// 判断是否直接引入
if(typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}
export {
  Table, 
  Modal
}


export default {
  version,
  install
}