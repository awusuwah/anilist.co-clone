<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { useUserStore } from "../store/user.js";
import { userQuery } from "../queries/user.js";

export default {
  name: "DefaultLayout",
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
