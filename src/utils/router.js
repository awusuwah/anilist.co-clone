import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home.vue";
import ProfileView from "../views/Profile.vue";

/**
 * Create the router with all the available routes for the application.
 */
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});