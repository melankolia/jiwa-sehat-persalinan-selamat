import { SET_AUTHENTICATED, SET_LOADING } from "../constants/mutations.type";

const state = {
  authenticated: false,
  loading: false,
};

const getters = {
  isAuthenticated(state) {
    return state.authenticated;
  },
  loading(state) {
    return state.loading;
  },
};

const mutations = {
  [SET_AUTHENTICATED](state, payload) {
    state.authenticated = payload;
  },
  [SET_LOADING](state, payload) {
    state.loading = payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
