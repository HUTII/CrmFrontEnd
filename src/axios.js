import axios from "axios";
import { useTokenStore } from "./pinia/tokenStore";
const tokenStore = useTokenStore();

const jsonInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenStore.token}`
    }
})

const urlencodedInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${tokenStore.token}`
    }
})

export default jsonInstance
export { urlencodedInstance };