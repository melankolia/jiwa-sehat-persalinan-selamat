<template>
  <Cover
    title="Kuisioner Post-test"
    description="Setelah ibu melakukan semua teknik mengatasi cemas di atas, maka silahkan isi kuesioner ini"
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
