import React from 'react';
import { Link } from 'react-router-dom';

const logo = () => (
  <div className="logo-default-div">
    <Link to="/" className="logo-default">Eatery</Link>
    <a href="/">
      <img className="chefPic" id="default-chef" src={window.chefLogo}></img>
    </a>
  </div>
);

const sessionLinks = () => (
  <div className="signup-default-div">
    <Link className="signup-default" to="/signup">Sign Up</Link>
  </div>
);

const greeter = (currentUser, logout) => (
  <div className="greeter-default-div">
    <h3>{currentUser.fname} {currentUser.lname[0]}</h3>
    <Link onClick={logout} to="/login" className="logout-default">Log Out</Link>
  </div>
);

const searchBar = () => {
  return (
    <div className="search-default-div">
      <span className="search-default-label" id="search-default-first">Find</span>
      <input className="search-default-input" type="text" placeholder="burgers, deli, italian, etc."/>
      <span className="search-default-label" id="search-default-second"><p className="short-default-border">Near</p></span>
      <input className="search-default-input" type="text" placeholder="City, State"/>
      <input className="search-default-submit" id="search-default-last" value="Go"/>
    </div>
  );
};

const MainHeader = ({currentUser, logout, location}) => {
  const userPresence = currentUser ? greeter(currentUser, logout) : sessionLinks();
  return (
    <div className="header-container">
      <img className="star-logo" src={window.starLogo}></img>
      <header className="header-default">
        {logo()}
        {searchBar()}
        {userPresence}
      </header>
    </div>
  );
};

export default MainHeader;
