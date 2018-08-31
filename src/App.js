import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Link } from 'react-router-dom';
import router from './routes';

class App extends Component {
  render() {
    return (
     
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Zip Zip</h1>
          </header>



          <Link to='/'>
            <p>DashBoard</p>
          </Link>
          <Link to='/Wizard' >
            <p>Wizard</p>
          </Link>

          { router }
        </div>
     
      
    );
  }
}

export default App;
