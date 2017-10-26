import React from 'react';
import { Link } from 'react-router-dom';

const header = () => (
  <header className="session">
    <h1 className="logo">Eatery</h1>
    <img className="chefPic" src={window.chefPic}></img>
  </header>
);

const SessionHeader = ({currentUser, logout, location}) => {
  return (
    header()
  )
}

export default SessionHeader;
