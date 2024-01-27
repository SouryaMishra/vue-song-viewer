<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { login } from '@/services/auth'
import Panel from '@/components/Panel.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const store = useStore()

const rules = [value => (Boolean(value) && Boolean(value.trim())) || "Field is required"]

const loginUser = async () => {
  try {
    const response = await login({
      email: email.value,
      password: password.value
    })
    error.value = ''
    store.dispatch('setToken', response.data.token)
    store.dispatch('setUser', response.data.user)
  } catch (err: any) {
    error.value = err.response.data.error
  }
}
</script>

<template>
  <Panel title="Login">
    <v-form>
      <v-text-field label="Email" v-model="email" :rules="rules" />
      <br />
      <v-text-field label="Password" type="password" v-model="password" />
    </v-form>

    <div v-html="error" class="error" />
    <div class="text-center">
      <v-btn color="deep-orange-lighten-4" @click="loginUser">Login</v-btn>
    </div>
  </Panel>
</template>

<style scoped>
.error {
  color: red;
}
</style>
