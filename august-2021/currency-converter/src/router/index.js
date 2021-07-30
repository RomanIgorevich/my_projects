import { createRouter, createWebHistory } from "vue-router";
import v1 from "../components/v-1";
import v2 from "../components/v-2";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: v1,
    },
    {
      path: "/v2",
      component: v2,
    },
  ],
});

export default router;
