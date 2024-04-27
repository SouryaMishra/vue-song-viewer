<script setup lang="ts">
import { getAll } from "@/services/songs";
import { ref, onMounted } from "vue";
import Panel from "@/components/Panel.vue";

const songs = ref<any>([]);

onMounted(() => {
    getAll().then(res => songs.value = res.data)
})
</script>

<template>
    <Panel title="Songs">
        <template v-slot:action>
            <v-btn :to="{ name: 'songs-create' }" elevation="4" color="deep-orange-accent-3" light icon="mdi-plus"
                rounded="circle">
            </v-btn>
        </template>
        <div v-for="song in songs" :key="song.id">
            <v-row>
                <v-col xs="6">
                    <div>
                        {{ song.title }}
                    </div>
                    <div>
                        {{ song.artist }}
                    </div>
                    <div>
                        {{ song.genre }}
                    </div>
                </v-col>
                <v-col xs="6">
                    <img class="album-image" :src="song.albumImage" /> </v-col>
            </v-row>
            <v-btn color="deep-orange-lighten-4" flat :to="{ name: 'single-song', params: { id: song.id } }">View</v-btn>
        </div>
        <p class="text-center" v-if="songs.length === 0">Loading</p>

    </Panel>
</template>

<style scoped>
.album-image {
    width: 50%;
}
</style>