<template>
    <v-container class="container-1">
        <v-card v-for="insurance in travelInsurances" class="mb-5 cursor-pointer" :to="`/travel/${insurance.id}`">
            <v-card-title>{{ insurance.name }}</v-card-title>
            <v-card-text>
                价格： {{ insurance.price }}<br>
                有效期限： {{ insurance.effectPeriod }}<br><br>
                
                旅程阻碍保障：  {{ insurance.tripDelay }}<br>
                个人财产保障：  {{ insurance.personalProperty }}<br>
                医疗保障：  {{ insurance.medicalCoverage }}<br>
                个人责任：  {{ insurance.personalLiability }}<br>
                紧急救援：  {{ insurance.emergencyAssistance }}<br>
                意外死亡：  {{ insurance.accidentDeath }}<br>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<style lang="scss">
.container-1 {
    max-width: 900px;
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
        console.log(response);
        if (response.data.status == -1) {
            this.$router.push('/login');
        }
        travelInsurances.value = response.data.data;
        
    } catch {
        console.log('Error');
    }
});

</script>