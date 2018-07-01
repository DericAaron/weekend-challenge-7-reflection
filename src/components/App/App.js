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

class App extends Component {
  render() {
    return (
      <div className="App">
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
    );
  }
}

export default App;
