import { defineStore } from "pinia";

export const useUsernameStore = defineStore('username', {
    state: () => ({ 
        username: ''
    }),
    persist: true
})