<template>
  <div :style="styling" :class="{ circleDiv: isBorder }">
    <div
      class="d-flex flew-row justify-center align-center pink accent-1 pa-2"
      style="width: 64px; height: 64px"
    >
      <img src="../assets/flowers.png" alt="unsri" />
      <img src="../assets/logo-sementara.png" alt="unsri" />
      <img src="../assets/flowers.png" alt="unsri" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBorder: { types: Boolean, required: true, default: true },
    top: { types: Number, required: false, default: "2.5" },
    right: { types: Number, required: false, default: "2.5" },
    position: { type: String, required: false, default: "absolute" },
  },
  computed: {
    styling() {
      return `position: absolute; 
              z-index: 9999;
              top: ${this.top}%; 
              right: ${this.right}%;`;
    },
  },
};
</script>

<style scoped>
img[alt="unsri"] {
  width: 17px;
  height: 37px;
  filter: brightness(0) invert(1);
}
img:nth-child(2) {
  width: 28px;
  height: 29px;
}
img:first-child {
  transform: scaleX(1);
}
img:last-child {
  transform: scaleX(-1);
}
.circleDiv {
  border: 2px solid white;
}

div > div {
  border-radius: 50%;
}
</style>
