export default [
    {
        path: '',
        component: () => import('@/components/Home.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/travel',
        component: () => import('@/components/Travel.vue'),
        meta: { requiresAuth: true }
        
    },
    {
        path: '/travel/:id',
        component: () => import('@/components/TravelInsurance.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/accident',
        component: () => import('@/components/Accident.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/accident/:id',
        component: () => import('@/components/AccidentInsurance.vue'),
        meta: { requiresAuth: true }
    },
    {
        path:   'medical',
        component: () => import('@/components/Medical.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/medical/:id',
        component: () => import('@/components/MedicalInsurance.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/car',
        component: () => import('@/components/Car.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/car/:id',
        component: () => import('@/components/CarInsurance.vue'),
        meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: () => import('@/components/Login.vue'),
      meta: { requiresAuth: false }
    }
]