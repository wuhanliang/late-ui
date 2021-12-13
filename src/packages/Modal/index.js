import Modal from './src/index.vue'

Modal.install = (Vue) => {
  Vue.component('LModal', Modal)
}
Modal.title = "模态框Modal"
export default Modal