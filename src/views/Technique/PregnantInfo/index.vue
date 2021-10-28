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
        @click="handleClick('trimester-1')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img
            src="@/assets/information.png"
            style="min-width: 44px"
            class="icon mx-2"
            alt="information"
          />
        </div>
        <span class="white--text font-weight-medium">
          Adaptasi Ketidaknyamanan pada Kehamilan Trimester I
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('trimester-2')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img
            src="@/assets/information.png"
            style="min-width: 44px"
            class="icon mx-2"
            alt="information"
          />
        </div>
        <span class="white--text font-weight-medium">
          Adaptasi Ketidaknyamanan pada Kehamilan Trimester II
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('trimester-3')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img
            src="@/assets/information.png"
            style="min-width: 44px"
            class="icon mx-2"
            alt="information"
          />
        </div>
        <span class="white--text font-weight-medium">
          Adaptasi Ketidaknyamanan pada Kehamilan Trimester III
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
      <v-card
        flat
        class="d-flex flex-row align-center pink accent-1 rounded-lg py-2 my-1"
        @click="handleClick('danger')"
      >
        <div
          class="d-flex flex-column rounded-circle justify-center align-center"
        >
          <img
            src="@/assets/information.png"
            style="min-width: 44px"
            class="icon mx-2"
            alt="information"
          />
        </div>
        <span class="white--text font-weight-medium">
          Adaptasi Ketidaknyamanan pada Kehamilan Trimester III
        </span>
        <div class="d-flex flex-row align-center justify-end flex-grow-1 px-4">
          <v-icon dark medium> chevron_right </v-icon>
        </div>
      </v-card>
    </div>
    <div class="d-flex flex-row flex-grow-1 justify-end align-end pb-6">
      <v-btn
        class="py-5 px-6"
        rounded
        depressed
        color="pink accent-1"
        @click="visible = true"
        :loading="formLoading"
        dark
      >
        <span class="white--text button font-weight-medium"> Continue </span>
      </v-btn>
    </div>
    <DialogCompleted
      :visible="visible"
      title="Mohon Dibaca"
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
import { TECHNIQUE } from "@/router/name.types";
const DialogCompleted = () => import("@/components/Dialog/Completed");

export default {
  components: {
    DialogCompleted,
  },
  data() {
    return {
      // Dialog Completed Properties
      visible: false,

      formLoading: false,
      openInformation: false,
    };
  },
  methods: {
    handleOpen() {
      this.openInformation = !this.openInformation;
    },
    handleClick(type) {
      if (type == "trimester-1") {
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
      this.visible = false;
      this.$router.push({ name: TECHNIQUE.LIST });
    },
    handleDialogClose() {
      this.handleNext();
    },
  },
  computed: {
    dialogDescription() {
      return "Setelah ibu membaca informasi seputar kehamilan, silahkan mempelajari dan mempraktikkan teknik mengatasi cemas berikut ini";
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
