import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import router from './routes';
import Header from './component/Header/header';
import {Provider}  from 'react-redux';
import store from './ducks/store';
import House from './component/Dashboard/house';
import Dashboard from './component/Dashboard/dashboard';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>

        <div className="App">
          <Header/>
          <Dashboard/>

          { router }
        </div>
        
      </Provider>

      
    );
  }
}

export default App;
