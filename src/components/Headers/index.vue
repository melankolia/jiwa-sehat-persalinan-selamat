<template>
  <div class="pink accent-1 flex-grow-1 d-flex" style="max-height: 22vh">
    <p
      class="headline white--text font-weight-medium align-self-end my-8 px-10"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: { types: String, required: true, default: "" },
  },
};
</script>

<style></style>
