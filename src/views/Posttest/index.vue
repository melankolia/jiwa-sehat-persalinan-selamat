<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <div class="flex-grow-1">
      <Segmented :range="range" />
      <Logo :isBorder="true" :top="8" :right="5" />
      <keep-alive>
        <transition :name="transitionName">
          <component
            @answer="handleAnswer($event)"
            :is="range[currentIndex - 1].screen"
          />
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
    <DialogCompleted
      :visible="visible"
      title="Terima Kasih !"
      :description="dialogDescription"
      :onClose="handleDialogClose"
    >
      <template #action>
        <v-btn
          block
          outlined
          class="mt-10"
          color="white"
          @click="handleDialogClose"
          >OK</v-btn
        >
      </template>
    </DialogCompleted>
  </div>
</template>

<script>
const Segmented = () => import("@/components/SegmentedProgressBar");
const Logo = () => import("@/components/Logo");
const First = () => import("@/views/Posttest/Questions/first");
const Second = () => import("@/views/Posttest/Questions/second");
const Third = () => import("@/views/Posttest/Questions/third");
const Fourth = () => import("@/views/Posttest/Questions/fourth");
const DialogCompleted = () => import("@/components/Dialog/Completed");
import { HOME } from "@/router/name.types";

export default {
  components: {
    Segmented,
    DialogCompleted,
    First,
    Second,
    Third,
    Fourth,
    Logo,
  },
  data() {
    return {
      // Dialog properties
      visible: false,
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
    dialogDescription() {
      return `Terima kasih telah meluangkan waktu anda menggunakan aplikasi ini. Partisipasi Anda dalam menggunakan aplikasi dan mengisi kuesioner ini sangat
          membantu saya untuk menyelesaikan penelitian`;
    },
  },
  methods: {
    handleAnswer(param) {
      console.log({ param });
    },
    handleDialogClose() {
      this.$router.push({ name: HOME });
      this.visible = false;
    },
    handleNext() {
      const pointer = this.currentIndex;
      if (pointer >= 0 && pointer < this.range.length) {
        this.range[pointer].active = true;
        this.transitionName = "slide-left";
      } else {
        this.formLoading = true;
        setTimeout(() => {
          this.formLoading = false;
          this.visible = true;
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
