<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(medicalInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ medicalInsurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ medicalInsurance.effectPeriod }}<br>
                            适用年龄： {{ medicalInsurance.applicablePopulation }}<br><br>
                            
                            criticalIllness：  {{ medicalInsurance.criticalIllness }}<br>
                            emergencyAssistance：  {{ medicalInsurance.emergencyAssistance }}<br>
                            hospitalCoverage：  {{ medicalInsurance.hospitalCoverage }}<br>
                            outpatientCoverage：  {{ medicalInsurance.outpatientCoverage }}<br>
                            companyName：  {{ medicalInsurance.companyName }}<br>
                            surgeryCoverage：  {{ medicalInsurance.surgeryCoverage }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ medicalInsurance.price }}</span>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
        <br>
        <h4>类似商品</h4>
        <br>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(nearestMedicalInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ nearestMedicalInsurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ nearestMedicalInsurance.effectPeriod }}<br>
                            适用年龄： {{ nearestMedicalInsurance.applicablePopulation }}<br><br>
                            
                            criticalIllness：  {{ nearestMedicalInsurance.criticalIllness }}<br>
                            emergencyAssistance：  {{ nearestMedicalInsurance.emergencyAssistance }}<br>
                            hospitalCoverage：  {{ nearestMedicalInsurance.hospitalCoverage }}<br>
                            outpatientCoverage：  {{ nearestMedicalInsurance.outpatientCoverage }}<br>
                            companyName：  {{ nearestMedicalInsurance.companyName }}<br>
                            surgeryCoverage：  {{ nearestMedicalInsurance.surgeryCoverage }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ nearestMedicalInsurance.price }}</span>
                    </v-col>
                </v-row>
            </v-card-item>
        </v-card>
        <br>
        <h4>大家在买</h4>
        <br>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(associatedMedicalInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ associatedMedicalInsurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ associatedMedicalInsurance.effectPeriod }}<br>
                            适用年龄： {{ associatedMedicalInsurance.applicablePopulation }}<br><br>
                            
                            criticalIllness：  {{ associatedMedicalInsurance.criticalIllness }}<br>
                            emergencyAssistance：  {{ associatedMedicalInsurance.emergencyAssistance }}<br>
                            hospitalCoverage：  {{ associatedMedicalInsurance.hospitalCoverage }}<br>
                            outpatientCoverage：  {{ associatedMedicalInsurance.outpatientCoverage }}<br>
                            companyName：  {{ associatedMedicalInsurance.companyName }}<br>
                            surgeryCoverage：  {{ associatedMedicalInsurance.surgeryCoverage }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ associatedMedicalInsurance.price }}</span>
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
import { useRoute, useRouter } from 'vue-router';
import { urlencodedInstance } from '@/axios';

const medicalInsurance = ref({});
const associatedMedicalInsurance = ref({});
const nearestMedicalInsurance = ref({});
const route = useRoute(); // 获取 route 对象
const router = useRouter(); // 获取 router 对象

onMounted(async () => {
    try {
        const formData = new URLSearchParams();
        formData.append('id', route.params.id);

        const response = await urlencodedInstance.post('/medicalInsurance/getMedicalInsuranceById', formData);
        if (response.data.status == -1) {
            router.push('/login');
        }
        medicalInsurance.value = response.data.data;

        const response2 = await urlencodedInstance.post('/medicalInsurance/getAssociatedMedicalInsurance', formData);
        associatedMedicalInsurance.value = response2.data.data;

        const response3 = await urlencodedInstance.post('/medicalInsurance/getNearestMedicalInsurance', formData);
        nearestMedicalInsurance.value = response3.data.data;
        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
});

function getImageSrc(id) {
    return new URL(`../assets/medical/${id}.jpg`, import.meta.url).href;
}
</script>