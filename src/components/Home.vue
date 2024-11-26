<template>
    <v-container class="fill-height container-1 d-flex justify-center align-content-start position-relative">
        <v-img
        class="position-absolute top-0 right-0"
        width="500"
        src="@/assets/home_backgroud.jpg"
      />
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
            <v-row style="height: 150px;">
                <v-col cols="6">
                    <v-card
                        class="rounded-sm h-75 cursor-pointer"
                        border="t-xl"
                        to="/travel"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="2">
                                    <v-icon
                                        icon="mdi-plane-car"
                                        size="60"
                                    />
                                </v-col>
                                <v-col cols="10">
                                    <p class="text-h6">Travel ></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                        class="rounded-sm h-75 cursor-pointer"
                        border="t-xl"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="2">
                                    <v-icon
                                        icon="mdi-alert-octagon"
                                        size="60"
                                    />
                                </v-col>
                                <v-col cols="10">
                                    <p class="text-h6">Accident ></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row style="height: 150px;">
                <v-col cols="6">
                    <v-card
                        class="rounded-sm h-75 cursor-pointer"
                        border="t-xl"
                        
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="2">
                                    <v-icon
                                        icon="mdi-heart-pulse"
                                        size="60"
                                    />
                                </v-col>
                                <v-col cols="10">
                                    <p class="text-h6">Health ></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card
                        class="rounded-sm h-75 cursor-pointer"
                        border="t-xl"
                    >
                        <v-card-text>
                            <v-row>
                                <v-col cols="2">
                                    <v-icon
                                        icon="mdi-train-car"
                                        size="60"
                                    />
                                </v-col>
                                <v-col cols="10">
                                    <p class="text-h6">Car ></p>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<style lang="scss" scoped>
.container-1 {
    max-width: 100% !important;
}
.card-bg {
    opacity: 0.85;
}
.cd-1 {
    border-color: rgba(189, 239, 230, 1) !important;
}

.cd-2 {
    border-color: rgba(228, 185, 228, 1) !important;
}

.cd-3 {
    border-color: rgba(200, 230, 201, 1) !important;
}

.cd-4 {
    border-color: rgba(248, 187, 208, 1) !important;
}

</style>

<script setup>
</script>