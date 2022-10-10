import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h';

export const fetchCryptonCurrencies = createAsyncThunk(
  'cryptocurrency/fetchCryptoData',
  async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const cryptoData = data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      image: crypto.image,
      current_price: crypto.current_price,
      rank: crypto.market_cap_rank,
      highprice: crypto.high_24h,
      lowprice: crypto.low_24h,
      circulating_supply: crypto.circulating_supply,
      total: crypto.total_supply,
      max: crypto.max_supply,
      price_change_percentage_24h: crypto.price_change_percentage_24h,
      price_change_percentage_7d: crypto.price_change_percentage_7d,
      price_change_percentage_14d: crypto.price_change_percentage_14d,
      price_change_percentage_30d: crypto.price_change_percentage_30d,
      price_change_percentage_60d: crypto.price_change_percentage_60d,
    }));
    return cryptoData;
  },
);

const initialState = [];

export const cryptoSlice = createSlice({
  name: 'cryptocurrency',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCryptonCurrencies.fulfilled]: (state, action) => action.payload,
  },
});

export default cryptoSlice.reducer;
