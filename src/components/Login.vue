<template>
    <v-container class="d-flex justify-center align-center h-100">
        <v-card class="px-6 py-8" width="500" height="300" elevation="4">
            <v-form
            v-model="form"
            @submit.prevent="login()"
            >
            <v-text-field
                v-model="username"
                :readonly="loading"
                class="mb-2"
                label="Username"
                variant="underlined"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :readonly="loading"
                label="Password"
                placeholder="Enter your password"
                variant="underlined"
            ></v-text-field>

            <br>

            <v-btn
                :disabled="!form"
                :loading="loading"
                size="large"
                type="submit"
                variant="outlined"
                block
            >
                Sign In
            </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { urlencodedInstance } from '@/axios';
import { useTokenStore } from '@/pinia/tokenStore';
import { useUsernameStore } from '@/pinia/usernameStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const form = ref(false);
const username = ref('');
const password = ref('');
const loading = ref(false);

const login = async () => {
    try {
        loading.value = true;
        const tokenStore = useTokenStore();
        const usernameStore = useUsernameStore();
        const formData = new URLSearchParams();
        formData.append('username', username.value);
        formData.append('password', password.value);
        const response = await urlencodedInstance.post('/user/login', formData);
        console.log(response);
        if (response.data.status === 200) {
            tokenStore.token = response.data.data;
            console.log(tokenStore.token);

            try {
                const formData2 = new URLSearchParams();
                formData2.append('token', tokenStore.token);
                const response2 = await urlencodedInstance.post('/user/getUsername', formData2);
                console.log(response2);
                if (response2.data.status === 200) {
                    usernameStore.username = response2.data.data;
                    console.log(usernameStore.username);
                }
            } catch (error) {
                console.error(error);
            }

            const redirectPath = route.query.redirect || '/';
            router.push(redirectPath);
        } else {
            alert('用户名或密码错误');
        }
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}
</script>