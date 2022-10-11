import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" end>
        <img className="back" src="https://img.icons8.com/ios/50/000000/back.png" alt="back" />
        <p>BACK</p>
      </NavLink>
      <NavLink to="/" className="navbar-brand">
        <img className="logo" src="https://i.imgur.com/3spxlXG.gif" alt="logo" />
      </NavLink>

      <ul className="navbar-nav">
        <li className="nav-item"><img className="nav-options" src="" alt="microphone" /></li>
        <li className="nav-item" />
        <li className="nav-item" />
      </ul>
    </nav>
  );
}

export default Navbar;
