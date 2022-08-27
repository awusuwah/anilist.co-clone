import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/Home.vue";
import ProfileView from "@/views/Profile.vue";
import SplashscreenView from "@/views/Splashscreen.vue";

/**
 * Create the router with all the available routes for the application.
 */
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "splashscreen",
      component: SplashscreenView,
    },
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
