import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { fromJS, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createContainer } from 'meteor/react-meteor-data';
// import components
import Navbar from './navbar/navbar';
import AccountsUIWrapper from './AccountsUIWrapper';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <Navbar />
        <AccountsUIWrapper />
      </div>
    );
  }
}

App.propTypes = {
  currentUser: ImmutablePropTypes.map.isRequired,
};

export default createContainer(() => {
  return {
    currentUser: fromJS(Meteor.user()) || Map(),
  };
}, App);
