<template>
  <div class="d-flex flex-column px-12 py-6">
    <img
      src="@/assets/relaxing.jpg"
      alt="relaxing"
      class="image-cover py-8 align-self-center"
    />
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab v-for="(item, i) in items" :key="i">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, i) in items" :key="i" class="py-4">
        <keep-alive>
          <component :is="items[tab].content" @step="tab = 1" />
        </keep-alive>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
const Descriptions = () => import("./desc.vue");
const Step = () => import("./step.vue");

export default {
  components: {
    Descriptions,
    Step,
  },
  data() {
    return {
      tab: 0,
      items: [
        { tab: "Description", content: "Descriptions" },
        { tab: "Step's", content: "Step" },
      ],
    };
  },
};
</script>

<style scoped>
.image-cover {
  width: 100%;
  height: auto;
}
</style>
