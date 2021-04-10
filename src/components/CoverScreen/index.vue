<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <div>
      <img class="floral pb-10" src="../../assets/floral.jpg" alt="floral" />
    </div>
    <div
      class="d-flex flex-grow-1 flex-column justify-space-between px-10 pb-10"
    >
      <div>
        <p class="text-h4 font-weight-bold pink--text text--accent-1">
          {{ title }}
        </p>
        <p class="text-body-2 text-justify" v-html="description"></p>
      </div>
      <v-btn
        @click="handleNext"
        class="px-10 py-6 pink accent-1"
        outlined
        rounded
        :loading="formLoading"
        dark
      >
        <span class="white--text button font-weight-bold">
          {{ titleButton }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { types: String, required: true, default: "Title" },
    description: { types: String, required: true, default: "Description" },
    handleNext: { types: Function, required: true, default: () => {} },
    titleButton: { types: String, required: true, default: "Isi" },
    formLoading: { types: Boolean, required: true, default: false },
  },
};
</script>

<style scoped>
.floral {
  width: 100%;
  filter: hue-rotate(321deg);
}
</style>
