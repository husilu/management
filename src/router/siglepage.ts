import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [ 
  {
    path: '/table',
    name: 'table',
    component: () => import ( /* webpackChunkName: "dashboard" */ "@/views/table/index.vue")
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import ( /* webpackChunkName: "dashboard" */ "@/views/tab/index.vue")
  }
]

export default routes