<template>
  <div
    class="pink accent-1 flex-grow-1 d-flex flex-column justify-space-between"
    style="height: 22vh"
  >
    <Logo :isBorder="true" top="0.1" />
    <div class="d-flex flex-row">
      <v-btn icon text dark class="ma-4" @click="$router.back()">
        <v-icon dark> arrow_back_ios_new </v-icon>
      </v-btn>
    </div>
    <p class="headline white--text font-weight-medium px-10">
      {{ text }}
    </p>
  </div>
</template>

<script>
const Logo = () => import("@/components/Logo");

export default {
  props: {
    text: { types: String, required: true, default: "" },
  },
  components: {
    Logo,
  },
};
</script>

<style></style>
