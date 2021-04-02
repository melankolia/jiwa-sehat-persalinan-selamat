<template>
  <div>
    <v-main>
      <v-container fluid class="pa-0">
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
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
  transition: all 500ms;
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
