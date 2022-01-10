import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from '@/views/HomeMain.vue'
import ParrentComp1 from '@/components/ParrentComp1'
import ParrentComp2 from '@/components/ParrentComp2'
import ParrentComp3 from '@/components/ParrentComp3'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeMain
  },
  {
    path: '/p1',
    name: 'p1',
    component: ParrentComp1
  },
  {
    path: '/p2',
    name: 'p2',
    component: ParrentComp2
  },
  {
    path: '/p3',
    name: 'p3',
    component: ParrentComp3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
