import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import EmptyLayout from "@/layout/empty.vue";

Vue.use(VueRouter);

import base from "@/router/modules/base";
import dashboard from "@/router/modules/dashboard";
import users from "@/router/modules/users";
const routes = [
  {
    path: "/",
    name: "Login",
    component: EmptyLayout,
    children: [
      {
        path: "",
        name: "",
        component: Login,
      },
    ],
  },
  base,
  dashboard,
  users,
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
