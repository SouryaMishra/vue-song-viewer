<script setup lang="ts">
import { ref } from 'vue'
import { register } from '@/services/auth'
const email = ref('')
const password = ref('')
const error = ref('')

const registerUser = async () => {
  try {
    await register({
      email: email.value,
      password: password.value
    })
  } catch (err: any) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <h1>Register</h1>

  <input type="email" name="email" v-model="email" placeholder="email" />
  <br />
  <input type="password" name="password" v-model="password" placeholder="password" />
  <button @click="registerUser">Register</button>
  <div v-html="error" class="error" />
</template>

<style scoped>
.error {
  color: red;
}
</style>
