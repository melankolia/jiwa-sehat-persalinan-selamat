<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <div class="flex-grow-1">
      <Segmented :range="range" />
      <keep-alive>
        <transition :name="transitionName">
          <component :is="range[currentIndex - 1].screen" />
        </transition>
      </keep-alive>
    </div>
    <div class="d-flex flex-row px-10 pb-10">
      <v-btn
        @click="handlePrev"
        class="py-5 px-6 mx-2 flex-grow-1"
        color="error"
        outlined
        depressed
        rounded
        :loading="backLoading"
      >
        <span class="button font-weight-medium"> Back </span>
      </v-btn>
      <v-btn
        @click="handleNext"
        class="py-5 px-6 flex-grow-1"
        depressed
        rounded
        color="secondary"
        :loading="formLoading"
      >
        <span class="white--text button font-weight-medium"> Simpan </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
const Segmented = () => import("@/components/SegmentedProgressBar");
const First = () => import("@/views/Posttest/Questions/first");
const Second = () => import("@/views/Posttest/Questions/second");
const Third = () => import("@/views/Posttest/Questions/third");
const Fourth = () => import("@/views/Posttest/Questions/fourth");
// import { SCREENING } from "@/router/name.types";

export default {
  components: {
    Segmented,
    First,
    Second,
    Third,
    Fourth,
  },
  data() {
    return {
      transitionName: "",
      formLoading: false,
      backLoading: false,
      range: [
        {
          screen: "First",
          active: true,
        },
        {
          screen: "Second",
          active: false,
        },
        {
          screen: "Third",
          active: false,
        },
        {
          screen: "Fourth",
          active: false,
        },
      ],
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.range.length; i++) {
        if (this.range[i].active == false) return i;
      }
      return this.range.length;
    },
  },
  methods: {
    handleNext() {
      const pointer = this.currentIndex;
      if (pointer >= 0 && pointer < this.range.length) {
        this.range[pointer].active = true;
        this.transitionName = "slide-left";
      } else {
        this.formLoading = true;
        setTimeout(() => {
          this.formLoading = false;
          // this.$router.push({ name: SCREENING.COVER });
        }, 2000);
      }
    },
    handlePrev() {
      const pointer = this.currentIndex - 1;
      if (pointer >= 1 && pointer < this.range.length) {
        this.range[pointer].active = false;
        this.transitionName = "slide-right";
      } else {
        this.backLoading = true;
        setTimeout(() => {
          this.backLoading = false;
          this.$router.back();
        }, 2000);
      }
    },
  },
};
</script>

<style></style>
