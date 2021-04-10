<template>
  <Cover
    title="Kuisioner Post-test"
    description="Dengan mengisi Kuesioner ini berarti Anda setuju menjadi responden
          penelitian. Partisipasi Anda dalam mengisi kuesioner ini sangat
          membantu saya untuk menyelesaikan penelitian"
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
