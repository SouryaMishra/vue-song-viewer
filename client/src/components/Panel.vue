<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
</script>

<template>
    <v-row>
        <v-col xs="12" sm="8" offset-sm="2" lg="6" offset-lg="3">
            <div class="white">
                <v-toolbar dense color="deep-orange-lighten-3">
                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                    <slot name="action"></slot>
                </v-toolbar>
            </div>
            <div class="px-4 py-2">
                <slot />
            </div>
        </v-col>
    </v-row>
</template>
