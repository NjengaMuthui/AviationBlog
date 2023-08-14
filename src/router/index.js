import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/blog",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BlogView.vue")
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue")
    },
    {
      path: "/product/:position/:product_name",
      name: "product",
      props: true,
      component: () => import("../views/ShopDetailsView.vue")
    }
  ]
});

export default router;
