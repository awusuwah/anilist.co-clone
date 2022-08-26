import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
  }),
  actions: {
    /**
     * Set the username for the user whose data will be fetched from anilist.co.
     *
     * @param { string } username - The username of the user whose data should be fetched.
     */
    setUsername(username) {
      this.username = username;
    },
  },
});
