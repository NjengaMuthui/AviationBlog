import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faBarsStaggered,
  faXmark,
  faChevronRight,
  faCartPlus,
  faPlus,
  faMinus,
  faChevronLeft,
  faHeart,
  faShare,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faMagnifyingGlass,
  faBarsStaggered,
  faXmark,
  faChevronRight,
  faComments,
  faCartPlus,
  faPlus,
  faMinus,
  faChevronLeft,
  faHeart,
  faShare,
  faCartShopping
);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
