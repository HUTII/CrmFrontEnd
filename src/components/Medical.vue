<template>
    <v-container>
        <v-card v-for="insurance in medicalInsurances" class="mb-5 cursor-pointer" :to="`/medical/${insurance.id}`">

            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(insurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ insurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            生效期限（单位：天）： {{ insurance.effectPeriod }}<br>
                            适用人群： {{ insurance.applicablePopulation }}<br><br>

                            重疾覆盖额度：  {{ insurance.criticalIllness }}<br>
                            紧急救援：  {{ insurance.emergencyAssistance }}<br>
                            医疗覆盖额度：  {{ insurance.hospitalCoverage }}<br>
                            门诊覆盖额度：  {{ insurance.outpatientCoverage }}<br>
                            保险公司名称：  {{ insurance.companyName }}<br>
                            手术覆盖额度：  {{ insurance.surgeryCoverage }}<br>
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
        const response = await axios.value.post('/medicalInsurance/getAllMedicalInsurance');
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
    return new URL(`../assets/medical/${id}.jpg`, import.meta.url).href;
}

</script>
