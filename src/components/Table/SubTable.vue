<template>
  <tr>
    <td colspan="100%" class="pa-4 secondary">
      <v-card>
        <v-data-table
          v-if="isDataTable"
          :headers="headers"
          :options.sync="options"
          :items="lists"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'first_page',
            lastIcon: 'last_page',
          }"
        >
          <template v-slot:[`item.answer`]="{ item }">
            {{ item.answer || "-" }}
          </template>
        </v-data-table>
      </v-card>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    headers: { type: Array, required: false, default: () => [] },
    lists: { type: Array, required: false, default: () => [] },
    isDataTable: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      options: {},
    };
  },
};
</script>

<style></style>
