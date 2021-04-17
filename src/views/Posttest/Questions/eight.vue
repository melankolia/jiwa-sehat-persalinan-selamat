<template>
  <div class="pb-1 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Pertanyaan 8</p>
      <p class="text-h6 font-weight-regular">Gejala sensorik</p>
      <p class="text-body-1 font-weight-regular">
        Perasaan ditusuk-tusuk, sensasi panas-dingin, penglihatan kabur, muka
        merah dan pucat serta merasa lemah.
      </p>
      <div class="my-6 checkbox-container">
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: answer.question8 == 0 }"
        >
          <v-checkbox
            v-model="answer.question8"
            :value="0"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> 0 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: answer.question8 == 1 }"
        >
          <v-checkbox
            v-model="answer.question8"
            :value="1"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> 1 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: answer.question8 == 2 }"
        >
          <v-checkbox
            v-model="answer.question8"
            :value="2"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> 2 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: answer.question8 == 3 }"
        >
          <v-checkbox
            v-model="answer.question8"
            :value="3"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> 3 </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: answer.question8 == 4 }"
        >
          <v-checkbox
            v-model="answer.question8"
            :value="4"
            hide-details
            color="secondary"
          >
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
  props: {
    answer: { type: Object, required: true, default: () => {} },
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
