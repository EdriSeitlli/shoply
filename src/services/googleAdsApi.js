import axios from 'axios';

// Base configuration for the API
const apiClient = axios.create({
  baseURL: 'https://backend.shoply.pro',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add static Shop ID to all requests
apiClient.interceptors.request.use((config) => {
  // Add the static shop ID to the headers
  config.headers['Shop-ID'] = '56'; // Static shop ID for all requests
  return config;
});

/**
 * Fetch all products
 */
export const fetchAllProducts = async () => {
  try {
    const response = await apiClient.get('api/googleAds/all_products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
