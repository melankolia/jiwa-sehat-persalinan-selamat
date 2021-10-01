<template>
  <div>
    <v-card
      class="mb-3 mx-1 pb-4"
      elevation="1"
      v-for="(element, i) in steps"
      :key="i"
    >
      <v-card-title class="py-0 px-2">
        <v-img v-if="i == 3" :src="E1" />
        <v-img v-else-if="i == 4" :src="E2" />
        <v-img v-else-if="i == 5" :src="E3" />
        <v-img v-else-if="i == 6" :src="E4" />
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
import E1 from "@/assets/examples/e1.png";
import E2 from "@/assets/examples/e2.png";
import E3 from "@/assets/examples/e3.png";
import E4 from "@/assets/examples/e4.png";

export default {
  data() {
    return {
      E1,
      E2,
      E3,
      E4,
      steps: [
        `Fokuskan pandangan dan pikiran ke lima jari.`,
        `Taris napas dalam-dalam, lalu pejamkan mata dan kosongkan pikiran.`,
        `Angkat tangan kanan, kemudian pertemukan.`,
        `Ibu jari dengan telunjuk: lalu bayangkan saat tubuh sangat segar dan sehat.`,
        `Ibu jari dengan jari tengah: lalu bayangkan saat semua orang memberikan perhatian dan peduli kepada kita.`,
        `Ibu jari dengan jari manis: lalu bayangkan saat pujian yang didapat dari pasangan, keluarga, teman dan orang sekitar atas prestasi yang pernah di raih.`,
        `Ibu jari dengan jari kelingking: lalu bayangkan tempat-tempat indah dan menyenangkan yang pernah dikunjungi misalnya pantai, gunung, taman dan lain-lain.`,
        `Tarik napas dalam-dalam lalu buka mata.`,
        `Evaluasi manfaatnya dan lakukan secara rutin 3-4 kali dalam sehari.`,
      ],
    };
  },
};
</script>

<style></style>
