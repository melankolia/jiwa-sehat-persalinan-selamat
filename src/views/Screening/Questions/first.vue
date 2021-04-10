<template>
  <div class="pb-6 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Pertanyaan 1</p>
      <p class="text-body-1 font-weight-regular">
        Apa saja keluhan yang Ibu rasakan selama hamil ?
      </p>
    </div>
    <v-textarea
      v-model="answer"
      auto-grow
      color="secondary"
      label="Jawaban"
      rows="6"
      hide-details
    ></v-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: "",
    };
  },
  watch: {
    selected: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
