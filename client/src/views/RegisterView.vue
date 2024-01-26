<script setup lang="ts">
import { ref } from 'vue';
import { register } from "@/services/auth";
const email = ref("");
const password = ref("")

const registerUser = async () => {
  const response = await register({
    email: email.value,
    password: password.value
  })
  console.log(response.data);
}
</script>

<template>
  <h1>Register</h1>

  <input type="email" name="email" v-model="email" placeholder="email" />
  <br />
  <input type="password" name="password" v-model="password" placeholder="password" />
  <button @click="registerUser">Register</button>
</template>

<style scoped></style>
