<template>
  <v-btn
    :color="color"
    :text="text"
    fab
    dark
    fixed
    :top="top"
    :bottom="bottom"
    :left="left"
    :right="right"
    small
    @click="onClick ? onClick() : $router.back()"
    v-scroll="onScroll ? onScroll : {}"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    onClick: { type: Function, required: false },
    onScroll: { type: Function, required: false },
    icon: { type: String, required: false, default: "keyboard_arrow_left" },
    top: { type: Boolean, required: false, default: false },
    bottom: { type: Boolean, required: false, default: false },
    left: { type: Boolean, required: false, default: false },
    right: { type: Boolean, required: false, default: false },
    text: { type: Boolean, required: false, default: false },
    color: { type: String, required: false, default: "secondary" },
  },
};
</script>
