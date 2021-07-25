<template>
  <div class="d-flex flex-column px-12 py-6">
    <img
      src="@/assets/trimester-2.jpg"
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
        Adaptasi ketidaknyamanan pada kehamilan trimester II
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
      <span class="font-weight-bold" id="#1"> 1) Edema/Bengkak </span>
      <br />
      Edema ini biasa terjadi pada kehamilan trimester II dan III.
      <br />
      <br />
      <span class="font-weight-bold">
        Untuk meringankan atau mencegah dapat dilakukan beberapa cara antara
        lain:
      </span>
      <br />
      Hindari pakaian ketat. Hindari makanan yang berkadar garam tinggi. Hindari
      duduk/berdiri dalam jangka waktu lama. Makan makanan tinggi protein.
      Istirahat dan naikkan tungkai selama 20 menit berulang-ulang. Berbaring
      atau duduk dengan kaki ditinggikan. Hindari berbaring terlentang. Hindari
      kaos kaki yang ketat.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#2">
        2) Sering BAK (Buang Air Kecil)
      </span>
      <br />
      Insomnia ini biasanya dapat terjadi mulai pada pertengahan masa kehamilan.
      Insomnia dapat disebabkan oleh perubahan fisik yaitu pembesaran uterus,
      dapat juga disebabkan oleh karena perubahan psikologis misalnya perasaan
      takut, gelisah atau khawatir karena menghadapi kelahiran.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah: </span>
      <br />
      Mandi air hangat sebelum tidur, minum minuman hangat (susu hangat, teh
      hangat) sebelum tidur. Sebelum tidur jangan melakukan aktifitas yang dapat
      membuat susah tidur. Tidur dengan posisi relaks, lakukan relaksasi.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#3"> 3) Sesak Nafas </span>
      <br />
      Sesak nafas ini biasanya mulai terjadi pada awal trimester II sampai pada
      akhir kehamilan. Ibu hamil dapat terserang sesak nafas karena pembesaran
      uterus dan pergeseran organ-organ abdomen. Pembesaran uterus membuat
      pergeseran diafragma naik sekitar 4 cm. Ada kalanya terjadi peningkatan
      hormon progesteron membuat hiperventilasi.
      <br />
      <br />

      <span class="font-weight-bold"> Untuk meringankan atau mencegah: </span>
      <br />
      Bidan dapat menjelaskan penyebab fisiologisnya. Bidan juga dapat melatih
      ibu hamil untuk membiasakan dengan pernapasan normal. Ibu hamil juga harus
      tetap mengatur sikap tubuh yang baik, saat berdiri tegak dengan kedua
      tangan direntangkan diatas kepala kemudian menarik nafas panjang.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#4"> 4) Nyeri Ulu Hati </span>
      <br />
      Hal ini dapat terjadi karena produksi progesteron yang meningkat,
      pergeseran lambung karena pembesaran uterus, dan apendiks bergeser kearah
      lateral dan keatas sehingga menimbulkan refluks lambung yang dapat
      mengakibatkan rasa nyeri pada ulu hati.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah: </span>
      <br />
      Hindari makanan berminyak. Hindari makanan yang berbumbu merangsang.
      Sering makan makanan ringan. Hindari kopi dan rokok. Minum air 6 – 8 gelas
      sehari. Kunyah permen karet.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#5"> 5) Air Ludah Berlebihan</span>
      <br />
      Ibu hamil sering merasakan saliva keluar lebih banyak dari biasa, hal ini
      kadang-kadang dapat menimbulkan rasa mual sehingga ibu hamil merasa tidak
      nyaman. Ptyalism biasanya dirasakan ibu hamil mulai 2 sampai 3 minggu usia
      kehamilan dan berhenti pada akhir kehamilan.
      <br />
      <br />

      <span class="font-weight-bold"> Faktor penyebab: </span>
      <br />
      Meningkatnya keasaman mulut atau meningkatnya asupan pati sehingga
      menstimulasi (merangsang) kelenjar saliva (kelenjar ludah) untuk
      meningkatkan sekresi.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah: </span>
      <br />
      Kurangi makan yang banyak mengandung karbohidrat. Kunyah permen karet atau
      permen keras dan jaga kebersihan mulut.
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
        { text: "Edema/Bengkak", active: false },
        { text: "Insomnia/Sulit Tidur", active: false },
        { text: "Sesak Nafas", active: false },
        { text: "Nyeri Ulu Hati", active: false },
        { text: "Air Ludah Berlebihan", active: false },
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
