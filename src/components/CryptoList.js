/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CryptoElement from './CryptoStructure';
import Crypto from './Crypto';

const CryptoElementList = (props) => {
  const { cryptos, search } = props;

  const filteredCryptos = cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()) || crypto.symbol.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="cryptoList">
      <h3 className="cryptoListTitle">CRYPTO COINS CURRENT RANKING</h3>
      <ul className="cryptoListContainer">
        {filteredCryptos.map((crypto) => (
          <Link to={`/crypto/${crypto.id}`} element={<Crypto />} key={crypto.id}>
            <CryptoElement crypto={crypto} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

CryptoElementList.propTypes = {
  cryptos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
      price: PropTypes.number,
      rank: PropTypes.number,
      image: PropTypes.string,
    }),
  ).isRequired,
  search: PropTypes.string.isRequired,
};

export default CryptoElementList;
