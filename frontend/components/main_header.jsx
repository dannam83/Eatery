import React from 'react';
import { Link } from 'react-router-dom';

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

const MainHeader = ({currentUser, logout, location}) => {
  return (
    currentUser ? greeter(currentUser, logout) : sessionLinks()
  )
}

export default MainHeader;
