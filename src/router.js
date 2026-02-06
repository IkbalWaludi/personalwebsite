// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Utama from './Layout/Utama.vue'
import Beranda from './Menu/Beranda.vue'
import Projects from './Menu/Projects.vue'
import Contact from './Menu/Contact.vue'
import Portfolio from './Menu/Portfolio.vue'

const routes = [
    {
        path: "/",
        name: "Utama",
        component: Utama,
        redirect: "/beranda",
        children: [
          {
            path: "beranda",
            name: "Beranda",
            component: Beranda,
          },
          {
            path: "projects",
            name: "Projects",
            component: Projects,
          },
          {
            path: "portfolio",
            name: "Portfolio",
            component: Portfolio,
          },
          {
            path: "contact",
            name: "Contact",
            component: Contact,
          },
        ],
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router