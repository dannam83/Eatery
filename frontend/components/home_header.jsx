import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => {
  const images =
    [window.burger, window.cupcakes, window.ribs, window.sushi, window.tacos, window.steak]
  const image = images[Math.floor(Math.random()*images.length)];
  return (
  <nav className="signed-out">
    <img className="homePic" src={image}></img>
      <div className="blocker"></div>
      <div className="fixed-size-box">
        {extraLinks()}
        {links()}
      </div>
  </nav>
)};

const links = () => {
  return (
    <div className="session-choice">
      <Link className="session-start" to="/login">Log In</Link>
      <Link className="session-start" to="/signup">Sign Up</Link>
    </div>
  )
}

const extraLinks = () => {
  return (
    <div className="extra-choices">
      <Link className="extra-links" to="/guest">Guest</Link>
      <Link className="extra-links" to="/search">Restaurants</Link>
    </div>
  )
}


// <img className="homePic" src={window.steak}>
// </img>
const greeter = (currentUser, logout) => {
  const images = [window.burger, window.cupcakes, window.ribs, window.sushi, window.tacos]
  const image = images[Math.floor(Math.random()*images.length)];
  return (
  <nav className="signed-in">
    <img className="homePic" src={image}></img>
    <h3>{currentUser.fname} {currentUser.lname[0]}</h3>
    <Link onClick={logout} to="/login">Log Out</Link>
  </nav>
)};

const HomeHeader = ({currentUser, logout, location}) => {
  return (
    currentUser ? greeter(currentUser, logout) : sessionLinks()
  );
};

export default HomeHeader;
