import Modal from './src/index.vue'

Modal.install = (Vue) => {
  Vue.component(Modal.name, Modal)
}
export default Modal