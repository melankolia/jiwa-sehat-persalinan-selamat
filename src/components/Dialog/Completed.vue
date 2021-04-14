<template>
  <v-dialog
    v-model="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    :persistent="persistent"
  >
    <v-card tile color="pink accent-1" style="padding-top: 120px !important">
      <FloatingBackButton
        top
        left
        text
        color="white"
        :onClick="onClose"
        icon="close"
      />
      <v-card-actions class="mb-15 pt-15">
        <v-spacer />
        <v-icon size="150" color="white">check_circle</v-icon>
        <v-spacer />
      </v-card-actions>
      <v-card-text class="px-15">
        <p class="text-h5 white--text font-weight-bold mb-10 text-center">
          {{ title }}
        </p>
        <p class="subtitle-2 white--text mb-5 text-center font-weight-regular">
          {{ description }}
        </p>
        <slot name="action"></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
const FloatingBackButton = () => import("@/components/Button/FloatingBack");
export default {
  components: {
    FloatingBackButton,
  },
  props: {
    visible: { type: Boolean, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    onClose: { type: Function, required: true },
    persistent: { type: Boolean, required: false, default: false },
  },
};
</script>
