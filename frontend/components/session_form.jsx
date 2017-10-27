import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.setState = this.setState.bind(this);
    // this.state = {'email': "", 'password': ""};
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
        <ul>
          {this.props.errors.session.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      this.props.history.push('/')).then(
        this.setState({['email']: ""})).then(
          this.setState({['password']: ""})
        );
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
          <h1 className="intro-big">Want to get the full experience?</h1>
          <h2 className="intro-small">Sign in as a guest and check it out!</h2>
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

  // if want to add a birthday column to table
  // birthday(formType) {
  //   if (this.props.match.path === '/signup') {
  //     return(
  //       <div>
  //           <h3 className="birthday-text" id="birthday">Birthday</h3>
  //           <h3 className="birthday-text" id="optional">Optional</h3>
  //           <input
  //             className="form-input"
  //             type="text"
  //             onChange={this.update('month')}
  //             placeholder="ZIP Code"
  //             />
  //           <input
  //             className="form-input"
  //             type="text"
  //             onChange={this.update('day')}
  //             placeholder="ZIP Code"
  //             />
  //           <input
  //             className="form-input"
  //             type="text"
  //             onChange={this.update('year')}
  //             placeholder="ZIP Code"
  //             />
  //       </div>
  //     );
  //   }
  // }

  render() {
    const formType = this.props.formType;
    const signup = formType === "Sign Up";
    const otherType = signup ? "Log In" : "Sign Up";
    const otherUrl = signup ? "/login" : "/signup";
    const switchText = signup ? "Already on Eatery?" : "New to Eatery?";
    if (formType === "Guest") {
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
            <input className="form-button" type="submit" value="Sign in as a guest!"/>
            <br/>
            <h2 className="switch-comment">Or click here to get started today!</h2>
            <Link className="switch-link" to="./signup">Sign Up</Link>
          </form>
        </div>
      );
    } else {
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
              type="text"
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
    );}
  }

}

export default SessionForm;
