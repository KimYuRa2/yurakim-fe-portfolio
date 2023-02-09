import { createApp } from "vue";
import App from "./App.vue";
import globals from './assets/js/global' //global
import router from "./router/index.js";

const app = createApp(App);
app.use(globals).use(router).mount("#app");
