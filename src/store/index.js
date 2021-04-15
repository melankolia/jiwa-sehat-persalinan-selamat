import Vue from "vue";
import Vuex from "vuex";
import Kuisioner from "./modules/kuisioner.store";
import Identity from "./modules/identity.store";
import Auth from "./modules/auth.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Kuisioner,
    Identity,
  },
});
