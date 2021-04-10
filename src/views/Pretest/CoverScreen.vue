<template>
  <Cover
    title="Kuisioner Pre-test"
    description="Dengan mengisi Kuesioner ini berarti Anda setuju menjadi responden
          penelitian. Partisipasi Anda dalam mengisi kuesioner ini sangat
          membantu saya untuk menyelesaikan penelitian"
    :handleNext="handleNext"
  />
</template>

<script>
import { PRETEST } from "@/router/name.types";
const Cover = () => import("@/components/CoverScreen");

export default {
  components: {
    Cover,
  },
  methods: {
    handleNext() {
      this.$router.push({ name: PRETEST.STEPPER });
    },
  },
};
</script>

<style></style>
