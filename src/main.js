import { createApp } from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

const app = createApp(App);

AOS.init(); // Initialize AOS

app.mount("#app");
