import React from 'react';
import PropTypes from 'prop-types';

const CryptoElement = (props) => {
  const { crypto } = props;
  const {
    name, symbol, price, id, rank, image,
  } = crypto;

  return (
    <li className="crypto-element">
      <div className="homeElement" id={id}>
        <div className="rank-arrow">
          <p className="rank">
            RANK #
            {' '}
            {rank}
          </p>
          <img className="image" src={image} alt={name} />
        </div>
        <div className="home-element-info">
          <h3 className="name">{name}</h3>
          <p className="symbol">{`(${symbol})`}</p>
          <p className="price">{`$${price.toLocaleString()}`}</p>
        </div>
      </div>
    </li>
  );
};

CryptoElement.propTypes = {
  crypto: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    rank: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CryptoElement;
