<template>
  <div>
    <p class="my-2 caption text-justify">
      {{ item.text }}
    </p>
    <v-select
      v-model="item.answer"
      :items="answerList"
      filled
      outlined
      dense
      placeholder="Pilih Jawaban "
      :rules="rules"
    />
  </div>
</template>

<script>
export default {
  props: {
    answerList: { type: Array, required: true },
    item: { type: Object, required: true },
    rules: { type: Array, required: true },
  },
};
</script>

<style></style>
