import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import "./assets/lightbox.min.css";
// import "./assets/lightbox-plus-jquery.min.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
