import { SET_AUTHENTICATED, SET_LOADING } from "../constants/mutations.type";
import { LOGIN, LOGOUT } from "../constants/actions.type";
import DashboardService from "@/services/resources/dashboard.service";

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

const actions = {
  [LOGIN](context, payload) {
    context.commit(SET_LOADING, true);
    return new Promise((resolve, reject) => {
      DashboardService.login(payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            context.commit(SET_AUTHENTICATED, true);
            resolve(result);
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => context.commit(SET_LOADING, false));
    });
  },
  [LOGOUT](context) {
    context.commit(SET_AUTHENTICATED, false);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
