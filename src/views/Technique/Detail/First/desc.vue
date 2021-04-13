<template>
  <div>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
      style="line-height: 1.8rem !important"
    >
      <span class="font-weight-bold"> Relaksasi napas dalam </span>merupakan
      tindakan yang disadari untuk mengatur pernapasan secara dalam dan lambat
      yang dapat menimbulkan efek relaksasi dan dapat mengatasi berbagai masalah
      misalnya stress, ketegangan otot, nyeri, hipertensi, gangguan pernapasan
      dan lain-lain (Potter & Perry, 2006). Relaksasi napas dalam adalah suatu
      teknik relaksasi sederhana, dimana paru-paru menghirup oksigen sebanyak
      mungkin, merupakan gaya pernapasan yang pada dasarnya dilakukan dengan
      lambat, dalam dan rileks sehingga memungkinkan seseorang merasa lebih
      tenang (Nipa, 2017).
    </p>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
      style="line-height: 1.8rem !important"
    >
      Adapun manfaat relaksasi napas dalam menurut Wardani (2015), yaitu sebagai
      ketentraman hati, berkurangnya rasa cemas, khawatir dan gelisah, tekanan
      darah dan ketegangan jiwa menjadi rendah, detak jantung lebih rendah,
      meningkatkan keyakinan serta kesehatan mental menjadi lebih baik.
    </p>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 font-weight-bold"
      style="line-height: 1.8rem !important"
    >
      Adapun langkah-langkah untuk melakukan relaksasi napas dalam menurut
      Keliat, dkk (2020)
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
