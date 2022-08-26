import { createApp } from "vue";

import App from "./App.vue";
import router from "./utils/router.js";

import "./styles/global.css";

createApp(App).use(router).mount("#app");
