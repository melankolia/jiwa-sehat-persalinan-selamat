<template>
  <div class="d-flex flex-column pa-4 pink accent-1">
    <v-card class="pt-6 px-6 white rounded-lg">
      <v-form
        id="form"
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="handleSubmit"
      >
        <p class="text-h5 font-weight-bold pink--text text--accent-1">
          Kuisioner Post-test
        </p>
        <v-divider class="mb-4" />
        <Questions
          :item="item"
          :answerList="answerList"
          v-for="(item, index) in questions"
          :key="index"
          :rules="[(v) => v == 0 || !!v || 'Jawaban diperlukan !']"
        />
        <v-divider class="mt-4" />
        <v-card-actions class="py-3">
          <v-spacer />
          <v-btn text color="error" @click="handleBack">Cancel</v-btn>
          <v-btn
            text
            color="secondary"
            type="submit"
            form="form"
            :disabled="!valid"
            :loading="formLoading"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
    <DialogCompleted
      :visible="visible"
      title="Terima Kasih !"
      :description="dialogDescription"
      :onClose="handleDialogClose"
    >
      <template #action>
        <v-btn
          block
          outlined
          class="mt-10"
          color="white"
          @click="handleDialogClose"
          >OK</v-btn
        >
      </template>
    </DialogCompleted>
  </div>
</template>

<script>
const Questions = () => import("@/views/Pretest/Questions");
const DialogCompleted = () => import("@/components/Dialog/Completed");

import MainService from "@/services/resources/main.service";

export default {
  components: {
    Questions,
    DialogCompleted,
  },
  data() {
    return {
      questions: [
        {
          text:
            "1. Kekhawatiran, mengantisipasi yang terburuk, antisipasi takut, cepat marah.",
          answer: null,
        },
        {
          text:
            "2. Perasaan tegang, respon kaget, gemetar, mudah menangis, perasaan gelisah, ketidakmampuan untuk bersantai.",
          answer: null,
        },
        {
          text:
            "3. Gelap, orang asing, ditinggal sendirian, hewan, lalu lintas, keramaian.",
          answer: null,
        },
        {
          text:
            "4. Kesulitan untuk tertidur, terbangun pada malam hari, tidur tidak memuaskan dan kelelahan saat bangun tidur, mimpi buruk, teror malam.",
          answer: null,
        },
        {
          text: "5. Sulit berkonsentrasi, mudah lupa",
          answer: null,
        },
        {
          text:
            "6. Hilangnya minat, berkurangnya kesenangan pada hobi, sedih, perasaan tidak menyenangkan sepanjang hari, bangun awal.",
          answer: null,
        },
        {
          text:
            "7. Rasa sakit dan nyeri, berkedut, kekakuan, gertakan gigi, suara gemetar, kedutan otot.",
          answer: null,
        },
        {
          text:
            "8. Perasaan ditusuk-tusuk, sensasi panas-dingin, penglihatan kabur, muka erah dan pucat serta merasa lemah.",
          answer: null,
        },
        {
          text:
            "9. Takikardi, menggigil, nyeri dada, denyut nadi mengeras, pingsan.",
          answer: null,
        },
        {
          text:
            "10. Rasa tertekan di dada, perasaan tercekik, tersedak, menarik napas panjang, nafas yang sulit.",
          answer: null,
        },
        {
          text:
            "11. Sulit menelan, perut kembung, kepanasan, perut sebah, mual, muntah, kehilangan berat badan, sembelit.",
          answer: null,
        },
        {
          text: "12. Sering kencing, tidak dapat menahan kencing.",
          answer: null,
        },
        {
          text:
            "13. Mulut kering, mudah berkeringat, muka merah, pucat, pusing dan sakit kepala, rambut rontok.",
          answer: null,
        },
        {
          text:
            "14. Gelisah, mondar-mandir, jari-jari gemetar, mengkerutkan dahi atau kening, muka tegang, napas pendek dan cepat, wajah pucat, sering menelan.",
          answer: null,
        },
      ],
      answerList: [
        { text: "(0) Tidak ada gejala (keluhan)", value: 0 },
        { text: "(1) Satu dari gejala yang ada", value: 1 },
        { text: "(2) Dua/separuh dari gejala yang ada", value: 2 },
        { text: "(3) Lebih dari separuh gejala yang ada", value: 3 },
        { text: "(4) Semua gejala ada", value: 4 },
      ],
      id: this.$route.params?.secureId,
      backLoading: false,
      formLoading: false,
      valid: false,

      // Dialog Properties
      visible: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleDialogClose() {
      this.$router.replace("/");
      this.visible = false;
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        let payload = {};
        this.questions.map((e, i) => {
          payload = { ...payload, [`question${i + 1}`]: e.answer };
        });
        this.insertData(this.id, payload);
      }
    },
    insertData(id, payload) {
      this.formLoading = true;
      MainService.insertPosttest(id, payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.visible = true;
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.formLoading = false));
    },
  },
  computed: {
    dialogDescription() {
      return `Terima kasih telah meluangkan waktu anda menggunakan aplikasi ini. Partisipasi Anda dalam menggunakan aplikasi dan mengisi kuesioner ini sangat
          membantu saya untuk menyelesaikan penelitian`;
    },
  },
};
</script>

<style scoped></style>
