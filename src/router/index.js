import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty',
    },
    // eslint-disable-next-line
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/Categories.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
