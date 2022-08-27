<template>
  <section class="banner flex items-end" :style="`background-image: url(${bannerImage})`">
    <!-- Banner Shadow -->
    <div class="banner-shadow"></div>

    <!-- Banner Content -->
    <div class="container mx-auto flex flex-row z-10">
      <img :src="avatar" class="h-40 rounded-t-md" />
    </div>
  </section>
</template>

<script>
import { useUserStore } from "@/store/user.js";

export default {
  name: "Banner",
  computed: {
    /**
     * The avatar image to display.
     */
    avatar() {
      return useUserStore().user?.avatar?.large;
    },

    /**
     * The banner image to display.
     */
    bannerImage() {
      return useUserStore().user?.bannerImage;
    },
  },
};
</script>

<style scoped>
.banner {
  background-color: #111827;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  height: 330px;
}

.banner-shadow {
  background: linear-gradient(181deg, rgba(6, 13, 34, 0) 40%, rgba(6, 13, 34, 0.6));

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}
</style>
