import { Meteor } from 'meteor/meteor';
import React from 'react';
import { fromJS, Map } from 'immutable';
import { createContainer } from 'meteor/react-meteor-data';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Username extends React.Component {
  render() {
    return (
      <span className={this.props.className}>
        {this.props.user.get('username')}
      </span>
    );
  }
}

Username.propTypes = {
  userId: React.PropTypes.string,
  className: React.PropTypes.string,
  user: ImmutablePropTypes.map.isRequired,
};

export default createContainer(({ userId }) => {
  Meteor.subscribe('user', userId);
  const user = fromJS(Meteor.users.findOne(userId)) || Map();
  return {
    user,
  };
}, Username);
