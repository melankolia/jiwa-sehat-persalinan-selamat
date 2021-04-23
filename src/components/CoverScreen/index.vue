<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <Logo :isBorder="true" />
    <div>
      <img class="floral pb-2" src="../../assets/floral.jpg" alt="floral" />
    </div>
    <div
      class="d-flex flex-grow-1 flex-column justify-space-between px-10 pb-6"
    >
      <div>
        <p class="text-h4 font-weight-bold pink--text text--accent-1">
          {{ title }}
        </p>
        <p class="text-body-2 text-justify" v-html="description"></p>
        <v-expand-transition>
          <v-card-actions
            class="rounded my-6"
            style="background-color: #d6efff"
            v-if="isScrolled"
          >
            <v-row>
              <v-col cols="12" class="py-4">
                <v-icon small class="float-left px-2">info</v-icon>
                <p class="caption ma-0 ml-3 font-weight-bold">Keterangan :</p>
                <ul class="caption ml-3 mb-2">
                  <li>
                    {{ note }}
                  </li>
                </ul>
                <v-icon small class="float-left px-2">info</v-icon>
                <p class="caption ma-0 ml-3 font-weight-bold">Note :</p>
                <ul class="caption ml-3">
                  <li>
                    Apabila terdapat kesulitan dalam pengisian kuisioner di
                    atas. Anda dapat menghubungi nomor
                    <b>0831-6076-9090</b> (Teta Apriliana)
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-expand-transition>
      </div>
      <v-btn
        @click="handleNext"
        class="px-10 py-6 pink accent-1"
        outlined
        rounded
        :loading="formLoading"
        dark
      >
        <span class="white--text button font-weight-bold">
          {{ titleButton }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
const Logo = () => import("@/components/Logo");
export default {
  props: {
    title: { types: String, required: true, default: "Title" },
    description: { types: String, required: true, default: "Description" },
    handleNext: { types: Function, required: true, default: () => {} },
    titleButton: { types: String, required: true, default: "Isi" },
    formLoading: { types: Boolean, required: true, default: false },
    note: { types: String, required: false, default: "" },
  },
  components: {
    Logo,
  },
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    scroll(bottomOfWindow) {
      window.onscroll = () => {
        if (bottomOfWindow) {
          this.isScrolled = true;
        }
      };
    },
  },
  computed: {
    calculateHeight() {
      let bottomOfWindow =
        Math.round(document.documentElement.scrollTop + window.innerHeight) >=
        document.documentElement.offsetHeight;
      return bottomOfWindow;
    },
  },
  mounted() {
    this.scroll();
    this.calculateHeight && (this.isScrolled = true);
  },
};
</script>

<style scoped>
.floral {
  width: 100%;
  filter: hue-rotate(321deg);
}
</style>
