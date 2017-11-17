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

const extraLinks = (currentUser) => {
  let guest;
  if (currentUser) {
    guest = "Home"
  } else {
    guest = "Guest"
  }
  return (
    <div className="extra-choices-box">
      <div className="extra-choices">
        <Link className="extra-links" to="/guest">{guest}</Link>
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
        <h3 className="session-start">
          {currentUser.fname}
          <p className="home-header-lname">{currentUser.lname[0]}</p></h3>
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
      <Link to="/">
        <img className="bigChefPic" src={window.chefLogo}></img>
      </Link>
    </div>
  )
}

const mainSearch = () => {
  return (
    <form className="mainSearch">
      <span className="mainSearchLabel" id="mainSearchFirst">Find</span>
      <input className="mainSearchInput" type="text" placeholder="burgers, deli, italian, etc."/>
      <span className="mainSearchLabel" id="mainSearchSecond"><p className="shortBorder">Near</p></span>
      <input className="mainSearchInput" type="text" placeholder="Manhattan, NY"/>
      <input className="mainSearchSubmit" type="submit" id="mainSearchLast" value="Go"/>
    </form>
  )
}

// extra divs in between for inserting icons
const mainLinks = () => {
  return (
    <div className="mainLinks">
      <Link to="/search" className="mainLink">Restaurants</Link>
      <Link to="/" className="mainLink">Night Life</Link>
      <Link to="/" className="mainLink">Home Delivery</Link>
      <Link to="/" className="mainLink">Services</Link>
    </div>
  )
}
const designedBy = () => {
  return (
    <div className="designedBy">
      <div>
        <span className="designedByCreatedBy designedByItem designedByTop">a website created by</span>
        <a href="http://dannam.xyz" className="designedByName designedByItem designedByTop">Daniel Nam</a>
      </div>
    </div>
  )
}

const photoCred = (location, name, url) => {
  return (
    <div className="photoCred">
      <Link to={url} className="photoLocation">{location}</Link>
      <div className="photoCredName">Photo by<span to="/users/userId" className="photoName">{name}</span></div>
    </div>
  )
}

const HomeHeader = ({currentUser, logout, location}) => {
  const images = [
    [window.burger, "I <3 Burgers", "Jen K.", "/bizs/73"],
    [window.cupcakes, "Richard Sherman IceCream", "Valerie S.", "bizs/71"],
    [window.ribs, "Spaghetti Maghetti", "Tony L.", "bizs/72"],
    [window.sushi, "Happy Eats", "David N.", "/bizs/69"],
    [window.tacos, "Deli Licious", "Jill A.", "/bizs/64"],
    [window.steak, "Russell Wilson Steakhouse", "Kurt R.", "/bizs/70"]
  ]
  const imageInfo = images[Math.floor(Math.random()*images.length)];
  const image = imageInfo[0];
  const locale = imageInfo[1];
  const name = imageInfo[2];
  const url = imageInfo[3];
  return (
  <nav className="signed-out">
    <img className="homePic" src={image}></img>
    <div className="blocker"></div>
    <div className="fixed-size-box-organizer">
      <div className="fixed-size-box">
        {extraLinks(currentUser)}
        {greeterSelector(currentUser, logout)}
      </div>
      <div className="fixed-size-others">
        {mainLogo()}
        {mainSearch()}
        {designedBy()}
        {photoCred(locale, name, url)}
      </div>
    </div>
  </nav>
)};

export default HomeHeader;
