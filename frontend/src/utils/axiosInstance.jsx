// src/utils/axiosInstance.jsx
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7001',
  timeout: 10000,
});

export default axiosInstance;