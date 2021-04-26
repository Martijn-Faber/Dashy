import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Signin from "../views/Signin.vue"
import Afspraak from "../views/Afspraak.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/vandaag",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/afspraak/:id",
    name: "afspraak",
    component: Afspraak
  },
  {
    path: "/login",
    name: "signin",
    component: Signin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
