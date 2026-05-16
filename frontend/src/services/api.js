import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:5000/api',
});

// Request interceptor to add the JWT token to headers if it exists
api.interceptors.request.use((config) => {
    const userInfo = localStorage.getItem('userInfo');
    const token = userInfo ? JSON.parse(userInfo).token : null;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
