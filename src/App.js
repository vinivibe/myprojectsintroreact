import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import projectDetails from './components/ProjectDetails'
import { projects as Projects } from './components/Projects'
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='App'>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route exact path='/projects' component={Projects}/>
    <Route exact path='/projects/:projectid' component={projectDetails}/>
    </Switch>
  </div>
)

export default App;

