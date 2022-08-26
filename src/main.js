import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./utils/router.js";

import "./styles/global.css";

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
