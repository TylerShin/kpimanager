import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import SigninModal from './signin/signin';
import TeamForm from './teamForm/teamForm';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signinIsOpen: false,
      addTeamIsOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      signinIsOpen: !this.state.signinIsOpen,
    });
  }

  toggleAddTeamModal() {
    this.setState({
      addTeamIsOpen: !this.state.addTeamIsOpen,
    });
  }

  render() {
    const { currentUser } = this.props;

    let rightMenu = (
      <div className="navbar-item-button-wrapper">
        <RaisedButton label="Sign In" onTouchTap={() => { this.toggleModal(); }} />
        <Dialog
          title="Sign In"
          modal={false}
          open={this.state.signinIsOpen}
          contentStyle={{ width: '400px' }}
          onRequestClose={() => { this.toggleModal(); }}
        >
          <div className="add-team-modal-wrapper">
            <SigninModal closeFunc={() => { this.toggleModal(); }} />
          </div>
        </Dialog>
      </div>
    );

    let teamAddBtn = null;
    // When user is in logged-in state
    if (!currentUser.isEmpty()) {
      rightMenu = (
        <div className="navbar-item">
          {currentUser.get('username')}
        </div>
      );
    }
    // When user is Admin
    if (!currentUser.isEmpty() && currentUser.getIn(['profile', 'admin'])) {
      teamAddBtn = (
        <div className="navbar-item">
          <div onTouchTap={() => { this.toggleAddTeamModal(); }}>Add Team</div>
          <Dialog
            title="Add Team"
            modal={false}
            open={this.state.addTeamIsOpen}
            contentStyle={{ width: '600px' }}
            onRequestClose={() => { this.toggleAddTeamModal(); }}
          >
            <TeamForm closeFunc={() => { this.toggleAddTeamModal(); }} />
          </Dialog>
        </div>
      );
    }

    return (
      <div className="navbar-container">
        <AppBar
          title="Vingle KPI Manager"
          iconElementLeft={<span></span>}
        >
          {teamAddBtn}
          {rightMenu}
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  currentUser: ImmutablePropTypes.map.isRequired,
};

export default Navbar;
