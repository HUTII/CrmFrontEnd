import { defineStore } from "pinia";

export const useTokenStore = defineStore('token', {
    state: () => ({ 
        token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMDAxIiwiY3JlYXRlZCI6MTczMjYyNzA0ODcwMCwiZXhwIjoxNzMzMjMxODQ4fQ.TqK1EjWO6J19856Bz5F72-nZv3pdpz_1xm5p9ilLheiAMTCVtBERnVdre6BXOVa7gZXnyU_r5ypUxH47LyxS7Q'
    })
})