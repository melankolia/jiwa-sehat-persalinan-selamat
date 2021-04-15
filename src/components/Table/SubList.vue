<template>
  <tr>
    <td style="width: 30%">
      <span class="font-weight-medium">{{ title }}</span>
    </td>
    <td>
      <v-btn
        v-if="available"
        icon
        class="float-right"
        @click="click"
        :class="{ expand: show }"
      >
        <v-icon>expand_more</v-icon>
      </v-btn>
      <slot name="no-data" v-else>
        <span class="mb-0 text-subtitle">No Data</span>
      </slot>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: { type: String, required: false, default: "" },
    show: { type: Boolean, required: false, default: false },
    available: { type: Boolean, required: false, default: false },
    click: { type: Function, required: false },
  },
};
</script>

<style lang="scss" scoped>
.v-btn.expand .v-icon {
  transform: rotate(-180deg);
}
</style>
