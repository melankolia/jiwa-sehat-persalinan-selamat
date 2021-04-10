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
      >
        <span class="button font-weight-medium"> Cancel </span>
      </v-btn>
      <v-btn
        @click="handleNext"
        class="py-5 px-6 flex-grow-1"
        depressed
        color="secondary"
      >
        <span class="white--text button font-weight-medium"> Simpan </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
const Segmented = () => import("@/components/SegmentedProgressBar");
const First = () => import("@/views/Pretest/Questions/first");
const Second = () => import("@/views/Pretest/Questions/second");
const Third = () => import("@/views/Pretest/Questions/third");
const Fourth = () => import("@/views/Pretest/Questions/fourth");

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
      }
    },
    handlePrev() {
      const pointer = this.currentIndex - 1;
      if (pointer >= 1 && pointer < this.range.length) {
        this.range[pointer].active = false;
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style></style>
