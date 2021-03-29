import Vue from "vue";
import Vuex from "vuex";
import Kuisioner from "./modules/kuisioner.store";
import Identity from "./modules/identity.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Kuisioner,
    Identity,
  },
});
