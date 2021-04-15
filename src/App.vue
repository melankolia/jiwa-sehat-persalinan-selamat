<template>
  <v-app>
    <v-expand-transition>
      <Appbar v-if="isDashboard" />
    </v-expand-transition>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
const Appbar = () => import("@/components/Appbar");
import { DASHBOARD } from "@/router/name.types";

export default {
  components: {
    Appbar,
  },
  data() {
    return {
      transitionName: "",
      currentRoute: null,
    };
  },
  computed: {
    isDashboard() {
      return (
        this.currentRoute == DASHBOARD.ROOT ||
        this.currentRoute == DASHBOARD.DETAIL
      );
    },
  },
  watch: {
    $route(to, from) {
      this.currentRoute = to.meta.title;
      if (to.meta.stack > from.meta.stack) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style lang="scss">
v-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// Slide Right and Slide Left
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 750ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
