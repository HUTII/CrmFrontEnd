<template>
    <v-container>
        <v-card v-for="insurance in medicalInsurances" class="mb-5 cursor-pointer" :to="`/accident/${insurance.id}`">
            
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(insurance.id)" height="200" width="200" ></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ insurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ insurance.effectPeriod }}<br><br>
                            
                            意外保障：  {{ nearestAccidentInsurance.accidentCoverage }}<br>
                            残疾保障：  {{ nearestAccidentInsurance.disabilityCoverage }}<br>
                            紧急救援：  {{ nearestAccidentInsurance.emergencyAssistance }}<br>
                            住院保障:   {{ nearestAccidentInsurance.hospitalCoverage}}<br>
                            门诊保障：  {{ nearestAccidentInsurance.outpatientCoverage }}<br>
                            个人责任：  {{ nearestAccidentInsurance.personalLiability }}<br>
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

const medicalInsurances = ref([]);
const axios = ref(jsonInstance);

onMounted(async () => {
    try {
        const response = await axios.value.post('/accidentInsurance/getAllAccidentInsurance');
        if (response.data.status == -1) {
            this.$router.push('/login');
        }
        medicalInsurances.value = response.data.data;
        console.log(medicalInsurances.value);
        
    } catch {
        console.log('Error');
    }
});

function getImageSrc(id) {
    return new URL(`../assets/accident/${id}.jpg`, import.meta.url).href;
}

</script>