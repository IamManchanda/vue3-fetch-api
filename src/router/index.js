import { createRouter, createWebHistory } from "vue-router";
import PageIndex from "../views/index.vue";

const routes = [
  {
    path: "/",
    name: "PageIndex",
    component: PageIndex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
