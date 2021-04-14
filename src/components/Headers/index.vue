<template>
  <div class="pink accent-1 flex-grow-1 d-flex" style="height: 22vh">
    <Logo :isBorder="true" />
    <p
      class="headline white--text font-weight-medium align-self-end my-8 px-10"
    >
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
