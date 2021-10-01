<template>
  <div>
    <v-card
      class="mb-3 mx-1 pb-4"
      elevation="1"
      v-for="(element, i) in steps"
      :key="i"
    >
      <v-card-title class="py-0 px-2">
        <v-img v-if="i == 1" :src="Picture1" />
        <v-img v-else-if="i == 3" :src="Picture2" />
        <v-card-title class="text-h6 blue-grey--text">
          Step {{ i + 1 }}
        </v-card-title>
        <v-card-subtitle class="blue-grey--text">
          {{ element }}
        </v-card-subtitle>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import Picture1 from "@/assets/examples/Picture1.png";
import Picture2 from "@/assets/examples/Picture2.png";

export default {
  data() {
    return {
      Picture1,
      Picture2,
      steps: [
        `Berbaring atau duduk tenang: posisikan diri anda senyaman mungkin.`,
        `Tarik napas melalui hidung: Anda dapat menutup mata untuk mencegah
        pikiran dan merasa terganggu oleh keadaan luar.`,
        `Tahan napas 3-5 detik: Anda dapat menghitung dengan hitungan teratur.`,
        `Keluarkan udara melalui mulut secara perlahan dengan cara dihembuskan.`,
        `Lakukan tindakan ini 4-6 kali dalam sehari.`,
      ],
    };
  },
};
</script>

<style></style>
