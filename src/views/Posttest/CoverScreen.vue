<template>
  <Cover
    title="Kuisioner Post-test"
    description="Berikut terdapat beberapa frasa yang menggambarkan perasaan yang dialami seseorang. Silahkan menjawab dengan memberikan skor pada setiap frasa atau pernyataan yang menunjukkan perasaan selama seminggu terakhir."
    note="0: Tidak,
          1: Ringan,
          2: Sedang,
          3: Berat,
          4: Sangat Parah"
    titleButton="Isi Kuisioner"
    :formLoading="formLoading"
    :handleNext="handleNext"
  />
</template>

<script>
import { POSTTEST } from "@/router/name.types";
const Cover = () => import("@/components/CoverScreen");

export default {
  components: {
    Cover,
  },
  data() {
    return {
      formLoading: false,
    };
  },
  methods: {
    handleNext() {
      this.formLoading = true;
      setTimeout(() => {
        this.formLoading = false;
        this.$router.push({ name: POSTTEST.STEPPER });
      }, 2000);
    },
  },
};
</script>

<style></style>
