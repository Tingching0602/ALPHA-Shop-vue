import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/account/'
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    // redirect: '/account/address',
    // children: [
    //   {
    //     path: 'address',
    //     name: 'Address',
    //     component: () => import('../components/AddressForm.vue')
    //   },
    //   {
    //     path: 'delivery',
    //     name: 'Delivery',
    //     component: () => import('../components/DeliveryForm.vue')
    //   },
    //   {
    //     path: 'payment',
    //     name: 'Payment',
    //     component: () => import('../components/PaymentForm.vue')
    //   },
    // ]
  },

  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router