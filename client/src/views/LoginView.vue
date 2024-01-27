<script setup lang="ts">
import { VBtn } from 'vuetify/components/VBtn'
import { ref } from 'vue'
import { login } from '@/services/auth'
const email = ref('')
const password = ref('')
const error = ref('')

const loginUser = async () => {
  try {
    await login({
      email: email.value,
      password: password.value
    })
    error.value = "";
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
          <v-toolbar-title>Login</v-toolbar-title>
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
          <v-btn color="deep-orange-lighten-2" @click="loginUser">Login</v-btn>
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
