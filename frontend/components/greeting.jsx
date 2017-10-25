import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Log In</Link>
      &nbsp;&nbsp;
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const greeter = (currentUser, logout) => (
  <nav className="header-greeter">
    <h3>{currentUser.fname} {currentUser.lname[0]}</h3>
    <button onClick={logout}>Log Out</button>
  </nav>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? greeter(currentUser, logout) : sessionLinks()
);

export default Greeting;
