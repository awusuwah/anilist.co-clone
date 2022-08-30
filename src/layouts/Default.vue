<template>
  <div>
    <Header />
    <Banner />
    <Navigation />

    <main class="container mx-auto my-6">
      <slot />
    </main>
  </div>
</template>

<script>
import Banner from "@/components/banner/Banner.vue";
import Header from "@/components/header/Header.vue";
import Navigation from "@/components/navigation/Navigation.vue";

import { useUserStore } from "@/store/user.js";
import { userQuery } from "@/queries/user.js";

export default {
  name: "DefaultLayout",
  components: {
    Banner,
    Header,
    Navigation,
  },
  async beforeMount() {
    const USERNAME = "awusuwah";
    const userData = useUserStore().user;

    if (!userData) {
      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userQuery(USERNAME),
        }),
      });

      const data = await response.json();
      useUserStore().setUser(data.data.User);
      useUserStore().setUsername(USERNAME);
    }
  },
};
</script>
