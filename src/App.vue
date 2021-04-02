<template>
  <v-app>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </v-app>
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
v-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
