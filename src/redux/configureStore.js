import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoreducer';
import coinSimpleReducer from './coinsimple';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    coinSimple: coinSimpleReducer,
  },
});

export default store;
