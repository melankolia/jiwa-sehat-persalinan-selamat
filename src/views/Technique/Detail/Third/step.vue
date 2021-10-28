<template>
  <div>
    <v-card
      class="mb-3 mx-1"
      elevation="1"
      v-for="(element, i) in steps"
      :key="i"
    >
      <p
        class="text-subtitle-1 font-weight-medium blue-grey--text pt-2 mx-4 mb-2"
      >
        {{ element.title }}
      </p>
      <v-card-title class="py-0 px-2">
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
          <v-img class="ma-2" v-if="element.image" :src="element.image" />
          <v-img class="ma-2" v-if="element.image2" :src="element.image2" />
          <template v-if="element.desc">
            <v-card-subtitle
              class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 px-6"
              :key="`sub1-${i}`"
            >
              {{ element.desc }}
            </v-card-subtitle>
          </template>
          <template v-else-if="element.sub" v-for="(item, i) in element.sub">
            <p
              class="text-h6 text-justify blue-grey--text px-4 my-4"
              :key="`title-${i}`"
            >
              {{ item.title }}
            </p>
            <v-img v-if="item.image" :src="item.image" :key="`image-${i}`" />
            <v-card-subtitle
              class="text-body-2 text-justify font-font-weight-thin blue-grey--text darken-2 px-6 my-2"
              :key="`sub-${i}`"
            >
              {{ item.desc }}
            </v-card-subtitle>
            <v-divider v-if="(i + 1) % 2 != 0" :key="item.title + i" />
          </template>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import MataDanDahi from "@/assets/examples/MataDanDahi.png";
import PipiGembung from "@/assets/examples/PipiGembung.png";
import PipiKempot from "@/assets/examples/PipiKempot.png";
import MulutMencucu from "@/assets/examples/MulutMencucu.png";
import MulutNyengir from "@/assets/examples/MulutNyengir.png";
import Nunduk from "@/assets/examples/Nunduk.png";
import Dongak from "@/assets/examples/Dongak.png";
import Bahu from "@/assets/examples/Bahu.png";
import TanganTekuk from "@/assets/examples/TanganTekuk.png";
import TanganLurus from "@/assets/examples/TanganLurus.png";
import OtotDada from "@/assets/examples/OtotDada.png";
import OtotPunggung from "@/assets/examples/OtotPunggung.png";
import OtotPerut from "@/assets/examples/OtotPerut.png";
import OtotBokong from "@/assets/examples/OtotBokong.png";
import KakiKeBadan from "@/assets/examples/KakiKeBadan.png";
import KakiJauhBadan from "@/assets/examples/KakiJauhBadan.png";

