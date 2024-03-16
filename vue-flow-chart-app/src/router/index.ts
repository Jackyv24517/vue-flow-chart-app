// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import CanvasPage from '../views/CanvasPage.vue';

const routes = [
  { path: '/', redirect: '/canvas' },
  { path: '/canvas', name:'Canvas', component: CanvasPage },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
