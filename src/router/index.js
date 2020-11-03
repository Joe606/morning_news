import Vue from "vue";
import VueRouter from "vue-router";
import First from "../components/first.vue";
import Second from "../components/second.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/first",
    name: "First",
    component: First
  },
  {
    path: "/second",
    name: "Second",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Second
  }
];

const router = new VueRouter({
  mode: "hash",
  routes: routes
});

export default router;
