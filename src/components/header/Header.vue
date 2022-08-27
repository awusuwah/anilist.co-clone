<template>
  <header :class="headerClasses">
    <div class="container mx-auto h-16 flex items-center gap-6">
      <!-- Anilist Logo -->
      <img src="https://anilist.co/img/icons/icon.svg" class="h-12" />

      <!-- Main Navigation -->
      <nav class="flex flex-1 justify-center gap-7">
        <router-link to="/home" :class="navigationItemClasses">Home</router-link>
        <router-link to="/profile" :class="navigationItemClasses">Profile</router-link>
        <router-link to="/anime-list" :class="navigationItemClasses">Anime List</router-link>
        <router-link to="/manga-list" :class="navigationItemClasses">Manga List</router-link>
        <router-link to="/browse" :class="navigationItemClasses">Browse</router-link>
        <router-link to="/forum" :class="navigationItemClasses">Forum</router-link>
      </nav>

      <!-- Search & User Profile -->
      <section class="flex flex-row items-center gap-6">
        <Tooltip>
          Search

          <template #activator>
            <Icon icon="search" class="w-4 h-4 cursor-pointer" />
          </template>
        </Tooltip>

        <div class="flex flex-row items-center gap-2 cursor-pointer">
          <img :src="avatar" class="h-10 rounded-sm" />
          <Icon icon="chevron-down" class="w-3 h-3" />
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import { useUserStore } from "@/store/user.js";

import Icon from "@/components/icon/Icon.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";

export default {
  name: "Header",
  components: {
    Icon,
    Tooltip,
  },
  computed: {
    /**
     * The user's avatar image.
     */
    avatar() {
      return useUserStore().user?.avatar?.medium;
    },

    /**
     * The classes which are applied to the header.
     */
    headerClasses() {
      return {
        "absolute top-0 w-full h-16 bg-gray-900 z-20 opacity-70 select-none": true,
        "transition-all duration-500": true,
        "hover:opacity-100": true,
      };
    },

    /**
     * The classes which are applied to the navigation items.
     */
    navigationItemClasses() {
      return {
        "text-gray-300 text-sm font-semibold transition-all": true,
        "hover:text-white": true,
      };
    },
  },
};
</script>
