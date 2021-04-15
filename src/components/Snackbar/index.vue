<template>
  <v-snackbar
    v-model="show"
    :top="type === 'top'"
    :bottom="type === 'bottom'"
    :right="type === 'right'"
    :left="type === 'left'"
    :color="color"
    timeout="-1"
  >
    <v-icon color="white" v-if="color === 'success'">check_circle</v-icon>
    <v-icon color="white" v-if="color === 'info'">info</v-icon>
    <v-icon color="white" v-if="color === 'warning'">warning</v-icon>
    <v-icon color="white" v-if="color === 'error'">error</v-icon>
    <span class="ml-5">{{ message }}</span>
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text @click.native="handleClose" v-bind="attrs">
        <v-icon>close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, required: true },
    type: { type: String, required: false, default: "top" },
    color: { type: String, required: false, default: "success" },
    message: { type: String, required: false, default: "" },
  },
  methods: {
    handleClose() {
      this.$emit("handleClose", false);
    },
  },
};
</script>
