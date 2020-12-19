import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/Home.vue'),
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
    path: '/register',
    name: 'register',
    meta: {
      layout: 'empty',
    },
    // eslint-disable-next-line
    component: () => import('../views/Register.vue'),
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
  {
    path: '/detail-record',
    name: 'detail-record',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/DetailRecord.vue'),
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/History.vue'),
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/Planning.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/record',
    name: 'record',
    meta: {
      layout: 'main',
    },
    // eslint-disable-next-line
    component: () => import('../views/Record.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
