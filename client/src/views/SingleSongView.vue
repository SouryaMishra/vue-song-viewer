<script setup lang="ts">
import { ref } from 'vue';
import Panel from '@/components/Panel.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getById } from '@/services/songs'

const song = ref<any>(null)
const route = useRoute();

onMounted(() => {
    const songId = route.params.songId;
    getById(songId).then(res => song.value = res.data)
})
</script>

<template>
    <Panel title="Song Metadata">
        <v-row v-if="song">
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
    </Panel>
</template>