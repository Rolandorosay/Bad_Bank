import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
//import Deposit from '.components/pages/deposit';
//import Withdraw from '.components/pages/withdraw';
//import UserData from '.components/pages/user-data';
//import SignUp from '.components/pages/sign-up';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/balance' exact />
        <Route path='/deposit' exact />
        <Route path='/withdraw' exact />
        <Route path='/user-data' exact />
        <Route path='/Sign-Up' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;
