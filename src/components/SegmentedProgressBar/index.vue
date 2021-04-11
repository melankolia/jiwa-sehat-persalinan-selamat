<template>
  <div class="d-flex pt-8 pb-12 px-10">
    <div
      v-for="(e, i) in range"
      :key="i"
      class="item"
      :class="{ [`active-${i + 1}`]: e.active }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    range: { types: Array, required: true, default: () => [] },
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  background-color: lightgray;
  margin-right: 4px;
  height: 12px;
  -webkit-transition: background-color 0.5s ease;
  -moz-transition: background-color 0.5s ease;
  -o-transition: background-color 0.5s ease;
  transition: background-color 0.5s ease;
}

.active-1 {
  background-color: #1880ec;
}
.active-2 {
  background-color: #1880ec;
}
.active-3 {
  background-color: #1880ec;
}
.active-4 {
  background-color: #1880ec;
}
.active-5 {
  background-color: #1880ec;
}

.item:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.item:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
