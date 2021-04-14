import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import "@/assets/stylesheets/index.css";

// Prototyping
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

// Vue Mixin
import "./mixins";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
