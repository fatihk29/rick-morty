import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {
  getCharacterListAPI,
  getEpisodeListAPI,
  getHotDeals,
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
  products: Resource<any>;
  productTimings: Resource<any>;
  hotdeals: Resource<any>;
}

const initialState: IProduct = {
  products: emptyResource(),
  productTimings: emptyResource(),
  hotdeals: emptyResource(),
};

const getCharacterListAT = createAsyncThunk('ecom/products', async (_, thunkAPI) => {
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
  'ecom/productTimings',
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

const getHotDealsAT = createAsyncThunk('ecom/hotdeals', async (_, thunkAPI) => {
  try {
    const response = await getHotDeals();
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
    // => products start
    builder.addCase(getCharacterListAT.pending, (state, _) => {
      state.products.pending = true;
      state.products.data = null;
      state.products.err = null;
    });
    builder.addCase(getCharacterListAT.fulfilled, (state, action) => {
      state.products.data = action.payload;
      state.products.err = null;
      state.products.pending = false;
    });
    builder.addCase(getCharacterListAT.rejected, (state, action) => {
      state.products.err = action.error.message;
      state.products.data = null;
      state.products.pending = false;
    });
    // <= products end
    // => productTimings start
    builder.addCase(getEpisodeListAT.pending, (state, _) => {
      state.productTimings.pending = true;
      state.productTimings.data = null;
      state.productTimings.err = null;
    });
    builder.addCase(getEpisodeListAT.fulfilled, (state, action) => {
      state.productTimings.data = action.payload;
      state.productTimings.err = null;
      state.productTimings.pending = false;
    });
    builder.addCase(getEpisodeListAT.rejected, (state, action) => {
      state.productTimings.err = action.error.message;
      state.productTimings.data = null;
      state.productTimings.pending = false;
    });
    // <= productTimings end
    // => hotdeals start
    builder.addCase(getHotDealsAT.pending, (state, _) => {
      state.hotdeals.pending = true;
      state.hotdeals.data = null;
      state.hotdeals.err = null;
    });
    builder.addCase(getHotDealsAT.fulfilled, (state, action) => {
      state.hotdeals.data = action.payload;
      state.hotdeals.err = null;
      state.hotdeals.pending = false;
    });
    builder.addCase(getHotDealsAT.rejected, (state, action) => {
      state.hotdeals.err = action.error.message;
      state.hotdeals.data = null;
      state.hotdeals.pending = false;
    });
    // <= hotdeals end
  },
});

export const characterActions = {
  getCharacterListAT,
  getEpisodeListAT,
  getHotDealsAT,
};

export const characterSelectors = {
  character: (state: any) => state.appReducer.products,
  episode: (state: any) => state.appReducer.productTimings,
};

export default productsSlice.reducer;