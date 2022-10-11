import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoinSimple = createAsyncThunk(
  'coinsimple/fetchCoinSimple',
  async (id) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${Object.values(id)}`);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  message: true,
};

export const coinSimpleSlice = createSlice({
  name: 'coinsimple',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoinSimple.pending]: () => initialState,
    [fetchCoinSimple.fulfilled]: (state, action) => action.payload,
  },
});

export default coinSimpleSlice.reducer;
export { initialState };
