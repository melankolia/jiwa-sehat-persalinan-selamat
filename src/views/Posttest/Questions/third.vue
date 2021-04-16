<template>
  <div class="pb-1 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Pertanyaan 3</p>
      <p class="text-h6 font-weight-regular">Ketakutan</p>
      <p class="text-body-1 font-weight-regular">
        Gelap, orang asing, ditinggal sendirian, hewan, lalu lintas, keramaian.
      </p>
      <div class="my-6 checkbox-container">
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.one }"
        >
          <v-checkbox v-model="selected.one" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium"> 1 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.two }"
        >
          <v-checkbox v-model="selected.two" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium"> 2 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.three }"
        >
          <v-checkbox v-model="selected.three" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium"> 3 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.four }"
        >
          <v-checkbox v-model="selected.four" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium"> 4 </span>
            </template>
          </v-checkbox>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: {
        one: false,
        two: false,
        three: false,
        four: false,
      },
    };
  },
  watch: {
    selected: {
      handler(val) {
        this.$emit("answer", val);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.v-input--selection-controls {
  margin-top: 0 !important;
}

.checkbox-container {
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.28);
}

/* .background-div {
  border: 2px solid rgba(0, 0, 0, 0.28);
} */

.selected {
  background-color: #1880ec33;
}

.background-div:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.background-div:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
