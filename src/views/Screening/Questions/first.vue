<template>
  <div class="pb-1 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Pertanyaan 1</p>
      <p class="text-body-1 font-weight-regular">
        Apa saja keluhan yang Ibu rasakan selama hamil ?
      </p>
    </div>
    <v-textarea
      v-model="answer.question1"
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
  props: {
    answer: { type: Object, required: true, default: () => {}}
  },
};
</script>

<style scoped></style>
