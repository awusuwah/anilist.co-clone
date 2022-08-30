<template>
  <section>
    <h2 class="ml-3 mb-2 text-sm text-gray-400 font-bold">Genre Overview</h2>

    <div class="bg-foreground rounded-md pt-4">
      <!-- Main genres -->
      <div class="flex flex-row justify-around px-4 pb-4">
        <div v-for="genre in mainGenres" :key="genre.id" class="flex flex-col space-y-1 text-center">
          <span class="px-3 py-0.5 rounded-sm" :style="{ backgroundColor: genre.color }">{{ genre.name }}</span>
          <span class="text-sm" :style="{ color: genre.color }">
            {{ genre.entries }}
            <span class="text-gray-400 text-xs">Entries</span>
          </span>
        </div>
      </div>

      <!-- Sub genres -->
      <div class="flex flex-row">
        <div
          v-for="genre in subGenres"
          :key="genre.id"
          class="flex-1 h-3"
          :style="{ backgroundColor: genre.color }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserStore } from "@/store/user.js";

import Tooltip from "@/components/tooltip/Tooltip.vue";

export default {
  name: "GenreOverview",
  components: {
    Tooltip,
  },
  computed: {
    /**
     * Prepare the users main genres for the showcase.
     */
    mainGenres() {
      const genres = useUserStore().user?.statistics?.anime?.genres || [];
      const mainGenres = genres.slice(0, 4);

      return mainGenres.map((genre) => ({
        id: genre.genre.toLowerCase(),
        name: genre.genre,
        entries: genre.count,
        color: this.genreColor(genre.genre.toLowerCase()),
      }));
    },

    /**
     * Prepare the users sub genres for the showcase.
     */
    subGenres() {
      const genres = useUserStore().user?.statistics?.anime?.genres || [];

      return genres.map((genre) => ({
        id: genre.genre.toLowerCase(),
        name: genre.genre,
        color: this.genreColor(genre.genre.toLowerCase()),
      }));
    },
  },
  methods: {
    /**
     * Calculate the color for the genre.
     *
     * @param { string } genreId - The unique identifier for the genre.
     */
    genreColor(genreId) {
      switch (genreId) {
        case "drama":
          return "#68d639";

        case "romance":
          return "#02a9ff";

        case "fantasy":
          return "#9256f3";

        case "comedy":
          return "#f779a4";

        case "action":
          return "#e85d75";

        case "slice of life":
          return "#f79a63";

        default:
          return "#000000";
      }
    },
  },
};
</script>
