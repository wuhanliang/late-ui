import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Doc = () => import('@/views/Doc/Doc.vue')
const Component = () => import('@/views/Component/Component.vue')
export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: '首页',
    component: Home
  },
  {
    path: '/docs',
    name: 'Doc',
    meta: '文档',
    component: Doc
  },
  {
    path: '/component',
    name: 'Comment',
    meta: '组件',
    component: Component
  }
]


export default createRouter({
  history: createWebHistory(),
  routes
})