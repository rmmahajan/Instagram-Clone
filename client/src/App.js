import React from 'react';
import NavBar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
