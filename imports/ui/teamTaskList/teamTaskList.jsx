import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { fromJS, List } from 'immutable';
import { TeamTasks } from '../../api/teamTasks';
import ImmutablePropTypes from 'react-immutable-proptypes';

class TeamTaskList extends React.Component {
  render() {
    return (
      <div className="team-task-list-container">
        Hello World
      </div>
    );
  }
}

TeamTaskList.propTypes = {
  teamId: React.PropTypes.string.isRequired,
  teamTasks: ImmutablePropTypes.list.isRequired,
};

export default createContainer(({ teamId }) => {
  Meteor.subscribe('teamTasks', { teamId });
  const teamTasks = fromJS(TeamTasks.find({ teamId }).fetch()) || List();
  return {
    teamTasks,
  };
}, TeamTaskList);
