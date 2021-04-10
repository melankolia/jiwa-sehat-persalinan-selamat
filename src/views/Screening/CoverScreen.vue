<template>
  <Cover
    title="Screening"
    description="Dengan mengisi Screening ini berarti Anda setuju menjadi responden
          penelitian. Partisipasi Anda dalam mengisi screening ini sangat
          membantu saya untuk menyelesaikan penelitian"
    titleButton="Isi Screening"
    :formLoading="formLoading"
    :handleNext="handleNext"
  />
</template>

<script>
import { SCREENING } from "@/router/name.types";
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
        this.$router.push({ name: SCREENING.STEPPER });
      }, 2000);
    },
  },
};
</script>

<style></style>
