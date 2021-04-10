<template>
  <div class="d-flex flex-column super-container">
    <v-main>
      <v-container fluid class="pa-0">
        <v-expand-transition>
          <Headers :text="currentHeadRoute" v-if="!isHomepage && !isQuestion" />
        </v-expand-transition>
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
const Headers = () => import("@/components/Headers");
import { HOME, PRETEST, SCREENING, POSTTEST } from "@/router/name.types";

export default {
  components: {
    Headers,
  },
  data() {
    return {
      transitionName: "",
      currentHeadRoute: this.$router?.currentRoute?.meta.text,
      currentRoute: this.$router?.currentRoute?.name,
    };
  },
  computed: {
    isHomepage() {
      return this.currentRoute == HOME;
    },
    isQuestion() {
      return (
        this.currentRoute == PRETEST ||
        this.currentRoute == SCREENING ||
        this.currentRoute == POSTTEST
      );
    },
  },
  watch: {
    $route(to, from) {
      this.currentHeadRoute = to.meta.text;
      this.currentRoute = to.name;
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
.super-container {
  height: 100vh;
}
</style>
