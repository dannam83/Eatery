import React from 'react';
import { Link } from 'react-router-dom';

const logo = () => (
  <header className="session">
    <Link to="/" className="logo">Eatery</Link>
    <a href="/">
      <img className="chefPic" src={window.chefLogo}></img>
    </a>
  </header>
);

const sessionLinks = () => (
  <nav className="login-signup">
    <h1>This header for everything else</h1>
    <Link className="session-login" to="/login">Log In</Link>
      &nbsp;&nbsp;
    <Link className="session-signup" to="/signup">Sign Up</Link>
  </nav>
);

const greeter = (currentUser, logout) => (
  <nav className="header-greeter">
    <h1>This header for everything else</h1>
    <h3>{currentUser.fname} {currentUser.lname[0]}</h3>
    <Link onClick={logout} to="/login">Log Out</Link>
  </nav>
);

const banner = (currentUser, logout, location) => {
  const sessions = currentUser ? greeter(currentUser, logout) : sessionLinks();
  return (
    <div className="header-container">
      <img className="star-logo" src={window.starLogo}></img>
      {logo()}

      {sessions}
    </div>
  );
};

// interpolate later, took away interpolation to allow linter
const MainHeader = ({currentUser, logout, location}) => {
  return (
    <div>
      {banner(currentUser, logout, location)}
    </div>
  );
};

export default MainHeader;
