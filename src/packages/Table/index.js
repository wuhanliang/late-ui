import Table from './src/index.vue'

Table.install = (Vue) => {
  Vue.component("L" + Table.name, Table)
}
Table.title = "表格"

export default Table