import Vue from 'vue'

// router
import VueRouter from 'vue-router'



import Home from '@/views/HelloWorld.vue'
import Testing from '@/views/Testing.vue'
import Exercise from '@/views/Exercise.vue'
import Detail from '@/views/Detail.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'
import OrderList from '@/views/OrderList.vue'

Vue.use(VueRouter)


let router = new VueRouter({
  routes: [
    { path: '/',
      component: Home 
    },
    { path: '/testing',
      component: Testing 
    },
    { path: '/exercise',
      component: Exercise 
    },
    { path: '/detail/:id',
      name: 'detail',
      component: Detail 
    },
     { path: '/cart',
      name: 'cart',
      component: ShoppingCart 
    },
    {
    path:'/orders',
    name:'order',
    component:OrderList
  }
  ],
  mode: 'history'//abstract
});

export default router