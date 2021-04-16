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

import { SCREENING } from "@/router/name.types";
import MainService from "@/services/resources/main.service";

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
  },
  data() {
    return {
      id: this.$route.params?.secureId,
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
  },
  methods: {
    insertData(id, payload) {
      this.formLoading = true;
      MainService.insertPretest(id, payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$router.push({
              name: SCREENING.COVER,
              params: { secureId: this.id },
            });
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.formLoading = false));
    },
    handleNext() {
      const pointer = this.currentIndex;
      if (pointer >= 0 && pointer < this.range.length) {
        this.range[pointer].active = true;
        this.transitionName = "slide-left";
      } else {
        this.insertData(this.id, this.answer);
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
