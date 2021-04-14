<template>
  <div class="pb-6 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Pertanyaan 2</p>
      <p class="text-body-1 font-weight-regular">
        Perubahan-perubahan apa saja yang terjadi pada fisik Ibu selama hamil?
      </p>
      <v-textarea
        v-model="question2"
        auto-grow
        color="secondary"
        label="Jawaban"
        rows="6"
        hide-details
      ></v-textarea>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question2: null,
    };
  },
  watch: {
    question2: {
      handler(val) {
        this.debounce(() => this.$emit("answer", val));
      },
      deep: true,
    },
  },
};
</script>
<style scoped></style>
