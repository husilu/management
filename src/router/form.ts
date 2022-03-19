import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [ 
  {
    path: '/upload',
    name: 'upload',
    component: () => import ( /* webpackChunkName: "dashboard" */ "@/views/form/upload.vue")
  },
  {
    path: '/form',
    name: 'form',
    component: () => import ( /* webpackChunkName: "dashboard" */ "@/views/tab/index.vue")
  }
]

export default routes