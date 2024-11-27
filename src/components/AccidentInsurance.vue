<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(accidentInsurance.id)" height="200" width="200" ></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ accidentInsurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ accidentInsurance.effectPeriod }}<br><br>
                            
                            意外保障：  {{ accidentInsurance.accidentCoverage }}<br>
                            残疾保障：  {{ accidentInsurance.disabilityCoverage }}<br>
                            紧急救援：  {{ accidentInsurance.emergencyAssistance }}<br>
                            住院保障:   {{ accidentInsurance.hospitalCoverage}}<br>
                            门诊保障：  {{ accidentInsurance.outpatientCoverage }}<br>
                            个人责任：  {{ accidentInsurance.personalLiability }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ accidentInsurance.price }}</span>
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
                        <v-img :src="getImageSrc(nearestAccidentInsurance.id)" height="200" width="200" ></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ nearestAccidentInsurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ nearestAccidentInsurance.effectPeriod }}<br><br>
                            
                            意外保障：  {{ nearestAccidentInsurance.accidentCoverage }}<br>
                            残疾保障：  {{ nearestAccidentInsurance.disabilityCoverage }}<br>
                            紧急救援：  {{ nearestAccidentInsurance.emergencyAssistance }}<br>
                            住院保障: {{ nearestAccidentInsurance.hospitalCoverage}}<br>
                            门诊保障：  {{ nearestAccidentInsurance.outpatientCoverage }}<br>
                            个人责任：  {{ nearestAccidentInsurance.personalLiability }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ nearestAccidentInsurance.price }}</span>
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

const accidentInsurance = ref({});
const nearestAccidentInsurance = ref({});
const route = useRoute(); // 获取 route 对象
const router = useRouter(); // 获取 router 对象

onMounted(async () => {
    try {
        const formData = new URLSearchParams();
        formData.append('id', route.params.id);

        const response = await urlencodedInstance.post('/accidentInsurance/getAccidentInsuranceById', formData);
        if (response.data.status == -1) {
            router.push('/login');
        }
        accidentInsurance.value = response.data.data;

        const response3 = await urlencodedInstance.post('/accidentInsurance/getNearestAccidentInsurance', formData);
        nearestAccidentInsurance.value = response3.data.data;
        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
});

function getImageSrc(id) {
    return new URL(`../assets/accident/${id}.jpg`, import.meta.url).href;
}
</script>