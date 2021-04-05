<template>
  <div class="d-flex flex-column cust-container">
    <Headers text="Lembar Persetujuan" />
    <div class="d-flex flex-column flex-grow-1 pa-10">
      <p class="subtitle-1 font-weight-medium">Persetujuan Menjadi Responden</p>
      <div class="pb-4" style="overflow: scroll">
        <p
          class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
        >
          Setelah saya membaca maksud dan tujuan penelitian ini, maka dengan
          kesadaran penuh dan tanpa ada paksaan dari pihak lain menyatakan bahwa
          saya bersedia untuk berpartisipasi sebagai responden dalam penelitian
          yang dilakukan oleh saudari Teta Apriliana, Mahasiswa Program Studi
          Ilmu Keperawatan Fakultas Kedokteran Universitas Sriwijaya dengan
          judul
          <span class="font-weight-bold">
            “Perancangan Aplikasi Berbasis Website JSPS (Jiwa Sehat Persalinan
            Selamat) terhadap Perubahan Tingkat Ansietas Ibu Primigravida
            Menghadapi Persalinan”.</span
          >
        </p>
      </div>
      <v-divider />
      <v-checkbox v-model="agreement" color="primary">
        <template #label>
          <span
            class="caption text-body-2 font-weight-bold blue-grey--text text--darken-2"
          >
            Ya, Saya Setuju
          </span>
        </template>
      </v-checkbox>
      <div class="d-flex flex-row flex-grow-1 justify-end align-end">
        <v-btn
          @click="handleBack"
          class="py-5 px-6 mx-2"
          color="pink accent-1"
          outlined
          rounded
        >
          <span class="button font-weight-medium"> Tidak Setuju </span>
        </v-btn>
        <v-btn
          class="py-5 px-6"
          :disabled="!isAgree"
          rounded
          depressed
          color="pink accent-1"
        >
          <span class="white--text button font-weight-medium"> Setuju </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
const Headers = () => import("@/components/Headers");
import { HOME } from "@/router/name.types";

export default {
  components: {
    Headers,
  },
  data() {
    return {
      agreement: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: HOME });
    },
  },
  computed: {
    isAgree() {
      return this.agreement;
    },
  },
};
</script>

<style scoped>
.cust-container {
  height: 100vh;
}
</style>
