import { createApp } from "vue";
import App from "./App.vue";

// navigation router handler
import router from "./router";

// request handler
import { createPinia } from 'pinia';
const pinia = createPinia();

// Font Awesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Solid icons

// Add the solid icons to the library
library.add(fas);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon) // Register FontAwesomeIcon globally
  .use(router)
  .use(pinia)
  .mount("#app");
