import React from 'react';
import { Link } from 'react-router-dom';

const header = () => (
  <header className="session">
    <Link to="/" className="logo">Eatery</Link>
    <a href="/">
      <img className="chefPic" src={window.chefPic}></img>
    </a>
  </header>
);

const SessionHeader = ({currentUser, logout, location}) => {
  return (
    header()
  )
}

export default SessionHeader;
