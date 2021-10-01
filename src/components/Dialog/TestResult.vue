<template>
  <v-dialog
    v-model="visible"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    :persistent="persistent"
  >
    <v-card tile :color="color" style="padding-top: 120px !important">
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
        <v-icon size="150" color="white">{{ icon }}</v-icon>
        <v-spacer />
      </v-card-actions>
      <v-card-text class="px-13">
        <p class="text-h5 white--text font-weight-bold mb-6 text-center">
          {{ title }}
        </p>
        <p
          class="text-subtitle-1 white--text mb-5 text-center font-weight-medium"
        >
          Tingkatan Ansietas anda: <br />
          <span class="text-h6">
            {{ description }}
          </span>
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
    icon: { type: String, required: false, default: "check_circle" },
    visible: { type: Boolean, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    onClose: { type: Function, required: true },
    persistent: { type: Boolean, required: false, default: false },
    color: { type: String, required: false, default: "pink accent-1" },
  },
};
</script>
