<template>
    <v-container class="fill-height container-1 d-flex justify-center">
        <v-card width="60%" height="150" :elevation="0" color="transparent" class="pt-10">
            <v-card-subtitle class="text-h5">
                Welcome to Insurance App
            </v-card-subtitle>
            <v-card-title class="text-h4">
                Have a look at our insurance plans
            </v-card-title>
        </v-card>
        <v-card width="60%" height="400" :elevation="6" class="rounded-xl card-bg pt-2 pl-3 pr-3">
            <v-card-title class="text-h6">
                Select one type
            </v-card-title>
            <v-row>
                <v-col cols="6">
                    <v-card>
                        <v-card-title>Travel</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card>
                        <v-card-title>Accident</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-card>
                        <v-card-title>Medical</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card>
                        <v-card-title>Car</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<style lang="scss">
.container-1 {
    max-width: 100%;
}
.card-bg {
    opacity: 0.8;
}
</style>

<script setup>
</script>