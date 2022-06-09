const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/view/layout/index.vue"),
    meta: {
      title: "首页",
      icon: "HomeFilled"
    },
    children: [
      {
        path: "/home/dashbord",
        name: "dashbord",
        component: () => import("@/view/home/index.vue"),
        meta: {
          title: "首页",
          icon: "HomeFilled"
        }
      }
    ]
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("@/view/layout/index.vue"),
    meta: {
      title: "组件",
      icon: "Coin"
    },
    children: [
      {
        path: "/components/list",
        name: "List",
        component: () => import("@/view/component/list/index.vue"),
        meta: {
          title: "列表",
          icon: "List"
        }
      }
    ]
  }
];

export default routes;
