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
    <div className="fixed-size-box">\
      {extraLinks()}
      {greeterSelector(currentUser, logout)}
    </div>
  </nav>
)};

export default HomeHeader;
