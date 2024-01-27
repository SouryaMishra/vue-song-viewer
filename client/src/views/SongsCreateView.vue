<script setup lang="ts">
import { create } from '@/services/songs'
import { ref } from 'vue'
import Panel from '@/components/Panel.vue'

const songData = ref({
    title: '',
    artist: '',
    genre: '',
    album: '',
    albumImage: '',
    youtubeId: '',
    lyrics: '',
    tab: ''
})
const error = ref('')
const rules = [value => (Boolean(value) && Boolean(value.trim())) || "Field is required"]

const createSong = async () => {
    if (Object.values(songData.value).some(value => !value)) return;
    try {
        alert();
        await create(songData.value)
    } catch (err: any) {
        error.value = err.response.data.error
    }
}
</script>

<template>
    <Panel title="Song Metadata">
        <v-form>
            <v-text-field label="Title" v-model="songData.title" :rules="rules"></v-text-field>

            <v-text-field label="Artist" v-model="songData.artist" :rules="rules"></v-text-field>

            <v-text-field label="Genre" v-model="songData.genre" :rules="rules"></v-text-field>

            <v-text-field label="Album" v-model="songData.album" :rules="rules"></v-text-field>

            <v-text-field label="Image" v-model="songData.albumImage" :rules="rules"></v-text-field>

            <v-text-field label="Youtube ID" v-model="songData.youtubeId" :rules="rules"></v-text-field>

            <v-textarea label="Lyrics" v-model="songData.lyrics" :rules="rules"></v-textarea>

            <v-textarea label="Tab" v-model="songData.tab" :rules="rules"></v-textarea>
        </v-form>
        <div class="error" v-html="error" />
        <v-btn block flat color="deep-orange-lighten-4" @click="createSong">Create Song</v-btn>
    </Panel>
</template>

<style scoped>
.error {
    color: red;
}
</style>
