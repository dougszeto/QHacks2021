import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SwipeButtons from './SwipeButton';
import Preferences from './Preferences';

function App() {
  return (
    <div className="App">
     <Header />
     <Router>
      <Switch>
        <Route path='/chat'>
          <h1>I am chat page</h1>
        </Route>
        <Route path='/preferences'>
          <Preferences />
        </Route>
        <Route path='/'>
          {/*Make sure homepage (default) stays at the bottom of routing list*/}
          <TinderCards />
          {/* <SwipeButtons /> */}
        </Route>
      </Switch>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards*/}
        
      {/* Chats screen */}
      {/* Individual chat screen */}
      </Router>

         
    </div>
  );
}

export default App;
