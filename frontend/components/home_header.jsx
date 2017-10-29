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
    <form className="mainSearch">
      <span className="mainSearchLabel" id="mainSearchFirst">Find</span>
      <input className="mainSearchInput" type="text" placeholder="burgers, deli, italian, etc."/>
      <span className="mainSearchLabel" id="mainSearchSecond"><p className="shortBorder">Near</p></span>
      <input className="mainSearchInput" type="text" placeholder="Manhattan, NY"/>
      <input className="mainSearchSubmit" type="submit" id="mainSearchLast" value="Go"/>
    </form>
  )
}

const mainLinks = () => {
  return (
    <div className="mainLinks">
      <div>pic</div>
      <Link to="/" className="mainLink">Restaurants</Link>
      <div>pic</div>
      <Link to="/" className="mainLink">Night Life</Link>
      <div>pic</div>
      <Link to="/" className="mainLink">Home Delivery</Link>
      <div>pic</div>
      <Link to="/" className="mainLink">Services</Link>
    </div>
  )
}

const photoCred = (location, name) => {
  return (
    <div className="photoCred">
      <Link to="/biz/bizId" className="photoLocation">{location}</Link>
      <div className="photoCredName">Photo by<Link to="/users/userId" className="photoName">{name}</Link></div>
    </div>
  )
}

const HomeHeader = ({currentUser, logout, location}) => {
  const images = [
    [window.burger, "Burger Station", "Jen K."],
    [window.cupcakes, "Frosted City", "Valerie S."],
    [window.ribs, "Wild West Broiler", "Tony L."],
    [window.sushi, "Osaka Sushi", "David N."],
    [window.tacos, "Macho Taco", "Jill A."],
    [window.steak, "Jeter Mueger Steakhouse", "Kurt R."]
  ]
  const imageInfo = images[Math.floor(Math.random()*images.length)];
  const image = imageInfo[0];
  const locale = imageInfo[1];
  const name = imageInfo[2];
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
        {photoCred(locale,name)}
      </div>
    </div>
  </nav>
)};

export default HomeHeader;
