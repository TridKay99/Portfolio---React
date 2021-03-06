import React from 'react';
import './App.css';
import Nav from'./nav';
import About from './About'
import Home from './Home'
import Projects from './Projects'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
