import { createRouter, createWebHistory } from "vue-router";

import SplashscreenView from "@/views/Splashscreen.vue";
import HomeView from "@/views/Home.vue";
import ProfileView from "@/views/Profile.vue";
import AnimeListView from "@/views/AnimeList.vue";
import MangaListView from "@/views/MangaList.vue";

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
    {
      path: "/anime-list",
      name: "anime-list",
      component: AnimeListView,
    },
    {
      path: "/manga-list",
      name: "manga-list",
      component: MangaListView,
    },
  ],
});
