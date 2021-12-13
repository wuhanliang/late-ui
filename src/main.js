import { createApp } from 'vue'
import App from './views/App.vue'
import Router from './routes'
import Late from '@whl114/late-ui'
createApp(App).use(Late).use(Router).mount('#app')