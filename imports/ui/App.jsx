import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { fromJS, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createContainer } from 'meteor/react-meteor-data';
// import components
import Navbar from './navbar/navbar';
import AccountsUIWrapper from './AccountsUIWrapper';
import TeamList from './teamList/teamList';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { currentUser } = this.props;

    let teamListCmp = null;
    // When user is in logged-in state
    if (!currentUser.isEmpty()) {
      teamListCmp = <TeamList />;
    }

    return (
      <div className="app-container">
        <Navbar currentUser={currentUser} />
        <AccountsUIWrapper />
        {teamListCmp}
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
