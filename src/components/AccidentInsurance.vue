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
                            
                            accidentCoverage：  {{ accidentInsurance.accidentCoverage }}<br>
                            disabilityCoverage：  {{ accidentInsurance.disabilityCoverage }}<br>
                            emergencyAssistance：  {{ accidentInsurance.emergencyAssistance }}<br>
                            emergencyAssistance：  {{ accidentInsurance.emergencyAssistance }}<br>
                            outpatientCoverage：  {{ accidentInsurance.outpatientCoverage }}<br>
                            personalLiability：  {{ accidentInsurance.personalLiability }}<br>
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
                            
                            accidentCoverage：  {{ nearestAccidentInsurance.accidentCoverage }}<br>
                            disabilityCoverage：  {{ nearestAccidentInsurance.disabilityCoverage }}<br>
                            emergencyAssistance：  {{ nearestAccidentInsurance.emergencyAssistance }}<br>
                            emergencyAssistance：  {{ nearestAccidentInsurance.emergencyAssistance }}<br>
                            outpatientCoverage：  {{ nearestAccidentInsurance.outpatientCoverage }}<br>
                            personalLiability：  {{ nearestAccidentInsurance.personalLiability }}<br>
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