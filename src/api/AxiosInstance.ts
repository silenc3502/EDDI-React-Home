import axios from 'axios';
import env from "../env";

const axiosInstance = axios.create({
    baseURL: env.api.MAIN_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;