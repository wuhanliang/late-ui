import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './../views/Home.vue'
const routes = [
  {
    path: '/',
    components: {
      default: Home,
    }
  }
]


export default createRouter({
  history: createMemoryHistory(),
  routes
})