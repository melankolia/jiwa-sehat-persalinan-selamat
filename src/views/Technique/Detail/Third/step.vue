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
          {{ element.title }}
        </v-card-title>
        <v-spacer />
        <v-btn
          @click="element.expand = !element.expand"
          color="primary"
          text
          rounded
        >
          <v-icon dark medium>
            {{ element.expand ? "expand_more" : "chevron_right" }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-expand-transition>
        <div v-show="element.expand">
          <v-divider />
          <template v-if="element.desc">
            <v-card-subtitle class="blue-grey--text">
              {{ element.desc }}
            </v-card-subtitle>
          </template>
          <template v-else-if="element.sub" v-for="(item, i) in element.sub">
            <v-card-title :key="i">
              <v-card-title class="text-h6 blue-grey--text">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle class="blue-grey--text">
                {{ item.desc }}
              </v-card-subtitle>
            </v-card-title>
            <v-divider v-if="(i + 1) % 2 != 0" :key="item.title + i" />
          </template>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          title: "Latihan Mata dan dahi",
          desc: `Tarik napas dalam sambil mengencangkan atau mengerutkan mata dan dahi, lalu tahan dan kendurkan pelan-pelan sampai lemas sambil mengeluarkan napas, dilakukan empat kali. Evaluasi manfaatnya dan latih secara rutin 3-4 kali perhari.`,
          expand: false,
        },
        {
          title: "Latihan Pipi",
          expand: false,
          sub: [
            {
              title: "Pipi digembung",
              desc: `Tarik napas dalam, gembungkan mulut, tahan, tiup pelan-pelan sampai pipi kembali seperti semula. Ulangi sampai empat kali, evaluasi manfaatnya dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              title: "Pipi dikempotkan",
              desc: `Tarik napas dalam, kempotkan pipi, tahan, tiup pelan-pelan sampai pipi kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
          ],
        },
        {
          title: "Mulut",
          expand: false,
          sub: [
            {
              title: "Mencucu",
              desc: `Tarik napas dalam, tahan sambil mulut mencucu, keluarkan napas pelan-pelan dan mulut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              title: "Mulut Menyengir",
              desc: `Tarik napas dalam sambil menaruh lidah di langit-langit dan tarik ke belakang sekuatnya, tahan lalu lepaskan pelan-pelan sambil mengeluarkan napas, dan mulut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
            },
          ],
        },
        {
          title: "Latihan Tengkuk/Leher",
          expand: false,
          desc: `Dagu ditempelkan ke dada, lalu tarik napas dalam sampai menengadah sejauh-jauhnya ke belakang, tahan sebentar lalu keluarkan napas pelan-pelan sambil mengembalikan posisi dagu menempel ke dada. Ulangi sampai empat kali, evaluasi manfaatnya dan lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          title: "Latihan Bahu",
          expand: false,
          desc: `Tarik napas dalam sambil mengangkat bahu sampai menyentuh telinga, tahan sebentar lalu keluarkan napas sambil menurunkan bahu ke posisi semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          title: "Latihan Tangan",
          expand: false,
          sub: [
            {
              title: "Kedua Tangan di Tekuk ke Arah Badan",
              desc: `Kedua tangan diletakkan di atas pangkuan, tarik napas dalam sambil mengepalkan telapak tangan dan menekuk sambil mengencangkannya, tahan sebentar lalu keluarkan napas sambil mengendurkan tangan dan membuka telapak tangan dan meletakkannya di atas pangkuan. Ulangi sampai empat kali, lakukan secara rutin 3-4 kali perhari.`,
            },
            {
              title: "Kedua Tangan di Luruskan Menjauh dari Badan",
              desc: `Kedua tangan diletakkan di atas pangkuan, tarik napas dalam sambil meluruskan tangan seperti mendorong pintu sambil mengencangkannya, tahan sebentar lalu keluarkan napas sambil mengendurkan tangan dan meletakkannya di atas pangkuan, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari. `,
            },
          ],
        },
        {
          title: "Latihan Otot Dada",
          expand: false,
          desc: `Tarik napas dalam sambil membusungkan dada tahan sebentar, kemudian keluarkan perlahan sampai dada kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya lakukan rutin 3-4 kali perhari.`,
        },
        {
          title: "Latihan Meregangkan Otot \n Punggung",
          expand: false,
          desc: `Tarik napas dalam sambil membusungkan dada dan melengkungkan punggung ke belakang, tahan sebentar kemudian keluarkan napas perlahan sambil mengendurkan punggung seperti posisi semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          title: "Latihan Otot Perut",
          expand: false,
          desc: `Tarik napas dalam sambil menggembungkan perut, tahan sebentar kemudian keluarkan napas sambil mengendurkan perut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, dan latih secara rutin 3 sampai 4 kali per hari.`,
        },
        {
          title: "Latihan otot bokong",
          expand: false,
          desc: `Tarik napas dalam sambil mengencangkan bokong seperti menjepit kertas, tahan sebentar kemudian keluarkan napas sambil mengendurkan bokong seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, dan latih secara rutin 3 sampai 4 kali per hari.`,
        },
        {
          title: "Latihan otot kaki",
          expand: false,
          sub: [
            {
              title: `Telapak kaki mengarah ke badan`,
              desc: `Luruskan kedua kaki sambil duduk, tarik napas dalam sambil menarik telapak kaki kearah badan dan kedua berusaha menggapai ibu jari kaki, tahan sebentar, kemudian keluarkan napas pelan-pelan sambil mengendurkan kaki, telapak kaki dan tangan, ulangi sampai empat kali. Evaluassi manfaatnya, dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              title: `Telapak kaki menjauh dari badan`,
              desc: `Luruskan kedua kaki sambil duduk, tarik napas dalam sambil meluruskan telapak kaki menjauh dari badan, tahan sebentar, kemudian keluarkan napas pelan-pelan sambil mengendurkan kaki seperti semula, ulangi sampai empat kali.`,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
