import Vue from "vue";

// Global Mixin's
Vue.mixin({
  methods: {
    debounce(callback) {
      clearTimeout(this._timerId);
      this._timerId = setTimeout(() => {
        callback();
      }, 500);
    },
  },
});
