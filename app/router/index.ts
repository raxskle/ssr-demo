import {
  createRouter as createVueRouter,
  createMemoryHistory,
  createWebHistory,
  Router,
  RouterHistory,
} from "vue-router";

export const createClientRouter = (): Router => {
  return createRouter(createWebHistory());
};

export const createServerRouter = (): Router => {
  return createRouter(createMemoryHistory());
};

const createRouter = (type: RouterHistory): Router =>
  createVueRouter({
    history: type,

    routes: [
      {
        path: "/",
        name: "index",
        meta: {
          title: "首页",
          keepAlive: true,
        },
        component: () => import("../pages/index/index.vue"),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "用户中心",
          keepAlive: true,
        },
        component: () => import("../pages/user/user.vue"),
      },
    ],
  });
