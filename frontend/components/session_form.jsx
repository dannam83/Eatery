import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.setState = this.setState.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]:e.target.value});
    };
  }

  renderErrors() {
    const errors = this.props.errors.session;
      if (errors) {
        return(
          new Alert (errors.responseJSON.errors)
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.email === "") {
      alert ("Please enter your email.");
    } else if (!this.state.password) {
      alert ("Please enter a password.");
    } else if (this.state.password.length < 6) {
      alert ("Password must be at least 6 characters long.");
    } else {
      this.props.processForm(this.state);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.responseJSON) {
      alert (nextProps.errors.responseJSON.errors);
    } else {
      this.setState({['email']: "", ['password']:""});
    }
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.processForm({['email']: "guest@hmail.com", ['password']: "asdf1234"}).then(
      this.props.history.push('/')
    );
  }

  intro(formType) {
    if (this.props.match.path === '/signup') {
      return(
        <div>
          <h1 className="intro-big">Sign Up for Eatery</h1>
          <h2 className="intro-small">Connect with great local businesses</h2>
        </div>
      );
    } else if (this.props.match.path === '/login') {
      return(
        <div>
          <h1 className="intro-big">Log In to Eatery</h1>
          <h2 className="intro-small">Welcome Back!</h2>
        </div>
      );
    } else {
      return(
        <div>
          <h1 className="intro-big">Want a taste?</h1>
          <h2 className="intro-small">Sign in as a guest and check us out!</h2>
        </div>
      );
    }
  }

  nameInput(formType) {
    if (this.props.match.path === '/signup') {
      return(
        <div className="form-name">
            <input
              className="input-name"
              type="text"
              onChange={this.update('fname')}
              placeholder="First Name"
              />
            <input
              className="input-name"
              type="text"
              onChange={this.update('lname')}
              placeholder="Last Name"
              />
        </div>
      );
    }
  }

  zipCode(formType) {
    if (this.props.match.path === '/signup') {
      return(
        <div>
            <input
              className="form-input"
              type="text"
              onChange={this.update('zipcode')}
              placeholder="ZIP Code"
              />
        </div>
      );
    }
  }

  birthday(formType) {
    if (this.props.match.path === '/signup') {
      return(
        <div>
            <h3 className="birthday-text" id="birthday">Birthday</h3>
            <h3 className="birthday-text" id="optional">Optional</h3>
            <input
              className="form-input"
              type="text"
              onChange={this.update('month')}
              placeholder="ZIP Code"
              />
            <input
              className="form-input"
              type="text"
              onChange={this.update('day')}
              placeholder="ZIP Code"
              />
            <input
              className="form-input"
              type="text"
              onChange={this.update('year')}
              placeholder="ZIP Code"
              />
        </div>
      );
    }
  }

  guestForm() {
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleGuest}>
          {this.renderErrors()}
          {this.intro()}
            <br/>
            <input
              className="form-input"
              id="email"
              type="text"
              value="Guest"
              onChange={this.update('email')}
              />
            <br/>
            <input
              className="form-input"
              id="password"
              type="text"
              value="Thanks for visiting!"
              onChange={this.update('password')}
              />
          <br/>
          <input className="form-button" type="submit" value="Click here to begin"/>
          <br/>
          <h2 className="switch-comment">Or click here to get make your own account!</h2>
          <Link className="switch-link" to="./signup">Sign Up</Link>
        </form>
      </div>
    );
  }

  sessionForm() {
    const formType = this.props.formType;
    const signup = formType === "Sign Up";
    const otherType = signup ? "Log In" : "Sign Up";
    const otherUrl = signup ? "/login" : "/signup";
    const switchText = signup ? "Already on Eatery?" : "New to Eatery?";
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          {this.intro()}
          {this.nameInput()}
            <br/>
            <input
              className="form-input"
              id="email"
              type="text"
              onChange={this.update('email')}
              placeholder="Email"
              />
            <br/>
            <input
              className="form-input"
              id="password"
              type="password"
              onChange={this.update('password')}
              placeholder="Password"
              />
          <br/>
          {this.zipCode()}
          <br/>
          <input className="form-button" type="submit" value={formType}/>
          <br/>
          <h2 className="switch-comment">{switchText}</h2>
          <Link className="switch-link" to={otherUrl}>{otherType}</Link>
        </form>
      </div>
    );
  }

  sidePic() {
    return (
      <div className="welcome-div">
        <img className="welcome-img" src={welcome}></img>
      </div>
    );
  }

  render() {
    if (this.props.formType === "Guest") {
      return (
        <div className="form-welcome-container">
          <div className="form-container">
            {this.guestForm()}
          </div>
          <div className="welcome-container">
            {this.sidePic()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="form-welcome-container">
          <div className="form-container">
            {this.sessionForm()}
          </div>
          <div className="welcome-container">
            {this.sidePic()}
          </div>
        </div>
    );}
  }

}

export default SessionForm;
