import { createRouter, createWebHistory } from "vue-router";
import LayoutApp from "@/layouts/app/layout-app.vue";
import PageHome from "@/views/home/page-home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutApp,
      children: [
        {
          path: "/",
          name: "pageHome",
          component: PageHome,
        },
      ],
    },
  ],
});

export default router;
