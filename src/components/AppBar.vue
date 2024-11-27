<template>
    <v-toolbar :elevation="0" color="transparent">
        <v-app-bar-title>
            <v-row>
                <v-col cols="4">
                    <v-img src="@/assets/logo.png" height="40" class="cursor-pointer" @click="toHome()"></v-img>
                </v-col>
            </v-row>
        </v-app-bar-title>
        <v-row>
            <v-col cols="6">
                <v-btn variant="plain" to="/travel">Travel</v-btn>
                <v-btn variant="plain" to="/accident">Accident</v-btn>
                <v-btn variant="plain" to="/medical">Medical</v-btn>
                <v-btn variant="plain" to="/">Car</v-btn>
            </v-col>
        </v-row>
        
        
    </v-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const toHome = () => {
    router.push('/');
}
</script>