export default {
  data() {
    return {
      steps: [
        {
          image: MataDanDahi,
          title: "Latihan Mata dan dahi",
          desc: `Tarik napas dalam sambil mengencangkan atau mengerutkan mata dan dahi, lalu tahan dan kendurkan pelan-pelan sampai lemas sambil mengeluarkan napas, dilakukan empat kali. Evaluasi manfaatnya dan latih secara rutin 3-4 kali perhari.`,
          expand: false,
        },
        {
          title: "Latihan Pipi",
          expand: false,
          sub: [
            {
              image: PipiGembung,
              title: "Pipi digembung",
              desc: `Tarik napas dalam, gembungkan mulut, tahan, tiup pelan-pelan sampai pipi kembali seperti semula. Ulangi sampai empat kali, evaluasi manfaatnya dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              image: PipiKempot,
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
              image: MulutMencucu,
              title: "Mencucu",
              desc: `Tarik napas dalam, tahan sambil mulut mencucu, keluarkan napas pelan-pelan dan mulut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              image: MulutNyengir,
              title: "Mulut Menyengir",
              desc: `Tarik napas dalam sambil menaruh lidah di langit-langit dan tarik ke belakang sekuatnya, tahan lalu lepaskan pelan-pelan sambil mengeluarkan napas, dan mulut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
            },
          ],
        },
        {
          image: Nunduk,
          image2: Dongak,
          title: "Latihan Tengkuk/Leher",
          expand: false,
          desc: `Dagu ditempelkan ke dada, lalu tarik napas dalam sampai menengadah sejauh-jauhnya ke belakang, tahan sebentar lalu keluarkan napas pelan-pelan sambil mengembalikan posisi dagu menempel ke dada. Ulangi sampai empat kali, evaluasi manfaatnya dan lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          image: Bahu,
          title: "Latihan Bahu",
          expand: false,
          desc: `Tarik napas dalam sambil mengangkat bahu sampai menyentuh telinga, tahan sebentar lalu keluarkan napas sambil menurunkan bahu ke posisi semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          title: "Latihan Tangan",
          expand: false,
          sub: [
            {
              image: TanganTekuk,
              title: "Kedua Tangan di Tekuk ke Arah Badan",
              desc: `Kedua tangan diletakkan di atas pangkuan, tarik napas dalam sambil mengepalkan telapak tangan dan menekuk sambil mengencangkannya, tahan sebentar lalu keluarkan napas sambil mengendurkan tangan dan membuka telapak tangan dan meletakkannya di atas pangkuan. Ulangi sampai empat kali, lakukan secara rutin 3-4 kali perhari.`,
            },
            {
              image: TanganLurus,
              title: "Kedua Tangan di Luruskan Menjauh dari Badan",
              desc: `Kedua tangan diletakkan di atas pangkuan, tarik napas dalam sambil meluruskan tangan seperti mendorong pintu sambil mengencangkannya, tahan sebentar lalu keluarkan napas sambil mengendurkan tangan dan meletakkannya di atas pangkuan, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari. `,
            },
          ],
        },
        {
          image: OtotDada,
          title: "Latihan Otot Dada",
          expand: false,
          desc: `Tarik napas dalam sambil membusungkan dada tahan sebentar, kemudian keluarkan perlahan sampai dada kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya lakukan rutin 3-4 kali perhari.`,
        },
        {
          image: OtotPunggung,
          title: "Latihan Meregangkan Otot \n Punggung",
          expand: false,
          desc: `Tarik napas dalam sambil membusungkan dada dan melengkungkan punggung ke belakang, tahan sebentar kemudian keluarkan napas perlahan sambil mengendurkan punggung seperti posisi semula, ulangi sampai empat kali. Evaluasi manfaatnya, lakukan secara rutin 3-4 kali perhari.`,
        },
        {
          image: OtotPerut,
          title: "Latihan Otot Perut",
          expand: false,
          desc: `Tarik napas dalam sambil menggembungkan perut, tahan sebentar kemudian keluarkan napas sambil mengendurkan perut kembali seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, dan latih secara rutin 3 sampai 4 kali per hari.`,
        },
        {
          image: OtotBokong,
          title: "Latihan otot bokong",
          expand: false,
          desc: `Tarik napas dalam sambil mengencangkan bokong seperti menjepit kertas, tahan sebentar kemudian keluarkan napas sambil mengendurkan bokong seperti semula, ulangi sampai empat kali. Evaluasi manfaatnya, dan latih secara rutin 3 sampai 4 kali per hari.`,
        },
        {
          title: "Latihan otot kaki",
          expand: false,
          sub: [
            {
              image: KakiKeBadan,
              title: `Telapak kaki mengarah ke badan`,
              desc: `Luruskan kedua kaki sambil duduk, tarik napas dalam sambil menarik telapak kaki kearah badan dan kedua berusaha menggapai ibu jari kaki, tahan sebentar, kemudian keluarkan napas pelan-pelan sambil mengendurkan kaki, telapak kaki dan tangan, ulangi sampai empat kali. Evaluassi manfaatnya, dan latih secara rutin 3 sampai 4 kali perhari.`,
            },
            {
              image: KakiJauhBadan,
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
