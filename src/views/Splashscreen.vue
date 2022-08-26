<template>
  <main class="flex items-center justify-center w-screen h-screen">
    <section class="w-1/3 bg-gray-800 rounded-xl shadow-xl p-8 space-y-8">
      <div class="space-y-2">
        <h1 class="text-2xl text-sky-200 font-semibold text-center">
          Select your User
        </h1>
        <p class="text-sm text-white font-semibold text-center">
          Enter your username (or any for that matter) and browse through my
          clone of Anilist.co. It's created with Vue 3 and TailwindCSS.
        </p>
      </div>

      <form class="flex" @submit.prevent="storeUser">
        <input
          v-model="username"
          type="text"
          placeholder="awusuwah"
          :class="inputClasses"
        />
        <button type="submit" :class="buttonClasses">Be a Weeb!</button>
      </form>
    </section>
  </main>
</template>

<script>
import { useUserStore } from "../store/user.js";

export default {
  name: "SplashscreenView",
  data() {
    return {
      username: "",
    };
  },
  computed: {
    /**
     * The classes which are applied to the button.
     */
    buttonClasses() {
      return {
        "min-w-fit px-4 bg-sky-800 rounded-r transition-all": true,
        "hover:bg-sky-900": true,
      };
    },

    /**
     * The classes which are applied to the input element.
     */
    inputClasses() {
      return {
        "w-full px-4 py-3 bg-gray-900 rounded-l": true,
        "focus:outline-none": true,
      };
    },
  },
  methods: {
    /**
     * Store the user in the applications store. This is the user that will be used for all the
     * data fetching done in the application.
     */
    storeUser() {
      useUserStore().setUsername(this.username);

      // Redirect to the users profile page
      this.$router.push({ name: "profile" });
    },
  },
};
</script>
