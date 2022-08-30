<template>
  <Layout>
    <div class="grid-profile">
      <div class="space-y-6">
        <ActivityHistory />
        <GenreOverview />
        <Showcase title="Anime" :items="favoriteAnime" />
        <Showcase title="Characters" :items="favoriteCharacters" />
      </div>
      <div></div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";
import ActivityHistory from "@/components/activityHistory/ActivityHistory.vue";
import GenreOverview from "@/components/genreOverview/GenreOverview.vue";
import Showcase from "@/components/showcase/Showcase.vue";

import { useUserStore } from "@/store/user.js";

export default {
  name: "ProfileView",
  components: {
    Layout,
    ActivityHistory,
    GenreOverview,
    Showcase,
  },
  computed: {
    /**
     * Prepare the users favorite anime for the showcase.
     */
    favoriteAnime() {
      const anime = useUserStore().user?.favourites?.anime?.nodes || [];

      return anime.map((a) => {
        return {
          id: a.id,
          image: a.coverImage.large,
          title: a.title.userPreferred,
        };
      });
    },

    /**
     * Prepare the users favorite characters for the showcase.
     */
    favoriteCharacters() {
      const characters = useUserStore().user?.favourites?.characters?.nodes || [];

      return characters.map((c) => {
        return {
          id: c.id,
          image: c.image.large,
          title: c.name.userPreferred,
        };
      });
    },
  },
};
</script>

<style scoped>
.grid-profile {
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: calc(45% - 40px) 55%;
}
</style>
