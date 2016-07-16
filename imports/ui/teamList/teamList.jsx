import { Meteor } from 'meteor/meteor';
import React from 'react';
import { fromJS, List } from 'immutable';
import { Teams } from '../../api/teams';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { createContainer } from 'meteor/react-meteor-data';
import TeamItem from './teamItem/teamItem';

class TeamList extends React.Component {
  render() {
    const { teams } = this.props;
    const teamItemNodes = teams.map((team, index) => {
      return (
        <TeamItem team={team} key={index} />
      );
    });
    return (
      <div className="teamlist-container">
        {teamItemNodes}
      </div>
    );
  }
}

TeamList.propTypes = {
  currentUser: ImmutablePropTypes.map.isRequired,
  teams: ImmutablePropTypes.list.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('teams');
  const teams = fromJS(Teams.find().fetch()) || List();
  return {
    teams,
    currentUser: fromJS(Meteor.user()) || Map(),
  };
}, TeamList);
