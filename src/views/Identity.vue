<template>
  <div class="d-flex flex-column pa-10" style="height: 80vh">
    <v-form
      id="check-form"
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="onSubmit()"
    >
      <v-text-field
        prepend-icon="person"
        label="Inisial Nama"
        color="secondary"
        filled
        rounded
        :rules="rules"
      />
      <v-text-field
        prepend-icon="people"
        label="Usia"
        color="secondary"
        filled
        rounded
        :rules="rules"
        type="number"
      />
      <v-text-field
        prepend-icon="pregnant_woman"
        label="Usia Kandungan"
        color="secondary"
        filled
        rounded
        :rules="rules"
      />
      <v-text-field
        prepend-icon="school"
        label="Pendidikan Terakhir"
        color="secondary"
        filled
        rounded
        :rules="rules"
      />
      <v-text-field
        prepend-icon="paid"
        label="Tingkat Pendapatan"
        color="secondary"
        filled
        rounded
        :rules="rules"
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
      >
        <span class="white--text button font-weight-medium"> Simpan </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { AGREEMENT } from "@/router/name.types";

export default {
  data() {
    return {
      valid: false,
      rules: [(v) => !!v || "Field Harus Diisi!"],
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({ name: AGREEMENT });
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log("VALIDATE");
      }
    },
  },
};
</script>

<style>
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: rgb(250 128 171 / 5%) !important;
}
</style>
