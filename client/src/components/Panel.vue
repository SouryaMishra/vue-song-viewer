<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
    <v-row>
        <v-col xs="12" sm="8" offset-sm="2" lg="6" offset-lg="3">
            <div class="white elevation-2">
                <v-toolbar flat dense color="deep-orange-lighten-2">
                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                </v-toolbar>
            </div>
            <div class="px-4 py-2">
                <slot />
            </div>
        </v-col>
    </v-row>
</template>
