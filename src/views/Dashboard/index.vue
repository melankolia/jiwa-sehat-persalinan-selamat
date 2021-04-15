<template>
  <div>
    <v-content>
      <div class="d-flex flex-grow-1 flex-column my-10 mx-8">
        <p class="text-h5 font-weight-bold secondary--text">
          List Data Responden JSPS
        </p>
        <v-divider class="my-6 divider-color" />
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
              clearable
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="dataResponden"
            :loading="loading"
            :server-items-length="totalItem"
            :options.sync="options"
            item-key="no"
            loading-text="Loading... Please wait"
            :footer-props="{
              'items-per-page-options': rowsPerPageItems,
              showFirstLastPage: true,
              firstIcon: 'first_page',
              lastIcon: 'last_page',
            }"
            calculate-widths
            color="secondary"
          >
            <template #item.initialName="{ item }">
              <router-link
                :to="{
                  name: dashboardDetail,
                  params: { secureId: item.secureId },
                }"
              >
                <span class="secondary--text">
                  {{ item.initialName }}
                </span>
              </router-link>
            </template>
          </v-data-table>
        </v-card>
        <div class="d-flex flex-row my-4 justify-end">
          <v-btn
            :loading="downloadLoading"
            @click="handleDownload"
            class="pa-5"
            color="secondary"
          >
            <span class="font-weight-medium">Download Excel</span>
            <v-icon right dark>vertical_align_bottom</v-icon>
          </v-btn>
        </div>
      </div>
    </v-content>
    <Snackbar
      :show="visible"
      :message="message"
      :color="color"
      @handleClose="visible = $event"
    />
  </div>
</template>

<script>
const Snackbar = () => import("@/components/Snackbar");
import { DASHBOARD } from "@/router/name.types";

export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      dashboardDetail: DASHBOARD.DETAIL,
      // Data Table Properties
      headers: [
        { text: "No", value: "no", sortable: false },
        { text: "Initial Name", value: "initialName" },
        { text: "Umur", value: "age" },
        { text: "Usia Kandungan", value: "gestationalAge" },
        { text: "Pendidikan", value: "education" },
        { text: "Tingkat Pendapatan", value: "salaryRange" },
        { text: "Pre-test", value: "pretestValue" },
        { text: "Post-test", value: "postTestValue" },
      ],
      dataResponden: [],
      loading: false,
      totalItem: 0,
      pageCount: 0,
      options: {},
      rowsPerPageItems: [10, 20, 30, 40],
      downloadLoading: false,

      // Snackbar properties
      visible: false,
      message: null,
      color: null,

      // Search Properties
      search: null,
    };
  },
  mounted() {
    this.getList();
  },
  watch: {
    options: {
      handler() {
        this.debounce(this.getList);
      },
      deep: true,
    },
    paginationProperty() {
      this.options.page = 1;
      this.debounce(this.getList);
    },
  },
  computed: {
    paginationProperty() {
      return [this.search].join();
    },
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true;
      setTimeout(() => {
        this.visible = true;
        this.message = "Berhasil Download File Excel";
        this.downloadLoading = false;
        this.color = "success";
      }, 3000);
    },
    async getList() {
      this.loading = true;
      setTimeout(() => {
        this.dataResponden = [
          {
            secureId: "123123-1231231-123123-123",
            no: 1,
            initialName: "AA",
            age: 25,
            gestationalAge: 12,
            education: "S1",
            salaryRange: ">= 3 Juta",
            pretestValue: 30,
            postTestValue: 30,
          },
          {
            secureId: "123123-35345345-56767-787",
            no: 2,
            initialName: "AB",
            age: 26,
            gestationalAge: 16,
            education: "SMA",
            salaryRange: ">= 3 Juta",
            pretestValue: 22,
            postTestValue: 22,
          },
        ];
        this.totalItem = this.dataResponden.length;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style></style>
