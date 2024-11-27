import { createWebHistory, createRouter } from 'vue-router';
import mainView from './mainView';
import { useTokenStore } from '@/pinia/tokenStore';
import { useUsernameStore } from '@/pinia/usernameStore';
import { urlencodedInstance } from '@/axios';
import { watch } from 'vue';

const routes = [
    {
        path: '/',
        component: () => import('@/components/MainView.vue'),
        children: mainView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const tokenStore = useTokenStore();
    const usernameStore = useUsernameStore();

    if (tokenStore.token == null && to.meta.requiresAuth) {
        next({
            path: '/login',
            query: { redirect: to.fullPath },
        });
    } else if (to.meta.requiresAuth) {
        const formData = new URLSearchParams();
        formData.append('token', tokenStore.token);

        try {
            const response = await urlencodedInstance.post('/user/validateToken', formData);

            if (response.data.data === true) {
                console.log('Token is valid');
                next();
            } else {
                usernameStore.username = '';
                next({
                    path: '/login',
                    query: { redirect: to.fullPath },
                });
            }
        } catch (error) {
            console.log(error);
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            });
        }
    } else {
        next();
    }
});

export { router };
