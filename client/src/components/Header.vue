<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const logout = () => {
    store.dispatch("setToken", null);
    store.dispatch("setUser", null);
    router.push({ name: "home" })
}
</script>

<template>
    <v-toolbar elevation="4" color="deep-orange-lighten-3">
        <v-toolbar-title class="mr-4"> <v-btn to="/">
                Songs
            </v-btn> </v-toolbar-title>

        <v-toolbar-items>
            <v-btn :to="{ name: 'songs' }">Browse</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!store.state.isUserLoggedIn" :to="{ name: 'login' }">Login</v-btn>
            <v-btn v-if="!store.state.isUserLoggedIn" :to="{ name: 'register' }">Sign Up
            </v-btn>
            <v-btn v-if="store.state.isUserLoggedIn" @click="logout">Logout
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
