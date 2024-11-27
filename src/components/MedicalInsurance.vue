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
                            生效期限（单位：天）： {{ medicalInsurance.effectPeriod }}<br>
                            适用人群： {{ medicalInsurance.applicablePopulation }}<br><br>

                            重疾覆盖额度：  {{ medicalInsurance.criticalIllness }}<br>
                            紧急救援：  {{ medicalInsurance.emergencyAssistance }}<br>
                            医疗覆盖额度：  {{ medicalInsurance.hospitalCoverage }}<br>
                            门诊覆盖额度：  {{ medicalInsurance.outpatientCoverage }}<br>
                            保险公司名称：  {{ medicalInsurance.companyName }}<br>
                            手术覆盖额度：  {{ medicalInsurance.surgeryCoverage }}<br>
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
                        <v-img :src="getImageSrc(nearestmedicalInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ nearestmedicalInsurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            生效期限（单位：天）： {{ nearestmedicalInsurance.effectPeriod }}<br>
                            适用人群： {{ nearestmedicalInsurance.applicablePopulation }}<br><br>

                            重疾覆盖额度：  {{ nearestmedicalInsurance.criticalIllness }}<br>
                            紧急救援：  {{ nearestmedicalInsurance.emergencyAssistance }}<br>
                            医疗覆盖额度：  {{ nearestmedicalInsurance.hospitalCoverage }}<br>
                            门诊覆盖额度：  {{ nearestmedicalInsurance.outpatientCoverage }}<br>
                            保险公司名称：  {{ nearestmedicalInsurance.companyName }}<br>
                            手术覆盖额度：  {{ nearestmedicalInsurance.surgeryCoverage }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ nearestmedicalInsurance.price }}</span>
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
                        <v-img :src="getImageSrc(associatedmedicalInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ associatedmedicalInsurance.planName }}</v-card-title>
                        <v-card-text class="pl-0">
                            生效期限（单位：天）： {{ associatedmedicalInsurance.effectPeriod }}<br>
                            适用人群： {{ associatedmedicalInsurance.applicablePopulation }}<br><br>

                            重疾覆盖额度：  {{ associatedmedicalInsurance.criticalIllness }}<br>
                            紧急救援：  {{ associatedmedicalInsurance.emergencyAssistance }}<br>
                            医疗覆盖额度：  {{ associatedmedicalInsurance.hospitalCoverage }}<br>
                            门诊覆盖额度：  {{ associatedmedicalInsurance.outpatientCoverage }}<br>
                            保险公司名称：  {{ associatedmedicalInsurance.companyName }}<br>
                            手术覆盖额度：  {{ associatedmedicalInsurance.surgeryCoverage }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ associatedmedicalInsurance.price }}</span>
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
const associatedmedicalInsurance = ref({});
const nearestmedicalInsurance = ref({});
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
        associatedmedicalInsurance.value = response2.data.data;

        const response3 = await urlencodedInstance.post('/medicalInsurance/getNearestMedicalInsurance', formData);
        nearestmedicalInsurance.value = response3.data.data;

    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
});

function getImageSrc(id) {
    return new URL(`../assets/medical/${id}.jpg`, import.meta.url).href;
}
</script>
