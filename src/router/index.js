import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../screens/Settings.vue';


const routes = [
  {
    path: '/',
    name: 'NewRecord',
    component: () => import('../screens/NewRecord.vue')
  },
  {
    path: '/newrecord',
    name: 'NewRecord',
    component: () => import('../screens/NewRecord.vue')
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('../screens/Doctors.vue')
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: () => import('../screens/Facilities.vue')
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../screens/Payments.vue')
  },
  {
    path: '/detailed_payments/',
    name: 'Payment_Details',
    component: () => import('../screens/PaymentDetails.vue')
  },
  {
    path: '/print/',
    name: 'print',
    component: () => import('../screens/Print.vue')
  },
  {
    path: '/your_profile/',
    name: 'Your_Profile',
    component: () => import('../screens/YourProfile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
