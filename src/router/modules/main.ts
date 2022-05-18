import type { RouteRecordRaw } from "vue-router";

export const LoginRoute: RouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/SysLogin.vue"),
  meta: {
    title: "登录",
  },
};
