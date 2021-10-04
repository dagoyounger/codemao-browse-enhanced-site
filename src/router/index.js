import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Download from '../views/Download.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/doc',
    name: 'Doc',
    component: Doc,
    meta: {
      title: '帮助文档',
    },
  },
  {
    path: '/download',
    name: 'Download',
    component: Download,
    meta: {
      title: '下载',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
