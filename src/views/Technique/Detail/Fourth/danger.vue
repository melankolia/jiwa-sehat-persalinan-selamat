<template>
  <div class="d-flex flex-column px-12 py-6">
    <img
      src="@/assets/danger.jpg"
      alt="relaxing"
      class="image-cover py-8 align-self-center"
    />
    <v-tabs v-model="tab" background-color="transparent">
      <v-tab v-for="(item, i) in items" :key="i">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 my-4"
      style="line-height: 1.8rem !important"
    >
      <span class="font-weight-bold">
        Deteksi dini tanda-tanda bahaya kehamilan
      </span>
      menurut Tyastuti & Wahyuningsih (2016)
    </p>
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 ma-0"
      style="line-height: 1.8rem !important"
      id="tags"
    >
      Diantaranya:
    </p>
    <v-divider class="mb-4" />
    <div class="d-flex flex-row flex-wrap">
      <v-btn
        class="ma-1"
        active-class="info"
        depressed
        rounded
        small
        @click="(e) => toggle(item, i + 1)"
        v-for="(item, i) in itemsContent"
        :input-value="item.active"
        :key="i"
      >
        {{ item.text }}
      </v-btn>
    </div>
    <v-divider class="my-4" />
    <p
      class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2"
      style="line-height: 1.8rem !important"
    >
      <span class="font-weight-bold" id="#1"> 1) Muntah Berlebihan </span>
      <br />
      Rasa mual dan muntah bisa muncul pada kehamilan muda terutama pada pagi
      hari namun kondisi ini biasanya hilang setelah kehamilan berumur 3 bulan.
      Keadaan ini tidak perlu dikhawatirkan kecuali kalau memang cukup berat
      hingga tida dapat makan dan berat badan menurun terus.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#2"> 2) Pusing </span>
      <br />
      Pusing biasa muncul pada kehamilan muda. Apabila pusing sampai mengganggu
      aktivitas sehari-hari maka perlu diwaspadai.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#3"> 3) Sakit Kepala </span>
      <br />
      Sakit kepala yang hebat atau menetap dapat membahayakan kesehatan ibu dan
      janin.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#4"> 4) Perdarahan </span>
      <br />
      Perdarahan waktu hamil, walaupun hanya sedikit sudah merupakan tanda dan
      bahaya sehingga ibu harus waspada.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#5"> 5) Demam </span>
      <br />
      Demam tinggi lebih dari 2 hari atau keluarnya cairan berlebihan dari rahim
      dan kadang-kadang berbau merupakan salah satu tanda dan bahaya kehamilan.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#6"> 6) Batuk Lama </span>
      <br />
      Batuk lama lebih dari 2 minggu perlu ada pemeriksaan lanjut dan dapat
      dicurigai ibu hamil menderita TB.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#7">7) Cepat Lelah </span>
      <br />
      Dalam dua atau tiga bulan pertama kehamilan, biasanya timbul rasa lelah,
      mengantuk yang berlebihan dan pusing yang biasanya terjadi pada sore hari.
      Kemungkinan ibu menderita kurang darah.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#8">8) Keputihan yang Berbau </span>
      <br />
      Keputihan yang berbau merupakan salah satu tanda bahaya pada ibu hamil.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#9">9) Gerakan Janin </span>
      <br />
      Gerakan bayi mulai dirasakan ibu pada kehamilan akhir bulan ke empat.
      Apabila gerakan janin belum muncul pada usia kehamilan ini, gerakan yang
      semakin berkurang atau tidak ada gerakan maka ibu hamil harus waspada.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#10">10) Sesak Nafas</span>
      <br />
      Pada akhir bulan ke delapan ibu hamil sering merasa sedikit sesak bila
      bernafas karena bayi menekan paru-paru ibu. Namun, apabila hal ini terjadi
      berlebihan maka perlu diwaspadai.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      items: [{ tab: "Description", content: "Descriptions" }],
      itemsContent: [
        { text: "Muntah Berlebihan", active: false },
        { text: "Pusing", active: false },
        { text: "Sakit Kepala", active: false },
        { text: "Perdarahan", active: false },
        { text: "Demam", active: false },
        { text: "Batuk Lama", active: false },
        { text: "Cepat Lelah", active: false },
        { text: "Keputihan yang Berbau", active: false },
        { text: "Gerakan Janin", active: false },
        { text: "Sesak Nafas", active: false },
      ],
      active: true,
    };
  },
  methods: {
    toggle(item, id) {
      this.itemsContent.map((e) => (e.active = false));
      item.active = !item.active;
      document.getElementById(`#${id}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
  },
};
</script>

<style scoped>
.image-cover {
  width: 100%;
}
</style>
