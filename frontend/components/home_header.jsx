import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = () => {
  const images = [window.burger, window.cupcakes, window.ribs, window.sushi, window.tacos]
  const image = images[Math.floor(Math.random()*images.length)];
  return (
  <nav className="signed-out">
    <img className="homePic" src={image}></img>
      <Link className="session-start" to="/login">Log In</Link>
      <Link className="session-start" to="/signup">Sign Up</Link>
  </nav>
)};


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
