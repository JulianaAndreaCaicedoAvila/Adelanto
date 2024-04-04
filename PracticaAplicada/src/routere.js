import { createRouter, createWebHistory } from 'vue-router';
import Login from './Login.vue';
import TareasDocente from './TareasDocente.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/TareasDocente', component: TareasDocente }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
