<template>
  <div>
    <v-content>
      <div class="d-flex flex-grow-1 flex-column my-10 mx-8">
        <p class="text-h5 font-weight-bold secondary--text">
          List Data Responden JSPS
        </p>
        <v-divider class="my-6 divider-color" />
        <v-card>
          <v-card-title class="secondary white--text mb-2">
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              hide-details
              clearable
              dark
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
            <template #[`item.initialName`]="{ item }">
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
            <template #[`item.actions`]="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    text
                    icon
                    color="error"
                    class="px-3"
                    v-on="on"
                    @click="deleteItem(item)"
                  >
                    <v-icon small> delete </v-icon>
                  </v-btn>
                </template>
                <span>Delete</span>
              </v-tooltip>
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
    <ConfirmationDelete
      :dialog="visibleConfirmation"
      :onSubmit="onSubmit"
      :onCancel="onCancel"
      :loading="confirmationLoading"
    />
  </div>
</template>

<script>
const Snackbar = () => import("@/components/Snackbar");
const ConfirmationDelete = () => import("@/components/Dialog/Confirmation");
import { DASHBOARD } from "@/router/name.types";
import DashboardService from "@/services/resources/dashboard.service";

export default {
  components: {
    Snackbar,
    ConfirmationDelete,
  },
  data() {
    return {
      dashboardDetail: DASHBOARD.DETAIL,
      // COnfirmation Delete Properties
      visibleConfirmation: false,
      confirmationLoading: false,
      selectedItem: null,

      // Data Table Properties
      headers: [
        { text: "No", value: "no", sortable: false },
        { text: "Initial Name", value: "initialName" },
        { text: "Umur", value: "age" },
        { text: "Usia Kandungan", value: "gestationalAge" },
        { text: "Pendidikan", value: "education" },
        { text: "Tingkat Pendapatan", value: "salaryRange" },
        { text: "Pre-test", value: "pretest" },
        { text: "Post-test", value: "posttest" },
        { text: "Actions", align: "center", value: "actions", sortable: false },
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
    async handleDownload() {
      this.downloadLoading = true;
      DashboardService.downloadFile()
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `Data_Responden.xlsx`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => console.log(err))
        .finally(() => (this.downloadLoading = false));
    },
    async getList() {
      this.loading = true;
      const { page, itemsPerPage, sortBy, sortDesc } = this.options;
      DashboardService.getListResponden({
        search: this.search,
        page,
        limit: itemsPerPage,
        sortBy: sortBy[0] && sortBy[0],
        sortDesc: sortDesc[0] ? "DESC" : "ASC",
      })
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            result.data.map(
              (e, i) => (e.no = itemsPerPage * (page - 1) + (i + 1))
            );
            this.dataResponden = [...result.data];
            this.totalItem = result.elements;
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
    deleteItem(item) {
      this.visibleConfirmation = true;
      this.selectedItem = { ...item };
    },
    async onSubmit() {
      this.confirmationLoading = true;
      DashboardService.deleteResponden(this.selectedItem?.secureId)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.message = "Data berhasil dihapus";
            this.color = "success";
            this.getList();
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => {
          this.message = "Data gagal dihapus";
          this.color = "error";
          console.error(err);
        })
        .finally(() => {
          this.confirmationLoading = false;
          this.visibleConfirmation = false;
          this.visible = true;
        });
    },
    onCancel() {
      this.selectedItem = null;
      this.visibleConfirmation = false;
    },
  },
};
</script>

<style></style>
