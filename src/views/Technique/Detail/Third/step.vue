<template>
  <div>
    <v-card
      class="mb-3 mx-1"
      elevation="1"
      v-for="(element, i) in steps"
      :key="i"
    >
      <v-card-title class="py-0 px-2">
        <v-card-title
          class="text-subtitle-1 font-weight-medium blue-grey--text"
        >
          {{ element }}
        </v-card-title>
        <v-spacer />
        <v-btn color="primary" text rounded>
          <v-icon dark medium> chevron_right </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        "Latihan Mata dan dahi",
        "Latihan Pipi",
        "Mulut",
        "Latihan Tengkuk/Leher",
        "Latihan Bahu",
        "Latihan Tangan",
        "Latihan Otot Dada",
        "Latihan Meregangkan Otot \n Punggung",
        "Latihan Otot Perut",
        "Latihan otot bokong",
        "Latihan otot kaki",
      ],
    };
  },
};
</script>

<style></style>
