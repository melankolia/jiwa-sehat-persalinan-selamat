<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="340">
      <v-card>
        <v-card-title class="headline"> Hapus Responden ? </v-card-title>
        <v-card-text
          >Apakah anda yakin ingin menghapus data Responden</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="onCancel"> Cancel </v-btn>
          <v-btn color="secondary" :loading="loading" text @click="onSubmit">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: { type: Boolean, required: true },
    onSubmit: { type: Function, required: true },
    onCancel: { type: Function, required: true },
    loading: { type: Boolean, required: true },
  },
};
</script>

<style></style>
