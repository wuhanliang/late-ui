import Modal from './src/index.vue'

Modal.install = (Vue) => {
  Vue.component('LModal', Modal)
}
export default Modal