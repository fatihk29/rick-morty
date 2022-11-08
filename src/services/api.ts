import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// const baseUrl = 'http://5e394071aad22200149625f8.mockapi.io';
const API_URL = 'https://rickandmortyapi.com/api/';

const axiosClient = axios.create({
  baseURL: API_URL,
});

axiosClient.interceptors.request.use(
  async configs => {
    const token = await AsyncStorage.getItem('token');
    configs.headers.authorization = `Bearer ${token}`;
    return configs;
  },
  error => {
    // console.log('request Error:', error);
  },
);

axiosClient.interceptors.response.use(
  configs => {
    if (configs.status !== 200 && configs.status !== 201) {
      // console.log('Server Api:', configs.status);
    }
    return configs;
  },
  error => {
    if (error.status !== 200 && error.status !== 201) {
      // console.log('Server Api:', error);
    }
    return error;
  },
);

export default axiosClient;
