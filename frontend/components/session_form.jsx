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
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const formType = this.props.formType;
    const otherType = formType === "Sign Up" ? "Log In" : "Sign Up";
    const otherUrl = formType === "Sign Up" ? "/login" : "/signup";
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
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
