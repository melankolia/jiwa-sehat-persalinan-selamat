<template>
  <v-content>
    <div class="d-flex flex-grow-1 flex-column my-10 mx-8">
      <p class="text-h5 font-weight-bold secondary--text">
        Detail Data Responden
      </p>
      <v-divider class="my-6 divider-color" />
      <ContentNotFound
        message="Data Not Found"
        :loading="loading"
        v-if="!isAvailable"
      >
        <template v-slot:action>
          <v-btn @click="$router.back()" color="default" class="px-10">
            GO BACK
          </v-btn>
        </template>
      </ContentNotFound>
      <template v-else>
        <v-card>
          <v-card-title class="secondary white--text">
            Data Responden
          </v-card-title>
          <v-simple-table>
            <template #default>
              <tbody>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Initial Name </span>
                  </td>
                  <td>{{ item.initialName }}</td>
                </tr>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Umur </span>
                  </td>
                  <td>{{ item.age }} Tahun</td>
                </tr>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Usia Kandungan </span>
                  </td>
                  <td>{{ item.gestationalAge }} Minggu</td>
                </tr>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Pendidikan </span>
                  </td>
                  <td>{{ item.education }}</td>
                </tr>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Tingkat Pendapatan </span>
                  </td>
                  <td>{{ item.salaryRange }}</td>
                </tr>
                <SubList
                  title="Pre-test"
                  :show="show"
                  :available="item.pretestList && item.pretestList.length > 0"
                  :click="() => (show = !show)"
                >
                  <template v-slot:no-data>
                    <span
                      class="mb-0 text-subtitle"
                      v-html="`No Pre-test Data`"
                    ></span>
                  </template>
                </SubList>
                <SubTable
                  v-if="show"
                  :headers="headers"
                  :lists="item.pretestList"
                  isDataTable
                />
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Total Pre-test </span>
                  </td>
                  <td>{{ item.pretest }}</td>
                </tr>
                <SubList
                  title="Post-test"
                  :show="show3"
                  :available="item.postTestList && item.postTestList.length > 0"
                  :click="() => (show3 = !show3)"
                >
                  <template v-slot:no-data>
                    <span
                      class="mb-0 text-subtitle"
                      v-html="`No Post-test Data`"
                    ></span>
                  </template>
                </SubList>
                <SubTable
                  v-if="show3"
                  :headers="headers"
                  :lists="item.postTestList"
                  isDataTable
                />
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Total Post-test </span>
                  </td>
                  <td>{{ item.posttest }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <div class="d-flex flex-row mt-6">
          <v-btn
            @click="$router.back()"
            class="py-5 px-12 mr-4"
            color="default"
          >
            <v-icon left>keyboard_arrow_left</v-icon>
            <span class="font-weight-medium">Back</span>
          </v-btn>
          <v-btn @click="visible = true" class="py-5 px-8" color="error">
            <span class="font-weight-medium">Delete</span>
            <v-icon right>close</v-icon>
          </v-btn>
        </div>
      </template>
    </div>
    <Snackbar
      :show="snackbarVisible"
      :message="message"
      :color="color"
      @handleClose="visible = $event"
    />
    <ConfirmationDelete
      :dialog="visible"
      :onSubmit="onSubmit"
      :onCancel="onCancel"
      :loading="confirmationLoading"
    />
  </v-content>
</template>

<script>
const SubList = () => import("@/components/Table/SubList");
const SubTable = () => import("@/components/Table/SubTable");
const ContentNotFound = () => import("@/components/Content/NotFound");
const Snackbar = () => import("@/components/Snackbar");
const ConfirmationDelete = () => import("@/components/Dialog/Confirmation");
import DashboardService from "@/services/resources/dashboard.service";
import { DASHBOARD } from "@/router/name.types";

export default {
  components: {
    SubList,
    SubTable,
    ContentNotFound,
    ConfirmationDelete,
    Snackbar,
  },
  data() {
    return {
      id: this.$route.params?.secureId,
      visible: false,
      confirmationLoading: false,
      show: false,
      show2: false,
      show3: false,

      // Data List
      loading: false,
      item: {
        initialName: null,
        age: null,
        gestationalAge: null,
        education: null,
        salaryRange: null,
        pretest: null,
        posttest: null,
        pretestList: [],
        postTestList: [],
      },

      // Subtable properties
      headers: [
        { text: "No", value: "no", sortable: false },
        { text: "Pertanyaan", value: "question", sortable: false },
        { text: "Jawaban", value: "answer", sortable: false },
        { text: "Keterangan", value: "note", sortable: false },
      ],

      screeningHeaders: [
        { text: "No", value: "no", sortable: false, width: "4%" },
        {
          text: "Pertanyaan",
          value: "question",
          sortable: false,
          width: "40%",
        },
        { text: "Jawaban", value: "answer", sortable: false },
      ],

      // Snackbar properties
      snackbarVisible: false,
      message: null,
      color: null,
    };
  },
  methods: {
    translateNote(e) {
      if (!e) return "-";
      else if (e == 0) return "Tidak";
      else if (e == 1) return "Ringan";
      else if (e == 2) return "Sedang";
      else if (e == 3) return "Berat";
      else if (e == 4) return "Sangat Parah";
    },
    async getDetail(id) {
      this.loading = true;
      DashboardService.getDetail(id)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            result.pretestList.map((e, i) => {
              e.no = i + 1;
              e.note = this.translateNote(e.answer);
            });
            result.postTestList.map((e, i) => {
              e.no = i + 1;
              e.note = this.translateNote(e.answer);
            });
            this.item = { ...this.item, ...result };
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.loading = false));
    },
    async onSubmit() {
      this.confirmationLoading = true;
      DashboardService.deleteResponden(this.id)
        .then(({ data: { result, message } }) => {
          if (message == "OK") {
            this.message = "Data berhasil dihapus";
            this.color = "success";
            this.$router.replace({ name: DASHBOARD.ROOT });
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
          this.visible = false;
          this.snackbarVisible = true;
        });
    },
    onCancel() {
      this.visible = false;
    },
  },
  mounted() {
    this.id && this.getDetail(this.id);
  },
  computed: {
    isAvailable() {
      return this.item.initialName;
    },
  },
};
</script>

<style></style>
