import React, { Component } from 'react';

import {HashRouter as Router, Route} from 'react-router-dom';


import './App.css';
import Page1 from '../Pages/Page1/Page1';
import Page2 from '../Pages/Page2/Page2';
import Page3 from '../Pages/Page3/Page3';
import Page4 from '../Pages/Page4/Page4';
import Page5 from '../Pages/Page5/Page5';
import Admin from '../Admin/Admin';

import Header from '../Header/Header';

import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const styles = {
  root: {
    backgroundColor: '#FFFFFA',
  },
};

// https://material-ui.com/customization/themes/
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App grid-container">
          <Header />
          <br/>
          <Router>
            <div>
              <Route exact path="/" component={Page1}/>
              <Route exact path="/2" component={Page2}/>
              <Route exact path="/3" component={Page3}/>
              <Route exact path="/4" component={Page4}/>
              <Route exact path="/5" component={Page5}/>
              <Route exact path="/admin" component={Admin}/>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
