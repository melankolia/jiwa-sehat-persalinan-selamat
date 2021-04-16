<template>
  <div class="d-flex flex-grow-1 justify-center align-center">
    <v-row justify="center">
      <v-col cols="12" xs="12" sm="7" md="5">
        <v-card class="pa-10" v-bind="resizeWidth">
          <p class="text-h5 font-weight-bold secondary--text">Login</p>
          <v-form
            id="check-login"
            ref="form"
            lazy-validation
            v-model="valid"
            @submit.prevent="onSubmit"
          >
            <v-text-field
              label="Username"
              v-model="username"
              color="secondary"
              required
              :rules="[(v) => !!v || `Username Harus Diisi`]"
            />
            <v-text-field
              label="Password"
              v-model="password"
              counter
              color="secondary"
              required
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              @click:append="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              :rules="[(v) => !!v || `Password Harus Diisi`]"
            />
          </v-form>
          <v-btn
            type="submit"
            form="check-login"
            class="mt-10"
            dark
            color="secondary"
            block
            :loading="formLoading"
          >
            <span class="font-weight-bold">Submit</span>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <Snackbar
      :show="visible"
      :message="message"
      :color="color"
      @handleClose="visible = $event"
    />
  </div>
</template>

<script>
import { DASHBOARD } from "@/router/name.types";
const Snackbar = () => import("@/components/Snackbar");

export default {
  components: {
    Snackbar,
  },
  data() {
    return {
      // Form Properties
      username: null,
      password: null,
      valid: false,
      formLoading: false,
      e1: true,

      // Snackbar properties
      visible: false,
      message: null,
      color: null,
    };
  },
  computed: {
    resizeWidth() {
      return this.$vuetify.breakpoint.xs && { flat: true };
    },
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.formLoading = true;
        setTimeout(() => {
          this.formLoading = false;
          this.$router.replace({ name: DASHBOARD.ROOT });
          // this.visible = true;
          // this.message = "Login Gagal";
          // this.color = "error";
        }, 500);
      }
    },
  },
};
</script>

<style></style>
