import React from 'react';
import Proptypes from 'prop-types';

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
          <div className="home-element-image">
            <img className="image" src={image} alt={name} />
          </div>
          <h3 className="name">{name}</h3>
          <p className="symbol">{`(${symbol})`}</p>
          <p className="price">{`$${price.toLocaleString()}`}</p>
        </div>
      </div>
    </li>
  );
};

CryptoElement.propTypes = {
  crypto: Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    symbol: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    rank: Proptypes.number.isRequired,
    image: Proptypes.string.isRequired,
  }).isRequired,
};

export default CryptoElement;
