import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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
    );
  }

}

export default SessionForm;
