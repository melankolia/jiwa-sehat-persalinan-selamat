<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <div class="flex-grow-1">
      <Segmented :range="range" />
      <Logo :isBorder="true" :top="8" :right="5" />
      <keep-alive>
        <transition :name="transitionName">
          <component :is="range[currentIndex - 1].screen" :answer="answer" />
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
const First = () => import("@/views/Screening/Questions/first");
const Second = () => import("@/views/Screening/Questions/second");

import MainService from "@/services/resources/main.service";
import { TECHNIQUE } from "@/router/name.types";

export default {
  components: {
    Segmented,
    First,
    Second,
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
      ],
      answer: {
        question1: null,
        question2: null,
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
      MainService.insertScreening(id, payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$router.push({
              name: TECHNIQUE.LIST,
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
