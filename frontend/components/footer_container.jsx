import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const aboutMe = () => {
  return (
    <div className="footer-column footer-me-div">
      <div className="footer-label footer-row name">
        <p className="footer-name-by">a website by</p>
        <a href="https://dannam.xyz"
          className="footer-me-name"
          target="_blank">
          Daniel Nam
        </a>
      </div>
      <div className="footer-row">
        <a className="footer-me-anchor"
          href="https://github.com/dannam83"
          target="_blank">
          <FontAwesome name='icon alt fa-github' className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="https://www.linkedin.com/in/daniel-nam-4032a0b/"
          target="_blank">
  				<FontAwesome name="icon alt fa-linkedin" className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="https://angel.co/daniel-nam-3?public_profile=1"
          target="_blank">
  				<FontAwesome name="icon alt fa-angellist" className="footer-me-FA" />
        </a>
  			<a className="footer-me-anchor"
          href="https://dannam.xyz/images/resume.pdf"
          target="_blank">
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

const footerPic = () => {
  return (
    <div className="footer-picture-div">
      <p className="footer-picture">Picture</p>
    </div>
  );
};

const walleBall = () => {
  return (
    <div className="walle-ball-container">
      <div className="walle-ball-div">
        <a href="https://dannam.xyz/Wall_E_Ball/"
          className="walle-ball-link-pic"
          target="_blank">
          <img className="walle-ball-pic" src={window.walleBall}></img>
        </a>
      </div>
      <div className="walle-ball-desc">
        <a href="https://dannam.xyz/Wall_E_Ball/"
          className="walle-ball-link"
          target="_blank">
          try playing Wall-E Ball!
        </a>
      </div>
    </div>
  );
};

const FooterContainer = () => {
  return (
    <div className="footer-master-container">
      <div className="footer-container">
        <div className="footer-top">
          {aboutMe()}
          {walleBall()}
        </div>
      </div>
      <div className="footer-pic-container">
        <img className="footer-pic" src={window.cityscape}></img>
      </div>
    </div>
  );
};

export default FooterContainer;
