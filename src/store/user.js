import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    username: "",
    user: undefined,
  }),
  actions: {
    /**
     * Store all the information about the user which got returned from anilist.co.
     *
     * @param { Object } user - The user returned from anilist.co.
     */
    setUser(user) {
      this.user = user;
    },

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
