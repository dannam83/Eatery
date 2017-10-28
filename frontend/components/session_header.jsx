import React from 'react';
import { Link } from 'react-router-dom';


const banner = () => (
  <div className="header-container">
    <img className="star-logo" src={window.starLogo}></img>
    {header()}
  </div>
)

const header = () => (
  <header className="session">
    <Link to="/" className="logo">Eatery</Link>
    <a href="/">
      <img className="chefPic" src={window.chefLogo}></img>
    </a>
  </header>
);

const SessionHeader = ({currentUser, logout, location}) => {
  return (
    <div>
      {banner()}
    </div>
  )
}

export default SessionHeader;
