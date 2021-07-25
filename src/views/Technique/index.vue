<template>
  <div class="d-flex flex-column px-10 pt-6" style="height: 78vh">
    <img
      src="@/assets/pregnant.jpg"
      alt="pregnant"
      class="image-cover pb-4 align-self-center"
    />
    <div class="d-flex flex-column mb-8">
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('relax')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img src="@/assets/breathing.png" class="icon" alt="breathing" />
        </div>
        <span class="white--text font-weight-medium">
          Relaksasi Napas Dalam
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('hand')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img src="@/assets/hands.png" class="icon" alt="hands" />
        </div>
        <span class="white--text font-weight-medium">
          Latihan Hipnotis Lima Jari
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('muscle')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img src="@/assets/relaxation.png" class="icon" alt="relaxation" />
        </div>
        <span class="white--text font-weight-medium">
          Relaksasi Otot Progresif (ROP)
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleOpen"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img src="@/assets/information.png" class="icon" alt="information" />
        </div>
        <span class="white--text font-weight-medium">
          Informasi Seputar Kehamilan
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon :class="{ active: openInformation }" dark medium>
            {{ openInformation ? "expand_more" : "chevron_right" }}
          </v-icon>
        </div>
      </v-card>
      <v-expand-transition>
        <v-card
          v-if="openInformation"
          flat
          style="background-color: #fcbccb"
          class="d-flex flex-column px-4 py-2 mx-2 my-2"
        >
          <v-card
            flat
            class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
            @click="handleClick('trimester-1')"
          >
            <p class="white--text text-body-2 font-weight-medium ma-0 pl-8">
              Adaptasi Ketidaknyamanan pada Kehamilan Trimester I
            </p>
            <div
              class="d-flex flex-row align-center justify-end flex-grow-1 px-4"
            >
              <v-icon dark medium> chevron_right </v-icon>
            </div>
          </v-card>
          <v-card
            flat
            class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
            @click="handleClick('trimester-2')"
          >
            <p class="white--text text-body-2 font-weight-medium ma-0 pl-8">
              Adaptasi Ketidaknyamanan pada Kehamilan Trimester II
            </p>
            <div
              class="d-flex flex-row align-center justify-end flex-grow-1 px-4"
            >
              <v-icon dark medium> chevron_right </v-icon>
            </div>
          </v-card>
          <v-card
            flat
            class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
            @click="handleClick('trimester-3')"
          >
            <p class="white--text text-body-2 font-weight-medium ma-0 pl-8">
              Adaptasi Ketidaknyamanan pada Kehamilan Trimester III
            </p>
            <div
              class="d-flex flex-row align-center justify-end flex-grow-1 px-4"
            >
              <v-icon dark medium> chevron_right </v-icon>
            </div>
          </v-card>
          <v-card
            flat
            class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
            @click="handleClick('danger')"
          >
            <p class="white--text text-body-2 font-weight-medium ma-0 pl-8">
              Deteksi Dini Tanda-Tanda Bahaya Kehamilan
            </p>
            <div
              class="d-flex flex-row align-center justify-end flex-grow-1 px-4"
            >
              <v-icon dark medium> chevron_right </v-icon>
            </div>
          </v-card>
        </v-card>
      </v-expand-transition>
    </div>
    <div class="d-flex flex-row flex-grow-1 justify-end align-end pb-6">
      <v-btn
        class="py-5 px-6"
        rounded
        depressed
        color="pink accent-1"
        @click="handleNext"
        :loading="formLoading"
        dark
      >
        <span class="white--text button font-weight-medium"> Continue </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { POSTTEST, TECHNIQUE } from "@/router/name.types";

export default {
  data() {
    return {
      formLoading: false,
      openInformation: false,
    };
  },
  methods: {
    handleOpen() {
      this.openInformation = !this.openInformation;
    },
    handleClick(type) {
      if (type == "relax") {
        this.$router.push({ name: TECHNIQUE.DETAIL.FIRST });
      } else if (type == "hand") {
        this.$router.push({ name: TECHNIQUE.DETAIL.SECOND });
      } else if (type == "muscle") {
        this.$router.push({ name: TECHNIQUE.DETAIL.THIRD });
      } else if (type == "trimester-1") {
        this.$router.push({ name: TECHNIQUE.DETAIL.FOURTH.TRIMESTERI });
      } else if (type == "trimester-2") {
        this.$router.push({ name: TECHNIQUE.DETAIL.FOURTH.TRIMESTERII });
      } else if (type == "trimester-3") {
        this.$router.push({ name: TECHNIQUE.DETAIL.FOURTH.TRIMESTERIII });
      } else if (type == "danger") {
        this.$router.push({ name: TECHNIQUE.DETAIL.FOURTH.DANGER });
      }
    },
    handleNext() {
      this.formLoading = true;
      setTimeout(() => {
        this.formLoading = false;
        this.$router.push({ name: POSTTEST.COVER });
      }, 2000);
    },
  },
};
</script>

<style scoped>
.active {
  transform: rotate(360deg);
}
.image-cover {
  width: 100%;
  height: auto;
}
.icon {
  width: 60%;
}
</style>
