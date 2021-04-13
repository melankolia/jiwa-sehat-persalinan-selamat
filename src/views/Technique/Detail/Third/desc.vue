<template>
  <div>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
      style="line-height: 1.8rem !important"
    >
      <span class="font-weight-bold"> Relaksasi Otot Progresif (ROP) </span
      >Salah satu jenis olahraga ringan yang dapat dilakukan oleh ibu hamil
      ialah dengan melakukan Relaksasi Otot Progresif (ROP). ROP merupakan
      latihan mengencangkan dan mengendurkan otot sambil nafas dalam pada otot
      muka sampai kaki: mata dan dahi, pipi, mulut, tengkuk, bahu, tangan, dada,
      perut, punggung, bokong, kaki, dan telapak kaki (Keliat & Marlina, 2018).
    </p>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 font-weight-bold"
      style="line-height: 1.8rem !important"
    >
      Adapun cara untuk melakukan relaksasi otot progresif adalah sebagai
      berikut
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
