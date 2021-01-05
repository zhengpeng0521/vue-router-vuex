import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import Error from "../pages/error/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/error",
    component: Error
  },
  {
    path: "*",
    redirect: "/error"
  }
];

const router = new VueRouter({
  routes
});

export default router;