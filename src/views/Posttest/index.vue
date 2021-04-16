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
            :answer="answer"
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
const First = () => import("@/views/Pretest/Questions/first");
const Second = () => import("@/views/Pretest/Questions/second");
const Third = () => import("@/views/Pretest/Questions/third");
const Fourth = () => import("@/views/Pretest/Questions/fourth");
const Fifth = () => import("@/views/Pretest/Questions/fifth");
const Six = () => import("@/views/Pretest/Questions/six");
const Seven = () => import("@/views/Pretest/Questions/seven");
const Eight = () => import("@/views/Pretest/Questions/eight");
const Nine = () => import("@/views/Pretest/Questions/nine");
const Ten = () => import("@/views/Pretest/Questions/ten");
const Eleven = () => import("@/views/Pretest/Questions/eleven");
const Twelve = () => import("@/views/Pretest/Questions/twelve");
const Thirteen = () => import("@/views/Pretest/Questions/thirteen");
const Fourteen = () => import("@/views/Pretest/Questions/fourteen");
const DialogCompleted = () => import("@/components/Dialog/Completed");
// import { HOME } from "@/router/name.types";

export default {
  components: {
    Segmented,
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Logo,
    DialogCompleted,
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
        {
          screen: "Fifth",
          active: false,
        },
        {
          screen: "Six",
          active: false,
        },
        {
          screen: "Seven",
          active: false,
        },
        {
          screen: "Eight",
          active: false,
        },
        {
          screen: "Nine",
          active: false,
        },
        {
          screen: "Ten",
          active: false,
        },
        {
          screen: "Eleven",
          active: false,
        },
        {
          screen: "Twelve",
          active: false,
        },
        {
          screen: "Thirteen",
          active: false,
        },
        {
          screen: "Fourteen",
          active: false,
        },
      ],
      answer: {
        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        question7: null,
        question8: null,
        question9: null,
        question10: null,
        question11: null,
        question12: null,
        question13: null,
        question14: null,
      },
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
      this.$router.replace("/");
      // this.$router.replace({ name: HOME });
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
