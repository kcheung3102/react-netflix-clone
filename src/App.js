import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Settings } from './components/Settings/Settings';

function App() {
  return (
    <Router>
    <div className="app">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route  exact path="/Settings" component={Settings} />
      </Switch>
    </div>
    </Router>
  );

}

export default App;
