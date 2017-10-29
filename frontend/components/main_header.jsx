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
    <form className="search-default-div">
      <span className="search-default-label" id="search-default-first">Find</span>
      <input className="search-default-input" type="text" placeholder="burgers, deli, italian, etc."/>
      <span className="search-default-label" id="search-default-second"><p className="short-default-border">Near</p></span>
      <input className="search-default-input" type="text" placeholder="city, state"/>
      <input className="search-default-submit" type="submit" value="Go"/>
    </form>
  );
};

const mainHeaderSearch = (currentUser, logout, location) => {
  const userPresence = currentUser ? greeter(currentUser, logout) : sessionLinks();
  return (
    <div className="header-container-default">
      <img className="star-logo" src={window.starLogo}></img>
      <header className="header-default">
        {logo()}
        {searchBar()}
        {userPresence}
      </header>
    </div>
  );
};

const loginButton = (currentUser) => {
  if (!currentUser) {
    return (
      <Link to="/login" className="header-default-login">Log In</Link>
    )
  }
}

const mainHeaderLinks = (currentUser) => {
  return (
    <div className="header-default-links-container">
      <div className="header-default-links">
        <Link className="header-default-link" id="header-default-link-first" to="/search">Restaurants</Link>
        <Link className="header-default-link" to="/search">Nightlife</Link>
        <Link className="header-default-link" to="/search">Home Services</Link>
        <p className="header-default-link-period">.</p>
        <Link className="header-default-link" to="/search">Write a Review</Link>
        <Link className="header-default-link" to="/search">Events</Link>
        <Link className="header-default-link" to="/search">Talk</Link>
        <p className="header-default-space"></p>
        {loginButton(currentUser)}
      </div>
    </div>
  );
};

const MainHeader = ({currentUser, logout, location}) => {
  return (
    <div className="header-container-default-master">
      {mainHeaderSearch(currentUser, logout, location)}
      {mainHeaderLinks(currentUser)}
    </div>
  );
};

export default MainHeader;
