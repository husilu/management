import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '@/components/layout/index.vue'
import siglePage from './siglepage';
import form from './form';
import { getItem } from '@/utils/storage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: layout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
            title: '系统首页'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue")
      },
      ...siglePage,
      ...form
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'login') {
    next()
  }
  else {
    if (getItem('user')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  }
})

export default router
