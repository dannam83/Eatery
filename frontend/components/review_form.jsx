import React from 'react';
import { Link } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setState = this.setState.bind(this);
  }
  // this.handleGuest = this.handleGuest.bind(this);

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

  sourcePath() {
    if (this.props.params.bizId) {
      return ("bizs");
    } else {
      return ("users");
    }
  }

  sourceId() {
    if (this.props.params.bizId) {
      return (this.props.params.bizId);
    } else {
      return (this.props.params.userId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(
    this.props.history.push(`/${sourcePath()}/${sourceId()}`));
  }

  // handleGuest(e) {
  //   e.preventDefault();
  //   this.props.processForm({['email']: "guest@hmail.com", ['password']: "asdf1234"}).then(
  //     this.props.history.push('/')
  //   );
  // }

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
    let submit="pick the button";
    return (
      <div className="review-form-master-expanding">
        <div className="review-form-master-fixed">

          <div className="review-form-left-div">
            this is on the left
          </div>
          <div className="review-form-right-div">
            this is on the right
          </div>

        </div>
      </div>
    );
  }

}

// if (this.props.formType === "Guest") {
//   return (
//     <div className="form-welcome-container">
//       <div className="form-container">
//         {this.guestForm()}
//       </div>
//       <div className="welcome-container">
//         {this.sidePic()}
//       </div>
//     </div>
//   );
// } else {
//   return (
//     <div className="form-welcome-container">
//       <div className="form-container">
//         {this.sessionForm()}
//       </div>
//       <div className="welcome-container">
//         {this.sidePic()}
//       </div>
//     </div>
// );}

export default ReviewForm;
