import React from 'react';
import { Link } from 'react-router-dom';

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
        <p className="footer-label">Countries</p>
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
    <div>
      <div className="footer-container">
        {footer()}
      </div>
      <div className="footer-pic-container">
        {footerPic()}
      </div>
    </div>
  );
};



export default FooterContainer;
