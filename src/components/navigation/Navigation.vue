<template>
  <section class="bg-foreground h-12">
    <nav class="container mx-auto h-12 flex items-center justify-center gap-12">
      <router-link to="/profile" :class="navigationItemClasses">Overview</router-link>
      <router-link to="/anime-list" :class="navigationItemClasses">Anime List</router-link>
      <router-link to="/manga-list" :class="navigationItemClasses">Manga List</router-link>
      <router-link to="/favorites" :class="navigationItemClasses">Favorites</router-link>
      <router-link to="/stats" :class="navigationItemClasses">Stats</router-link>
      <router-link to="/social" :class="navigationItemClasses">Social</router-link>
      <router-link to="/reviews" :class="navigationItemClasses">Reviews</router-link>
      <router-link to="/submissions" :class="navigationItemClasses">Submissions</router-link>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    /**
     * The classes which are applied to the navigation items.
     */
    navigationItemClasses() {
      return {
        "text-gray-400 text-sm font-semibold transition-all": true,
        "hover:text-purple-400": true,
      };
    },
  },
};
</script>
