<template>
  <Cover
    title="Kuisioner Pre-test"
    description="Berikut terdapat beberapa frasa yang menggambarkan perasaan yang dialami seseorang. Silahkan menjawab dengan memberikan skor pada setiap frasa atau pernyataan yang menunjukkan perasaan selama seminggu terakhir."
    titleButton="Isi Kuisioner"
    :formLoading="formLoading"
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
        this.$router.push({ name: PRETEST.STEPPER });
      }, 2000);
    },
  },
};
</script>

<style></style>
