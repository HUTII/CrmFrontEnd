<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(travelInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ travelInsurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ travelInsurance.effectPeriod }}<br><br>
                            
                            旅程阻碍保障：  {{ travelInsurance.tripDelay }}<br>
                            个人财产保障：  {{ travelInsurance.personalProperty }}<br>
                            医疗保障：  {{ travelInsurance.medicalCoverage }}<br>
                            个人责任：  {{ travelInsurance.personalLiability }}<br>
                            紧急救援：  {{ travelInsurance.emergencyAssistance }}<br>
                            意外死亡：  {{ travelInsurance.accidentDeath }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ travelInsurance.price }}</span>
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
                        <v-img :src="getImageSrc(associatedTravelInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ associatedTravelInsurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ associatedTravelInsurance.effectPeriod }}<br><br>
                            
                            旅程阻碍保障：  {{ associatedTravelInsurance.tripDelay }}<br>
                            个人财产保障：  {{ associatedTravelInsurance.personalProperty }}<br>
                            医疗保障：  {{ associatedTravelInsurance.medicalCoverage }}<br>
                            个人责任：  {{ associatedTravelInsurance.personalLiability }}<br>
                            紧急救援：  {{ associatedTravelInsurance.emergencyAssistance }}<br>
                            意外死亡：  {{ associatedTravelInsurance.accidentDeath }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ associatedTravelInsurance.price }}</span>
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
                        <v-img :src="getImageSrc(nearestTravelInsurance.id)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ nearestTravelInsurance.name }}</v-card-title>
                        <v-card-text class="pl-0">
                            有效期限： {{ nearestTravelInsurance.effectPeriod }}<br><br>
                            
                            旅程阻碍保障：  {{ nearestTravelInsurance.tripDelay }}<br>
                            个人财产保障：  {{ nearestTravelInsurance.personalProperty }}<br>
                            医疗保障：  {{ nearestTravelInsurance.medicalCoverage }}<br>
                            个人责任：  {{ nearestTravelInsurance.personalLiability }}<br>
                            紧急救援：  {{ nearestTravelInsurance.emergencyAssistance }}<br>
                            意外死亡：  {{ nearestTravelInsurance.accidentDeath }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ nearestTravelInsurance.price }}</span>
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

const travelInsurance = ref({});
const associatedTravelInsurance = ref({});
const nearestTravelInsurance = ref({});
const route = useRoute(); // 获取 route 对象
const router = useRouter(); // 获取 router 对象

onMounted(async () => {
    try {
        const formData = new URLSearchParams();
        formData.append('id', route.params.id);

        const response = await urlencodedInstance.post('/travelInsurance/getTravelInsuranceById', formData);
        if (response.data.status == -1) {
            router.push('/login');
        }
        travelInsurance.value = response.data.data;

        const response2 = await urlencodedInstance.post('/travelInsurance/getAssociatedTravelInsurance', formData);
        associatedTravelInsurance.value = response2.data.data;

        const response3 = await urlencodedInstance.post('/travelInsurance/getNearestTravelInsurance', formData);
        nearestTravelInsurance.value = response3.data.data;
        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
});

function getImageSrc(id) {
    return new URL(`../assets/travel/${id}.jpg`, import.meta.url).href;
}
</script>