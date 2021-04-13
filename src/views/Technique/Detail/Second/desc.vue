<template>
  <div>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
      style="line-height: 1.8rem !important"
    >
      <span class="font-weight-bold"> Latihan hipnotis lima jari </span>
      merupakan kegiatan yang memiliki manfaat untuk meningkatkan pikiran
      positif dengan memfokuskan pandangan dan pikiran ke lima jari sembari
      mengingat kondisi tubuh yang segar dan sehat, orang-orang yang peduli dan
      perhatian, pujian/penghargaan yang pernah di rasakan, serta tempat-tempat
      indah atau menyenangkan yang pernah dikunjungi (Keliat, dkk, 2020).
    </p>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 font-weight-bold"
      style="line-height: 1.8rem !important"
    >
      Adapun cara melakukan latihan hipnotis lima jari menurut Keliat, dkk
      (2020)
    </p>
    <v-btn
      class="px-10 py-6 pink accent-1"
      block
      outlined
      rounded
      dark
      @click="handleNext"
    >
      <span class="white--text button font-weight-bold">
        Langkah - Langkah
      </span>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    handleNext() {
      this.$emit("step");
      this.$scrollToTop();
    },
  },
};
</script>

<style></style>
