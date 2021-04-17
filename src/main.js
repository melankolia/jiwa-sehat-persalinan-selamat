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

// Vuex
import { LOGOUT } from "@/store/constants/actions.type";
import { HOME } from "@/router/name.types";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      store.dispatch(LOGOUT).then(() => next({ name: HOME }));
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
