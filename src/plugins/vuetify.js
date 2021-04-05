import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#fa7172",
        secondary: "#1880ec",
        info: "#2196F3",
        primary2: "#0451A4",
        secondary2: "#424242",
        accent: "#EA8E1C",
        error: "#FF5252",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
    primary: "#fa7172",
    secondary: "#1880ec",
  },
  icons: {
    iconfont: "md",
  },
});
