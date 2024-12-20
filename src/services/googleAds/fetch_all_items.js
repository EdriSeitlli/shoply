import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API URL
  timeout: 10000, // Request timeout in ms
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token or modify config here
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here
    return Promise.reject(error);
  }
);

export default api;
