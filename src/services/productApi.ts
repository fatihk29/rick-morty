import axiosClient from './api';

const endPoints = {
  character: 'character',
  episode: '/episode',
  hotdeals: '/hotdeals',
};

// get Character List
export const getCharacterListAPI = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.character);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// '/productTimings'
export const getEpisodeListAPI = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.episode);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

// '/hotdeals'
export const getHotDeals = async (): Promise<any> => {
  try {
    const response = await axiosClient.get(endPoints.hotdeals);
    // console.log('response', response?.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};