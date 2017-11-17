import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const aboutMe = () => {
  return (
    <div className="footer-column footer-me-div">
      <div className="footer-label footer-row name">
        <a href="http://dannam.xyz" className="footer-me-name">Daniel Nam</a>
      </div>
      <div className="footer-row">
        <a className="footer-me-anchor"
          href="http://github.com/dannam83">
          <FontAwesome name='icon alt fa-github' className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="https://www.linkedin.com/in/daniel-nam-4032a0b/">
  				<FontAwesome name="icon alt fa-linkedin" className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="https://angel.co/daniel-nam-3?public_profile=1">
  				<FontAwesome name="icon alt fa-angellist" className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="http://dannam.xyz/images/resume.pdf">
  				<FontAwesome name="icon alt fa-file-pdf-o" className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="mailto:dannam83@gmail.com">
  				<FontAwesome name="icon alt fa-envelope" className="footer-me-FA" />
        </a>
      </div>
    </div>
  );
};

const about = () => {
  return (
    <div className="footer-column">
      <p className="footer-label">About</p>
      <Link to="/" className="footer-link">About Yelp</Link>
      <Link to="/" className="footer-link">Careers</Link>
      <Link to="/" className="footer-link">Press</Link>
      <Link to="/" className="footer-link">Investor Relations</Link>
      <Link to="/" className="footer-link">Contest Guidelines</Link>
      <Link to="/" className="footer-link">Terms of Service</Link>
      <Link to="/" className="footer-link">Privacy Policy</Link>
      <Link to="/" className="footer-link">Ad Choices</Link>
    </div>
  );
};

const discover = () => {
  return (
    <div className="footer-column">
      <p className="footer-label">Discover</p>
      <Link to="/" className="footer-link">The Local Yelp</Link>
      <Link to="/" className="footer-link">Yelp Blog</Link>
      <Link to="/" className="footer-link">Support</Link>
      <Link to="/" className="footer-link">Yelp Mobile</Link>
      <Link to="/" className="footer-link">Developers</Link>
      <Link to="/" className="footer-link">RSS</Link>
    </div>
  );
};

const yelpForBusinessOwners = () => {
  return (
    <div className="footer-column">
      <p className="footer-label">Yelp for Business Owners</p>
      <Link to="/" className="footer-link">Claim your Business Page</Link>
      <Link to="/" className="footer-link">Advertise on Yelp</Link>
      <Link to="/" className="footer-link">Yelp Reservations</Link>
      <Link to="/" className="footer-link">Business Success Stories</Link>
      <Link to="/" className="footer-link">Business Support</Link>
      <Link to="/" className="footer-link">Yelp Blog for Business Owners</Link>
    </div>
  );
};

const international = () => {
  return (
    <div className="footer-column">
      <div>
        <p className="footer-label">Languages</p>
        <Link to="/" className="footer-link">English</Link>

      </div>
      <div>
        <p className="footer-label" id="footer-countries">Countries</p>
        <Link to="/" className="footer-link">United States</Link>

      </div>
    </div>
  );
};

const footer = () => {
  return (
    <div className="footer-columns">
      {about()}
      {discover()}
      {yelpForBusinessOwners()}
      {international()}
    </div>
  );
};

const footerPic = () => {
  return (
    <div className="footer-picture-div">
      <p className="footer-picture">Picture</p>
    </div>
  );
};

const FooterContainer = () => {
  return (
    <div className="footer-master-container">
      <div className="footer-container">
        {aboutMe()}
      </div>
      <div className="footer-pic-container">
        <img className="footer-pic" src={window.cityscape}>
        </img>
      </div>
    </div>
  );
};



export default FooterContainer;
