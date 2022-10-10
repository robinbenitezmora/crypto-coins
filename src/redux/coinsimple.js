import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoinSimple = createAsyncThunk(
  'coinsimple/fetchCoinSimple',
  async (id) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${Object.values(id)}`);
    const data = await response.json();
    return data;
  },
);

const firstState = {
  message: true,
};

const coinsimpleSlice = createSlice({
  name: 'coinsimple',
  initialState: firstState,
  reducers: {},
  extraReducers: {
    [fetchCoinSimple.pending]: () => firstState,
    [fetchCoinSimple.fulfilled]: (state, action) => action.payload,
    [fetchCoinSimple.rejected]: () => firstState,
  },
});

export default coinsimpleSlice.reducer;
export { firstState };
