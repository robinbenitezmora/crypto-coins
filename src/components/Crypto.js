import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoinSimple, initialState } from '../redux/coinsimple';

const Crypto = () => {
  const parameters = useParams();
  const dispatch = useDispatch();
  const singleCoin = useSelector((state) => state.coinSimple);

  useEffect(() => {
    dispatch(fetchCoinSimple(parameters));
  }, []);

  return (
    <div className="cryptoContainer">
      <div className="cryptoTitle">
        <h2>{singleCoin.name}</h2>
        <p>{singleCoin.symbol}</p>
      </div>
      {
        singleCoin === initialState
          ? (
            <div className="loading">
              <p>Loading...</p>
              <img className="loadingImg" src="https://i.imgur.com/3spxlXG.gif" alt="loading" />
            </div>
          )
          : (
            <div>
              <div className="cryptoHeader">
                <div className="divider">
                  <h3 className="cryptoHeaderSubTitle">Category:</h3>
                  <p className="cryptoCategory">
                    {singleCoin.categories[1] ? singleCoin.categories[1] : singleCoin.categories[0]}
                  </p>
                </div>
                <div className="divider">
                  <h3 className="cryptoSubTitle">CMC Rank:</h3>
                  <p className="cryptoRank">{singleCoin.coingecko_rank}</p>
                </div>
                <div className="divider">
                  <h3 className="cryptoSubTitle">Price</h3>
                  <p className="cryptoPrice">
                    $
                    {singleCoin.market_data.current_price.usd}
                  </p>
                </div>
                <div className="divider divider-img">
                  <img className="cryptoImg" src={singleCoin.image.small} alt="crypto" />
                </div>
              </div>
              <div className="cryptoBody">
                <h3 className="cryptoBodytitle">Periodical Changes</h3>
                <div className="cryptoPrices">
                  <div className="variations">
                    <h3 className="cryptoPrice">60 days:</h3>
                    <p className="cryptoPrice">
                      {`%${singleCoin.market_data.price_change_percentage_60d_in_currency.usd}`}
                    </p>
                  </div>
                  <div className="variations">
                    <h3 className="cryptoPrice">30 days:</h3>
                    <p className="cryptoPrice">
                      {`%${singleCoin.market_data.price_change_percentage_30d_in_currency.usd}`}
                    </p>
                  </div>
                  <div className="variations">
                    <h3 className="cryptoPrice">7 days:</h3>
                    <p className="cryptoPrice">
                      {`%${singleCoin.market_data.price_change_percentage_7d_in_currency.usd}`}
                    </p>
                  </div>
                  <div className="variations">
                    <h3 className="cryptoPrice">24 hours:</h3>
                    <p className="cryptoPrice">
                      {`%${singleCoin.market_data.price_change_percentage_24h_in_currency.usd}`}
                    </p>
                  </div>
                  <div className="variations">
                    <h3 className="cryptoPrice">1 hour:</h3>
                    <p className="cryptoPrice">
                      {`%${singleCoin.market_data.price_change_percentage_1h_in_currency.usd}`}
                    </p>
                  </div>
                </div>
                <div className="cryptoDetails">
                  <h3 className="cryptoBodytitle">Daily Tracking</h3>
                  <div className="cryptoSupply">
                    <h3>High 24h:</h3>
                    <p className="cryptoPrice">{`$${singleCoin.market_data.high_24h.usd}`}</p>
                  </div>
                  <div className="cryptoSupply">
                    <h3>Low 24h:</h3>
                    <p className="cryptoPrice">{`$${singleCoin.market_data.low_24h.usd}`}</p>
                  </div>
                </div>
                <div className="cryptoDetails">
                  <div className="cryptoSupply">
                    <h3>Total Supply:</h3>
                    <p className="cryptoPrice">{singleCoin.market_data.total_supply}</p>
                  </div>
                  <div className="cryptoSupply">
                    <h3>Max Supply:</h3>
                    <p className="cryptoPrice">{singleCoin.market_data.max_supply}</p>
                  </div>
                  <div className="cryptoSupply">
                    <h3>Circulating Supply:</h3>
                    <p className="cryptoPrice">{singleCoin.market_data.circulating_supply}</p>
                  </div>
                </div>
                <div className="cryptoSocial">
                  <a href={singleCoin.links.homepage[0]} target="_blank" rel="noreferrer">
                    <img className="socialImg" src="https://i.imgur.com/1ZQ3wvD.png" alt="website" />
                  </a>
                  <a href={singleCoin.links.subreddit_url} target="_blank" rel="noreferrer">
                    <img className="socialImg" src="https://i.imgur.com/1ZQ3wvD.png" alt="website" />
                  </a>
                  <a href={singleCoin.links.twitter_screen_name} target="_blank" rel="noreferrer">
                    <img className="socialImg" src="https://i.imgur.com/1ZQ3wvD.png" alt="website" />
                  </a>
                  <a href={singleCoin.links.telegram_channel_identifier} target="_blank" rel="noreferrer">
                    <img className="socialImg" src="https://i.imgur.com/1ZQ3wvD.png" alt="website" />
                  </a>
                </div>
              </div>
            </div>
          )
      }
    </div>
  );
};

export default Crypto;
