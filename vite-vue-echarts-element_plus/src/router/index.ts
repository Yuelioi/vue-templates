import { createWebHistory, createRouter } from "vue-router";
import index from "../views/index/index.Vue"
import other from "../views/other/index.Vue"

const routes = [
  {
    path:'/index',
    name:'index',
    component:index
  },

  {
    path:'/other',
    name:'other',
    component:other
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;