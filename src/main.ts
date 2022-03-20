import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/reset.css'
import * as EleIcon from '@element-plus/icons-vue'
import { store, key } from './store'


createApp(App).use(store, key).use(router).use(ElementPlus)
.component('DArrowRight', EleIcon.DArrowRight)
.component('Avatar', EleIcon.Avatar)
.mount('#app')
