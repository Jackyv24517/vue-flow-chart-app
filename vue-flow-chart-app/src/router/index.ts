// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import FlowChartPage from '../views/FlowChartPage.vue';

const routes = [
  { path: '/', redirect: '/flow-chart' },
  { path: '/flow-chart', name:'FlowChart', component: FlowChartPage },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
