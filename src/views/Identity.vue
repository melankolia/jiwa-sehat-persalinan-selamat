<template>
  <div class="d-flex flex-column pa-10" style="height: 78vh">
    <v-form
      id="check-form"
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmit()"
    >
      <v-text-field
        v-model="initialName"
        prepend-icon="person"
        label="Inisial Nama"
        color="secondary"
        filled
        rounded
        :rules="rules"
      />
      <v-text-field
        v-model="age"
        prepend-icon="people"
        label="Usia (Tahun)"
        color="secondary"
        filled
        rounded
        :rules="rules"
        type="number"
      />
      <v-text-field
        v-model="gestationalAge"
        prepend-icon="pregnant_woman"
        label="Usia Kandungan (Minggu)"
        color="secondary"
        filled
        rounded
        :rules="rules"
        type="number"
      />
      <v-select
        v-model="education"
        :items="educationList"
        prepend-icon="school"
        label="Pendidikan Terakhir"
        color="secondary"
        filled
        rounded
        :rules="rules"
      />
      <v-select
        v-model="salaryRange"
        :items="salaryRangeList"
        prepend-icon="paid"
        label="Tingkat Pendapatan"
        color="secondary"
        filled
        rounded
        :rules="rules"
        item-text="name"
        item-value="value"
      />
    </v-form>
    <v-divider />
    <div class="d-flex flex-row flex-grow-1 justify-end align-end">
      <v-btn
        @click="handleBack"
        class="py-5 px-6 mx-2"
        color="pink accent-1"
        outlined
        rounded
      >
        <span class="button font-weight-medium"> Cancel </span>
      </v-btn>
      <v-btn
        form="check-form"
        class="py-5 px-6"
        type="submit"
        rounded
        depressed
        color="pink accent-1"
        :loading="loading"
        dark
      >
        <span class="white--text button font-weight-medium"> Simpan </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { AGREEMENT, PRETEST } from "@/router/name.types";
import Service from "@/services/resources/main.service";

export default {
  data() {
    return {
      valid: false,
      rules: [(v) => !!v || "Field Harus Diisi!"],
      educationList: ["SD", "SMP", "SMA", "D3", "S1"],
      salaryRangeList: [
        {
          name: "< 3 Juta",
          value: "< 3 Juta",
        },
        {
          name: ">= 3 Juta",
          value: ">= 3 Juta",
        },
      ],

      // Form properties
      initialName: null,
      age: null,
      gestationalAge: null,
      education: null,
      salaryRange: null,
      loading: false,
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: AGREEMENT });
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        const payload = {
          initialName: this.initialName,
          age: this.age,
          gestationalAge: this.gestationalAge,
          education: this.education,
          salaryRange: this.salaryRange,
        };
        this.createUser(payload);
      }
    },
    async createUser(payload) {
      this.loading = true;
      Service.createResponden(payload)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.$router.push({ name: PRETEST.COVER });
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style>
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: rgb(250 128 171 / 5%) !important;
}
</style>
