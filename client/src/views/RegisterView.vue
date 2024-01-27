<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from "vuex";
import { register } from '@/services/auth'
const email = ref('')
const password = ref('')
const error = ref('')
const store = useStore();

const registerUser = async () => {
  try {
    const response = await register({
      email: email.value,
      password: password.value
    })
    error.value = "";
    store.dispatch("setToken", response.data.token)
    store.dispatch("setUser", response.data.user)
  } catch (err: any) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <v-row>
    <v-col xs="12" sm="8" offset-sm="2" lg="6" offset-lg="3">
      <div class="white elevation-2">
        <v-toolbar flat dense color="deep-orange-lighten-2">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="px-4 py-2">
        <v-form>
          <v-text-field label="Email" v-model="email" required />
          <br />
          <v-text-field label="Password" type="password" v-model="password" />
        </v-form>

        <div v-html="error" class="error" />
        <div class="text-center">
          <v-btn color="deep-orange-lighten-2" @click="registerUser">Register</v-btn>
        </div>

      </div>
    </v-col>
  </v-row>
</template>

<style>
.error {
  color: red;
}
</style>
