import { createRouter, createWebHashHistory } from "vue-router";

import HomeRouter from "./homeWork/index";

const baseRoutes: any = [
  {
    path: "/",
    name: "LayOut",
    component: () => import("@/view/layout/index.vue")
  }
];
console.log(baseRoutes, "lll");
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...baseRoutes, ...HomeRouter]
});

export default router;
