import { NavLink } from 'react-router-dom';
import { AiFillStepBackward } from 'react-icons/ai';
import { SiBitcoin } from 'react-icons/si';
import { BsBatteryHalf } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { VscSettingsGear } from 'react-icons/vsc';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        <AiFillStepBackward className="navbar-return" />
        <span>2022</span>
      </NavLink>
      <NavLink to="/" className="navbar-brand-title">
        <SiBitcoin className="navbar-img" />
        <h1>Crypto Currencies</h1>
      </NavLink>
      <div className="navbar-brand">
        <div className="nav-item"><BsBatteryHalf className="navbar-icon" /></div>
        <div className="navbar-user">
          <div className="nav-item"><FaMicrophone className="navbar-icon" /></div>
          <div className="nav-item"><VscSettingsGear className="navbar-icon" /></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
