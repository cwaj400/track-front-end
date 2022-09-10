import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//using ngrok for local development
//Restart ngrok, give new url, add to new baseURL to axios
const instance = axios.create({
    baseURL: 'http://3c85-188-31-73-43.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {

        return Promise.reject(err);
    }
)

export default instance;
