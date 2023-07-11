import axios from 'axios';


const url  = "http://143.110.186.152"
// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL: url, // Set the base URL for all requests
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-token', // Set default headers
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