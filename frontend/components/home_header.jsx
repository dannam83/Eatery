import React from 'react';
import { Link } from 'react-router-dom';



const links = () => {
  return (
    <div className="extra-choices-box2">
      <div className="session-choice">
        <Link className="session-start" id="login" to="/login">Log In</Link>
      </div>
      <div className="session-choice">
        <Link className="session-start" id="logging" to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

const extraLinks = () => {
  return (
    <div className="extra-choices-box">
      <div className="extra-choices">
        <Link className="extra-links" to="/guest">Guest</Link>
      </div>
      <div className="extra-choices">
        <Link className="extra-links" to="/search">Restaurants</Link>
      </div>
    </div>
  )
}

const loginLinks = (currentUser, logout) => {
  return (
    <div className="extra-choices-box2">
      <div className="session-choice">
        <h3 className="session-start">{currentUser.fname} {currentUser.lname[0]}</h3>
      </div>
      <div className="session-choice">
        <Link className="session-start" id="logging" to="/login" onClick={logout}>Log Out</Link>
      </div>
    </div>
  )
}

const greeterSelector = (currentUser, logout) => {
  return (
    currentUser ? loginLinks(currentUser, logout) : links()
  )
}

const mainLogo = () => {
  return (
    <div className="mainLogo">
      <Link to="/" className="bigLogo">Eatery</Link>
      <a href="/">
        <img className="bigChefPic" src={window.chefLogo}></img>
      </a>
    </div>
  )
}

const mainSearch = () => {
  return (
    <div className="mainSearch">
      <Link to="/" className="logo">Search Bar</Link>
      <a href="/">
        <img className="chefPic" src={window.chefLogo}></img>
      </a>
    </div>
  )
}

const mainLinks = () => {
  return (
    <div className="mainLinks">
      <Link to="/" className="logo">Photo Cred</Link>
      <a href="/">
        <img className="chefPic" src={window.chefLogo}></img>
      </a>
    </div>
  )
}

const photoCred = () => {
  return (
    <div className="photoCred">
      <Link to="/" className="logo">Photo Cred</Link>
      <a href="/">
        <img className="chefPic" src={window.chefLogo}></img>
      </a>
    </div>
  )
}

const HomeHeader = ({currentUser, logout, location}) => {
  const images = [
    window.burger,
    window.cupcakes,
    window.ribs,
    window.sushi,
    window.tacos,
    window.steak
  ]
  const image = images[Math.floor(Math.random()*images.length)];
  return (
  <nav className="signed-out">
    <img className="homePic" src={image}></img>
    <div className="blocker"></div>
    <div className="fixed-size-box-organizer">
      <div className="fixed-size-box">
        {extraLinks()}
        {greeterSelector(currentUser, logout)}
      </div>
      <div className="fixed-size-others">
        {mainLogo()}
        {mainSearch()}
        {mainLinks()}
        {photoCred()}
      </div>
    </div>
  </nav>
)};

export default HomeHeader;
