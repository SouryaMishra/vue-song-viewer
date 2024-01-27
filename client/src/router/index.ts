import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import SongsView from '../views/SongsView.vue'
import SongsCreateView from '../views/SongsCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/songs',
      name: 'songs',
      component: SongsView
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: SongsCreateView
    }
  ]
})

export default router
