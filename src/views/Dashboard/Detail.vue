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
                  <td>{{ item.age }}</td>
                </tr>
                <tr>
                  <td style="width: 30%">
                    <span class="font-weight-medium"> Usia Kandungan </span>
                  </td>
                  <td>{{ item.gestationalAge }}</td>
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
                <SubList
                  title="Screening"
                  :show="show2"
                  :available="
                    item.screeningList && item.screeningList.length > 0
                  "
                  :click="() => (show2 = !show2)"
                >
                  <template v-slot:no-data>
                    <span
                      class="mb-0 text-subtitle"
                      v-html="`No Screening Data`"
                    ></span>
                  </template>
                </SubList>
                <SubTable
                  v-if="show2"
                  :headers="screeningHeaders"
                  :lists="item.screeningList"
                  isDataTable
                />
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
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
        <div class="d-flex flex-row mt-10">
          <v-btn @click="$router.back()" class="py-5 px-12" color="default">
            <v-icon left>keyboard_arrow_left</v-icon>
            <span class="font-weight-medium">Back</span>
          </v-btn>
        </div>
      </template>
    </div>
  </v-content>
</template>

<script>
const SubList = () => import("@/components/Table/SubList");
const SubTable = () => import("@/components/Table/SubTable");
const ContentNotFound = () => import("@/components/Content/NotFound");
import DashboardService from "@/services/resources/dashboard.service";

export default {
  components: {
    SubList,
    SubTable,
    ContentNotFound,
  },
  data() {
    return {
      id: this.$route.params?.secureId,
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
        pretestList: [],
        screeningList: [],
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
    };
  },
  methods: {
    async getList() {
      this.isAvailable = false;
      this.loading = true;
      setTimeout(() => {
        this.isAvailable = true;
        this.loading = false;
        this.item = {
          initialName: "AA",
          age: 21,
          gestationalAge: 12,
          education: "S1",
          salaryRange: ">= 3 Juta",
          pretestList: [
            {
              no: 1,
              question: "Question 1",
              answer: 1,
              note: "Ringan",
            },
            {
              no: 2,
              question: "Question 2",
              answer: 2,
              note: "Sedang",
            },
          ],
          screeningList: [
            {
              no: 1,
              question: "Question 1",
              answer: "Saya baik baik saja",
            },
            {
              no: 2,
              question: "Question 2",
              answer: "Saya baik baik saja",
            },
          ],
          postTestList: [
            {
              no: 1,
              question: "Question 1",
              answer: 1,
              note: "Ringan",
            },
            {
              no: 2,
              question: "Question 2",
              answer: 2,
              note: "Sedang",
            },
          ],
        };
      }, 2000);
    },
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
            result.screeningList.map((e, i) => (e.no = i + 1));
            this.item = { ...this.item, ...result };
          } else {
            throw new Error(result);
          }
        })
        .catch((err) => console.error(err))
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    console.log(this.id);
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
