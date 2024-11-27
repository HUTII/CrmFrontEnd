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
            <v-col cols="6" class="d-flex justify-center">
                <v-btn variant="plain" to="/travel">Travel</v-btn>
                <v-btn variant="plain" to="/accident">Accident</v-btn>
                <v-btn variant="plain" to="/medical">Medical</v-btn>
                <v-btn variant="plain" to="/">Car</v-btn>
            </v-col>
            <v-col offset="3" cols="1" class="d-flex justify-end align-center align-content-center">
                <v-chip>
                    {{ usernameStore.username }}
                </v-chip>
            </v-col>
            <v-col cols="2" class="d-flex justify-center">
                <v-btn variant="outlined" to="/login">Login</v-btn>
            </v-col>
            
        </v-row>
        
        
    </v-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUsernameStore } from '@/pinia/usernameStore';

const router = useRouter();
const usernameStore = useUsernameStore();

const toHome = () => {
    router.push('/');
}
</script>