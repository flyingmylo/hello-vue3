import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../App.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("../components/home.vue"),
      },
      {
        path: "/bar",
        component: () => import("../components/charts/barChart.vue"),
      },
      {
        path: "/todo",
        component: () => import("../components/todo.vue"),
      },
      {
        path: "/clamp",
        component: () => import("../components/clamp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
