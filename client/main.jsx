import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
    document.getElementById('render-target'));
});
