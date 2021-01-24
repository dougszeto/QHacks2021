import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SwipeButtons from './SwipeButton';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Preferences from './Preferences';

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path='/chats/:person'>
            <Header backButton='/chats'/>
            <ChatScreen/>
        </Route>
        <Route path='/chats'>
          <Header backButton='/'/>
          <Chats/>
        </Route>
        <Route path='/preferences'>
          <Header backButton='/'/>
          <Preferences />
        </Route>
        <Route path='/' exact>
          {/*Make sure homepage (default) stays at the bottom of routing list*/}
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
      </Router>

         
    </div>
  );
}

export default App;
