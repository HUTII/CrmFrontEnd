import axios from "axios";
import { useTokenStore } from "./pinia/tokenStore";

const jsonInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    }
});

const urlencodedInstance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 5000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
});

// 添加请求拦截器，在请求发送前动态设置 Authorization 头
jsonInstance.interceptors.request.use(config => {
    const tokenStore = useTokenStore();
    config.headers.Authorization = `Bearer ${tokenStore.token}`;
    return config;
});

urlencodedInstance.interceptors.request.use(config => {
    const tokenStore = useTokenStore();
    config.headers.Authorization = `Bearer ${tokenStore.token}`;
    return config;
});

export default jsonInstance;
export { urlencodedInstance };