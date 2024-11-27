<template>
    <v-container>
        <v-card>
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(carInsurance.productId)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ carInsurance.productName }}</v-card-title>
                        <v-card-text class="pl-0">
                            productType： {{ carInsurance.productType }}<br><br>
                            
                            coverage：  {{ carInsurance.coverage }}<br>
                            compensationLimit：  {{ carInsurance.compensationLimit }}<br>
                            description：  {{ carInsurance.description }}<br>
                            insuranceCompany：  {{ carInsurance.insuranceCompany }}<br>
                            benefits：  {{ carInsurance.benefits }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ carInsurance.price }}</span>
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
                        <v-img :src="getImageSrc(associatedCarInsurance.productId)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ associatedCarInsurance.productName }}</v-card-title>
                        <v-card-text class="pl-0">
                            productType： {{ associatedCarInsurance.productType }}<br><br>
                            
                            coverage：  {{ associatedCarInsurance.coverage }}<br>
                            compensationLimit：  {{ associatedCarInsurance.compensationLimit }}<br>
                            description：  {{ associatedCarInsurance.description }}<br>
                            insuranceCompany：  {{ associatedCarInsurance.insuranceCompany }}<br>
                            benefits：  {{ associatedCarInsurance.benefits }}<br>
                        </v-card-text>
                    </v-col>
                    <v-col cols="2" class="align-content-end pb-8">
                        <span class="price">￥{{ associatedCarInsurance.price }}</span>
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

const carInsurance = ref({});
const associatedCarInsurance = ref({});
const route = useRoute(); // 获取 route 对象
const router = useRouter(); // 获取 router 对象

onMounted(async () => {
    try {
        const formData = new URLSearchParams();
        formData.append('id', route.params.id);

        const response = await urlencodedInstance.post('/carInsurance/getCarInsuranceByCarId', formData);
        if (response.data.status == -1) {
            router.push('/login');
        }
        carInsurance.value = response.data.data;

        const response2 = await urlencodedInstance.post('/carInsurance/getAssociatedCarInsurance', formData);
        associatedCarInsurance.value = response2.data.data;
        
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
});

function getImageSrc(id) {
    return new URL(`../assets/car/${id}.jpg`, import.meta.url).href;
}
</script>