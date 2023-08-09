import axios from 'axios';


const url  = "https://conceptcelerio.com/"
const localurl = "http://localhost:8000/"
// Create a new Axios instance
const token = localStorage.getItem('accessToken')
const axiosInstance = axios.create({
  baseURL: localurl, // Set the base URL for all requests
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, // Set default headers
  },
});

// You can also add interceptors to handle request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request configuration
    console.log('Request Interceptor:', config);
    return config;
  },
  (error) => {
    // Handle request errors
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data
    console.log('Response Interceptor:', response);
    return response;
  },
  (error) => {
    // Handle response errors
    console.error('Response Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
