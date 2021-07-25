<template>
  <div class="d-flex flex-column px-12 py-6">
    <img
      src="@/assets/trimester-3.jpg"
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
        Adaptasi ketidaknyamanan pada kehamilan trimester III
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
      <span class="font-weight-bold" id="#1"> 1) Konstipasi/Sembelit </span>
      <br />
      Konstipasi adalah BAB keras atau susah BAB biasa terjadi pada ibu hamil
      trimester II dan III. Penyebabnya adalah gerakan peristaltik usus lambat
      oleh karena meningkatnya hormon progesteron. Di samping itu konstipasi
      dapat terjadi bila ibu hamil banyak mengkonsumsi suplemen zat besi.
      <br />
      <br />

      <span class="font-weight-bold" id="#1">
        Cara meringankan atau mencegah
      </span>
      <br />
      Dapat dilakukan dengan olah raga secara teratur, meningkatkan asupan
      cairan minimal 8 gelas sehari, makan sayur segar, makan nasi beras merah.
      Konstipasi dapat dicegah dengan membiasakan BAB secara teratur, jangan
      menahan BAB, segera BAB ketika ada dorongan, dan tidak mengkonsumsi buah
      apel segar,buah kopi karena dapat meningkatkan konstipasi.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#2"> 2) Kram pada Kaki </span>
      <br />
      Kram pada kaki biasanya timbul pada ibu hamil mulai kehamilan 24 minggu.
      Kadang kala masih terjadi pada saat persalinan sehingga sangat mengganggu
      ibu dalam proses persalinan.
      <br />
      <br />

      <span class="font-weight-bold" id="#1">
        Faktor penyebab belum pasti, namun ada beberapa kemungkinan diantaranya:
      </span>
      <br />
      Kadar kalsium dalam darah rendah, uterus membesar sehingga menekan
      pembuluh darah pelviks, keletihan dan sirkulasi darah ke tungkai bagian
      bawah kurang.
      <br />
      <br />
      <span class="font-weight-bold" id="#1">
        Cara untuk meringankan atau mencegah:
      </span>
      <br />
      Penuhi asuhan kasium yang cukup (susu, sayuran berwarna hijau gelap).
      Olahraga secara teratur, jaga kaki selalu dalam keadaan hangat, mandi air
      hangat sebelum tidur. Meluruskan kaki dan lutut (dorsofleksi), duduk
      dengan meluruskan kaki, tarik jari kaki kearah lutut. Pijat otot-otot yang
      kram. Rendam kaki yang kram dalam air hangat atau gunakan bantal pemanas.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#3"> 3) Sakit Punggung </span>
      <br />
      <span class="font-weight-bold" id="#1">
        Untuk meringankan atau mencegah sakit punggung:
      </span>
      <br />
      Ibu hamil harus memakai BH yang dapat menopang payudara secara benar
      dengan ukuran yang tepat, jangan memakai sepatu atau sandal hak tinggi,
      selalu berusaha mempertahankan postur yang baik, hindari sikap membungkuk,
      tekuk lutut saat mengangkat barang. Lakukan olah raga secara teratur,
      senam hamil atau yoga. Ibu hamil harus berkonsultasi gizi dan asupan makan
      sehari-hari untuk menghindari penambahan berat badan secara berlebuhan.
      Dapat juga melakukan gosok atau pijat punggung.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#4">
        4) Varises pada Kaki atau pada Vulva</span
      >
      <br />
      Varises pada kaki menyebabkan perasaan tidak nyaman pada ibu hamil, biasa
      terjadi pada kehamilan trimester II dan Trimester III. Varises dapat
      terjadi oleh karena peningkatan hormon estrogen sehingga jaringan elastik
      menjadi rapuh. Varises juga terjadi oleh meningkatnya jumlah darah pada
      vena bagian bawah.
      <br />
      <br />
      <span class="font-weight-bold" id="#1">
        Cara meringankan atau mencegah : punggung:
      </span>
      <br />
      Lakukan olahraga secara teratur, hindari duduk atau berdiri dalam jangka
      waktu lama, pakai sepatu dengan telapak yang berisi bantalan, hindari
      memakai pakaian ketat, berbaring dengan kaki ditinggikan serta berbaring
      dengan kaki bersandar didinding.
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
        { text: "Konstipasi/Sembelit", active: false },
        { text: "Kram pada Kaki", active: false },
        { text: "Sakit Punggung", active: false },
        { text: "Varises pada Kaki / pada Vulva", active: false },
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
