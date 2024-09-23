import axios from 'axios';
import {Platform} from "react-native";

const axiosInstance = axios.create({
    baseURL: /* 안드로이드 판단하여 url 변경 (안드로이드에서 localhost 작동이 잘 안됨) */
        Platform.OS === 'android' ? 'http://10.0.2.2:3030' : 'http://localhost:3030',
    withCredentials: true,
});

export default axiosInstance;