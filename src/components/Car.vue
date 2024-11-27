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
                            productType： {{ insurance.productType }}<br><br>
                            
                            coverage：  {{ insurance.coverage }}<br>
                            compensationLimit：  {{ insurance.compensationLimit }}<br>
                            description：  {{ insurance.description }}<br>
                            insuranceCompany：  {{ insurance.insuranceCompany }}<br>
                            benefits：  {{ insurance.benefits }}<br>
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