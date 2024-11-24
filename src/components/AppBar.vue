<template>
    <v-toolbar :elevation="0" color="transparent">
        <v-app-bar-title>
            <v-row>
                <v-col cols="4">
                    <v-img src="@/assets/logo.png" height="40"></v-img>
                </v-col>
            </v-row>
        </v-app-bar-title>
        <v-row>
            <v-col cols="6">
                <v-btn variant="plain" to="/">Travel</v-btn>
                <v-btn variant="plain" to="/">Accident</v-btn>
                <v-btn variant="plain" to="/">Medical</v-btn>
                <v-btn variant="plain" to="/">Car</v-btn>
            </v-col>
        </v-row>
        
        
    </v-toolbar>
</template>

<script setup>

</script>