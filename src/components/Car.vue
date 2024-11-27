<template>
    <v-container>
        <v-card v-for="insurance in carInsurance" class="mb-5 cursor-pointer" :to="`/car/${insurance.productId}`">
            
            <v-card-item>
                <v-row>
                    <v-col cols="2">
                        <v-img :src="getImageSrc(insurance.productId)" height="200" width="200"></v-img>
                    </v-col>
                    <v-col cols="8">
                        <v-card-title>{{ insurance.productName }}</v-card-title>
                        <v-card-text class="pl-0">
                            保险类型： {{ insurance.productType }}<br><br>
                            
                            保障范围：  {{ insurance.coverage }}<br>
                            赔付限额：  {{ insurance.compensationLimit }}元<br>
                            产品描述：  {{ insurance.description }}<br>
                            保险公司信息：  {{ insurance.insuranceCompany }}<br>
                            本保险为您提供的好处：  {{ insurance.benefits }}<br>
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

const carInsurance = ref([]);
const axios = ref(jsonInstance);

onMounted(async () => {
    try {
        const response = await axios.value.post('/carInsurance/getAllCarInsurances');
        if (response.data.status == -1) {
            this.$router.push('/login');
        }
        carInsurance.value = response.data.data;
        console.log(carInsurance.value);
        
    } catch {
        console.log('Error');
    }
});

function getImageSrc(id) {
    return new URL(`../assets/car/${id}.jpg`, import.meta.url).href;
}

</script>