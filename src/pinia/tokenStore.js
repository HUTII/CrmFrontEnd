import { defineStore } from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => ({ 
        token: null,
    }),
    persist: true
})