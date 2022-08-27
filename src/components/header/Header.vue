<template>
  <header :class="headerClasses">
    <div class="container mx-auto h-16 flex items-center gap-6">
      <!-- Anilist Logo -->
      <img src="https://anilist.co/img/icons/icon.svg" class="h-12" />

      <!-- Main Navigation -->
      <nav class="flex flex-1 justify-center gap-6">
        <router-link to="/" :class="navigationItemClasses">Home</router-link>
        <router-link to="/profile" :class="navigationItemClasses">Profile</router-link>
        <router-link to="/anime-list" :class="navigationItemClasses">Anime List</router-link>
        <router-link to="/manga-list" :class="navigationItemClasses">Manga List</router-link>
        <router-link to="/browse" :class="navigationItemClasses">Browse</router-link>
        <router-link to="/forum" :class="navigationItemClasses">Forum</router-link>
      </nav>

      <!-- Search & User Profile -->
      <section>
        <div class="flex flex-row items-center"></div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    /**
     * The classes which are applied to the header.
     */
    headerClasses() {
      return {
        "h-16 bg-gray-900 select-none": true,
        "transition-all duration-500": true,
      };
    },

    /**
     * The classes which are applied to the navigation items.
     */
    navigationItemClasses() {
      return {};
    },
  },
};
</script>
