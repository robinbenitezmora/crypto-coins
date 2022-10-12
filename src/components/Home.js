import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoCurrencies } from '../redux/cryptoreducer';
import CryptoElementList from './CryptoList';

const Home = () => {
  const cryptos = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCryptoCurrencies());
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className="homeSearch">
        <input type="text" placeholder="Search your Crypto" onChange={handleChange} value={search} />
      </div>
      <CryptoElementList cryptos={cryptos} search={search} />
    </div>
  );
};

export default Home;
