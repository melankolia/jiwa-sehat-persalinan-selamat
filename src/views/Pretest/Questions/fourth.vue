<template>
  <div class="pb-10 px-10">
    <div class="d-flex flex-column">
      <p class="text-h5">Question 4</p>
      <p class="text-body-1 font-weight-regular">
        How often do you typically use our service ?
      </p>
      <div class="my-12 checkbox-container">
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.daily }"
        >
          <v-checkbox v-model="selected.daily" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium"> Daily </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.onceAweek }"
        >
          <v-checkbox
            v-model="selected.onceAweek"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> Once a Week </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.onceAmonth }"
        >
          <v-checkbox
            v-model="selected.onceAmonth"
            hide-details
            color="secondary"
          >
            <template #label>
              <span class="text-body-1 font-weight-medium"> Once a Month </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.every23 }"
        >
          <v-checkbox v-model="selected.every23" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium">
                Every 2-3 Months
              </span>
            </template>
          </v-checkbox>
        </div>
        <div
          class="d-flex flex-column justify-center background-div px-4 py-5"
          :class="{ selected: selected.less }"
        >
          <v-checkbox v-model="selected.less" hide-details color="secondary">
            <template #label>
              <span class="text-body-1 font-weight-medium">
                Less than 5-a years
              </span>
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
        daily: false,
        onceAweek: false,
        onceAmonth: false,
        every23: false,
        less: false,
      },
    };
  },
  watch: {
    selected: {
      handler(val) {
        console.log(val);
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
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.28);
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
