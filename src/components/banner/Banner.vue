<template>
  <section class="banner flex items-end" :style="`background-image: url(${user.bannerImage})`">
    <!-- Banner Shadow -->
    <div class="banner-shadow"></div>

    <!-- Banner Content -->
    <div class="container mx-auto flex flex-row z-10">
      <img :src="user.avatar" class="h-40 rounded-t-md" />
      <h1 class="self-end m-6 text-xl text-gray-200 font-bold">{{ user.username }}</h1>

      <div v-if="user.donatorBadge" class="flex flex-1 justify-end self-end">
        <div class="mb-4 px-3 py-2 rounded-sm bg-purple-400 text-sm text-gray-200 font-semibold select-none">
          {{ user.donatorBadge }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserStore } from "@/store/user.js";

export default {
  name: "Banner",
  computed: {
    /**
     * The user whose data is displayed.
     */
    user() {
      return {
        avatar: useUserStore().user?.avatar?.large,
        bannerImage: useUserStore().user?.bannerImage,
        donatorBadge: useUserStore().user?.donatorBadge,
        username: useUserStore().user?.name,
      };
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
