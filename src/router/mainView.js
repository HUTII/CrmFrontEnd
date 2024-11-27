export default [
    {
        path: '',
        component: () => import('@/components/Home.vue')
    },
    {
        path: '/travel',
        component: () => import('@/components/Travel.vue')
    },
    {
        path: '/travel/:id',
        component: () => import('@/components/TravelInsurance.vue')
    },
    {
        path: '/accident',
        component: () => import('@/components/Accident.vue')
    },
    {
        path:   'medical',
        component: () => import('@/components/Medical.vue')
    },
    {
        path: '/medical/:id',
        component: () => import('@/components/MedicalInsurance.vue')
    }
]