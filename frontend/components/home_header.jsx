import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="signed-out">
    <Link className="session-start" to="/login">Log In</Link>
      &nbsp;&nbsp;
    <Link className="session-start" to="/signup">Sign Up</Link>
  </nav>
);

const greeter = (currentUser, logout) => (
  <nav className="signed-in">
    <h3>{currentUser.fname} {currentUser.lname[0]}</h3>
    <Link onClick={logout} to="/login">Log Out</Link>
  </nav>
);

const HomeHeader = ({currentUser, logout, location}) => {
  return (
    currentUser ? greeter(currentUser, logout) : sessionLinks()
  )
}

export default HomeHeader;
