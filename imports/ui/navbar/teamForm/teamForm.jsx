import { Meteor } from 'meteor/meteor';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TeamForm extends React.Component {
  handleAddTeam() {
    const teamName = this.refs.teamName.input.value.toLowerCase();
    Meteor.call('teams.insert', {
      teamName,
    }, (err) => {
      if (err) {
        alert(err.message);
      } else {
        this.props.closeFunc();
      }
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Team Name"
          ref="teamName"
        />
        <br />
        <br />
        <RaisedButton onClick={() => { this.handleAddTeam(); }} label="Submit" primary={true} />
      </div>
    );
  }
}

TeamForm.propTypes = {
  closeFunc: React.PropTypes.func,
};

export default TeamForm;
