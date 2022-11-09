import axiosClient from './api';

const endPoints = {
  character: 'character',
  episode: 'episode',
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

// get Episode List
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

// get Episode by ID
export const getEpisodeListByIdAPI = async (val: any): Promise<any> => {
  try {
    const response = await axiosClient.get(`${endPoints.episode}/${val}`);
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
