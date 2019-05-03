import React from 'react';
import { Link } from 'react-router-dom';

class HomeHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
    const images = [
      [window.cake, "Pastry Town", "Eli M.", "bizs/52"],
      [window.churro, "Richard Sherman Icecream", "Cam N.", "bizs/33"],
      [window.cupcakes, "Deli Licious", "Matt R.", "/bizs/26"],
      [window.dessert, "Happy Eats", "Drew B.", "/bizs/31"],
      [window.orangeDrink, "Russell Wilson Steakhouse", "Phillip R.", "/bizs/32"],
      [window.pancakes, "Deli-Kate", "Ben R.", "/bizs/29"],
      [window.pizza, "Italian Stallion", "Tom B.", "/bizs/36"],
      [window.salad, "Fancy Smancy", "Aaron R.", "/bizs/51"],
      [window.salmon, "Currean Express", "Carson W.", "/bizs/41"],
      [window.vineyard, "Jeter Kueger Steakhouse", "Alex S.", "/bizs/43"],
    ];
    this.state = {imageInfo: images[Math.floor(Math.random()*images.length)]};
  }

  componentDidMount () {
    this.props.fetchBizs();
  }

  update(field) {
    return (e) => {
      this.setState({[field]:e.target.value});
    };
  }

  componentDidUpdate() {
    this.props.fetchMatches(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchBizs(this.state).then(
      this.props.history.push("/search")
    );
  }

  links () {
    return (
      <div className="extra-choices-box2">
        <div className="session-choice">
          <Link className="session-start" id="login" to="/login">Log In</Link>
        </div>
        <div className="session-choice">
          <Link className="session-start" id="logging" to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }

  extraLinks (currentUser) {
    let guest;
    if (currentUser) {
      guest = "Home";
    } else {
      guest = "Guest";
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
    );
  }

  loginLinks (currentUser, logout) {
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
    );
  }

  greeterSelector (currentUser, logout) {
    return (
      currentUser ? this.loginLinks(currentUser, logout) : this.links()
    );
  }

  mainLogo () {
    return (
      <div className="mainLogo">
        <a href="/" className="bigLogo">Eatery</a>
        <a href="/">
          <img className="bigChefPic" src={window.chefLogo}></img>
        </a>
      </div>
    );
  }

  mainSearch () {
    return (
      <form className="mainSearch" onSubmit={this.handleSubmit}>
        <span className="mainSearchLabel" id="mainSearchFirst">Find</span>
        <input
          className="mainSearchInput"
          type="text"
          onChange={this.update('search')}
          placeholder="category or restaurant name"
          />
        <span className="mainSearchLabel" id="mainSearchSecond"><p className="shortBorder">Near</p></span>
        <input
          className="mainSearchInput"
          type="text"
          placeholder="Manhattan, NY"
        />
        <input className="mainSearchSubmit" type="submit" id="mainSearchLast" value="Go"/>
      </form>
    );
  }

  mainLinks () {
    return (
      <div className="mainLinks">
        <Link to="/search" className="mainLink">Restaurants</Link>
        <Link to="/" className="mainLink">Night Life</Link>
        <Link to="/" className="mainLink">Home Delivery</Link>
        <Link to="/" className="mainLink">Services</Link>
      </div>
    );
  }

  designedBy () {
    return (
      <div className="designedBy">
        <div>
          <span className="designedByCreatedBy designedByItem designedByTop">a website by</span>
          <a href="https://dannam.xyz"
            className="designedByName designedByItem designedByTop"
            target="_blank">
            Daniel Nam
          </a>
        </div>
      </div>
    );
  }

  photoCred (location, name, url) {
    return (
      <div className="photoCred">
        <Link to={url} className="photoLocation">{location}</Link>
        <div className="photoCredName">Photo by<span to="/users/userId" className="photoName">{name}</span></div>
      </div>
    );
  }

  render () {
    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    const location = this.props.location;
    const imageInfo = this.state.imageInfo;
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
          {this.extraLinks(currentUser)}
          {this.greeterSelector(currentUser, logout)}
        </div>
        <div className="fixed-size-others">
          {this.mainLogo()}
          {this.mainSearch()}
          {this.designedBy()}
          {this.photoCred(locale, name, url)}
        </div>
      </div>
    </nav>
  );}

}

export default HomeHeader;
