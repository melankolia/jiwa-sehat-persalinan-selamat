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
          Kuisioner Pre-test
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
    <TestResult
      :visible="visible"
      title="Hasil Screening Pretest"
      :description="dialogDescription"
      :onClose="handleDialogClose"
      :color="checkColor"
      :icon="checkIcon"
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
    </TestResult>
  </div>
</template>

<script>
const Questions = () => import("@/views/Pretest/Questions");
const TestResult = () => import("@/components/Dialog/TestResult");

import { TECHNIQUE } from "@/router/name.types";
import MainService from "@/services/resources/main.service";

export default {
  components: {
    Questions,
    TestResult,
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
      visible: false,
      totalPretest: 0,
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleSubmit() {
      if (this.$refs.form.validate()) {
        let payload = {};
        this.questions.map((e, i) => {
          payload = { ...payload, [`question${i + 1}`]: e.answer };
        });
        const Total = Object.values(payload).reduce((a, b) => a + b);
        this.insertData(this.id, payload, Total);
      }
    },
    insertData(id, payload, Total) {
      this.formLoading = true;
      MainService.insertPretest(id, payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.totalPretest = Total;
            this.visible = true;
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.formLoading = false));
    },
    handleDialogClose() {
      this.$router.push({
        name: TECHNIQUE.PREGNANT_INFO,
        params: { secureId: this.id },
      });
      this.visible = false;
    },
  },
  computed: {
    dialogDescription() {
      if (this.totalPretest < 14) return "Tidak ada kecemasan";
      else if (this.totalPretest >= 14 && this.totalPretest <= 20)
        return "Kecemasan ringan";
      else if (this.totalPretest >= 21 && this.totalPretest <= 27)
        return "Kecemasan sedang";
      else if (this.totalPretest >= 28 && this.totalPretest <= 41)
        return "Kecemasan berat";
      else if (this.totalPretest >= 42) return "Panik";
      return "Tidak ada kecemasan";
    },
    checkColor() {
      if (this.totalPretest < 14) return "pink accent-1";
      else if (this.totalPretest >= 14 && this.totalPretest <= 20)
        return "blue lighten-1";
      else if (this.totalPretest >= 21 && this.totalPretest <= 27)
        return "yellow darken-3";
      else if (this.totalPretest >= 28 && this.totalPretest <= 41)
        return "pink";
      else if (this.totalPretest >= 42) return "red";
      return "pink accent-1";
    },
    checkIcon() {
      if (this.totalPretest < 14) return "sentiment_very_satisfied";
      else if (this.totalPretest >= 14 && this.totalPretest <= 20)
        return "sentiment_satisfied_alt";
      else if (this.totalPretest >= 21 && this.totalPretest <= 27)
        return "sentiment_neutral";
      else if (this.totalPretest >= 28 && this.totalPretest <= 41)
        return "sentiment_dissatisfied";
      else if (this.totalPretest >= 42) return "sentiment_very_dissatisfied";
      return "sentiment_very_satisfied";
    },
  },
};
</script>

<style scoped></style>
