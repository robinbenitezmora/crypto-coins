import { Navlink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <div className="logo-container">
      <Navlink to="/">
        <div className="logo">
          <img src="http://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="logo" />
          <h1>CryptoVerse</h1>
        </div>
      </Navlink>
    </div>
    <div className="nav-links">
      <ul>
        <li>
          <Navlink to="/">Home</Navlink>
        </li>
        <li>
          <Navlink to="/exchanges">Exchanges</Navlink>
        </li>
        <li>
          <Navlink to="/news">News</Navlink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
