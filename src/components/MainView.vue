<template>
    <AppBar />
    <v-main>
        <RouterView :key="route.fullPath" />
    </v-main>
</template>

<script setup>
import AppBar from './AppBar.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
</script>