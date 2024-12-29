// filepath: /home/emmaahmads/workspace/portfolio/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ProjectOne from '../components/ProjectOne.vue';
import ProjectTwo from '../components/ProjectTwo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/project1',
    name: 'Project1',
    component: ProjectOne
  },
  {
    path: '/project2',
    name: 'Project2',
    component: ProjectTwo
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;