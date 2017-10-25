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
        <div>
          <br/>
          <label>First Name
          <br/>
            <input
              type="text"
              onChange={this.update('fname')}
              />
          </label>
          <br/>
          <label>Last Name
          <br/>
            <input
              type="text"
              onChange={this.update('lname')}
              />
          </label>
        <br/>
        </div>
      );
    }
  }

  render() {
    const formType = this.props.formType;
    const otherType = formType === "Sign Up" ? "Log In" : "Sign Up";
    const otherUrl = formType === "Sign Up" ? "/login" : "/signup";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          {this.nameInput()}
          <label>Email
            <br/>
            <input
              type="text"
              onChange={this.update('email')}
              />
          </label>
          <br/>
          <label>Password
            <br/>
            <input
              type="text"
              onChange={this.update('password')}
              />
          </label>
          <br/>
          <input type="submit" value={formType}/>
          <br/>
          go to <Link to={otherUrl}>{otherType}</Link>
        </form>
      </div>
    );
  }

}

export default SessionForm;
