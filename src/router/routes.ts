import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/favoritos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Favorite/IndexPage.vue') }],
  },
  {
    path: '/categorias',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Category/IndexPage.vue') }],
  },
  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Subject/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
