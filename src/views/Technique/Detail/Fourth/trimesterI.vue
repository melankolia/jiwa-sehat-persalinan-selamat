<template>
  <div class="d-flex flex-column px-12 py-6">
    <img
      src="@/assets/trimester-1.jpg"
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
        Adaptasi ketidaknyamanan pada kehamilan trimester I
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
      <span class="font-weight-bold" id="#1">
        1) Mual Muntah pada Pagi Hari
      </span>
      <br />
      Mual kadang-kadang sampai muntah yang terjadi pada ibu hamil biasanya
      terjadi pada pagi hari sehingga disebut morning sickness meskipun bisa
      juga terjadi pada siang atau sore hari.
      <br />
      <br />

      <span class="font-weight-bold">
        Ada beberapa anggapan bahwa mual muntah dapat disebabkan oleh beberapa
        hal diantaranya:
      </span>
      <br />
      Perubahan hormonal, adaptasi psikologis/faktor emosional, faktor
      neurologis, gula darah rendah mungkin tidak makan dalam beberapa jam,
      kelebihan asam lambung, serta peristaltik lambat.
      <br />
      <br />

      <span class="font-weight-bold">
        Upaya yang dilakukan untuk meringankan atau mencegah:
      </span>
      <br />
      Pada pagi hari sebelum bangun dari tempat tidur,makan biskuit atau roti
      dan minum segelas air. Ibu hamil juga harus menghindari makanan pedas dan
      berbau tajam. Ibu hamil dianjurkan untuk makan sedikit tapi sering, cara
      ini dapat mempertahankan kadar gula darah. Ibu hamil sangat dianjurkan
      makan permen atau minum manis (minum jus buah) atau minum susu sebelum
      tidur atau pada saat bangun tidur dapat mencegah hipoglikemi. Upayakan
      mengurangi diet lemak, diet tinggi lemak dapat memperparah mual muntah,
      hindari makanan yang digoreng. Saat bangun pagi atau sore hari secara
      perlahan bangun dari tempat tidur, dan hindari gerakan mendadak.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#2">
        2) Sering BAK (Buang Air Kecil)
      </span>
      <br />
      Ibu hamil trimester I sering mengalami keluhan sering BAK. Apabila sering
      BAK ini terjadi pada malam hari akan mengganggu tidur sehingga ibu hamil
      tidak dapat tidur dengan nyenyak.
      <br />
      <br />

      <span class="font-weight-bold"> Faktor penyebab: </span>
      <br />
      Uterus membesar sehingga menekan kandung kemih, ekskresi sodium (Natrium)
      yang meningkat, serta perubahan fisiologis ginjal sehingga produksi urin
      meningkat.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah: </span>
      <br />
      Upayakan untuk tidak menahan BAK, kosongkan kandung kencing pada saat
      terasa ingin BAK. Perbanyak minum pada siang hari untuk menjaga
      keseimbangan hidrasi. Apabila BAK pada malam hari tidak mengganggu tidur
      maka tidak dianjurkan mengurangi minum dimalam hari. Ibu hamil dianjurkan
      untuk membatasi minum yang mengandung diuretiksepertiteh, kopi, cola
      dengan coffeine. Saat tidur posisi berbaring miring kekiri dengan kaki
      ditinggikan adalah lebih baik. Ibu hamil harus secara rutin membersihkan
      dan mengeringkan alat kelamin setiap selesai BAK untuk mencegah infeksi
      saluran kemih.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#3"> 3) Pica atau Ngidam </span>
      <br />
      Pica atau ngidam sering terjadi pada ibu hamil trimester I tetapi bisa
      juga dialami oleh ibu hamil sampai akhir kehamilan. Ibu hamil sering
      menginginkan makanan yang aneh-aneh, misalnya yang terlalu, atau pedas.
      Keinginan ibu hamil seperti keinginan yang harus dipenuhi, kalau tidak
      dapat dipenuhi, ibu hamil merasa sangat kecewa, terkadang sampai menangis.
      <br />
      <br />

      <span class="font-weight-bold"> Faktor Penyebab :</span>
      <br />
      Mengidam berkaitan dengan persepsi atau anggapan individu wanita hamil
      tentang sesuatu yang menurutnya bisa mengurangi rasa mual dan muntah. Pada
      ibu hamil indra pengecap menjadi lebih tumpul atau kurang perasa sehingga
      selalu mencari makanan yang merangsang.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah : </span>
      <br />
      Menjelaskan tentang bahaya makan makanan yang tidak sehat. Mengatakan pada
      ibu hamil, tidak perlu khawatir apabila makanan yang diinginkan adalah
      makanan yang bergizi.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#4"> 4) Kelelahan </span>
      <br />
      Ibu hamil seringkali merasakan cepat lelah sehingga mengganggu aktifitas
      sehari-hari. Diduga hal ini berkaitan dengan faktor metabolisme yang
      rata-rata menurun pada ibu hamil. Sangat dianjurkan makan makanan yang
      seimbang, tidur dan istirahat yang cukup, lakukan tidur siang. Ibu hamil
      harus mengatur aktifitas sehari-hari untuk mendapatkan istirahat ekstra.
      Ibu hamil juga dianjurkan untuk melakukan olahraga atau senam secara
      teratur.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#5"> 5) Keputihan </span>
      <br />
      Ibu hamil sering mengeluh mengeluarkan lendir dari vagina yang lebih
      banyak sehingga membuat perasaan tidak nyaman karena celana dalam sering
      menjadi basah sehingga harus sering ganti celana dalam. Kejadian keputihan
      ini bisa terjadi pada ibu hamil trimester pertama, kedua maupun ketiga.
      <br />
      <br />

      <span class="font-weight-bold"> Penyebab Utama : </span>
      <br />
      Meningkatnya kadar hormon estrogen pada ibu hamil trimester I dapat
      menimbulkan produksi lendir servix meningkat.
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah : </span>
      <br />
      Jaga kebersihan dengan mandi setiap hari. Bersihan alat kelamin dan
      keringkan setiap sehabis BAB atau BAK. Membersihkan alat kelamin (cebok)
      dari arah depan ke belakang. Ganti celana dalam apabila basah. Pakai
      celana dalam yang terbuat dari katun sehingga menyerap keringat dan mebuat
      sirkulasi udara yang baik.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#6">
        6) Palpitasi/ Rasa Berdebar-debar
      </span>
      <br />
      Palpitasi atau rasa berdebar-debar sering dirasakan oleh ibu hamil pada
      awal kehamilan. Pada ibu hamil terjadi peningkatan kerja jantung karena
      jantung mempunyai 50 % darah tambahan yang harus dipompakan melalui aorta
      setiap menit. Peningkatan curah jantung ini mencapai puncaknya pada akhir
      trimester II dan menurun kembali seperti sebelum hamil beberapa minggu
      sebelum melahirkan. Pada ibu hamil yang tidak mempunyai keluhan jantung,
      hal ini tidak perlu dikawatirkan., bidan harus dapat menjelaskan bahwa hal
      ini normal terjadi pada kehamilan, dan akan menghilang pada akhir
      kehamilan.
      <v-divider class="my-4"></v-divider>

      <span class="font-weight-bold" id="#7">7) Sakit Kepala </span>
      <br />
      Ibu hamil sering mengeluh sakit kepala, keluhan ini bisa dirasakan ibu
      hamil baik trimester I, trimester II maupun trimester III.
      <br />
      <br />

      <span class="font-weight-bold"> Faktor penyebab: </span>
      <br />
      Kelelahan, ketegangan otot, ketegangan pada otot mata, kongesti
      (berlebihan cairan tubuh).
      <br />
      <br />

      <span class="font-weight-bold"> Cara meringankan atau mencegah : </span>
      <br />
      Relaksasi untuk meringankan ketegangan, pijat leher dan otot bahu, tidur
      cukup pada malam hari dan istirahat cukup pada siang hari. Hindari hal
      yang dapat menyebabkan sakit kepala (mata tegang, ruangan sumpek, asap
      rokok, lingkungan sibuk). Lakukan jalan santai di udara segar. Istirahat
      pada tempat yang tenang dan rileks. Lakukan meditasi atau yoga.
      <br />
      <br />
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
        { text: "Mual Muntah pada Pagi Hari", active: false },
        { text: "Sering BAK", active: false },
        { text: "Pica atau Ngidam", active: false },
        { text: "Kelelahan", active: false },
        { text: "Keputihan", active: false },
        { text: "Palpitasi/ Rasa Berdebar-debar", active: false },
        { text: "Sakit Kepala", active: false },
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
