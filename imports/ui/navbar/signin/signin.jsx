import { Meteor } from 'meteor/meteor';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SigninModal extends React.Component {
  handleSignIn() {
    const email = this.refs.email.input.value;
    const password = this.refs.password.input.value;
    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        alert(err.message);
      } else {
        this.props.closeFunc();
      }
    });
  }

  render() {
    return (
      <div className="signin-modal-component">
        <TextField
          hintText="email"
          ref="email"
        />
        <br />
        <TextField
          hintText="password"
          ref="password"
        />
        <br />
        <br />
        <RaisedButton onClick={() => { this.handleSignIn(); }} label="Submit" primary={true} />
        <br />
      </div>
    );
  }
}

SigninModal.propTypes = {
  closeFunc: React.PropTypes.func,
};

export default SigninModal;
