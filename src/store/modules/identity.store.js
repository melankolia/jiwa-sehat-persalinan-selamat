import { initialIdentityState } from "../state/index";
import { RESET_IDENTIY } from "../constants/mutations.type";

const state = {
  identity: initialIdentityState(),
};

const getters = {};

const mutations = {
  [RESET_IDENTIY](state) {
    Object.assign(state.identity, initialIdentityState());
  },
};

export default {
  state,
  getters,
  mutations,
};
