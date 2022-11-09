import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {
  getCharacterListAPI,
  getEpisodeListAPI,
  getEpisodeListByIdAPI,
} from '../../services/productApi';

export interface Resource<T> {
  data: T | null | undefined;
  pending: boolean | null;
  err: string | null | undefined;
}

export function emptyResource<T>() {
  const resource: Resource<T> = {
    data: null,
    pending: null,
    err: null,
  };
  return resource;
}

interface IProduct {
  character: Resource<any>;
  episode: Resource<any>;
  episodeById: Resource<any>;
}

const initialState: IProduct = {
  character: emptyResource(),
  episode: emptyResource(),
  episodeById: emptyResource(),
};

const getCharacterListAT = createAsyncThunk('async/character', async (_, thunkAPI) => {
  // console.log('burda :>> ');
  try {
    const response = await getCharacterListAPI();
    // console.log('response :>> ', response);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getEpisodeListAT = createAsyncThunk(
  'async/episode',
  async (_, thunkAPI) => {
    try {
      const response = await getEpisodeListAPI();
      if (response) {
        return response;
      } else {
        return thunkAPI.rejectWithValue('no product timing');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const getEpisodeListByIdAT = createAsyncThunk('async/episodeById', async (val, thunkAPI) => {
  console.log("val", val);
  
  try {
    const response = await getEpisodeListByIdAPI(val);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no hotdeal');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const productsSlice = createSlice({
  name: 'ecom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // => character start
    builder.addCase(getCharacterListAT.pending, (state, _) => {
      state.character.pending = true;
      state.character.data = null;
      state.character.err = null;
    });
    builder.addCase(getCharacterListAT.fulfilled, (state, action) => {
      state.character.data = action.payload;
      state.character.err = null;
      state.character.pending = false;
    });
    builder.addCase(getCharacterListAT.rejected, (state, action) => {
      state.character.err = action.error.message;
      state.character.data = null;
      state.character.pending = false;
    });
    // <= character end
    // => episode list start
    builder.addCase(getEpisodeListAT.pending, (state, _) => {
      state.episode.pending = true;
      state.episode.data = null;
      state.episode.err = null;
    });
    builder.addCase(getEpisodeListAT.fulfilled, (state, action) => {
      state.episode.data = action.payload;
      state.episode.err = null;
      state.episode.pending = false;
    });
    builder.addCase(getEpisodeListAT.rejected, (state, action) => {
      state.episode.err = action.error.message;
      state.episode.data = null;
      state.episode.pending = false;
    });
    // <= productTimings end
    // => episodeById start
    builder.addCase(getEpisodeListByIdAT.pending, (state, _) => {
      state.episodeById.pending = true;
      state.episodeById.data = null;
      state.episodeById.err = null;
    });
    builder.addCase(getEpisodeListByIdAT.fulfilled, (state, action) => {
      state.episodeById.data = action.payload;
      state.episodeById.err = null;
      state.episodeById.pending = false;
    });
    builder.addCase(getEpisodeListByIdAT.rejected, (state, action) => {
      state.episodeById.err = action.error.message;
      state.episodeById.data = null;
      state.episodeById.pending = false;
    });
    // <= episodeById end
  },
});

export const characterActions = {
  getCharacterListAT,
  getEpisodeListAT,
  getEpisodeListByIdAT,
};

export const characterSelectors = {
  character: (state: any) => state.appReducer.character,
  episode: (state: any) => state.appReducer.episode,
  episodeById: (state: any) => state.appReducer.episodeById,
};

export default productsSlice.reducer;