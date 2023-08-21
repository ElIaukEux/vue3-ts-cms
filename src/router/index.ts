import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCatch from '@/utils/catch'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        name: 'system',
        path: '/system',
        component: () => import('@/views/main/system/user/index.vue'),
        children: [
          {
            name: 'User',
            path: 'user',
            component: () => import('@/views/main/system/user/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/notFount/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  console.log(to, '这是啥-----909')

  if (to.path !== '/login') {
    const token = localCatch.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
