<template>
    <v-container>
        <v-card v-for="insurance in travelInsurances" class="mb-5 cursor-pointer" :to="`/travel/${insurance.id}`">
            
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(insurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ insurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ insurance.effectPeriod }}<br><br>
                            
                            旅程阻碍保障：  {{ insurance.tripDelay }}<br>
                            个人财产保障：  {{ insurance.personalProperty }}<br>
                            医疗保障：  {{ insurance.medicalCoverage }}<br>
                            个人责任：  {{ insurance.personalLiability }}<br>
                            紧急救援：  {{ insurance.emergencyAssistance }}<br>
                            意外死亡：  {{ insurance.accidentDeath }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ insurance.price }}</span>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
    </v-container>
</template>


<style lang="scss">
.price {
    color: salmon;
    font-size: x-large;
}
</style>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';
import jsonInstance from '@/axios';

const travelInsurances = ref([]);
const axios = ref(jsonInstance);

onMounted(async () => {
    try {
        const response = await axios.value.post('/travelInsurance/getAllTravelInsurance');
        if (response.data.status == -1) {
            this.$router.push('/login');
        }
        travelInsurances.value = response.data.data;
        console.log(travelInsurances.value);
        
    } catch {
        console.log('Error');
    }
});

function getImageSrc(id) {
    return new URL(`../assets/travel/${id}.jpg`, import.meta.url).href;
}

</script>