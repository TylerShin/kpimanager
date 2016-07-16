import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import SigninModal from './signin/signin';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signinIsOpen: false,
    };
  }
  
  toggleModal() {
    this.setState({
      signinIsOpen: !this.state.signinIsOpen,
    });
  }
  
  render() {
    return (
      <div className="navbar-container">
        <AppBar
          title="Vingle KPI Manager"
          iconElementLeft={<span></span>}
        >
          <div className="navbar-item-button-wrapper">
            <RaisedButton label="Sign In" onTouchTap={() => { this.toggleModal(); }} />
            <Dialog
              title="Sign In"
              modal={false}
              open={this.state.signinIsOpen}
              contentStyle={{ width: '400px' }}
              onRequestClose={() => { this.toggleModal(); }}
            >
              <SigninModal closeFunc={() => { this.toggleModal(); }} />
            </Dialog>
          </div>
        </AppBar>
      </div>
    );
  }
}

// Navbar.propTypes = {
//   currentUser: ImmutablePropTypes.map.isRequired,
// };

export default Navbar;
