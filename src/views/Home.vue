<template>
  <div class="d-flex flex-column cust-container">
    <div
      class="pink accent-1 flex-grow-1 d-flex justify-center align-center first-container"
    >
      <!-- <div class="super-container d-flex flex-row align-self-start">
        <div class="container-box d-flex justify-center align-center mx-3">
          <img class="image-circle" src="../assets/unsri.png" alt="unsri" />
        </div>
        <div class="container-box d-flex justify-center align-center mr-2">
          <img class="image-health" src="../assets/health.png" alt="unsri" />
        </div>
      </div> -->
      <div class="d-flex flew-row justify-center">
        <img class="logo flowers" src="../assets/flowers.png" alt="unsri" />
        <img
          class="logo girls"
          src="../assets/logo-sementara.png"
          alt="unsri"
        />
        <img
          class="logo flowers flowers-2"
          src="../assets/flowers.png"
          alt="unsri"
        />
      </div>
    </div>
    <div class="flex-grow-1 px-6" style="max-height: 30vh">
      <div
        class="d-flex flex-column justify-space-between py-6"
        style="min-height: 100%"
      >
        <p>
          <span class="font-weight-bold text-h5"> JSPS! </span>
          <br />
          <span class="font-weight-reguler">Jiwa Sehat Persalinan Selamat</span>
        </p>
        <v-btn @click="goToAgreement" class="px-10 py-6 pink accent-1" rounded>
          <span class="font-weight-bold text-button white--text"> Masuk </span>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { AGREEMENT } from "@/router/name.types";

export default {
  name: "Home",
  methods: {
    goToAgreement() {
      this.$router.push({ name: AGREEMENT });
    },
  },
};
</script>

<style scoped>
.cust-container {
  height: 100vh;
}

.first-container {
  position: relative;
}

.super-container {
  position: absolute;
  bottom: 10px;
  left: 0px;
}

.container-box {
  width: 56px;
  height: 56px;
  border-radius: 10%;
  background-color: rgb(255, 255, 255);
}

.image-circle {
  width: 80%;
  height: 70%;
}

.image-health {
  width: 80%;
  height: 90%;
}

.logo {
  filter: brightness(0) invert(1);
}

.flowers {
  width: 18%;
}

.flowers-2 {
  transform: scaleX(-1);
}

.girls {
  width: 60%;
}
</style>
