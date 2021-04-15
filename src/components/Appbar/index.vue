<template>
  <v-app-bar app absolute color="secondary" dark dense>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <div
      class="d-flex flew-row justify-center align-center pink accent-1 pa-2 bordering"
      style="width: 64px; height: 64px; border-color: white !important"
    >
      <img src="@/assets/flowers.png" alt="unsri" />
      <img src="@/assets/logo-sementara.png" alt="unsri" />
      <img src="@/assets/flowers.png" alt="unsri" />
    </div>

    <v-toolbar-title class="ml-4">
      <span class="font-weight-medium">Dashboard</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu transition="slide-y-transition" bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-divider></v-divider>
        <v-list>
          <v-list-item @click="logOut">
            <v-list-item-title>Logout</v-list-item-title>
            <v-list-item-icon>
              <v-icon small right>exit_to_app</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logOut() {
      console.log("logOut()");
    },
  },
};
</script>

<style scoped>
img[alt="unsri"] {
  width: 17px;
  height: 37px;
  filter: brightness(0) invert(1);
}
img:nth-child(2) {
  width: 28px;
  height: 29px;
}
img:first-child {
  transform: scaleX(1);
}
img:last-child {
  transform: scaleX(-1);
}
.bordering {
  border: 2px solid white !important;
}
</style>
